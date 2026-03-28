import { useEffect, useMemo } from "react";
import { Footer } from "@/components/layout/Footer";
import scheduleData from "@/data/team-site-schedule.json";

type TeamAssignment = {
  teamName: string;
  siteName: string;
  siteCapacityKw: number | null;
  siteLocationAddress: string;
};

type DaySchedule = {
  date: string;
  teams: TeamAssignment[];
};

const schedule = scheduleData as DaySchedule[];

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
}

function formatKw(kw: number | null) {
  if (kw === null || Number.isNaN(kw)) return "";
  return Number.isInteger(kw) ? String(kw) : kw.toFixed(1);
}

function cellText(value: string) {
  return value.trim() === "" ? "—" : value;
}

export function SiteSchedulePage() {
  useEffect(() => {
    document.title = "Site schedule | Mahi Solar Energy";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Site schedule: Dinesh only 28–29 March; both teams from 30 March to 5 April 2026.",
      );
  }, []);

  const sortedDays = useMemo(
    () => [...schedule].sort((a, b) => a.date.localeCompare(b.date)),
    [],
  );

  return (
    <>
      <div className="container mx-auto max-w-6xl px-4 pt-28 pb-12">
        <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">Site schedule</h1>
        <p className="mb-8 text-muted-foreground">
          28–29 March: Dinesh team only. From 30 March: Dinesh and Yogesh teams — through 5 April 2026.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Date</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Team</th>
                <th className="px-4 py-3 font-semibold">Site name</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap text-right">Capacity (kW)</th>
                <th className="min-w-[220px] px-4 py-3 font-semibold">Location</th>
              </tr>
            </thead>
            <tbody>
              {sortedDays.map((day, dayIndex) =>
                day.teams.map((team, teamIndex) => (
                  <tr
                    key={`${day.date}-${team.teamName}`}
                    className={dayIndex % 2 === 0 ? "bg-card" : "bg-muted/40"}
                  >
                    {teamIndex === 0 ? (
                      <td
                        rowSpan={day.teams.length}
                        className="border-t border-border align-top px-4 py-3 font-medium whitespace-nowrap text-foreground"
                      >
                        {formatDate(day.date)}
                      </td>
                    ) : null}
                    <td className="border-t border-border px-4 py-3 font-medium whitespace-nowrap text-foreground">
                      {team.teamName}
                    </td>
                    <td className="border-t border-border px-4 py-3 text-foreground">
                      <span className={team.siteName.trim() === "" ? "text-muted-foreground" : ""}>
                        {cellText(team.siteName)}
                      </span>
                    </td>
                    <td className="border-t border-border px-4 py-3 text-right tabular-nums text-foreground">
                      <span
                        className={
                          team.siteCapacityKw === null ? "text-muted-foreground" : ""
                        }
                      >
                        {formatKw(team.siteCapacityKw) === "" ? "—" : `${formatKw(team.siteCapacityKw)} kW`}
                      </span>
                    </td>
                    <td className="border-t border-border px-4 py-3 leading-snug text-muted-foreground">
                      {cellText(team.siteLocationAddress)}
                    </td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

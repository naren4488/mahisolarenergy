import { useEffect, useMemo } from "react";
import { Lock } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import scheduleData from "@/data/team-site-schedule.json";

type TaskAssignment = {
  siteName: string;
  siteCapacityKw: number | null;
  siteLocationAddress: string;
  workNote: string;
  isLocked?: boolean;
};

type TeamDayBlock = {
  teamName: string;
  tasks: TaskAssignment[];
};

type DaySchedule = {
  date: string;
  teams: TeamDayBlock[];
};

const schedule = scheduleData as DaySchedule[];

type FlatRow = {
  day: DaySchedule;
  dayIndex: number;
  team: TeamDayBlock;
  task: TaskAssignment;
  rowInDay: number;
  dayRowCount: number;
  taskIndexInTeam: number;
};

function flattenSchedule(sortedDays: DaySchedule[]): FlatRow[] {
  return sortedDays.flatMap((day, dayIndex) => {
    const dayRowCount = day.teams.reduce((n, t) => n + t.tasks.length, 0);
    let rowInDay = 0;
    const rows: FlatRow[] = [];
    for (const team of day.teams) {
      team.tasks.forEach((task, taskIndexInTeam) => {
        rows.push({
          day,
          dayIndex,
          team,
          task,
          rowInDay,
          dayRowCount,
          taskIndexInTeam,
        });
        rowInDay += 1;
      });
    }
    return rows;
  });
}

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

/** Team columns only: Dinesh = light blue, Yogesh = white (date column uses its own alternating gray). */
function teamRowBgClass(teamName: string) {
  const dinesh = teamName.toLowerCase().includes("dinesh");
  if (dinesh) {
    return "bg-sky-50 dark:bg-sky-950/30";
  }
  return "bg-white dark:bg-zinc-950/70";
}

function dateColumnBgClass(dayIndex: number) {
  return dayIndex % 2 === 1
    ? "bg-neutral-200/55 dark:bg-muted/50"
    : "bg-white dark:bg-background";
}

function ScheduleLockBadge() {
  return (
    <span
      role="img"
      aria-label="Locked: confirmed assignment, not open for changes"
      title="Confirmed assignment — not open for changes"
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] font-semibold tracking-tight shadow-sm",
        "border-amber-300/90 bg-linear-to-b from-amber-50 to-amber-100/95 text-amber-950",
        "dark:border-amber-600/50 dark:from-amber-950/55 dark:to-amber-950/35 dark:text-amber-50",
        "ring-1 ring-amber-200/50 dark:ring-amber-800/40",
      )}
    >
      <Lock
        className="size-3.5 text-amber-700 dark:text-amber-300"
        strokeWidth={2.25}
        aria-hidden
      />
      <span aria-hidden>Locked</span>
    </span>
  );
}

export function SiteSchedulePage() {
  useEffect(() => {
    document.title = "Site schedule | Mahi Solar Energy";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Site schedule: upcoming Dinesh and Yogesh team site assignments.",
      );
  }, []);

  const sortedDays = useMemo(
    () => [...schedule].sort((a, b) => a.date.localeCompare(b.date)),
    [],
  );

  const flatRows = useMemo(() => flattenSchedule(sortedDays), [sortedDays]);

  return (
    <>
      <div className="container mx-auto max-w-6xl px-4 pt-28 pb-12">
        <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">Site schedule</h1>
        <p className="mb-8 text-muted-foreground">
          Upcoming assignments for Dinesh and Yogesh teams — dates and sites as listed below. Teams can
          have multiple tasks on the same day.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Date</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Team</th>
                <th className="px-4 py-3 font-semibold">Client</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap text-right">Capacity (kW)</th>
                <th className="min-w-[200px] px-4 py-3 font-semibold">Location</th>
                <th className="min-w-[200px] px-4 py-3 font-semibold">Work / note</th>
              </tr>
            </thead>
            <tbody>
              {flatRows.map((row) => {
                const { day, dayIndex, team, task, rowInDay, dayRowCount, taskIndexInTeam } = row;
                const teamRowSpan = team.tasks.length;
                const rowBg = teamRowBgClass(team.teamName);

                return (
                  <tr key={`${day.date}-${team.teamName}-${taskIndexInTeam}-${task.siteName}-${task.workNote}`}>
                    {rowInDay === 0 ? (
                      <td
                        rowSpan={dayRowCount}
                        className={cn(
                          dateColumnBgClass(dayIndex),
                          "border-y-0 border-l-0 border-t border-border border-r-2 border-r-border/60 align-top px-4 py-3 font-medium whitespace-nowrap text-foreground",
                        )}
                      >
                        {formatDate(day.date)}
                      </td>
                    ) : null}
                    {taskIndexInTeam === 0 ? (
                      <td
                        rowSpan={teamRowSpan}
                        className={cn(
                          rowBg,
                          "border-t border-border align-top px-4 py-3 font-medium whitespace-nowrap text-foreground",
                        )}
                      >
                        {team.teamName}
                      </td>
                    ) : null}
                    <td className={cn(rowBg, "border-t border-border px-4 py-3 text-foreground")}>
                      <span className={task.siteName.trim() === "" ? "text-muted-foreground" : ""}>
                        {cellText(task.siteName)}
                      </span>
                    </td>
                    <td
                      className={cn(
                        rowBg,
                        "border-t border-border px-4 py-3 text-right tabular-nums text-foreground",
                      )}
                    >
                      <span
                        className={task.siteCapacityKw === null ? "text-muted-foreground" : ""}
                      >
                        {formatKw(task.siteCapacityKw) === ""
                          ? "—"
                          : `${formatKw(task.siteCapacityKw)} kW`}
                      </span>
                    </td>
                    <td
                      className={cn(
                        rowBg,
                        "border-t border-border px-4 py-3 leading-snug text-muted-foreground",
                      )}
                    >
                      {cellText(task.siteLocationAddress)}
                    </td>
                    <td
                      className={cn(
                        rowBg,
                        "border-t border-border px-4 py-3 leading-snug text-foreground",
                      )}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5">
                        <span
                          className={
                            (task.workNote ?? "").trim() === "" ? "text-muted-foreground" : ""
                          }
                        >
                          {cellText(task.workNote ?? "")}
                        </span>
                        {task.isLocked === true ? <ScheduleLockBadge /> : null}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span
            aria-hidden
            className="inline-flex items-center gap-1.5 rounded-md border border-amber-300/80 bg-amber-50/90 px-2 py-1 font-medium text-amber-950 dark:border-amber-700/50 dark:bg-amber-950/35 dark:text-amber-100"
          >
            <Lock className="size-3.5 text-amber-700 dark:text-amber-300" strokeWidth={2.25} />
            Locked
          </span>
          <span className="max-w-md leading-relaxed">
            <strong className="font-medium text-foreground">Locked</strong> tasks are confirmed and not
            open for changes in this schedule.
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
}

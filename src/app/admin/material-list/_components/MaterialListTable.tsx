"use client";

import { useMemo } from "react";
import { MaterialListItem } from "@/types/material-list";

interface MaterialListTableProps {
  data: MaterialListItem[];
}

export function MaterialListTable({ data }: MaterialListTableProps) {
  // Determine row colors based on category changes - memoized for consistency
  const rowColors = useMemo(() => {
    if (!data || data.length === 0) return [];
    
    const colors: string[] = [];
    let currentCategory = "";
    let colorIndex = 0; // 0 = green-50, 1 = white

    data.forEach((item) => {
      const category = (item.category || "").trim();
      // Only change color when category actually changes and is not empty
      if (category !== "" && category !== currentCategory) {
        currentCategory = category;
        colorIndex = colorIndex === 0 ? 1 : 0; // Toggle between 0 and 1
      }
      // colorIndex 0 = green-50, colorIndex 1 = white
      colors.push(colorIndex === 0 ? "bg-green-50" : "bg-white");
    });

    return colors;
  }, [data]);

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No material list data available.
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="min-w-full inline-block align-middle">
        <div className="overflow-hidden border border-border rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-muted">
              <tr>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Category
                </th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Sr. No.
                </th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Material
                </th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Size
                </th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Rate
                </th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Total Amount
                </th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Note
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`${rowColors[index]} transition-colors`}
                >
                  <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-sm text-foreground">
                    {item.category || ''}
                  </td>
                  <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-sm text-foreground">
                    {item.srNo || '-'}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-sm text-foreground">
                    {item.material || '-'}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-sm text-foreground">
                    {item.size || '-'}
                  </td>
                  <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-sm text-foreground">
                    {item.quantity || '-'}
                  </td>
                  <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-sm text-foreground">
                    {item.rate || '-'}
                  </td>
                  <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-sm text-foreground">
                    {item.totalAmount || '-'}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-sm text-muted-foreground max-w-xs truncate">
                    {item.note || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


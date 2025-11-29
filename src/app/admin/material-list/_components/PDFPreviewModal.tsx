"use client";

import { useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MaterialListItem } from "@/types/material-list";
import { exportMaterialListToPDF } from "@/lib/pdf-generator";

interface PDFPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: MaterialListItem[];
}

export function PDFPreviewModal({
  open,
  onOpenChange,
  data,
}: PDFPreviewModalProps) {
  const previewRows = useMemo(() => {
    if (!data || data.length === 0) return [];

    const rows: (MaterialListItem & { background: string })[] = [];
    let currentCategory = "";
    let colorIndex = 0; // 0 = green-50, 1 = white

    data.forEach((item) => {
      const category = (item.category || "").trim();
      if (category !== "" && category !== currentCategory) {
        currentCategory = category;
        colorIndex = colorIndex === 0 ? 1 : 0;
      }
      rows.push({
        ...item,
        background: colorIndex === 0 ? "bg-green-50" : "bg-white",
      });
    });

    return rows;
  }, [data]);

  const handleExport = () => {
    exportMaterialListToPDF(data);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-[80vw] max-h-[95vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Export Preview</DialogTitle>
          <DialogDescription>
            Preview of the PDF document (A4 size). Review the content before exporting.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-auto">
          <div
            className="mx-auto bg-white shadow-lg border border-border rounded-md p-1"
            style={{
              width: "794px",
              maxWidth: "100%",
            }}
          >
            <div
              className="bg-white rounded overflow-hidden"
              style={{
                minHeight: "1123px",
              }}
            >
              <div className="px-6 py-6 space-y-4">
                <div className="text-center mb-4">
                  <h2 className="text-xl font-semibold text-foreground">
                    Residential Material List
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Generated on {new Date().toLocaleString()}
                  </p>
                </div>
                {previewRows.length === 0 ? (
                  <div className="py-12 text-center text-muted-foreground border border-dashed border-border rounded">
                    No data available to preview.
                  </div>
                ) : (
                  <div className="overflow-hidden border border-border rounded">
                    <table className="w-full text-[11px] leading-tight">
                      <thead className="bg-primary text-white">
                        <tr>
                          {[
                            "Category",
                            "Sr. No.",
                            "Material",
                            "Size",
                            "Quantity",
                            "Rate",
                            "Total Amount",
                          ].map((header) => (
                            <th
                              key={header}
                              className="px-2 py-2 text-left font-semibold uppercase tracking-wide text-[10px]"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {previewRows.map((row, index) => (
                          <tr
                            key={index}
                            className={`${row.background} border-b border-border`}
                          >
                            <td className="px-2 py-2">{row.category || ""}</td>
                            <td className="px-2 py-2">{row.srNo || "-"}</td>
                            <td className="px-2 py-2">{row.material || "-"}</td>
                            <td className="px-2 py-2">{row.size || "-"}</td>
                            <td className="px-2 py-2">{row.quantity || "-"}</td>
                            <td className="px-2 py-2">{row.rate || "-"}</td>
                            <td className="px-2 py-2">{row.totalAmount || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleExport}>Download PDF</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


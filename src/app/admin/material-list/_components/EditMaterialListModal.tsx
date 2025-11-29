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

interface EditMaterialListModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: MaterialListItem[];
  onChange: (updatedData: MaterialListItem[]) => void;
  onSave: () => void;
  onCancel: () => void;
}

export function EditMaterialListModal({
  open,
  onOpenChange,
  data,
  onChange,
  onSave,
  onCancel,
}: EditMaterialListModalProps) {

  // Determine row colors based on category changes
  const rowColors = useMemo(() => {
    if (!data || data.length === 0) return [];

    const colors: string[] = [];
    let currentCategory = "";
    let colorIndex = 0; // 0 = green-50, 1 = white

    data.forEach((item) => {
      const category = (item.category || "").trim();
      if (category !== "" && category !== currentCategory) {
        currentCategory = category;
        colorIndex = colorIndex === 0 ? 1 : 0;
      }
      colors.push(colorIndex === 0 ? "bg-green-50" : "bg-white");
    });

    return colors;
  }, [data]);

  // Handle field change
  const handleFieldChange = (
    index: number,
    field: keyof MaterialListItem,
    value: string
  ) => {
    const updated = [...data];
    const nextRow = {
      ...updated[index],
      [field]: value,
    };

    // Auto-calculate total amount when both quantity and rate are provided
    if (field === "quantity" || field === "rate") {
      const qty = parseFloat(
        field === "quantity" ? value : nextRow.quantity || ""
      );
      const rate = parseFloat(field === "rate" ? value : nextRow.rate || "");

      if (!Number.isNaN(qty) && !Number.isNaN(rate)) {
        const total = qty * rate;
        nextRow.totalAmount = Number.isFinite(total)
          ? total.toFixed(2)
          : nextRow.totalAmount || "";
      } else {
        nextRow.totalAmount = "";
      }
    }

    updated[index] = nextRow;
    onChange(updated);
  };

  // Handle save
  const handleSave = () => {
    onSave();
  };

  // Handle cancel
  const handleCancel = () => {
    onCancel();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-[80vw] max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Edit Material List</DialogTitle>
          <DialogDescription>
            Edit the material list. Changes are temporary and will be lost on page refresh.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-auto -mx-6 px-6">
          <div className="w-full overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-hidden border border-border rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-border">
                  <thead className="bg-muted sticky top-0 z-10">
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
                        {/* Category - Read-only */}
                        <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-sm text-foreground">
                          {item.category || ""}
                        </td>
                        {/* Sr. No. - Read-only */}
                        <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-sm text-foreground">
                          {item.srNo || "-"}
                        </td>
                        {/* Material - Editable */}
                        <td className="px-3 sm:px-4 py-3 text-sm">
                          <input
                            type="text"
                            value={item.material || ""}
                            onChange={(e) =>
                              handleFieldChange(index, "material", e.target.value)
                            }
                            className="w-full px-2 py-1 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </td>
                        {/* Size - Editable */}
                        <td className="px-3 sm:px-4 py-3 text-sm">
                          <input
                            type="text"
                            value={item.size || ""}
                            onChange={(e) =>
                              handleFieldChange(index, "size", e.target.value)
                            }
                            className="w-full px-2 py-1 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </td>
                        {/* Quantity - Editable */}
                        <td className="px-3 sm:px-4 py-3 text-sm">
                          <input
                            type="text"
                            value={item.quantity || ""}
                            onChange={(e) =>
                              handleFieldChange(
                                index,
                                "quantity",
                                e.target.value
                              )
                            }
                            className="w-full px-2 py-1 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </td>
                        {/* Rate - Editable */}
                        <td className="px-3 sm:px-4 py-3 text-sm">
                          <input
                            type="text"
                            value={item.rate || ""}
                            onChange={(e) =>
                              handleFieldChange(index, "rate", e.target.value)
                            }
                            className="w-full px-2 py-1 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </td>
                        {/* Total Amount - Read-only */}
                        <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-sm text-foreground">
                          {item.totalAmount || "-"}
                        </td>
                        {/* Note - Editable */}
                        <td className="px-3 sm:px-4 py-3 text-sm">
                          <input
                            type="text"
                            value={item.note || ""}
                            onChange={(e) =>
                              handleFieldChange(index, "note", e.target.value)
                            }
                            className="w-full px-2 py-1 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


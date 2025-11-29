"use client";

import { PenSquare, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingActionButtonsProps {
  onEdit: () => void;
  onExport: () => void;
  isEditDisabled?: boolean;
  isExportDisabled?: boolean;
}

export function FloatingActionButtons({
  onEdit,
  onExport,
  isEditDisabled = false,
  isExportDisabled = false,
}: FloatingActionButtonsProps) {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      <Button
        type="button"
        onClick={onEdit}
        disabled={isEditDisabled}
        className="shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center gap-2"
      >
        <PenSquare className="h-4 w-4" aria-hidden="true" />
        Edit
      </Button>
      <Button
        type="button"
        variant="outline"
        onClick={onExport}
        disabled={isExportDisabled}
        className="shadow-md hover:shadow-lg flex items-center gap-2"
      >
        <FileDown className="h-4 w-4" aria-hidden="true" />
        Export PDF
      </Button>
    </div>
  );
}


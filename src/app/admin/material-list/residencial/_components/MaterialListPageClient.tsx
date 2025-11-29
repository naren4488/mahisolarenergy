"use client";

import { useState, useEffect } from "react";
import { MaterialListItem } from "@/types/material-list";
import { MaterialListTable } from "../../_components/MaterialListTable";
import { EditMaterialListModal } from "../../_components/EditMaterialListModal";
import { PDFPreviewModal } from "../../_components/PDFPreviewModal";
import { FloatingActionButtons } from "../../_components/FloatingActionButtons";

interface MaterialListPageClientProps {
  initialData: MaterialListItem[];
  error?: string | null;
}

export function MaterialListPageClient({ initialData, error }: MaterialListPageClientProps) {
  // State management
  const [editedData, setEditedData] = useState<MaterialListItem[]>(initialData);
  const [draftData, setDraftData] = useState<MaterialListItem[]>(initialData);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  // Update state when initialData changes (e.g., on page refresh)
  useEffect(() => {
    setEditedData(initialData);
    setDraftData(initialData);
  }, [initialData]);

  const cloneData = (items: MaterialListItem[]) =>
    items.map((item) => ({ ...item }));

  const handleOpenEdit = () => {
    setDraftData(cloneData(editedData));
    setIsEditModalOpen(true);
  };

  // Handle save edit - updates the displayed data
  const handleSaveEdit = () => {
    setEditedData(draftData);
    setIsEditModalOpen(false);
  };

  // Handle cancel edit - discards changes
  const handleCancelEdit = () => {
    setDraftData(cloneData(editedData));
    setIsEditModalOpen(false);
  };

  // Handle export - opens preview modal
  const handleExport = () => {
    setIsPreviewModalOpen(true);
  };

  return (
    <>
      {error ? (
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-destructive mb-2">
            Error Loading Data
          </h2>
          <p className="text-destructive/80">{error}</p>
          <p className="text-sm text-muted-foreground mt-4">
            Please check your internet connection and try again later.
          </p>
        </div>
      ) : (
        <MaterialListTable data={editedData} />
      )}

      {/* Edit Modal */}
      <EditMaterialListModal
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        data={draftData}
        onChange={setDraftData}
        onSave={handleSaveEdit}
        onCancel={handleCancelEdit}
      />

      {/* PDF Preview Modal */}
      <PDFPreviewModal
        open={isPreviewModalOpen}
        onOpenChange={setIsPreviewModalOpen}
        data={editedData}
      />

      {/* Floating Action Buttons */}
      {!error && editedData.length > 0 && (
        <FloatingActionButtons onEdit={handleOpenEdit} onExport={handleExport} />
      )}
    </>
  );
}


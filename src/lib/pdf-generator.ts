import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { MaterialListItem } from "@/types/material-list";

interface ExportOptions {
  title?: string;
  filename?: string;
}

/**
 * Generate and download the material list PDF
 */
export function exportMaterialListToPDF(
  data: MaterialListItem[],
  options: ExportOptions = {}
) {
  const { title = "Residential Material List", filename } = options;

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const generatedAt = new Date().toLocaleString();

  doc.setFontSize(16);
  doc.text(title, pageWidth / 2, 18, { align: "center" });

  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text(`Generated on ${generatedAt}`, pageWidth / 2, 25, {
    align: "center",
  });
  doc.setTextColor(0);

  autoTable(doc, {
    startY: 32,
    head: [
      [
        "Category",
        "Sr. No.",
        "Material",
        "Size",
        "Quantity",
        "Rate",
        "Total Amount",
      ],
    ],
    body: data.map((item) => [
      item.category || "",
      item.srNo || "-",
      item.material || "-",
      item.size || "-",
      item.quantity || "-",
      item.rate || "-",
      item.totalAmount || "-",
    ]),
    styles: {
      fontSize: 9,
      cellPadding: 2,
      lineColor: [240, 240, 240],
      lineWidth: 0.15,
      valign: "middle",
    },
    headStyles: {
      fillColor: [74, 128, 80],
      textColor: 255,
      fontSize: 10,
    },
    alternateRowStyles: {
      fillColor: [247, 252, 249],
    },
    bodyStyles: {
      minCellHeight: 8,
    },
    columnStyles: {
      0: { cellWidth: 24 },
      1: { cellWidth: 16 },
      2: { cellWidth: 45 },
      3: { cellWidth: 30 },
      4: { cellWidth: 20 },
      5: { cellWidth: 25 },
      6: { cellWidth: 30 },
    },
    willDrawCell: (dataCell) => {
      if (dataCell.row.index % 2 === 0 && dataCell.section === "body") {
        dataCell.cell.styles.fillColor = [247, 252, 249];
      }
    },
    margin: { top: 32, bottom: 20, left: 12, right: 12 },
  });

  // Draw page numbers after all pages are created
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(9);
    doc.setTextColor(120);
    doc.text(
      `Page ${i} of ${totalPages}`,
      pageWidth - 16,
      doc.internal.pageSize.getHeight() - 10,
      { align: "right" }
    );
  }

  const safeFilename =
    filename ||
    `material-list-${new Date().toISOString().replace(/[:.]/g, "-")}.pdf`;

  doc.save(safeFilename);
}


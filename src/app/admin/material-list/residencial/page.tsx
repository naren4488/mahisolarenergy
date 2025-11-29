import { MaterialListPageClient } from "./_components/MaterialListPageClient";
import { fetchGoogleSheetsCSV } from "@/lib/csv-parser";
import { MaterialListItem } from "@/types/material-list";

const GOOGLE_SHEET_ID = "1-M1iRSm_VCHwmwwrD3XJN9UbqJBMgH2L7crsOuQn5aI";

async function getMaterialListData(): Promise<MaterialListItem[]> {
  try {
    const rows = await fetchGoogleSheetsCSV(GOOGLE_SHEET_ID);
    
    if (rows.length < 2) {
      return [];
    }
    
    // Skip header row (row 0) and process data rows
    const dataRows = rows.slice(1);
    
    const materialList: MaterialListItem[] = dataRows
      .map((row) => {
        // Ensure row has at least 8 columns, pad with empty strings if needed
        const paddedRow = [...row, ...Array(8 - row.length).fill('')];
        
        return {
          category: paddedRow[0] || '',
          srNo: paddedRow[1] || '',
          material: paddedRow[2] || '',
          size: paddedRow[3] || '',
          quantity: paddedRow[4] || '',
          rate: paddedRow[5] || '',
          totalAmount: paddedRow[6] || '',
          note: paddedRow[7] || '',
        };
      })
      .filter((item) => {
        // Filter out completely empty rows
        return (
          item.category ||
          item.srNo ||
          item.material ||
          item.size ||
          item.quantity ||
          item.rate ||
          item.totalAmount ||
          item.note
        );
      });
    
    return materialList;
  } catch (error) {
    console.error("Error fetching material list:", error);
    throw error;
  }
}

export default async function ResidentialMaterialListPage() {
  let materialListData: MaterialListItem[] = [];
  let error: string | null = null;

  try {
    materialListData = await getMaterialListData();
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to load material list data";
  }

  return (
    <div className="container mx-auto px-4 pb-8 pt-24 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Residential Material List
        </h1>
        <p className="text-muted-foreground">
          Complete list of materials required for residential solar installations
        </p>
      </div>

      <MaterialListPageClient initialData={materialListData} error={error} />
    </div>
  );
}


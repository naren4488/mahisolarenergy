export interface MaterialListItem {
  category: string;
  srNo: string;
  material: string;
  size: string;
  quantity: string;
  rate: string;
  totalAmount: string;
  note: string;
}

export interface MaterialListData {
  items: MaterialListItem[];
}


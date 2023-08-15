export interface SubCategory {
  id: number,
  title: string,
  created_at: string,
  updated_at: string,
  pivot: {
    category_id: 3,
    subcategory_id: 7
  }
  slug: string;
}

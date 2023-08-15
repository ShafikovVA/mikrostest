import { SubCategory } from '../sub-category/type';

export interface Category {
  created_at: string;
  description: string;
  id: number;
  image: string;
  is_visible: number;
  title: string;
  updated_at: string;
  alter_name: string;
  slug: string;
  mobile_image: string;
  subcategories: SubCategory[];
}

export interface Categories {
  categories: Category[];
}

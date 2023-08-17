import { Brand } from '@/entities/brand/type';
import { SubCategory } from '@/entities/sub-category/type';
import { Category } from '@/entities/category/type';

export interface FullCategory extends Category {
  subcategories: SubCategory[];
}

export interface FullBrand extends Brand {
  subcategories: SubCategory[];
  category: {
    id: number,
    title: string,
    slug: string
  },
}

export interface ResponseOnBrandsFetch {
  brands: Brand[];
  categories: FullCategory[];
}

export interface ResponseOnAllBrands {
  brands: FullBrand[];
  categories: FullCategory[];
}

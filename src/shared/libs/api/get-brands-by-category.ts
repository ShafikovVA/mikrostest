import { Categories } from '@/entities/category';
import { ResponseOnBrandsFetch } from '@/shared/types/response';

export const getBrandsByCategory = async (categorySlug: string) => {
  const fetchedCategories = await fetch('https://api.mikros74.ru/api/categories');

  const categoriesData = await fetchedCategories.json() as Categories;

  const categoryIndex = categoriesData.categories.findIndex((categoryData) => categorySlug === categoryData.slug);

  const fetchedBrands = await fetch(`https://api.mikros74.ru/api/categories/${categoriesData.categories[categoryIndex].id}/brands`);

  const data = await fetchedBrands.json() as ResponseOnBrandsFetch;

  // console.log(fetchedBrands);
  return data;
};

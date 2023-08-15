import { Categories } from '@/entities/category';

export const getCategories = async () => {
  // try {
  const fetchedCategories = await fetch('https://api.mikros74.ru/api/categories');
  const data = await fetchedCategories.json() as Categories;

  return data;
  // } catch (error) {
  //   console.log(error);
  //   return error;
  // }
};

import { ResponseOnAllBrands } from '@/shared/types/response';

export const getAllBrands = async () => {
  const fetchedAllBrands = await fetch('https://api.mikros74.ru/api/brands');
  const fetchedAllBrandsData = await fetchedAllBrands.json() as ResponseOnAllBrands;

  return fetchedAllBrandsData.brands;
};

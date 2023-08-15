import type { NextApiRequest, NextApiResponse } from 'next';
import { Categories } from '@/entities/category/type';
import { getCategories } from '@/shared/libs/api/get-categories';
import { getAllBrands } from '@/shared/libs/api/get-all-brands';
import { FullBrand, ResponseOnBrandsFetch } from '@/shared/types/response';
import { getBrandsByCategory } from '@/shared/libs/api/get-brands-by-category';

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseOnBrandsFetch | undefined>) => {
  const { categorySlug } = req.query;
  const data = await getBrandsByCategory(categorySlug as string);
  console.log(data);
  res.status(200).json(data);
};

export default handler;

import type { NextApiRequest, NextApiResponse } from 'next';
import { Categories } from '@/entities/category/type';
import { getCategories } from '@/shared/libs/api/get-categories';
import { getAllBrands } from '@/shared/libs/api/get-all-brands';
import { FullBrand } from '@/shared/types/response';

const handler = async (req: NextApiRequest, res: NextApiResponse<FullBrand[] | undefined>) => {
  const data = await getAllBrands();
  console.log(data);
  res.status(200).json(data);
};

export default handler;

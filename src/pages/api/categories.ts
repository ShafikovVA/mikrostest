// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Categories } from '@/entities/category/type';
import { getCategories } from '@/shared/libs/api/get-categories';

const handler = async (req: NextApiRequest, res: NextApiResponse<Categories | undefined>) => {
  const data = await getCategories();
  console.log(data);
  res.status(200).json(data);
};

export default handler;

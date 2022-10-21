// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Property from '../../db/models/Property';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == 'POST') {
    const newProperty = Property.create({ ...req.body });

    res.status(200).json({ name: req.body });
  }
  if (req.method == 'GET') {
    const data = Property.findAll();
    res.status(200).json({ name: data });
  }
}

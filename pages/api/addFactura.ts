import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: any, res: any) => {
  const data = req.body;
  console.log(data);
  
  try {
    const result = await prisma.factura.create({
      data: {
        ...data,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: 'Error occured while adding a new factura.' });
  }
};

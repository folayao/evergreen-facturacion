import { PrismaClient } from '.prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import React from 'react'


const prisma = new PrismaClient();

const facturasGuardado = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // if (req.method == 'POST') {
        //     prisma.factura.create({
            
        //     })
        // }
        if (req.method == 'GET') {
            const fac = await prisma.factura.findMany();
            res.status(200).json(fac)
        }
    } catch (error) {

    }
}

export default facturasGuardado;
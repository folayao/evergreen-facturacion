import 'reflect-metadata';
import 'ts-tiny-invariant'
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors'
import { buildSchema } from 'type-graphql'
import { resolvers } from '../../prisma/generated/type-graphql';
import prisma from '../../config/prisma'

// const prisma = new PrismaClient();

const cors = Cors({
    allowMethods: ['POST', 'GET', 'OPTIONS', 'HEAD']
})

interface Context {
    prisma: PrismaClient;
}
export const config = {
    api:{
        bodyParser: false,
    },
}


const serverGraphql = async (req: NextApiRequest, res: NextApiResponse) => {
    const schema = await buildSchema({
        resolvers: resolvers,
        validate: false
    })
    const server = new ApolloServer({
        schema: schema,
        introspection: true,
        context: (): Context => ({ prisma })
    });
    const start = server.start()
    await start;
    return server.createHandler({
        path: '/api/graphql'
    })(req, res)
}


export default cors((req:any, res:any) => {
    if (req.method === "OPTIONS") {
        res.end()
        return false;
    }
    return serverGraphql(req,res);
})

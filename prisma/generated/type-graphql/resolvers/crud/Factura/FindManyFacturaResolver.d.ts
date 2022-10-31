import { GraphQLResolveInfo } from "graphql";
import { FindManyFacturaArgs } from "./args/FindManyFacturaArgs";
import { Factura } from "../../../models/Factura";
export declare class FindManyFacturaResolver {
    facturas(ctx: any, info: GraphQLResolveInfo, args: FindManyFacturaArgs): Promise<Factura[]>;
}

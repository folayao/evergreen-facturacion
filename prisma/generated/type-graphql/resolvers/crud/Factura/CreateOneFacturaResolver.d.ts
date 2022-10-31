import { GraphQLResolveInfo } from "graphql";
import { CreateOneFacturaArgs } from "./args/CreateOneFacturaArgs";
import { Factura } from "../../../models/Factura";
export declare class CreateOneFacturaResolver {
    createOneFactura(ctx: any, info: GraphQLResolveInfo, args: CreateOneFacturaArgs): Promise<Factura>;
}

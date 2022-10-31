import { GraphQLResolveInfo } from "graphql";
import { FindFirstFacturaArgs } from "./args/FindFirstFacturaArgs";
import { Factura } from "../../../models/Factura";
export declare class FindFirstFacturaResolver {
    findFirstFactura(ctx: any, info: GraphQLResolveInfo, args: FindFirstFacturaArgs): Promise<Factura | null>;
}

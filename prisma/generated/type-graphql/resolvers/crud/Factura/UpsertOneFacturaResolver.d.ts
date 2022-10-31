import { GraphQLResolveInfo } from "graphql";
import { UpsertOneFacturaArgs } from "./args/UpsertOneFacturaArgs";
import { Factura } from "../../../models/Factura";
export declare class UpsertOneFacturaResolver {
    upsertOneFactura(ctx: any, info: GraphQLResolveInfo, args: UpsertOneFacturaArgs): Promise<Factura>;
}

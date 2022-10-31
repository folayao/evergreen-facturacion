import { GraphQLResolveInfo } from "graphql";
import { UpdateOneFacturaArgs } from "./args/UpdateOneFacturaArgs";
import { Factura } from "../../../models/Factura";
export declare class UpdateOneFacturaResolver {
    updateOneFactura(ctx: any, info: GraphQLResolveInfo, args: UpdateOneFacturaArgs): Promise<Factura | null>;
}

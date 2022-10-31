import { GraphQLResolveInfo } from "graphql";
import { DeleteOneFacturaArgs } from "./args/DeleteOneFacturaArgs";
import { Factura } from "../../../models/Factura";
export declare class DeleteOneFacturaResolver {
    deleteOneFactura(ctx: any, info: GraphQLResolveInfo, args: DeleteOneFacturaArgs): Promise<Factura | null>;
}

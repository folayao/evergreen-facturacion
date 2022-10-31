import { GraphQLResolveInfo } from "graphql";
import { FindUniqueFacturaArgs } from "./args/FindUniqueFacturaArgs";
import { Factura } from "../../../models/Factura";
export declare class FindUniqueFacturaResolver {
    factura(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFacturaArgs): Promise<Factura | null>;
}

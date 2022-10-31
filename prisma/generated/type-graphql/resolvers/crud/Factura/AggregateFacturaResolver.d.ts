import { GraphQLResolveInfo } from "graphql";
import { AggregateFacturaArgs } from "./args/AggregateFacturaArgs";
import { AggregateFactura } from "../../outputs/AggregateFactura";
export declare class AggregateFacturaResolver {
    aggregateFactura(ctx: any, info: GraphQLResolveInfo, args: AggregateFacturaArgs): Promise<AggregateFactura>;
}

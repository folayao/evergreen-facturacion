import { GraphQLResolveInfo } from "graphql";
import { GroupByFacturaArgs } from "./args/GroupByFacturaArgs";
import { FacturaGroupBy } from "../../outputs/FacturaGroupBy";
export declare class GroupByFacturaResolver {
    groupByFactura(ctx: any, info: GraphQLResolveInfo, args: GroupByFacturaArgs): Promise<FacturaGroupBy[]>;
}

import { GraphQLResolveInfo } from "graphql";
import { UpdateManyFacturaArgs } from "./args/UpdateManyFacturaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyFacturaResolver {
    updateManyFactura(ctx: any, info: GraphQLResolveInfo, args: UpdateManyFacturaArgs): Promise<AffectedRowsOutput>;
}

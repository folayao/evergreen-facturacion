import { GraphQLResolveInfo } from "graphql";
import { DeleteManyFacturaArgs } from "./args/DeleteManyFacturaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyFacturaResolver {
    deleteManyFactura(ctx: any, info: GraphQLResolveInfo, args: DeleteManyFacturaArgs): Promise<AffectedRowsOutput>;
}

import { GraphQLResolveInfo } from "graphql";
import { CreateManyFacturaArgs } from "./args/CreateManyFacturaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyFacturaResolver {
    createManyFactura(ctx: any, info: GraphQLResolveInfo, args: CreateManyFacturaArgs): Promise<AffectedRowsOutput>;
}

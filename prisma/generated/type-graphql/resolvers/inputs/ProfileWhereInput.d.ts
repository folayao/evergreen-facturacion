import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ProfileWhereInput {
    AND?: ProfileWhereInput[] | undefined;
    OR?: ProfileWhereInput[] | undefined;
    NOT?: ProfileWhereInput[] | undefined;
    id?: IntFilter | undefined;
    bio?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: IntFilter | undefined;
}

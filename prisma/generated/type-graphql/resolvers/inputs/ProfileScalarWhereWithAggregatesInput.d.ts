import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProfileScalarWhereWithAggregatesInput {
    AND?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    bio?: StringWithAggregatesFilter | undefined;
    userId?: IntWithAggregatesFilter | undefined;
}

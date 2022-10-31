import { Factura } from "../../../models/Factura";
import { Profile } from "../../../models/Profile";
import { User } from "../../../models/User";
import { UserFacturasArgs } from "./args/UserFacturasArgs";
export declare class UserRelationsResolver {
    facturas(user: User, ctx: any, args: UserFacturasArgs): Promise<Factura[]>;
    profile(user: User, ctx: any): Promise<Profile | null>;
}

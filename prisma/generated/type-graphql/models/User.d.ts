import { Factura } from "../models/Factura";
import { Profile } from "../models/Profile";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: number;
    email: string;
    nombre?: string | null;
    role: "CLIENT" | "ADMIN";
    facturas?: Factura[];
    profile?: Profile | null;
    _count?: UserCount | null;
}

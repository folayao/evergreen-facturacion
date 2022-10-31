import { Factura } from "../../../models/Factura";
import { User } from "../../../models/User";
export declare class FacturaRelationsResolver {
    cliente(factura: Factura, ctx: any): Promise<User>;
}

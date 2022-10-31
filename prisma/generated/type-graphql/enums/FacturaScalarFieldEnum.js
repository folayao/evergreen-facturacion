"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var FacturaScalarFieldEnum;
(function (FacturaScalarFieldEnum) {
    FacturaScalarFieldEnum["id"] = "id";
    FacturaScalarFieldEnum["createdAt"] = "createdAt";
    FacturaScalarFieldEnum["moneda"] = "moneda";
    FacturaScalarFieldEnum["monto"] = "monto";
    FacturaScalarFieldEnum["pais"] = "pais";
    FacturaScalarFieldEnum["esEfectivo"] = "esEfectivo";
    FacturaScalarFieldEnum["published"] = "published";
    FacturaScalarFieldEnum["clienteId"] = "clienteId";
})(FacturaScalarFieldEnum = exports.FacturaScalarFieldEnum || (exports.FacturaScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(FacturaScalarFieldEnum, {
    name: "FacturaScalarFieldEnum",
    description: undefined,
});

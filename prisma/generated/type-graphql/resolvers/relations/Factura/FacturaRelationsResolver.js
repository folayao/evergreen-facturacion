"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Factura_1 = require("../../../models/Factura");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let FacturaRelationsResolver = class FacturaRelationsResolver {
    async cliente(factura, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.findUnique({
            where: {
                id: factura.id,
            },
        }).cliente({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Factura_1.Factura, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturaRelationsResolver.prototype, "cliente", null);
FacturaRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Factura_1.Factura)
], FacturaRelationsResolver);
exports.FacturaRelationsResolver = FacturaRelationsResolver;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneFacturaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneFacturaArgs_1 = require("./args/DeleteOneFacturaArgs");
const Factura_1 = require("../../../models/Factura");
const helpers_1 = require("../../../helpers");
let DeleteOneFacturaResolver = class DeleteOneFacturaResolver {
    async deleteOneFactura(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Factura_1.Factura, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneFacturaArgs_1.DeleteOneFacturaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneFacturaResolver.prototype, "deleteOneFactura", null);
DeleteOneFacturaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Factura_1.Factura)
], DeleteOneFacturaResolver);
exports.DeleteOneFacturaResolver = DeleteOneFacturaResolver;

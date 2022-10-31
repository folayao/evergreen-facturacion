"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneFacturaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneFacturaArgs_1 = require("./args/UpdateOneFacturaArgs");
const Factura_1 = require("../../../models/Factura");
const helpers_1 = require("../../../helpers");
let UpdateOneFacturaResolver = class UpdateOneFacturaResolver {
    async updateOneFactura(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneFacturaArgs_1.UpdateOneFacturaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneFacturaResolver.prototype, "updateOneFactura", null);
UpdateOneFacturaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Factura_1.Factura)
], UpdateOneFacturaResolver);
exports.UpdateOneFacturaResolver = UpdateOneFacturaResolver;

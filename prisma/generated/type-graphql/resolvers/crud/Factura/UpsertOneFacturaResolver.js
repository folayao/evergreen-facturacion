"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneFacturaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneFacturaArgs_1 = require("./args/UpsertOneFacturaArgs");
const Factura_1 = require("../../../models/Factura");
const helpers_1 = require("../../../helpers");
let UpsertOneFacturaResolver = class UpsertOneFacturaResolver {
    async upsertOneFactura(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Factura_1.Factura, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneFacturaArgs_1.UpsertOneFacturaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneFacturaResolver.prototype, "upsertOneFactura", null);
UpsertOneFacturaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Factura_1.Factura)
], UpsertOneFacturaResolver);
exports.UpsertOneFacturaResolver = UpsertOneFacturaResolver;

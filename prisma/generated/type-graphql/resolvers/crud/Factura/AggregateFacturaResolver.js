"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFacturaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateFacturaArgs_1 = require("./args/AggregateFacturaArgs");
const Factura_1 = require("../../../models/Factura");
const AggregateFactura_1 = require("../../outputs/AggregateFactura");
const helpers_1 = require("../../../helpers");
let AggregateFacturaResolver = class AggregateFacturaResolver {
    async aggregateFactura(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateFactura_1.AggregateFactura, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateFacturaArgs_1.AggregateFacturaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateFacturaResolver.prototype, "aggregateFactura", null);
AggregateFacturaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Factura_1.Factura)
], AggregateFacturaResolver);
exports.AggregateFacturaResolver = AggregateFacturaResolver;

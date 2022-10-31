"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFacturaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByFacturaArgs_1 = require("./args/GroupByFacturaArgs");
const Factura_1 = require("../../../models/Factura");
const FacturaGroupBy_1 = require("../../outputs/FacturaGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByFacturaResolver = class GroupByFacturaResolver {
    async groupByFactura(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FacturaGroupBy_1.FacturaGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByFacturaArgs_1.GroupByFacturaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByFacturaResolver.prototype, "groupByFactura", null);
GroupByFacturaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Factura_1.Factura)
], GroupByFacturaResolver);
exports.GroupByFacturaResolver = GroupByFacturaResolver;

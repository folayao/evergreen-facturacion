"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateFacturaArgs_1 = require("./args/AggregateFacturaArgs");
const CreateManyFacturaArgs_1 = require("./args/CreateManyFacturaArgs");
const CreateOneFacturaArgs_1 = require("./args/CreateOneFacturaArgs");
const DeleteManyFacturaArgs_1 = require("./args/DeleteManyFacturaArgs");
const DeleteOneFacturaArgs_1 = require("./args/DeleteOneFacturaArgs");
const FindFirstFacturaArgs_1 = require("./args/FindFirstFacturaArgs");
const FindManyFacturaArgs_1 = require("./args/FindManyFacturaArgs");
const FindUniqueFacturaArgs_1 = require("./args/FindUniqueFacturaArgs");
const GroupByFacturaArgs_1 = require("./args/GroupByFacturaArgs");
const UpdateManyFacturaArgs_1 = require("./args/UpdateManyFacturaArgs");
const UpdateOneFacturaArgs_1 = require("./args/UpdateOneFacturaArgs");
const UpsertOneFacturaArgs_1 = require("./args/UpsertOneFacturaArgs");
const helpers_1 = require("../../../helpers");
const Factura_1 = require("../../../models/Factura");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateFactura_1 = require("../../outputs/AggregateFactura");
const FacturaGroupBy_1 = require("../../outputs/FacturaGroupBy");
let FacturaCrudResolver = class FacturaCrudResolver {
    async aggregateFactura(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyFactura(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneFactura(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyFactura(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneFactura(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstFactura(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async facturas(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async factura(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByFactura(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyFactura(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneFactura(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneFactura(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], FacturaCrudResolver.prototype, "aggregateFactura", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyFacturaArgs_1.CreateManyFacturaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturaCrudResolver.prototype, "createManyFactura", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Factura_1.Factura, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneFacturaArgs_1.CreateOneFacturaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturaCrudResolver.prototype, "createOneFactura", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyFacturaArgs_1.DeleteManyFacturaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturaCrudResolver.prototype, "deleteManyFactura", null);
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
], FacturaCrudResolver.prototype, "deleteOneFactura", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Factura_1.Factura, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFacturaArgs_1.FindFirstFacturaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturaCrudResolver.prototype, "findFirstFactura", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Factura_1.Factura], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyFacturaArgs_1.FindManyFacturaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturaCrudResolver.prototype, "facturas", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Factura_1.Factura, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFacturaArgs_1.FindUniqueFacturaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturaCrudResolver.prototype, "factura", null);
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
], FacturaCrudResolver.prototype, "groupByFactura", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyFacturaArgs_1.UpdateManyFacturaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturaCrudResolver.prototype, "updateManyFactura", null);
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
], FacturaCrudResolver.prototype, "updateOneFactura", null);
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
], FacturaCrudResolver.prototype, "upsertOneFactura", null);
FacturaCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Factura_1.Factura)
], FacturaCrudResolver);
exports.FacturaCrudResolver = FacturaCrudResolver;

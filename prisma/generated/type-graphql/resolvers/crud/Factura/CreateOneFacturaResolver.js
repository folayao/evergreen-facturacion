"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneFacturaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneFacturaArgs_1 = require("./args/CreateOneFacturaArgs");
const Factura_1 = require("../../../models/Factura");
const helpers_1 = require("../../../helpers");
let CreateOneFacturaResolver = class CreateOneFacturaResolver {
    async createOneFactura(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).factura.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneFacturaArgs_1.CreateOneFacturaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneFacturaResolver.prototype, "createOneFactura", null);
CreateOneFacturaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Factura_1.Factura)
], CreateOneFacturaResolver);
exports.CreateOneFacturaResolver = CreateOneFacturaResolver;

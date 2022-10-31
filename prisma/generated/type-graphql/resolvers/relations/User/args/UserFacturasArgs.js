"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFacturasArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaOrderByWithRelationInput_1 = require("../../../inputs/FacturaOrderByWithRelationInput");
const FacturaWhereInput_1 = require("../../../inputs/FacturaWhereInput");
const FacturaWhereUniqueInput_1 = require("../../../inputs/FacturaWhereUniqueInput");
const FacturaScalarFieldEnum_1 = require("../../../../enums/FacturaScalarFieldEnum");
let UserFacturasArgs = class UserFacturasArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereInput_1.FacturaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaWhereInput_1.FacturaWhereInput)
], UserFacturasArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaOrderByWithRelationInput_1.FacturaOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFacturasArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereUniqueInput_1.FacturaWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaWhereUniqueInput_1.FacturaWhereUniqueInput)
], UserFacturasArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserFacturasArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserFacturasArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaScalarFieldEnum_1.FacturaScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserFacturasArgs.prototype, "distinct", void 0);
UserFacturasArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserFacturasArgs);
exports.UserFacturasArgs = UserFacturasArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFacturaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaOrderByWithAggregationInput_1 = require("../../../inputs/FacturaOrderByWithAggregationInput");
const FacturaScalarWhereWithAggregatesInput_1 = require("../../../inputs/FacturaScalarWhereWithAggregatesInput");
const FacturaWhereInput_1 = require("../../../inputs/FacturaWhereInput");
const FacturaScalarFieldEnum_1 = require("../../../../enums/FacturaScalarFieldEnum");
let GroupByFacturaArgs = class GroupByFacturaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereInput_1.FacturaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaWhereInput_1.FacturaWhereInput)
], GroupByFacturaArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaOrderByWithAggregationInput_1.FacturaOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFacturaArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaScalarFieldEnum_1.FacturaScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFacturaArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaScalarWhereWithAggregatesInput_1.FacturaScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaScalarWhereWithAggregatesInput_1.FacturaScalarWhereWithAggregatesInput)
], GroupByFacturaArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFacturaArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFacturaArgs.prototype, "skip", void 0);
GroupByFacturaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByFacturaArgs);
exports.GroupByFacturaArgs = GroupByFacturaArgs;

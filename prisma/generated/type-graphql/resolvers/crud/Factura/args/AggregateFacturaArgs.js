"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFacturaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaOrderByWithRelationInput_1 = require("../../../inputs/FacturaOrderByWithRelationInput");
const FacturaWhereInput_1 = require("../../../inputs/FacturaWhereInput");
const FacturaWhereUniqueInput_1 = require("../../../inputs/FacturaWhereUniqueInput");
let AggregateFacturaArgs = class AggregateFacturaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereInput_1.FacturaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaWhereInput_1.FacturaWhereInput)
], AggregateFacturaArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaOrderByWithRelationInput_1.FacturaOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateFacturaArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereUniqueInput_1.FacturaWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaWhereUniqueInput_1.FacturaWhereUniqueInput)
], AggregateFacturaArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateFacturaArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateFacturaArgs.prototype, "skip", void 0);
AggregateFacturaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateFacturaArgs);
exports.AggregateFacturaArgs = AggregateFacturaArgs;

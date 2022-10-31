"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let FacturaSumOrderByAggregateInput = class FacturaSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaSumOrderByAggregateInput.prototype, "monto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaSumOrderByAggregateInput.prototype, "clienteId", void 0);
FacturaSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaSumOrderByAggregateInput", {
        isAbstract: true
    })
], FacturaSumOrderByAggregateInput);
exports.FacturaSumOrderByAggregateInput = FacturaSumOrderByAggregateInput;

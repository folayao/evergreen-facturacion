"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaAvgOrderByAggregateInput_1 = require("../inputs/FacturaAvgOrderByAggregateInput");
const FacturaCountOrderByAggregateInput_1 = require("../inputs/FacturaCountOrderByAggregateInput");
const FacturaMaxOrderByAggregateInput_1 = require("../inputs/FacturaMaxOrderByAggregateInput");
const FacturaMinOrderByAggregateInput_1 = require("../inputs/FacturaMinOrderByAggregateInput");
const FacturaSumOrderByAggregateInput_1 = require("../inputs/FacturaSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let FacturaOrderByWithAggregationInput = class FacturaOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaOrderByWithAggregationInput.prototype, "moneda", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaOrderByWithAggregationInput.prototype, "monto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaOrderByWithAggregationInput.prototype, "pais", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaOrderByWithAggregationInput.prototype, "esEfectivo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaOrderByWithAggregationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaOrderByWithAggregationInput.prototype, "clienteId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaCountOrderByAggregateInput_1.FacturaCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaCountOrderByAggregateInput_1.FacturaCountOrderByAggregateInput)
], FacturaOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaAvgOrderByAggregateInput_1.FacturaAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaAvgOrderByAggregateInput_1.FacturaAvgOrderByAggregateInput)
], FacturaOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaMaxOrderByAggregateInput_1.FacturaMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaMaxOrderByAggregateInput_1.FacturaMaxOrderByAggregateInput)
], FacturaOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaMinOrderByAggregateInput_1.FacturaMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaMinOrderByAggregateInput_1.FacturaMinOrderByAggregateInput)
], FacturaOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaSumOrderByAggregateInput_1.FacturaSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaSumOrderByAggregateInput_1.FacturaSumOrderByAggregateInput)
], FacturaOrderByWithAggregationInput.prototype, "_sum", void 0);
FacturaOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaOrderByWithAggregationInput", {
        isAbstract: true
    })
], FacturaOrderByWithAggregationInput);
exports.FacturaOrderByWithAggregationInput = FacturaOrderByWithAggregationInput;

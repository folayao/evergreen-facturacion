"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let FacturaAvgOrderByAggregateInput = class FacturaAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaAvgOrderByAggregateInput.prototype, "monto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaAvgOrderByAggregateInput.prototype, "clienteId", void 0);
FacturaAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaAvgOrderByAggregateInput", {
        isAbstract: true
    })
], FacturaAvgOrderByAggregateInput);
exports.FacturaAvgOrderByAggregateInput = FacturaAvgOrderByAggregateInput;

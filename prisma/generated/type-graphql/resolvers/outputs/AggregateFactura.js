"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFactura = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaAvgAggregate_1 = require("../outputs/FacturaAvgAggregate");
const FacturaCountAggregate_1 = require("../outputs/FacturaCountAggregate");
const FacturaMaxAggregate_1 = require("../outputs/FacturaMaxAggregate");
const FacturaMinAggregate_1 = require("../outputs/FacturaMinAggregate");
const FacturaSumAggregate_1 = require("../outputs/FacturaSumAggregate");
let AggregateFactura = class AggregateFactura {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaCountAggregate_1.FacturaCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaCountAggregate_1.FacturaCountAggregate)
], AggregateFactura.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaAvgAggregate_1.FacturaAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaAvgAggregate_1.FacturaAvgAggregate)
], AggregateFactura.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaSumAggregate_1.FacturaSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaSumAggregate_1.FacturaSumAggregate)
], AggregateFactura.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaMinAggregate_1.FacturaMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaMinAggregate_1.FacturaMinAggregate)
], AggregateFactura.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaMaxAggregate_1.FacturaMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaMaxAggregate_1.FacturaMaxAggregate)
], AggregateFactura.prototype, "_max", void 0);
AggregateFactura = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateFactura", {
        isAbstract: true
    })
], AggregateFactura);
exports.AggregateFactura = AggregateFactura;

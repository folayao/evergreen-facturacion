"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaAvgAggregate_1 = require("../outputs/FacturaAvgAggregate");
const FacturaCountAggregate_1 = require("../outputs/FacturaCountAggregate");
const FacturaMaxAggregate_1 = require("../outputs/FacturaMaxAggregate");
const FacturaMinAggregate_1 = require("../outputs/FacturaMinAggregate");
const FacturaSumAggregate_1 = require("../outputs/FacturaSumAggregate");
let FacturaGroupBy = class FacturaGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], FacturaGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FacturaGroupBy.prototype, "moneda", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaGroupBy.prototype, "monto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FacturaGroupBy.prototype, "pais", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaGroupBy.prototype, "esEfectivo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], FacturaGroupBy.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaGroupBy.prototype, "clienteId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaCountAggregate_1.FacturaCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaCountAggregate_1.FacturaCountAggregate)
], FacturaGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaAvgAggregate_1.FacturaAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaAvgAggregate_1.FacturaAvgAggregate)
], FacturaGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaSumAggregate_1.FacturaSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaSumAggregate_1.FacturaSumAggregate)
], FacturaGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaMinAggregate_1.FacturaMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaMinAggregate_1.FacturaMinAggregate)
], FacturaGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaMaxAggregate_1.FacturaMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaMaxAggregate_1.FacturaMaxAggregate)
], FacturaGroupBy.prototype, "_max", void 0);
FacturaGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FacturaGroupBy", {
        isAbstract: true
    })
], FacturaGroupBy);
exports.FacturaGroupBy = FacturaGroupBy;

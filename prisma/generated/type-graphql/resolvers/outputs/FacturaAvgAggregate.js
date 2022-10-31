"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FacturaAvgAggregate = class FacturaAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaAvgAggregate.prototype, "monto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaAvgAggregate.prototype, "clienteId", void 0);
FacturaAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FacturaAvgAggregate", {
        isAbstract: true
    })
], FacturaAvgAggregate);
exports.FacturaAvgAggregate = FacturaAvgAggregate;

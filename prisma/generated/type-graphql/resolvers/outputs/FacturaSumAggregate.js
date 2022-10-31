"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FacturaSumAggregate = class FacturaSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaSumAggregate.prototype, "monto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaSumAggregate.prototype, "clienteId", void 0);
FacturaSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FacturaSumAggregate", {
        isAbstract: true
    })
], FacturaSumAggregate);
exports.FacturaSumAggregate = FacturaSumAggregate;

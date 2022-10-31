"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaCreateWithoutClienteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FacturaCreateWithoutClienteInput = class FacturaCreateWithoutClienteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FacturaCreateWithoutClienteInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FacturaCreateWithoutClienteInput.prototype, "moneda", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaCreateWithoutClienteInput.prototype, "monto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FacturaCreateWithoutClienteInput.prototype, "pais", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaCreateWithoutClienteInput.prototype, "esEfectivo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FacturaCreateWithoutClienteInput.prototype, "published", void 0);
FacturaCreateWithoutClienteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaCreateWithoutClienteInput", {
        isAbstract: true
    })
], FacturaCreateWithoutClienteInput);
exports.FacturaCreateWithoutClienteInput = FacturaCreateWithoutClienteInput;

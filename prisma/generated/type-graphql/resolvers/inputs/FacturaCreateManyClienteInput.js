"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaCreateManyClienteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FacturaCreateManyClienteInput = class FacturaCreateManyClienteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaCreateManyClienteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FacturaCreateManyClienteInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FacturaCreateManyClienteInput.prototype, "moneda", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaCreateManyClienteInput.prototype, "monto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FacturaCreateManyClienteInput.prototype, "pais", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaCreateManyClienteInput.prototype, "esEfectivo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FacturaCreateManyClienteInput.prototype, "published", void 0);
FacturaCreateManyClienteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaCreateManyClienteInput", {
        isAbstract: true
    })
], FacturaCreateManyClienteInput);
exports.FacturaCreateManyClienteInput = FacturaCreateManyClienteInput;

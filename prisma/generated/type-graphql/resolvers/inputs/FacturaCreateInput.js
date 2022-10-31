"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutFacturasInput_1 = require("../inputs/UserCreateNestedOneWithoutFacturasInput");
let FacturaCreateInput = class FacturaCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FacturaCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FacturaCreateInput.prototype, "moneda", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaCreateInput.prototype, "monto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FacturaCreateInput.prototype, "pais", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FacturaCreateInput.prototype, "esEfectivo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FacturaCreateInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFacturasInput_1.UserCreateNestedOneWithoutFacturasInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutFacturasInput_1.UserCreateNestedOneWithoutFacturasInput)
], FacturaCreateInput.prototype, "cliente", void 0);
FacturaCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaCreateInput", {
        isAbstract: true
    })
], FacturaCreateInput);
exports.FacturaCreateInput = FacturaCreateInput;

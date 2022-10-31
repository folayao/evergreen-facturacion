"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaCreateNestedManyWithoutClienteInput_1 = require("../inputs/FacturaCreateNestedManyWithoutClienteInput");
const Role_1 = require("../../enums/Role");
let UserCreateWithoutProfileInput = class UserCreateWithoutProfileInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutProfileInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutProfileInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutProfileInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaCreateNestedManyWithoutClienteInput_1.FacturaCreateNestedManyWithoutClienteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaCreateNestedManyWithoutClienteInput_1.FacturaCreateNestedManyWithoutClienteInput)
], UserCreateWithoutProfileInput.prototype, "facturas", void 0);
UserCreateWithoutProfileInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutProfileInput", {
        isAbstract: true
    })
], UserCreateWithoutProfileInput);
exports.UserCreateWithoutProfileInput = UserCreateWithoutProfileInput;

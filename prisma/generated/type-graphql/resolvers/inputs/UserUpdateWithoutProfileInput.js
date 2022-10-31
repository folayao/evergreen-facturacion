"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumRoleFieldUpdateOperationsInput_1 = require("../inputs/EnumRoleFieldUpdateOperationsInput");
const FacturaUpdateManyWithoutClienteNestedInput_1 = require("../inputs/FacturaUpdateManyWithoutClienteNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutProfileInput = class UserUpdateWithoutProfileInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput_1.EnumRoleFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRoleFieldUpdateOperationsInput_1.EnumRoleFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaUpdateManyWithoutClienteNestedInput_1.FacturaUpdateManyWithoutClienteNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaUpdateManyWithoutClienteNestedInput_1.FacturaUpdateManyWithoutClienteNestedInput)
], UserUpdateWithoutProfileInput.prototype, "facturas", void 0);
UserUpdateWithoutProfileInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutProfileInput", {
        isAbstract: true
    })
], UserUpdateWithoutProfileInput);
exports.UserUpdateWithoutProfileInput = UserUpdateWithoutProfileInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutProfileNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutProfileNestedInput");
let ProfileUpdateInput = class ProfileUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProfileUpdateInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProfileNestedInput_1.UserUpdateOneRequiredWithoutProfileNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutProfileNestedInput_1.UserUpdateOneRequiredWithoutProfileNestedInput)
], ProfileUpdateInput.prototype, "user", void 0);
ProfileUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateInput", {
        isAbstract: true
    })
], ProfileUpdateInput);
exports.ProfileUpdateInput = ProfileUpdateInput;

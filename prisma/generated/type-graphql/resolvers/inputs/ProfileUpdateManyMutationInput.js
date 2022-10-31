"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProfileUpdateManyMutationInput = class ProfileUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProfileUpdateManyMutationInput.prototype, "bio", void 0);
ProfileUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateManyMutationInput", {
        isAbstract: true
    })
], ProfileUpdateManyMutationInput);
exports.ProfileUpdateManyMutationInput = ProfileUpdateManyMutationInput;

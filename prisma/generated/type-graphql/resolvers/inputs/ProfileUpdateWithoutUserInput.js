"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProfileUpdateWithoutUserInput = class ProfileUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProfileUpdateWithoutUserInput.prototype, "bio", void 0);
ProfileUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateWithoutUserInput", {
        isAbstract: true
    })
], ProfileUpdateWithoutUserInput);
exports.ProfileUpdateWithoutUserInput = ProfileUpdateWithoutUserInput;

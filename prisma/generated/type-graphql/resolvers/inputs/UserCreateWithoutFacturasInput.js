"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutFacturasInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreateNestedOneWithoutUserInput_1 = require("../inputs/ProfileCreateNestedOneWithoutUserInput");
const Role_1 = require("../../enums/Role");
let UserCreateWithoutFacturasInput = class UserCreateWithoutFacturasInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFacturasInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFacturasInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFacturasInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutUserInput_1.ProfileCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCreateNestedOneWithoutUserInput_1.ProfileCreateNestedOneWithoutUserInput)
], UserCreateWithoutFacturasInput.prototype, "profile", void 0);
UserCreateWithoutFacturasInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutFacturasInput", {
        isAbstract: true
    })
], UserCreateWithoutFacturasInput);
exports.UserCreateWithoutFacturasInput = UserCreateWithoutFacturasInput;

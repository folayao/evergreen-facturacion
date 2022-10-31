"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutFacturasInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutFacturasInput_1 = require("../inputs/UserCreateWithoutFacturasInput");
const UserUpdateWithoutFacturasInput_1 = require("../inputs/UserUpdateWithoutFacturasInput");
let UserUpsertWithoutFacturasInput = class UserUpsertWithoutFacturasInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutFacturasInput_1.UserUpdateWithoutFacturasInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutFacturasInput_1.UserUpdateWithoutFacturasInput)
], UserUpsertWithoutFacturasInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFacturasInput_1.UserCreateWithoutFacturasInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFacturasInput_1.UserCreateWithoutFacturasInput)
], UserUpsertWithoutFacturasInput.prototype, "create", void 0);
UserUpsertWithoutFacturasInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutFacturasInput", {
        isAbstract: true
    })
], UserUpsertWithoutFacturasInput);
exports.UserUpsertWithoutFacturasInput = UserUpsertWithoutFacturasInput;

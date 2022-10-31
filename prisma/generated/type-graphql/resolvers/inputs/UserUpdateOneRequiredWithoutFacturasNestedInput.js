"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutFacturasNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutFacturasInput_1 = require("../inputs/UserCreateOrConnectWithoutFacturasInput");
const UserCreateWithoutFacturasInput_1 = require("../inputs/UserCreateWithoutFacturasInput");
const UserUpdateWithoutFacturasInput_1 = require("../inputs/UserUpdateWithoutFacturasInput");
const UserUpsertWithoutFacturasInput_1 = require("../inputs/UserUpsertWithoutFacturasInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutFacturasNestedInput = class UserUpdateOneRequiredWithoutFacturasNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFacturasInput_1.UserCreateWithoutFacturasInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFacturasInput_1.UserCreateWithoutFacturasInput)
], UserUpdateOneRequiredWithoutFacturasNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFacturasInput_1.UserCreateOrConnectWithoutFacturasInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutFacturasInput_1.UserCreateOrConnectWithoutFacturasInput)
], UserUpdateOneRequiredWithoutFacturasNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutFacturasInput_1.UserUpsertWithoutFacturasInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutFacturasInput_1.UserUpsertWithoutFacturasInput)
], UserUpdateOneRequiredWithoutFacturasNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutFacturasNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutFacturasInput_1.UserUpdateWithoutFacturasInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutFacturasInput_1.UserUpdateWithoutFacturasInput)
], UserUpdateOneRequiredWithoutFacturasNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutFacturasNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutFacturasNestedInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutFacturasNestedInput);
exports.UserUpdateOneRequiredWithoutFacturasNestedInput = UserUpdateOneRequiredWithoutFacturasNestedInput;

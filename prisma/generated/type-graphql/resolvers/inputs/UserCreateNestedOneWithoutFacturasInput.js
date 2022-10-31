"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutFacturasInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutFacturasInput_1 = require("../inputs/UserCreateOrConnectWithoutFacturasInput");
const UserCreateWithoutFacturasInput_1 = require("../inputs/UserCreateWithoutFacturasInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutFacturasInput = class UserCreateNestedOneWithoutFacturasInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFacturasInput_1.UserCreateWithoutFacturasInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFacturasInput_1.UserCreateWithoutFacturasInput)
], UserCreateNestedOneWithoutFacturasInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFacturasInput_1.UserCreateOrConnectWithoutFacturasInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutFacturasInput_1.UserCreateOrConnectWithoutFacturasInput)
], UserCreateNestedOneWithoutFacturasInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutFacturasInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutFacturasInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutFacturasInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutFacturasInput);
exports.UserCreateNestedOneWithoutFacturasInput = UserCreateNestedOneWithoutFacturasInput;

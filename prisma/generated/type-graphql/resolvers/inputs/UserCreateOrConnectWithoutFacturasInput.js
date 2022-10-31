"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutFacturasInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutFacturasInput_1 = require("../inputs/UserCreateWithoutFacturasInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutFacturasInput = class UserCreateOrConnectWithoutFacturasInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutFacturasInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFacturasInput_1.UserCreateWithoutFacturasInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFacturasInput_1.UserCreateWithoutFacturasInput)
], UserCreateOrConnectWithoutFacturasInput.prototype, "create", void 0);
UserCreateOrConnectWithoutFacturasInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutFacturasInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutFacturasInput);
exports.UserCreateOrConnectWithoutFacturasInput = UserCreateOrConnectWithoutFacturasInput;

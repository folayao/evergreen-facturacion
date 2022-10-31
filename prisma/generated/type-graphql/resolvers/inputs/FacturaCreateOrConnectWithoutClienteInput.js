"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaCreateOrConnectWithoutClienteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaCreateWithoutClienteInput_1 = require("../inputs/FacturaCreateWithoutClienteInput");
const FacturaWhereUniqueInput_1 = require("../inputs/FacturaWhereUniqueInput");
let FacturaCreateOrConnectWithoutClienteInput = class FacturaCreateOrConnectWithoutClienteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereUniqueInput_1.FacturaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaWhereUniqueInput_1.FacturaWhereUniqueInput)
], FacturaCreateOrConnectWithoutClienteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaCreateWithoutClienteInput_1.FacturaCreateWithoutClienteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaCreateWithoutClienteInput_1.FacturaCreateWithoutClienteInput)
], FacturaCreateOrConnectWithoutClienteInput.prototype, "create", void 0);
FacturaCreateOrConnectWithoutClienteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaCreateOrConnectWithoutClienteInput", {
        isAbstract: true
    })
], FacturaCreateOrConnectWithoutClienteInput);
exports.FacturaCreateOrConnectWithoutClienteInput = FacturaCreateOrConnectWithoutClienteInput;

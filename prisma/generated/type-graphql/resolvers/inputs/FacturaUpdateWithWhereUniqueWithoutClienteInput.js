"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaUpdateWithWhereUniqueWithoutClienteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaUpdateWithoutClienteInput_1 = require("../inputs/FacturaUpdateWithoutClienteInput");
const FacturaWhereUniqueInput_1 = require("../inputs/FacturaWhereUniqueInput");
let FacturaUpdateWithWhereUniqueWithoutClienteInput = class FacturaUpdateWithWhereUniqueWithoutClienteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereUniqueInput_1.FacturaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaWhereUniqueInput_1.FacturaWhereUniqueInput)
], FacturaUpdateWithWhereUniqueWithoutClienteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaUpdateWithoutClienteInput_1.FacturaUpdateWithoutClienteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaUpdateWithoutClienteInput_1.FacturaUpdateWithoutClienteInput)
], FacturaUpdateWithWhereUniqueWithoutClienteInput.prototype, "data", void 0);
FacturaUpdateWithWhereUniqueWithoutClienteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaUpdateWithWhereUniqueWithoutClienteInput", {
        isAbstract: true
    })
], FacturaUpdateWithWhereUniqueWithoutClienteInput);
exports.FacturaUpdateWithWhereUniqueWithoutClienteInput = FacturaUpdateWithWhereUniqueWithoutClienteInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaUpsertWithWhereUniqueWithoutClienteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaCreateWithoutClienteInput_1 = require("../inputs/FacturaCreateWithoutClienteInput");
const FacturaUpdateWithoutClienteInput_1 = require("../inputs/FacturaUpdateWithoutClienteInput");
const FacturaWhereUniqueInput_1 = require("../inputs/FacturaWhereUniqueInput");
let FacturaUpsertWithWhereUniqueWithoutClienteInput = class FacturaUpsertWithWhereUniqueWithoutClienteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereUniqueInput_1.FacturaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaWhereUniqueInput_1.FacturaWhereUniqueInput)
], FacturaUpsertWithWhereUniqueWithoutClienteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaUpdateWithoutClienteInput_1.FacturaUpdateWithoutClienteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaUpdateWithoutClienteInput_1.FacturaUpdateWithoutClienteInput)
], FacturaUpsertWithWhereUniqueWithoutClienteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaCreateWithoutClienteInput_1.FacturaCreateWithoutClienteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaCreateWithoutClienteInput_1.FacturaCreateWithoutClienteInput)
], FacturaUpsertWithWhereUniqueWithoutClienteInput.prototype, "create", void 0);
FacturaUpsertWithWhereUniqueWithoutClienteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaUpsertWithWhereUniqueWithoutClienteInput", {
        isAbstract: true
    })
], FacturaUpsertWithWhereUniqueWithoutClienteInput);
exports.FacturaUpsertWithWhereUniqueWithoutClienteInput = FacturaUpsertWithWhereUniqueWithoutClienteInput;

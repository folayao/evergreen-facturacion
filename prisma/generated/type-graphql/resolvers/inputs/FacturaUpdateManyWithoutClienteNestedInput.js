"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaUpdateManyWithoutClienteNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaCreateManyClienteInputEnvelope_1 = require("../inputs/FacturaCreateManyClienteInputEnvelope");
const FacturaCreateOrConnectWithoutClienteInput_1 = require("../inputs/FacturaCreateOrConnectWithoutClienteInput");
const FacturaCreateWithoutClienteInput_1 = require("../inputs/FacturaCreateWithoutClienteInput");
const FacturaScalarWhereInput_1 = require("../inputs/FacturaScalarWhereInput");
const FacturaUpdateManyWithWhereWithoutClienteInput_1 = require("../inputs/FacturaUpdateManyWithWhereWithoutClienteInput");
const FacturaUpdateWithWhereUniqueWithoutClienteInput_1 = require("../inputs/FacturaUpdateWithWhereUniqueWithoutClienteInput");
const FacturaUpsertWithWhereUniqueWithoutClienteInput_1 = require("../inputs/FacturaUpsertWithWhereUniqueWithoutClienteInput");
const FacturaWhereUniqueInput_1 = require("../inputs/FacturaWhereUniqueInput");
let FacturaUpdateManyWithoutClienteNestedInput = class FacturaUpdateManyWithoutClienteNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaCreateWithoutClienteInput_1.FacturaCreateWithoutClienteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaUpdateManyWithoutClienteNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaCreateOrConnectWithoutClienteInput_1.FacturaCreateOrConnectWithoutClienteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaUpdateManyWithoutClienteNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaUpsertWithWhereUniqueWithoutClienteInput_1.FacturaUpsertWithWhereUniqueWithoutClienteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaUpdateManyWithoutClienteNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaCreateManyClienteInputEnvelope_1.FacturaCreateManyClienteInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaCreateManyClienteInputEnvelope_1.FacturaCreateManyClienteInputEnvelope)
], FacturaUpdateManyWithoutClienteNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaWhereUniqueInput_1.FacturaWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaUpdateManyWithoutClienteNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaWhereUniqueInput_1.FacturaWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaUpdateManyWithoutClienteNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaWhereUniqueInput_1.FacturaWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaUpdateManyWithoutClienteNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaWhereUniqueInput_1.FacturaWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaUpdateManyWithoutClienteNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaUpdateWithWhereUniqueWithoutClienteInput_1.FacturaUpdateWithWhereUniqueWithoutClienteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaUpdateManyWithoutClienteNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaUpdateManyWithWhereWithoutClienteInput_1.FacturaUpdateManyWithWhereWithoutClienteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaUpdateManyWithoutClienteNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaScalarWhereInput_1.FacturaScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaUpdateManyWithoutClienteNestedInput.prototype, "deleteMany", void 0);
FacturaUpdateManyWithoutClienteNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaUpdateManyWithoutClienteNestedInput", {
        isAbstract: true
    })
], FacturaUpdateManyWithoutClienteNestedInput);
exports.FacturaUpdateManyWithoutClienteNestedInput = FacturaUpdateManyWithoutClienteNestedInput;

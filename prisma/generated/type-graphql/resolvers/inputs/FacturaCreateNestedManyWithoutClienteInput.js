"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaCreateNestedManyWithoutClienteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaCreateManyClienteInputEnvelope_1 = require("../inputs/FacturaCreateManyClienteInputEnvelope");
const FacturaCreateOrConnectWithoutClienteInput_1 = require("../inputs/FacturaCreateOrConnectWithoutClienteInput");
const FacturaCreateWithoutClienteInput_1 = require("../inputs/FacturaCreateWithoutClienteInput");
const FacturaWhereUniqueInput_1 = require("../inputs/FacturaWhereUniqueInput");
let FacturaCreateNestedManyWithoutClienteInput = class FacturaCreateNestedManyWithoutClienteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaCreateWithoutClienteInput_1.FacturaCreateWithoutClienteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaCreateNestedManyWithoutClienteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaCreateOrConnectWithoutClienteInput_1.FacturaCreateOrConnectWithoutClienteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaCreateNestedManyWithoutClienteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaCreateManyClienteInputEnvelope_1.FacturaCreateManyClienteInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaCreateManyClienteInputEnvelope_1.FacturaCreateManyClienteInputEnvelope)
], FacturaCreateNestedManyWithoutClienteInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaWhereUniqueInput_1.FacturaWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaCreateNestedManyWithoutClienteInput.prototype, "connect", void 0);
FacturaCreateNestedManyWithoutClienteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaCreateNestedManyWithoutClienteInput", {
        isAbstract: true
    })
], FacturaCreateNestedManyWithoutClienteInput);
exports.FacturaCreateNestedManyWithoutClienteInput = FacturaCreateNestedManyWithoutClienteInput;

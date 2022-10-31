"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaUpdateManyWithWhereWithoutClienteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaScalarWhereInput_1 = require("../inputs/FacturaScalarWhereInput");
const FacturaUpdateManyMutationInput_1 = require("../inputs/FacturaUpdateManyMutationInput");
let FacturaUpdateManyWithWhereWithoutClienteInput = class FacturaUpdateManyWithWhereWithoutClienteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaScalarWhereInput_1.FacturaScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaScalarWhereInput_1.FacturaScalarWhereInput)
], FacturaUpdateManyWithWhereWithoutClienteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaUpdateManyMutationInput_1.FacturaUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaUpdateManyMutationInput_1.FacturaUpdateManyMutationInput)
], FacturaUpdateManyWithWhereWithoutClienteInput.prototype, "data", void 0);
FacturaUpdateManyWithWhereWithoutClienteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaUpdateManyWithWhereWithoutClienteInput", {
        isAbstract: true
    })
], FacturaUpdateManyWithWhereWithoutClienteInput);
exports.FacturaUpdateManyWithWhereWithoutClienteInput = FacturaUpdateManyWithWhereWithoutClienteInput;

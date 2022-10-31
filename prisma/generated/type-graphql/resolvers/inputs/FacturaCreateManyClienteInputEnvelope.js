"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaCreateManyClienteInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaCreateManyClienteInput_1 = require("../inputs/FacturaCreateManyClienteInput");
let FacturaCreateManyClienteInputEnvelope = class FacturaCreateManyClienteInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaCreateManyClienteInput_1.FacturaCreateManyClienteInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], FacturaCreateManyClienteInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FacturaCreateManyClienteInputEnvelope.prototype, "skipDuplicates", void 0);
FacturaCreateManyClienteInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaCreateManyClienteInputEnvelope", {
        isAbstract: true
    })
], FacturaCreateManyClienteInputEnvelope);
exports.FacturaCreateManyClienteInputEnvelope = FacturaCreateManyClienteInputEnvelope;

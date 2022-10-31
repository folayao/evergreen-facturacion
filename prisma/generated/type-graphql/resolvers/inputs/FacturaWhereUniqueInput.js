"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FacturaWhereUniqueInput = class FacturaWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FacturaWhereUniqueInput.prototype, "id", void 0);
FacturaWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaWhereUniqueInput", {
        isAbstract: true
    })
], FacturaWhereUniqueInput);
exports.FacturaWhereUniqueInput = FacturaWhereUniqueInput;

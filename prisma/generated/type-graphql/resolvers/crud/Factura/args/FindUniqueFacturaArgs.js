"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueFacturaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaWhereUniqueInput_1 = require("../../../inputs/FacturaWhereUniqueInput");
let FindUniqueFacturaArgs = class FindUniqueFacturaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereUniqueInput_1.FacturaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaWhereUniqueInput_1.FacturaWhereUniqueInput)
], FindUniqueFacturaArgs.prototype, "where", void 0);
FindUniqueFacturaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueFacturaArgs);
exports.FindUniqueFacturaArgs = FindUniqueFacturaArgs;

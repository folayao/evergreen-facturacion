"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyFacturaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaUpdateManyMutationInput_1 = require("../../../inputs/FacturaUpdateManyMutationInput");
const FacturaWhereInput_1 = require("../../../inputs/FacturaWhereInput");
let UpdateManyFacturaArgs = class UpdateManyFacturaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaUpdateManyMutationInput_1.FacturaUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaUpdateManyMutationInput_1.FacturaUpdateManyMutationInput)
], UpdateManyFacturaArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereInput_1.FacturaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaWhereInput_1.FacturaWhereInput)
], UpdateManyFacturaArgs.prototype, "where", void 0);
UpdateManyFacturaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyFacturaArgs);
exports.UpdateManyFacturaArgs = UpdateManyFacturaArgs;

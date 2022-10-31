"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneFacturaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaUpdateInput_1 = require("../../../inputs/FacturaUpdateInput");
const FacturaWhereUniqueInput_1 = require("../../../inputs/FacturaWhereUniqueInput");
let UpdateOneFacturaArgs = class UpdateOneFacturaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaUpdateInput_1.FacturaUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaUpdateInput_1.FacturaUpdateInput)
], UpdateOneFacturaArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereUniqueInput_1.FacturaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaWhereUniqueInput_1.FacturaWhereUniqueInput)
], UpdateOneFacturaArgs.prototype, "where", void 0);
UpdateOneFacturaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneFacturaArgs);
exports.UpdateOneFacturaArgs = UpdateOneFacturaArgs;

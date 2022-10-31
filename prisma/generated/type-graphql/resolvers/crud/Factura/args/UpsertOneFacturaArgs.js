"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneFacturaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaCreateInput_1 = require("../../../inputs/FacturaCreateInput");
const FacturaUpdateInput_1 = require("../../../inputs/FacturaUpdateInput");
const FacturaWhereUniqueInput_1 = require("../../../inputs/FacturaWhereUniqueInput");
let UpsertOneFacturaArgs = class UpsertOneFacturaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereUniqueInput_1.FacturaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaWhereUniqueInput_1.FacturaWhereUniqueInput)
], UpsertOneFacturaArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaCreateInput_1.FacturaCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaCreateInput_1.FacturaCreateInput)
], UpsertOneFacturaArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaUpdateInput_1.FacturaUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaUpdateInput_1.FacturaUpdateInput)
], UpsertOneFacturaArgs.prototype, "update", void 0);
UpsertOneFacturaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneFacturaArgs);
exports.UpsertOneFacturaArgs = UpsertOneFacturaArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyFacturaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaWhereInput_1 = require("../../../inputs/FacturaWhereInput");
let DeleteManyFacturaArgs = class DeleteManyFacturaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereInput_1.FacturaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaWhereInput_1.FacturaWhereInput)
], DeleteManyFacturaArgs.prototype, "where", void 0);
DeleteManyFacturaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyFacturaArgs);
exports.DeleteManyFacturaArgs = DeleteManyFacturaArgs;

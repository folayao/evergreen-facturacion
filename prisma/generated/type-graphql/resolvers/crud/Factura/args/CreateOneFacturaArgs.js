"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneFacturaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaCreateInput_1 = require("../../../inputs/FacturaCreateInput");
let CreateOneFacturaArgs = class CreateOneFacturaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaCreateInput_1.FacturaCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FacturaCreateInput_1.FacturaCreateInput)
], CreateOneFacturaArgs.prototype, "data", void 0);
CreateOneFacturaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneFacturaArgs);
exports.CreateOneFacturaArgs = CreateOneFacturaArgs;

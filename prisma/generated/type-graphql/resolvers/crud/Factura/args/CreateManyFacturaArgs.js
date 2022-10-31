"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyFacturaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaCreateManyInput_1 = require("../../../inputs/FacturaCreateManyInput");
let CreateManyFacturaArgs = class CreateManyFacturaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FacturaCreateManyInput_1.FacturaCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyFacturaArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyFacturaArgs.prototype, "skipDuplicates", void 0);
CreateManyFacturaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyFacturaArgs);
exports.CreateManyFacturaArgs = CreateManyFacturaArgs;

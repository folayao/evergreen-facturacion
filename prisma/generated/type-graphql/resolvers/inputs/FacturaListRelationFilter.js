"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaWhereInput_1 = require("../inputs/FacturaWhereInput");
let FacturaListRelationFilter = class FacturaListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereInput_1.FacturaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaWhereInput_1.FacturaWhereInput)
], FacturaListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereInput_1.FacturaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaWhereInput_1.FacturaWhereInput)
], FacturaListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaWhereInput_1.FacturaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaWhereInput_1.FacturaWhereInput)
], FacturaListRelationFilter.prototype, "none", void 0);
FacturaListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("FacturaListRelationFilter", {
        isAbstract: true
    })
], FacturaListRelationFilter);
exports.FacturaListRelationFilter = FacturaListRelationFilter;

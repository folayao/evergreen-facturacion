"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FacturaOrderByRelationAggregateInput_1 = require("../inputs/FacturaOrderByRelationAggregateInput");
const ProfileOrderByWithRelationInput_1 = require("../inputs/ProfileOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FacturaOrderByRelationAggregateInput_1.FacturaOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FacturaOrderByRelationAggregateInput_1.FacturaOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "facturas", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileOrderByWithRelationInput_1.ProfileOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileOrderByWithRelationInput_1.ProfileOrderByWithRelationInput)
], UserOrderByWithRelationInput.prototype, "profile", void 0);
UserOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserOrderByWithRelationInput", {
        isAbstract: true
    })
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;

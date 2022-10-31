"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Role;
(function (Role) {
    Role["CLIENT"] = "CLIENT";
    Role["ADMIN"] = "ADMIN";
})(Role = exports.Role || (exports.Role = {}));
TypeGraphQL.registerEnumType(Role, {
    name: "Role",
    description: undefined,
});

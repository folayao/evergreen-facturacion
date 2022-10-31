"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Profile: crudResolvers.ProfileCrudResolver,
    Factura: crudResolvers.FacturaCrudResolver
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Profile: {
        aggregateProfile: actionResolvers.AggregateProfileResolver,
        createManyProfile: actionResolvers.CreateManyProfileResolver,
        createOneProfile: actionResolvers.CreateOneProfileResolver,
        deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
        deleteOneProfile: actionResolvers.DeleteOneProfileResolver,
        findFirstProfile: actionResolvers.FindFirstProfileResolver,
        profiles: actionResolvers.FindManyProfileResolver,
        profile: actionResolvers.FindUniqueProfileResolver,
        groupByProfile: actionResolvers.GroupByProfileResolver,
        updateManyProfile: actionResolvers.UpdateManyProfileResolver,
        updateOneProfile: actionResolvers.UpdateOneProfileResolver,
        upsertOneProfile: actionResolvers.UpsertOneProfileResolver
    },
    Factura: {
        aggregateFactura: actionResolvers.AggregateFacturaResolver,
        createManyFactura: actionResolvers.CreateManyFacturaResolver,
        createOneFactura: actionResolvers.CreateOneFacturaResolver,
        deleteManyFactura: actionResolvers.DeleteManyFacturaResolver,
        deleteOneFactura: actionResolvers.DeleteOneFacturaResolver,
        findFirstFactura: actionResolvers.FindFirstFacturaResolver,
        facturas: actionResolvers.FindManyFacturaResolver,
        factura: actionResolvers.FindUniqueFacturaResolver,
        groupByFactura: actionResolvers.GroupByFacturaResolver,
        updateManyFactura: actionResolvers.UpdateManyFacturaResolver,
        updateOneFactura: actionResolvers.UpdateOneFacturaResolver,
        upsertOneFactura: actionResolvers.UpsertOneFacturaResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Profile: ["aggregateProfile", "createManyProfile", "createOneProfile", "deleteManyProfile", "deleteOneProfile", "findFirstProfile", "profiles", "profile", "groupByProfile", "updateManyProfile", "updateOneProfile", "upsertOneProfile"],
    Factura: ["aggregateFactura", "createManyFactura", "createOneFactura", "deleteManyFactura", "deleteOneFactura", "findFirstFactura", "facturas", "factura", "groupByFactura", "updateManyFactura", "updateOneFactura", "upsertOneFactura"]
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyProfileArgs: ["data", "skipDuplicates"],
    CreateOneProfileArgs: ["data"],
    DeleteManyProfileArgs: ["where"],
    DeleteOneProfileArgs: ["where"],
    FindFirstProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueProfileArgs: ["where"],
    GroupByProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyProfileArgs: ["data", "where"],
    UpdateOneProfileArgs: ["data", "where"],
    UpsertOneProfileArgs: ["where", "create", "update"],
    AggregateFacturaArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyFacturaArgs: ["data", "skipDuplicates"],
    CreateOneFacturaArgs: ["data"],
    DeleteManyFacturaArgs: ["where"],
    DeleteOneFacturaArgs: ["where"],
    FindFirstFacturaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyFacturaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueFacturaArgs: ["where"],
    GroupByFacturaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyFacturaArgs: ["data", "where"],
    UpdateOneFacturaArgs: ["data", "where"],
    UpsertOneFacturaArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Profile: relationResolvers.ProfileRelationsResolver,
    Factura: relationResolvers.FacturaRelationsResolver
};
const relationResolversInfo = {
    User: ["facturas", "profile"],
    Profile: ["user"],
    Factura: ["cliente"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "email", "nombre", "role"],
    Profile: ["id", "bio", "userId"],
    Factura: ["id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "clienteId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "email", "nombre", "role", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateProfile: ["_count", "_avg", "_sum", "_min", "_max"],
    ProfileGroupBy: ["id", "bio", "userId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateFactura: ["_count", "_avg", "_sum", "_min", "_max"],
    FacturaGroupBy: ["id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "clienteId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["facturas"],
    UserCountAggregate: ["id", "email", "nombre", "role", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "email", "nombre", "role"],
    UserMaxAggregate: ["id", "email", "nombre", "role"],
    ProfileCountAggregate: ["id", "bio", "userId", "_all"],
    ProfileAvgAggregate: ["id", "userId"],
    ProfileSumAggregate: ["id", "userId"],
    ProfileMinAggregate: ["id", "bio", "userId"],
    ProfileMaxAggregate: ["id", "bio", "userId"],
    FacturaCountAggregate: ["id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "clienteId", "_all"],
    FacturaAvgAggregate: ["id", "monto", "clienteId"],
    FacturaSumAggregate: ["id", "monto", "clienteId"],
    FacturaMinAggregate: ["id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "clienteId"],
    FacturaMaxAggregate: ["id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "clienteId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "email", "nombre", "role", "facturas", "profile"],
    UserOrderByWithRelationInput: ["id", "email", "nombre", "role", "facturas", "profile"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "email", "nombre", "role", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "nombre", "role"],
    ProfileWhereInput: ["AND", "OR", "NOT", "id", "bio", "user", "userId"],
    ProfileOrderByWithRelationInput: ["id", "bio", "user", "userId"],
    ProfileWhereUniqueInput: ["id", "userId"],
    ProfileOrderByWithAggregationInput: ["id", "bio", "userId", "_count", "_avg", "_max", "_min", "_sum"],
    ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "bio", "userId"],
    FacturaWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "cliente", "clienteId"],
    FacturaOrderByWithRelationInput: ["id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "cliente", "clienteId"],
    FacturaWhereUniqueInput: ["id"],
    FacturaOrderByWithAggregationInput: ["id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "clienteId", "_count", "_avg", "_max", "_min", "_sum"],
    FacturaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "clienteId"],
    UserCreateInput: ["email", "nombre", "role", "facturas", "profile"],
    UserUpdateInput: ["email", "nombre", "role", "facturas", "profile"],
    UserCreateManyInput: ["id", "email", "nombre", "role"],
    UserUpdateManyMutationInput: ["email", "nombre", "role"],
    ProfileCreateInput: ["bio", "user"],
    ProfileUpdateInput: ["bio", "user"],
    ProfileCreateManyInput: ["id", "bio", "userId"],
    ProfileUpdateManyMutationInput: ["bio"],
    FacturaCreateInput: ["createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "cliente"],
    FacturaUpdateInput: ["createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "cliente"],
    FacturaCreateManyInput: ["id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "clienteId"],
    FacturaUpdateManyMutationInput: ["createdAt", "moneda", "monto", "pais", "esEfectivo", "published"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumRoleFilter: ["equals", "in", "notIn", "not"],
    FacturaListRelationFilter: ["every", "some", "none"],
    ProfileRelationFilter: ["is", "isNot"],
    FacturaOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "email", "nombre", "role"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "email", "nombre", "role"],
    UserMinOrderByAggregateInput: ["id", "email", "nombre", "role"],
    UserSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    UserRelationFilter: ["is", "isNot"],
    ProfileCountOrderByAggregateInput: ["id", "bio", "userId"],
    ProfileAvgOrderByAggregateInput: ["id", "userId"],
    ProfileMaxOrderByAggregateInput: ["id", "bio", "userId"],
    ProfileMinOrderByAggregateInput: ["id", "bio", "userId"],
    ProfileSumOrderByAggregateInput: ["id", "userId"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BoolFilter: ["equals", "not"],
    FacturaCountOrderByAggregateInput: ["id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "clienteId"],
    FacturaAvgOrderByAggregateInput: ["id", "monto", "clienteId"],
    FacturaMaxOrderByAggregateInput: ["id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "clienteId"],
    FacturaMinOrderByAggregateInput: ["id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "clienteId"],
    FacturaSumOrderByAggregateInput: ["id", "monto", "clienteId"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    FacturaCreateNestedManyWithoutClienteInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    EnumRoleFieldUpdateOperationsInput: ["set"],
    FacturaUpdateManyWithoutClienteNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProfileUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutProfileNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutFacturasInput: ["create", "connectOrCreate", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    BoolFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutFacturasNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    FacturaCreateWithoutClienteInput: ["createdAt", "moneda", "monto", "pais", "esEfectivo", "published"],
    FacturaCreateOrConnectWithoutClienteInput: ["where", "create"],
    FacturaCreateManyClienteInputEnvelope: ["data", "skipDuplicates"],
    ProfileCreateWithoutUserInput: ["bio"],
    ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
    FacturaUpsertWithWhereUniqueWithoutClienteInput: ["where", "update", "create"],
    FacturaUpdateWithWhereUniqueWithoutClienteInput: ["where", "data"],
    FacturaUpdateManyWithWhereWithoutClienteInput: ["where", "data"],
    FacturaScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published", "clienteId"],
    ProfileUpsertWithoutUserInput: ["update", "create"],
    ProfileUpdateWithoutUserInput: ["bio"],
    UserCreateWithoutProfileInput: ["email", "nombre", "role", "facturas"],
    UserCreateOrConnectWithoutProfileInput: ["where", "create"],
    UserUpsertWithoutProfileInput: ["update", "create"],
    UserUpdateWithoutProfileInput: ["email", "nombre", "role", "facturas"],
    UserCreateWithoutFacturasInput: ["email", "nombre", "role", "profile"],
    UserCreateOrConnectWithoutFacturasInput: ["where", "create"],
    UserUpsertWithoutFacturasInput: ["update", "create"],
    UserUpdateWithoutFacturasInput: ["email", "nombre", "role", "profile"],
    FacturaCreateManyClienteInput: ["id", "createdAt", "moneda", "monto", "pais", "esEfectivo", "published"],
    FacturaUpdateWithoutClienteInput: ["createdAt", "moneda", "monto", "pais", "esEfectivo", "published"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;

#include "connection.hpp"
#include "jstocbpp.hpp"

namespace couchnode
{

//#region Autogenerated Method Definitions

Napi::Value Connection::jsPrepend(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("prepend",
              jsToCbpp<couchbase::operations::prepend_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsExists(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("exists",
              jsToCbpp<couchbase::operations::exists_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsHttpNoop(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("httpNoop",
              jsToCbpp<couchbase::operations::http_noop_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsUnlock(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("unlock",
              jsToCbpp<couchbase::operations::unlock_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsUpsert(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("upsert",
              jsToCbpp<couchbase::operations::upsert_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsAppend(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("append",
              jsToCbpp<couchbase::operations::append_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsQuery(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("query",
              jsToCbpp<couchbase::operations::query_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsReplace(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("replace",
              jsToCbpp<couchbase::operations::replace_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsGetAndTouch(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("getAndTouch",
              jsToCbpp<couchbase::operations::get_and_touch_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsRemove(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("remove",
              jsToCbpp<couchbase::operations::remove_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsGet(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("get",
              jsToCbpp<couchbase::operations::get_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsAnalytics(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("analytics",
              jsToCbpp<couchbase::operations::analytics_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsGetProjected(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("getProjected",
              jsToCbpp<couchbase::operations::get_projected_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsDecrement(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("decrement",
              jsToCbpp<couchbase::operations::decrement_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsSearch(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("search",
              jsToCbpp<couchbase::operations::search_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsTouch(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("touch",
              jsToCbpp<couchbase::operations::touch_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsLookupIn(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("lookupIn",
              jsToCbpp<couchbase::operations::lookup_in_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsDocumentView(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("documentView",
              jsToCbpp<couchbase::operations::document_view_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsGetAndLock(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("getAndLock",
              jsToCbpp<couchbase::operations::get_and_lock_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsInsert(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("insert",
              jsToCbpp<couchbase::operations::insert_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsMutateIn(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("mutateIn",
              jsToCbpp<couchbase::operations::mutate_in_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsIncrement(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("increment",
              jsToCbpp<couchbase::operations::increment_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementGroupUpsert(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementGroupUpsert",
              jsToCbpp<couchbase::operations::management::group_upsert_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementEventingPauseFunction(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementEventingPauseFunction",
              jsToCbpp<couchbase::operations::management::eventing_pause_function_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementQueryIndexGetAll(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementQueryIndexGetAll",
              jsToCbpp<couchbase::operations::management::query_index_get_all_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementCollectionCreate(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementCollectionCreate",
              jsToCbpp<couchbase::operations::management::collection_create_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementEventingResumeFunction(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementEventingResumeFunction",
              jsToCbpp<couchbase::operations::management::eventing_resume_function_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementSearchIndexGetStats(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementSearchIndexGetStats",
              jsToCbpp<couchbase::operations::management::search_index_get_stats_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementBucketGetAll(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementBucketGetAll",
              jsToCbpp<couchbase::operations::management::bucket_get_all_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementQueryIndexBuildDeferred(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementQueryIndexBuildDeferred",
              jsToCbpp<couchbase::operations::management::query_index_build_deferred_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementClusterDescribe(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementClusterDescribe",
              jsToCbpp<couchbase::operations::management::cluster_describe_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementSearchIndexGetAll(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementSearchIndexGetAll",
              jsToCbpp<couchbase::operations::management::search_index_get_all_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementSearchIndexAnalyzeDocument(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementSearchIndexAnalyzeDocument",
              jsToCbpp<couchbase::operations::management::search_index_analyze_document_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementQueryIndexDrop(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementQueryIndexDrop",
              jsToCbpp<couchbase::operations::management::query_index_drop_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementAnalyticsDatasetCreate(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementAnalyticsDatasetCreate",
              jsToCbpp<couchbase::operations::management::analytics_dataset_create_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementBucketFlush(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementBucketFlush",
              jsToCbpp<couchbase::operations::management::bucket_flush_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementAnalyticsIndexDrop(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementAnalyticsIndexDrop",
              jsToCbpp<couchbase::operations::management::analytics_index_drop_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementQueryIndexCreate(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementQueryIndexCreate",
              jsToCbpp<couchbase::operations::management::query_index_create_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementSearchIndexUpsert(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementSearchIndexUpsert",
              jsToCbpp<couchbase::operations::management::search_index_upsert_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementAnalyticsDatasetGetAll(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementAnalyticsDatasetGetAll",
              jsToCbpp<couchbase::operations::management::analytics_dataset_get_all_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementAnalyticsIndexGetAll(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementAnalyticsIndexGetAll",
              jsToCbpp<couchbase::operations::management::analytics_index_get_all_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementAnalyticsGetPendingMutations(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementAnalyticsGetPendingMutations",
              jsToCbpp<couchbase::operations::management::analytics_get_pending_mutations_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementAnalyticsDataverseDrop(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementAnalyticsDataverseDrop",
              jsToCbpp<couchbase::operations::management::analytics_dataverse_drop_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementAnalyticsLinkConnect(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementAnalyticsLinkConnect",
              jsToCbpp<couchbase::operations::management::analytics_link_connect_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementCollectionsManifestGet(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementCollectionsManifestGet",
              jsToCbpp<couchbase::operations::management::collections_manifest_get_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementClusterDeveloperPreviewEnable(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementClusterDeveloperPreviewEnable",
              jsToCbpp<couchbase::operations::management::cluster_developer_preview_enable_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementAnalyticsLinkDrop(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementAnalyticsLinkDrop",
              jsToCbpp<couchbase::operations::management::analytics_link_drop_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementBucketDescribe(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementBucketDescribe",
              jsToCbpp<couchbase::operations::management::bucket_describe_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementEventingUpsertFunction(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementEventingUpsertFunction",
              jsToCbpp<couchbase::operations::management::eventing_upsert_function_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementViewIndexGetAll(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementViewIndexGetAll",
              jsToCbpp<couchbase::operations::management::view_index_get_all_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementBucketGet(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementBucketGet",
              jsToCbpp<couchbase::operations::management::bucket_get_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementBucketUpdate(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementBucketUpdate",
              jsToCbpp<couchbase::operations::management::bucket_update_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementBucketDrop(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementBucketDrop",
              jsToCbpp<couchbase::operations::management::bucket_drop_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementFreeform(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementFreeform",
              jsToCbpp<couchbase::operations::management::freeform_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementScopeDrop(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementScopeDrop",
              jsToCbpp<couchbase::operations::management::scope_drop_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementViewIndexUpsert(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementViewIndexUpsert",
              jsToCbpp<couchbase::operations::management::view_index_upsert_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementUserGetAll(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementUserGetAll",
              jsToCbpp<couchbase::operations::management::user_get_all_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementScopeCreate(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementScopeCreate",
              jsToCbpp<couchbase::operations::management::scope_create_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementEventingGetFunction(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementEventingGetFunction",
              jsToCbpp<couchbase::operations::management::eventing_get_function_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementViewIndexDrop(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementViewIndexDrop",
              jsToCbpp<couchbase::operations::management::view_index_drop_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementAnalyticsLinkDisconnect(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementAnalyticsLinkDisconnect",
              jsToCbpp<couchbase::operations::management::analytics_link_disconnect_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementUserUpsert(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementUserUpsert",
              jsToCbpp<couchbase::operations::management::user_upsert_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementEventingGetStatus(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementEventingGetStatus",
              jsToCbpp<couchbase::operations::management::eventing_get_status_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementEventingGetAllFunctions(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementEventingGetAllFunctions",
              jsToCbpp<couchbase::operations::management::eventing_get_all_functions_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementAnalyticsIndexCreate(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementAnalyticsIndexCreate",
              jsToCbpp<couchbase::operations::management::analytics_index_create_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementScopeGetAll(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementScopeGetAll",
              jsToCbpp<couchbase::operations::management::scope_get_all_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementUserGet(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementUserGet",
              jsToCbpp<couchbase::operations::management::user_get_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementSearchIndexDrop(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementSearchIndexDrop",
              jsToCbpp<couchbase::operations::management::search_index_drop_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementSearchIndexControlPlanFreeze(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementSearchIndexControlPlanFreeze",
              jsToCbpp<couchbase::operations::management::search_index_control_plan_freeze_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementSearchIndexStats(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementSearchIndexStats",
              jsToCbpp<couchbase::operations::management::search_index_stats_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementUserDrop(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementUserDrop",
              jsToCbpp<couchbase::operations::management::user_drop_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementAnalyticsDataverseCreate(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementAnalyticsDataverseCreate",
              jsToCbpp<couchbase::operations::management::analytics_dataverse_create_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementSearchIndexControlQuery(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementSearchIndexControlQuery",
              jsToCbpp<couchbase::operations::management::search_index_control_query_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementRoleGetAll(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementRoleGetAll",
              jsToCbpp<couchbase::operations::management::role_get_all_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementGroupGetAll(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementGroupGetAll",
              jsToCbpp<couchbase::operations::management::group_get_all_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementEventingDropFunction(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementEventingDropFunction",
              jsToCbpp<couchbase::operations::management::eventing_drop_function_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementCollectionDrop(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementCollectionDrop",
              jsToCbpp<couchbase::operations::management::collection_drop_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementSearchIndexControlIngest(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementSearchIndexControlIngest",
              jsToCbpp<couchbase::operations::management::search_index_control_ingest_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementEventingDeployFunction(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementEventingDeployFunction",
              jsToCbpp<couchbase::operations::management::eventing_deploy_function_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementGroupGet(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementGroupGet",
              jsToCbpp<couchbase::operations::management::group_get_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementViewIndexGet(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementViewIndexGet",
              jsToCbpp<couchbase::operations::management::view_index_get_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementBucketCreate(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementBucketCreate",
              jsToCbpp<couchbase::operations::management::bucket_create_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementAnalyticsDatasetDrop(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementAnalyticsDatasetDrop",
              jsToCbpp<couchbase::operations::management::analytics_dataset_drop_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementGroupDrop(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementGroupDrop",
              jsToCbpp<couchbase::operations::management::group_drop_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementSearchIndexGet(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementSearchIndexGet",
              jsToCbpp<couchbase::operations::management::search_index_get_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementEventingUndeployFunction(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementEventingUndeployFunction",
              jsToCbpp<couchbase::operations::management::eventing_undeploy_function_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementSearchIndexGetDocumentsCount(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementSearchIndexGetDocumentsCount",
              jsToCbpp<couchbase::operations::management::search_index_get_documents_count_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

Napi::Value Connection::jsManagementAnalyticsLinkGetAll(const Napi::CallbackInfo &info)
{
    auto optsJsObj = info[0].As<Napi::Object>();
    auto callbackJsFn = info[1].As<Napi::Function>();

    executeOp("managementAnalyticsLinkGetAll",
              jsToCbpp<couchbase::operations::management::analytics_link_get_all_request>(optsJsObj),
              callbackJsFn);

    return info.Env().Null();
}

//#endregion Autogenerated Method Definitions

} // namespace couchnode

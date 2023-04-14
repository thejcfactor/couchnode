import {
  // QueryScanConsistency,
  // QueryProfileMode,
  QueryStatus,
} from '../querytypes'
import { QueryResponse } from './generated/couchbase/query/v1/query_pb'

/**
 * @internal
 */
type MetaDataStatus = QueryResponse.MetaData.StatusMap

/**
 * @internal
 */
export function queryStatusFromGrpc(
  status: MetaDataStatus[keyof MetaDataStatus]
): QueryStatus {
  if (status == QueryResponse.MetaData.Status.STATUS_ABORTED) {
    return QueryStatus.Aborted
  } else if (status == QueryResponse.MetaData.Status.STATUS_CLOSED) {
    return QueryStatus.Closed
  } else if (status == QueryResponse.MetaData.Status.STATUS_COMPLETED) {
    return QueryStatus.Completed
  } else if (status == QueryResponse.MetaData.Status.STATUS_ERRORS) {
    return QueryStatus.Errors
  } else if (status == QueryResponse.MetaData.Status.STATUS_FATAL) {
    return QueryStatus.Fatal
  } else if (status == QueryResponse.MetaData.Status.STATUS_RUNNING) {
    return QueryStatus.Running
  } else if (status == QueryResponse.MetaData.Status.STATUS_STOPPED) {
    return QueryStatus.Stopped
  } else if (status == QueryResponse.MetaData.Status.STATUS_SUCCESS) {
    return QueryStatus.Success
  } else if (status == QueryResponse.MetaData.Status.STATUS_TIMEOUT) {
    return QueryStatus.Timeout
  }

  return QueryStatus.Unknown
}

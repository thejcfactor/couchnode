import {
  // QueryScanConsistency,
  // QueryProfileMode,
  QueryStatus,
} from '../querytypes'
import { QueryResponse } from './generated/couchbase/query.v1_pb'

/**
 * @internal
 */
type MetaDataStatus = QueryResponse.MetaData.MetaDataStatusMap

/**
 * @internal
 */
export function queryStatusFromGrpc(
  status: MetaDataStatus[keyof MetaDataStatus]
): QueryStatus {
  if (status == QueryResponse.MetaData.MetaDataStatus.ABORTED) {
    return QueryStatus.Aborted
  } else if (status == QueryResponse.MetaData.MetaDataStatus.CLOSED) {
    return QueryStatus.Closed
  } else if (status == QueryResponse.MetaData.MetaDataStatus.COMPLETED) {
    return QueryStatus.Completed
  } else if (status == QueryResponse.MetaData.MetaDataStatus.ERRORS) {
    return QueryStatus.Errors
  } else if (status == QueryResponse.MetaData.MetaDataStatus.FATAL) {
    return QueryStatus.Fatal
  } else if (status == QueryResponse.MetaData.MetaDataStatus.RUNNING) {
    return QueryStatus.Running
  } else if (status == QueryResponse.MetaData.MetaDataStatus.STOPPED) {
    return QueryStatus.Stopped
  } else if (status == QueryResponse.MetaData.MetaDataStatus.SUCCESS) {
    return QueryStatus.Success
  } else if (status == QueryResponse.MetaData.MetaDataStatus.TIMEOUT) {
    return QueryStatus.Timeout
  }

  return QueryStatus.Unknown
}

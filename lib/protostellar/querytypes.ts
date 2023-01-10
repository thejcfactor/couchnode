import {QueryResponse} from './generated/couchbase/query.v1_pb'

import { MutationState } from './mutationstate'
import { QueryScanConsistency, QueryProfileMode, QueryStatus } from '../querytypes'

export interface QueryTuningOptions {
  /**
   * This is an advanced option, see the query service reference for more
   * information on the proper use and tuning of this option.
   */
  maxParallelism?: number

  /**
   * This is an advanced option, see the query service reference for more
   * information on the proper use and tuning of this option.
   */
  pipelineBatch?: number

  /**
   * This is an advanced option, see the query service reference for more
   * information on the proper use and tuning of this option.
   */
  pipelineCap?: number

  /**
   * This is an advanced option, see the query service reference for more
   * information on the proper use and tuning of this option.  Specified
   * in milliseconds.
   */
  scanWait?: number

  /**
   * This is an advanced option, see the query service reference for more
   * information on the proper use and tuning of this option.
   */
  scanCap?: number

  /**
   * Specifies whether or not to disable metrics on this query.
   */
  disableMetrics?: boolean
}


export interface QueryOptions {
  /**
   * Values to be used for the placeholders within the query.
   */
  parameters?: { [key: string]: any } | any[]

  /**
   * Specifies the consistency requirements when executing the query.
   *
   * @see QueryScanConsistency
   */
  scanConsistency?: QueryScanConsistency

  /**
   * Specifies a MutationState which the query should be consistent with.
   *
   * @see {@link MutationState}
   */
  consistentWith?: MutationState

  /**
   * Specifies whether this is an ad-hoc query, or if it should be prepared
   * for faster execution in the future.
   */
  adhoc?: boolean

  /**
   * Specifies whether flex-indexes should be enabled.  Allowing the use of
   * full-text search from the query service.
   */
  flexIndex?: boolean

  /**
   * Specifies that the query should preserve the existing document expiry times
   * when mutating documents.
   */
  preserveExpiry?: boolean

  /**
   * The returned client context id for this query.
   */
  clientContextId?: string


  tuningOptions?: QueryTuningOptions

  /**
   * Specifies that this query should be executed in read-only mode, disabling
   * the ability for the query to make any changes to the data.
   */
  readOnly?: boolean

  /**
   * Specifies the level of profiling that should be used for the query.
   */
  profile?: QueryProfileMode

  /**
   * Specifies whether metrics should be captured as part of the execution of
   * the query.
   */
  metrics?: boolean

  /**
   * Specifies the context within which this query should be executed.  This can be
   * scoped to a scope or a collection within the dataset.
   */
  queryContext?: string

  /**
   * Specifies any additional parameters which should be passed to the query engine
   * when executing the query.
   */
  raw?: { [key: string]: any }

  /**
   * The timeout for this operation, represented in milliseconds.
   */
  timeout?: number
}

type MetaDataStatus = QueryResponse.MetaData.MetaDataStatusMap

export function queryStatusFromGrpc(status: MetaDataStatus[keyof MetaDataStatus]): QueryStatus {
  if(status == QueryResponse.MetaData.MetaDataStatus.ABORTED){
    return QueryStatus.Aborted
  } else if (status == QueryResponse.MetaData.MetaDataStatus.CLOSED){
    return QueryStatus.Closed
  } else if (status == QueryResponse.MetaData.MetaDataStatus.COMPLETED){
    return QueryStatus.Completed
  } else if (status == QueryResponse.MetaData.MetaDataStatus.ERRORS){
    return QueryStatus.Errors
  } else if (status == QueryResponse.MetaData.MetaDataStatus.FATAL){
    return QueryStatus.Fatal
  } else if (status == QueryResponse.MetaData.MetaDataStatus.RUNNING){
    return QueryStatus.Running
  } else if (status == QueryResponse.MetaData.MetaDataStatus.STOPPED){
    return QueryStatus.Stopped
  } else if (status == QueryResponse.MetaData.MetaDataStatus.SUCCESS){
    return QueryStatus.Success
  } else if (status == QueryResponse.MetaData.MetaDataStatus.TIMEOUT){
    return QueryStatus.Timeout
  }

  return QueryStatus.Unknown
}
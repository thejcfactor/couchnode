/**
 * Represents the various service types available.
 */
export enum ServiceType {
  /**
   * The key-value service, responsible for data storage.
   */
  KeyValue = 'kv',

  /**
   * The management service, responsible for managing the cluster.
   */
  Management = 'mgmt',

  /**
   * The views service, responsible for views querying.
   */
  Views = 'views',

  /**
   * The query service, responsible for N1QL querying.
   */
  Query = 'query',

  /**
   * The search service, responsible for full-text search querying.
   */
  Search = 'search',

  /**
   * The analytics service, responsible for analytics querying.
   */
  Analytics = 'analytics',
}

/**
 * Represents the durability level required for an operation.
 */
export enum DurabilityLevel {
  /**
   * Indicates that no durability is needed.
   */
  None = 0,

  /**
   * Indicates that mutations should be replicated to a majority of the
   * nodes in the cluster before the operation is marked as successful.
   */
  Majority = 1,

  /**
   * Indicates that mutations should be replicated to a majority of the
   * nodes in the cluster and persisted to the master node before the
   * operation is marked as successful.
   */
  MajorityAndPersistOnMaster = 2,

  /**
   * Indicates that mutations should be persisted to the majority of the
   * nodes in the cluster before the operation is marked as successful.
   */
  PersistToMajority = 3,
}
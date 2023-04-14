import { DurabilityLevel as ClassicDurabilityLevel } from '../generaltypes'
import { DurabilityLevel, DurabilityLevelMap } from './generated/couchbase/kv/v1/kv_pb'

/**
 * @internal
 */
export function toProtostellarDurabilityLevel(
  level: ClassicDurabilityLevel | string | undefined
): DurabilityLevelMap[keyof DurabilityLevelMap] | undefined {
  if (level === undefined) {
    return undefined
  }

  if (level === ClassicDurabilityLevel.None) {
    return undefined
  } else if (level === ClassicDurabilityLevel.Majority) {
    return DurabilityLevel.DURABILITY_LEVEL_MAJORITY
  } else if (level === ClassicDurabilityLevel.MajorityAndPersistOnMaster) {
    return DurabilityLevel.DURABILITY_LEVEL_MAJORITY_AND_PERSIST_TO_ACTIVE
  } else if (level === ClassicDurabilityLevel.PersistToMajority) {
    return DurabilityLevel.DURABILITY_LEVEL_PERSIST_TO_MAJORITY
  } else {
    throw new Error('invalid durability level specified')
  }
}

/**
 * @internal
 */
export function durabilityLevelFromProtostellar(
  level: DurabilityLevelMap[keyof DurabilityLevelMap] | undefined
): ClassicDurabilityLevel {
  if (level === undefined) {
    return ClassicDurabilityLevel.None
  }

  if (level === DurabilityLevel.DURABILITY_LEVEL_MAJORITY) {
    return ClassicDurabilityLevel.Majority
  } else if (level === DurabilityLevel.DURABILITY_LEVEL_MAJORITY_AND_PERSIST_TO_ACTIVE) {
    return ClassicDurabilityLevel.MajorityAndPersistOnMaster
  } else if (level === DurabilityLevel.DURABILITY_LEVEL_PERSIST_TO_MAJORITY) {
    return ClassicDurabilityLevel.PersistToMajority
  } else {
    throw new Error('invalid durability level specified')
  }
}
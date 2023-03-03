import { LookupInSpec, MutateInSpec, SubdocOpcode } from '../sdspecs'
import {
  LookupInRequest,
  MutateInRequest,
} from './generated/couchbase/kv.v1_pb'

/**
 * @internal
 */
type LookupInOpCode = LookupInRequest.Spec.OperationMap

/**
 * @internal
 */
type MutateInOpCode = MutateInRequest.Spec.OperationMap

/**
 * @internal
 */
function toProtostellarLookupInOpCode(
  opCode: SubdocOpcode
): LookupInOpCode[keyof LookupInOpCode] {
  switch (opCode) {
    // case SubdocOpcode.GetDoc:
    //   return LookupInRequest.Spec.Operation.GET
    case SubdocOpcode.Get:
      return LookupInRequest.Spec.Operation.GET
    case SubdocOpcode.Exists:
      return LookupInRequest.Spec.Operation.EXISTS
    case SubdocOpcode.GetCount:
      return LookupInRequest.Spec.Operation.COUNT
    default:
      throw new Error('Invalid lookup-in op code.')
  }
}

/**
 * @internal
 */
function toProtostellarMutateInOpCode(
  opCode: SubdocOpcode
): MutateInOpCode[keyof MutateInOpCode] {
  switch (opCode) {
    // case SubdocOpcode.SetDoc:
    //   return binding.protocol_subdoc_opcode.set_doc
    // case SubdocOpcode.RemoveDoc:
    //   return binding.protocol_subdoc_opcode.remove_doc
    case SubdocOpcode.DictAdd:
      return MutateInRequest.Spec.Operation.INSERT
    case SubdocOpcode.DictUpsert:
      return MutateInRequest.Spec.Operation.UPSERT
    case SubdocOpcode.Remove:
      return MutateInRequest.Spec.Operation.REMOVE
    case SubdocOpcode.Replace:
      return MutateInRequest.Spec.Operation.REPLACE
    case SubdocOpcode.ArrayPushLast:
      return MutateInRequest.Spec.Operation.ARRAY_APPEND
    case SubdocOpcode.ArrayPushFirst:
      return MutateInRequest.Spec.Operation.ARRAY_PREPEND
    case SubdocOpcode.ArrayInsert:
      return MutateInRequest.Spec.Operation.ARRAY_INSERT
    case SubdocOpcode.ArrayAddUnique:
      return MutateInRequest.Spec.Operation.ARRAY_ADD_UNIQUE
    case SubdocOpcode.Counter:
      return MutateInRequest.Spec.Operation.COUNTER
    // case SubdocOpcode.ReplaceBodyWithXattr:
    //   return binding.protocol_subdoc_opcode.replace_body_with_xattr
    default:
      throw new Error('Invalid mutate-in op code.')
  }
}

/**
 * @internal
 */
export function toProtostellarLookupInSpecs(
  specs: LookupInSpec[]
): LookupInRequest.Spec[] {
  const psSpecs: LookupInRequest.Spec[] = []
  for (let i = 0; i < specs.length; ++i) {
    const newSpec = new LookupInRequest.Spec()
    if (specs[i]._flags?.xattr) {
      const flags = new LookupInRequest.Spec.Flags()
      flags.setXattr(true)
      newSpec.setFlags(flags)
    }
    newSpec.setOperation(toProtostellarLookupInOpCode(specs[i]._op))
    newSpec.setPath(specs[i]._path)
    psSpecs.push(newSpec)
  }

  return psSpecs
}

/**
 * @internal
 */
export function toProtostellarMutateInSpecs(
  specs: MutateInSpec[]
): MutateInRequest.Spec[] {
  const psSpecs: MutateInRequest.Spec[] = []
  for (let i = 0; i < specs.length; ++i) {
    const newSpec = new MutateInRequest.Spec()
    const flags = new MutateInRequest.Spec.Flags()
    // if (specs[i]._flags?.expand_macros) {
    //   flags |=
    //     binding.protocol_mutate_in_request_body_mutate_in_specs_path_flag
    //       .expand_macros
    // }

    if (specs[i]._flags?.createParents) {
      flags.setCreatePath(true)
    }

    if (specs[i]._flags?.xattr) {
      flags.setXattr(true)
    }

    if (flags.hasCreatePath() || flags.hasXattr()) {
      newSpec.setFlags(flags)
    }

    newSpec.setOperation(toProtostellarMutateInOpCode(specs[i]._op))
    newSpec.setPath(specs[i]._path)
    newSpec.setContent(
      specs[i]._data ? Buffer.from(specs[i]._data) : specs[i]._data
    )
    psSpecs.push(newSpec)
  }

  return psSpecs
}

import binding, { CppImplSubdocCommand, CppProtocolSubdocOpcode  } from './binding'
import { LookupInSpec, MutateInSpec, SubdocOpcode } from '../sdspecs'

/**
 * Represents a sub-operation to perform within a lookup-in operation.
 *
 * @category Key-Value
 */
export interface ClassicLookupInSpec {
}

function toCppSubdocOpCode(opCode: SubdocOpcode): CppProtocolSubdocOpcode {
  switch(opCode){
    case SubdocOpcode.GetDoc:
      return binding.protocol_subdoc_opcode.get_doc
    case SubdocOpcode.SetDoc:
      return binding.protocol_subdoc_opcode.set_doc
    case SubdocOpcode.RemoveDoc:
      return binding.protocol_subdoc_opcode.remove_doc
    case SubdocOpcode.Get:
      return binding.protocol_subdoc_opcode.get
    case SubdocOpcode.Exists:
      return binding.protocol_subdoc_opcode.exists
    case SubdocOpcode.DictAdd:
      return binding.protocol_subdoc_opcode.dict_add
    case SubdocOpcode.DictUpsert:
      return binding.protocol_subdoc_opcode.dict_upsert
    case SubdocOpcode.Remove:
      return binding.protocol_subdoc_opcode.remove
    case SubdocOpcode.Replace:
      return binding.protocol_subdoc_opcode.replace
    case SubdocOpcode.ArrayPushLast:
      return binding.protocol_subdoc_opcode.array_push_last
    case SubdocOpcode.ArrayPushFirst:
      return binding.protocol_subdoc_opcode.array_push_first
    case SubdocOpcode.ArrayInsert:
      return binding.protocol_subdoc_opcode.array_insert
    case SubdocOpcode.ArrayAddUnique:
      return binding.protocol_subdoc_opcode.array_add_unique
    case SubdocOpcode.Counter:
      return binding.protocol_subdoc_opcode.counter
    case SubdocOpcode.GetCount:
      return binding.protocol_subdoc_opcode.get_count
    case SubdocOpcode.ReplaceBodyWithXattr:
      return binding.protocol_subdoc_opcode.replace_body_with_xattr
  }

}

export function toCppLookupInSpecs(specs: LookupInSpec[]): CppImplSubdocCommand[] {
  const cppSpecs: CppImplSubdocCommand[] = []
  for (let i = 0; i < specs.length; ++i) {
    let flags = 0
    if (specs[i]._flags?.xattr) {
      flags |=
        binding.protocol_lookup_in_request_body_lookup_in_specs_path_flag.xattr
    }

    cppSpecs.push({
      opcode_: toCppSubdocOpCode(specs[i]._op),
      flags_: flags,
      path_: specs[i]._path,
      original_index_: i,
    })
  }

  return cppSpecs
}

export function toCppMutateInSpecs(specs: MutateInSpec[]): CppImplSubdocCommand[] {
  const cppSpecs: CppImplSubdocCommand[] = []
  for (let i = 0; i < specs.length; ++i) {
    let flags = 0
    if (specs[i]._flags?.expand_macros) {
      flags |=
        binding.protocol_mutate_in_request_body_mutate_in_specs_path_flag
          .expand_macros
    }

    if (specs[i]._flags?.createParents) {
      flags |=
        binding.protocol_mutate_in_request_body_mutate_in_specs_path_flag
          .create_parents
    }

    if (specs[i]._flags?.xattr) {
      flags |=
        binding.protocol_lookup_in_request_body_lookup_in_specs_path_flag.xattr
    }

    cppSpecs.push({
      opcode_: specs[i]._op,
      flags_: flags,
      path_: specs[i]._path,
      value_: specs[i]._data
        ? Buffer.from(specs[i]._data)
        : specs[i]._data,
      original_index_: 0,
    })
  }

  return cppSpecs
}
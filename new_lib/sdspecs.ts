/**
 * @internal
 * Represents the various sub-document op codes.
 */
export enum SubdocOpcode {
  /**
   * The GET_DOC op code.
   */
  GetDoc = 0,
  
  /**
   * The sET_DOC op code.
   */  
  SetDoc = 1,
  
  /**
   * The REMOVE_DOC op code.
   */
  RemoveDoc = 4,

  /**
   * The GET op code.
   */
  Get = 197,

  /**
   * The EXISTS op code.
   */
  Exists = 198,

  /**
   * The DICT_ADD op code.
   */
  DictAdd = 199,

  /**
   * The DICT_UPSERT op code.
   */
  DictUpsert = 200,

  /**
   * The REMOVE op code.
   */
  Remove = 201,

  /**
   * The REPLACE op code.
   */
  Replace = 202,

  /**
   * The ARRAY_PUSH_LAST op code.
   */
  ArrayPushLast = 203,

  /**
   * The ARRAY_PUSH_FIRST op code.
   */
  ArrayPushFirst = 204,

  /**
   * The ARRAY_INSERT op code.
   */
  ArrayInsert = 205,

  /**
   * The ARRAY_ADD_UNIQUE op code.
   */
  ArrayAddUnique = 206,

  /**
   * The COUNTER op code.
   */
  Counter = 207,

  /**
   * The GET_COUNT op code.
   */
  GetCount = 210,

  /**
   * The REPLACE_BODY_WITH_XATTR op code.
   */
  ReplaceBodyWithXattr = 211
}

/**
 * Represents a macro that can be passed to a lookup-in operation to
 * fetch special values such as the expiry, cas, etc...
 *
 * @category Key-Value
 */
export class LookupInMacro {
  /**
   * @internal
   */
  _value: string

  constructor(value: string) {
    this._value = value
  }

  /**
   * A macro which references the entirety of the document meta-data.
   */
  static get Document(): LookupInMacro {
    return new LookupInMacro('$document')
  }

  /**
   * A macro which references the expiry of a document.
   */
  static get Expiry(): LookupInMacro {
    return new LookupInMacro('$document.exptime')
  }

  /**
   * A macro which references the cas of a document.
   */
  static get Cas(): LookupInMacro {
    return new LookupInMacro('$document.CAS')
  }

  /**
   * A macro which references the seqno of a document.
   */
  static get SeqNo(): LookupInMacro {
    return new LookupInMacro('$document.seqno')
  }

  /**
   * A macro which references the last modified time of a document.
   */
  static get LastModified(): LookupInMacro {
    return new LookupInMacro('$document.last_modified')
  }

  /**
   * A macro which references the deletion state of a document.  This
   * only makes sense to use in concert with the internal AccessDeleted
   * flags, which are internal.
   */
  static get IsDeleted(): LookupInMacro {
    return new LookupInMacro('$document.deleted')
  }

  /**
   * A macro which references the size of a document, expressed in bytes.
   */
  static get ValueSizeBytes(): LookupInMacro {
    return new LookupInMacro('$document.value_bytes')
  }

  /**
   * A macro which references the revision id of a document.
   */
  static get RevId(): LookupInMacro {
    return new LookupInMacro('$document.revid')
  }
}

/**
 * Represents a macro that can be passed to a mutate-in operation to
 * write special values such as the expiry, cas, etc...
 *
 * @category Key-Value
 */
export class MutateInMacro {
  /**
   * @internal
   */
  _value: string

  constructor(value: string) {
    this._value = value
  }

  /**
   * A macro which references the cas of a document.
   */
  static get Cas(): MutateInMacro {
    return new MutateInMacro('${document.CAS}')
  }

  /**
   * A macro which references the seqno of a document.
   */
  static get SeqNo(): MutateInMacro {
    return new MutateInMacro('${document.seqno}')
  }

  /**
   * A macro which references the crc32 of the value of a document.
   */
  static get ValueCrc32c(): MutateInMacro {
    return new MutateInMacro('${document.value_crc32c}')
  }
}

/**
 * Represents a sub-operation to perform within a lookup-in operation.
 *
 * @category Key-Value
 */
export class LookupInSpec {
  /**
   * BUG(JSCBC-756): Previously provided access to the expiry macro for a
   * lookup-in operation.
   *
   * @deprecated Use {@link LookupInMacro.Expiry} instead.
   */
  static get Expiry(): LookupInMacro {
    return LookupInMacro.Expiry
  }

  /**
   * @internal
   */
  _op: SubdocOpcode

  /**
   * @internal
   */
  _path: string

  /**
   * @internal
   */
  _flags: {[key: string]: boolean}

  private constructor(
    op: SubdocOpcode,
    path: string,
    flags: {[key: string]: boolean}
  ) {
    this._op = op
    this._path = path
    this._flags = flags
  }

  private static _create(
    op: SubdocOpcode,
    path: string | LookupInMacro,
    options?: { xattr?: boolean }
  ) {
    if (!options) {
      options = {}
    }

    let flags = { xattr: false }

    if (path instanceof LookupInMacro) {
      path = path._value
      flags.xattr = true
    }

    if (options.xattr) {
      flags.xattr = true
    }

    return new LookupInSpec(op, path, flags)
  }

  /**
   * Creates a LookupInSpec for fetching a field from the document.
   *
   * @param path The path to the field.
   * @param options Optional parameters for this operation.
   * @param options.xattr
   * Whether this operation should reference the document body or the extended
   * attributes data for the document.
   */
  static get(
    path: string | LookupInMacro,
    options?: { xattr?: boolean }
  ): LookupInSpec {
    if (!path) {
      return this._create(SubdocOpcode.GetDoc, '', options)
    }
    return this._create(SubdocOpcode.Get, path, options)
  }

  /**
   * Returns whether a specific field exists in the document.
   *
   * @param path The path to the field.
   * @param options Optional parameters for this operation.
   * @param options.xattr
   * Whether this operation should reference the document body or the extended
   * attributes data for the document.
   */
  static exists(
    path: string | LookupInMacro,
    options?: { xattr?: boolean }
  ): LookupInSpec {
    return this._create(SubdocOpcode.Exists, path, options)
  }

  /**
   * Returns the number of elements in the array reference by the path.
   *
   * @param path The path to the field.
   * @param options Optional parameters for this operation.
   * @param options.xattr
   * Whether this operation should reference the document body or the extended
   * attributes data for the document.
   */
  static count(
    path: string | LookupInMacro,
    options?: { xattr?: boolean }
  ): LookupInSpec {
    return this._create(SubdocOpcode.GetCount, path, options)
  }
}

/**
 * Represents a sub-operation to perform within a mutate-in operation.
 *
 * @category Key-Value
 */
export class MutateInSpec {
  /**
   * BUG(JSCBC-756): Previously provided access to the document cas mutate
   * macro.
   *
   * @deprecated Use {@link MutateInMacro.Cas} instead.
   */
  static get CasPlaceholder(): MutateInMacro {
    return MutateInMacro.Cas
  }

  /**
   * @internal
   */
  _op: SubdocOpcode

  /**
   * @internal
   */
  _path: string

  /**
   * @internal
   */
  _flags: {[key: string]: boolean}

  /**
   * @internal
   */
  _data: any

  private constructor(
    op: SubdocOpcode,
    path: string,
    flags: {[key: string]: boolean},
    data: any
  ) {
    this._op = op
    this._path = path
    this._flags = flags
    this._data = data
  }

  private static _create(
    op: SubdocOpcode,
    path: string,
    value?: any | MutateInMacro,
    options?: {
      createPath?: boolean
      multi?: boolean
      xattr?: boolean
    }
  ) {
    if (!options) {
      options = {}
    }

    let flags = {
      expandMacros: false,
      createParents: false,
      xattr: false
    }

    if (value instanceof MutateInMacro) {
      value = value._value
      flags.expandMacros = true
    }

    if (options.createPath) {
      flags.createParents = true
    }

    if (options.xattr) {
      flags.xattr = true
    }

    if (value !== undefined) {
      // BUG(JSCBC-755): As a solution to our oversight of not accepting arrays of
      // values to various sub-document operations, we have exposed an option instead.
      if (!options.multi) {
        value = JSON.stringify(value)
      } else {
        if (!Array.isArray(value)) {
          throw new Error('value must be an array for a multi operation')
        }

        value = JSON.stringify(value)
        value = value.substr(1, value.length - 2)
      }
    }

    return new MutateInSpec(op, path, flags, value)
  }

  /**
   * Creates a MutateInSpec for inserting a field into the document.  Failing if
   * the field already exists at the specified path.
   *
   * @param path The path to the field.
   * @param value The value to insert.
   * @param options Optional parameters for this operation.
   * @param options.createPath
   * Whether or not the path to the field should be created if it does not
   * already exist.
   * @param options.xattr
   * Whether this operation should reference the document body or the extended
   * attributes data for the document.
   */
  static insert(
    path: string,
    value: any,
    options?: { createPath?: boolean; xattr?: boolean }
  ): MutateInSpec {
    return this._create(
      SubdocOpcode.DictAdd,
      path,
      value,
      options
    )
  }

  /**
   * Creates a MutateInSpec for upserting a field on a document.  This updates
   * the value of the specified field, or creates the field if it does not exits.
   *
   * @param path The path to the field.
   * @param value The value to write.
   * @param options Optional parameters for this operation.
   * @param options.createPath
   * Whether or not the path to the field should be created if it does not
   * already exist.
   * @param options.xattr
   * Whether this operation should reference the document body or the extended
   * attributes data for the document.
   */
  static upsert(
    path: string,
    value: any | MutateInMacro,
    options?: { createPath?: boolean; xattr?: boolean }
  ): MutateInSpec {
    if (!path) {
      return this._create(
        SubdocOpcode.SetDoc,
        '',
        value,
        options
      )
    }
    return this._create(
      SubdocOpcode.DictUpsert,
      path,
      value,
      options
    )
  }

  /**
   * Creates a MutateInSpec for replacing a field on a document.  This updates
   * the value of the specified field, failing if the field does not exits.
   *
   * @param path The path to the field.
   * @param value The value to write.
   * @param options Optional parameters for this operation.
   * @param options.xattr
   * Whether this operation should reference the document body or the extended
   * attributes data for the document.
   */
  static replace(
    path: string,
    value: any | MutateInMacro,
    options?: { xattr?: boolean }
  ): MutateInSpec {
    return this._create(
      SubdocOpcode.Replace,
      path,
      value,
      options
    )
  }

  /**
   * Creates a MutateInSpec for remove a field from a document.
   *
   * @param path The path to the field.
   * @param options Optional parameters for this operation.
   * @param options.xattr
   * Whether this operation should reference the document body or the extended
   * attributes data for the document.
   */
  static remove(path: string, options?: { xattr?: boolean }): MutateInSpec {
    if (!path) {
      return this._create(
        SubdocOpcode.Remove,
        '',
        undefined,
        options
      )
    }
    return this._create(
      SubdocOpcode.Remove,
      path,
      undefined,
      options
    )
  }

  /**
   * Creates a MutateInSpec for adding a value to the end of an array in a document.
   *
   * @param path The path to the field.
   * @param value The value to add.
   * @param options Optional parameters for this operation.
   * @param options.createPath
   * Whether or not the path to the field should be created if it does not
   * already exist.
   * @param options.multi
   * If set, this enables an array of values to be passed as value, and each
   * element of the passed array is added to the array.
   * @param options.xattr
   * Whether this operation should reference the document body or the extended
   * attributes data for the document.
   */
  static arrayAppend(
    path: string,
    value: any | MutateInMacro,
    options?: { createPath?: boolean; multi?: boolean; xattr?: boolean }
  ): MutateInSpec {
    return this._create(
      SubdocOpcode.ArrayPushLast,
      path,
      value,
      options
    )
  }

  /**
   * Creates a MutateInSpec for adding a value to the beginning of an array in a document.
   *
   * @param path The path to the field.
   * @param value The value to add.
   * @param options Optional parameters for this operation.
   * @param options.createPath
   * Whether or not the path to the field should be created if it does not
   * already exist.
   * @param options.multi
   * If set, this enables an array of values to be passed as value, and each
   * element of the passed array is added to the array.
   * @param options.xattr
   * Whether this operation should reference the document body or the extended
   * attributes data for the document.
   */
  static arrayPrepend(
    path: string,
    value: any | MutateInMacro,
    options?: { createPath?: boolean; multi?: boolean; xattr?: boolean }
  ): MutateInSpec {
    return this._create(
      SubdocOpcode.ArrayPushFirst,
      path,
      value,
      options
    )
  }

  /**
   * Creates a MutateInSpec for adding a value to a specified location in an array in a
   * document.  The path should specify a specific index in the array and the new values
   * are inserted at this location.
   *
   * @param path The path to an element of an array.
   * @param value The value to add.
   * @param options Optional parameters for this operation.
   * @param options.createPath
   * Whether or not the path to the field should be created if it does not
   * already exist.
   * @param options.multi
   * If set, this enables an array of values to be passed as value, and each
   * element of the passed array is added to the array.
   * @param options.xattr
   * Whether this operation should reference the document body or the extended
   * attributes data for the document.
   */
  static arrayInsert(
    path: string,
    value: any | MutateInMacro,
    options?: { createPath?: boolean; multi?: boolean; xattr?: boolean }
  ): MutateInSpec {
    return this._create(
      SubdocOpcode.ArrayInsert,
      path,
      value,
      options
    )
  }

  /**
   * Creates a MutateInSpec for adding unique values to an array in a document.  This
   * operation will only add values if they do not already exist elsewhere in the array.
   *
   * @param path The path to the field.
   * @param value The value to add.
   * @param options Optional parameters for this operation.
   * @param options.createPath
   * Whether or not the path to the field should be created if it does not
   * already exist.
   * @param options.multi
   * If set, this enables an array of values to be passed as value, and each
   * element of the passed array is added to the array.
   * @param options.xattr
   * Whether this operation should reference the document body or the extended
   * attributes data for the document.
   */
  static arrayAddUnique(
    path: string,
    value: any | MutateInMacro,
    options?: { createPath?: boolean; multi?: boolean; xattr?: boolean }
  ): MutateInSpec {
    return this._create(
      SubdocOpcode.ArrayAddUnique,
      path,
      value,
      options
    )
  }

  /**
   * Creates a MutateInSpec for incrementing the value of a field in a document.
   *
   * @param path The path to the field.
   * @param value The value to add.
   * @param options Optional parameters for this operation.
   * @param options.createPath
   * Whether or not the path to the field should be created if it does not
   * already exist.
   * @param options.xattr
   * Whether this operation should reference the document body or the extended
   * attributes data for the document.
   */
  static increment(
    path: string,
    value: any,
    options?: { createPath?: boolean; xattr?: boolean }
  ): MutateInSpec {
    return this._create(
      SubdocOpcode.Counter,
      path,
      +value,
      options
    )
  }

  /**
   * Creates a MutateInSpec for decrementing the value of a field in a document.
   *
   * @param path The path to the field.
   * @param value The value to subtract.
   * @param options Optional parameters for this operation.
   * @param options.createPath
   * Whether or not the path to the field should be created if it does not
   * already exist.
   * @param options.xattr
   * Whether this operation should reference the document body or the extended
   * attributes data for the document.
   */
  static decrement(
    path: string,
    value: any,
    options?: { createPath?: boolean; xattr?: boolean }
  ): MutateInSpec {
    return this._create(
      SubdocOpcode.Counter,
      path,
      +value,
      options
    )
  }
}

import * as errs from '../errors'
import * as grpc from '@grpc/grpc-js'


const ALREADY_EXISTS_MAPPING = [
  { regex: /.*[sS]ubdocument path.*already existed/g, err: errs.PathExistsError },
  { regex: /.*[bB]ucket.*already existed/g, err: errs.BucketExistsError }
]

const NOT_FOUND_MAPPING = [
  { regex: /.*[bB]ucket.*not found/g, err: errs.BucketNotFoundError },
  { regex: /.*[sS]ubdocument path.*not found/g, err: errs.PathNotFoundError },
]

const PRECONDITION_FAILURE_MAPPING = [
  { regex: /.*specified CAS.*did not match.*/g, err: errs.CasMismatchError },
  { regex: /.*locked document.*/g, err: errs.DocumentLockedError },
  { regex: /.*[sS]ubdocument operation.*invalidate.*JSON.*/g, err: errs.ValueInvalidError },
  { regex: /.*[dD]ocument structure implied by path.*did not match document.*/g, err: errs.PathMismatchError },
]


/**
 * @internal
 */
export function errorFromProtostellar(err: any | null): Error | null {
  if (!err) {
    return null
  }

  const baseErr = err as any as Error
  let idx = -1
  switch (err.code) {
    case grpc.status.NOT_FOUND:
      idx = NOT_FOUND_MAPPING.findIndex((mapping) => {
        return mapping.regex.test(err.details)
      })
      if(idx >= 0){
        return new NOT_FOUND_MAPPING[idx].err(baseErr)
      }
      break
    case grpc.status.ALREADY_EXISTS:
      idx = ALREADY_EXISTS_MAPPING.findIndex((mapping) => {
        return mapping.regex.test(err.details)
      })
      if(idx >= 0){
        return new ALREADY_EXISTS_MAPPING[idx].err(baseErr)
      }
      break
    case grpc.status.UNIMPLEMENTED:
      return new errs.FeatureNotAvailableError(baseErr)
    case grpc.status.DEADLINE_EXCEEDED:
      return new errs.AmbiguousTimeoutError(baseErr)
    case grpc.status.FAILED_PRECONDITION:
      idx = PRECONDITION_FAILURE_MAPPING.findIndex((mapping) => {
        return mapping.regex.test(err.details)
      })
      if(idx >= 0){
        return new PRECONDITION_FAILURE_MAPPING[idx].err(baseErr)
      }
      break
    case grpc.status.UNKNOWN:
  }

  return new errs.CouchbaseError("Unknown error ocurred.", baseErr)
}

import * as errs from '../errors'

/**
 * @internal
 */
export function errorFromProtostellarPrecondition(details: string, baseErr: Error): Error | null {
  const casRegex = /.*specified CAS.*did not match.*/g
  const lockedRegex = /.*locked document.*/g
  const invalidValuehRegex = /.*[sS]ubdocument operation.*invalidate.*JSON.*/g
  const pathMismatchRegex = /.*[dD]ocument structure implied by path.*did not match document.*/g

  if(casRegex.exec(details)){
    return new errs.CasMismatchError(baseErr)
  } else if (lockedRegex.exec(details)){
    return new errs.DocumentLockedError(baseErr)
  } else if (invalidValuehRegex.exec(details)){
    return new errs.ValueInvalidError(baseErr)
  } else if (pathMismatchRegex.exec(details)){
    return new errs.PathMismatchError(baseErr)
  }

  return null
}
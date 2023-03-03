import * as errs from '../errors'
import * as grpc from '@grpc/grpc-js'

/**
 * @internal
 */
export function errorFromProtostellar(err: any | null): Error | null {
  if (!err) {
    return null
  }

  const baseErr = err as any as Error
  switch (err.code) {
    case grpc.status.NOT_FOUND:
      return new errs.DocumentNotFoundError(baseErr)
    case grpc.status.ALREADY_EXISTS:
      return new errs.DocumentExistsError(baseErr)
    case grpc.status.UNIMPLEMENTED:
      return new errs.FeatureNotAvailableError(baseErr)
  }

  return baseErr
}

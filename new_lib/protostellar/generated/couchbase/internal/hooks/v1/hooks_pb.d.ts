// package: couchbase.internal.hooks.v1
// file: couchbase/internal/hooks/v1/hooks.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class CreateHooksContextRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHooksContextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHooksContextRequest): CreateHooksContextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateHooksContextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHooksContextRequest;
  static deserializeBinaryFromReader(message: CreateHooksContextRequest, reader: jspb.BinaryReader): CreateHooksContextRequest;
}

export namespace CreateHooksContextRequest {
  export type AsObject = {
    id: string,
  }
}

export class CreateHooksContextResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHooksContextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHooksContextResponse): CreateHooksContextResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateHooksContextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHooksContextResponse;
  static deserializeBinaryFromReader(message: CreateHooksContextResponse, reader: jspb.BinaryReader): CreateHooksContextResponse;
}

export namespace CreateHooksContextResponse {
  export type AsObject = {
  }
}

export class DestroyHooksContextRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DestroyHooksContextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DestroyHooksContextRequest): DestroyHooksContextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DestroyHooksContextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DestroyHooksContextRequest;
  static deserializeBinaryFromReader(message: DestroyHooksContextRequest, reader: jspb.BinaryReader): DestroyHooksContextRequest;
}

export namespace DestroyHooksContextRequest {
  export type AsObject = {
    id: string,
  }
}

export class DestroyHooksContextResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DestroyHooksContextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DestroyHooksContextResponse): DestroyHooksContextResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DestroyHooksContextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DestroyHooksContextResponse;
  static deserializeBinaryFromReader(message: DestroyHooksContextResponse, reader: jspb.BinaryReader): DestroyHooksContextResponse;
}

export namespace DestroyHooksContextResponse {
  export type AsObject = {
  }
}

export class ValueRef extends jspb.Message {
  hasRequestField(): boolean;
  clearRequestField(): void;
  getRequestField(): string;
  setRequestField(value: string): void;

  hasCounterValue(): boolean;
  clearCounterValue(): void;
  getCounterValue(): string;
  setCounterValue(value: string): void;

  hasJsonValue(): boolean;
  clearJsonValue(): void;
  getJsonValue(): Uint8Array | string;
  getJsonValue_asU8(): Uint8Array;
  getJsonValue_asB64(): string;
  setJsonValue(value: Uint8Array | string): void;

  getValueCase(): ValueRef.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueRef.AsObject;
  static toObject(includeInstance: boolean, msg: ValueRef): ValueRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueRef;
  static deserializeBinaryFromReader(message: ValueRef, reader: jspb.BinaryReader): ValueRef;
}

export namespace ValueRef {
  export type AsObject = {
    requestField: string,
    counterValue: string,
    jsonValue: Uint8Array | string,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    REQUEST_FIELD = 1,
    COUNTER_VALUE = 2,
    JSON_VALUE = 3,
  }
}

export class HookCondition extends jspb.Message {
  hasLeft(): boolean;
  clearLeft(): void;
  getLeft(): ValueRef | undefined;
  setLeft(value?: ValueRef): void;

  getOp(): ComparisonOperatorMap[keyof ComparisonOperatorMap];
  setOp(value: ComparisonOperatorMap[keyof ComparisonOperatorMap]): void;

  hasRight(): boolean;
  clearRight(): void;
  getRight(): ValueRef | undefined;
  setRight(value?: ValueRef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HookCondition.AsObject;
  static toObject(includeInstance: boolean, msg: HookCondition): HookCondition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HookCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HookCondition;
  static deserializeBinaryFromReader(message: HookCondition, reader: jspb.BinaryReader): HookCondition;
}

export namespace HookCondition {
  export type AsObject = {
    left?: ValueRef.AsObject,
    op: ComparisonOperatorMap[keyof ComparisonOperatorMap],
    right?: ValueRef.AsObject,
  }
}

export class HookAction extends jspb.Message {
  hasIf(): boolean;
  clearIf(): void;
  getIf(): HookAction.If | undefined;
  setIf(value?: HookAction.If): void;

  hasCounter(): boolean;
  clearCounter(): void;
  getCounter(): HookAction.Counter | undefined;
  setCounter(value?: HookAction.Counter): void;

  hasWaitOnBarrier(): boolean;
  clearWaitOnBarrier(): void;
  getWaitOnBarrier(): HookAction.WaitOnBarrier | undefined;
  setWaitOnBarrier(value?: HookAction.WaitOnBarrier): void;

  hasSignalBarrier(): boolean;
  clearSignalBarrier(): void;
  getSignalBarrier(): HookAction.SignalBarrier | undefined;
  setSignalBarrier(value?: HookAction.SignalBarrier): void;

  hasReturnResponse(): boolean;
  clearReturnResponse(): void;
  getReturnResponse(): HookAction.ReturnResponse | undefined;
  setReturnResponse(value?: HookAction.ReturnResponse): void;

  hasReturnError(): boolean;
  clearReturnError(): void;
  getReturnError(): HookAction.ReturnError | undefined;
  setReturnError(value?: HookAction.ReturnError): void;

  hasExecute(): boolean;
  clearExecute(): void;
  getExecute(): HookAction.Execute | undefined;
  setExecute(value?: HookAction.Execute): void;

  getActionCase(): HookAction.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HookAction.AsObject;
  static toObject(includeInstance: boolean, msg: HookAction): HookAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HookAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HookAction;
  static deserializeBinaryFromReader(message: HookAction, reader: jspb.BinaryReader): HookAction;
}

export namespace HookAction {
  export type AsObject = {
    pb_if?: HookAction.If.AsObject,
    counter?: HookAction.Counter.AsObject,
    waitOnBarrier?: HookAction.WaitOnBarrier.AsObject,
    signalBarrier?: HookAction.SignalBarrier.AsObject,
    returnResponse?: HookAction.ReturnResponse.AsObject,
    returnError?: HookAction.ReturnError.AsObject,
    execute?: HookAction.Execute.AsObject,
  }

  export class If extends jspb.Message {
    clearCondList(): void;
    getCondList(): Array<HookCondition>;
    setCondList(value: Array<HookCondition>): void;
    addCond(value?: HookCondition, index?: number): HookCondition;

    clearMatchList(): void;
    getMatchList(): Array<HookAction>;
    setMatchList(value: Array<HookAction>): void;
    addMatch(value?: HookAction, index?: number): HookAction;

    clearNoMatchList(): void;
    getNoMatchList(): Array<HookAction>;
    setNoMatchList(value: Array<HookAction>): void;
    addNoMatch(value?: HookAction, index?: number): HookAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): If.AsObject;
    static toObject(includeInstance: boolean, msg: If): If.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: If, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): If;
    static deserializeBinaryFromReader(message: If, reader: jspb.BinaryReader): If;
  }

  export namespace If {
    export type AsObject = {
      condList: Array<HookCondition.AsObject>,
      matchList: Array<HookAction.AsObject>,
      noMatchList: Array<HookAction.AsObject>,
    }
  }

  export class Counter extends jspb.Message {
    getCounterId(): string;
    setCounterId(value: string): void;

    getDelta(): number;
    setDelta(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Counter.AsObject;
    static toObject(includeInstance: boolean, msg: Counter): Counter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Counter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Counter;
    static deserializeBinaryFromReader(message: Counter, reader: jspb.BinaryReader): Counter;
  }

  export namespace Counter {
    export type AsObject = {
      counterId: string,
      delta: number,
    }
  }

  export class WaitOnBarrier extends jspb.Message {
    getBarrierId(): string;
    setBarrierId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WaitOnBarrier.AsObject;
    static toObject(includeInstance: boolean, msg: WaitOnBarrier): WaitOnBarrier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WaitOnBarrier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WaitOnBarrier;
    static deserializeBinaryFromReader(message: WaitOnBarrier, reader: jspb.BinaryReader): WaitOnBarrier;
  }

  export namespace WaitOnBarrier {
    export type AsObject = {
      barrierId: string,
    }
  }

  export class SignalBarrier extends jspb.Message {
    getBarrierId(): string;
    setBarrierId(value: string): void;

    getSignalAll(): boolean;
    setSignalAll(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignalBarrier.AsObject;
    static toObject(includeInstance: boolean, msg: SignalBarrier): SignalBarrier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignalBarrier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignalBarrier;
    static deserializeBinaryFromReader(message: SignalBarrier, reader: jspb.BinaryReader): SignalBarrier;
  }

  export namespace SignalBarrier {
    export type AsObject = {
      barrierId: string,
      signalAll: boolean,
    }
  }

  export class ReturnResponse extends jspb.Message {
    hasValue(): boolean;
    clearValue(): void;
    getValue(): google_protobuf_any_pb.Any | undefined;
    setValue(value?: google_protobuf_any_pb.Any): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReturnResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReturnResponse): ReturnResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReturnResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReturnResponse;
    static deserializeBinaryFromReader(message: ReturnResponse, reader: jspb.BinaryReader): ReturnResponse;
  }

  export namespace ReturnResponse {
    export type AsObject = {
      value?: google_protobuf_any_pb.Any.AsObject,
    }
  }

  export class ReturnError extends jspb.Message {
    getCode(): number;
    setCode(value: number): void;

    getMessage(): string;
    setMessage(value: string): void;

    clearDetailsList(): void;
    getDetailsList(): Array<google_protobuf_any_pb.Any>;
    setDetailsList(value: Array<google_protobuf_any_pb.Any>): void;
    addDetails(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReturnError.AsObject;
    static toObject(includeInstance: boolean, msg: ReturnError): ReturnError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReturnError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReturnError;
    static deserializeBinaryFromReader(message: ReturnError, reader: jspb.BinaryReader): ReturnError;
  }

  export namespace ReturnError {
    export type AsObject = {
      code: number,
      message: string,
      detailsList: Array<google_protobuf_any_pb.Any.AsObject>,
    }
  }

  export class Execute extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Execute.AsObject;
    static toObject(includeInstance: boolean, msg: Execute): Execute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Execute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Execute;
    static deserializeBinaryFromReader(message: Execute, reader: jspb.BinaryReader): Execute;
  }

  export namespace Execute {
    export type AsObject = {
    }
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    IF = 1,
    COUNTER = 2,
    WAIT_ON_BARRIER = 3,
    SIGNAL_BARRIER = 4,
    RETURN_RESPONSE = 5,
    RETURN_ERROR = 6,
    EXECUTE = 7,
  }
}

export class Hook extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTargetMethod(): string;
  setTargetMethod(value: string): void;

  clearActionsList(): void;
  getActionsList(): Array<HookAction>;
  setActionsList(value: Array<HookAction>): void;
  addActions(value?: HookAction, index?: number): HookAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hook.AsObject;
  static toObject(includeInstance: boolean, msg: Hook): Hook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Hook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hook;
  static deserializeBinaryFromReader(message: Hook, reader: jspb.BinaryReader): Hook;
}

export namespace Hook {
  export type AsObject = {
    name: string,
    description: string,
    targetMethod: string,
    actionsList: Array<HookAction.AsObject>,
  }
}

export class AddHooksRequest extends jspb.Message {
  getHooksContextId(): string;
  setHooksContextId(value: string): void;

  clearHooksList(): void;
  getHooksList(): Array<Hook>;
  setHooksList(value: Array<Hook>): void;
  addHooks(value?: Hook, index?: number): Hook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddHooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddHooksRequest): AddHooksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddHooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddHooksRequest;
  static deserializeBinaryFromReader(message: AddHooksRequest, reader: jspb.BinaryReader): AddHooksRequest;
}

export namespace AddHooksRequest {
  export type AsObject = {
    hooksContextId: string,
    hooksList: Array<Hook.AsObject>,
  }
}

export class AddHooksResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddHooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddHooksResponse): AddHooksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddHooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddHooksResponse;
  static deserializeBinaryFromReader(message: AddHooksResponse, reader: jspb.BinaryReader): AddHooksResponse;
}

export namespace AddHooksResponse {
  export type AsObject = {
  }
}

export class WatchBarrierRequest extends jspb.Message {
  getHooksContextId(): string;
  setHooksContextId(value: string): void;

  getBarrierId(): string;
  setBarrierId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchBarrierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchBarrierRequest): WatchBarrierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchBarrierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchBarrierRequest;
  static deserializeBinaryFromReader(message: WatchBarrierRequest, reader: jspb.BinaryReader): WatchBarrierRequest;
}

export namespace WatchBarrierRequest {
  export type AsObject = {
    hooksContextId: string,
    barrierId: string,
  }
}

export class WatchBarrierResponse extends jspb.Message {
  getWaitId(): string;
  setWaitId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchBarrierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchBarrierResponse): WatchBarrierResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchBarrierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchBarrierResponse;
  static deserializeBinaryFromReader(message: WatchBarrierResponse, reader: jspb.BinaryReader): WatchBarrierResponse;
}

export namespace WatchBarrierResponse {
  export type AsObject = {
    waitId: string,
  }
}

export class SignalBarrierRequest extends jspb.Message {
  getHooksContextId(): string;
  setHooksContextId(value: string): void;

  getBarrierId(): string;
  setBarrierId(value: string): void;

  hasWaitId(): boolean;
  clearWaitId(): void;
  getWaitId(): string;
  setWaitId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignalBarrierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignalBarrierRequest): SignalBarrierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignalBarrierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignalBarrierRequest;
  static deserializeBinaryFromReader(message: SignalBarrierRequest, reader: jspb.BinaryReader): SignalBarrierRequest;
}

export namespace SignalBarrierRequest {
  export type AsObject = {
    hooksContextId: string,
    barrierId: string,
    waitId: string,
  }
}

export class SignalBarrierResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignalBarrierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignalBarrierResponse): SignalBarrierResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignalBarrierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignalBarrierResponse;
  static deserializeBinaryFromReader(message: SignalBarrierResponse, reader: jspb.BinaryReader): SignalBarrierResponse;
}

export namespace SignalBarrierResponse {
  export type AsObject = {
  }
}

export interface ComparisonOperatorMap {
  COMPARISON_OPERATOR_EQUAL: 0;
  COMPARISON_OPERATOR_NOT_EQUAL: 1;
  COMPARISON_OPERATOR_GREATER_THAN: 2;
  COMPARISON_OPERATOR_GREATER_THAN_OR_EQUAL: 3;
  COMPARISON_OPERATOR_LESS_THAN: 4;
  COMPARISON_OPERATOR_LESS_THAN_OR_EQUAL: 5;
}

export const ComparisonOperator: ComparisonOperatorMap;


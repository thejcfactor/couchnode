// package: couchbase.search.v1
// file: couchbase/search/v1/search.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BooleanFieldQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  getValue(): boolean;
  setValue(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BooleanFieldQuery.AsObject;
  static toObject(includeInstance: boolean, msg: BooleanFieldQuery): BooleanFieldQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BooleanFieldQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BooleanFieldQuery;
  static deserializeBinaryFromReader(message: BooleanFieldQuery, reader: jspb.BinaryReader): BooleanFieldQuery;
}

export namespace BooleanFieldQuery {
  export type AsObject = {
    boost: number,
    field: string,
    value: boolean,
  }
}

export class BooleanQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasMust(): boolean;
  clearMust(): void;
  getMust(): ConjunctionQuery | undefined;
  setMust(value?: ConjunctionQuery): void;

  hasMustNot(): boolean;
  clearMustNot(): void;
  getMustNot(): DisjunctionQuery | undefined;
  setMustNot(value?: DisjunctionQuery): void;

  hasShould(): boolean;
  clearShould(): void;
  getShould(): DisjunctionQuery | undefined;
  setShould(value?: DisjunctionQuery): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BooleanQuery.AsObject;
  static toObject(includeInstance: boolean, msg: BooleanQuery): BooleanQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BooleanQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BooleanQuery;
  static deserializeBinaryFromReader(message: BooleanQuery, reader: jspb.BinaryReader): BooleanQuery;
}

export namespace BooleanQuery {
  export type AsObject = {
    boost: number,
    must?: ConjunctionQuery.AsObject,
    mustNot?: DisjunctionQuery.AsObject,
    should?: DisjunctionQuery.AsObject,
  }
}

export class ConjunctionQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  clearQueriesList(): void;
  getQueriesList(): Array<Query>;
  setQueriesList(value: Array<Query>): void;
  addQueries(value?: Query, index?: number): Query;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConjunctionQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ConjunctionQuery): ConjunctionQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConjunctionQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConjunctionQuery;
  static deserializeBinaryFromReader(message: ConjunctionQuery, reader: jspb.BinaryReader): ConjunctionQuery;
}

export namespace ConjunctionQuery {
  export type AsObject = {
    boost: number,
    queriesList: Array<Query.AsObject>,
  }
}

export class DateRangeQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  hasDateTimeParser(): boolean;
  clearDateTimeParser(): void;
  getDateTimeParser(): string;
  setDateTimeParser(value: string): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): string;
  setStartDate(value: string): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): string;
  setEndDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateRangeQuery.AsObject;
  static toObject(includeInstance: boolean, msg: DateRangeQuery): DateRangeQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateRangeQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateRangeQuery;
  static deserializeBinaryFromReader(message: DateRangeQuery, reader: jspb.BinaryReader): DateRangeQuery;
}

export namespace DateRangeQuery {
  export type AsObject = {
    boost: number,
    field: string,
    dateTimeParser: string,
    startDate: string,
    endDate: string,
  }
}

export class DisjunctionQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  clearQueriesList(): void;
  getQueriesList(): Array<Query>;
  setQueriesList(value: Array<Query>): void;
  addQueries(value?: Query, index?: number): Query;

  hasMinimum(): boolean;
  clearMinimum(): void;
  getMinimum(): number;
  setMinimum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisjunctionQuery.AsObject;
  static toObject(includeInstance: boolean, msg: DisjunctionQuery): DisjunctionQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisjunctionQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisjunctionQuery;
  static deserializeBinaryFromReader(message: DisjunctionQuery, reader: jspb.BinaryReader): DisjunctionQuery;
}

export namespace DisjunctionQuery {
  export type AsObject = {
    boost: number,
    queriesList: Array<Query.AsObject>,
    minimum: number,
  }
}

export class DocIdQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  clearIdsList(): void;
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  addIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocIdQuery.AsObject;
  static toObject(includeInstance: boolean, msg: DocIdQuery): DocIdQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocIdQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocIdQuery;
  static deserializeBinaryFromReader(message: DocIdQuery, reader: jspb.BinaryReader): DocIdQuery;
}

export namespace DocIdQuery {
  export type AsObject = {
    boost: number,
    idsList: Array<string>,
  }
}

export class LatLng extends jspb.Message {
  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LatLng.AsObject;
  static toObject(includeInstance: boolean, msg: LatLng): LatLng.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LatLng, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LatLng;
  static deserializeBinaryFromReader(message: LatLng, reader: jspb.BinaryReader): LatLng;
}

export namespace LatLng {
  export type AsObject = {
    latitude: number,
    longitude: number,
  }
}

export class GeoBoundingBoxQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  hasTopLeft(): boolean;
  clearTopLeft(): void;
  getTopLeft(): LatLng | undefined;
  setTopLeft(value?: LatLng): void;

  hasBottomRight(): boolean;
  clearBottomRight(): void;
  getBottomRight(): LatLng | undefined;
  setBottomRight(value?: LatLng): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoBoundingBoxQuery.AsObject;
  static toObject(includeInstance: boolean, msg: GeoBoundingBoxQuery): GeoBoundingBoxQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoBoundingBoxQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoBoundingBoxQuery;
  static deserializeBinaryFromReader(message: GeoBoundingBoxQuery, reader: jspb.BinaryReader): GeoBoundingBoxQuery;
}

export namespace GeoBoundingBoxQuery {
  export type AsObject = {
    boost: number,
    field: string,
    topLeft?: LatLng.AsObject,
    bottomRight?: LatLng.AsObject,
  }
}

export class GeoDistanceQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  hasCenter(): boolean;
  clearCenter(): void;
  getCenter(): LatLng | undefined;
  setCenter(value?: LatLng): void;

  getDistance(): string;
  setDistance(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoDistanceQuery.AsObject;
  static toObject(includeInstance: boolean, msg: GeoDistanceQuery): GeoDistanceQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoDistanceQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoDistanceQuery;
  static deserializeBinaryFromReader(message: GeoDistanceQuery, reader: jspb.BinaryReader): GeoDistanceQuery;
}

export namespace GeoDistanceQuery {
  export type AsObject = {
    boost: number,
    field: string,
    center?: LatLng.AsObject,
    distance: string,
  }
}

export class GeoPolygonQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  clearVerticesList(): void;
  getVerticesList(): Array<LatLng>;
  setVerticesList(value: Array<LatLng>): void;
  addVertices(value?: LatLng, index?: number): LatLng;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoPolygonQuery.AsObject;
  static toObject(includeInstance: boolean, msg: GeoPolygonQuery): GeoPolygonQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoPolygonQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoPolygonQuery;
  static deserializeBinaryFromReader(message: GeoPolygonQuery, reader: jspb.BinaryReader): GeoPolygonQuery;
}

export namespace GeoPolygonQuery {
  export type AsObject = {
    boost: number,
    field: string,
    verticesList: Array<LatLng.AsObject>,
  }
}

export class MatchAllQuery extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchAllQuery.AsObject;
  static toObject(includeInstance: boolean, msg: MatchAllQuery): MatchAllQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchAllQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchAllQuery;
  static deserializeBinaryFromReader(message: MatchAllQuery, reader: jspb.BinaryReader): MatchAllQuery;
}

export namespace MatchAllQuery {
  export type AsObject = {
  }
}

export class MatchNoneQuery extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchNoneQuery.AsObject;
  static toObject(includeInstance: boolean, msg: MatchNoneQuery): MatchNoneQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchNoneQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchNoneQuery;
  static deserializeBinaryFromReader(message: MatchNoneQuery, reader: jspb.BinaryReader): MatchNoneQuery;
}

export namespace MatchNoneQuery {
  export type AsObject = {
  }
}

export class MatchPhraseQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  getPhrase(): string;
  setPhrase(value: string): void;

  hasAnalyzer(): boolean;
  clearAnalyzer(): void;
  getAnalyzer(): string;
  setAnalyzer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchPhraseQuery.AsObject;
  static toObject(includeInstance: boolean, msg: MatchPhraseQuery): MatchPhraseQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchPhraseQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchPhraseQuery;
  static deserializeBinaryFromReader(message: MatchPhraseQuery, reader: jspb.BinaryReader): MatchPhraseQuery;
}

export namespace MatchPhraseQuery {
  export type AsObject = {
    boost: number,
    field: string,
    phrase: string,
    analyzer: string,
  }
}

export class MatchQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  hasAnalyzer(): boolean;
  clearAnalyzer(): void;
  getAnalyzer(): string;
  setAnalyzer(value: string): void;

  hasFuzziness(): boolean;
  clearFuzziness(): void;
  getFuzziness(): number;
  setFuzziness(value: number): void;

  hasOperator(): boolean;
  clearOperator(): void;
  getOperator(): MatchQuery.OperatorMap[keyof MatchQuery.OperatorMap];
  setOperator(value: MatchQuery.OperatorMap[keyof MatchQuery.OperatorMap]): void;

  hasPrefixLength(): boolean;
  clearPrefixLength(): void;
  getPrefixLength(): number;
  setPrefixLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchQuery.AsObject;
  static toObject(includeInstance: boolean, msg: MatchQuery): MatchQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchQuery;
  static deserializeBinaryFromReader(message: MatchQuery, reader: jspb.BinaryReader): MatchQuery;
}

export namespace MatchQuery {
  export type AsObject = {
    boost: number,
    field: string,
    value: string,
    analyzer: string,
    fuzziness: number,
    operator: MatchQuery.OperatorMap[keyof MatchQuery.OperatorMap],
    prefixLength: number,
  }

  export interface OperatorMap {
    OPERATOR_OR: 0;
    OPERATOR_AND: 1;
  }

  export const Operator: OperatorMap;
}

export class NumericRangeQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  hasMin(): boolean;
  clearMin(): void;
  getMin(): number;
  setMin(value: number): void;

  hasMax(): boolean;
  clearMax(): void;
  getMax(): number;
  setMax(value: number): void;

  hasInclusiveMin(): boolean;
  clearInclusiveMin(): void;
  getInclusiveMin(): boolean;
  setInclusiveMin(value: boolean): void;

  hasInclusiveMax(): boolean;
  clearInclusiveMax(): void;
  getInclusiveMax(): boolean;
  setInclusiveMax(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NumericRangeQuery.AsObject;
  static toObject(includeInstance: boolean, msg: NumericRangeQuery): NumericRangeQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NumericRangeQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NumericRangeQuery;
  static deserializeBinaryFromReader(message: NumericRangeQuery, reader: jspb.BinaryReader): NumericRangeQuery;
}

export namespace NumericRangeQuery {
  export type AsObject = {
    boost: number,
    field: string,
    min: number,
    max: number,
    inclusiveMin: boolean,
    inclusiveMax: boolean,
  }
}

export class PhraseQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  clearTermsList(): void;
  getTermsList(): Array<string>;
  setTermsList(value: Array<string>): void;
  addTerms(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhraseQuery.AsObject;
  static toObject(includeInstance: boolean, msg: PhraseQuery): PhraseQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhraseQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhraseQuery;
  static deserializeBinaryFromReader(message: PhraseQuery, reader: jspb.BinaryReader): PhraseQuery;
}

export namespace PhraseQuery {
  export type AsObject = {
    boost: number,
    field: string,
    termsList: Array<string>,
  }
}

export class PrefixQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrefixQuery.AsObject;
  static toObject(includeInstance: boolean, msg: PrefixQuery): PrefixQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrefixQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrefixQuery;
  static deserializeBinaryFromReader(message: PrefixQuery, reader: jspb.BinaryReader): PrefixQuery;
}

export namespace PrefixQuery {
  export type AsObject = {
    boost: number,
    field: string,
    prefix: string,
  }
}

export class QueryStringQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  getQueryString(): string;
  setQueryString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryStringQuery.AsObject;
  static toObject(includeInstance: boolean, msg: QueryStringQuery): QueryStringQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryStringQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryStringQuery;
  static deserializeBinaryFromReader(message: QueryStringQuery, reader: jspb.BinaryReader): QueryStringQuery;
}

export namespace QueryStringQuery {
  export type AsObject = {
    boost: number,
    queryString: string,
  }
}

export class RegexpQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  getRegexp(): string;
  setRegexp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegexpQuery.AsObject;
  static toObject(includeInstance: boolean, msg: RegexpQuery): RegexpQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegexpQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegexpQuery;
  static deserializeBinaryFromReader(message: RegexpQuery, reader: jspb.BinaryReader): RegexpQuery;
}

export namespace RegexpQuery {
  export type AsObject = {
    boost: number,
    field: string,
    regexp: string,
  }
}

export class TermQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  getTerm(): string;
  setTerm(value: string): void;

  hasFuzziness(): boolean;
  clearFuzziness(): void;
  getFuzziness(): number;
  setFuzziness(value: number): void;

  hasPrefixLength(): boolean;
  clearPrefixLength(): void;
  getPrefixLength(): number;
  setPrefixLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TermQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TermQuery): TermQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TermQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TermQuery;
  static deserializeBinaryFromReader(message: TermQuery, reader: jspb.BinaryReader): TermQuery;
}

export namespace TermQuery {
  export type AsObject = {
    boost: number,
    field: string,
    term: string,
    fuzziness: number,
    prefixLength: number,
  }
}

export class TermRangeQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  hasMin(): boolean;
  clearMin(): void;
  getMin(): string;
  setMin(value: string): void;

  hasMax(): boolean;
  clearMax(): void;
  getMax(): string;
  setMax(value: string): void;

  hasInclusiveMin(): boolean;
  clearInclusiveMin(): void;
  getInclusiveMin(): boolean;
  setInclusiveMin(value: boolean): void;

  hasInclusiveMax(): boolean;
  clearInclusiveMax(): void;
  getInclusiveMax(): boolean;
  setInclusiveMax(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TermRangeQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TermRangeQuery): TermRangeQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TermRangeQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TermRangeQuery;
  static deserializeBinaryFromReader(message: TermRangeQuery, reader: jspb.BinaryReader): TermRangeQuery;
}

export namespace TermRangeQuery {
  export type AsObject = {
    boost: number,
    field: string,
    min: string,
    max: string,
    inclusiveMin: boolean,
    inclusiveMax: boolean,
  }
}

export class WildcardQuery extends jspb.Message {
  hasBoost(): boolean;
  clearBoost(): void;
  getBoost(): number;
  setBoost(value: number): void;

  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  getWildcard(): string;
  setWildcard(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WildcardQuery.AsObject;
  static toObject(includeInstance: boolean, msg: WildcardQuery): WildcardQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WildcardQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WildcardQuery;
  static deserializeBinaryFromReader(message: WildcardQuery, reader: jspb.BinaryReader): WildcardQuery;
}

export namespace WildcardQuery {
  export type AsObject = {
    boost: number,
    field: string,
    wildcard: string,
  }
}

export class Query extends jspb.Message {
  hasBooleanFieldQuery(): boolean;
  clearBooleanFieldQuery(): void;
  getBooleanFieldQuery(): BooleanFieldQuery | undefined;
  setBooleanFieldQuery(value?: BooleanFieldQuery): void;

  hasBooleanQuery(): boolean;
  clearBooleanQuery(): void;
  getBooleanQuery(): BooleanQuery | undefined;
  setBooleanQuery(value?: BooleanQuery): void;

  hasConjunctionQuery(): boolean;
  clearConjunctionQuery(): void;
  getConjunctionQuery(): ConjunctionQuery | undefined;
  setConjunctionQuery(value?: ConjunctionQuery): void;

  hasDateRangeQuery(): boolean;
  clearDateRangeQuery(): void;
  getDateRangeQuery(): DateRangeQuery | undefined;
  setDateRangeQuery(value?: DateRangeQuery): void;

  hasDisjunctionQuery(): boolean;
  clearDisjunctionQuery(): void;
  getDisjunctionQuery(): DisjunctionQuery | undefined;
  setDisjunctionQuery(value?: DisjunctionQuery): void;

  hasDocIdQuery(): boolean;
  clearDocIdQuery(): void;
  getDocIdQuery(): DocIdQuery | undefined;
  setDocIdQuery(value?: DocIdQuery): void;

  hasGeoBoundingBoxQuery(): boolean;
  clearGeoBoundingBoxQuery(): void;
  getGeoBoundingBoxQuery(): GeoBoundingBoxQuery | undefined;
  setGeoBoundingBoxQuery(value?: GeoBoundingBoxQuery): void;

  hasGeoDistanceQuery(): boolean;
  clearGeoDistanceQuery(): void;
  getGeoDistanceQuery(): GeoDistanceQuery | undefined;
  setGeoDistanceQuery(value?: GeoDistanceQuery): void;

  hasGeoPolygonQuery(): boolean;
  clearGeoPolygonQuery(): void;
  getGeoPolygonQuery(): GeoPolygonQuery | undefined;
  setGeoPolygonQuery(value?: GeoPolygonQuery): void;

  hasMatchAllQuery(): boolean;
  clearMatchAllQuery(): void;
  getMatchAllQuery(): MatchAllQuery | undefined;
  setMatchAllQuery(value?: MatchAllQuery): void;

  hasMatchNoneQuery(): boolean;
  clearMatchNoneQuery(): void;
  getMatchNoneQuery(): MatchNoneQuery | undefined;
  setMatchNoneQuery(value?: MatchNoneQuery): void;

  hasMatchPhraseQuery(): boolean;
  clearMatchPhraseQuery(): void;
  getMatchPhraseQuery(): MatchPhraseQuery | undefined;
  setMatchPhraseQuery(value?: MatchPhraseQuery): void;

  hasMatchQuery(): boolean;
  clearMatchQuery(): void;
  getMatchQuery(): MatchQuery | undefined;
  setMatchQuery(value?: MatchQuery): void;

  hasNumericRangeQuery(): boolean;
  clearNumericRangeQuery(): void;
  getNumericRangeQuery(): NumericRangeQuery | undefined;
  setNumericRangeQuery(value?: NumericRangeQuery): void;

  hasPhraseQuery(): boolean;
  clearPhraseQuery(): void;
  getPhraseQuery(): PhraseQuery | undefined;
  setPhraseQuery(value?: PhraseQuery): void;

  hasPrefixQuery(): boolean;
  clearPrefixQuery(): void;
  getPrefixQuery(): PrefixQuery | undefined;
  setPrefixQuery(value?: PrefixQuery): void;

  hasQueryStringQuery(): boolean;
  clearQueryStringQuery(): void;
  getQueryStringQuery(): QueryStringQuery | undefined;
  setQueryStringQuery(value?: QueryStringQuery): void;

  hasRegexpQuery(): boolean;
  clearRegexpQuery(): void;
  getRegexpQuery(): RegexpQuery | undefined;
  setRegexpQuery(value?: RegexpQuery): void;

  hasTermQuery(): boolean;
  clearTermQuery(): void;
  getTermQuery(): TermQuery | undefined;
  setTermQuery(value?: TermQuery): void;

  hasTermRangeQuery(): boolean;
  clearTermRangeQuery(): void;
  getTermRangeQuery(): TermRangeQuery | undefined;
  setTermRangeQuery(value?: TermRangeQuery): void;

  hasWildcardQuery(): boolean;
  clearWildcardQuery(): void;
  getWildcardQuery(): WildcardQuery | undefined;
  setWildcardQuery(value?: WildcardQuery): void;

  getQueryCase(): Query.QueryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    booleanFieldQuery?: BooleanFieldQuery.AsObject,
    booleanQuery?: BooleanQuery.AsObject,
    conjunctionQuery?: ConjunctionQuery.AsObject,
    dateRangeQuery?: DateRangeQuery.AsObject,
    disjunctionQuery?: DisjunctionQuery.AsObject,
    docIdQuery?: DocIdQuery.AsObject,
    geoBoundingBoxQuery?: GeoBoundingBoxQuery.AsObject,
    geoDistanceQuery?: GeoDistanceQuery.AsObject,
    geoPolygonQuery?: GeoPolygonQuery.AsObject,
    matchAllQuery?: MatchAllQuery.AsObject,
    matchNoneQuery?: MatchNoneQuery.AsObject,
    matchPhraseQuery?: MatchPhraseQuery.AsObject,
    matchQuery?: MatchQuery.AsObject,
    numericRangeQuery?: NumericRangeQuery.AsObject,
    phraseQuery?: PhraseQuery.AsObject,
    prefixQuery?: PrefixQuery.AsObject,
    queryStringQuery?: QueryStringQuery.AsObject,
    regexpQuery?: RegexpQuery.AsObject,
    termQuery?: TermQuery.AsObject,
    termRangeQuery?: TermRangeQuery.AsObject,
    wildcardQuery?: WildcardQuery.AsObject,
  }

  export enum QueryCase {
    QUERY_NOT_SET = 0,
    BOOLEAN_FIELD_QUERY = 1,
    BOOLEAN_QUERY = 2,
    CONJUNCTION_QUERY = 3,
    DATE_RANGE_QUERY = 4,
    DISJUNCTION_QUERY = 5,
    DOC_ID_QUERY = 6,
    GEO_BOUNDING_BOX_QUERY = 7,
    GEO_DISTANCE_QUERY = 8,
    GEO_POLYGON_QUERY = 9,
    MATCH_ALL_QUERY = 10,
    MATCH_NONE_QUERY = 11,
    MATCH_PHRASE_QUERY = 12,
    MATCH_QUERY = 13,
    NUMERIC_RANGE_QUERY = 14,
    PHRASE_QUERY = 15,
    PREFIX_QUERY = 16,
    QUERY_STRING_QUERY = 17,
    REGEXP_QUERY = 18,
    TERM_QUERY = 19,
    TERM_RANGE_QUERY = 20,
    WILDCARD_QUERY = 21,
  }
}

export class FieldSorting extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getDescending(): boolean;
  setDescending(value: boolean): void;

  getMissing(): string;
  setMissing(value: string): void;

  getMode(): string;
  setMode(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldSorting.AsObject;
  static toObject(includeInstance: boolean, msg: FieldSorting): FieldSorting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldSorting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldSorting;
  static deserializeBinaryFromReader(message: FieldSorting, reader: jspb.BinaryReader): FieldSorting;
}

export namespace FieldSorting {
  export type AsObject = {
    field: string,
    descending: boolean,
    missing: string,
    mode: string,
    type: string,
  }
}

export class GeoDistanceSorting extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getDescending(): boolean;
  setDescending(value: boolean): void;

  hasCenter(): boolean;
  clearCenter(): void;
  getCenter(): LatLng | undefined;
  setCenter(value?: LatLng): void;

  getUnit(): string;
  setUnit(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoDistanceSorting.AsObject;
  static toObject(includeInstance: boolean, msg: GeoDistanceSorting): GeoDistanceSorting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoDistanceSorting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoDistanceSorting;
  static deserializeBinaryFromReader(message: GeoDistanceSorting, reader: jspb.BinaryReader): GeoDistanceSorting;
}

export namespace GeoDistanceSorting {
  export type AsObject = {
    field: string,
    descending: boolean,
    center?: LatLng.AsObject,
    unit: string,
  }
}

export class IdSorting extends jspb.Message {
  getDescending(): boolean;
  setDescending(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdSorting.AsObject;
  static toObject(includeInstance: boolean, msg: IdSorting): IdSorting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdSorting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdSorting;
  static deserializeBinaryFromReader(message: IdSorting, reader: jspb.BinaryReader): IdSorting;
}

export namespace IdSorting {
  export type AsObject = {
    descending: boolean,
  }
}

export class ScoreSorting extends jspb.Message {
  getDescending(): boolean;
  setDescending(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScoreSorting.AsObject;
  static toObject(includeInstance: boolean, msg: ScoreSorting): ScoreSorting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScoreSorting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScoreSorting;
  static deserializeBinaryFromReader(message: ScoreSorting, reader: jspb.BinaryReader): ScoreSorting;
}

export namespace ScoreSorting {
  export type AsObject = {
    descending: boolean,
  }
}

export class Sorting extends jspb.Message {
  hasFieldSorting(): boolean;
  clearFieldSorting(): void;
  getFieldSorting(): FieldSorting | undefined;
  setFieldSorting(value?: FieldSorting): void;

  hasGeoDistanceSorting(): boolean;
  clearGeoDistanceSorting(): void;
  getGeoDistanceSorting(): GeoDistanceSorting | undefined;
  setGeoDistanceSorting(value?: GeoDistanceSorting): void;

  hasIdSorting(): boolean;
  clearIdSorting(): void;
  getIdSorting(): IdSorting | undefined;
  setIdSorting(value?: IdSorting): void;

  hasScoreSorting(): boolean;
  clearScoreSorting(): void;
  getScoreSorting(): ScoreSorting | undefined;
  setScoreSorting(value?: ScoreSorting): void;

  getSortingCase(): Sorting.SortingCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sorting.AsObject;
  static toObject(includeInstance: boolean, msg: Sorting): Sorting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sorting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sorting;
  static deserializeBinaryFromReader(message: Sorting, reader: jspb.BinaryReader): Sorting;
}

export namespace Sorting {
  export type AsObject = {
    fieldSorting?: FieldSorting.AsObject,
    geoDistanceSorting?: GeoDistanceSorting.AsObject,
    idSorting?: IdSorting.AsObject,
    scoreSorting?: ScoreSorting.AsObject,
  }

  export enum SortingCase {
    SORTING_NOT_SET = 0,
    FIELD_SORTING = 1,
    GEO_DISTANCE_SORTING = 2,
    ID_SORTING = 3,
    SCORE_SORTING = 4,
  }
}

export class DateRange extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): string;
  setStart(value: string): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): string;
  setEnd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateRange.AsObject;
  static toObject(includeInstance: boolean, msg: DateRange): DateRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateRange;
  static deserializeBinaryFromReader(message: DateRange, reader: jspb.BinaryReader): DateRange;
}

export namespace DateRange {
  export type AsObject = {
    name: string,
    start: string,
    end: string,
  }
}

export class DateRangeFacet extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  clearDateRangesList(): void;
  getDateRangesList(): Array<DateRange>;
  setDateRangesList(value: Array<DateRange>): void;
  addDateRanges(value?: DateRange, index?: number): DateRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateRangeFacet.AsObject;
  static toObject(includeInstance: boolean, msg: DateRangeFacet): DateRangeFacet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateRangeFacet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateRangeFacet;
  static deserializeBinaryFromReader(message: DateRangeFacet, reader: jspb.BinaryReader): DateRangeFacet;
}

export namespace DateRangeFacet {
  export type AsObject = {
    field: string,
    size: number,
    dateRangesList: Array<DateRange.AsObject>,
  }
}

export class NumericRange extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasMin(): boolean;
  clearMin(): void;
  getMin(): number;
  setMin(value: number): void;

  hasMax(): boolean;
  clearMax(): void;
  getMax(): number;
  setMax(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NumericRange.AsObject;
  static toObject(includeInstance: boolean, msg: NumericRange): NumericRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NumericRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NumericRange;
  static deserializeBinaryFromReader(message: NumericRange, reader: jspb.BinaryReader): NumericRange;
}

export namespace NumericRange {
  export type AsObject = {
    name: string,
    min: number,
    max: number,
  }
}

export class NumericRangeFacet extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  clearNumericRangesList(): void;
  getNumericRangesList(): Array<NumericRange>;
  setNumericRangesList(value: Array<NumericRange>): void;
  addNumericRanges(value?: NumericRange, index?: number): NumericRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NumericRangeFacet.AsObject;
  static toObject(includeInstance: boolean, msg: NumericRangeFacet): NumericRangeFacet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NumericRangeFacet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NumericRangeFacet;
  static deserializeBinaryFromReader(message: NumericRangeFacet, reader: jspb.BinaryReader): NumericRangeFacet;
}

export namespace NumericRangeFacet {
  export type AsObject = {
    field: string,
    size: number,
    numericRangesList: Array<NumericRange.AsObject>,
  }
}

export class TermFacet extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TermFacet.AsObject;
  static toObject(includeInstance: boolean, msg: TermFacet): TermFacet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TermFacet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TermFacet;
  static deserializeBinaryFromReader(message: TermFacet, reader: jspb.BinaryReader): TermFacet;
}

export namespace TermFacet {
  export type AsObject = {
    field: string,
    size: number,
  }
}

export class Facet extends jspb.Message {
  hasDateRangeFacet(): boolean;
  clearDateRangeFacet(): void;
  getDateRangeFacet(): DateRangeFacet | undefined;
  setDateRangeFacet(value?: DateRangeFacet): void;

  hasNumericRangeFacet(): boolean;
  clearNumericRangeFacet(): void;
  getNumericRangeFacet(): NumericRangeFacet | undefined;
  setNumericRangeFacet(value?: NumericRangeFacet): void;

  hasTermFacet(): boolean;
  clearTermFacet(): void;
  getTermFacet(): TermFacet | undefined;
  setTermFacet(value?: TermFacet): void;

  getFacetCase(): Facet.FacetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Facet.AsObject;
  static toObject(includeInstance: boolean, msg: Facet): Facet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Facet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Facet;
  static deserializeBinaryFromReader(message: Facet, reader: jspb.BinaryReader): Facet;
}

export namespace Facet {
  export type AsObject = {
    dateRangeFacet?: DateRangeFacet.AsObject,
    numericRangeFacet?: NumericRangeFacet.AsObject,
    termFacet?: TermFacet.AsObject,
  }

  export enum FacetCase {
    FACET_NOT_SET = 0,
    DATE_RANGE_FACET = 1,
    NUMERIC_RANGE_FACET = 2,
    TERM_FACET = 3,
  }
}

export class SearchQueryRequest extends jspb.Message {
  getIndexName(): string;
  setIndexName(value: string): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): Query | undefined;
  setQuery(value?: Query): void;

  getScanConsistency(): SearchQueryRequest.ScanConsistencyMap[keyof SearchQueryRequest.ScanConsistencyMap];
  setScanConsistency(value: SearchQueryRequest.ScanConsistencyMap[keyof SearchQueryRequest.ScanConsistencyMap]): void;

  getLimit(): number;
  setLimit(value: number): void;

  getSkip(): number;
  setSkip(value: number): void;

  getIncludeExplanation(): boolean;
  setIncludeExplanation(value: boolean): void;

  getHighlightStyle(): SearchQueryRequest.HighlightStyleMap[keyof SearchQueryRequest.HighlightStyleMap];
  setHighlightStyle(value: SearchQueryRequest.HighlightStyleMap[keyof SearchQueryRequest.HighlightStyleMap]): void;

  clearHighlightFieldsList(): void;
  getHighlightFieldsList(): Array<string>;
  setHighlightFieldsList(value: Array<string>): void;
  addHighlightFields(value: string, index?: number): string;

  clearFieldsList(): void;
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  addFields(value: string, index?: number): string;

  clearSortList(): void;
  getSortList(): Array<Sorting>;
  setSortList(value: Array<Sorting>): void;
  addSort(value?: Sorting, index?: number): Sorting;

  getDisableScoring(): boolean;
  setDisableScoring(value: boolean): void;

  clearCollectionsList(): void;
  getCollectionsList(): Array<string>;
  setCollectionsList(value: Array<string>): void;
  addCollections(value: string, index?: number): string;

  getIncludeLocations(): boolean;
  setIncludeLocations(value: boolean): void;

  getFacetsMap(): jspb.Map<string, Facet>;
  clearFacetsMap(): void;
  hasBucketName(): boolean;
  clearBucketName(): void;
  getBucketName(): string;
  setBucketName(value: string): void;

  hasScopeName(): boolean;
  clearScopeName(): void;
  getScopeName(): string;
  setScopeName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchQueryRequest): SearchQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchQueryRequest;
  static deserializeBinaryFromReader(message: SearchQueryRequest, reader: jspb.BinaryReader): SearchQueryRequest;
}

export namespace SearchQueryRequest {
  export type AsObject = {
    indexName: string,
    query?: Query.AsObject,
    scanConsistency: SearchQueryRequest.ScanConsistencyMap[keyof SearchQueryRequest.ScanConsistencyMap],
    limit: number,
    skip: number,
    includeExplanation: boolean,
    highlightStyle: SearchQueryRequest.HighlightStyleMap[keyof SearchQueryRequest.HighlightStyleMap],
    highlightFieldsList: Array<string>,
    fieldsList: Array<string>,
    sortList: Array<Sorting.AsObject>,
    disableScoring: boolean,
    collectionsList: Array<string>,
    includeLocations: boolean,
    facetsMap: Array<[string, Facet.AsObject]>,
    bucketName: string,
    scopeName: string,
  }

  export interface ScanConsistencyMap {
    SCAN_CONSISTENCY_NOT_BOUNDED: 0;
  }

  export const ScanConsistency: ScanConsistencyMap;

  export interface HighlightStyleMap {
    HIGHLIGHT_STYLE_DEFAULT: 0;
    HIGHLIGHT_STYLE_HTML: 1;
    HIGHLIGHT_STYLE_ANSI: 2;
  }

  export const HighlightStyle: HighlightStyleMap;
}

export class SearchQueryResponse extends jspb.Message {
  clearHitsList(): void;
  getHitsList(): Array<SearchQueryResponse.SearchQueryRow>;
  setHitsList(value: Array<SearchQueryResponse.SearchQueryRow>): void;
  addHits(value?: SearchQueryResponse.SearchQueryRow, index?: number): SearchQueryResponse.SearchQueryRow;

  getFacetsMap(): jspb.Map<string, SearchQueryResponse.FacetResult>;
  clearFacetsMap(): void;
  hasMetaData(): boolean;
  clearMetaData(): void;
  getMetaData(): SearchQueryResponse.MetaData | undefined;
  setMetaData(value?: SearchQueryResponse.MetaData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchQueryResponse): SearchQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchQueryResponse;
  static deserializeBinaryFromReader(message: SearchQueryResponse, reader: jspb.BinaryReader): SearchQueryResponse;
}

export namespace SearchQueryResponse {
  export type AsObject = {
    hitsList: Array<SearchQueryResponse.SearchQueryRow.AsObject>,
    facetsMap: Array<[string, SearchQueryResponse.FacetResult.AsObject]>,
    metaData?: SearchQueryResponse.MetaData.AsObject,
  }

  export class SearchQueryRow extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getScore(): number;
    setScore(value: number): void;

    getIndex(): string;
    setIndex(value: string): void;

    getExplanation(): Uint8Array | string;
    getExplanation_asU8(): Uint8Array;
    getExplanation_asB64(): string;
    setExplanation(value: Uint8Array | string): void;

    clearLocationsList(): void;
    getLocationsList(): Array<SearchQueryResponse.Location>;
    setLocationsList(value: Array<SearchQueryResponse.Location>): void;
    addLocations(value?: SearchQueryResponse.Location, index?: number): SearchQueryResponse.Location;

    getFragmentsMap(): jspb.Map<string, SearchQueryResponse.Fragment>;
    clearFragmentsMap(): void;
    getFieldsMap(): jspb.Map<string, Uint8Array | string>;
    clearFieldsMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchQueryRow.AsObject;
    static toObject(includeInstance: boolean, msg: SearchQueryRow): SearchQueryRow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchQueryRow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchQueryRow;
    static deserializeBinaryFromReader(message: SearchQueryRow, reader: jspb.BinaryReader): SearchQueryRow;
  }

  export namespace SearchQueryRow {
    export type AsObject = {
      id: string,
      score: number,
      index: string,
      explanation: Uint8Array | string,
      locationsList: Array<SearchQueryResponse.Location.AsObject>,
      fragmentsMap: Array<[string, SearchQueryResponse.Fragment.AsObject]>,
      fieldsMap: Array<[string, Uint8Array | string]>,
    }
  }

  export class Location extends jspb.Message {
    getField(): string;
    setField(value: string): void;

    getTerm(): string;
    setTerm(value: string): void;

    getPosition(): number;
    setPosition(value: number): void;

    getStart(): number;
    setStart(value: number): void;

    getEnd(): number;
    setEnd(value: number): void;

    clearArrayPositionsList(): void;
    getArrayPositionsList(): Array<number>;
    setArrayPositionsList(value: Array<number>): void;
    addArrayPositions(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
  }

  export namespace Location {
    export type AsObject = {
      field: string,
      term: string,
      position: number,
      start: number,
      end: number,
      arrayPositionsList: Array<number>,
    }
  }

  export class Fragment extends jspb.Message {
    clearContentList(): void;
    getContentList(): Array<string>;
    setContentList(value: Array<string>): void;
    addContent(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fragment.AsObject;
    static toObject(includeInstance: boolean, msg: Fragment): Fragment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fragment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fragment;
    static deserializeBinaryFromReader(message: Fragment, reader: jspb.BinaryReader): Fragment;
  }

  export namespace Fragment {
    export type AsObject = {
      contentList: Array<string>,
    }
  }

  export class FacetResult extends jspb.Message {
    hasTermFacet(): boolean;
    clearTermFacet(): void;
    getTermFacet(): SearchQueryResponse.TermFacetResult | undefined;
    setTermFacet(value?: SearchQueryResponse.TermFacetResult): void;

    hasDateRangeFacet(): boolean;
    clearDateRangeFacet(): void;
    getDateRangeFacet(): SearchQueryResponse.DateRangeFacetResult | undefined;
    setDateRangeFacet(value?: SearchQueryResponse.DateRangeFacetResult): void;

    hasNumericRangeFacet(): boolean;
    clearNumericRangeFacet(): void;
    getNumericRangeFacet(): SearchQueryResponse.NumericRangeFacetResult | undefined;
    setNumericRangeFacet(value?: SearchQueryResponse.NumericRangeFacetResult): void;

    getSearchFacetCase(): FacetResult.SearchFacetCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FacetResult.AsObject;
    static toObject(includeInstance: boolean, msg: FacetResult): FacetResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FacetResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FacetResult;
    static deserializeBinaryFromReader(message: FacetResult, reader: jspb.BinaryReader): FacetResult;
  }

  export namespace FacetResult {
    export type AsObject = {
      termFacet?: SearchQueryResponse.TermFacetResult.AsObject,
      dateRangeFacet?: SearchQueryResponse.DateRangeFacetResult.AsObject,
      numericRangeFacet?: SearchQueryResponse.NumericRangeFacetResult.AsObject,
    }

    export enum SearchFacetCase {
      SEARCH_FACET_NOT_SET = 0,
      TERM_FACET = 1,
      DATE_RANGE_FACET = 2,
      NUMERIC_RANGE_FACET = 3,
    }
  }

  export class TermResult extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getField(): string;
    setField(value: string): void;

    getSize(): number;
    setSize(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TermResult.AsObject;
    static toObject(includeInstance: boolean, msg: TermResult): TermResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TermResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TermResult;
    static deserializeBinaryFromReader(message: TermResult, reader: jspb.BinaryReader): TermResult;
  }

  export namespace TermResult {
    export type AsObject = {
      name: string,
      field: string,
      size: number,
    }
  }

  export class TermFacetResult extends jspb.Message {
    getField(): string;
    setField(value: string): void;

    getTotal(): number;
    setTotal(value: number): void;

    getMissing(): number;
    setMissing(value: number): void;

    getOther(): number;
    setOther(value: number): void;

    clearTermsList(): void;
    getTermsList(): Array<SearchQueryResponse.TermResult>;
    setTermsList(value: Array<SearchQueryResponse.TermResult>): void;
    addTerms(value?: SearchQueryResponse.TermResult, index?: number): SearchQueryResponse.TermResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TermFacetResult.AsObject;
    static toObject(includeInstance: boolean, msg: TermFacetResult): TermFacetResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TermFacetResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TermFacetResult;
    static deserializeBinaryFromReader(message: TermFacetResult, reader: jspb.BinaryReader): TermFacetResult;
  }

  export namespace TermFacetResult {
    export type AsObject = {
      field: string,
      total: number,
      missing: number,
      other: number,
      termsList: Array<SearchQueryResponse.TermResult.AsObject>,
    }
  }

  export class DateRangeResult extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getSize(): number;
    setSize(value: number): void;

    hasStart(): boolean;
    clearStart(): void;
    getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DateRangeResult.AsObject;
    static toObject(includeInstance: boolean, msg: DateRangeResult): DateRangeResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DateRangeResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DateRangeResult;
    static deserializeBinaryFromReader(message: DateRangeResult, reader: jspb.BinaryReader): DateRangeResult;
  }

  export namespace DateRangeResult {
    export type AsObject = {
      name: string,
      size: number,
      start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class DateRangeFacetResult extends jspb.Message {
    getField(): string;
    setField(value: string): void;

    getTotal(): number;
    setTotal(value: number): void;

    getMissing(): number;
    setMissing(value: number): void;

    getOther(): number;
    setOther(value: number): void;

    clearDateRangesList(): void;
    getDateRangesList(): Array<SearchQueryResponse.DateRangeResult>;
    setDateRangesList(value: Array<SearchQueryResponse.DateRangeResult>): void;
    addDateRanges(value?: SearchQueryResponse.DateRangeResult, index?: number): SearchQueryResponse.DateRangeResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DateRangeFacetResult.AsObject;
    static toObject(includeInstance: boolean, msg: DateRangeFacetResult): DateRangeFacetResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DateRangeFacetResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DateRangeFacetResult;
    static deserializeBinaryFromReader(message: DateRangeFacetResult, reader: jspb.BinaryReader): DateRangeFacetResult;
  }

  export namespace DateRangeFacetResult {
    export type AsObject = {
      field: string,
      total: number,
      missing: number,
      other: number,
      dateRangesList: Array<SearchQueryResponse.DateRangeResult.AsObject>,
    }
  }

  export class NumericRangeResult extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getSize(): number;
    setSize(value: number): void;

    getMin(): number;
    setMin(value: number): void;

    getMax(): number;
    setMax(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NumericRangeResult.AsObject;
    static toObject(includeInstance: boolean, msg: NumericRangeResult): NumericRangeResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NumericRangeResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NumericRangeResult;
    static deserializeBinaryFromReader(message: NumericRangeResult, reader: jspb.BinaryReader): NumericRangeResult;
  }

  export namespace NumericRangeResult {
    export type AsObject = {
      name: string,
      size: number,
      min: number,
      max: number,
    }
  }

  export class NumericRangeFacetResult extends jspb.Message {
    getField(): string;
    setField(value: string): void;

    getTotal(): number;
    setTotal(value: number): void;

    getMissing(): number;
    setMissing(value: number): void;

    getOther(): number;
    setOther(value: number): void;

    clearNumericRangesList(): void;
    getNumericRangesList(): Array<SearchQueryResponse.NumericRangeResult>;
    setNumericRangesList(value: Array<SearchQueryResponse.NumericRangeResult>): void;
    addNumericRanges(value?: SearchQueryResponse.NumericRangeResult, index?: number): SearchQueryResponse.NumericRangeResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NumericRangeFacetResult.AsObject;
    static toObject(includeInstance: boolean, msg: NumericRangeFacetResult): NumericRangeFacetResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NumericRangeFacetResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NumericRangeFacetResult;
    static deserializeBinaryFromReader(message: NumericRangeFacetResult, reader: jspb.BinaryReader): NumericRangeFacetResult;
  }

  export namespace NumericRangeFacetResult {
    export type AsObject = {
      field: string,
      total: number,
      missing: number,
      other: number,
      numericRangesList: Array<SearchQueryResponse.NumericRangeResult.AsObject>,
    }
  }

  export class MetaData extends jspb.Message {
    hasMetrics(): boolean;
    clearMetrics(): void;
    getMetrics(): SearchQueryResponse.SearchMetrics | undefined;
    setMetrics(value?: SearchQueryResponse.SearchMetrics): void;

    getErrorsMap(): jspb.Map<string, string>;
    clearErrorsMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetaData.AsObject;
    static toObject(includeInstance: boolean, msg: MetaData): MetaData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetaData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetaData;
    static deserializeBinaryFromReader(message: MetaData, reader: jspb.BinaryReader): MetaData;
  }

  export namespace MetaData {
    export type AsObject = {
      metrics?: SearchQueryResponse.SearchMetrics.AsObject,
      errorsMap: Array<[string, string]>,
    }
  }

  export class SearchMetrics extends jspb.Message {
    hasExecutionTime(): boolean;
    clearExecutionTime(): void;
    getExecutionTime(): google_protobuf_duration_pb.Duration | undefined;
    setExecutionTime(value?: google_protobuf_duration_pb.Duration): void;

    getTotalRows(): number;
    setTotalRows(value: number): void;

    getMaxScore(): number;
    setMaxScore(value: number): void;

    getTotalPartitionCount(): number;
    setTotalPartitionCount(value: number): void;

    getSuccessPartitionCount(): number;
    setSuccessPartitionCount(value: number): void;

    getErrorPartitionCount(): number;
    setErrorPartitionCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: SearchMetrics): SearchMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchMetrics;
    static deserializeBinaryFromReader(message: SearchMetrics, reader: jspb.BinaryReader): SearchMetrics;
  }

  export namespace SearchMetrics {
    export type AsObject = {
      executionTime?: google_protobuf_duration_pb.Duration.AsObject,
      totalRows: number,
      maxScore: number,
      totalPartitionCount: number,
      successPartitionCount: number,
      errorPartitionCount: number,
    }
  }
}


// package: couchbase.search.v1
// file: couchbase/search.v1.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class BooleanFieldQuery extends jspb.Message {
  getBoost(): number;
  setBoost(value: number): void;

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
  getBoost(): number;
  setBoost(value: number): void;

  hasMust(): boolean;
  clearMust(): void;
  getMust(): Query | undefined;
  setMust(value?: Query): void;

  hasMustNot(): boolean;
  clearMustNot(): void;
  getMustNot(): Query | undefined;
  setMustNot(value?: Query): void;

  hasShould(): boolean;
  clearShould(): void;
  getShould(): Query | undefined;
  setShould(value?: Query): void;

  getShouldMin(): number;
  setShouldMin(value: number): void;

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
    must?: Query.AsObject,
    mustNot?: Query.AsObject,
    should?: Query.AsObject,
    shouldMin: number,
  }
}

export class ConjunctionQuery extends jspb.Message {
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
  getBoost(): number;
  setBoost(value: number): void;

  getField(): string;
  setField(value: string): void;

  getDateTimeParser(): string;
  setDateTimeParser(value: string): void;

  getStartDate(): string;
  setStartDate(value: string): void;

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
  getBoost(): number;
  setBoost(value: number): void;

  clearQueriesList(): void;
  getQueriesList(): Array<Query>;
  setQueriesList(value: Array<Query>): void;
  addQueries(value?: Query, index?: number): Query;

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
  getBoost(): number;
  setBoost(value: number): void;

  getField(): string;
  setField(value: string): void;

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
    field: string,
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
  getBoost(): number;
  setBoost(value: number): void;

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
  getBoost(): number;
  setBoost(value: number): void;

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
  getBoost(): number;
  setBoost(value: number): void;

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
  getBoost(): number;
  setBoost(value: number): void;

  getField(): string;
  setField(value: string): void;

  getPhrase(): string;
  setPhrase(value: string): void;

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
  getBoost(): number;
  setBoost(value: number): void;

  getField(): string;
  setField(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getAnalyzer(): string;
  setAnalyzer(value: string): void;

  getFuzziness(): number;
  setFuzziness(value: number): void;

  getOperator(): MatchQuery.OperatorMap[keyof MatchQuery.OperatorMap];
  setOperator(value: MatchQuery.OperatorMap[keyof MatchQuery.OperatorMap]): void;

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
    OR: 0;
    AND: 1;
  }

  export const Operator: OperatorMap;
}

export class NumericRangeQuery extends jspb.Message {
  getBoost(): number;
  setBoost(value: number): void;

  getField(): string;
  setField(value: string): void;

  getMin(): number;
  setMin(value: number): void;

  getMax(): number;
  setMax(value: number): void;

  getInclusiveMin(): boolean;
  setInclusiveMin(value: boolean): void;

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
  getBoost(): number;
  setBoost(value: number): void;

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
  getBoost(): number;
  setBoost(value: number): void;

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
  getBoost(): number;
  setBoost(value: number): void;

  getField(): string;
  setField(value: string): void;

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
    field: string,
    queryString: string,
  }
}

export class RegexpQuery extends jspb.Message {
  getBoost(): number;
  setBoost(value: number): void;

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
  getBoost(): number;
  setBoost(value: number): void;

  getField(): string;
  setField(value: string): void;

  getTerm(): string;
  setTerm(value: string): void;

  getFuzziness(): number;
  setFuzziness(value: number): void;

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
  getBoost(): number;
  setBoost(value: number): void;

  getField(): string;
  setField(value: string): void;

  getTerm(): string;
  setTerm(value: string): void;

  getFuzziness(): number;
  setFuzziness(value: number): void;

  getMin(): string;
  setMin(value: string): void;

  getMax(): string;
  setMax(value: string): void;

  getInclusiveMin(): boolean;
  setInclusiveMin(value: boolean): void;

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
    term: string,
    fuzziness: number,
    min: string,
    max: string,
    inclusiveMin: boolean,
    inclusiveMax: boolean,
  }
}

export class WildcardQuery extends jspb.Message {
  getBoost(): number;
  setBoost(value: number): void;

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
  }

  export interface ScanConsistencyMap {
    NOT_BOUNDED: 0;
  }

  export const ScanConsistency: ScanConsistencyMap;

  export interface HighlightStyleMap {
    DEFAULT: 0;
    HTML: 1;
    ANSI: 2;
  }

  export const HighlightStyle: HighlightStyleMap;
}

export class SearchQueryResponse extends jspb.Message {
  clearHitsList(): void;
  getHitsList(): Array<Uint8Array | string>;
  getHitsList_asU8(): Array<Uint8Array>;
  getHitsList_asB64(): Array<string>;
  setHitsList(value: Array<Uint8Array | string>): void;
  addHits(value: Uint8Array | string, index?: number): Uint8Array | string;

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
    hitsList: Array<Uint8Array | string>,
    metaData?: SearchQueryResponse.MetaData.AsObject,
  }

  export class MetaData extends jspb.Message {
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
      executionTime?: google_protobuf_duration_pb.Duration.AsObject,
      totalRows: number,
      maxScore: number,
      totalPartitionCount: number,
      successPartitionCount: number,
      errorPartitionCount: number,
    }
  }
}


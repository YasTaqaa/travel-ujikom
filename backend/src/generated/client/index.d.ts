
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MasterUser
 * 
 */
export type MasterUser = $Result.DefaultSelection<Prisma.$MasterUserPayload>
/**
 * Model MasterLayanan
 * 
 */
export type MasterLayanan = $Result.DefaultSelection<Prisma.$MasterLayananPayload>
/**
 * Model TbKendaraan
 * 
 */
export type TbKendaraan = $Result.DefaultSelection<Prisma.$TbKendaraanPayload>
/**
 * Model TbPemesanan
 * 
 */
export type TbPemesanan = $Result.DefaultSelection<Prisma.$TbPemesananPayload>
/**
 * Model TbTransaksi
 * 
 */
export type TbTransaksi = $Result.DefaultSelection<Prisma.$TbTransaksiPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MasterUsers
 * const masterUsers = await prisma.masterUser.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MasterUsers
   * const masterUsers = await prisma.masterUser.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.masterUser`: Exposes CRUD operations for the **MasterUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterUsers
    * const masterUsers = await prisma.masterUser.findMany()
    * ```
    */
  get masterUser(): Prisma.MasterUserDelegate<ExtArgs>;

  /**
   * `prisma.masterLayanan`: Exposes CRUD operations for the **MasterLayanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterLayanans
    * const masterLayanans = await prisma.masterLayanan.findMany()
    * ```
    */
  get masterLayanan(): Prisma.MasterLayananDelegate<ExtArgs>;

  /**
   * `prisma.tbKendaraan`: Exposes CRUD operations for the **TbKendaraan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TbKendaraans
    * const tbKendaraans = await prisma.tbKendaraan.findMany()
    * ```
    */
  get tbKendaraan(): Prisma.TbKendaraanDelegate<ExtArgs>;

  /**
   * `prisma.tbPemesanan`: Exposes CRUD operations for the **TbPemesanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TbPemesanans
    * const tbPemesanans = await prisma.tbPemesanan.findMany()
    * ```
    */
  get tbPemesanan(): Prisma.TbPemesananDelegate<ExtArgs>;

  /**
   * `prisma.tbTransaksi`: Exposes CRUD operations for the **TbTransaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TbTransaksis
    * const tbTransaksis = await prisma.tbTransaksi.findMany()
    * ```
    */
  get tbTransaksi(): Prisma.TbTransaksiDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    MasterUser: 'MasterUser',
    MasterLayanan: 'MasterLayanan',
    TbKendaraan: 'TbKendaraan',
    TbPemesanan: 'TbPemesanan',
    TbTransaksi: 'TbTransaksi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "masterUser" | "masterLayanan" | "tbKendaraan" | "tbPemesanan" | "tbTransaksi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MasterUser: {
        payload: Prisma.$MasterUserPayload<ExtArgs>
        fields: Prisma.MasterUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterUserPayload>
          }
          findFirst: {
            args: Prisma.MasterUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterUserPayload>
          }
          findMany: {
            args: Prisma.MasterUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterUserPayload>[]
          }
          create: {
            args: Prisma.MasterUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterUserPayload>
          }
          createMany: {
            args: Prisma.MasterUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterUserPayload>[]
          }
          delete: {
            args: Prisma.MasterUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterUserPayload>
          }
          update: {
            args: Prisma.MasterUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterUserPayload>
          }
          deleteMany: {
            args: Prisma.MasterUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MasterUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterUserPayload>
          }
          aggregate: {
            args: Prisma.MasterUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterUser>
          }
          groupBy: {
            args: Prisma.MasterUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterUserCountArgs<ExtArgs>
            result: $Utils.Optional<MasterUserCountAggregateOutputType> | number
          }
        }
      }
      MasterLayanan: {
        payload: Prisma.$MasterLayananPayload<ExtArgs>
        fields: Prisma.MasterLayananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterLayananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLayananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterLayananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLayananPayload>
          }
          findFirst: {
            args: Prisma.MasterLayananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLayananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterLayananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLayananPayload>
          }
          findMany: {
            args: Prisma.MasterLayananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLayananPayload>[]
          }
          create: {
            args: Prisma.MasterLayananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLayananPayload>
          }
          createMany: {
            args: Prisma.MasterLayananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterLayananCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLayananPayload>[]
          }
          delete: {
            args: Prisma.MasterLayananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLayananPayload>
          }
          update: {
            args: Prisma.MasterLayananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLayananPayload>
          }
          deleteMany: {
            args: Prisma.MasterLayananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterLayananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MasterLayananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLayananPayload>
          }
          aggregate: {
            args: Prisma.MasterLayananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterLayanan>
          }
          groupBy: {
            args: Prisma.MasterLayananGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterLayananGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterLayananCountArgs<ExtArgs>
            result: $Utils.Optional<MasterLayananCountAggregateOutputType> | number
          }
        }
      }
      TbKendaraan: {
        payload: Prisma.$TbKendaraanPayload<ExtArgs>
        fields: Prisma.TbKendaraanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TbKendaraanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbKendaraanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TbKendaraanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbKendaraanPayload>
          }
          findFirst: {
            args: Prisma.TbKendaraanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbKendaraanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TbKendaraanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbKendaraanPayload>
          }
          findMany: {
            args: Prisma.TbKendaraanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbKendaraanPayload>[]
          }
          create: {
            args: Prisma.TbKendaraanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbKendaraanPayload>
          }
          createMany: {
            args: Prisma.TbKendaraanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TbKendaraanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbKendaraanPayload>[]
          }
          delete: {
            args: Prisma.TbKendaraanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbKendaraanPayload>
          }
          update: {
            args: Prisma.TbKendaraanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbKendaraanPayload>
          }
          deleteMany: {
            args: Prisma.TbKendaraanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TbKendaraanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TbKendaraanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbKendaraanPayload>
          }
          aggregate: {
            args: Prisma.TbKendaraanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbKendaraan>
          }
          groupBy: {
            args: Prisma.TbKendaraanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TbKendaraanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TbKendaraanCountArgs<ExtArgs>
            result: $Utils.Optional<TbKendaraanCountAggregateOutputType> | number
          }
        }
      }
      TbPemesanan: {
        payload: Prisma.$TbPemesananPayload<ExtArgs>
        fields: Prisma.TbPemesananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TbPemesananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbPemesananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TbPemesananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbPemesananPayload>
          }
          findFirst: {
            args: Prisma.TbPemesananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbPemesananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TbPemesananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbPemesananPayload>
          }
          findMany: {
            args: Prisma.TbPemesananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbPemesananPayload>[]
          }
          create: {
            args: Prisma.TbPemesananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbPemesananPayload>
          }
          createMany: {
            args: Prisma.TbPemesananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TbPemesananCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbPemesananPayload>[]
          }
          delete: {
            args: Prisma.TbPemesananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbPemesananPayload>
          }
          update: {
            args: Prisma.TbPemesananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbPemesananPayload>
          }
          deleteMany: {
            args: Prisma.TbPemesananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TbPemesananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TbPemesananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbPemesananPayload>
          }
          aggregate: {
            args: Prisma.TbPemesananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbPemesanan>
          }
          groupBy: {
            args: Prisma.TbPemesananGroupByArgs<ExtArgs>
            result: $Utils.Optional<TbPemesananGroupByOutputType>[]
          }
          count: {
            args: Prisma.TbPemesananCountArgs<ExtArgs>
            result: $Utils.Optional<TbPemesananCountAggregateOutputType> | number
          }
        }
      }
      TbTransaksi: {
        payload: Prisma.$TbTransaksiPayload<ExtArgs>
        fields: Prisma.TbTransaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TbTransaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbTransaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TbTransaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbTransaksiPayload>
          }
          findFirst: {
            args: Prisma.TbTransaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbTransaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TbTransaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbTransaksiPayload>
          }
          findMany: {
            args: Prisma.TbTransaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbTransaksiPayload>[]
          }
          create: {
            args: Prisma.TbTransaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbTransaksiPayload>
          }
          createMany: {
            args: Prisma.TbTransaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TbTransaksiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbTransaksiPayload>[]
          }
          delete: {
            args: Prisma.TbTransaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbTransaksiPayload>
          }
          update: {
            args: Prisma.TbTransaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbTransaksiPayload>
          }
          deleteMany: {
            args: Prisma.TbTransaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TbTransaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TbTransaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TbTransaksiPayload>
          }
          aggregate: {
            args: Prisma.TbTransaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbTransaksi>
          }
          groupBy: {
            args: Prisma.TbTransaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TbTransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.TbTransaksiCountArgs<ExtArgs>
            result: $Utils.Optional<TbTransaksiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MasterUserCountOutputType
   */

  export type MasterUserCountOutputType = {
    pemesanan: number
    transaksi: number
  }

  export type MasterUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pemesanan?: boolean | MasterUserCountOutputTypeCountPemesananArgs
    transaksi?: boolean | MasterUserCountOutputTypeCountTransaksiArgs
  }

  // Custom InputTypes
  /**
   * MasterUserCountOutputType without action
   */
  export type MasterUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterUserCountOutputType
     */
    select?: MasterUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasterUserCountOutputType without action
   */
  export type MasterUserCountOutputTypeCountPemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TbPemesananWhereInput
  }

  /**
   * MasterUserCountOutputType without action
   */
  export type MasterUserCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TbTransaksiWhereInput
  }


  /**
   * Count Type MasterLayananCountOutputType
   */

  export type MasterLayananCountOutputType = {
    pemesanan: number
  }

  export type MasterLayananCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pemesanan?: boolean | MasterLayananCountOutputTypeCountPemesananArgs
  }

  // Custom InputTypes
  /**
   * MasterLayananCountOutputType without action
   */
  export type MasterLayananCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLayananCountOutputType
     */
    select?: MasterLayananCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasterLayananCountOutputType without action
   */
  export type MasterLayananCountOutputTypeCountPemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TbPemesananWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MasterUser
   */

  export type AggregateMasterUser = {
    _count: MasterUserCountAggregateOutputType | null
    _avg: MasterUserAvgAggregateOutputType | null
    _sum: MasterUserSumAggregateOutputType | null
    _min: MasterUserMinAggregateOutputType | null
    _max: MasterUserMaxAggregateOutputType | null
  }

  export type MasterUserAvgAggregateOutputType = {
    id: number | null
  }

  export type MasterUserSumAggregateOutputType = {
    id: number | null
  }

  export type MasterUserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type MasterUserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type MasterUserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type MasterUserAvgAggregateInputType = {
    id?: true
  }

  export type MasterUserSumAggregateInputType = {
    id?: true
  }

  export type MasterUserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type MasterUserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type MasterUserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type MasterUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterUser to aggregate.
     */
    where?: MasterUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterUsers to fetch.
     */
    orderBy?: MasterUserOrderByWithRelationInput | MasterUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterUsers
    **/
    _count?: true | MasterUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasterUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasterUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterUserMaxAggregateInputType
  }

  export type GetMasterUserAggregateType<T extends MasterUserAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterUser[P]>
      : GetScalarType<T[P], AggregateMasterUser[P]>
  }




  export type MasterUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterUserWhereInput
    orderBy?: MasterUserOrderByWithAggregationInput | MasterUserOrderByWithAggregationInput[]
    by: MasterUserScalarFieldEnum[] | MasterUserScalarFieldEnum
    having?: MasterUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterUserCountAggregateInputType | true
    _avg?: MasterUserAvgAggregateInputType
    _sum?: MasterUserSumAggregateInputType
    _min?: MasterUserMinAggregateInputType
    _max?: MasterUserMaxAggregateInputType
  }

  export type MasterUserGroupByOutputType = {
    id: number
    username: string
    password: string
    role: string
    createdAt: Date
    _count: MasterUserCountAggregateOutputType | null
    _avg: MasterUserAvgAggregateOutputType | null
    _sum: MasterUserSumAggregateOutputType | null
    _min: MasterUserMinAggregateOutputType | null
    _max: MasterUserMaxAggregateOutputType | null
  }

  type GetMasterUserGroupByPayload<T extends MasterUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterUserGroupByOutputType[P]>
            : GetScalarType<T[P], MasterUserGroupByOutputType[P]>
        }
      >
    >


  export type MasterUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    pemesanan?: boolean | MasterUser$pemesananArgs<ExtArgs>
    transaksi?: boolean | MasterUser$transaksiArgs<ExtArgs>
    _count?: boolean | MasterUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterUser"]>

  export type MasterUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["masterUser"]>

  export type MasterUserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type MasterUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pemesanan?: boolean | MasterUser$pemesananArgs<ExtArgs>
    transaksi?: boolean | MasterUser$transaksiArgs<ExtArgs>
    _count?: boolean | MasterUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MasterUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MasterUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterUser"
    objects: {
      pemesanan: Prisma.$TbPemesananPayload<ExtArgs>[]
      transaksi: Prisma.$TbTransaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["masterUser"]>
    composites: {}
  }

  type MasterUserGetPayload<S extends boolean | null | undefined | MasterUserDefaultArgs> = $Result.GetResult<Prisma.$MasterUserPayload, S>

  type MasterUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MasterUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MasterUserCountAggregateInputType | true
    }

  export interface MasterUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterUser'], meta: { name: 'MasterUser' } }
    /**
     * Find zero or one MasterUser that matches the filter.
     * @param {MasterUserFindUniqueArgs} args - Arguments to find a MasterUser
     * @example
     * // Get one MasterUser
     * const masterUser = await prisma.masterUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterUserFindUniqueArgs>(args: SelectSubset<T, MasterUserFindUniqueArgs<ExtArgs>>): Prisma__MasterUserClient<$Result.GetResult<Prisma.$MasterUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MasterUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MasterUserFindUniqueOrThrowArgs} args - Arguments to find a MasterUser
     * @example
     * // Get one MasterUser
     * const masterUser = await prisma.masterUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterUserFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterUserClient<$Result.GetResult<Prisma.$MasterUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MasterUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterUserFindFirstArgs} args - Arguments to find a MasterUser
     * @example
     * // Get one MasterUser
     * const masterUser = await prisma.masterUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterUserFindFirstArgs>(args?: SelectSubset<T, MasterUserFindFirstArgs<ExtArgs>>): Prisma__MasterUserClient<$Result.GetResult<Prisma.$MasterUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MasterUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterUserFindFirstOrThrowArgs} args - Arguments to find a MasterUser
     * @example
     * // Get one MasterUser
     * const masterUser = await prisma.masterUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterUserFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterUserClient<$Result.GetResult<Prisma.$MasterUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MasterUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterUsers
     * const masterUsers = await prisma.masterUser.findMany()
     * 
     * // Get first 10 MasterUsers
     * const masterUsers = await prisma.masterUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterUserWithIdOnly = await prisma.masterUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterUserFindManyArgs>(args?: SelectSubset<T, MasterUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MasterUser.
     * @param {MasterUserCreateArgs} args - Arguments to create a MasterUser.
     * @example
     * // Create one MasterUser
     * const MasterUser = await prisma.masterUser.create({
     *   data: {
     *     // ... data to create a MasterUser
     *   }
     * })
     * 
     */
    create<T extends MasterUserCreateArgs>(args: SelectSubset<T, MasterUserCreateArgs<ExtArgs>>): Prisma__MasterUserClient<$Result.GetResult<Prisma.$MasterUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MasterUsers.
     * @param {MasterUserCreateManyArgs} args - Arguments to create many MasterUsers.
     * @example
     * // Create many MasterUsers
     * const masterUser = await prisma.masterUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterUserCreateManyArgs>(args?: SelectSubset<T, MasterUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterUsers and returns the data saved in the database.
     * @param {MasterUserCreateManyAndReturnArgs} args - Arguments to create many MasterUsers.
     * @example
     * // Create many MasterUsers
     * const masterUser = await prisma.masterUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterUsers and only return the `id`
     * const masterUserWithIdOnly = await prisma.masterUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterUserCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MasterUser.
     * @param {MasterUserDeleteArgs} args - Arguments to delete one MasterUser.
     * @example
     * // Delete one MasterUser
     * const MasterUser = await prisma.masterUser.delete({
     *   where: {
     *     // ... filter to delete one MasterUser
     *   }
     * })
     * 
     */
    delete<T extends MasterUserDeleteArgs>(args: SelectSubset<T, MasterUserDeleteArgs<ExtArgs>>): Prisma__MasterUserClient<$Result.GetResult<Prisma.$MasterUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MasterUser.
     * @param {MasterUserUpdateArgs} args - Arguments to update one MasterUser.
     * @example
     * // Update one MasterUser
     * const masterUser = await prisma.masterUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterUserUpdateArgs>(args: SelectSubset<T, MasterUserUpdateArgs<ExtArgs>>): Prisma__MasterUserClient<$Result.GetResult<Prisma.$MasterUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MasterUsers.
     * @param {MasterUserDeleteManyArgs} args - Arguments to filter MasterUsers to delete.
     * @example
     * // Delete a few MasterUsers
     * const { count } = await prisma.masterUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterUserDeleteManyArgs>(args?: SelectSubset<T, MasterUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterUsers
     * const masterUser = await prisma.masterUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterUserUpdateManyArgs>(args: SelectSubset<T, MasterUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MasterUser.
     * @param {MasterUserUpsertArgs} args - Arguments to update or create a MasterUser.
     * @example
     * // Update or create a MasterUser
     * const masterUser = await prisma.masterUser.upsert({
     *   create: {
     *     // ... data to create a MasterUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterUser we want to update
     *   }
     * })
     */
    upsert<T extends MasterUserUpsertArgs>(args: SelectSubset<T, MasterUserUpsertArgs<ExtArgs>>): Prisma__MasterUserClient<$Result.GetResult<Prisma.$MasterUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MasterUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterUserCountArgs} args - Arguments to filter MasterUsers to count.
     * @example
     * // Count the number of MasterUsers
     * const count = await prisma.masterUser.count({
     *   where: {
     *     // ... the filter for the MasterUsers we want to count
     *   }
     * })
    **/
    count<T extends MasterUserCountArgs>(
      args?: Subset<T, MasterUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MasterUserAggregateArgs>(args: Subset<T, MasterUserAggregateArgs>): Prisma.PrismaPromise<GetMasterUserAggregateType<T>>

    /**
     * Group by MasterUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MasterUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterUserGroupByArgs['orderBy'] }
        : { orderBy?: MasterUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MasterUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterUser model
   */
  readonly fields: MasterUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pemesanan<T extends MasterUser$pemesananArgs<ExtArgs> = {}>(args?: Subset<T, MasterUser$pemesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TbPemesananPayload<ExtArgs>, T, "findMany"> | Null>
    transaksi<T extends MasterUser$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, MasterUser$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TbTransaksiPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MasterUser model
   */ 
  interface MasterUserFieldRefs {
    readonly id: FieldRef<"MasterUser", 'Int'>
    readonly username: FieldRef<"MasterUser", 'String'>
    readonly password: FieldRef<"MasterUser", 'String'>
    readonly role: FieldRef<"MasterUser", 'String'>
    readonly createdAt: FieldRef<"MasterUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MasterUser findUnique
   */
  export type MasterUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterUser
     */
    select?: MasterUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterUserInclude<ExtArgs> | null
    /**
     * Filter, which MasterUser to fetch.
     */
    where: MasterUserWhereUniqueInput
  }

  /**
   * MasterUser findUniqueOrThrow
   */
  export type MasterUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterUser
     */
    select?: MasterUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterUserInclude<ExtArgs> | null
    /**
     * Filter, which MasterUser to fetch.
     */
    where: MasterUserWhereUniqueInput
  }

  /**
   * MasterUser findFirst
   */
  export type MasterUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterUser
     */
    select?: MasterUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterUserInclude<ExtArgs> | null
    /**
     * Filter, which MasterUser to fetch.
     */
    where?: MasterUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterUsers to fetch.
     */
    orderBy?: MasterUserOrderByWithRelationInput | MasterUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterUsers.
     */
    cursor?: MasterUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterUsers.
     */
    distinct?: MasterUserScalarFieldEnum | MasterUserScalarFieldEnum[]
  }

  /**
   * MasterUser findFirstOrThrow
   */
  export type MasterUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterUser
     */
    select?: MasterUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterUserInclude<ExtArgs> | null
    /**
     * Filter, which MasterUser to fetch.
     */
    where?: MasterUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterUsers to fetch.
     */
    orderBy?: MasterUserOrderByWithRelationInput | MasterUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterUsers.
     */
    cursor?: MasterUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterUsers.
     */
    distinct?: MasterUserScalarFieldEnum | MasterUserScalarFieldEnum[]
  }

  /**
   * MasterUser findMany
   */
  export type MasterUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterUser
     */
    select?: MasterUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterUserInclude<ExtArgs> | null
    /**
     * Filter, which MasterUsers to fetch.
     */
    where?: MasterUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterUsers to fetch.
     */
    orderBy?: MasterUserOrderByWithRelationInput | MasterUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterUsers.
     */
    cursor?: MasterUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterUsers.
     */
    skip?: number
    distinct?: MasterUserScalarFieldEnum | MasterUserScalarFieldEnum[]
  }

  /**
   * MasterUser create
   */
  export type MasterUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterUser
     */
    select?: MasterUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterUserInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterUser.
     */
    data: XOR<MasterUserCreateInput, MasterUserUncheckedCreateInput>
  }

  /**
   * MasterUser createMany
   */
  export type MasterUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterUsers.
     */
    data: MasterUserCreateManyInput | MasterUserCreateManyInput[]
  }

  /**
   * MasterUser createManyAndReturn
   */
  export type MasterUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterUser
     */
    select?: MasterUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MasterUsers.
     */
    data: MasterUserCreateManyInput | MasterUserCreateManyInput[]
  }

  /**
   * MasterUser update
   */
  export type MasterUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterUser
     */
    select?: MasterUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterUserInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterUser.
     */
    data: XOR<MasterUserUpdateInput, MasterUserUncheckedUpdateInput>
    /**
     * Choose, which MasterUser to update.
     */
    where: MasterUserWhereUniqueInput
  }

  /**
   * MasterUser updateMany
   */
  export type MasterUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterUsers.
     */
    data: XOR<MasterUserUpdateManyMutationInput, MasterUserUncheckedUpdateManyInput>
    /**
     * Filter which MasterUsers to update
     */
    where?: MasterUserWhereInput
  }

  /**
   * MasterUser upsert
   */
  export type MasterUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterUser
     */
    select?: MasterUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterUserInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterUser to update in case it exists.
     */
    where: MasterUserWhereUniqueInput
    /**
     * In case the MasterUser found by the `where` argument doesn't exist, create a new MasterUser with this data.
     */
    create: XOR<MasterUserCreateInput, MasterUserUncheckedCreateInput>
    /**
     * In case the MasterUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterUserUpdateInput, MasterUserUncheckedUpdateInput>
  }

  /**
   * MasterUser delete
   */
  export type MasterUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterUser
     */
    select?: MasterUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterUserInclude<ExtArgs> | null
    /**
     * Filter which MasterUser to delete.
     */
    where: MasterUserWhereUniqueInput
  }

  /**
   * MasterUser deleteMany
   */
  export type MasterUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterUsers to delete
     */
    where?: MasterUserWhereInput
  }

  /**
   * MasterUser.pemesanan
   */
  export type MasterUser$pemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbPemesanan
     */
    select?: TbPemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbPemesananInclude<ExtArgs> | null
    where?: TbPemesananWhereInput
    orderBy?: TbPemesananOrderByWithRelationInput | TbPemesananOrderByWithRelationInput[]
    cursor?: TbPemesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TbPemesananScalarFieldEnum | TbPemesananScalarFieldEnum[]
  }

  /**
   * MasterUser.transaksi
   */
  export type MasterUser$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbTransaksi
     */
    select?: TbTransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbTransaksiInclude<ExtArgs> | null
    where?: TbTransaksiWhereInput
    orderBy?: TbTransaksiOrderByWithRelationInput | TbTransaksiOrderByWithRelationInput[]
    cursor?: TbTransaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TbTransaksiScalarFieldEnum | TbTransaksiScalarFieldEnum[]
  }

  /**
   * MasterUser without action
   */
  export type MasterUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterUser
     */
    select?: MasterUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterUserInclude<ExtArgs> | null
  }


  /**
   * Model MasterLayanan
   */

  export type AggregateMasterLayanan = {
    _count: MasterLayananCountAggregateOutputType | null
    _avg: MasterLayananAvgAggregateOutputType | null
    _sum: MasterLayananSumAggregateOutputType | null
    _min: MasterLayananMinAggregateOutputType | null
    _max: MasterLayananMaxAggregateOutputType | null
  }

  export type MasterLayananAvgAggregateOutputType = {
    id: number | null
    biaya: number | null
    stokKursi: number | null
  }

  export type MasterLayananSumAggregateOutputType = {
    id: number | null
    biaya: number | null
    stokKursi: number | null
  }

  export type MasterLayananMinAggregateOutputType = {
    id: number | null
    namaLayanan: string | null
    waktuBerangkat: Date | null
    rute: string | null
    biaya: number | null
    stokKursi: number | null
  }

  export type MasterLayananMaxAggregateOutputType = {
    id: number | null
    namaLayanan: string | null
    waktuBerangkat: Date | null
    rute: string | null
    biaya: number | null
    stokKursi: number | null
  }

  export type MasterLayananCountAggregateOutputType = {
    id: number
    namaLayanan: number
    waktuBerangkat: number
    rute: number
    biaya: number
    stokKursi: number
    _all: number
  }


  export type MasterLayananAvgAggregateInputType = {
    id?: true
    biaya?: true
    stokKursi?: true
  }

  export type MasterLayananSumAggregateInputType = {
    id?: true
    biaya?: true
    stokKursi?: true
  }

  export type MasterLayananMinAggregateInputType = {
    id?: true
    namaLayanan?: true
    waktuBerangkat?: true
    rute?: true
    biaya?: true
    stokKursi?: true
  }

  export type MasterLayananMaxAggregateInputType = {
    id?: true
    namaLayanan?: true
    waktuBerangkat?: true
    rute?: true
    biaya?: true
    stokKursi?: true
  }

  export type MasterLayananCountAggregateInputType = {
    id?: true
    namaLayanan?: true
    waktuBerangkat?: true
    rute?: true
    biaya?: true
    stokKursi?: true
    _all?: true
  }

  export type MasterLayananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterLayanan to aggregate.
     */
    where?: MasterLayananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterLayanans to fetch.
     */
    orderBy?: MasterLayananOrderByWithRelationInput | MasterLayananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterLayananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterLayanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterLayanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterLayanans
    **/
    _count?: true | MasterLayananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasterLayananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasterLayananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterLayananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterLayananMaxAggregateInputType
  }

  export type GetMasterLayananAggregateType<T extends MasterLayananAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterLayanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterLayanan[P]>
      : GetScalarType<T[P], AggregateMasterLayanan[P]>
  }




  export type MasterLayananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterLayananWhereInput
    orderBy?: MasterLayananOrderByWithAggregationInput | MasterLayananOrderByWithAggregationInput[]
    by: MasterLayananScalarFieldEnum[] | MasterLayananScalarFieldEnum
    having?: MasterLayananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterLayananCountAggregateInputType | true
    _avg?: MasterLayananAvgAggregateInputType
    _sum?: MasterLayananSumAggregateInputType
    _min?: MasterLayananMinAggregateInputType
    _max?: MasterLayananMaxAggregateInputType
  }

  export type MasterLayananGroupByOutputType = {
    id: number
    namaLayanan: string
    waktuBerangkat: Date
    rute: string
    biaya: number
    stokKursi: number
    _count: MasterLayananCountAggregateOutputType | null
    _avg: MasterLayananAvgAggregateOutputType | null
    _sum: MasterLayananSumAggregateOutputType | null
    _min: MasterLayananMinAggregateOutputType | null
    _max: MasterLayananMaxAggregateOutputType | null
  }

  type GetMasterLayananGroupByPayload<T extends MasterLayananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterLayananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterLayananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterLayananGroupByOutputType[P]>
            : GetScalarType<T[P], MasterLayananGroupByOutputType[P]>
        }
      >
    >


  export type MasterLayananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaLayanan?: boolean
    waktuBerangkat?: boolean
    rute?: boolean
    biaya?: boolean
    stokKursi?: boolean
    pemesanan?: boolean | MasterLayanan$pemesananArgs<ExtArgs>
    _count?: boolean | MasterLayananCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterLayanan"]>

  export type MasterLayananSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaLayanan?: boolean
    waktuBerangkat?: boolean
    rute?: boolean
    biaya?: boolean
    stokKursi?: boolean
  }, ExtArgs["result"]["masterLayanan"]>

  export type MasterLayananSelectScalar = {
    id?: boolean
    namaLayanan?: boolean
    waktuBerangkat?: boolean
    rute?: boolean
    biaya?: boolean
    stokKursi?: boolean
  }

  export type MasterLayananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pemesanan?: boolean | MasterLayanan$pemesananArgs<ExtArgs>
    _count?: boolean | MasterLayananCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MasterLayananIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MasterLayananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterLayanan"
    objects: {
      pemesanan: Prisma.$TbPemesananPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namaLayanan: string
      waktuBerangkat: Date
      rute: string
      biaya: number
      stokKursi: number
    }, ExtArgs["result"]["masterLayanan"]>
    composites: {}
  }

  type MasterLayananGetPayload<S extends boolean | null | undefined | MasterLayananDefaultArgs> = $Result.GetResult<Prisma.$MasterLayananPayload, S>

  type MasterLayananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MasterLayananFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MasterLayananCountAggregateInputType | true
    }

  export interface MasterLayananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterLayanan'], meta: { name: 'MasterLayanan' } }
    /**
     * Find zero or one MasterLayanan that matches the filter.
     * @param {MasterLayananFindUniqueArgs} args - Arguments to find a MasterLayanan
     * @example
     * // Get one MasterLayanan
     * const masterLayanan = await prisma.masterLayanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterLayananFindUniqueArgs>(args: SelectSubset<T, MasterLayananFindUniqueArgs<ExtArgs>>): Prisma__MasterLayananClient<$Result.GetResult<Prisma.$MasterLayananPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MasterLayanan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MasterLayananFindUniqueOrThrowArgs} args - Arguments to find a MasterLayanan
     * @example
     * // Get one MasterLayanan
     * const masterLayanan = await prisma.masterLayanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterLayananFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterLayananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterLayananClient<$Result.GetResult<Prisma.$MasterLayananPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MasterLayanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLayananFindFirstArgs} args - Arguments to find a MasterLayanan
     * @example
     * // Get one MasterLayanan
     * const masterLayanan = await prisma.masterLayanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterLayananFindFirstArgs>(args?: SelectSubset<T, MasterLayananFindFirstArgs<ExtArgs>>): Prisma__MasterLayananClient<$Result.GetResult<Prisma.$MasterLayananPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MasterLayanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLayananFindFirstOrThrowArgs} args - Arguments to find a MasterLayanan
     * @example
     * // Get one MasterLayanan
     * const masterLayanan = await prisma.masterLayanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterLayananFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterLayananFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterLayananClient<$Result.GetResult<Prisma.$MasterLayananPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MasterLayanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLayananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterLayanans
     * const masterLayanans = await prisma.masterLayanan.findMany()
     * 
     * // Get first 10 MasterLayanans
     * const masterLayanans = await prisma.masterLayanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterLayananWithIdOnly = await prisma.masterLayanan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterLayananFindManyArgs>(args?: SelectSubset<T, MasterLayananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterLayananPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MasterLayanan.
     * @param {MasterLayananCreateArgs} args - Arguments to create a MasterLayanan.
     * @example
     * // Create one MasterLayanan
     * const MasterLayanan = await prisma.masterLayanan.create({
     *   data: {
     *     // ... data to create a MasterLayanan
     *   }
     * })
     * 
     */
    create<T extends MasterLayananCreateArgs>(args: SelectSubset<T, MasterLayananCreateArgs<ExtArgs>>): Prisma__MasterLayananClient<$Result.GetResult<Prisma.$MasterLayananPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MasterLayanans.
     * @param {MasterLayananCreateManyArgs} args - Arguments to create many MasterLayanans.
     * @example
     * // Create many MasterLayanans
     * const masterLayanan = await prisma.masterLayanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterLayananCreateManyArgs>(args?: SelectSubset<T, MasterLayananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterLayanans and returns the data saved in the database.
     * @param {MasterLayananCreateManyAndReturnArgs} args - Arguments to create many MasterLayanans.
     * @example
     * // Create many MasterLayanans
     * const masterLayanan = await prisma.masterLayanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterLayanans and only return the `id`
     * const masterLayananWithIdOnly = await prisma.masterLayanan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterLayananCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterLayananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterLayananPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MasterLayanan.
     * @param {MasterLayananDeleteArgs} args - Arguments to delete one MasterLayanan.
     * @example
     * // Delete one MasterLayanan
     * const MasterLayanan = await prisma.masterLayanan.delete({
     *   where: {
     *     // ... filter to delete one MasterLayanan
     *   }
     * })
     * 
     */
    delete<T extends MasterLayananDeleteArgs>(args: SelectSubset<T, MasterLayananDeleteArgs<ExtArgs>>): Prisma__MasterLayananClient<$Result.GetResult<Prisma.$MasterLayananPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MasterLayanan.
     * @param {MasterLayananUpdateArgs} args - Arguments to update one MasterLayanan.
     * @example
     * // Update one MasterLayanan
     * const masterLayanan = await prisma.masterLayanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterLayananUpdateArgs>(args: SelectSubset<T, MasterLayananUpdateArgs<ExtArgs>>): Prisma__MasterLayananClient<$Result.GetResult<Prisma.$MasterLayananPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MasterLayanans.
     * @param {MasterLayananDeleteManyArgs} args - Arguments to filter MasterLayanans to delete.
     * @example
     * // Delete a few MasterLayanans
     * const { count } = await prisma.masterLayanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterLayananDeleteManyArgs>(args?: SelectSubset<T, MasterLayananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterLayanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLayananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterLayanans
     * const masterLayanan = await prisma.masterLayanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterLayananUpdateManyArgs>(args: SelectSubset<T, MasterLayananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MasterLayanan.
     * @param {MasterLayananUpsertArgs} args - Arguments to update or create a MasterLayanan.
     * @example
     * // Update or create a MasterLayanan
     * const masterLayanan = await prisma.masterLayanan.upsert({
     *   create: {
     *     // ... data to create a MasterLayanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterLayanan we want to update
     *   }
     * })
     */
    upsert<T extends MasterLayananUpsertArgs>(args: SelectSubset<T, MasterLayananUpsertArgs<ExtArgs>>): Prisma__MasterLayananClient<$Result.GetResult<Prisma.$MasterLayananPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MasterLayanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLayananCountArgs} args - Arguments to filter MasterLayanans to count.
     * @example
     * // Count the number of MasterLayanans
     * const count = await prisma.masterLayanan.count({
     *   where: {
     *     // ... the filter for the MasterLayanans we want to count
     *   }
     * })
    **/
    count<T extends MasterLayananCountArgs>(
      args?: Subset<T, MasterLayananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterLayananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterLayanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLayananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MasterLayananAggregateArgs>(args: Subset<T, MasterLayananAggregateArgs>): Prisma.PrismaPromise<GetMasterLayananAggregateType<T>>

    /**
     * Group by MasterLayanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLayananGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MasterLayananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterLayananGroupByArgs['orderBy'] }
        : { orderBy?: MasterLayananGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MasterLayananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterLayananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterLayanan model
   */
  readonly fields: MasterLayananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterLayanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterLayananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pemesanan<T extends MasterLayanan$pemesananArgs<ExtArgs> = {}>(args?: Subset<T, MasterLayanan$pemesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TbPemesananPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MasterLayanan model
   */ 
  interface MasterLayananFieldRefs {
    readonly id: FieldRef<"MasterLayanan", 'Int'>
    readonly namaLayanan: FieldRef<"MasterLayanan", 'String'>
    readonly waktuBerangkat: FieldRef<"MasterLayanan", 'DateTime'>
    readonly rute: FieldRef<"MasterLayanan", 'String'>
    readonly biaya: FieldRef<"MasterLayanan", 'Float'>
    readonly stokKursi: FieldRef<"MasterLayanan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MasterLayanan findUnique
   */
  export type MasterLayananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLayanan
     */
    select?: MasterLayananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterLayananInclude<ExtArgs> | null
    /**
     * Filter, which MasterLayanan to fetch.
     */
    where: MasterLayananWhereUniqueInput
  }

  /**
   * MasterLayanan findUniqueOrThrow
   */
  export type MasterLayananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLayanan
     */
    select?: MasterLayananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterLayananInclude<ExtArgs> | null
    /**
     * Filter, which MasterLayanan to fetch.
     */
    where: MasterLayananWhereUniqueInput
  }

  /**
   * MasterLayanan findFirst
   */
  export type MasterLayananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLayanan
     */
    select?: MasterLayananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterLayananInclude<ExtArgs> | null
    /**
     * Filter, which MasterLayanan to fetch.
     */
    where?: MasterLayananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterLayanans to fetch.
     */
    orderBy?: MasterLayananOrderByWithRelationInput | MasterLayananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterLayanans.
     */
    cursor?: MasterLayananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterLayanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterLayanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterLayanans.
     */
    distinct?: MasterLayananScalarFieldEnum | MasterLayananScalarFieldEnum[]
  }

  /**
   * MasterLayanan findFirstOrThrow
   */
  export type MasterLayananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLayanan
     */
    select?: MasterLayananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterLayananInclude<ExtArgs> | null
    /**
     * Filter, which MasterLayanan to fetch.
     */
    where?: MasterLayananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterLayanans to fetch.
     */
    orderBy?: MasterLayananOrderByWithRelationInput | MasterLayananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterLayanans.
     */
    cursor?: MasterLayananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterLayanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterLayanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterLayanans.
     */
    distinct?: MasterLayananScalarFieldEnum | MasterLayananScalarFieldEnum[]
  }

  /**
   * MasterLayanan findMany
   */
  export type MasterLayananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLayanan
     */
    select?: MasterLayananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterLayananInclude<ExtArgs> | null
    /**
     * Filter, which MasterLayanans to fetch.
     */
    where?: MasterLayananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterLayanans to fetch.
     */
    orderBy?: MasterLayananOrderByWithRelationInput | MasterLayananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterLayanans.
     */
    cursor?: MasterLayananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterLayanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterLayanans.
     */
    skip?: number
    distinct?: MasterLayananScalarFieldEnum | MasterLayananScalarFieldEnum[]
  }

  /**
   * MasterLayanan create
   */
  export type MasterLayananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLayanan
     */
    select?: MasterLayananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterLayananInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterLayanan.
     */
    data: XOR<MasterLayananCreateInput, MasterLayananUncheckedCreateInput>
  }

  /**
   * MasterLayanan createMany
   */
  export type MasterLayananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterLayanans.
     */
    data: MasterLayananCreateManyInput | MasterLayananCreateManyInput[]
  }

  /**
   * MasterLayanan createManyAndReturn
   */
  export type MasterLayananCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLayanan
     */
    select?: MasterLayananSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MasterLayanans.
     */
    data: MasterLayananCreateManyInput | MasterLayananCreateManyInput[]
  }

  /**
   * MasterLayanan update
   */
  export type MasterLayananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLayanan
     */
    select?: MasterLayananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterLayananInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterLayanan.
     */
    data: XOR<MasterLayananUpdateInput, MasterLayananUncheckedUpdateInput>
    /**
     * Choose, which MasterLayanan to update.
     */
    where: MasterLayananWhereUniqueInput
  }

  /**
   * MasterLayanan updateMany
   */
  export type MasterLayananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterLayanans.
     */
    data: XOR<MasterLayananUpdateManyMutationInput, MasterLayananUncheckedUpdateManyInput>
    /**
     * Filter which MasterLayanans to update
     */
    where?: MasterLayananWhereInput
  }

  /**
   * MasterLayanan upsert
   */
  export type MasterLayananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLayanan
     */
    select?: MasterLayananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterLayananInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterLayanan to update in case it exists.
     */
    where: MasterLayananWhereUniqueInput
    /**
     * In case the MasterLayanan found by the `where` argument doesn't exist, create a new MasterLayanan with this data.
     */
    create: XOR<MasterLayananCreateInput, MasterLayananUncheckedCreateInput>
    /**
     * In case the MasterLayanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterLayananUpdateInput, MasterLayananUncheckedUpdateInput>
  }

  /**
   * MasterLayanan delete
   */
  export type MasterLayananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLayanan
     */
    select?: MasterLayananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterLayananInclude<ExtArgs> | null
    /**
     * Filter which MasterLayanan to delete.
     */
    where: MasterLayananWhereUniqueInput
  }

  /**
   * MasterLayanan deleteMany
   */
  export type MasterLayananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterLayanans to delete
     */
    where?: MasterLayananWhereInput
  }

  /**
   * MasterLayanan.pemesanan
   */
  export type MasterLayanan$pemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbPemesanan
     */
    select?: TbPemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbPemesananInclude<ExtArgs> | null
    where?: TbPemesananWhereInput
    orderBy?: TbPemesananOrderByWithRelationInput | TbPemesananOrderByWithRelationInput[]
    cursor?: TbPemesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TbPemesananScalarFieldEnum | TbPemesananScalarFieldEnum[]
  }

  /**
   * MasterLayanan without action
   */
  export type MasterLayananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLayanan
     */
    select?: MasterLayananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterLayananInclude<ExtArgs> | null
  }


  /**
   * Model TbKendaraan
   */

  export type AggregateTbKendaraan = {
    _count: TbKendaraanCountAggregateOutputType | null
    _avg: TbKendaraanAvgAggregateOutputType | null
    _sum: TbKendaraanSumAggregateOutputType | null
    _min: TbKendaraanMinAggregateOutputType | null
    _max: TbKendaraanMaxAggregateOutputType | null
  }

  export type TbKendaraanAvgAggregateOutputType = {
    id: number | null
    kapasitas: number | null
  }

  export type TbKendaraanSumAggregateOutputType = {
    id: number | null
    kapasitas: number | null
  }

  export type TbKendaraanMinAggregateOutputType = {
    id: number | null
    nomor: string | null
    jenis: string | null
    kapasitas: number | null
    status: string | null
  }

  export type TbKendaraanMaxAggregateOutputType = {
    id: number | null
    nomor: string | null
    jenis: string | null
    kapasitas: number | null
    status: string | null
  }

  export type TbKendaraanCountAggregateOutputType = {
    id: number
    nomor: number
    jenis: number
    kapasitas: number
    status: number
    _all: number
  }


  export type TbKendaraanAvgAggregateInputType = {
    id?: true
    kapasitas?: true
  }

  export type TbKendaraanSumAggregateInputType = {
    id?: true
    kapasitas?: true
  }

  export type TbKendaraanMinAggregateInputType = {
    id?: true
    nomor?: true
    jenis?: true
    kapasitas?: true
    status?: true
  }

  export type TbKendaraanMaxAggregateInputType = {
    id?: true
    nomor?: true
    jenis?: true
    kapasitas?: true
    status?: true
  }

  export type TbKendaraanCountAggregateInputType = {
    id?: true
    nomor?: true
    jenis?: true
    kapasitas?: true
    status?: true
    _all?: true
  }

  export type TbKendaraanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TbKendaraan to aggregate.
     */
    where?: TbKendaraanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TbKendaraans to fetch.
     */
    orderBy?: TbKendaraanOrderByWithRelationInput | TbKendaraanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TbKendaraanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TbKendaraans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TbKendaraans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TbKendaraans
    **/
    _count?: true | TbKendaraanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TbKendaraanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TbKendaraanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TbKendaraanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TbKendaraanMaxAggregateInputType
  }

  export type GetTbKendaraanAggregateType<T extends TbKendaraanAggregateArgs> = {
        [P in keyof T & keyof AggregateTbKendaraan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbKendaraan[P]>
      : GetScalarType<T[P], AggregateTbKendaraan[P]>
  }




  export type TbKendaraanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TbKendaraanWhereInput
    orderBy?: TbKendaraanOrderByWithAggregationInput | TbKendaraanOrderByWithAggregationInput[]
    by: TbKendaraanScalarFieldEnum[] | TbKendaraanScalarFieldEnum
    having?: TbKendaraanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TbKendaraanCountAggregateInputType | true
    _avg?: TbKendaraanAvgAggregateInputType
    _sum?: TbKendaraanSumAggregateInputType
    _min?: TbKendaraanMinAggregateInputType
    _max?: TbKendaraanMaxAggregateInputType
  }

  export type TbKendaraanGroupByOutputType = {
    id: number
    nomor: string
    jenis: string
    kapasitas: number
    status: string
    _count: TbKendaraanCountAggregateOutputType | null
    _avg: TbKendaraanAvgAggregateOutputType | null
    _sum: TbKendaraanSumAggregateOutputType | null
    _min: TbKendaraanMinAggregateOutputType | null
    _max: TbKendaraanMaxAggregateOutputType | null
  }

  type GetTbKendaraanGroupByPayload<T extends TbKendaraanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TbKendaraanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TbKendaraanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TbKendaraanGroupByOutputType[P]>
            : GetScalarType<T[P], TbKendaraanGroupByOutputType[P]>
        }
      >
    >


  export type TbKendaraanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomor?: boolean
    jenis?: boolean
    kapasitas?: boolean
    status?: boolean
  }, ExtArgs["result"]["tbKendaraan"]>

  export type TbKendaraanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomor?: boolean
    jenis?: boolean
    kapasitas?: boolean
    status?: boolean
  }, ExtArgs["result"]["tbKendaraan"]>

  export type TbKendaraanSelectScalar = {
    id?: boolean
    nomor?: boolean
    jenis?: boolean
    kapasitas?: boolean
    status?: boolean
  }


  export type $TbKendaraanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TbKendaraan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomor: string
      jenis: string
      kapasitas: number
      status: string
    }, ExtArgs["result"]["tbKendaraan"]>
    composites: {}
  }

  type TbKendaraanGetPayload<S extends boolean | null | undefined | TbKendaraanDefaultArgs> = $Result.GetResult<Prisma.$TbKendaraanPayload, S>

  type TbKendaraanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TbKendaraanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TbKendaraanCountAggregateInputType | true
    }

  export interface TbKendaraanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TbKendaraan'], meta: { name: 'TbKendaraan' } }
    /**
     * Find zero or one TbKendaraan that matches the filter.
     * @param {TbKendaraanFindUniqueArgs} args - Arguments to find a TbKendaraan
     * @example
     * // Get one TbKendaraan
     * const tbKendaraan = await prisma.tbKendaraan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TbKendaraanFindUniqueArgs>(args: SelectSubset<T, TbKendaraanFindUniqueArgs<ExtArgs>>): Prisma__TbKendaraanClient<$Result.GetResult<Prisma.$TbKendaraanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TbKendaraan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TbKendaraanFindUniqueOrThrowArgs} args - Arguments to find a TbKendaraan
     * @example
     * // Get one TbKendaraan
     * const tbKendaraan = await prisma.tbKendaraan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TbKendaraanFindUniqueOrThrowArgs>(args: SelectSubset<T, TbKendaraanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TbKendaraanClient<$Result.GetResult<Prisma.$TbKendaraanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TbKendaraan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbKendaraanFindFirstArgs} args - Arguments to find a TbKendaraan
     * @example
     * // Get one TbKendaraan
     * const tbKendaraan = await prisma.tbKendaraan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TbKendaraanFindFirstArgs>(args?: SelectSubset<T, TbKendaraanFindFirstArgs<ExtArgs>>): Prisma__TbKendaraanClient<$Result.GetResult<Prisma.$TbKendaraanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TbKendaraan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbKendaraanFindFirstOrThrowArgs} args - Arguments to find a TbKendaraan
     * @example
     * // Get one TbKendaraan
     * const tbKendaraan = await prisma.tbKendaraan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TbKendaraanFindFirstOrThrowArgs>(args?: SelectSubset<T, TbKendaraanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TbKendaraanClient<$Result.GetResult<Prisma.$TbKendaraanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TbKendaraans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbKendaraanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TbKendaraans
     * const tbKendaraans = await prisma.tbKendaraan.findMany()
     * 
     * // Get first 10 TbKendaraans
     * const tbKendaraans = await prisma.tbKendaraan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbKendaraanWithIdOnly = await prisma.tbKendaraan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TbKendaraanFindManyArgs>(args?: SelectSubset<T, TbKendaraanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TbKendaraanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TbKendaraan.
     * @param {TbKendaraanCreateArgs} args - Arguments to create a TbKendaraan.
     * @example
     * // Create one TbKendaraan
     * const TbKendaraan = await prisma.tbKendaraan.create({
     *   data: {
     *     // ... data to create a TbKendaraan
     *   }
     * })
     * 
     */
    create<T extends TbKendaraanCreateArgs>(args: SelectSubset<T, TbKendaraanCreateArgs<ExtArgs>>): Prisma__TbKendaraanClient<$Result.GetResult<Prisma.$TbKendaraanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TbKendaraans.
     * @param {TbKendaraanCreateManyArgs} args - Arguments to create many TbKendaraans.
     * @example
     * // Create many TbKendaraans
     * const tbKendaraan = await prisma.tbKendaraan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TbKendaraanCreateManyArgs>(args?: SelectSubset<T, TbKendaraanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TbKendaraans and returns the data saved in the database.
     * @param {TbKendaraanCreateManyAndReturnArgs} args - Arguments to create many TbKendaraans.
     * @example
     * // Create many TbKendaraans
     * const tbKendaraan = await prisma.tbKendaraan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TbKendaraans and only return the `id`
     * const tbKendaraanWithIdOnly = await prisma.tbKendaraan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TbKendaraanCreateManyAndReturnArgs>(args?: SelectSubset<T, TbKendaraanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TbKendaraanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TbKendaraan.
     * @param {TbKendaraanDeleteArgs} args - Arguments to delete one TbKendaraan.
     * @example
     * // Delete one TbKendaraan
     * const TbKendaraan = await prisma.tbKendaraan.delete({
     *   where: {
     *     // ... filter to delete one TbKendaraan
     *   }
     * })
     * 
     */
    delete<T extends TbKendaraanDeleteArgs>(args: SelectSubset<T, TbKendaraanDeleteArgs<ExtArgs>>): Prisma__TbKendaraanClient<$Result.GetResult<Prisma.$TbKendaraanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TbKendaraan.
     * @param {TbKendaraanUpdateArgs} args - Arguments to update one TbKendaraan.
     * @example
     * // Update one TbKendaraan
     * const tbKendaraan = await prisma.tbKendaraan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TbKendaraanUpdateArgs>(args: SelectSubset<T, TbKendaraanUpdateArgs<ExtArgs>>): Prisma__TbKendaraanClient<$Result.GetResult<Prisma.$TbKendaraanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TbKendaraans.
     * @param {TbKendaraanDeleteManyArgs} args - Arguments to filter TbKendaraans to delete.
     * @example
     * // Delete a few TbKendaraans
     * const { count } = await prisma.tbKendaraan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TbKendaraanDeleteManyArgs>(args?: SelectSubset<T, TbKendaraanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TbKendaraans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbKendaraanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TbKendaraans
     * const tbKendaraan = await prisma.tbKendaraan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TbKendaraanUpdateManyArgs>(args: SelectSubset<T, TbKendaraanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TbKendaraan.
     * @param {TbKendaraanUpsertArgs} args - Arguments to update or create a TbKendaraan.
     * @example
     * // Update or create a TbKendaraan
     * const tbKendaraan = await prisma.tbKendaraan.upsert({
     *   create: {
     *     // ... data to create a TbKendaraan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TbKendaraan we want to update
     *   }
     * })
     */
    upsert<T extends TbKendaraanUpsertArgs>(args: SelectSubset<T, TbKendaraanUpsertArgs<ExtArgs>>): Prisma__TbKendaraanClient<$Result.GetResult<Prisma.$TbKendaraanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TbKendaraans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbKendaraanCountArgs} args - Arguments to filter TbKendaraans to count.
     * @example
     * // Count the number of TbKendaraans
     * const count = await prisma.tbKendaraan.count({
     *   where: {
     *     // ... the filter for the TbKendaraans we want to count
     *   }
     * })
    **/
    count<T extends TbKendaraanCountArgs>(
      args?: Subset<T, TbKendaraanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TbKendaraanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TbKendaraan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbKendaraanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TbKendaraanAggregateArgs>(args: Subset<T, TbKendaraanAggregateArgs>): Prisma.PrismaPromise<GetTbKendaraanAggregateType<T>>

    /**
     * Group by TbKendaraan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbKendaraanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TbKendaraanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TbKendaraanGroupByArgs['orderBy'] }
        : { orderBy?: TbKendaraanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TbKendaraanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbKendaraanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TbKendaraan model
   */
  readonly fields: TbKendaraanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TbKendaraan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TbKendaraanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TbKendaraan model
   */ 
  interface TbKendaraanFieldRefs {
    readonly id: FieldRef<"TbKendaraan", 'Int'>
    readonly nomor: FieldRef<"TbKendaraan", 'String'>
    readonly jenis: FieldRef<"TbKendaraan", 'String'>
    readonly kapasitas: FieldRef<"TbKendaraan", 'Int'>
    readonly status: FieldRef<"TbKendaraan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TbKendaraan findUnique
   */
  export type TbKendaraanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbKendaraan
     */
    select?: TbKendaraanSelect<ExtArgs> | null
    /**
     * Filter, which TbKendaraan to fetch.
     */
    where: TbKendaraanWhereUniqueInput
  }

  /**
   * TbKendaraan findUniqueOrThrow
   */
  export type TbKendaraanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbKendaraan
     */
    select?: TbKendaraanSelect<ExtArgs> | null
    /**
     * Filter, which TbKendaraan to fetch.
     */
    where: TbKendaraanWhereUniqueInput
  }

  /**
   * TbKendaraan findFirst
   */
  export type TbKendaraanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbKendaraan
     */
    select?: TbKendaraanSelect<ExtArgs> | null
    /**
     * Filter, which TbKendaraan to fetch.
     */
    where?: TbKendaraanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TbKendaraans to fetch.
     */
    orderBy?: TbKendaraanOrderByWithRelationInput | TbKendaraanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TbKendaraans.
     */
    cursor?: TbKendaraanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TbKendaraans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TbKendaraans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TbKendaraans.
     */
    distinct?: TbKendaraanScalarFieldEnum | TbKendaraanScalarFieldEnum[]
  }

  /**
   * TbKendaraan findFirstOrThrow
   */
  export type TbKendaraanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbKendaraan
     */
    select?: TbKendaraanSelect<ExtArgs> | null
    /**
     * Filter, which TbKendaraan to fetch.
     */
    where?: TbKendaraanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TbKendaraans to fetch.
     */
    orderBy?: TbKendaraanOrderByWithRelationInput | TbKendaraanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TbKendaraans.
     */
    cursor?: TbKendaraanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TbKendaraans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TbKendaraans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TbKendaraans.
     */
    distinct?: TbKendaraanScalarFieldEnum | TbKendaraanScalarFieldEnum[]
  }

  /**
   * TbKendaraan findMany
   */
  export type TbKendaraanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbKendaraan
     */
    select?: TbKendaraanSelect<ExtArgs> | null
    /**
     * Filter, which TbKendaraans to fetch.
     */
    where?: TbKendaraanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TbKendaraans to fetch.
     */
    orderBy?: TbKendaraanOrderByWithRelationInput | TbKendaraanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TbKendaraans.
     */
    cursor?: TbKendaraanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TbKendaraans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TbKendaraans.
     */
    skip?: number
    distinct?: TbKendaraanScalarFieldEnum | TbKendaraanScalarFieldEnum[]
  }

  /**
   * TbKendaraan create
   */
  export type TbKendaraanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbKendaraan
     */
    select?: TbKendaraanSelect<ExtArgs> | null
    /**
     * The data needed to create a TbKendaraan.
     */
    data: XOR<TbKendaraanCreateInput, TbKendaraanUncheckedCreateInput>
  }

  /**
   * TbKendaraan createMany
   */
  export type TbKendaraanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TbKendaraans.
     */
    data: TbKendaraanCreateManyInput | TbKendaraanCreateManyInput[]
  }

  /**
   * TbKendaraan createManyAndReturn
   */
  export type TbKendaraanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbKendaraan
     */
    select?: TbKendaraanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TbKendaraans.
     */
    data: TbKendaraanCreateManyInput | TbKendaraanCreateManyInput[]
  }

  /**
   * TbKendaraan update
   */
  export type TbKendaraanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbKendaraan
     */
    select?: TbKendaraanSelect<ExtArgs> | null
    /**
     * The data needed to update a TbKendaraan.
     */
    data: XOR<TbKendaraanUpdateInput, TbKendaraanUncheckedUpdateInput>
    /**
     * Choose, which TbKendaraan to update.
     */
    where: TbKendaraanWhereUniqueInput
  }

  /**
   * TbKendaraan updateMany
   */
  export type TbKendaraanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TbKendaraans.
     */
    data: XOR<TbKendaraanUpdateManyMutationInput, TbKendaraanUncheckedUpdateManyInput>
    /**
     * Filter which TbKendaraans to update
     */
    where?: TbKendaraanWhereInput
  }

  /**
   * TbKendaraan upsert
   */
  export type TbKendaraanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbKendaraan
     */
    select?: TbKendaraanSelect<ExtArgs> | null
    /**
     * The filter to search for the TbKendaraan to update in case it exists.
     */
    where: TbKendaraanWhereUniqueInput
    /**
     * In case the TbKendaraan found by the `where` argument doesn't exist, create a new TbKendaraan with this data.
     */
    create: XOR<TbKendaraanCreateInput, TbKendaraanUncheckedCreateInput>
    /**
     * In case the TbKendaraan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TbKendaraanUpdateInput, TbKendaraanUncheckedUpdateInput>
  }

  /**
   * TbKendaraan delete
   */
  export type TbKendaraanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbKendaraan
     */
    select?: TbKendaraanSelect<ExtArgs> | null
    /**
     * Filter which TbKendaraan to delete.
     */
    where: TbKendaraanWhereUniqueInput
  }

  /**
   * TbKendaraan deleteMany
   */
  export type TbKendaraanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TbKendaraans to delete
     */
    where?: TbKendaraanWhereInput
  }

  /**
   * TbKendaraan without action
   */
  export type TbKendaraanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbKendaraan
     */
    select?: TbKendaraanSelect<ExtArgs> | null
  }


  /**
   * Model TbPemesanan
   */

  export type AggregateTbPemesanan = {
    _count: TbPemesananCountAggregateOutputType | null
    _avg: TbPemesananAvgAggregateOutputType | null
    _sum: TbPemesananSumAggregateOutputType | null
    _min: TbPemesananMinAggregateOutputType | null
    _max: TbPemesananMaxAggregateOutputType | null
  }

  export type TbPemesananAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    layananId: number | null
    jumlahTiket: number | null
    totalHarga: number | null
  }

  export type TbPemesananSumAggregateOutputType = {
    id: number | null
    userId: number | null
    layananId: number | null
    jumlahTiket: number | null
    totalHarga: number | null
  }

  export type TbPemesananMinAggregateOutputType = {
    id: number | null
    userId: number | null
    layananId: number | null
    jumlahTiket: number | null
    totalHarga: number | null
    status: string | null
    createdAt: Date | null
  }

  export type TbPemesananMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    layananId: number | null
    jumlahTiket: number | null
    totalHarga: number | null
    status: string | null
    createdAt: Date | null
  }

  export type TbPemesananCountAggregateOutputType = {
    id: number
    userId: number
    layananId: number
    jumlahTiket: number
    totalHarga: number
    status: number
    createdAt: number
    _all: number
  }


  export type TbPemesananAvgAggregateInputType = {
    id?: true
    userId?: true
    layananId?: true
    jumlahTiket?: true
    totalHarga?: true
  }

  export type TbPemesananSumAggregateInputType = {
    id?: true
    userId?: true
    layananId?: true
    jumlahTiket?: true
    totalHarga?: true
  }

  export type TbPemesananMinAggregateInputType = {
    id?: true
    userId?: true
    layananId?: true
    jumlahTiket?: true
    totalHarga?: true
    status?: true
    createdAt?: true
  }

  export type TbPemesananMaxAggregateInputType = {
    id?: true
    userId?: true
    layananId?: true
    jumlahTiket?: true
    totalHarga?: true
    status?: true
    createdAt?: true
  }

  export type TbPemesananCountAggregateInputType = {
    id?: true
    userId?: true
    layananId?: true
    jumlahTiket?: true
    totalHarga?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TbPemesananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TbPemesanan to aggregate.
     */
    where?: TbPemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TbPemesanans to fetch.
     */
    orderBy?: TbPemesananOrderByWithRelationInput | TbPemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TbPemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TbPemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TbPemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TbPemesanans
    **/
    _count?: true | TbPemesananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TbPemesananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TbPemesananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TbPemesananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TbPemesananMaxAggregateInputType
  }

  export type GetTbPemesananAggregateType<T extends TbPemesananAggregateArgs> = {
        [P in keyof T & keyof AggregateTbPemesanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbPemesanan[P]>
      : GetScalarType<T[P], AggregateTbPemesanan[P]>
  }




  export type TbPemesananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TbPemesananWhereInput
    orderBy?: TbPemesananOrderByWithAggregationInput | TbPemesananOrderByWithAggregationInput[]
    by: TbPemesananScalarFieldEnum[] | TbPemesananScalarFieldEnum
    having?: TbPemesananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TbPemesananCountAggregateInputType | true
    _avg?: TbPemesananAvgAggregateInputType
    _sum?: TbPemesananSumAggregateInputType
    _min?: TbPemesananMinAggregateInputType
    _max?: TbPemesananMaxAggregateInputType
  }

  export type TbPemesananGroupByOutputType = {
    id: number
    userId: number
    layananId: number
    jumlahTiket: number
    totalHarga: number
    status: string
    createdAt: Date
    _count: TbPemesananCountAggregateOutputType | null
    _avg: TbPemesananAvgAggregateOutputType | null
    _sum: TbPemesananSumAggregateOutputType | null
    _min: TbPemesananMinAggregateOutputType | null
    _max: TbPemesananMaxAggregateOutputType | null
  }

  type GetTbPemesananGroupByPayload<T extends TbPemesananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TbPemesananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TbPemesananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TbPemesananGroupByOutputType[P]>
            : GetScalarType<T[P], TbPemesananGroupByOutputType[P]>
        }
      >
    >


  export type TbPemesananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    layananId?: boolean
    jumlahTiket?: boolean
    totalHarga?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | MasterUserDefaultArgs<ExtArgs>
    layanan?: boolean | MasterLayananDefaultArgs<ExtArgs>
    transaksi?: boolean | TbPemesanan$transaksiArgs<ExtArgs>
  }, ExtArgs["result"]["tbPemesanan"]>

  export type TbPemesananSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    layananId?: boolean
    jumlahTiket?: boolean
    totalHarga?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | MasterUserDefaultArgs<ExtArgs>
    layanan?: boolean | MasterLayananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbPemesanan"]>

  export type TbPemesananSelectScalar = {
    id?: boolean
    userId?: boolean
    layananId?: boolean
    jumlahTiket?: boolean
    totalHarga?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TbPemesananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MasterUserDefaultArgs<ExtArgs>
    layanan?: boolean | MasterLayananDefaultArgs<ExtArgs>
    transaksi?: boolean | TbPemesanan$transaksiArgs<ExtArgs>
  }
  export type TbPemesananIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MasterUserDefaultArgs<ExtArgs>
    layanan?: boolean | MasterLayananDefaultArgs<ExtArgs>
  }

  export type $TbPemesananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TbPemesanan"
    objects: {
      user: Prisma.$MasterUserPayload<ExtArgs>
      layanan: Prisma.$MasterLayananPayload<ExtArgs>
      transaksi: Prisma.$TbTransaksiPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      layananId: number
      jumlahTiket: number
      totalHarga: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["tbPemesanan"]>
    composites: {}
  }

  type TbPemesananGetPayload<S extends boolean | null | undefined | TbPemesananDefaultArgs> = $Result.GetResult<Prisma.$TbPemesananPayload, S>

  type TbPemesananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TbPemesananFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TbPemesananCountAggregateInputType | true
    }

  export interface TbPemesananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TbPemesanan'], meta: { name: 'TbPemesanan' } }
    /**
     * Find zero or one TbPemesanan that matches the filter.
     * @param {TbPemesananFindUniqueArgs} args - Arguments to find a TbPemesanan
     * @example
     * // Get one TbPemesanan
     * const tbPemesanan = await prisma.tbPemesanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TbPemesananFindUniqueArgs>(args: SelectSubset<T, TbPemesananFindUniqueArgs<ExtArgs>>): Prisma__TbPemesananClient<$Result.GetResult<Prisma.$TbPemesananPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TbPemesanan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TbPemesananFindUniqueOrThrowArgs} args - Arguments to find a TbPemesanan
     * @example
     * // Get one TbPemesanan
     * const tbPemesanan = await prisma.tbPemesanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TbPemesananFindUniqueOrThrowArgs>(args: SelectSubset<T, TbPemesananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TbPemesananClient<$Result.GetResult<Prisma.$TbPemesananPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TbPemesanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbPemesananFindFirstArgs} args - Arguments to find a TbPemesanan
     * @example
     * // Get one TbPemesanan
     * const tbPemesanan = await prisma.tbPemesanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TbPemesananFindFirstArgs>(args?: SelectSubset<T, TbPemesananFindFirstArgs<ExtArgs>>): Prisma__TbPemesananClient<$Result.GetResult<Prisma.$TbPemesananPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TbPemesanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbPemesananFindFirstOrThrowArgs} args - Arguments to find a TbPemesanan
     * @example
     * // Get one TbPemesanan
     * const tbPemesanan = await prisma.tbPemesanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TbPemesananFindFirstOrThrowArgs>(args?: SelectSubset<T, TbPemesananFindFirstOrThrowArgs<ExtArgs>>): Prisma__TbPemesananClient<$Result.GetResult<Prisma.$TbPemesananPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TbPemesanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbPemesananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TbPemesanans
     * const tbPemesanans = await prisma.tbPemesanan.findMany()
     * 
     * // Get first 10 TbPemesanans
     * const tbPemesanans = await prisma.tbPemesanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbPemesananWithIdOnly = await prisma.tbPemesanan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TbPemesananFindManyArgs>(args?: SelectSubset<T, TbPemesananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TbPemesananPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TbPemesanan.
     * @param {TbPemesananCreateArgs} args - Arguments to create a TbPemesanan.
     * @example
     * // Create one TbPemesanan
     * const TbPemesanan = await prisma.tbPemesanan.create({
     *   data: {
     *     // ... data to create a TbPemesanan
     *   }
     * })
     * 
     */
    create<T extends TbPemesananCreateArgs>(args: SelectSubset<T, TbPemesananCreateArgs<ExtArgs>>): Prisma__TbPemesananClient<$Result.GetResult<Prisma.$TbPemesananPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TbPemesanans.
     * @param {TbPemesananCreateManyArgs} args - Arguments to create many TbPemesanans.
     * @example
     * // Create many TbPemesanans
     * const tbPemesanan = await prisma.tbPemesanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TbPemesananCreateManyArgs>(args?: SelectSubset<T, TbPemesananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TbPemesanans and returns the data saved in the database.
     * @param {TbPemesananCreateManyAndReturnArgs} args - Arguments to create many TbPemesanans.
     * @example
     * // Create many TbPemesanans
     * const tbPemesanan = await prisma.tbPemesanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TbPemesanans and only return the `id`
     * const tbPemesananWithIdOnly = await prisma.tbPemesanan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TbPemesananCreateManyAndReturnArgs>(args?: SelectSubset<T, TbPemesananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TbPemesananPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TbPemesanan.
     * @param {TbPemesananDeleteArgs} args - Arguments to delete one TbPemesanan.
     * @example
     * // Delete one TbPemesanan
     * const TbPemesanan = await prisma.tbPemesanan.delete({
     *   where: {
     *     // ... filter to delete one TbPemesanan
     *   }
     * })
     * 
     */
    delete<T extends TbPemesananDeleteArgs>(args: SelectSubset<T, TbPemesananDeleteArgs<ExtArgs>>): Prisma__TbPemesananClient<$Result.GetResult<Prisma.$TbPemesananPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TbPemesanan.
     * @param {TbPemesananUpdateArgs} args - Arguments to update one TbPemesanan.
     * @example
     * // Update one TbPemesanan
     * const tbPemesanan = await prisma.tbPemesanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TbPemesananUpdateArgs>(args: SelectSubset<T, TbPemesananUpdateArgs<ExtArgs>>): Prisma__TbPemesananClient<$Result.GetResult<Prisma.$TbPemesananPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TbPemesanans.
     * @param {TbPemesananDeleteManyArgs} args - Arguments to filter TbPemesanans to delete.
     * @example
     * // Delete a few TbPemesanans
     * const { count } = await prisma.tbPemesanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TbPemesananDeleteManyArgs>(args?: SelectSubset<T, TbPemesananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TbPemesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbPemesananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TbPemesanans
     * const tbPemesanan = await prisma.tbPemesanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TbPemesananUpdateManyArgs>(args: SelectSubset<T, TbPemesananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TbPemesanan.
     * @param {TbPemesananUpsertArgs} args - Arguments to update or create a TbPemesanan.
     * @example
     * // Update or create a TbPemesanan
     * const tbPemesanan = await prisma.tbPemesanan.upsert({
     *   create: {
     *     // ... data to create a TbPemesanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TbPemesanan we want to update
     *   }
     * })
     */
    upsert<T extends TbPemesananUpsertArgs>(args: SelectSubset<T, TbPemesananUpsertArgs<ExtArgs>>): Prisma__TbPemesananClient<$Result.GetResult<Prisma.$TbPemesananPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TbPemesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbPemesananCountArgs} args - Arguments to filter TbPemesanans to count.
     * @example
     * // Count the number of TbPemesanans
     * const count = await prisma.tbPemesanan.count({
     *   where: {
     *     // ... the filter for the TbPemesanans we want to count
     *   }
     * })
    **/
    count<T extends TbPemesananCountArgs>(
      args?: Subset<T, TbPemesananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TbPemesananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TbPemesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbPemesananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TbPemesananAggregateArgs>(args: Subset<T, TbPemesananAggregateArgs>): Prisma.PrismaPromise<GetTbPemesananAggregateType<T>>

    /**
     * Group by TbPemesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbPemesananGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TbPemesananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TbPemesananGroupByArgs['orderBy'] }
        : { orderBy?: TbPemesananGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TbPemesananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbPemesananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TbPemesanan model
   */
  readonly fields: TbPemesananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TbPemesanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TbPemesananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends MasterUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterUserDefaultArgs<ExtArgs>>): Prisma__MasterUserClient<$Result.GetResult<Prisma.$MasterUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    layanan<T extends MasterLayananDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterLayananDefaultArgs<ExtArgs>>): Prisma__MasterLayananClient<$Result.GetResult<Prisma.$MasterLayananPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transaksi<T extends TbPemesanan$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, TbPemesanan$transaksiArgs<ExtArgs>>): Prisma__TbTransaksiClient<$Result.GetResult<Prisma.$TbTransaksiPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TbPemesanan model
   */ 
  interface TbPemesananFieldRefs {
    readonly id: FieldRef<"TbPemesanan", 'Int'>
    readonly userId: FieldRef<"TbPemesanan", 'Int'>
    readonly layananId: FieldRef<"TbPemesanan", 'Int'>
    readonly jumlahTiket: FieldRef<"TbPemesanan", 'Int'>
    readonly totalHarga: FieldRef<"TbPemesanan", 'Float'>
    readonly status: FieldRef<"TbPemesanan", 'String'>
    readonly createdAt: FieldRef<"TbPemesanan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TbPemesanan findUnique
   */
  export type TbPemesananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbPemesanan
     */
    select?: TbPemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbPemesananInclude<ExtArgs> | null
    /**
     * Filter, which TbPemesanan to fetch.
     */
    where: TbPemesananWhereUniqueInput
  }

  /**
   * TbPemesanan findUniqueOrThrow
   */
  export type TbPemesananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbPemesanan
     */
    select?: TbPemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbPemesananInclude<ExtArgs> | null
    /**
     * Filter, which TbPemesanan to fetch.
     */
    where: TbPemesananWhereUniqueInput
  }

  /**
   * TbPemesanan findFirst
   */
  export type TbPemesananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbPemesanan
     */
    select?: TbPemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbPemesananInclude<ExtArgs> | null
    /**
     * Filter, which TbPemesanan to fetch.
     */
    where?: TbPemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TbPemesanans to fetch.
     */
    orderBy?: TbPemesananOrderByWithRelationInput | TbPemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TbPemesanans.
     */
    cursor?: TbPemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TbPemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TbPemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TbPemesanans.
     */
    distinct?: TbPemesananScalarFieldEnum | TbPemesananScalarFieldEnum[]
  }

  /**
   * TbPemesanan findFirstOrThrow
   */
  export type TbPemesananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbPemesanan
     */
    select?: TbPemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbPemesananInclude<ExtArgs> | null
    /**
     * Filter, which TbPemesanan to fetch.
     */
    where?: TbPemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TbPemesanans to fetch.
     */
    orderBy?: TbPemesananOrderByWithRelationInput | TbPemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TbPemesanans.
     */
    cursor?: TbPemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TbPemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TbPemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TbPemesanans.
     */
    distinct?: TbPemesananScalarFieldEnum | TbPemesananScalarFieldEnum[]
  }

  /**
   * TbPemesanan findMany
   */
  export type TbPemesananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbPemesanan
     */
    select?: TbPemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbPemesananInclude<ExtArgs> | null
    /**
     * Filter, which TbPemesanans to fetch.
     */
    where?: TbPemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TbPemesanans to fetch.
     */
    orderBy?: TbPemesananOrderByWithRelationInput | TbPemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TbPemesanans.
     */
    cursor?: TbPemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TbPemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TbPemesanans.
     */
    skip?: number
    distinct?: TbPemesananScalarFieldEnum | TbPemesananScalarFieldEnum[]
  }

  /**
   * TbPemesanan create
   */
  export type TbPemesananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbPemesanan
     */
    select?: TbPemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbPemesananInclude<ExtArgs> | null
    /**
     * The data needed to create a TbPemesanan.
     */
    data: XOR<TbPemesananCreateInput, TbPemesananUncheckedCreateInput>
  }

  /**
   * TbPemesanan createMany
   */
  export type TbPemesananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TbPemesanans.
     */
    data: TbPemesananCreateManyInput | TbPemesananCreateManyInput[]
  }

  /**
   * TbPemesanan createManyAndReturn
   */
  export type TbPemesananCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbPemesanan
     */
    select?: TbPemesananSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TbPemesanans.
     */
    data: TbPemesananCreateManyInput | TbPemesananCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbPemesananIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TbPemesanan update
   */
  export type TbPemesananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbPemesanan
     */
    select?: TbPemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbPemesananInclude<ExtArgs> | null
    /**
     * The data needed to update a TbPemesanan.
     */
    data: XOR<TbPemesananUpdateInput, TbPemesananUncheckedUpdateInput>
    /**
     * Choose, which TbPemesanan to update.
     */
    where: TbPemesananWhereUniqueInput
  }

  /**
   * TbPemesanan updateMany
   */
  export type TbPemesananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TbPemesanans.
     */
    data: XOR<TbPemesananUpdateManyMutationInput, TbPemesananUncheckedUpdateManyInput>
    /**
     * Filter which TbPemesanans to update
     */
    where?: TbPemesananWhereInput
  }

  /**
   * TbPemesanan upsert
   */
  export type TbPemesananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbPemesanan
     */
    select?: TbPemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbPemesananInclude<ExtArgs> | null
    /**
     * The filter to search for the TbPemesanan to update in case it exists.
     */
    where: TbPemesananWhereUniqueInput
    /**
     * In case the TbPemesanan found by the `where` argument doesn't exist, create a new TbPemesanan with this data.
     */
    create: XOR<TbPemesananCreateInput, TbPemesananUncheckedCreateInput>
    /**
     * In case the TbPemesanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TbPemesananUpdateInput, TbPemesananUncheckedUpdateInput>
  }

  /**
   * TbPemesanan delete
   */
  export type TbPemesananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbPemesanan
     */
    select?: TbPemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbPemesananInclude<ExtArgs> | null
    /**
     * Filter which TbPemesanan to delete.
     */
    where: TbPemesananWhereUniqueInput
  }

  /**
   * TbPemesanan deleteMany
   */
  export type TbPemesananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TbPemesanans to delete
     */
    where?: TbPemesananWhereInput
  }

  /**
   * TbPemesanan.transaksi
   */
  export type TbPemesanan$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbTransaksi
     */
    select?: TbTransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbTransaksiInclude<ExtArgs> | null
    where?: TbTransaksiWhereInput
  }

  /**
   * TbPemesanan without action
   */
  export type TbPemesananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbPemesanan
     */
    select?: TbPemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbPemesananInclude<ExtArgs> | null
  }


  /**
   * Model TbTransaksi
   */

  export type AggregateTbTransaksi = {
    _count: TbTransaksiCountAggregateOutputType | null
    _avg: TbTransaksiAvgAggregateOutputType | null
    _sum: TbTransaksiSumAggregateOutputType | null
    _min: TbTransaksiMinAggregateOutputType | null
    _max: TbTransaksiMaxAggregateOutputType | null
  }

  export type TbTransaksiAvgAggregateOutputType = {
    id: number | null
    pemesananId: number | null
    userId: number | null
    jumlahBayar: number | null
  }

  export type TbTransaksiSumAggregateOutputType = {
    id: number | null
    pemesananId: number | null
    userId: number | null
    jumlahBayar: number | null
  }

  export type TbTransaksiMinAggregateOutputType = {
    id: number | null
    pemesananId: number | null
    userId: number | null
    jumlahBayar: number | null
    statusBayar: string | null
    invoicePdf: string | null
    createdAt: Date | null
  }

  export type TbTransaksiMaxAggregateOutputType = {
    id: number | null
    pemesananId: number | null
    userId: number | null
    jumlahBayar: number | null
    statusBayar: string | null
    invoicePdf: string | null
    createdAt: Date | null
  }

  export type TbTransaksiCountAggregateOutputType = {
    id: number
    pemesananId: number
    userId: number
    jumlahBayar: number
    statusBayar: number
    invoicePdf: number
    createdAt: number
    _all: number
  }


  export type TbTransaksiAvgAggregateInputType = {
    id?: true
    pemesananId?: true
    userId?: true
    jumlahBayar?: true
  }

  export type TbTransaksiSumAggregateInputType = {
    id?: true
    pemesananId?: true
    userId?: true
    jumlahBayar?: true
  }

  export type TbTransaksiMinAggregateInputType = {
    id?: true
    pemesananId?: true
    userId?: true
    jumlahBayar?: true
    statusBayar?: true
    invoicePdf?: true
    createdAt?: true
  }

  export type TbTransaksiMaxAggregateInputType = {
    id?: true
    pemesananId?: true
    userId?: true
    jumlahBayar?: true
    statusBayar?: true
    invoicePdf?: true
    createdAt?: true
  }

  export type TbTransaksiCountAggregateInputType = {
    id?: true
    pemesananId?: true
    userId?: true
    jumlahBayar?: true
    statusBayar?: true
    invoicePdf?: true
    createdAt?: true
    _all?: true
  }

  export type TbTransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TbTransaksi to aggregate.
     */
    where?: TbTransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TbTransaksis to fetch.
     */
    orderBy?: TbTransaksiOrderByWithRelationInput | TbTransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TbTransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TbTransaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TbTransaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TbTransaksis
    **/
    _count?: true | TbTransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TbTransaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TbTransaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TbTransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TbTransaksiMaxAggregateInputType
  }

  export type GetTbTransaksiAggregateType<T extends TbTransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateTbTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbTransaksi[P]>
      : GetScalarType<T[P], AggregateTbTransaksi[P]>
  }




  export type TbTransaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TbTransaksiWhereInput
    orderBy?: TbTransaksiOrderByWithAggregationInput | TbTransaksiOrderByWithAggregationInput[]
    by: TbTransaksiScalarFieldEnum[] | TbTransaksiScalarFieldEnum
    having?: TbTransaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TbTransaksiCountAggregateInputType | true
    _avg?: TbTransaksiAvgAggregateInputType
    _sum?: TbTransaksiSumAggregateInputType
    _min?: TbTransaksiMinAggregateInputType
    _max?: TbTransaksiMaxAggregateInputType
  }

  export type TbTransaksiGroupByOutputType = {
    id: number
    pemesananId: number
    userId: number
    jumlahBayar: number
    statusBayar: string
    invoicePdf: string | null
    createdAt: Date
    _count: TbTransaksiCountAggregateOutputType | null
    _avg: TbTransaksiAvgAggregateOutputType | null
    _sum: TbTransaksiSumAggregateOutputType | null
    _min: TbTransaksiMinAggregateOutputType | null
    _max: TbTransaksiMaxAggregateOutputType | null
  }

  type GetTbTransaksiGroupByPayload<T extends TbTransaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TbTransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TbTransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TbTransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], TbTransaksiGroupByOutputType[P]>
        }
      >
    >


  export type TbTransaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pemesananId?: boolean
    userId?: boolean
    jumlahBayar?: boolean
    statusBayar?: boolean
    invoicePdf?: boolean
    createdAt?: boolean
    user?: boolean | MasterUserDefaultArgs<ExtArgs>
    pemesanan?: boolean | TbPemesananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbTransaksi"]>

  export type TbTransaksiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pemesananId?: boolean
    userId?: boolean
    jumlahBayar?: boolean
    statusBayar?: boolean
    invoicePdf?: boolean
    createdAt?: boolean
    user?: boolean | MasterUserDefaultArgs<ExtArgs>
    pemesanan?: boolean | TbPemesananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbTransaksi"]>

  export type TbTransaksiSelectScalar = {
    id?: boolean
    pemesananId?: boolean
    userId?: boolean
    jumlahBayar?: boolean
    statusBayar?: boolean
    invoicePdf?: boolean
    createdAt?: boolean
  }

  export type TbTransaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MasterUserDefaultArgs<ExtArgs>
    pemesanan?: boolean | TbPemesananDefaultArgs<ExtArgs>
  }
  export type TbTransaksiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MasterUserDefaultArgs<ExtArgs>
    pemesanan?: boolean | TbPemesananDefaultArgs<ExtArgs>
  }

  export type $TbTransaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TbTransaksi"
    objects: {
      user: Prisma.$MasterUserPayload<ExtArgs>
      pemesanan: Prisma.$TbPemesananPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pemesananId: number
      userId: number
      jumlahBayar: number
      statusBayar: string
      invoicePdf: string | null
      createdAt: Date
    }, ExtArgs["result"]["tbTransaksi"]>
    composites: {}
  }

  type TbTransaksiGetPayload<S extends boolean | null | undefined | TbTransaksiDefaultArgs> = $Result.GetResult<Prisma.$TbTransaksiPayload, S>

  type TbTransaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TbTransaksiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TbTransaksiCountAggregateInputType | true
    }

  export interface TbTransaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TbTransaksi'], meta: { name: 'TbTransaksi' } }
    /**
     * Find zero or one TbTransaksi that matches the filter.
     * @param {TbTransaksiFindUniqueArgs} args - Arguments to find a TbTransaksi
     * @example
     * // Get one TbTransaksi
     * const tbTransaksi = await prisma.tbTransaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TbTransaksiFindUniqueArgs>(args: SelectSubset<T, TbTransaksiFindUniqueArgs<ExtArgs>>): Prisma__TbTransaksiClient<$Result.GetResult<Prisma.$TbTransaksiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TbTransaksi that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TbTransaksiFindUniqueOrThrowArgs} args - Arguments to find a TbTransaksi
     * @example
     * // Get one TbTransaksi
     * const tbTransaksi = await prisma.tbTransaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TbTransaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, TbTransaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TbTransaksiClient<$Result.GetResult<Prisma.$TbTransaksiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TbTransaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbTransaksiFindFirstArgs} args - Arguments to find a TbTransaksi
     * @example
     * // Get one TbTransaksi
     * const tbTransaksi = await prisma.tbTransaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TbTransaksiFindFirstArgs>(args?: SelectSubset<T, TbTransaksiFindFirstArgs<ExtArgs>>): Prisma__TbTransaksiClient<$Result.GetResult<Prisma.$TbTransaksiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TbTransaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbTransaksiFindFirstOrThrowArgs} args - Arguments to find a TbTransaksi
     * @example
     * // Get one TbTransaksi
     * const tbTransaksi = await prisma.tbTransaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TbTransaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, TbTransaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__TbTransaksiClient<$Result.GetResult<Prisma.$TbTransaksiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TbTransaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbTransaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TbTransaksis
     * const tbTransaksis = await prisma.tbTransaksi.findMany()
     * 
     * // Get first 10 TbTransaksis
     * const tbTransaksis = await prisma.tbTransaksi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbTransaksiWithIdOnly = await prisma.tbTransaksi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TbTransaksiFindManyArgs>(args?: SelectSubset<T, TbTransaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TbTransaksiPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TbTransaksi.
     * @param {TbTransaksiCreateArgs} args - Arguments to create a TbTransaksi.
     * @example
     * // Create one TbTransaksi
     * const TbTransaksi = await prisma.tbTransaksi.create({
     *   data: {
     *     // ... data to create a TbTransaksi
     *   }
     * })
     * 
     */
    create<T extends TbTransaksiCreateArgs>(args: SelectSubset<T, TbTransaksiCreateArgs<ExtArgs>>): Prisma__TbTransaksiClient<$Result.GetResult<Prisma.$TbTransaksiPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TbTransaksis.
     * @param {TbTransaksiCreateManyArgs} args - Arguments to create many TbTransaksis.
     * @example
     * // Create many TbTransaksis
     * const tbTransaksi = await prisma.tbTransaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TbTransaksiCreateManyArgs>(args?: SelectSubset<T, TbTransaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TbTransaksis and returns the data saved in the database.
     * @param {TbTransaksiCreateManyAndReturnArgs} args - Arguments to create many TbTransaksis.
     * @example
     * // Create many TbTransaksis
     * const tbTransaksi = await prisma.tbTransaksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TbTransaksis and only return the `id`
     * const tbTransaksiWithIdOnly = await prisma.tbTransaksi.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TbTransaksiCreateManyAndReturnArgs>(args?: SelectSubset<T, TbTransaksiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TbTransaksiPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TbTransaksi.
     * @param {TbTransaksiDeleteArgs} args - Arguments to delete one TbTransaksi.
     * @example
     * // Delete one TbTransaksi
     * const TbTransaksi = await prisma.tbTransaksi.delete({
     *   where: {
     *     // ... filter to delete one TbTransaksi
     *   }
     * })
     * 
     */
    delete<T extends TbTransaksiDeleteArgs>(args: SelectSubset<T, TbTransaksiDeleteArgs<ExtArgs>>): Prisma__TbTransaksiClient<$Result.GetResult<Prisma.$TbTransaksiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TbTransaksi.
     * @param {TbTransaksiUpdateArgs} args - Arguments to update one TbTransaksi.
     * @example
     * // Update one TbTransaksi
     * const tbTransaksi = await prisma.tbTransaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TbTransaksiUpdateArgs>(args: SelectSubset<T, TbTransaksiUpdateArgs<ExtArgs>>): Prisma__TbTransaksiClient<$Result.GetResult<Prisma.$TbTransaksiPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TbTransaksis.
     * @param {TbTransaksiDeleteManyArgs} args - Arguments to filter TbTransaksis to delete.
     * @example
     * // Delete a few TbTransaksis
     * const { count } = await prisma.tbTransaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TbTransaksiDeleteManyArgs>(args?: SelectSubset<T, TbTransaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TbTransaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbTransaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TbTransaksis
     * const tbTransaksi = await prisma.tbTransaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TbTransaksiUpdateManyArgs>(args: SelectSubset<T, TbTransaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TbTransaksi.
     * @param {TbTransaksiUpsertArgs} args - Arguments to update or create a TbTransaksi.
     * @example
     * // Update or create a TbTransaksi
     * const tbTransaksi = await prisma.tbTransaksi.upsert({
     *   create: {
     *     // ... data to create a TbTransaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TbTransaksi we want to update
     *   }
     * })
     */
    upsert<T extends TbTransaksiUpsertArgs>(args: SelectSubset<T, TbTransaksiUpsertArgs<ExtArgs>>): Prisma__TbTransaksiClient<$Result.GetResult<Prisma.$TbTransaksiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TbTransaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbTransaksiCountArgs} args - Arguments to filter TbTransaksis to count.
     * @example
     * // Count the number of TbTransaksis
     * const count = await prisma.tbTransaksi.count({
     *   where: {
     *     // ... the filter for the TbTransaksis we want to count
     *   }
     * })
    **/
    count<T extends TbTransaksiCountArgs>(
      args?: Subset<T, TbTransaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TbTransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TbTransaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbTransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TbTransaksiAggregateArgs>(args: Subset<T, TbTransaksiAggregateArgs>): Prisma.PrismaPromise<GetTbTransaksiAggregateType<T>>

    /**
     * Group by TbTransaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbTransaksiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TbTransaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TbTransaksiGroupByArgs['orderBy'] }
        : { orderBy?: TbTransaksiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TbTransaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TbTransaksi model
   */
  readonly fields: TbTransaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TbTransaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TbTransaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends MasterUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterUserDefaultArgs<ExtArgs>>): Prisma__MasterUserClient<$Result.GetResult<Prisma.$MasterUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pemesanan<T extends TbPemesananDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TbPemesananDefaultArgs<ExtArgs>>): Prisma__TbPemesananClient<$Result.GetResult<Prisma.$TbPemesananPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TbTransaksi model
   */ 
  interface TbTransaksiFieldRefs {
    readonly id: FieldRef<"TbTransaksi", 'Int'>
    readonly pemesananId: FieldRef<"TbTransaksi", 'Int'>
    readonly userId: FieldRef<"TbTransaksi", 'Int'>
    readonly jumlahBayar: FieldRef<"TbTransaksi", 'Float'>
    readonly statusBayar: FieldRef<"TbTransaksi", 'String'>
    readonly invoicePdf: FieldRef<"TbTransaksi", 'String'>
    readonly createdAt: FieldRef<"TbTransaksi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TbTransaksi findUnique
   */
  export type TbTransaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbTransaksi
     */
    select?: TbTransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which TbTransaksi to fetch.
     */
    where: TbTransaksiWhereUniqueInput
  }

  /**
   * TbTransaksi findUniqueOrThrow
   */
  export type TbTransaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbTransaksi
     */
    select?: TbTransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which TbTransaksi to fetch.
     */
    where: TbTransaksiWhereUniqueInput
  }

  /**
   * TbTransaksi findFirst
   */
  export type TbTransaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbTransaksi
     */
    select?: TbTransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which TbTransaksi to fetch.
     */
    where?: TbTransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TbTransaksis to fetch.
     */
    orderBy?: TbTransaksiOrderByWithRelationInput | TbTransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TbTransaksis.
     */
    cursor?: TbTransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TbTransaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TbTransaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TbTransaksis.
     */
    distinct?: TbTransaksiScalarFieldEnum | TbTransaksiScalarFieldEnum[]
  }

  /**
   * TbTransaksi findFirstOrThrow
   */
  export type TbTransaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbTransaksi
     */
    select?: TbTransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which TbTransaksi to fetch.
     */
    where?: TbTransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TbTransaksis to fetch.
     */
    orderBy?: TbTransaksiOrderByWithRelationInput | TbTransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TbTransaksis.
     */
    cursor?: TbTransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TbTransaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TbTransaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TbTransaksis.
     */
    distinct?: TbTransaksiScalarFieldEnum | TbTransaksiScalarFieldEnum[]
  }

  /**
   * TbTransaksi findMany
   */
  export type TbTransaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbTransaksi
     */
    select?: TbTransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which TbTransaksis to fetch.
     */
    where?: TbTransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TbTransaksis to fetch.
     */
    orderBy?: TbTransaksiOrderByWithRelationInput | TbTransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TbTransaksis.
     */
    cursor?: TbTransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TbTransaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TbTransaksis.
     */
    skip?: number
    distinct?: TbTransaksiScalarFieldEnum | TbTransaksiScalarFieldEnum[]
  }

  /**
   * TbTransaksi create
   */
  export type TbTransaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbTransaksi
     */
    select?: TbTransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbTransaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a TbTransaksi.
     */
    data: XOR<TbTransaksiCreateInput, TbTransaksiUncheckedCreateInput>
  }

  /**
   * TbTransaksi createMany
   */
  export type TbTransaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TbTransaksis.
     */
    data: TbTransaksiCreateManyInput | TbTransaksiCreateManyInput[]
  }

  /**
   * TbTransaksi createManyAndReturn
   */
  export type TbTransaksiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbTransaksi
     */
    select?: TbTransaksiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TbTransaksis.
     */
    data: TbTransaksiCreateManyInput | TbTransaksiCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbTransaksiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TbTransaksi update
   */
  export type TbTransaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbTransaksi
     */
    select?: TbTransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbTransaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a TbTransaksi.
     */
    data: XOR<TbTransaksiUpdateInput, TbTransaksiUncheckedUpdateInput>
    /**
     * Choose, which TbTransaksi to update.
     */
    where: TbTransaksiWhereUniqueInput
  }

  /**
   * TbTransaksi updateMany
   */
  export type TbTransaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TbTransaksis.
     */
    data: XOR<TbTransaksiUpdateManyMutationInput, TbTransaksiUncheckedUpdateManyInput>
    /**
     * Filter which TbTransaksis to update
     */
    where?: TbTransaksiWhereInput
  }

  /**
   * TbTransaksi upsert
   */
  export type TbTransaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbTransaksi
     */
    select?: TbTransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbTransaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the TbTransaksi to update in case it exists.
     */
    where: TbTransaksiWhereUniqueInput
    /**
     * In case the TbTransaksi found by the `where` argument doesn't exist, create a new TbTransaksi with this data.
     */
    create: XOR<TbTransaksiCreateInput, TbTransaksiUncheckedCreateInput>
    /**
     * In case the TbTransaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TbTransaksiUpdateInput, TbTransaksiUncheckedUpdateInput>
  }

  /**
   * TbTransaksi delete
   */
  export type TbTransaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbTransaksi
     */
    select?: TbTransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbTransaksiInclude<ExtArgs> | null
    /**
     * Filter which TbTransaksi to delete.
     */
    where: TbTransaksiWhereUniqueInput
  }

  /**
   * TbTransaksi deleteMany
   */
  export type TbTransaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TbTransaksis to delete
     */
    where?: TbTransaksiWhereInput
  }

  /**
   * TbTransaksi without action
   */
  export type TbTransaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbTransaksi
     */
    select?: TbTransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TbTransaksiInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MasterUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type MasterUserScalarFieldEnum = (typeof MasterUserScalarFieldEnum)[keyof typeof MasterUserScalarFieldEnum]


  export const MasterLayananScalarFieldEnum: {
    id: 'id',
    namaLayanan: 'namaLayanan',
    waktuBerangkat: 'waktuBerangkat',
    rute: 'rute',
    biaya: 'biaya',
    stokKursi: 'stokKursi'
  };

  export type MasterLayananScalarFieldEnum = (typeof MasterLayananScalarFieldEnum)[keyof typeof MasterLayananScalarFieldEnum]


  export const TbKendaraanScalarFieldEnum: {
    id: 'id',
    nomor: 'nomor',
    jenis: 'jenis',
    kapasitas: 'kapasitas',
    status: 'status'
  };

  export type TbKendaraanScalarFieldEnum = (typeof TbKendaraanScalarFieldEnum)[keyof typeof TbKendaraanScalarFieldEnum]


  export const TbPemesananScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    layananId: 'layananId',
    jumlahTiket: 'jumlahTiket',
    totalHarga: 'totalHarga',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TbPemesananScalarFieldEnum = (typeof TbPemesananScalarFieldEnum)[keyof typeof TbPemesananScalarFieldEnum]


  export const TbTransaksiScalarFieldEnum: {
    id: 'id',
    pemesananId: 'pemesananId',
    userId: 'userId',
    jumlahBayar: 'jumlahBayar',
    statusBayar: 'statusBayar',
    invoicePdf: 'invoicePdf',
    createdAt: 'createdAt'
  };

  export type TbTransaksiScalarFieldEnum = (typeof TbTransaksiScalarFieldEnum)[keyof typeof TbTransaksiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type MasterUserWhereInput = {
    AND?: MasterUserWhereInput | MasterUserWhereInput[]
    OR?: MasterUserWhereInput[]
    NOT?: MasterUserWhereInput | MasterUserWhereInput[]
    id?: IntFilter<"MasterUser"> | number
    username?: StringFilter<"MasterUser"> | string
    password?: StringFilter<"MasterUser"> | string
    role?: StringFilter<"MasterUser"> | string
    createdAt?: DateTimeFilter<"MasterUser"> | Date | string
    pemesanan?: TbPemesananListRelationFilter
    transaksi?: TbTransaksiListRelationFilter
  }

  export type MasterUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    pemesanan?: TbPemesananOrderByRelationAggregateInput
    transaksi?: TbTransaksiOrderByRelationAggregateInput
  }

  export type MasterUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: MasterUserWhereInput | MasterUserWhereInput[]
    OR?: MasterUserWhereInput[]
    NOT?: MasterUserWhereInput | MasterUserWhereInput[]
    password?: StringFilter<"MasterUser"> | string
    role?: StringFilter<"MasterUser"> | string
    createdAt?: DateTimeFilter<"MasterUser"> | Date | string
    pemesanan?: TbPemesananListRelationFilter
    transaksi?: TbTransaksiListRelationFilter
  }, "id" | "username">

  export type MasterUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: MasterUserCountOrderByAggregateInput
    _avg?: MasterUserAvgOrderByAggregateInput
    _max?: MasterUserMaxOrderByAggregateInput
    _min?: MasterUserMinOrderByAggregateInput
    _sum?: MasterUserSumOrderByAggregateInput
  }

  export type MasterUserScalarWhereWithAggregatesInput = {
    AND?: MasterUserScalarWhereWithAggregatesInput | MasterUserScalarWhereWithAggregatesInput[]
    OR?: MasterUserScalarWhereWithAggregatesInput[]
    NOT?: MasterUserScalarWhereWithAggregatesInput | MasterUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MasterUser"> | number
    username?: StringWithAggregatesFilter<"MasterUser"> | string
    password?: StringWithAggregatesFilter<"MasterUser"> | string
    role?: StringWithAggregatesFilter<"MasterUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MasterUser"> | Date | string
  }

  export type MasterLayananWhereInput = {
    AND?: MasterLayananWhereInput | MasterLayananWhereInput[]
    OR?: MasterLayananWhereInput[]
    NOT?: MasterLayananWhereInput | MasterLayananWhereInput[]
    id?: IntFilter<"MasterLayanan"> | number
    namaLayanan?: StringFilter<"MasterLayanan"> | string
    waktuBerangkat?: DateTimeFilter<"MasterLayanan"> | Date | string
    rute?: StringFilter<"MasterLayanan"> | string
    biaya?: FloatFilter<"MasterLayanan"> | number
    stokKursi?: IntFilter<"MasterLayanan"> | number
    pemesanan?: TbPemesananListRelationFilter
  }

  export type MasterLayananOrderByWithRelationInput = {
    id?: SortOrder
    namaLayanan?: SortOrder
    waktuBerangkat?: SortOrder
    rute?: SortOrder
    biaya?: SortOrder
    stokKursi?: SortOrder
    pemesanan?: TbPemesananOrderByRelationAggregateInput
  }

  export type MasterLayananWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MasterLayananWhereInput | MasterLayananWhereInput[]
    OR?: MasterLayananWhereInput[]
    NOT?: MasterLayananWhereInput | MasterLayananWhereInput[]
    namaLayanan?: StringFilter<"MasterLayanan"> | string
    waktuBerangkat?: DateTimeFilter<"MasterLayanan"> | Date | string
    rute?: StringFilter<"MasterLayanan"> | string
    biaya?: FloatFilter<"MasterLayanan"> | number
    stokKursi?: IntFilter<"MasterLayanan"> | number
    pemesanan?: TbPemesananListRelationFilter
  }, "id">

  export type MasterLayananOrderByWithAggregationInput = {
    id?: SortOrder
    namaLayanan?: SortOrder
    waktuBerangkat?: SortOrder
    rute?: SortOrder
    biaya?: SortOrder
    stokKursi?: SortOrder
    _count?: MasterLayananCountOrderByAggregateInput
    _avg?: MasterLayananAvgOrderByAggregateInput
    _max?: MasterLayananMaxOrderByAggregateInput
    _min?: MasterLayananMinOrderByAggregateInput
    _sum?: MasterLayananSumOrderByAggregateInput
  }

  export type MasterLayananScalarWhereWithAggregatesInput = {
    AND?: MasterLayananScalarWhereWithAggregatesInput | MasterLayananScalarWhereWithAggregatesInput[]
    OR?: MasterLayananScalarWhereWithAggregatesInput[]
    NOT?: MasterLayananScalarWhereWithAggregatesInput | MasterLayananScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MasterLayanan"> | number
    namaLayanan?: StringWithAggregatesFilter<"MasterLayanan"> | string
    waktuBerangkat?: DateTimeWithAggregatesFilter<"MasterLayanan"> | Date | string
    rute?: StringWithAggregatesFilter<"MasterLayanan"> | string
    biaya?: FloatWithAggregatesFilter<"MasterLayanan"> | number
    stokKursi?: IntWithAggregatesFilter<"MasterLayanan"> | number
  }

  export type TbKendaraanWhereInput = {
    AND?: TbKendaraanWhereInput | TbKendaraanWhereInput[]
    OR?: TbKendaraanWhereInput[]
    NOT?: TbKendaraanWhereInput | TbKendaraanWhereInput[]
    id?: IntFilter<"TbKendaraan"> | number
    nomor?: StringFilter<"TbKendaraan"> | string
    jenis?: StringFilter<"TbKendaraan"> | string
    kapasitas?: IntFilter<"TbKendaraan"> | number
    status?: StringFilter<"TbKendaraan"> | string
  }

  export type TbKendaraanOrderByWithRelationInput = {
    id?: SortOrder
    nomor?: SortOrder
    jenis?: SortOrder
    kapasitas?: SortOrder
    status?: SortOrder
  }

  export type TbKendaraanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nomor?: string
    AND?: TbKendaraanWhereInput | TbKendaraanWhereInput[]
    OR?: TbKendaraanWhereInput[]
    NOT?: TbKendaraanWhereInput | TbKendaraanWhereInput[]
    jenis?: StringFilter<"TbKendaraan"> | string
    kapasitas?: IntFilter<"TbKendaraan"> | number
    status?: StringFilter<"TbKendaraan"> | string
  }, "id" | "nomor">

  export type TbKendaraanOrderByWithAggregationInput = {
    id?: SortOrder
    nomor?: SortOrder
    jenis?: SortOrder
    kapasitas?: SortOrder
    status?: SortOrder
    _count?: TbKendaraanCountOrderByAggregateInput
    _avg?: TbKendaraanAvgOrderByAggregateInput
    _max?: TbKendaraanMaxOrderByAggregateInput
    _min?: TbKendaraanMinOrderByAggregateInput
    _sum?: TbKendaraanSumOrderByAggregateInput
  }

  export type TbKendaraanScalarWhereWithAggregatesInput = {
    AND?: TbKendaraanScalarWhereWithAggregatesInput | TbKendaraanScalarWhereWithAggregatesInput[]
    OR?: TbKendaraanScalarWhereWithAggregatesInput[]
    NOT?: TbKendaraanScalarWhereWithAggregatesInput | TbKendaraanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TbKendaraan"> | number
    nomor?: StringWithAggregatesFilter<"TbKendaraan"> | string
    jenis?: StringWithAggregatesFilter<"TbKendaraan"> | string
    kapasitas?: IntWithAggregatesFilter<"TbKendaraan"> | number
    status?: StringWithAggregatesFilter<"TbKendaraan"> | string
  }

  export type TbPemesananWhereInput = {
    AND?: TbPemesananWhereInput | TbPemesananWhereInput[]
    OR?: TbPemesananWhereInput[]
    NOT?: TbPemesananWhereInput | TbPemesananWhereInput[]
    id?: IntFilter<"TbPemesanan"> | number
    userId?: IntFilter<"TbPemesanan"> | number
    layananId?: IntFilter<"TbPemesanan"> | number
    jumlahTiket?: IntFilter<"TbPemesanan"> | number
    totalHarga?: FloatFilter<"TbPemesanan"> | number
    status?: StringFilter<"TbPemesanan"> | string
    createdAt?: DateTimeFilter<"TbPemesanan"> | Date | string
    user?: XOR<MasterUserRelationFilter, MasterUserWhereInput>
    layanan?: XOR<MasterLayananRelationFilter, MasterLayananWhereInput>
    transaksi?: XOR<TbTransaksiNullableRelationFilter, TbTransaksiWhereInput> | null
  }

  export type TbPemesananOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    layananId?: SortOrder
    jumlahTiket?: SortOrder
    totalHarga?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: MasterUserOrderByWithRelationInput
    layanan?: MasterLayananOrderByWithRelationInput
    transaksi?: TbTransaksiOrderByWithRelationInput
  }

  export type TbPemesananWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TbPemesananWhereInput | TbPemesananWhereInput[]
    OR?: TbPemesananWhereInput[]
    NOT?: TbPemesananWhereInput | TbPemesananWhereInput[]
    userId?: IntFilter<"TbPemesanan"> | number
    layananId?: IntFilter<"TbPemesanan"> | number
    jumlahTiket?: IntFilter<"TbPemesanan"> | number
    totalHarga?: FloatFilter<"TbPemesanan"> | number
    status?: StringFilter<"TbPemesanan"> | string
    createdAt?: DateTimeFilter<"TbPemesanan"> | Date | string
    user?: XOR<MasterUserRelationFilter, MasterUserWhereInput>
    layanan?: XOR<MasterLayananRelationFilter, MasterLayananWhereInput>
    transaksi?: XOR<TbTransaksiNullableRelationFilter, TbTransaksiWhereInput> | null
  }, "id">

  export type TbPemesananOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    layananId?: SortOrder
    jumlahTiket?: SortOrder
    totalHarga?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TbPemesananCountOrderByAggregateInput
    _avg?: TbPemesananAvgOrderByAggregateInput
    _max?: TbPemesananMaxOrderByAggregateInput
    _min?: TbPemesananMinOrderByAggregateInput
    _sum?: TbPemesananSumOrderByAggregateInput
  }

  export type TbPemesananScalarWhereWithAggregatesInput = {
    AND?: TbPemesananScalarWhereWithAggregatesInput | TbPemesananScalarWhereWithAggregatesInput[]
    OR?: TbPemesananScalarWhereWithAggregatesInput[]
    NOT?: TbPemesananScalarWhereWithAggregatesInput | TbPemesananScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TbPemesanan"> | number
    userId?: IntWithAggregatesFilter<"TbPemesanan"> | number
    layananId?: IntWithAggregatesFilter<"TbPemesanan"> | number
    jumlahTiket?: IntWithAggregatesFilter<"TbPemesanan"> | number
    totalHarga?: FloatWithAggregatesFilter<"TbPemesanan"> | number
    status?: StringWithAggregatesFilter<"TbPemesanan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TbPemesanan"> | Date | string
  }

  export type TbTransaksiWhereInput = {
    AND?: TbTransaksiWhereInput | TbTransaksiWhereInput[]
    OR?: TbTransaksiWhereInput[]
    NOT?: TbTransaksiWhereInput | TbTransaksiWhereInput[]
    id?: IntFilter<"TbTransaksi"> | number
    pemesananId?: IntFilter<"TbTransaksi"> | number
    userId?: IntFilter<"TbTransaksi"> | number
    jumlahBayar?: FloatFilter<"TbTransaksi"> | number
    statusBayar?: StringFilter<"TbTransaksi"> | string
    invoicePdf?: StringNullableFilter<"TbTransaksi"> | string | null
    createdAt?: DateTimeFilter<"TbTransaksi"> | Date | string
    user?: XOR<MasterUserRelationFilter, MasterUserWhereInput>
    pemesanan?: XOR<TbPemesananRelationFilter, TbPemesananWhereInput>
  }

  export type TbTransaksiOrderByWithRelationInput = {
    id?: SortOrder
    pemesananId?: SortOrder
    userId?: SortOrder
    jumlahBayar?: SortOrder
    statusBayar?: SortOrder
    invoicePdf?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: MasterUserOrderByWithRelationInput
    pemesanan?: TbPemesananOrderByWithRelationInput
  }

  export type TbTransaksiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pemesananId?: number
    AND?: TbTransaksiWhereInput | TbTransaksiWhereInput[]
    OR?: TbTransaksiWhereInput[]
    NOT?: TbTransaksiWhereInput | TbTransaksiWhereInput[]
    userId?: IntFilter<"TbTransaksi"> | number
    jumlahBayar?: FloatFilter<"TbTransaksi"> | number
    statusBayar?: StringFilter<"TbTransaksi"> | string
    invoicePdf?: StringNullableFilter<"TbTransaksi"> | string | null
    createdAt?: DateTimeFilter<"TbTransaksi"> | Date | string
    user?: XOR<MasterUserRelationFilter, MasterUserWhereInput>
    pemesanan?: XOR<TbPemesananRelationFilter, TbPemesananWhereInput>
  }, "id" | "pemesananId">

  export type TbTransaksiOrderByWithAggregationInput = {
    id?: SortOrder
    pemesananId?: SortOrder
    userId?: SortOrder
    jumlahBayar?: SortOrder
    statusBayar?: SortOrder
    invoicePdf?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TbTransaksiCountOrderByAggregateInput
    _avg?: TbTransaksiAvgOrderByAggregateInput
    _max?: TbTransaksiMaxOrderByAggregateInput
    _min?: TbTransaksiMinOrderByAggregateInput
    _sum?: TbTransaksiSumOrderByAggregateInput
  }

  export type TbTransaksiScalarWhereWithAggregatesInput = {
    AND?: TbTransaksiScalarWhereWithAggregatesInput | TbTransaksiScalarWhereWithAggregatesInput[]
    OR?: TbTransaksiScalarWhereWithAggregatesInput[]
    NOT?: TbTransaksiScalarWhereWithAggregatesInput | TbTransaksiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TbTransaksi"> | number
    pemesananId?: IntWithAggregatesFilter<"TbTransaksi"> | number
    userId?: IntWithAggregatesFilter<"TbTransaksi"> | number
    jumlahBayar?: FloatWithAggregatesFilter<"TbTransaksi"> | number
    statusBayar?: StringWithAggregatesFilter<"TbTransaksi"> | string
    invoicePdf?: StringNullableWithAggregatesFilter<"TbTransaksi"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TbTransaksi"> | Date | string
  }

  export type MasterUserCreateInput = {
    username: string
    password: string
    role: string
    createdAt?: Date | string
    pemesanan?: TbPemesananCreateNestedManyWithoutUserInput
    transaksi?: TbTransaksiCreateNestedManyWithoutUserInput
  }

  export type MasterUserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role: string
    createdAt?: Date | string
    pemesanan?: TbPemesananUncheckedCreateNestedManyWithoutUserInput
    transaksi?: TbTransaksiUncheckedCreateNestedManyWithoutUserInput
  }

  export type MasterUserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: TbPemesananUpdateManyWithoutUserNestedInput
    transaksi?: TbTransaksiUpdateManyWithoutUserNestedInput
  }

  export type MasterUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: TbPemesananUncheckedUpdateManyWithoutUserNestedInput
    transaksi?: TbTransaksiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MasterUserCreateManyInput = {
    id?: number
    username: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type MasterUserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterLayananCreateInput = {
    namaLayanan: string
    waktuBerangkat: Date | string
    rute: string
    biaya: number
    stokKursi: number
    pemesanan?: TbPemesananCreateNestedManyWithoutLayananInput
  }

  export type MasterLayananUncheckedCreateInput = {
    id?: number
    namaLayanan: string
    waktuBerangkat: Date | string
    rute: string
    biaya: number
    stokKursi: number
    pemesanan?: TbPemesananUncheckedCreateNestedManyWithoutLayananInput
  }

  export type MasterLayananUpdateInput = {
    namaLayanan?: StringFieldUpdateOperationsInput | string
    waktuBerangkat?: DateTimeFieldUpdateOperationsInput | Date | string
    rute?: StringFieldUpdateOperationsInput | string
    biaya?: FloatFieldUpdateOperationsInput | number
    stokKursi?: IntFieldUpdateOperationsInput | number
    pemesanan?: TbPemesananUpdateManyWithoutLayananNestedInput
  }

  export type MasterLayananUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaLayanan?: StringFieldUpdateOperationsInput | string
    waktuBerangkat?: DateTimeFieldUpdateOperationsInput | Date | string
    rute?: StringFieldUpdateOperationsInput | string
    biaya?: FloatFieldUpdateOperationsInput | number
    stokKursi?: IntFieldUpdateOperationsInput | number
    pemesanan?: TbPemesananUncheckedUpdateManyWithoutLayananNestedInput
  }

  export type MasterLayananCreateManyInput = {
    id?: number
    namaLayanan: string
    waktuBerangkat: Date | string
    rute: string
    biaya: number
    stokKursi: number
  }

  export type MasterLayananUpdateManyMutationInput = {
    namaLayanan?: StringFieldUpdateOperationsInput | string
    waktuBerangkat?: DateTimeFieldUpdateOperationsInput | Date | string
    rute?: StringFieldUpdateOperationsInput | string
    biaya?: FloatFieldUpdateOperationsInput | number
    stokKursi?: IntFieldUpdateOperationsInput | number
  }

  export type MasterLayananUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaLayanan?: StringFieldUpdateOperationsInput | string
    waktuBerangkat?: DateTimeFieldUpdateOperationsInput | Date | string
    rute?: StringFieldUpdateOperationsInput | string
    biaya?: FloatFieldUpdateOperationsInput | number
    stokKursi?: IntFieldUpdateOperationsInput | number
  }

  export type TbKendaraanCreateInput = {
    nomor: string
    jenis: string
    kapasitas: number
    status: string
  }

  export type TbKendaraanUncheckedCreateInput = {
    id?: number
    nomor: string
    jenis: string
    kapasitas: number
    status: string
  }

  export type TbKendaraanUpdateInput = {
    nomor?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    kapasitas?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TbKendaraanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomor?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    kapasitas?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TbKendaraanCreateManyInput = {
    id?: number
    nomor: string
    jenis: string
    kapasitas: number
    status: string
  }

  export type TbKendaraanUpdateManyMutationInput = {
    nomor?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    kapasitas?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TbKendaraanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomor?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    kapasitas?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TbPemesananCreateInput = {
    jumlahTiket: number
    totalHarga: number
    status: string
    createdAt?: Date | string
    user: MasterUserCreateNestedOneWithoutPemesananInput
    layanan: MasterLayananCreateNestedOneWithoutPemesananInput
    transaksi?: TbTransaksiCreateNestedOneWithoutPemesananInput
  }

  export type TbPemesananUncheckedCreateInput = {
    id?: number
    userId: number
    layananId: number
    jumlahTiket: number
    totalHarga: number
    status: string
    createdAt?: Date | string
    transaksi?: TbTransaksiUncheckedCreateNestedOneWithoutPemesananInput
  }

  export type TbPemesananUpdateInput = {
    jumlahTiket?: IntFieldUpdateOperationsInput | number
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: MasterUserUpdateOneRequiredWithoutPemesananNestedInput
    layanan?: MasterLayananUpdateOneRequiredWithoutPemesananNestedInput
    transaksi?: TbTransaksiUpdateOneWithoutPemesananNestedInput
  }

  export type TbPemesananUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    layananId?: IntFieldUpdateOperationsInput | number
    jumlahTiket?: IntFieldUpdateOperationsInput | number
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TbTransaksiUncheckedUpdateOneWithoutPemesananNestedInput
  }

  export type TbPemesananCreateManyInput = {
    id?: number
    userId: number
    layananId: number
    jumlahTiket: number
    totalHarga: number
    status: string
    createdAt?: Date | string
  }

  export type TbPemesananUpdateManyMutationInput = {
    jumlahTiket?: IntFieldUpdateOperationsInput | number
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TbPemesananUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    layananId?: IntFieldUpdateOperationsInput | number
    jumlahTiket?: IntFieldUpdateOperationsInput | number
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TbTransaksiCreateInput = {
    jumlahBayar: number
    statusBayar: string
    invoicePdf?: string | null
    createdAt?: Date | string
    user: MasterUserCreateNestedOneWithoutTransaksiInput
    pemesanan: TbPemesananCreateNestedOneWithoutTransaksiInput
  }

  export type TbTransaksiUncheckedCreateInput = {
    id?: number
    pemesananId: number
    userId: number
    jumlahBayar: number
    statusBayar: string
    invoicePdf?: string | null
    createdAt?: Date | string
  }

  export type TbTransaksiUpdateInput = {
    jumlahBayar?: FloatFieldUpdateOperationsInput | number
    statusBayar?: StringFieldUpdateOperationsInput | string
    invoicePdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: MasterUserUpdateOneRequiredWithoutTransaksiNestedInput
    pemesanan?: TbPemesananUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type TbTransaksiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pemesananId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jumlahBayar?: FloatFieldUpdateOperationsInput | number
    statusBayar?: StringFieldUpdateOperationsInput | string
    invoicePdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TbTransaksiCreateManyInput = {
    id?: number
    pemesananId: number
    userId: number
    jumlahBayar: number
    statusBayar: string
    invoicePdf?: string | null
    createdAt?: Date | string
  }

  export type TbTransaksiUpdateManyMutationInput = {
    jumlahBayar?: FloatFieldUpdateOperationsInput | number
    statusBayar?: StringFieldUpdateOperationsInput | string
    invoicePdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TbTransaksiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pemesananId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jumlahBayar?: FloatFieldUpdateOperationsInput | number
    statusBayar?: StringFieldUpdateOperationsInput | string
    invoicePdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TbPemesananListRelationFilter = {
    every?: TbPemesananWhereInput
    some?: TbPemesananWhereInput
    none?: TbPemesananWhereInput
  }

  export type TbTransaksiListRelationFilter = {
    every?: TbTransaksiWhereInput
    some?: TbTransaksiWhereInput
    none?: TbTransaksiWhereInput
  }

  export type TbPemesananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TbTransaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type MasterUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MasterUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type MasterUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type MasterUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MasterLayananCountOrderByAggregateInput = {
    id?: SortOrder
    namaLayanan?: SortOrder
    waktuBerangkat?: SortOrder
    rute?: SortOrder
    biaya?: SortOrder
    stokKursi?: SortOrder
  }

  export type MasterLayananAvgOrderByAggregateInput = {
    id?: SortOrder
    biaya?: SortOrder
    stokKursi?: SortOrder
  }

  export type MasterLayananMaxOrderByAggregateInput = {
    id?: SortOrder
    namaLayanan?: SortOrder
    waktuBerangkat?: SortOrder
    rute?: SortOrder
    biaya?: SortOrder
    stokKursi?: SortOrder
  }

  export type MasterLayananMinOrderByAggregateInput = {
    id?: SortOrder
    namaLayanan?: SortOrder
    waktuBerangkat?: SortOrder
    rute?: SortOrder
    biaya?: SortOrder
    stokKursi?: SortOrder
  }

  export type MasterLayananSumOrderByAggregateInput = {
    id?: SortOrder
    biaya?: SortOrder
    stokKursi?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TbKendaraanCountOrderByAggregateInput = {
    id?: SortOrder
    nomor?: SortOrder
    jenis?: SortOrder
    kapasitas?: SortOrder
    status?: SortOrder
  }

  export type TbKendaraanAvgOrderByAggregateInput = {
    id?: SortOrder
    kapasitas?: SortOrder
  }

  export type TbKendaraanMaxOrderByAggregateInput = {
    id?: SortOrder
    nomor?: SortOrder
    jenis?: SortOrder
    kapasitas?: SortOrder
    status?: SortOrder
  }

  export type TbKendaraanMinOrderByAggregateInput = {
    id?: SortOrder
    nomor?: SortOrder
    jenis?: SortOrder
    kapasitas?: SortOrder
    status?: SortOrder
  }

  export type TbKendaraanSumOrderByAggregateInput = {
    id?: SortOrder
    kapasitas?: SortOrder
  }

  export type MasterUserRelationFilter = {
    is?: MasterUserWhereInput
    isNot?: MasterUserWhereInput
  }

  export type MasterLayananRelationFilter = {
    is?: MasterLayananWhereInput
    isNot?: MasterLayananWhereInput
  }

  export type TbTransaksiNullableRelationFilter = {
    is?: TbTransaksiWhereInput | null
    isNot?: TbTransaksiWhereInput | null
  }

  export type TbPemesananCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    layananId?: SortOrder
    jumlahTiket?: SortOrder
    totalHarga?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TbPemesananAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    layananId?: SortOrder
    jumlahTiket?: SortOrder
    totalHarga?: SortOrder
  }

  export type TbPemesananMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    layananId?: SortOrder
    jumlahTiket?: SortOrder
    totalHarga?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TbPemesananMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    layananId?: SortOrder
    jumlahTiket?: SortOrder
    totalHarga?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TbPemesananSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    layananId?: SortOrder
    jumlahTiket?: SortOrder
    totalHarga?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TbPemesananRelationFilter = {
    is?: TbPemesananWhereInput
    isNot?: TbPemesananWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TbTransaksiCountOrderByAggregateInput = {
    id?: SortOrder
    pemesananId?: SortOrder
    userId?: SortOrder
    jumlahBayar?: SortOrder
    statusBayar?: SortOrder
    invoicePdf?: SortOrder
    createdAt?: SortOrder
  }

  export type TbTransaksiAvgOrderByAggregateInput = {
    id?: SortOrder
    pemesananId?: SortOrder
    userId?: SortOrder
    jumlahBayar?: SortOrder
  }

  export type TbTransaksiMaxOrderByAggregateInput = {
    id?: SortOrder
    pemesananId?: SortOrder
    userId?: SortOrder
    jumlahBayar?: SortOrder
    statusBayar?: SortOrder
    invoicePdf?: SortOrder
    createdAt?: SortOrder
  }

  export type TbTransaksiMinOrderByAggregateInput = {
    id?: SortOrder
    pemesananId?: SortOrder
    userId?: SortOrder
    jumlahBayar?: SortOrder
    statusBayar?: SortOrder
    invoicePdf?: SortOrder
    createdAt?: SortOrder
  }

  export type TbTransaksiSumOrderByAggregateInput = {
    id?: SortOrder
    pemesananId?: SortOrder
    userId?: SortOrder
    jumlahBayar?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TbPemesananCreateNestedManyWithoutUserInput = {
    create?: XOR<TbPemesananCreateWithoutUserInput, TbPemesananUncheckedCreateWithoutUserInput> | TbPemesananCreateWithoutUserInput[] | TbPemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TbPemesananCreateOrConnectWithoutUserInput | TbPemesananCreateOrConnectWithoutUserInput[]
    createMany?: TbPemesananCreateManyUserInputEnvelope
    connect?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
  }

  export type TbTransaksiCreateNestedManyWithoutUserInput = {
    create?: XOR<TbTransaksiCreateWithoutUserInput, TbTransaksiUncheckedCreateWithoutUserInput> | TbTransaksiCreateWithoutUserInput[] | TbTransaksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TbTransaksiCreateOrConnectWithoutUserInput | TbTransaksiCreateOrConnectWithoutUserInput[]
    createMany?: TbTransaksiCreateManyUserInputEnvelope
    connect?: TbTransaksiWhereUniqueInput | TbTransaksiWhereUniqueInput[]
  }

  export type TbPemesananUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TbPemesananCreateWithoutUserInput, TbPemesananUncheckedCreateWithoutUserInput> | TbPemesananCreateWithoutUserInput[] | TbPemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TbPemesananCreateOrConnectWithoutUserInput | TbPemesananCreateOrConnectWithoutUserInput[]
    createMany?: TbPemesananCreateManyUserInputEnvelope
    connect?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
  }

  export type TbTransaksiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TbTransaksiCreateWithoutUserInput, TbTransaksiUncheckedCreateWithoutUserInput> | TbTransaksiCreateWithoutUserInput[] | TbTransaksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TbTransaksiCreateOrConnectWithoutUserInput | TbTransaksiCreateOrConnectWithoutUserInput[]
    createMany?: TbTransaksiCreateManyUserInputEnvelope
    connect?: TbTransaksiWhereUniqueInput | TbTransaksiWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TbPemesananUpdateManyWithoutUserNestedInput = {
    create?: XOR<TbPemesananCreateWithoutUserInput, TbPemesananUncheckedCreateWithoutUserInput> | TbPemesananCreateWithoutUserInput[] | TbPemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TbPemesananCreateOrConnectWithoutUserInput | TbPemesananCreateOrConnectWithoutUserInput[]
    upsert?: TbPemesananUpsertWithWhereUniqueWithoutUserInput | TbPemesananUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TbPemesananCreateManyUserInputEnvelope
    set?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    disconnect?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    delete?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    connect?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    update?: TbPemesananUpdateWithWhereUniqueWithoutUserInput | TbPemesananUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TbPemesananUpdateManyWithWhereWithoutUserInput | TbPemesananUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TbPemesananScalarWhereInput | TbPemesananScalarWhereInput[]
  }

  export type TbTransaksiUpdateManyWithoutUserNestedInput = {
    create?: XOR<TbTransaksiCreateWithoutUserInput, TbTransaksiUncheckedCreateWithoutUserInput> | TbTransaksiCreateWithoutUserInput[] | TbTransaksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TbTransaksiCreateOrConnectWithoutUserInput | TbTransaksiCreateOrConnectWithoutUserInput[]
    upsert?: TbTransaksiUpsertWithWhereUniqueWithoutUserInput | TbTransaksiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TbTransaksiCreateManyUserInputEnvelope
    set?: TbTransaksiWhereUniqueInput | TbTransaksiWhereUniqueInput[]
    disconnect?: TbTransaksiWhereUniqueInput | TbTransaksiWhereUniqueInput[]
    delete?: TbTransaksiWhereUniqueInput | TbTransaksiWhereUniqueInput[]
    connect?: TbTransaksiWhereUniqueInput | TbTransaksiWhereUniqueInput[]
    update?: TbTransaksiUpdateWithWhereUniqueWithoutUserInput | TbTransaksiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TbTransaksiUpdateManyWithWhereWithoutUserInput | TbTransaksiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TbTransaksiScalarWhereInput | TbTransaksiScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TbPemesananUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TbPemesananCreateWithoutUserInput, TbPemesananUncheckedCreateWithoutUserInput> | TbPemesananCreateWithoutUserInput[] | TbPemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TbPemesananCreateOrConnectWithoutUserInput | TbPemesananCreateOrConnectWithoutUserInput[]
    upsert?: TbPemesananUpsertWithWhereUniqueWithoutUserInput | TbPemesananUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TbPemesananCreateManyUserInputEnvelope
    set?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    disconnect?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    delete?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    connect?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    update?: TbPemesananUpdateWithWhereUniqueWithoutUserInput | TbPemesananUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TbPemesananUpdateManyWithWhereWithoutUserInput | TbPemesananUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TbPemesananScalarWhereInput | TbPemesananScalarWhereInput[]
  }

  export type TbTransaksiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TbTransaksiCreateWithoutUserInput, TbTransaksiUncheckedCreateWithoutUserInput> | TbTransaksiCreateWithoutUserInput[] | TbTransaksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TbTransaksiCreateOrConnectWithoutUserInput | TbTransaksiCreateOrConnectWithoutUserInput[]
    upsert?: TbTransaksiUpsertWithWhereUniqueWithoutUserInput | TbTransaksiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TbTransaksiCreateManyUserInputEnvelope
    set?: TbTransaksiWhereUniqueInput | TbTransaksiWhereUniqueInput[]
    disconnect?: TbTransaksiWhereUniqueInput | TbTransaksiWhereUniqueInput[]
    delete?: TbTransaksiWhereUniqueInput | TbTransaksiWhereUniqueInput[]
    connect?: TbTransaksiWhereUniqueInput | TbTransaksiWhereUniqueInput[]
    update?: TbTransaksiUpdateWithWhereUniqueWithoutUserInput | TbTransaksiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TbTransaksiUpdateManyWithWhereWithoutUserInput | TbTransaksiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TbTransaksiScalarWhereInput | TbTransaksiScalarWhereInput[]
  }

  export type TbPemesananCreateNestedManyWithoutLayananInput = {
    create?: XOR<TbPemesananCreateWithoutLayananInput, TbPemesananUncheckedCreateWithoutLayananInput> | TbPemesananCreateWithoutLayananInput[] | TbPemesananUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: TbPemesananCreateOrConnectWithoutLayananInput | TbPemesananCreateOrConnectWithoutLayananInput[]
    createMany?: TbPemesananCreateManyLayananInputEnvelope
    connect?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
  }

  export type TbPemesananUncheckedCreateNestedManyWithoutLayananInput = {
    create?: XOR<TbPemesananCreateWithoutLayananInput, TbPemesananUncheckedCreateWithoutLayananInput> | TbPemesananCreateWithoutLayananInput[] | TbPemesananUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: TbPemesananCreateOrConnectWithoutLayananInput | TbPemesananCreateOrConnectWithoutLayananInput[]
    createMany?: TbPemesananCreateManyLayananInputEnvelope
    connect?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TbPemesananUpdateManyWithoutLayananNestedInput = {
    create?: XOR<TbPemesananCreateWithoutLayananInput, TbPemesananUncheckedCreateWithoutLayananInput> | TbPemesananCreateWithoutLayananInput[] | TbPemesananUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: TbPemesananCreateOrConnectWithoutLayananInput | TbPemesananCreateOrConnectWithoutLayananInput[]
    upsert?: TbPemesananUpsertWithWhereUniqueWithoutLayananInput | TbPemesananUpsertWithWhereUniqueWithoutLayananInput[]
    createMany?: TbPemesananCreateManyLayananInputEnvelope
    set?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    disconnect?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    delete?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    connect?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    update?: TbPemesananUpdateWithWhereUniqueWithoutLayananInput | TbPemesananUpdateWithWhereUniqueWithoutLayananInput[]
    updateMany?: TbPemesananUpdateManyWithWhereWithoutLayananInput | TbPemesananUpdateManyWithWhereWithoutLayananInput[]
    deleteMany?: TbPemesananScalarWhereInput | TbPemesananScalarWhereInput[]
  }

  export type TbPemesananUncheckedUpdateManyWithoutLayananNestedInput = {
    create?: XOR<TbPemesananCreateWithoutLayananInput, TbPemesananUncheckedCreateWithoutLayananInput> | TbPemesananCreateWithoutLayananInput[] | TbPemesananUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: TbPemesananCreateOrConnectWithoutLayananInput | TbPemesananCreateOrConnectWithoutLayananInput[]
    upsert?: TbPemesananUpsertWithWhereUniqueWithoutLayananInput | TbPemesananUpsertWithWhereUniqueWithoutLayananInput[]
    createMany?: TbPemesananCreateManyLayananInputEnvelope
    set?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    disconnect?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    delete?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    connect?: TbPemesananWhereUniqueInput | TbPemesananWhereUniqueInput[]
    update?: TbPemesananUpdateWithWhereUniqueWithoutLayananInput | TbPemesananUpdateWithWhereUniqueWithoutLayananInput[]
    updateMany?: TbPemesananUpdateManyWithWhereWithoutLayananInput | TbPemesananUpdateManyWithWhereWithoutLayananInput[]
    deleteMany?: TbPemesananScalarWhereInput | TbPemesananScalarWhereInput[]
  }

  export type MasterUserCreateNestedOneWithoutPemesananInput = {
    create?: XOR<MasterUserCreateWithoutPemesananInput, MasterUserUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: MasterUserCreateOrConnectWithoutPemesananInput
    connect?: MasterUserWhereUniqueInput
  }

  export type MasterLayananCreateNestedOneWithoutPemesananInput = {
    create?: XOR<MasterLayananCreateWithoutPemesananInput, MasterLayananUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: MasterLayananCreateOrConnectWithoutPemesananInput
    connect?: MasterLayananWhereUniqueInput
  }

  export type TbTransaksiCreateNestedOneWithoutPemesananInput = {
    create?: XOR<TbTransaksiCreateWithoutPemesananInput, TbTransaksiUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: TbTransaksiCreateOrConnectWithoutPemesananInput
    connect?: TbTransaksiWhereUniqueInput
  }

  export type TbTransaksiUncheckedCreateNestedOneWithoutPemesananInput = {
    create?: XOR<TbTransaksiCreateWithoutPemesananInput, TbTransaksiUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: TbTransaksiCreateOrConnectWithoutPemesananInput
    connect?: TbTransaksiWhereUniqueInput
  }

  export type MasterUserUpdateOneRequiredWithoutPemesananNestedInput = {
    create?: XOR<MasterUserCreateWithoutPemesananInput, MasterUserUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: MasterUserCreateOrConnectWithoutPemesananInput
    upsert?: MasterUserUpsertWithoutPemesananInput
    connect?: MasterUserWhereUniqueInput
    update?: XOR<XOR<MasterUserUpdateToOneWithWhereWithoutPemesananInput, MasterUserUpdateWithoutPemesananInput>, MasterUserUncheckedUpdateWithoutPemesananInput>
  }

  export type MasterLayananUpdateOneRequiredWithoutPemesananNestedInput = {
    create?: XOR<MasterLayananCreateWithoutPemesananInput, MasterLayananUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: MasterLayananCreateOrConnectWithoutPemesananInput
    upsert?: MasterLayananUpsertWithoutPemesananInput
    connect?: MasterLayananWhereUniqueInput
    update?: XOR<XOR<MasterLayananUpdateToOneWithWhereWithoutPemesananInput, MasterLayananUpdateWithoutPemesananInput>, MasterLayananUncheckedUpdateWithoutPemesananInput>
  }

  export type TbTransaksiUpdateOneWithoutPemesananNestedInput = {
    create?: XOR<TbTransaksiCreateWithoutPemesananInput, TbTransaksiUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: TbTransaksiCreateOrConnectWithoutPemesananInput
    upsert?: TbTransaksiUpsertWithoutPemesananInput
    disconnect?: TbTransaksiWhereInput | boolean
    delete?: TbTransaksiWhereInput | boolean
    connect?: TbTransaksiWhereUniqueInput
    update?: XOR<XOR<TbTransaksiUpdateToOneWithWhereWithoutPemesananInput, TbTransaksiUpdateWithoutPemesananInput>, TbTransaksiUncheckedUpdateWithoutPemesananInput>
  }

  export type TbTransaksiUncheckedUpdateOneWithoutPemesananNestedInput = {
    create?: XOR<TbTransaksiCreateWithoutPemesananInput, TbTransaksiUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: TbTransaksiCreateOrConnectWithoutPemesananInput
    upsert?: TbTransaksiUpsertWithoutPemesananInput
    disconnect?: TbTransaksiWhereInput | boolean
    delete?: TbTransaksiWhereInput | boolean
    connect?: TbTransaksiWhereUniqueInput
    update?: XOR<XOR<TbTransaksiUpdateToOneWithWhereWithoutPemesananInput, TbTransaksiUpdateWithoutPemesananInput>, TbTransaksiUncheckedUpdateWithoutPemesananInput>
  }

  export type MasterUserCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<MasterUserCreateWithoutTransaksiInput, MasterUserUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: MasterUserCreateOrConnectWithoutTransaksiInput
    connect?: MasterUserWhereUniqueInput
  }

  export type TbPemesananCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<TbPemesananCreateWithoutTransaksiInput, TbPemesananUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: TbPemesananCreateOrConnectWithoutTransaksiInput
    connect?: TbPemesananWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MasterUserUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<MasterUserCreateWithoutTransaksiInput, MasterUserUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: MasterUserCreateOrConnectWithoutTransaksiInput
    upsert?: MasterUserUpsertWithoutTransaksiInput
    connect?: MasterUserWhereUniqueInput
    update?: XOR<XOR<MasterUserUpdateToOneWithWhereWithoutTransaksiInput, MasterUserUpdateWithoutTransaksiInput>, MasterUserUncheckedUpdateWithoutTransaksiInput>
  }

  export type TbPemesananUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<TbPemesananCreateWithoutTransaksiInput, TbPemesananUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: TbPemesananCreateOrConnectWithoutTransaksiInput
    upsert?: TbPemesananUpsertWithoutTransaksiInput
    connect?: TbPemesananWhereUniqueInput
    update?: XOR<XOR<TbPemesananUpdateToOneWithWhereWithoutTransaksiInput, TbPemesananUpdateWithoutTransaksiInput>, TbPemesananUncheckedUpdateWithoutTransaksiInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TbPemesananCreateWithoutUserInput = {
    jumlahTiket: number
    totalHarga: number
    status: string
    createdAt?: Date | string
    layanan: MasterLayananCreateNestedOneWithoutPemesananInput
    transaksi?: TbTransaksiCreateNestedOneWithoutPemesananInput
  }

  export type TbPemesananUncheckedCreateWithoutUserInput = {
    id?: number
    layananId: number
    jumlahTiket: number
    totalHarga: number
    status: string
    createdAt?: Date | string
    transaksi?: TbTransaksiUncheckedCreateNestedOneWithoutPemesananInput
  }

  export type TbPemesananCreateOrConnectWithoutUserInput = {
    where: TbPemesananWhereUniqueInput
    create: XOR<TbPemesananCreateWithoutUserInput, TbPemesananUncheckedCreateWithoutUserInput>
  }

  export type TbPemesananCreateManyUserInputEnvelope = {
    data: TbPemesananCreateManyUserInput | TbPemesananCreateManyUserInput[]
  }

  export type TbTransaksiCreateWithoutUserInput = {
    jumlahBayar: number
    statusBayar: string
    invoicePdf?: string | null
    createdAt?: Date | string
    pemesanan: TbPemesananCreateNestedOneWithoutTransaksiInput
  }

  export type TbTransaksiUncheckedCreateWithoutUserInput = {
    id?: number
    pemesananId: number
    jumlahBayar: number
    statusBayar: string
    invoicePdf?: string | null
    createdAt?: Date | string
  }

  export type TbTransaksiCreateOrConnectWithoutUserInput = {
    where: TbTransaksiWhereUniqueInput
    create: XOR<TbTransaksiCreateWithoutUserInput, TbTransaksiUncheckedCreateWithoutUserInput>
  }

  export type TbTransaksiCreateManyUserInputEnvelope = {
    data: TbTransaksiCreateManyUserInput | TbTransaksiCreateManyUserInput[]
  }

  export type TbPemesananUpsertWithWhereUniqueWithoutUserInput = {
    where: TbPemesananWhereUniqueInput
    update: XOR<TbPemesananUpdateWithoutUserInput, TbPemesananUncheckedUpdateWithoutUserInput>
    create: XOR<TbPemesananCreateWithoutUserInput, TbPemesananUncheckedCreateWithoutUserInput>
  }

  export type TbPemesananUpdateWithWhereUniqueWithoutUserInput = {
    where: TbPemesananWhereUniqueInput
    data: XOR<TbPemesananUpdateWithoutUserInput, TbPemesananUncheckedUpdateWithoutUserInput>
  }

  export type TbPemesananUpdateManyWithWhereWithoutUserInput = {
    where: TbPemesananScalarWhereInput
    data: XOR<TbPemesananUpdateManyMutationInput, TbPemesananUncheckedUpdateManyWithoutUserInput>
  }

  export type TbPemesananScalarWhereInput = {
    AND?: TbPemesananScalarWhereInput | TbPemesananScalarWhereInput[]
    OR?: TbPemesananScalarWhereInput[]
    NOT?: TbPemesananScalarWhereInput | TbPemesananScalarWhereInput[]
    id?: IntFilter<"TbPemesanan"> | number
    userId?: IntFilter<"TbPemesanan"> | number
    layananId?: IntFilter<"TbPemesanan"> | number
    jumlahTiket?: IntFilter<"TbPemesanan"> | number
    totalHarga?: FloatFilter<"TbPemesanan"> | number
    status?: StringFilter<"TbPemesanan"> | string
    createdAt?: DateTimeFilter<"TbPemesanan"> | Date | string
  }

  export type TbTransaksiUpsertWithWhereUniqueWithoutUserInput = {
    where: TbTransaksiWhereUniqueInput
    update: XOR<TbTransaksiUpdateWithoutUserInput, TbTransaksiUncheckedUpdateWithoutUserInput>
    create: XOR<TbTransaksiCreateWithoutUserInput, TbTransaksiUncheckedCreateWithoutUserInput>
  }

  export type TbTransaksiUpdateWithWhereUniqueWithoutUserInput = {
    where: TbTransaksiWhereUniqueInput
    data: XOR<TbTransaksiUpdateWithoutUserInput, TbTransaksiUncheckedUpdateWithoutUserInput>
  }

  export type TbTransaksiUpdateManyWithWhereWithoutUserInput = {
    where: TbTransaksiScalarWhereInput
    data: XOR<TbTransaksiUpdateManyMutationInput, TbTransaksiUncheckedUpdateManyWithoutUserInput>
  }

  export type TbTransaksiScalarWhereInput = {
    AND?: TbTransaksiScalarWhereInput | TbTransaksiScalarWhereInput[]
    OR?: TbTransaksiScalarWhereInput[]
    NOT?: TbTransaksiScalarWhereInput | TbTransaksiScalarWhereInput[]
    id?: IntFilter<"TbTransaksi"> | number
    pemesananId?: IntFilter<"TbTransaksi"> | number
    userId?: IntFilter<"TbTransaksi"> | number
    jumlahBayar?: FloatFilter<"TbTransaksi"> | number
    statusBayar?: StringFilter<"TbTransaksi"> | string
    invoicePdf?: StringNullableFilter<"TbTransaksi"> | string | null
    createdAt?: DateTimeFilter<"TbTransaksi"> | Date | string
  }

  export type TbPemesananCreateWithoutLayananInput = {
    jumlahTiket: number
    totalHarga: number
    status: string
    createdAt?: Date | string
    user: MasterUserCreateNestedOneWithoutPemesananInput
    transaksi?: TbTransaksiCreateNestedOneWithoutPemesananInput
  }

  export type TbPemesananUncheckedCreateWithoutLayananInput = {
    id?: number
    userId: number
    jumlahTiket: number
    totalHarga: number
    status: string
    createdAt?: Date | string
    transaksi?: TbTransaksiUncheckedCreateNestedOneWithoutPemesananInput
  }

  export type TbPemesananCreateOrConnectWithoutLayananInput = {
    where: TbPemesananWhereUniqueInput
    create: XOR<TbPemesananCreateWithoutLayananInput, TbPemesananUncheckedCreateWithoutLayananInput>
  }

  export type TbPemesananCreateManyLayananInputEnvelope = {
    data: TbPemesananCreateManyLayananInput | TbPemesananCreateManyLayananInput[]
  }

  export type TbPemesananUpsertWithWhereUniqueWithoutLayananInput = {
    where: TbPemesananWhereUniqueInput
    update: XOR<TbPemesananUpdateWithoutLayananInput, TbPemesananUncheckedUpdateWithoutLayananInput>
    create: XOR<TbPemesananCreateWithoutLayananInput, TbPemesananUncheckedCreateWithoutLayananInput>
  }

  export type TbPemesananUpdateWithWhereUniqueWithoutLayananInput = {
    where: TbPemesananWhereUniqueInput
    data: XOR<TbPemesananUpdateWithoutLayananInput, TbPemesananUncheckedUpdateWithoutLayananInput>
  }

  export type TbPemesananUpdateManyWithWhereWithoutLayananInput = {
    where: TbPemesananScalarWhereInput
    data: XOR<TbPemesananUpdateManyMutationInput, TbPemesananUncheckedUpdateManyWithoutLayananInput>
  }

  export type MasterUserCreateWithoutPemesananInput = {
    username: string
    password: string
    role: string
    createdAt?: Date | string
    transaksi?: TbTransaksiCreateNestedManyWithoutUserInput
  }

  export type MasterUserUncheckedCreateWithoutPemesananInput = {
    id?: number
    username: string
    password: string
    role: string
    createdAt?: Date | string
    transaksi?: TbTransaksiUncheckedCreateNestedManyWithoutUserInput
  }

  export type MasterUserCreateOrConnectWithoutPemesananInput = {
    where: MasterUserWhereUniqueInput
    create: XOR<MasterUserCreateWithoutPemesananInput, MasterUserUncheckedCreateWithoutPemesananInput>
  }

  export type MasterLayananCreateWithoutPemesananInput = {
    namaLayanan: string
    waktuBerangkat: Date | string
    rute: string
    biaya: number
    stokKursi: number
  }

  export type MasterLayananUncheckedCreateWithoutPemesananInput = {
    id?: number
    namaLayanan: string
    waktuBerangkat: Date | string
    rute: string
    biaya: number
    stokKursi: number
  }

  export type MasterLayananCreateOrConnectWithoutPemesananInput = {
    where: MasterLayananWhereUniqueInput
    create: XOR<MasterLayananCreateWithoutPemesananInput, MasterLayananUncheckedCreateWithoutPemesananInput>
  }

  export type TbTransaksiCreateWithoutPemesananInput = {
    jumlahBayar: number
    statusBayar: string
    invoicePdf?: string | null
    createdAt?: Date | string
    user: MasterUserCreateNestedOneWithoutTransaksiInput
  }

  export type TbTransaksiUncheckedCreateWithoutPemesananInput = {
    id?: number
    userId: number
    jumlahBayar: number
    statusBayar: string
    invoicePdf?: string | null
    createdAt?: Date | string
  }

  export type TbTransaksiCreateOrConnectWithoutPemesananInput = {
    where: TbTransaksiWhereUniqueInput
    create: XOR<TbTransaksiCreateWithoutPemesananInput, TbTransaksiUncheckedCreateWithoutPemesananInput>
  }

  export type MasterUserUpsertWithoutPemesananInput = {
    update: XOR<MasterUserUpdateWithoutPemesananInput, MasterUserUncheckedUpdateWithoutPemesananInput>
    create: XOR<MasterUserCreateWithoutPemesananInput, MasterUserUncheckedCreateWithoutPemesananInput>
    where?: MasterUserWhereInput
  }

  export type MasterUserUpdateToOneWithWhereWithoutPemesananInput = {
    where?: MasterUserWhereInput
    data: XOR<MasterUserUpdateWithoutPemesananInput, MasterUserUncheckedUpdateWithoutPemesananInput>
  }

  export type MasterUserUpdateWithoutPemesananInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TbTransaksiUpdateManyWithoutUserNestedInput
  }

  export type MasterUserUncheckedUpdateWithoutPemesananInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TbTransaksiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MasterLayananUpsertWithoutPemesananInput = {
    update: XOR<MasterLayananUpdateWithoutPemesananInput, MasterLayananUncheckedUpdateWithoutPemesananInput>
    create: XOR<MasterLayananCreateWithoutPemesananInput, MasterLayananUncheckedCreateWithoutPemesananInput>
    where?: MasterLayananWhereInput
  }

  export type MasterLayananUpdateToOneWithWhereWithoutPemesananInput = {
    where?: MasterLayananWhereInput
    data: XOR<MasterLayananUpdateWithoutPemesananInput, MasterLayananUncheckedUpdateWithoutPemesananInput>
  }

  export type MasterLayananUpdateWithoutPemesananInput = {
    namaLayanan?: StringFieldUpdateOperationsInput | string
    waktuBerangkat?: DateTimeFieldUpdateOperationsInput | Date | string
    rute?: StringFieldUpdateOperationsInput | string
    biaya?: FloatFieldUpdateOperationsInput | number
    stokKursi?: IntFieldUpdateOperationsInput | number
  }

  export type MasterLayananUncheckedUpdateWithoutPemesananInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaLayanan?: StringFieldUpdateOperationsInput | string
    waktuBerangkat?: DateTimeFieldUpdateOperationsInput | Date | string
    rute?: StringFieldUpdateOperationsInput | string
    biaya?: FloatFieldUpdateOperationsInput | number
    stokKursi?: IntFieldUpdateOperationsInput | number
  }

  export type TbTransaksiUpsertWithoutPemesananInput = {
    update: XOR<TbTransaksiUpdateWithoutPemesananInput, TbTransaksiUncheckedUpdateWithoutPemesananInput>
    create: XOR<TbTransaksiCreateWithoutPemesananInput, TbTransaksiUncheckedCreateWithoutPemesananInput>
    where?: TbTransaksiWhereInput
  }

  export type TbTransaksiUpdateToOneWithWhereWithoutPemesananInput = {
    where?: TbTransaksiWhereInput
    data: XOR<TbTransaksiUpdateWithoutPemesananInput, TbTransaksiUncheckedUpdateWithoutPemesananInput>
  }

  export type TbTransaksiUpdateWithoutPemesananInput = {
    jumlahBayar?: FloatFieldUpdateOperationsInput | number
    statusBayar?: StringFieldUpdateOperationsInput | string
    invoicePdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: MasterUserUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type TbTransaksiUncheckedUpdateWithoutPemesananInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jumlahBayar?: FloatFieldUpdateOperationsInput | number
    statusBayar?: StringFieldUpdateOperationsInput | string
    invoicePdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterUserCreateWithoutTransaksiInput = {
    username: string
    password: string
    role: string
    createdAt?: Date | string
    pemesanan?: TbPemesananCreateNestedManyWithoutUserInput
  }

  export type MasterUserUncheckedCreateWithoutTransaksiInput = {
    id?: number
    username: string
    password: string
    role: string
    createdAt?: Date | string
    pemesanan?: TbPemesananUncheckedCreateNestedManyWithoutUserInput
  }

  export type MasterUserCreateOrConnectWithoutTransaksiInput = {
    where: MasterUserWhereUniqueInput
    create: XOR<MasterUserCreateWithoutTransaksiInput, MasterUserUncheckedCreateWithoutTransaksiInput>
  }

  export type TbPemesananCreateWithoutTransaksiInput = {
    jumlahTiket: number
    totalHarga: number
    status: string
    createdAt?: Date | string
    user: MasterUserCreateNestedOneWithoutPemesananInput
    layanan: MasterLayananCreateNestedOneWithoutPemesananInput
  }

  export type TbPemesananUncheckedCreateWithoutTransaksiInput = {
    id?: number
    userId: number
    layananId: number
    jumlahTiket: number
    totalHarga: number
    status: string
    createdAt?: Date | string
  }

  export type TbPemesananCreateOrConnectWithoutTransaksiInput = {
    where: TbPemesananWhereUniqueInput
    create: XOR<TbPemesananCreateWithoutTransaksiInput, TbPemesananUncheckedCreateWithoutTransaksiInput>
  }

  export type MasterUserUpsertWithoutTransaksiInput = {
    update: XOR<MasterUserUpdateWithoutTransaksiInput, MasterUserUncheckedUpdateWithoutTransaksiInput>
    create: XOR<MasterUserCreateWithoutTransaksiInput, MasterUserUncheckedCreateWithoutTransaksiInput>
    where?: MasterUserWhereInput
  }

  export type MasterUserUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: MasterUserWhereInput
    data: XOR<MasterUserUpdateWithoutTransaksiInput, MasterUserUncheckedUpdateWithoutTransaksiInput>
  }

  export type MasterUserUpdateWithoutTransaksiInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: TbPemesananUpdateManyWithoutUserNestedInput
  }

  export type MasterUserUncheckedUpdateWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: TbPemesananUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TbPemesananUpsertWithoutTransaksiInput = {
    update: XOR<TbPemesananUpdateWithoutTransaksiInput, TbPemesananUncheckedUpdateWithoutTransaksiInput>
    create: XOR<TbPemesananCreateWithoutTransaksiInput, TbPemesananUncheckedCreateWithoutTransaksiInput>
    where?: TbPemesananWhereInput
  }

  export type TbPemesananUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: TbPemesananWhereInput
    data: XOR<TbPemesananUpdateWithoutTransaksiInput, TbPemesananUncheckedUpdateWithoutTransaksiInput>
  }

  export type TbPemesananUpdateWithoutTransaksiInput = {
    jumlahTiket?: IntFieldUpdateOperationsInput | number
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: MasterUserUpdateOneRequiredWithoutPemesananNestedInput
    layanan?: MasterLayananUpdateOneRequiredWithoutPemesananNestedInput
  }

  export type TbPemesananUncheckedUpdateWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    layananId?: IntFieldUpdateOperationsInput | number
    jumlahTiket?: IntFieldUpdateOperationsInput | number
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TbPemesananCreateManyUserInput = {
    id?: number
    layananId: number
    jumlahTiket: number
    totalHarga: number
    status: string
    createdAt?: Date | string
  }

  export type TbTransaksiCreateManyUserInput = {
    id?: number
    pemesananId: number
    jumlahBayar: number
    statusBayar: string
    invoicePdf?: string | null
    createdAt?: Date | string
  }

  export type TbPemesananUpdateWithoutUserInput = {
    jumlahTiket?: IntFieldUpdateOperationsInput | number
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layanan?: MasterLayananUpdateOneRequiredWithoutPemesananNestedInput
    transaksi?: TbTransaksiUpdateOneWithoutPemesananNestedInput
  }

  export type TbPemesananUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    layananId?: IntFieldUpdateOperationsInput | number
    jumlahTiket?: IntFieldUpdateOperationsInput | number
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TbTransaksiUncheckedUpdateOneWithoutPemesananNestedInput
  }

  export type TbPemesananUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    layananId?: IntFieldUpdateOperationsInput | number
    jumlahTiket?: IntFieldUpdateOperationsInput | number
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TbTransaksiUpdateWithoutUserInput = {
    jumlahBayar?: FloatFieldUpdateOperationsInput | number
    statusBayar?: StringFieldUpdateOperationsInput | string
    invoicePdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: TbPemesananUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type TbTransaksiUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    pemesananId?: IntFieldUpdateOperationsInput | number
    jumlahBayar?: FloatFieldUpdateOperationsInput | number
    statusBayar?: StringFieldUpdateOperationsInput | string
    invoicePdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TbTransaksiUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    pemesananId?: IntFieldUpdateOperationsInput | number
    jumlahBayar?: FloatFieldUpdateOperationsInput | number
    statusBayar?: StringFieldUpdateOperationsInput | string
    invoicePdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TbPemesananCreateManyLayananInput = {
    id?: number
    userId: number
    jumlahTiket: number
    totalHarga: number
    status: string
    createdAt?: Date | string
  }

  export type TbPemesananUpdateWithoutLayananInput = {
    jumlahTiket?: IntFieldUpdateOperationsInput | number
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: MasterUserUpdateOneRequiredWithoutPemesananNestedInput
    transaksi?: TbTransaksiUpdateOneWithoutPemesananNestedInput
  }

  export type TbPemesananUncheckedUpdateWithoutLayananInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jumlahTiket?: IntFieldUpdateOperationsInput | number
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TbTransaksiUncheckedUpdateOneWithoutPemesananNestedInput
  }

  export type TbPemesananUncheckedUpdateManyWithoutLayananInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jumlahTiket?: IntFieldUpdateOperationsInput | number
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MasterUserCountOutputTypeDefaultArgs instead
     */
    export type MasterUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MasterUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MasterLayananCountOutputTypeDefaultArgs instead
     */
    export type MasterLayananCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MasterLayananCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MasterUserDefaultArgs instead
     */
    export type MasterUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MasterUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MasterLayananDefaultArgs instead
     */
    export type MasterLayananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MasterLayananDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TbKendaraanDefaultArgs instead
     */
    export type TbKendaraanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TbKendaraanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TbPemesananDefaultArgs instead
     */
    export type TbPemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TbPemesananDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TbTransaksiDefaultArgs instead
     */
    export type TbTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TbTransaksiDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
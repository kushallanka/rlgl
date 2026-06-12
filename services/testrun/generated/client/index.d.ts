
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
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Suite
 * 
 */
export type Suite = $Result.DefaultSelection<Prisma.$SuitePayload>
/**
 * Model TestRun
 * 
 */
export type TestRun = $Result.DefaultSelection<Prisma.$TestRunPayload>
/**
 * Model TestResult
 * 
 */
export type TestResult = $Result.DefaultSelection<Prisma.$TestResultPayload>
/**
 * Model IdempotencyKey
 * 
 */
export type IdempotencyKey = $Result.DefaultSelection<Prisma.$IdempotencyKeyPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
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
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
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
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.suite`: Exposes CRUD operations for the **Suite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suites
    * const suites = await prisma.suite.findMany()
    * ```
    */
  get suite(): Prisma.SuiteDelegate<ExtArgs>;

  /**
   * `prisma.testRun`: Exposes CRUD operations for the **TestRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestRuns
    * const testRuns = await prisma.testRun.findMany()
    * ```
    */
  get testRun(): Prisma.TestRunDelegate<ExtArgs>;

  /**
   * `prisma.testResult`: Exposes CRUD operations for the **TestResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestResults
    * const testResults = await prisma.testResult.findMany()
    * ```
    */
  get testResult(): Prisma.TestResultDelegate<ExtArgs>;

  /**
   * `prisma.idempotencyKey`: Exposes CRUD operations for the **IdempotencyKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdempotencyKeys
    * const idempotencyKeys = await prisma.idempotencyKey.findMany()
    * ```
    */
  get idempotencyKey(): Prisma.IdempotencyKeyDelegate<ExtArgs>;
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
    Project: 'Project',
    Suite: 'Suite',
    TestRun: 'TestRun',
    TestResult: 'TestResult',
    IdempotencyKey: 'IdempotencyKey'
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
      modelProps: "project" | "suite" | "testRun" | "testResult" | "idempotencyKey"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Suite: {
        payload: Prisma.$SuitePayload<ExtArgs>
        fields: Prisma.SuiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuitePayload>
          }
          findFirst: {
            args: Prisma.SuiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuitePayload>
          }
          findMany: {
            args: Prisma.SuiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuitePayload>[]
          }
          create: {
            args: Prisma.SuiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuitePayload>
          }
          createMany: {
            args: Prisma.SuiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuitePayload>[]
          }
          delete: {
            args: Prisma.SuiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuitePayload>
          }
          update: {
            args: Prisma.SuiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuitePayload>
          }
          deleteMany: {
            args: Prisma.SuiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuitePayload>
          }
          aggregate: {
            args: Prisma.SuiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuite>
          }
          groupBy: {
            args: Prisma.SuiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuiteCountArgs<ExtArgs>
            result: $Utils.Optional<SuiteCountAggregateOutputType> | number
          }
        }
      }
      TestRun: {
        payload: Prisma.$TestRunPayload<ExtArgs>
        fields: Prisma.TestRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          findFirst: {
            args: Prisma.TestRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          findMany: {
            args: Prisma.TestRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>[]
          }
          create: {
            args: Prisma.TestRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          createMany: {
            args: Prisma.TestRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>[]
          }
          delete: {
            args: Prisma.TestRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          update: {
            args: Prisma.TestRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          deleteMany: {
            args: Prisma.TestRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          aggregate: {
            args: Prisma.TestRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestRun>
          }
          groupBy: {
            args: Prisma.TestRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestRunCountArgs<ExtArgs>
            result: $Utils.Optional<TestRunCountAggregateOutputType> | number
          }
        }
      }
      TestResult: {
        payload: Prisma.$TestResultPayload<ExtArgs>
        fields: Prisma.TestResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          findFirst: {
            args: Prisma.TestResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          findMany: {
            args: Prisma.TestResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          create: {
            args: Prisma.TestResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          createMany: {
            args: Prisma.TestResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          delete: {
            args: Prisma.TestResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          update: {
            args: Prisma.TestResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          deleteMany: {
            args: Prisma.TestResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          aggregate: {
            args: Prisma.TestResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestResult>
          }
          groupBy: {
            args: Prisma.TestResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestResultCountArgs<ExtArgs>
            result: $Utils.Optional<TestResultCountAggregateOutputType> | number
          }
        }
      }
      IdempotencyKey: {
        payload: Prisma.$IdempotencyKeyPayload<ExtArgs>
        fields: Prisma.IdempotencyKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdempotencyKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          findFirst: {
            args: Prisma.IdempotencyKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          findMany: {
            args: Prisma.IdempotencyKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[]
          }
          create: {
            args: Prisma.IdempotencyKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          createMany: {
            args: Prisma.IdempotencyKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdempotencyKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[]
          }
          delete: {
            args: Prisma.IdempotencyKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          update: {
            args: Prisma.IdempotencyKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          deleteMany: {
            args: Prisma.IdempotencyKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdempotencyKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IdempotencyKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          aggregate: {
            args: Prisma.IdempotencyKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdempotencyKey>
          }
          groupBy: {
            args: Prisma.IdempotencyKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdempotencyKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdempotencyKeyCountArgs<ExtArgs>
            result: $Utils.Optional<IdempotencyKeyCountAggregateOutputType> | number
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
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    testRuns: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRuns?: boolean | ProjectCountOutputTypeCountTestRunsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTestRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestRunWhereInput
  }


  /**
   * Count Type SuiteCountOutputType
   */

  export type SuiteCountOutputType = {
    testRuns: number
  }

  export type SuiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRuns?: boolean | SuiteCountOutputTypeCountTestRunsArgs
  }

  // Custom InputTypes
  /**
   * SuiteCountOutputType without action
   */
  export type SuiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiteCountOutputType
     */
    select?: SuiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuiteCountOutputType without action
   */
  export type SuiteCountOutputTypeCountTestRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestRunWhereInput
  }


  /**
   * Count Type TestRunCountOutputType
   */

  export type TestRunCountOutputType = {
    results: number
  }

  export type TestRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | TestRunCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * TestRunCountOutputType without action
   */
  export type TestRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRunCountOutputType
     */
    select?: TestRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestRunCountOutputType without action
   */
  export type TestRunCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testRuns?: boolean | Project$testRunsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRuns?: boolean | Project$testRunsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      testRuns: Prisma.$TestRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testRuns<T extends Project$testRunsArgs<ExtArgs> = {}>(args?: Subset<T, Project$testRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly deletedAt: FieldRef<"Project", 'DateTime'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.testRuns
   */
  export type Project$testRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    where?: TestRunWhereInput
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    cursor?: TestRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Suite
   */

  export type AggregateSuite = {
    _count: SuiteCountAggregateOutputType | null
    _avg: SuiteAvgAggregateOutputType | null
    _sum: SuiteSumAggregateOutputType | null
    _min: SuiteMinAggregateOutputType | null
    _max: SuiteMaxAggregateOutputType | null
  }

  export type SuiteAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type SuiteSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type SuiteMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuiteMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuiteCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SuiteAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type SuiteSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type SuiteMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuiteMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuiteCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SuiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suite to aggregate.
     */
    where?: SuiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suites to fetch.
     */
    orderBy?: SuiteOrderByWithRelationInput | SuiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suites
    **/
    _count?: true | SuiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuiteMaxAggregateInputType
  }

  export type GetSuiteAggregateType<T extends SuiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSuite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuite[P]>
      : GetScalarType<T[P], AggregateSuite[P]>
  }




  export type SuiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuiteWhereInput
    orderBy?: SuiteOrderByWithAggregationInput | SuiteOrderByWithAggregationInput[]
    by: SuiteScalarFieldEnum[] | SuiteScalarFieldEnum
    having?: SuiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuiteCountAggregateInputType | true
    _avg?: SuiteAvgAggregateInputType
    _sum?: SuiteSumAggregateInputType
    _min?: SuiteMinAggregateInputType
    _max?: SuiteMaxAggregateInputType
  }

  export type SuiteGroupByOutputType = {
    id: number
    projectId: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: SuiteCountAggregateOutputType | null
    _avg: SuiteAvgAggregateOutputType | null
    _sum: SuiteSumAggregateOutputType | null
    _min: SuiteMinAggregateOutputType | null
    _max: SuiteMaxAggregateOutputType | null
  }

  type GetSuiteGroupByPayload<T extends SuiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuiteGroupByOutputType[P]>
            : GetScalarType<T[P], SuiteGroupByOutputType[P]>
        }
      >
    >


  export type SuiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testRuns?: boolean | Suite$testRunsArgs<ExtArgs>
    _count?: boolean | SuiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suite"]>

  export type SuiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["suite"]>

  export type SuiteSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SuiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRuns?: boolean | Suite$testRunsArgs<ExtArgs>
    _count?: boolean | SuiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SuitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suite"
    objects: {
      testRuns: Prisma.$TestRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["suite"]>
    composites: {}
  }

  type SuiteGetPayload<S extends boolean | null | undefined | SuiteDefaultArgs> = $Result.GetResult<Prisma.$SuitePayload, S>

  type SuiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SuiteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SuiteCountAggregateInputType | true
    }

  export interface SuiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suite'], meta: { name: 'Suite' } }
    /**
     * Find zero or one Suite that matches the filter.
     * @param {SuiteFindUniqueArgs} args - Arguments to find a Suite
     * @example
     * // Get one Suite
     * const suite = await prisma.suite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuiteFindUniqueArgs>(args: SelectSubset<T, SuiteFindUniqueArgs<ExtArgs>>): Prisma__SuiteClient<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Suite that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SuiteFindUniqueOrThrowArgs} args - Arguments to find a Suite
     * @example
     * // Get one Suite
     * const suite = await prisma.suite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SuiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuiteClient<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Suite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiteFindFirstArgs} args - Arguments to find a Suite
     * @example
     * // Get one Suite
     * const suite = await prisma.suite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuiteFindFirstArgs>(args?: SelectSubset<T, SuiteFindFirstArgs<ExtArgs>>): Prisma__SuiteClient<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Suite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiteFindFirstOrThrowArgs} args - Arguments to find a Suite
     * @example
     * // Get one Suite
     * const suite = await prisma.suite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SuiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuiteClient<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Suites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suites
     * const suites = await prisma.suite.findMany()
     * 
     * // Get first 10 Suites
     * const suites = await prisma.suite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suiteWithIdOnly = await prisma.suite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuiteFindManyArgs>(args?: SelectSubset<T, SuiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Suite.
     * @param {SuiteCreateArgs} args - Arguments to create a Suite.
     * @example
     * // Create one Suite
     * const Suite = await prisma.suite.create({
     *   data: {
     *     // ... data to create a Suite
     *   }
     * })
     * 
     */
    create<T extends SuiteCreateArgs>(args: SelectSubset<T, SuiteCreateArgs<ExtArgs>>): Prisma__SuiteClient<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Suites.
     * @param {SuiteCreateManyArgs} args - Arguments to create many Suites.
     * @example
     * // Create many Suites
     * const suite = await prisma.suite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuiteCreateManyArgs>(args?: SelectSubset<T, SuiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suites and returns the data saved in the database.
     * @param {SuiteCreateManyAndReturnArgs} args - Arguments to create many Suites.
     * @example
     * // Create many Suites
     * const suite = await prisma.suite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suites and only return the `id`
     * const suiteWithIdOnly = await prisma.suite.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SuiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Suite.
     * @param {SuiteDeleteArgs} args - Arguments to delete one Suite.
     * @example
     * // Delete one Suite
     * const Suite = await prisma.suite.delete({
     *   where: {
     *     // ... filter to delete one Suite
     *   }
     * })
     * 
     */
    delete<T extends SuiteDeleteArgs>(args: SelectSubset<T, SuiteDeleteArgs<ExtArgs>>): Prisma__SuiteClient<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Suite.
     * @param {SuiteUpdateArgs} args - Arguments to update one Suite.
     * @example
     * // Update one Suite
     * const suite = await prisma.suite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuiteUpdateArgs>(args: SelectSubset<T, SuiteUpdateArgs<ExtArgs>>): Prisma__SuiteClient<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Suites.
     * @param {SuiteDeleteManyArgs} args - Arguments to filter Suites to delete.
     * @example
     * // Delete a few Suites
     * const { count } = await prisma.suite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuiteDeleteManyArgs>(args?: SelectSubset<T, SuiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suites
     * const suite = await prisma.suite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuiteUpdateManyArgs>(args: SelectSubset<T, SuiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Suite.
     * @param {SuiteUpsertArgs} args - Arguments to update or create a Suite.
     * @example
     * // Update or create a Suite
     * const suite = await prisma.suite.upsert({
     *   create: {
     *     // ... data to create a Suite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suite we want to update
     *   }
     * })
     */
    upsert<T extends SuiteUpsertArgs>(args: SelectSubset<T, SuiteUpsertArgs<ExtArgs>>): Prisma__SuiteClient<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Suites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiteCountArgs} args - Arguments to filter Suites to count.
     * @example
     * // Count the number of Suites
     * const count = await prisma.suite.count({
     *   where: {
     *     // ... the filter for the Suites we want to count
     *   }
     * })
    **/
    count<T extends SuiteCountArgs>(
      args?: Subset<T, SuiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuiteAggregateArgs>(args: Subset<T, SuiteAggregateArgs>): Prisma.PrismaPromise<GetSuiteAggregateType<T>>

    /**
     * Group by Suite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiteGroupByArgs} args - Group by arguments.
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
      T extends SuiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuiteGroupByArgs['orderBy'] }
        : { orderBy?: SuiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suite model
   */
  readonly fields: SuiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testRuns<T extends Suite$testRunsArgs<ExtArgs> = {}>(args?: Subset<T, Suite$testRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Suite model
   */ 
  interface SuiteFieldRefs {
    readonly id: FieldRef<"Suite", 'Int'>
    readonly projectId: FieldRef<"Suite", 'Int'>
    readonly name: FieldRef<"Suite", 'String'>
    readonly createdAt: FieldRef<"Suite", 'DateTime'>
    readonly updatedAt: FieldRef<"Suite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Suite findUnique
   */
  export type SuiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suite
     */
    select?: SuiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiteInclude<ExtArgs> | null
    /**
     * Filter, which Suite to fetch.
     */
    where: SuiteWhereUniqueInput
  }

  /**
   * Suite findUniqueOrThrow
   */
  export type SuiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suite
     */
    select?: SuiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiteInclude<ExtArgs> | null
    /**
     * Filter, which Suite to fetch.
     */
    where: SuiteWhereUniqueInput
  }

  /**
   * Suite findFirst
   */
  export type SuiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suite
     */
    select?: SuiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiteInclude<ExtArgs> | null
    /**
     * Filter, which Suite to fetch.
     */
    where?: SuiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suites to fetch.
     */
    orderBy?: SuiteOrderByWithRelationInput | SuiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suites.
     */
    cursor?: SuiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suites.
     */
    distinct?: SuiteScalarFieldEnum | SuiteScalarFieldEnum[]
  }

  /**
   * Suite findFirstOrThrow
   */
  export type SuiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suite
     */
    select?: SuiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiteInclude<ExtArgs> | null
    /**
     * Filter, which Suite to fetch.
     */
    where?: SuiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suites to fetch.
     */
    orderBy?: SuiteOrderByWithRelationInput | SuiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suites.
     */
    cursor?: SuiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suites.
     */
    distinct?: SuiteScalarFieldEnum | SuiteScalarFieldEnum[]
  }

  /**
   * Suite findMany
   */
  export type SuiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suite
     */
    select?: SuiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiteInclude<ExtArgs> | null
    /**
     * Filter, which Suites to fetch.
     */
    where?: SuiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suites to fetch.
     */
    orderBy?: SuiteOrderByWithRelationInput | SuiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suites.
     */
    cursor?: SuiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suites.
     */
    skip?: number
    distinct?: SuiteScalarFieldEnum | SuiteScalarFieldEnum[]
  }

  /**
   * Suite create
   */
  export type SuiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suite
     */
    select?: SuiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Suite.
     */
    data: XOR<SuiteCreateInput, SuiteUncheckedCreateInput>
  }

  /**
   * Suite createMany
   */
  export type SuiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suites.
     */
    data: SuiteCreateManyInput | SuiteCreateManyInput[]
  }

  /**
   * Suite createManyAndReturn
   */
  export type SuiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suite
     */
    select?: SuiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Suites.
     */
    data: SuiteCreateManyInput | SuiteCreateManyInput[]
  }

  /**
   * Suite update
   */
  export type SuiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suite
     */
    select?: SuiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Suite.
     */
    data: XOR<SuiteUpdateInput, SuiteUncheckedUpdateInput>
    /**
     * Choose, which Suite to update.
     */
    where: SuiteWhereUniqueInput
  }

  /**
   * Suite updateMany
   */
  export type SuiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suites.
     */
    data: XOR<SuiteUpdateManyMutationInput, SuiteUncheckedUpdateManyInput>
    /**
     * Filter which Suites to update
     */
    where?: SuiteWhereInput
  }

  /**
   * Suite upsert
   */
  export type SuiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suite
     */
    select?: SuiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Suite to update in case it exists.
     */
    where: SuiteWhereUniqueInput
    /**
     * In case the Suite found by the `where` argument doesn't exist, create a new Suite with this data.
     */
    create: XOR<SuiteCreateInput, SuiteUncheckedCreateInput>
    /**
     * In case the Suite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuiteUpdateInput, SuiteUncheckedUpdateInput>
  }

  /**
   * Suite delete
   */
  export type SuiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suite
     */
    select?: SuiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiteInclude<ExtArgs> | null
    /**
     * Filter which Suite to delete.
     */
    where: SuiteWhereUniqueInput
  }

  /**
   * Suite deleteMany
   */
  export type SuiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suites to delete
     */
    where?: SuiteWhereInput
  }

  /**
   * Suite.testRuns
   */
  export type Suite$testRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    where?: TestRunWhereInput
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    cursor?: TestRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * Suite without action
   */
  export type SuiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suite
     */
    select?: SuiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiteInclude<ExtArgs> | null
  }


  /**
   * Model TestRun
   */

  export type AggregateTestRun = {
    _count: TestRunCountAggregateOutputType | null
    _avg: TestRunAvgAggregateOutputType | null
    _sum: TestRunSumAggregateOutputType | null
    _min: TestRunMinAggregateOutputType | null
    _max: TestRunMaxAggregateOutputType | null
  }

  export type TestRunAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    suiteId: number | null
    version: number | null
  }

  export type TestRunSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    suiteId: number | null
    version: number | null
  }

  export type TestRunMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    suiteId: number | null
    name: string | null
    description: string | null
    createdBy: string | null
    deletedAt: Date | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestRunMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    suiteId: number | null
    name: string | null
    description: string | null
    createdBy: string | null
    deletedAt: Date | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestRunCountAggregateOutputType = {
    id: number
    projectId: number
    suiteId: number
    name: number
    description: number
    createdBy: number
    deletedAt: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestRunAvgAggregateInputType = {
    id?: true
    projectId?: true
    suiteId?: true
    version?: true
  }

  export type TestRunSumAggregateInputType = {
    id?: true
    projectId?: true
    suiteId?: true
    version?: true
  }

  export type TestRunMinAggregateInputType = {
    id?: true
    projectId?: true
    suiteId?: true
    name?: true
    description?: true
    createdBy?: true
    deletedAt?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestRunMaxAggregateInputType = {
    id?: true
    projectId?: true
    suiteId?: true
    name?: true
    description?: true
    createdBy?: true
    deletedAt?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestRunCountAggregateInputType = {
    id?: true
    projectId?: true
    suiteId?: true
    name?: true
    description?: true
    createdBy?: true
    deletedAt?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestRun to aggregate.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestRuns
    **/
    _count?: true | TestRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestRunMaxAggregateInputType
  }

  export type GetTestRunAggregateType<T extends TestRunAggregateArgs> = {
        [P in keyof T & keyof AggregateTestRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestRun[P]>
      : GetScalarType<T[P], AggregateTestRun[P]>
  }




  export type TestRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestRunWhereInput
    orderBy?: TestRunOrderByWithAggregationInput | TestRunOrderByWithAggregationInput[]
    by: TestRunScalarFieldEnum[] | TestRunScalarFieldEnum
    having?: TestRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestRunCountAggregateInputType | true
    _avg?: TestRunAvgAggregateInputType
    _sum?: TestRunSumAggregateInputType
    _min?: TestRunMinAggregateInputType
    _max?: TestRunMaxAggregateInputType
  }

  export type TestRunGroupByOutputType = {
    id: number
    projectId: number
    suiteId: number | null
    name: string
    description: string | null
    createdBy: string | null
    deletedAt: Date | null
    version: number
    createdAt: Date
    updatedAt: Date
    _count: TestRunCountAggregateOutputType | null
    _avg: TestRunAvgAggregateOutputType | null
    _sum: TestRunSumAggregateOutputType | null
    _min: TestRunMinAggregateOutputType | null
    _max: TestRunMaxAggregateOutputType | null
  }

  type GetTestRunGroupByPayload<T extends TestRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestRunGroupByOutputType[P]>
            : GetScalarType<T[P], TestRunGroupByOutputType[P]>
        }
      >
    >


  export type TestRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    suiteId?: boolean
    name?: boolean
    description?: boolean
    createdBy?: boolean
    deletedAt?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    suite?: boolean | TestRun$suiteArgs<ExtArgs>
    results?: boolean | TestRun$resultsArgs<ExtArgs>
    _count?: boolean | TestRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testRun"]>

  export type TestRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    suiteId?: boolean
    name?: boolean
    description?: boolean
    createdBy?: boolean
    deletedAt?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    suite?: boolean | TestRun$suiteArgs<ExtArgs>
  }, ExtArgs["result"]["testRun"]>

  export type TestRunSelectScalar = {
    id?: boolean
    projectId?: boolean
    suiteId?: boolean
    name?: boolean
    description?: boolean
    createdBy?: boolean
    deletedAt?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    suite?: boolean | TestRun$suiteArgs<ExtArgs>
    results?: boolean | TestRun$resultsArgs<ExtArgs>
    _count?: boolean | TestRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    suite?: boolean | TestRun$suiteArgs<ExtArgs>
  }

  export type $TestRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestRun"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      suite: Prisma.$SuitePayload<ExtArgs> | null
      results: Prisma.$TestResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      suiteId: number | null
      name: string
      description: string | null
      createdBy: string | null
      deletedAt: Date | null
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testRun"]>
    composites: {}
  }

  type TestRunGetPayload<S extends boolean | null | undefined | TestRunDefaultArgs> = $Result.GetResult<Prisma.$TestRunPayload, S>

  type TestRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestRunFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestRunCountAggregateInputType | true
    }

  export interface TestRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestRun'], meta: { name: 'TestRun' } }
    /**
     * Find zero or one TestRun that matches the filter.
     * @param {TestRunFindUniqueArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestRunFindUniqueArgs>(args: SelectSubset<T, TestRunFindUniqueArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TestRun that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TestRunFindUniqueOrThrowArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestRunFindUniqueOrThrowArgs>(args: SelectSubset<T, TestRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TestRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunFindFirstArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestRunFindFirstArgs>(args?: SelectSubset<T, TestRunFindFirstArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TestRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunFindFirstOrThrowArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestRunFindFirstOrThrowArgs>(args?: SelectSubset<T, TestRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TestRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestRuns
     * const testRuns = await prisma.testRun.findMany()
     * 
     * // Get first 10 TestRuns
     * const testRuns = await prisma.testRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testRunWithIdOnly = await prisma.testRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestRunFindManyArgs>(args?: SelectSubset<T, TestRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TestRun.
     * @param {TestRunCreateArgs} args - Arguments to create a TestRun.
     * @example
     * // Create one TestRun
     * const TestRun = await prisma.testRun.create({
     *   data: {
     *     // ... data to create a TestRun
     *   }
     * })
     * 
     */
    create<T extends TestRunCreateArgs>(args: SelectSubset<T, TestRunCreateArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TestRuns.
     * @param {TestRunCreateManyArgs} args - Arguments to create many TestRuns.
     * @example
     * // Create many TestRuns
     * const testRun = await prisma.testRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestRunCreateManyArgs>(args?: SelectSubset<T, TestRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestRuns and returns the data saved in the database.
     * @param {TestRunCreateManyAndReturnArgs} args - Arguments to create many TestRuns.
     * @example
     * // Create many TestRuns
     * const testRun = await prisma.testRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestRuns and only return the `id`
     * const testRunWithIdOnly = await prisma.testRun.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestRunCreateManyAndReturnArgs>(args?: SelectSubset<T, TestRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TestRun.
     * @param {TestRunDeleteArgs} args - Arguments to delete one TestRun.
     * @example
     * // Delete one TestRun
     * const TestRun = await prisma.testRun.delete({
     *   where: {
     *     // ... filter to delete one TestRun
     *   }
     * })
     * 
     */
    delete<T extends TestRunDeleteArgs>(args: SelectSubset<T, TestRunDeleteArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TestRun.
     * @param {TestRunUpdateArgs} args - Arguments to update one TestRun.
     * @example
     * // Update one TestRun
     * const testRun = await prisma.testRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestRunUpdateArgs>(args: SelectSubset<T, TestRunUpdateArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TestRuns.
     * @param {TestRunDeleteManyArgs} args - Arguments to filter TestRuns to delete.
     * @example
     * // Delete a few TestRuns
     * const { count } = await prisma.testRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestRunDeleteManyArgs>(args?: SelectSubset<T, TestRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestRuns
     * const testRun = await prisma.testRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestRunUpdateManyArgs>(args: SelectSubset<T, TestRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestRun.
     * @param {TestRunUpsertArgs} args - Arguments to update or create a TestRun.
     * @example
     * // Update or create a TestRun
     * const testRun = await prisma.testRun.upsert({
     *   create: {
     *     // ... data to create a TestRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestRun we want to update
     *   }
     * })
     */
    upsert<T extends TestRunUpsertArgs>(args: SelectSubset<T, TestRunUpsertArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TestRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunCountArgs} args - Arguments to filter TestRuns to count.
     * @example
     * // Count the number of TestRuns
     * const count = await prisma.testRun.count({
     *   where: {
     *     // ... the filter for the TestRuns we want to count
     *   }
     * })
    **/
    count<T extends TestRunCountArgs>(
      args?: Subset<T, TestRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestRunAggregateArgs>(args: Subset<T, TestRunAggregateArgs>): Prisma.PrismaPromise<GetTestRunAggregateType<T>>

    /**
     * Group by TestRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunGroupByArgs} args - Group by arguments.
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
      T extends TestRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestRunGroupByArgs['orderBy'] }
        : { orderBy?: TestRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestRun model
   */
  readonly fields: TestRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    suite<T extends TestRun$suiteArgs<ExtArgs> = {}>(args?: Subset<T, TestRun$suiteArgs<ExtArgs>>): Prisma__SuiteClient<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    results<T extends TestRun$resultsArgs<ExtArgs> = {}>(args?: Subset<T, TestRun$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the TestRun model
   */ 
  interface TestRunFieldRefs {
    readonly id: FieldRef<"TestRun", 'Int'>
    readonly projectId: FieldRef<"TestRun", 'Int'>
    readonly suiteId: FieldRef<"TestRun", 'Int'>
    readonly name: FieldRef<"TestRun", 'String'>
    readonly description: FieldRef<"TestRun", 'String'>
    readonly createdBy: FieldRef<"TestRun", 'String'>
    readonly deletedAt: FieldRef<"TestRun", 'DateTime'>
    readonly version: FieldRef<"TestRun", 'Int'>
    readonly createdAt: FieldRef<"TestRun", 'DateTime'>
    readonly updatedAt: FieldRef<"TestRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestRun findUnique
   */
  export type TestRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun findUniqueOrThrow
   */
  export type TestRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun findFirst
   */
  export type TestRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestRuns.
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestRuns.
     */
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * TestRun findFirstOrThrow
   */
  export type TestRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestRuns.
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestRuns.
     */
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * TestRun findMany
   */
  export type TestRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRuns to fetch.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestRuns.
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * TestRun create
   */
  export type TestRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * The data needed to create a TestRun.
     */
    data: XOR<TestRunCreateInput, TestRunUncheckedCreateInput>
  }

  /**
   * TestRun createMany
   */
  export type TestRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestRuns.
     */
    data: TestRunCreateManyInput | TestRunCreateManyInput[]
  }

  /**
   * TestRun createManyAndReturn
   */
  export type TestRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TestRuns.
     */
    data: TestRunCreateManyInput | TestRunCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestRun update
   */
  export type TestRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * The data needed to update a TestRun.
     */
    data: XOR<TestRunUpdateInput, TestRunUncheckedUpdateInput>
    /**
     * Choose, which TestRun to update.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun updateMany
   */
  export type TestRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestRuns.
     */
    data: XOR<TestRunUpdateManyMutationInput, TestRunUncheckedUpdateManyInput>
    /**
     * Filter which TestRuns to update
     */
    where?: TestRunWhereInput
  }

  /**
   * TestRun upsert
   */
  export type TestRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * The filter to search for the TestRun to update in case it exists.
     */
    where: TestRunWhereUniqueInput
    /**
     * In case the TestRun found by the `where` argument doesn't exist, create a new TestRun with this data.
     */
    create: XOR<TestRunCreateInput, TestRunUncheckedCreateInput>
    /**
     * In case the TestRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestRunUpdateInput, TestRunUncheckedUpdateInput>
  }

  /**
   * TestRun delete
   */
  export type TestRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter which TestRun to delete.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun deleteMany
   */
  export type TestRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestRuns to delete
     */
    where?: TestRunWhereInput
  }

  /**
   * TestRun.suite
   */
  export type TestRun$suiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suite
     */
    select?: SuiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiteInclude<ExtArgs> | null
    where?: SuiteWhereInput
  }

  /**
   * TestRun.results
   */
  export type TestRun$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    where?: TestResultWhereInput
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    cursor?: TestResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestRun without action
   */
  export type TestRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
  }


  /**
   * Model TestResult
   */

  export type AggregateTestResult = {
    _count: TestResultCountAggregateOutputType | null
    _avg: TestResultAvgAggregateOutputType | null
    _sum: TestResultSumAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  export type TestResultAvgAggregateOutputType = {
    id: number | null
    testRunId: number | null
    testCaseId: number | null
    version: number | null
  }

  export type TestResultSumAggregateOutputType = {
    id: number | null
    testRunId: number | null
    testCaseId: number | null
    version: number | null
  }

  export type TestResultMinAggregateOutputType = {
    id: number | null
    testRunId: number | null
    testCaseId: number | null
    testCaseName: string | null
    title: string | null
    preconditions: string | null
    steps: string | null
    expectedResult: string | null
    priority: string | null
    type: string | null
    snapshottedAt: Date | null
    status: string | null
    comment: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestResultMaxAggregateOutputType = {
    id: number | null
    testRunId: number | null
    testCaseId: number | null
    testCaseName: string | null
    title: string | null
    preconditions: string | null
    steps: string | null
    expectedResult: string | null
    priority: string | null
    type: string | null
    snapshottedAt: Date | null
    status: string | null
    comment: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestResultCountAggregateOutputType = {
    id: number
    testRunId: number
    testCaseId: number
    testCaseName: number
    title: number
    preconditions: number
    steps: number
    expectedResult: number
    priority: number
    type: number
    snapshottedAt: number
    status: number
    comment: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestResultAvgAggregateInputType = {
    id?: true
    testRunId?: true
    testCaseId?: true
    version?: true
  }

  export type TestResultSumAggregateInputType = {
    id?: true
    testRunId?: true
    testCaseId?: true
    version?: true
  }

  export type TestResultMinAggregateInputType = {
    id?: true
    testRunId?: true
    testCaseId?: true
    testCaseName?: true
    title?: true
    preconditions?: true
    steps?: true
    expectedResult?: true
    priority?: true
    type?: true
    snapshottedAt?: true
    status?: true
    comment?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestResultMaxAggregateInputType = {
    id?: true
    testRunId?: true
    testCaseId?: true
    testCaseName?: true
    title?: true
    preconditions?: true
    steps?: true
    expectedResult?: true
    priority?: true
    type?: true
    snapshottedAt?: true
    status?: true
    comment?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestResultCountAggregateInputType = {
    id?: true
    testRunId?: true
    testCaseId?: true
    testCaseName?: true
    title?: true
    preconditions?: true
    steps?: true
    expectedResult?: true
    priority?: true
    type?: true
    snapshottedAt?: true
    status?: true
    comment?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestResult to aggregate.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestResults
    **/
    _count?: true | TestResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestResultMaxAggregateInputType
  }

  export type GetTestResultAggregateType<T extends TestResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTestResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestResult[P]>
      : GetScalarType<T[P], AggregateTestResult[P]>
  }




  export type TestResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestResultWhereInput
    orderBy?: TestResultOrderByWithAggregationInput | TestResultOrderByWithAggregationInput[]
    by: TestResultScalarFieldEnum[] | TestResultScalarFieldEnum
    having?: TestResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestResultCountAggregateInputType | true
    _avg?: TestResultAvgAggregateInputType
    _sum?: TestResultSumAggregateInputType
    _min?: TestResultMinAggregateInputType
    _max?: TestResultMaxAggregateInputType
  }

  export type TestResultGroupByOutputType = {
    id: number
    testRunId: number
    testCaseId: number
    testCaseName: string | null
    title: string | null
    preconditions: string | null
    steps: string | null
    expectedResult: string | null
    priority: string | null
    type: string | null
    snapshottedAt: Date | null
    status: string
    comment: string | null
    version: number
    createdAt: Date
    updatedAt: Date
    _count: TestResultCountAggregateOutputType | null
    _avg: TestResultAvgAggregateOutputType | null
    _sum: TestResultSumAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  type GetTestResultGroupByPayload<T extends TestResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestResultGroupByOutputType[P]>
            : GetScalarType<T[P], TestResultGroupByOutputType[P]>
        }
      >
    >


  export type TestResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    testCaseId?: boolean
    testCaseName?: boolean
    title?: boolean
    preconditions?: boolean
    steps?: boolean
    expectedResult?: boolean
    priority?: boolean
    type?: boolean
    snapshottedAt?: boolean
    status?: boolean
    comment?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    testCaseId?: boolean
    testCaseName?: boolean
    title?: boolean
    preconditions?: boolean
    steps?: boolean
    expectedResult?: boolean
    priority?: boolean
    type?: boolean
    snapshottedAt?: boolean
    status?: boolean
    comment?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectScalar = {
    id?: boolean
    testRunId?: boolean
    testCaseId?: boolean
    testCaseName?: boolean
    title?: boolean
    preconditions?: boolean
    steps?: boolean
    expectedResult?: boolean
    priority?: boolean
    type?: boolean
    snapshottedAt?: boolean
    status?: boolean
    comment?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }
  export type TestResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }

  export type $TestResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestResult"
    objects: {
      testRun: Prisma.$TestRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      testRunId: number
      testCaseId: number
      testCaseName: string | null
      title: string | null
      preconditions: string | null
      steps: string | null
      expectedResult: string | null
      priority: string | null
      type: string | null
      snapshottedAt: Date | null
      status: string
      comment: string | null
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testResult"]>
    composites: {}
  }

  type TestResultGetPayload<S extends boolean | null | undefined | TestResultDefaultArgs> = $Result.GetResult<Prisma.$TestResultPayload, S>

  type TestResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestResultFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestResultCountAggregateInputType | true
    }

  export interface TestResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestResult'], meta: { name: 'TestResult' } }
    /**
     * Find zero or one TestResult that matches the filter.
     * @param {TestResultFindUniqueArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestResultFindUniqueArgs>(args: SelectSubset<T, TestResultFindUniqueArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TestResult that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TestResultFindUniqueOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestResultFindUniqueOrThrowArgs>(args: SelectSubset<T, TestResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TestResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestResultFindFirstArgs>(args?: SelectSubset<T, TestResultFindFirstArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TestResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestResultFindFirstOrThrowArgs>(args?: SelectSubset<T, TestResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TestResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestResults
     * const testResults = await prisma.testResult.findMany()
     * 
     * // Get first 10 TestResults
     * const testResults = await prisma.testResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testResultWithIdOnly = await prisma.testResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestResultFindManyArgs>(args?: SelectSubset<T, TestResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TestResult.
     * @param {TestResultCreateArgs} args - Arguments to create a TestResult.
     * @example
     * // Create one TestResult
     * const TestResult = await prisma.testResult.create({
     *   data: {
     *     // ... data to create a TestResult
     *   }
     * })
     * 
     */
    create<T extends TestResultCreateArgs>(args: SelectSubset<T, TestResultCreateArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TestResults.
     * @param {TestResultCreateManyArgs} args - Arguments to create many TestResults.
     * @example
     * // Create many TestResults
     * const testResult = await prisma.testResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestResultCreateManyArgs>(args?: SelectSubset<T, TestResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestResults and returns the data saved in the database.
     * @param {TestResultCreateManyAndReturnArgs} args - Arguments to create many TestResults.
     * @example
     * // Create many TestResults
     * const testResult = await prisma.testResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestResults and only return the `id`
     * const testResultWithIdOnly = await prisma.testResult.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestResultCreateManyAndReturnArgs>(args?: SelectSubset<T, TestResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TestResult.
     * @param {TestResultDeleteArgs} args - Arguments to delete one TestResult.
     * @example
     * // Delete one TestResult
     * const TestResult = await prisma.testResult.delete({
     *   where: {
     *     // ... filter to delete one TestResult
     *   }
     * })
     * 
     */
    delete<T extends TestResultDeleteArgs>(args: SelectSubset<T, TestResultDeleteArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TestResult.
     * @param {TestResultUpdateArgs} args - Arguments to update one TestResult.
     * @example
     * // Update one TestResult
     * const testResult = await prisma.testResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestResultUpdateArgs>(args: SelectSubset<T, TestResultUpdateArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TestResults.
     * @param {TestResultDeleteManyArgs} args - Arguments to filter TestResults to delete.
     * @example
     * // Delete a few TestResults
     * const { count } = await prisma.testResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestResultDeleteManyArgs>(args?: SelectSubset<T, TestResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestResults
     * const testResult = await prisma.testResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestResultUpdateManyArgs>(args: SelectSubset<T, TestResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestResult.
     * @param {TestResultUpsertArgs} args - Arguments to update or create a TestResult.
     * @example
     * // Update or create a TestResult
     * const testResult = await prisma.testResult.upsert({
     *   create: {
     *     // ... data to create a TestResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestResult we want to update
     *   }
     * })
     */
    upsert<T extends TestResultUpsertArgs>(args: SelectSubset<T, TestResultUpsertArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultCountArgs} args - Arguments to filter TestResults to count.
     * @example
     * // Count the number of TestResults
     * const count = await prisma.testResult.count({
     *   where: {
     *     // ... the filter for the TestResults we want to count
     *   }
     * })
    **/
    count<T extends TestResultCountArgs>(
      args?: Subset<T, TestResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestResultAggregateArgs>(args: Subset<T, TestResultAggregateArgs>): Prisma.PrismaPromise<GetTestResultAggregateType<T>>

    /**
     * Group by TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultGroupByArgs} args - Group by arguments.
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
      T extends TestResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestResultGroupByArgs['orderBy'] }
        : { orderBy?: TestResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestResult model
   */
  readonly fields: TestResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testRun<T extends TestRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestRunDefaultArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TestResult model
   */ 
  interface TestResultFieldRefs {
    readonly id: FieldRef<"TestResult", 'Int'>
    readonly testRunId: FieldRef<"TestResult", 'Int'>
    readonly testCaseId: FieldRef<"TestResult", 'Int'>
    readonly testCaseName: FieldRef<"TestResult", 'String'>
    readonly title: FieldRef<"TestResult", 'String'>
    readonly preconditions: FieldRef<"TestResult", 'String'>
    readonly steps: FieldRef<"TestResult", 'String'>
    readonly expectedResult: FieldRef<"TestResult", 'String'>
    readonly priority: FieldRef<"TestResult", 'String'>
    readonly type: FieldRef<"TestResult", 'String'>
    readonly snapshottedAt: FieldRef<"TestResult", 'DateTime'>
    readonly status: FieldRef<"TestResult", 'String'>
    readonly comment: FieldRef<"TestResult", 'String'>
    readonly version: FieldRef<"TestResult", 'Int'>
    readonly createdAt: FieldRef<"TestResult", 'DateTime'>
    readonly updatedAt: FieldRef<"TestResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestResult findUnique
   */
  export type TestResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult findUniqueOrThrow
   */
  export type TestResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult findFirst
   */
  export type TestResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult findFirstOrThrow
   */
  export type TestResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult findMany
   */
  export type TestResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResults to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult create
   */
  export type TestResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The data needed to create a TestResult.
     */
    data: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
  }

  /**
   * TestResult createMany
   */
  export type TestResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestResults.
     */
    data: TestResultCreateManyInput | TestResultCreateManyInput[]
  }

  /**
   * TestResult createManyAndReturn
   */
  export type TestResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TestResults.
     */
    data: TestResultCreateManyInput | TestResultCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestResult update
   */
  export type TestResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The data needed to update a TestResult.
     */
    data: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
    /**
     * Choose, which TestResult to update.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult updateMany
   */
  export type TestResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestResults.
     */
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyInput>
    /**
     * Filter which TestResults to update
     */
    where?: TestResultWhereInput
  }

  /**
   * TestResult upsert
   */
  export type TestResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The filter to search for the TestResult to update in case it exists.
     */
    where: TestResultWhereUniqueInput
    /**
     * In case the TestResult found by the `where` argument doesn't exist, create a new TestResult with this data.
     */
    create: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
    /**
     * In case the TestResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
  }

  /**
   * TestResult delete
   */
  export type TestResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter which TestResult to delete.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult deleteMany
   */
  export type TestResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestResults to delete
     */
    where?: TestResultWhereInput
  }

  /**
   * TestResult without action
   */
  export type TestResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
  }


  /**
   * Model IdempotencyKey
   */

  export type AggregateIdempotencyKey = {
    _count: IdempotencyKeyCountAggregateOutputType | null
    _avg: IdempotencyKeyAvgAggregateOutputType | null
    _sum: IdempotencyKeySumAggregateOutputType | null
    _min: IdempotencyKeyMinAggregateOutputType | null
    _max: IdempotencyKeyMaxAggregateOutputType | null
  }

  export type IdempotencyKeyAvgAggregateOutputType = {
    id: number | null
    statusCode: number | null
  }

  export type IdempotencyKeySumAggregateOutputType = {
    id: number | null
    statusCode: number | null
  }

  export type IdempotencyKeyMinAggregateOutputType = {
    id: number | null
    key: string | null
    service: string | null
    endpoint: string | null
    requestHash: string | null
    response: string | null
    statusCode: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type IdempotencyKeyMaxAggregateOutputType = {
    id: number | null
    key: string | null
    service: string | null
    endpoint: string | null
    requestHash: string | null
    response: string | null
    statusCode: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type IdempotencyKeyCountAggregateOutputType = {
    id: number
    key: number
    service: number
    endpoint: number
    requestHash: number
    response: number
    statusCode: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type IdempotencyKeyAvgAggregateInputType = {
    id?: true
    statusCode?: true
  }

  export type IdempotencyKeySumAggregateInputType = {
    id?: true
    statusCode?: true
  }

  export type IdempotencyKeyMinAggregateInputType = {
    id?: true
    key?: true
    service?: true
    endpoint?: true
    requestHash?: true
    response?: true
    statusCode?: true
    expiresAt?: true
    createdAt?: true
  }

  export type IdempotencyKeyMaxAggregateInputType = {
    id?: true
    key?: true
    service?: true
    endpoint?: true
    requestHash?: true
    response?: true
    statusCode?: true
    expiresAt?: true
    createdAt?: true
  }

  export type IdempotencyKeyCountAggregateInputType = {
    id?: true
    key?: true
    service?: true
    endpoint?: true
    requestHash?: true
    response?: true
    statusCode?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type IdempotencyKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdempotencyKey to aggregate.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdempotencyKeys
    **/
    _count?: true | IdempotencyKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdempotencyKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdempotencyKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdempotencyKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdempotencyKeyMaxAggregateInputType
  }

  export type GetIdempotencyKeyAggregateType<T extends IdempotencyKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateIdempotencyKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdempotencyKey[P]>
      : GetScalarType<T[P], AggregateIdempotencyKey[P]>
  }




  export type IdempotencyKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdempotencyKeyWhereInput
    orderBy?: IdempotencyKeyOrderByWithAggregationInput | IdempotencyKeyOrderByWithAggregationInput[]
    by: IdempotencyKeyScalarFieldEnum[] | IdempotencyKeyScalarFieldEnum
    having?: IdempotencyKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdempotencyKeyCountAggregateInputType | true
    _avg?: IdempotencyKeyAvgAggregateInputType
    _sum?: IdempotencyKeySumAggregateInputType
    _min?: IdempotencyKeyMinAggregateInputType
    _max?: IdempotencyKeyMaxAggregateInputType
  }

  export type IdempotencyKeyGroupByOutputType = {
    id: number
    key: string
    service: string
    endpoint: string
    requestHash: string | null
    response: string
    statusCode: number
    expiresAt: Date | null
    createdAt: Date
    _count: IdempotencyKeyCountAggregateOutputType | null
    _avg: IdempotencyKeyAvgAggregateOutputType | null
    _sum: IdempotencyKeySumAggregateOutputType | null
    _min: IdempotencyKeyMinAggregateOutputType | null
    _max: IdempotencyKeyMaxAggregateOutputType | null
  }

  type GetIdempotencyKeyGroupByPayload<T extends IdempotencyKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdempotencyKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdempotencyKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]>
            : GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]>
        }
      >
    >


  export type IdempotencyKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    service?: boolean
    endpoint?: boolean
    requestHash?: boolean
    response?: boolean
    statusCode?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["idempotencyKey"]>

  export type IdempotencyKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    service?: boolean
    endpoint?: boolean
    requestHash?: boolean
    response?: boolean
    statusCode?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["idempotencyKey"]>

  export type IdempotencyKeySelectScalar = {
    id?: boolean
    key?: boolean
    service?: boolean
    endpoint?: boolean
    requestHash?: boolean
    response?: boolean
    statusCode?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }


  export type $IdempotencyKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdempotencyKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      service: string
      endpoint: string
      requestHash: string | null
      response: string
      statusCode: number
      expiresAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["idempotencyKey"]>
    composites: {}
  }

  type IdempotencyKeyGetPayload<S extends boolean | null | undefined | IdempotencyKeyDefaultArgs> = $Result.GetResult<Prisma.$IdempotencyKeyPayload, S>

  type IdempotencyKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IdempotencyKeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IdempotencyKeyCountAggregateInputType | true
    }

  export interface IdempotencyKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdempotencyKey'], meta: { name: 'IdempotencyKey' } }
    /**
     * Find zero or one IdempotencyKey that matches the filter.
     * @param {IdempotencyKeyFindUniqueArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdempotencyKeyFindUniqueArgs>(args: SelectSubset<T, IdempotencyKeyFindUniqueArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IdempotencyKey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IdempotencyKeyFindUniqueOrThrowArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdempotencyKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IdempotencyKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindFirstArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdempotencyKeyFindFirstArgs>(args?: SelectSubset<T, IdempotencyKeyFindFirstArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IdempotencyKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindFirstOrThrowArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdempotencyKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IdempotencyKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdempotencyKeys
     * const idempotencyKeys = await prisma.idempotencyKey.findMany()
     * 
     * // Get first 10 IdempotencyKeys
     * const idempotencyKeys = await prisma.idempotencyKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idempotencyKeyWithIdOnly = await prisma.idempotencyKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdempotencyKeyFindManyArgs>(args?: SelectSubset<T, IdempotencyKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IdempotencyKey.
     * @param {IdempotencyKeyCreateArgs} args - Arguments to create a IdempotencyKey.
     * @example
     * // Create one IdempotencyKey
     * const IdempotencyKey = await prisma.idempotencyKey.create({
     *   data: {
     *     // ... data to create a IdempotencyKey
     *   }
     * })
     * 
     */
    create<T extends IdempotencyKeyCreateArgs>(args: SelectSubset<T, IdempotencyKeyCreateArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IdempotencyKeys.
     * @param {IdempotencyKeyCreateManyArgs} args - Arguments to create many IdempotencyKeys.
     * @example
     * // Create many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdempotencyKeyCreateManyArgs>(args?: SelectSubset<T, IdempotencyKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdempotencyKeys and returns the data saved in the database.
     * @param {IdempotencyKeyCreateManyAndReturnArgs} args - Arguments to create many IdempotencyKeys.
     * @example
     * // Create many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IdempotencyKeys and only return the `id`
     * const idempotencyKeyWithIdOnly = await prisma.idempotencyKey.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdempotencyKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, IdempotencyKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IdempotencyKey.
     * @param {IdempotencyKeyDeleteArgs} args - Arguments to delete one IdempotencyKey.
     * @example
     * // Delete one IdempotencyKey
     * const IdempotencyKey = await prisma.idempotencyKey.delete({
     *   where: {
     *     // ... filter to delete one IdempotencyKey
     *   }
     * })
     * 
     */
    delete<T extends IdempotencyKeyDeleteArgs>(args: SelectSubset<T, IdempotencyKeyDeleteArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IdempotencyKey.
     * @param {IdempotencyKeyUpdateArgs} args - Arguments to update one IdempotencyKey.
     * @example
     * // Update one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdempotencyKeyUpdateArgs>(args: SelectSubset<T, IdempotencyKeyUpdateArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IdempotencyKeys.
     * @param {IdempotencyKeyDeleteManyArgs} args - Arguments to filter IdempotencyKeys to delete.
     * @example
     * // Delete a few IdempotencyKeys
     * const { count } = await prisma.idempotencyKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdempotencyKeyDeleteManyArgs>(args?: SelectSubset<T, IdempotencyKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdempotencyKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdempotencyKeyUpdateManyArgs>(args: SelectSubset<T, IdempotencyKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IdempotencyKey.
     * @param {IdempotencyKeyUpsertArgs} args - Arguments to update or create a IdempotencyKey.
     * @example
     * // Update or create a IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.upsert({
     *   create: {
     *     // ... data to create a IdempotencyKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdempotencyKey we want to update
     *   }
     * })
     */
    upsert<T extends IdempotencyKeyUpsertArgs>(args: SelectSubset<T, IdempotencyKeyUpsertArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IdempotencyKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyCountArgs} args - Arguments to filter IdempotencyKeys to count.
     * @example
     * // Count the number of IdempotencyKeys
     * const count = await prisma.idempotencyKey.count({
     *   where: {
     *     // ... the filter for the IdempotencyKeys we want to count
     *   }
     * })
    **/
    count<T extends IdempotencyKeyCountArgs>(
      args?: Subset<T, IdempotencyKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdempotencyKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdempotencyKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdempotencyKeyAggregateArgs>(args: Subset<T, IdempotencyKeyAggregateArgs>): Prisma.PrismaPromise<GetIdempotencyKeyAggregateType<T>>

    /**
     * Group by IdempotencyKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyGroupByArgs} args - Group by arguments.
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
      T extends IdempotencyKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdempotencyKeyGroupByArgs['orderBy'] }
        : { orderBy?: IdempotencyKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IdempotencyKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdempotencyKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdempotencyKey model
   */
  readonly fields: IdempotencyKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdempotencyKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdempotencyKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IdempotencyKey model
   */ 
  interface IdempotencyKeyFieldRefs {
    readonly id: FieldRef<"IdempotencyKey", 'Int'>
    readonly key: FieldRef<"IdempotencyKey", 'String'>
    readonly service: FieldRef<"IdempotencyKey", 'String'>
    readonly endpoint: FieldRef<"IdempotencyKey", 'String'>
    readonly requestHash: FieldRef<"IdempotencyKey", 'String'>
    readonly response: FieldRef<"IdempotencyKey", 'String'>
    readonly statusCode: FieldRef<"IdempotencyKey", 'Int'>
    readonly expiresAt: FieldRef<"IdempotencyKey", 'DateTime'>
    readonly createdAt: FieldRef<"IdempotencyKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IdempotencyKey findUnique
   */
  export type IdempotencyKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey findUniqueOrThrow
   */
  export type IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey findFirst
   */
  export type IdempotencyKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdempotencyKeys.
     */
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey findFirstOrThrow
   */
  export type IdempotencyKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdempotencyKeys.
     */
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey findMany
   */
  export type IdempotencyKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Filter, which IdempotencyKeys to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey create
   */
  export type IdempotencyKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * The data needed to create a IdempotencyKey.
     */
    data: XOR<IdempotencyKeyCreateInput, IdempotencyKeyUncheckedCreateInput>
  }

  /**
   * IdempotencyKey createMany
   */
  export type IdempotencyKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdempotencyKeys.
     */
    data: IdempotencyKeyCreateManyInput | IdempotencyKeyCreateManyInput[]
  }

  /**
   * IdempotencyKey createManyAndReturn
   */
  export type IdempotencyKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IdempotencyKeys.
     */
    data: IdempotencyKeyCreateManyInput | IdempotencyKeyCreateManyInput[]
  }

  /**
   * IdempotencyKey update
   */
  export type IdempotencyKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * The data needed to update a IdempotencyKey.
     */
    data: XOR<IdempotencyKeyUpdateInput, IdempotencyKeyUncheckedUpdateInput>
    /**
     * Choose, which IdempotencyKey to update.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey updateMany
   */
  export type IdempotencyKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdempotencyKeys.
     */
    data: XOR<IdempotencyKeyUpdateManyMutationInput, IdempotencyKeyUncheckedUpdateManyInput>
    /**
     * Filter which IdempotencyKeys to update
     */
    where?: IdempotencyKeyWhereInput
  }

  /**
   * IdempotencyKey upsert
   */
  export type IdempotencyKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * The filter to search for the IdempotencyKey to update in case it exists.
     */
    where: IdempotencyKeyWhereUniqueInput
    /**
     * In case the IdempotencyKey found by the `where` argument doesn't exist, create a new IdempotencyKey with this data.
     */
    create: XOR<IdempotencyKeyCreateInput, IdempotencyKeyUncheckedCreateInput>
    /**
     * In case the IdempotencyKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdempotencyKeyUpdateInput, IdempotencyKeyUncheckedUpdateInput>
  }

  /**
   * IdempotencyKey delete
   */
  export type IdempotencyKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Filter which IdempotencyKey to delete.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey deleteMany
   */
  export type IdempotencyKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdempotencyKeys to delete
     */
    where?: IdempotencyKeyWhereInput
  }

  /**
   * IdempotencyKey without action
   */
  export type IdempotencyKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SuiteScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SuiteScalarFieldEnum = (typeof SuiteScalarFieldEnum)[keyof typeof SuiteScalarFieldEnum]


  export const TestRunScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    suiteId: 'suiteId',
    name: 'name',
    description: 'description',
    createdBy: 'createdBy',
    deletedAt: 'deletedAt',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestRunScalarFieldEnum = (typeof TestRunScalarFieldEnum)[keyof typeof TestRunScalarFieldEnum]


  export const TestResultScalarFieldEnum: {
    id: 'id',
    testRunId: 'testRunId',
    testCaseId: 'testCaseId',
    testCaseName: 'testCaseName',
    title: 'title',
    preconditions: 'preconditions',
    steps: 'steps',
    expectedResult: 'expectedResult',
    priority: 'priority',
    type: 'type',
    snapshottedAt: 'snapshottedAt',
    status: 'status',
    comment: 'comment',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestResultScalarFieldEnum = (typeof TestResultScalarFieldEnum)[keyof typeof TestResultScalarFieldEnum]


  export const IdempotencyKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    service: 'service',
    endpoint: 'endpoint',
    requestHash: 'requestHash',
    response: 'response',
    statusCode: 'statusCode',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type IdempotencyKeyScalarFieldEnum = (typeof IdempotencyKeyScalarFieldEnum)[keyof typeof IdempotencyKeyScalarFieldEnum]


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


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    testRuns?: TestRunListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testRuns?: TestRunOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    testRuns?: TestRunListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type SuiteWhereInput = {
    AND?: SuiteWhereInput | SuiteWhereInput[]
    OR?: SuiteWhereInput[]
    NOT?: SuiteWhereInput | SuiteWhereInput[]
    id?: IntFilter<"Suite"> | number
    projectId?: IntFilter<"Suite"> | number
    name?: StringFilter<"Suite"> | string
    createdAt?: DateTimeFilter<"Suite"> | Date | string
    updatedAt?: DateTimeFilter<"Suite"> | Date | string
    testRuns?: TestRunListRelationFilter
  }

  export type SuiteOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testRuns?: TestRunOrderByRelationAggregateInput
  }

  export type SuiteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SuiteWhereInput | SuiteWhereInput[]
    OR?: SuiteWhereInput[]
    NOT?: SuiteWhereInput | SuiteWhereInput[]
    projectId?: IntFilter<"Suite"> | number
    name?: StringFilter<"Suite"> | string
    createdAt?: DateTimeFilter<"Suite"> | Date | string
    updatedAt?: DateTimeFilter<"Suite"> | Date | string
    testRuns?: TestRunListRelationFilter
  }, "id">

  export type SuiteOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SuiteCountOrderByAggregateInput
    _avg?: SuiteAvgOrderByAggregateInput
    _max?: SuiteMaxOrderByAggregateInput
    _min?: SuiteMinOrderByAggregateInput
    _sum?: SuiteSumOrderByAggregateInput
  }

  export type SuiteScalarWhereWithAggregatesInput = {
    AND?: SuiteScalarWhereWithAggregatesInput | SuiteScalarWhereWithAggregatesInput[]
    OR?: SuiteScalarWhereWithAggregatesInput[]
    NOT?: SuiteScalarWhereWithAggregatesInput | SuiteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Suite"> | number
    projectId?: IntWithAggregatesFilter<"Suite"> | number
    name?: StringWithAggregatesFilter<"Suite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Suite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Suite"> | Date | string
  }

  export type TestRunWhereInput = {
    AND?: TestRunWhereInput | TestRunWhereInput[]
    OR?: TestRunWhereInput[]
    NOT?: TestRunWhereInput | TestRunWhereInput[]
    id?: IntFilter<"TestRun"> | number
    projectId?: IntFilter<"TestRun"> | number
    suiteId?: IntNullableFilter<"TestRun"> | number | null
    name?: StringFilter<"TestRun"> | string
    description?: StringNullableFilter<"TestRun"> | string | null
    createdBy?: StringNullableFilter<"TestRun"> | string | null
    deletedAt?: DateTimeNullableFilter<"TestRun"> | Date | string | null
    version?: IntFilter<"TestRun"> | number
    createdAt?: DateTimeFilter<"TestRun"> | Date | string
    updatedAt?: DateTimeFilter<"TestRun"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    suite?: XOR<SuiteNullableRelationFilter, SuiteWhereInput> | null
    results?: TestResultListRelationFilter
  }

  export type TestRunOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    suite?: SuiteOrderByWithRelationInput
    results?: TestResultOrderByRelationAggregateInput
  }

  export type TestRunWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestRunWhereInput | TestRunWhereInput[]
    OR?: TestRunWhereInput[]
    NOT?: TestRunWhereInput | TestRunWhereInput[]
    projectId?: IntFilter<"TestRun"> | number
    suiteId?: IntNullableFilter<"TestRun"> | number | null
    name?: StringFilter<"TestRun"> | string
    description?: StringNullableFilter<"TestRun"> | string | null
    createdBy?: StringNullableFilter<"TestRun"> | string | null
    deletedAt?: DateTimeNullableFilter<"TestRun"> | Date | string | null
    version?: IntFilter<"TestRun"> | number
    createdAt?: DateTimeFilter<"TestRun"> | Date | string
    updatedAt?: DateTimeFilter<"TestRun"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    suite?: XOR<SuiteNullableRelationFilter, SuiteWhereInput> | null
    results?: TestResultListRelationFilter
  }, "id">

  export type TestRunOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestRunCountOrderByAggregateInput
    _avg?: TestRunAvgOrderByAggregateInput
    _max?: TestRunMaxOrderByAggregateInput
    _min?: TestRunMinOrderByAggregateInput
    _sum?: TestRunSumOrderByAggregateInput
  }

  export type TestRunScalarWhereWithAggregatesInput = {
    AND?: TestRunScalarWhereWithAggregatesInput | TestRunScalarWhereWithAggregatesInput[]
    OR?: TestRunScalarWhereWithAggregatesInput[]
    NOT?: TestRunScalarWhereWithAggregatesInput | TestRunScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestRun"> | number
    projectId?: IntWithAggregatesFilter<"TestRun"> | number
    suiteId?: IntNullableWithAggregatesFilter<"TestRun"> | number | null
    name?: StringWithAggregatesFilter<"TestRun"> | string
    description?: StringNullableWithAggregatesFilter<"TestRun"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"TestRun"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TestRun"> | Date | string | null
    version?: IntWithAggregatesFilter<"TestRun"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TestRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestRun"> | Date | string
  }

  export type TestResultWhereInput = {
    AND?: TestResultWhereInput | TestResultWhereInput[]
    OR?: TestResultWhereInput[]
    NOT?: TestResultWhereInput | TestResultWhereInput[]
    id?: IntFilter<"TestResult"> | number
    testRunId?: IntFilter<"TestResult"> | number
    testCaseId?: IntFilter<"TestResult"> | number
    testCaseName?: StringNullableFilter<"TestResult"> | string | null
    title?: StringNullableFilter<"TestResult"> | string | null
    preconditions?: StringNullableFilter<"TestResult"> | string | null
    steps?: StringNullableFilter<"TestResult"> | string | null
    expectedResult?: StringNullableFilter<"TestResult"> | string | null
    priority?: StringNullableFilter<"TestResult"> | string | null
    type?: StringNullableFilter<"TestResult"> | string | null
    snapshottedAt?: DateTimeNullableFilter<"TestResult"> | Date | string | null
    status?: StringFilter<"TestResult"> | string
    comment?: StringNullableFilter<"TestResult"> | string | null
    version?: IntFilter<"TestResult"> | number
    createdAt?: DateTimeFilter<"TestResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestResult"> | Date | string
    testRun?: XOR<TestRunRelationFilter, TestRunWhereInput>
  }

  export type TestResultOrderByWithRelationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    testCaseId?: SortOrder
    testCaseName?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    preconditions?: SortOrderInput | SortOrder
    steps?: SortOrderInput | SortOrder
    expectedResult?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    snapshottedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testRun?: TestRunOrderByWithRelationInput
  }

  export type TestResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestResultWhereInput | TestResultWhereInput[]
    OR?: TestResultWhereInput[]
    NOT?: TestResultWhereInput | TestResultWhereInput[]
    testRunId?: IntFilter<"TestResult"> | number
    testCaseId?: IntFilter<"TestResult"> | number
    testCaseName?: StringNullableFilter<"TestResult"> | string | null
    title?: StringNullableFilter<"TestResult"> | string | null
    preconditions?: StringNullableFilter<"TestResult"> | string | null
    steps?: StringNullableFilter<"TestResult"> | string | null
    expectedResult?: StringNullableFilter<"TestResult"> | string | null
    priority?: StringNullableFilter<"TestResult"> | string | null
    type?: StringNullableFilter<"TestResult"> | string | null
    snapshottedAt?: DateTimeNullableFilter<"TestResult"> | Date | string | null
    status?: StringFilter<"TestResult"> | string
    comment?: StringNullableFilter<"TestResult"> | string | null
    version?: IntFilter<"TestResult"> | number
    createdAt?: DateTimeFilter<"TestResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestResult"> | Date | string
    testRun?: XOR<TestRunRelationFilter, TestRunWhereInput>
  }, "id">

  export type TestResultOrderByWithAggregationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    testCaseId?: SortOrder
    testCaseName?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    preconditions?: SortOrderInput | SortOrder
    steps?: SortOrderInput | SortOrder
    expectedResult?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    snapshottedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestResultCountOrderByAggregateInput
    _avg?: TestResultAvgOrderByAggregateInput
    _max?: TestResultMaxOrderByAggregateInput
    _min?: TestResultMinOrderByAggregateInput
    _sum?: TestResultSumOrderByAggregateInput
  }

  export type TestResultScalarWhereWithAggregatesInput = {
    AND?: TestResultScalarWhereWithAggregatesInput | TestResultScalarWhereWithAggregatesInput[]
    OR?: TestResultScalarWhereWithAggregatesInput[]
    NOT?: TestResultScalarWhereWithAggregatesInput | TestResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestResult"> | number
    testRunId?: IntWithAggregatesFilter<"TestResult"> | number
    testCaseId?: IntWithAggregatesFilter<"TestResult"> | number
    testCaseName?: StringNullableWithAggregatesFilter<"TestResult"> | string | null
    title?: StringNullableWithAggregatesFilter<"TestResult"> | string | null
    preconditions?: StringNullableWithAggregatesFilter<"TestResult"> | string | null
    steps?: StringNullableWithAggregatesFilter<"TestResult"> | string | null
    expectedResult?: StringNullableWithAggregatesFilter<"TestResult"> | string | null
    priority?: StringNullableWithAggregatesFilter<"TestResult"> | string | null
    type?: StringNullableWithAggregatesFilter<"TestResult"> | string | null
    snapshottedAt?: DateTimeNullableWithAggregatesFilter<"TestResult"> | Date | string | null
    status?: StringWithAggregatesFilter<"TestResult"> | string
    comment?: StringNullableWithAggregatesFilter<"TestResult"> | string | null
    version?: IntWithAggregatesFilter<"TestResult"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TestResult"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestResult"> | Date | string
  }

  export type IdempotencyKeyWhereInput = {
    AND?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    OR?: IdempotencyKeyWhereInput[]
    NOT?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    id?: IntFilter<"IdempotencyKey"> | number
    key?: StringFilter<"IdempotencyKey"> | string
    service?: StringFilter<"IdempotencyKey"> | string
    endpoint?: StringFilter<"IdempotencyKey"> | string
    requestHash?: StringNullableFilter<"IdempotencyKey"> | string | null
    response?: StringFilter<"IdempotencyKey"> | string
    statusCode?: IntFilter<"IdempotencyKey"> | number
    expiresAt?: DateTimeNullableFilter<"IdempotencyKey"> | Date | string | null
    createdAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
  }

  export type IdempotencyKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    service?: SortOrder
    endpoint?: SortOrder
    requestHash?: SortOrderInput | SortOrder
    response?: SortOrder
    statusCode?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type IdempotencyKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key_service?: IdempotencyKeyKeyServiceCompoundUniqueInput
    AND?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    OR?: IdempotencyKeyWhereInput[]
    NOT?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    key?: StringFilter<"IdempotencyKey"> | string
    service?: StringFilter<"IdempotencyKey"> | string
    endpoint?: StringFilter<"IdempotencyKey"> | string
    requestHash?: StringNullableFilter<"IdempotencyKey"> | string | null
    response?: StringFilter<"IdempotencyKey"> | string
    statusCode?: IntFilter<"IdempotencyKey"> | number
    expiresAt?: DateTimeNullableFilter<"IdempotencyKey"> | Date | string | null
    createdAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
  }, "id" | "key_service">

  export type IdempotencyKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    service?: SortOrder
    endpoint?: SortOrder
    requestHash?: SortOrderInput | SortOrder
    response?: SortOrder
    statusCode?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: IdempotencyKeyCountOrderByAggregateInput
    _avg?: IdempotencyKeyAvgOrderByAggregateInput
    _max?: IdempotencyKeyMaxOrderByAggregateInput
    _min?: IdempotencyKeyMinOrderByAggregateInput
    _sum?: IdempotencyKeySumOrderByAggregateInput
  }

  export type IdempotencyKeyScalarWhereWithAggregatesInput = {
    AND?: IdempotencyKeyScalarWhereWithAggregatesInput | IdempotencyKeyScalarWhereWithAggregatesInput[]
    OR?: IdempotencyKeyScalarWhereWithAggregatesInput[]
    NOT?: IdempotencyKeyScalarWhereWithAggregatesInput | IdempotencyKeyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IdempotencyKey"> | number
    key?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    service?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    endpoint?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    requestHash?: StringNullableWithAggregatesFilter<"IdempotencyKey"> | string | null
    response?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    statusCode?: IntWithAggregatesFilter<"IdempotencyKey"> | number
    expiresAt?: DateTimeNullableWithAggregatesFilter<"IdempotencyKey"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IdempotencyKey"> | Date | string
  }

  export type ProjectCreateInput = {
    id: number
    name?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testRuns?: TestRunCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id: number
    name?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testRuns?: TestRunUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRuns?: TestRunUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRuns?: TestRunUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id: number
    name?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuiteCreateInput = {
    projectId: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    testRuns?: TestRunCreateNestedManyWithoutSuiteInput
  }

  export type SuiteUncheckedCreateInput = {
    id?: number
    projectId: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    testRuns?: TestRunUncheckedCreateNestedManyWithoutSuiteInput
  }

  export type SuiteUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRuns?: TestRunUpdateManyWithoutSuiteNestedInput
  }

  export type SuiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRuns?: TestRunUncheckedUpdateManyWithoutSuiteNestedInput
  }

  export type SuiteCreateManyInput = {
    id?: number
    projectId: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuiteUpdateManyMutationInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestRunCreateInput = {
    name: string
    description?: string | null
    createdBy?: string | null
    deletedAt?: Date | string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTestRunsInput
    suite?: SuiteCreateNestedOneWithoutTestRunsInput
    results?: TestResultCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUncheckedCreateInput = {
    id?: number
    projectId: number
    suiteId?: number | null
    name: string
    description?: string | null
    createdBy?: string | null
    deletedAt?: Date | string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: TestResultUncheckedCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTestRunsNestedInput
    suite?: SuiteUpdateOneWithoutTestRunsNestedInput
    results?: TestResultUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    suiteId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: TestResultUncheckedUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunCreateManyInput = {
    id?: number
    projectId: number
    suiteId?: number | null
    name: string
    description?: string | null
    createdBy?: string | null
    deletedAt?: Date | string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestRunUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestRunUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    suiteId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultCreateInput = {
    testCaseId: number
    testCaseName?: string | null
    title?: string | null
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    priority?: string | null
    type?: string | null
    snapshottedAt?: Date | string | null
    status?: string
    comment?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    testRun: TestRunCreateNestedOneWithoutResultsInput
  }

  export type TestResultUncheckedCreateInput = {
    id?: number
    testRunId: number
    testCaseId: number
    testCaseName?: string | null
    title?: string | null
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    priority?: string | null
    type?: string | null
    snapshottedAt?: Date | string | null
    status?: string
    comment?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestResultUpdateInput = {
    testCaseId?: IntFieldUpdateOperationsInput | number
    testCaseName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    snapshottedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRun?: TestRunUpdateOneRequiredWithoutResultsNestedInput
  }

  export type TestResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    testRunId?: IntFieldUpdateOperationsInput | number
    testCaseId?: IntFieldUpdateOperationsInput | number
    testCaseName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    snapshottedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultCreateManyInput = {
    id?: number
    testRunId: number
    testCaseId: number
    testCaseName?: string | null
    title?: string | null
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    priority?: string | null
    type?: string | null
    snapshottedAt?: Date | string | null
    status?: string
    comment?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestResultUpdateManyMutationInput = {
    testCaseId?: IntFieldUpdateOperationsInput | number
    testCaseName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    snapshottedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    testRunId?: IntFieldUpdateOperationsInput | number
    testCaseId?: IntFieldUpdateOperationsInput | number
    testCaseName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    snapshottedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyCreateInput = {
    key: string
    service: string
    endpoint: string
    requestHash?: string | null
    response: string
    statusCode: number
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type IdempotencyKeyUncheckedCreateInput = {
    id?: number
    key: string
    service: string
    endpoint: string
    requestHash?: string | null
    response: string
    statusCode: number
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type IdempotencyKeyUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    requestHash?: NullableStringFieldUpdateOperationsInput | string | null
    response?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    requestHash?: NullableStringFieldUpdateOperationsInput | string | null
    response?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyCreateManyInput = {
    id?: number
    key: string
    service: string
    endpoint: string
    requestHash?: string | null
    response: string
    statusCode: number
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type IdempotencyKeyUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    requestHash?: NullableStringFieldUpdateOperationsInput | string | null
    response?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    requestHash?: NullableStringFieldUpdateOperationsInput | string | null
    response?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type TestRunListRelationFilter = {
    every?: TestRunWhereInput
    some?: TestRunWhereInput
    none?: TestRunWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TestRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type SuiteCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuiteAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type SuiteMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuiteMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuiteSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type SuiteNullableRelationFilter = {
    is?: SuiteWhereInput | null
    isNot?: SuiteWhereInput | null
  }

  export type TestResultListRelationFilter = {
    every?: TestResultWhereInput
    some?: TestResultWhereInput
    none?: TestResultWhereInput
  }

  export type TestResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestRunCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    deletedAt?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestRunAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrder
    version?: SortOrder
  }

  export type TestRunMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    deletedAt?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestRunMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    deletedAt?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestRunSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrder
    version?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type TestRunRelationFilter = {
    is?: TestRunWhereInput
    isNot?: TestRunWhereInput
  }

  export type TestResultCountOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    testCaseId?: SortOrder
    testCaseName?: SortOrder
    title?: SortOrder
    preconditions?: SortOrder
    steps?: SortOrder
    expectedResult?: SortOrder
    priority?: SortOrder
    type?: SortOrder
    snapshottedAt?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestResultAvgOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    testCaseId?: SortOrder
    version?: SortOrder
  }

  export type TestResultMaxOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    testCaseId?: SortOrder
    testCaseName?: SortOrder
    title?: SortOrder
    preconditions?: SortOrder
    steps?: SortOrder
    expectedResult?: SortOrder
    priority?: SortOrder
    type?: SortOrder
    snapshottedAt?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestResultMinOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    testCaseId?: SortOrder
    testCaseName?: SortOrder
    title?: SortOrder
    preconditions?: SortOrder
    steps?: SortOrder
    expectedResult?: SortOrder
    priority?: SortOrder
    type?: SortOrder
    snapshottedAt?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestResultSumOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    testCaseId?: SortOrder
    version?: SortOrder
  }

  export type IdempotencyKeyKeyServiceCompoundUniqueInput = {
    key: string
    service: string
  }

  export type IdempotencyKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    service?: SortOrder
    endpoint?: SortOrder
    requestHash?: SortOrder
    response?: SortOrder
    statusCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type IdempotencyKeyAvgOrderByAggregateInput = {
    id?: SortOrder
    statusCode?: SortOrder
  }

  export type IdempotencyKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    service?: SortOrder
    endpoint?: SortOrder
    requestHash?: SortOrder
    response?: SortOrder
    statusCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type IdempotencyKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    service?: SortOrder
    endpoint?: SortOrder
    requestHash?: SortOrder
    response?: SortOrder
    statusCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type IdempotencyKeySumOrderByAggregateInput = {
    id?: SortOrder
    statusCode?: SortOrder
  }

  export type TestRunCreateNestedManyWithoutProjectInput = {
    create?: XOR<TestRunCreateWithoutProjectInput, TestRunUncheckedCreateWithoutProjectInput> | TestRunCreateWithoutProjectInput[] | TestRunUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutProjectInput | TestRunCreateOrConnectWithoutProjectInput[]
    createMany?: TestRunCreateManyProjectInputEnvelope
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
  }

  export type TestRunUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TestRunCreateWithoutProjectInput, TestRunUncheckedCreateWithoutProjectInput> | TestRunCreateWithoutProjectInput[] | TestRunUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutProjectInput | TestRunCreateOrConnectWithoutProjectInput[]
    createMany?: TestRunCreateManyProjectInputEnvelope
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TestRunUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TestRunCreateWithoutProjectInput, TestRunUncheckedCreateWithoutProjectInput> | TestRunCreateWithoutProjectInput[] | TestRunUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutProjectInput | TestRunCreateOrConnectWithoutProjectInput[]
    upsert?: TestRunUpsertWithWhereUniqueWithoutProjectInput | TestRunUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TestRunCreateManyProjectInputEnvelope
    set?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    disconnect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    delete?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    update?: TestRunUpdateWithWhereUniqueWithoutProjectInput | TestRunUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TestRunUpdateManyWithWhereWithoutProjectInput | TestRunUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
  }

  export type TestRunUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TestRunCreateWithoutProjectInput, TestRunUncheckedCreateWithoutProjectInput> | TestRunCreateWithoutProjectInput[] | TestRunUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutProjectInput | TestRunCreateOrConnectWithoutProjectInput[]
    upsert?: TestRunUpsertWithWhereUniqueWithoutProjectInput | TestRunUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TestRunCreateManyProjectInputEnvelope
    set?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    disconnect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    delete?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    update?: TestRunUpdateWithWhereUniqueWithoutProjectInput | TestRunUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TestRunUpdateManyWithWhereWithoutProjectInput | TestRunUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
  }

  export type TestRunCreateNestedManyWithoutSuiteInput = {
    create?: XOR<TestRunCreateWithoutSuiteInput, TestRunUncheckedCreateWithoutSuiteInput> | TestRunCreateWithoutSuiteInput[] | TestRunUncheckedCreateWithoutSuiteInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutSuiteInput | TestRunCreateOrConnectWithoutSuiteInput[]
    createMany?: TestRunCreateManySuiteInputEnvelope
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
  }

  export type TestRunUncheckedCreateNestedManyWithoutSuiteInput = {
    create?: XOR<TestRunCreateWithoutSuiteInput, TestRunUncheckedCreateWithoutSuiteInput> | TestRunCreateWithoutSuiteInput[] | TestRunUncheckedCreateWithoutSuiteInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutSuiteInput | TestRunCreateOrConnectWithoutSuiteInput[]
    createMany?: TestRunCreateManySuiteInputEnvelope
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
  }

  export type TestRunUpdateManyWithoutSuiteNestedInput = {
    create?: XOR<TestRunCreateWithoutSuiteInput, TestRunUncheckedCreateWithoutSuiteInput> | TestRunCreateWithoutSuiteInput[] | TestRunUncheckedCreateWithoutSuiteInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutSuiteInput | TestRunCreateOrConnectWithoutSuiteInput[]
    upsert?: TestRunUpsertWithWhereUniqueWithoutSuiteInput | TestRunUpsertWithWhereUniqueWithoutSuiteInput[]
    createMany?: TestRunCreateManySuiteInputEnvelope
    set?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    disconnect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    delete?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    update?: TestRunUpdateWithWhereUniqueWithoutSuiteInput | TestRunUpdateWithWhereUniqueWithoutSuiteInput[]
    updateMany?: TestRunUpdateManyWithWhereWithoutSuiteInput | TestRunUpdateManyWithWhereWithoutSuiteInput[]
    deleteMany?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
  }

  export type TestRunUncheckedUpdateManyWithoutSuiteNestedInput = {
    create?: XOR<TestRunCreateWithoutSuiteInput, TestRunUncheckedCreateWithoutSuiteInput> | TestRunCreateWithoutSuiteInput[] | TestRunUncheckedCreateWithoutSuiteInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutSuiteInput | TestRunCreateOrConnectWithoutSuiteInput[]
    upsert?: TestRunUpsertWithWhereUniqueWithoutSuiteInput | TestRunUpsertWithWhereUniqueWithoutSuiteInput[]
    createMany?: TestRunCreateManySuiteInputEnvelope
    set?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    disconnect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    delete?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    update?: TestRunUpdateWithWhereUniqueWithoutSuiteInput | TestRunUpdateWithWhereUniqueWithoutSuiteInput[]
    updateMany?: TestRunUpdateManyWithWhereWithoutSuiteInput | TestRunUpdateManyWithWhereWithoutSuiteInput[]
    deleteMany?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTestRunsInput = {
    create?: XOR<ProjectCreateWithoutTestRunsInput, ProjectUncheckedCreateWithoutTestRunsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTestRunsInput
    connect?: ProjectWhereUniqueInput
  }

  export type SuiteCreateNestedOneWithoutTestRunsInput = {
    create?: XOR<SuiteCreateWithoutTestRunsInput, SuiteUncheckedCreateWithoutTestRunsInput>
    connectOrCreate?: SuiteCreateOrConnectWithoutTestRunsInput
    connect?: SuiteWhereUniqueInput
  }

  export type TestResultCreateNestedManyWithoutTestRunInput = {
    create?: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput> | TestResultCreateWithoutTestRunInput[] | TestResultUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestResultCreateOrConnectWithoutTestRunInput | TestResultCreateOrConnectWithoutTestRunInput[]
    createMany?: TestResultCreateManyTestRunInputEnvelope
    connect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
  }

  export type TestResultUncheckedCreateNestedManyWithoutTestRunInput = {
    create?: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput> | TestResultCreateWithoutTestRunInput[] | TestResultUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestResultCreateOrConnectWithoutTestRunInput | TestResultCreateOrConnectWithoutTestRunInput[]
    createMany?: TestResultCreateManyTestRunInputEnvelope
    connect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateOneRequiredWithoutTestRunsNestedInput = {
    create?: XOR<ProjectCreateWithoutTestRunsInput, ProjectUncheckedCreateWithoutTestRunsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTestRunsInput
    upsert?: ProjectUpsertWithoutTestRunsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTestRunsInput, ProjectUpdateWithoutTestRunsInput>, ProjectUncheckedUpdateWithoutTestRunsInput>
  }

  export type SuiteUpdateOneWithoutTestRunsNestedInput = {
    create?: XOR<SuiteCreateWithoutTestRunsInput, SuiteUncheckedCreateWithoutTestRunsInput>
    connectOrCreate?: SuiteCreateOrConnectWithoutTestRunsInput
    upsert?: SuiteUpsertWithoutTestRunsInput
    disconnect?: SuiteWhereInput | boolean
    delete?: SuiteWhereInput | boolean
    connect?: SuiteWhereUniqueInput
    update?: XOR<XOR<SuiteUpdateToOneWithWhereWithoutTestRunsInput, SuiteUpdateWithoutTestRunsInput>, SuiteUncheckedUpdateWithoutTestRunsInput>
  }

  export type TestResultUpdateManyWithoutTestRunNestedInput = {
    create?: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput> | TestResultCreateWithoutTestRunInput[] | TestResultUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestResultCreateOrConnectWithoutTestRunInput | TestResultCreateOrConnectWithoutTestRunInput[]
    upsert?: TestResultUpsertWithWhereUniqueWithoutTestRunInput | TestResultUpsertWithWhereUniqueWithoutTestRunInput[]
    createMany?: TestResultCreateManyTestRunInputEnvelope
    set?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    disconnect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    delete?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    connect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    update?: TestResultUpdateWithWhereUniqueWithoutTestRunInput | TestResultUpdateWithWhereUniqueWithoutTestRunInput[]
    updateMany?: TestResultUpdateManyWithWhereWithoutTestRunInput | TestResultUpdateManyWithWhereWithoutTestRunInput[]
    deleteMany?: TestResultScalarWhereInput | TestResultScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TestResultUncheckedUpdateManyWithoutTestRunNestedInput = {
    create?: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput> | TestResultCreateWithoutTestRunInput[] | TestResultUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestResultCreateOrConnectWithoutTestRunInput | TestResultCreateOrConnectWithoutTestRunInput[]
    upsert?: TestResultUpsertWithWhereUniqueWithoutTestRunInput | TestResultUpsertWithWhereUniqueWithoutTestRunInput[]
    createMany?: TestResultCreateManyTestRunInputEnvelope
    set?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    disconnect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    delete?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    connect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    update?: TestResultUpdateWithWhereUniqueWithoutTestRunInput | TestResultUpdateWithWhereUniqueWithoutTestRunInput[]
    updateMany?: TestResultUpdateManyWithWhereWithoutTestRunInput | TestResultUpdateManyWithWhereWithoutTestRunInput[]
    deleteMany?: TestResultScalarWhereInput | TestResultScalarWhereInput[]
  }

  export type TestRunCreateNestedOneWithoutResultsInput = {
    create?: XOR<TestRunCreateWithoutResultsInput, TestRunUncheckedCreateWithoutResultsInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutResultsInput
    connect?: TestRunWhereUniqueInput
  }

  export type TestRunUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<TestRunCreateWithoutResultsInput, TestRunUncheckedCreateWithoutResultsInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutResultsInput
    upsert?: TestRunUpsertWithoutResultsInput
    connect?: TestRunWhereUniqueInput
    update?: XOR<XOR<TestRunUpdateToOneWithWhereWithoutResultsInput, TestRunUpdateWithoutResultsInput>, TestRunUncheckedUpdateWithoutResultsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type TestRunCreateWithoutProjectInput = {
    name: string
    description?: string | null
    createdBy?: string | null
    deletedAt?: Date | string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    suite?: SuiteCreateNestedOneWithoutTestRunsInput
    results?: TestResultCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUncheckedCreateWithoutProjectInput = {
    id?: number
    suiteId?: number | null
    name: string
    description?: string | null
    createdBy?: string | null
    deletedAt?: Date | string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: TestResultUncheckedCreateNestedManyWithoutTestRunInput
  }

  export type TestRunCreateOrConnectWithoutProjectInput = {
    where: TestRunWhereUniqueInput
    create: XOR<TestRunCreateWithoutProjectInput, TestRunUncheckedCreateWithoutProjectInput>
  }

  export type TestRunCreateManyProjectInputEnvelope = {
    data: TestRunCreateManyProjectInput | TestRunCreateManyProjectInput[]
  }

  export type TestRunUpsertWithWhereUniqueWithoutProjectInput = {
    where: TestRunWhereUniqueInput
    update: XOR<TestRunUpdateWithoutProjectInput, TestRunUncheckedUpdateWithoutProjectInput>
    create: XOR<TestRunCreateWithoutProjectInput, TestRunUncheckedCreateWithoutProjectInput>
  }

  export type TestRunUpdateWithWhereUniqueWithoutProjectInput = {
    where: TestRunWhereUniqueInput
    data: XOR<TestRunUpdateWithoutProjectInput, TestRunUncheckedUpdateWithoutProjectInput>
  }

  export type TestRunUpdateManyWithWhereWithoutProjectInput = {
    where: TestRunScalarWhereInput
    data: XOR<TestRunUpdateManyMutationInput, TestRunUncheckedUpdateManyWithoutProjectInput>
  }

  export type TestRunScalarWhereInput = {
    AND?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
    OR?: TestRunScalarWhereInput[]
    NOT?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
    id?: IntFilter<"TestRun"> | number
    projectId?: IntFilter<"TestRun"> | number
    suiteId?: IntNullableFilter<"TestRun"> | number | null
    name?: StringFilter<"TestRun"> | string
    description?: StringNullableFilter<"TestRun"> | string | null
    createdBy?: StringNullableFilter<"TestRun"> | string | null
    deletedAt?: DateTimeNullableFilter<"TestRun"> | Date | string | null
    version?: IntFilter<"TestRun"> | number
    createdAt?: DateTimeFilter<"TestRun"> | Date | string
    updatedAt?: DateTimeFilter<"TestRun"> | Date | string
  }

  export type TestRunCreateWithoutSuiteInput = {
    name: string
    description?: string | null
    createdBy?: string | null
    deletedAt?: Date | string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTestRunsInput
    results?: TestResultCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUncheckedCreateWithoutSuiteInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    createdBy?: string | null
    deletedAt?: Date | string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: TestResultUncheckedCreateNestedManyWithoutTestRunInput
  }

  export type TestRunCreateOrConnectWithoutSuiteInput = {
    where: TestRunWhereUniqueInput
    create: XOR<TestRunCreateWithoutSuiteInput, TestRunUncheckedCreateWithoutSuiteInput>
  }

  export type TestRunCreateManySuiteInputEnvelope = {
    data: TestRunCreateManySuiteInput | TestRunCreateManySuiteInput[]
  }

  export type TestRunUpsertWithWhereUniqueWithoutSuiteInput = {
    where: TestRunWhereUniqueInput
    update: XOR<TestRunUpdateWithoutSuiteInput, TestRunUncheckedUpdateWithoutSuiteInput>
    create: XOR<TestRunCreateWithoutSuiteInput, TestRunUncheckedCreateWithoutSuiteInput>
  }

  export type TestRunUpdateWithWhereUniqueWithoutSuiteInput = {
    where: TestRunWhereUniqueInput
    data: XOR<TestRunUpdateWithoutSuiteInput, TestRunUncheckedUpdateWithoutSuiteInput>
  }

  export type TestRunUpdateManyWithWhereWithoutSuiteInput = {
    where: TestRunScalarWhereInput
    data: XOR<TestRunUpdateManyMutationInput, TestRunUncheckedUpdateManyWithoutSuiteInput>
  }

  export type ProjectCreateWithoutTestRunsInput = {
    id: number
    name?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutTestRunsInput = {
    id: number
    name?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutTestRunsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTestRunsInput, ProjectUncheckedCreateWithoutTestRunsInput>
  }

  export type SuiteCreateWithoutTestRunsInput = {
    projectId: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuiteUncheckedCreateWithoutTestRunsInput = {
    id?: number
    projectId: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuiteCreateOrConnectWithoutTestRunsInput = {
    where: SuiteWhereUniqueInput
    create: XOR<SuiteCreateWithoutTestRunsInput, SuiteUncheckedCreateWithoutTestRunsInput>
  }

  export type TestResultCreateWithoutTestRunInput = {
    testCaseId: number
    testCaseName?: string | null
    title?: string | null
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    priority?: string | null
    type?: string | null
    snapshottedAt?: Date | string | null
    status?: string
    comment?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestResultUncheckedCreateWithoutTestRunInput = {
    id?: number
    testCaseId: number
    testCaseName?: string | null
    title?: string | null
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    priority?: string | null
    type?: string | null
    snapshottedAt?: Date | string | null
    status?: string
    comment?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestResultCreateOrConnectWithoutTestRunInput = {
    where: TestResultWhereUniqueInput
    create: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput>
  }

  export type TestResultCreateManyTestRunInputEnvelope = {
    data: TestResultCreateManyTestRunInput | TestResultCreateManyTestRunInput[]
  }

  export type ProjectUpsertWithoutTestRunsInput = {
    update: XOR<ProjectUpdateWithoutTestRunsInput, ProjectUncheckedUpdateWithoutTestRunsInput>
    create: XOR<ProjectCreateWithoutTestRunsInput, ProjectUncheckedCreateWithoutTestRunsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTestRunsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTestRunsInput, ProjectUncheckedUpdateWithoutTestRunsInput>
  }

  export type ProjectUpdateWithoutTestRunsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutTestRunsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuiteUpsertWithoutTestRunsInput = {
    update: XOR<SuiteUpdateWithoutTestRunsInput, SuiteUncheckedUpdateWithoutTestRunsInput>
    create: XOR<SuiteCreateWithoutTestRunsInput, SuiteUncheckedCreateWithoutTestRunsInput>
    where?: SuiteWhereInput
  }

  export type SuiteUpdateToOneWithWhereWithoutTestRunsInput = {
    where?: SuiteWhereInput
    data: XOR<SuiteUpdateWithoutTestRunsInput, SuiteUncheckedUpdateWithoutTestRunsInput>
  }

  export type SuiteUpdateWithoutTestRunsInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuiteUncheckedUpdateWithoutTestRunsInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultUpsertWithWhereUniqueWithoutTestRunInput = {
    where: TestResultWhereUniqueInput
    update: XOR<TestResultUpdateWithoutTestRunInput, TestResultUncheckedUpdateWithoutTestRunInput>
    create: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput>
  }

  export type TestResultUpdateWithWhereUniqueWithoutTestRunInput = {
    where: TestResultWhereUniqueInput
    data: XOR<TestResultUpdateWithoutTestRunInput, TestResultUncheckedUpdateWithoutTestRunInput>
  }

  export type TestResultUpdateManyWithWhereWithoutTestRunInput = {
    where: TestResultScalarWhereInput
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyWithoutTestRunInput>
  }

  export type TestResultScalarWhereInput = {
    AND?: TestResultScalarWhereInput | TestResultScalarWhereInput[]
    OR?: TestResultScalarWhereInput[]
    NOT?: TestResultScalarWhereInput | TestResultScalarWhereInput[]
    id?: IntFilter<"TestResult"> | number
    testRunId?: IntFilter<"TestResult"> | number
    testCaseId?: IntFilter<"TestResult"> | number
    testCaseName?: StringNullableFilter<"TestResult"> | string | null
    title?: StringNullableFilter<"TestResult"> | string | null
    preconditions?: StringNullableFilter<"TestResult"> | string | null
    steps?: StringNullableFilter<"TestResult"> | string | null
    expectedResult?: StringNullableFilter<"TestResult"> | string | null
    priority?: StringNullableFilter<"TestResult"> | string | null
    type?: StringNullableFilter<"TestResult"> | string | null
    snapshottedAt?: DateTimeNullableFilter<"TestResult"> | Date | string | null
    status?: StringFilter<"TestResult"> | string
    comment?: StringNullableFilter<"TestResult"> | string | null
    version?: IntFilter<"TestResult"> | number
    createdAt?: DateTimeFilter<"TestResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestResult"> | Date | string
  }

  export type TestRunCreateWithoutResultsInput = {
    name: string
    description?: string | null
    createdBy?: string | null
    deletedAt?: Date | string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTestRunsInput
    suite?: SuiteCreateNestedOneWithoutTestRunsInput
  }

  export type TestRunUncheckedCreateWithoutResultsInput = {
    id?: number
    projectId: number
    suiteId?: number | null
    name: string
    description?: string | null
    createdBy?: string | null
    deletedAt?: Date | string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestRunCreateOrConnectWithoutResultsInput = {
    where: TestRunWhereUniqueInput
    create: XOR<TestRunCreateWithoutResultsInput, TestRunUncheckedCreateWithoutResultsInput>
  }

  export type TestRunUpsertWithoutResultsInput = {
    update: XOR<TestRunUpdateWithoutResultsInput, TestRunUncheckedUpdateWithoutResultsInput>
    create: XOR<TestRunCreateWithoutResultsInput, TestRunUncheckedCreateWithoutResultsInput>
    where?: TestRunWhereInput
  }

  export type TestRunUpdateToOneWithWhereWithoutResultsInput = {
    where?: TestRunWhereInput
    data: XOR<TestRunUpdateWithoutResultsInput, TestRunUncheckedUpdateWithoutResultsInput>
  }

  export type TestRunUpdateWithoutResultsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTestRunsNestedInput
    suite?: SuiteUpdateOneWithoutTestRunsNestedInput
  }

  export type TestRunUncheckedUpdateWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    suiteId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestRunCreateManyProjectInput = {
    id?: number
    suiteId?: number | null
    name: string
    description?: string | null
    createdBy?: string | null
    deletedAt?: Date | string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestRunUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suite?: SuiteUpdateOneWithoutTestRunsNestedInput
    results?: TestResultUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    suiteId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: TestResultUncheckedUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    suiteId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestRunCreateManySuiteInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    createdBy?: string | null
    deletedAt?: Date | string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestRunUpdateWithoutSuiteInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTestRunsNestedInput
    results?: TestResultUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateWithoutSuiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: TestResultUncheckedUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateManyWithoutSuiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultCreateManyTestRunInput = {
    id?: number
    testCaseId: number
    testCaseName?: string | null
    title?: string | null
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    priority?: string | null
    type?: string | null
    snapshottedAt?: Date | string | null
    status?: string
    comment?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestResultUpdateWithoutTestRunInput = {
    testCaseId?: IntFieldUpdateOperationsInput | number
    testCaseName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    snapshottedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultUncheckedUpdateWithoutTestRunInput = {
    id?: IntFieldUpdateOperationsInput | number
    testCaseId?: IntFieldUpdateOperationsInput | number
    testCaseName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    snapshottedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultUncheckedUpdateManyWithoutTestRunInput = {
    id?: IntFieldUpdateOperationsInput | number
    testCaseId?: IntFieldUpdateOperationsInput | number
    testCaseName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    snapshottedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SuiteCountOutputTypeDefaultArgs instead
     */
    export type SuiteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SuiteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestRunCountOutputTypeDefaultArgs instead
     */
    export type TestRunCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestRunCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SuiteDefaultArgs instead
     */
    export type SuiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SuiteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestRunDefaultArgs instead
     */
    export type TestRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestRunDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestResultDefaultArgs instead
     */
    export type TestResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestResultDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IdempotencyKeyDefaultArgs instead
     */
    export type IdempotencyKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IdempotencyKeyDefaultArgs<ExtArgs>

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
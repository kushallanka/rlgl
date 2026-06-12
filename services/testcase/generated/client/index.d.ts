
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
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model TestCase
 * 
 */
export type TestCase = $Result.DefaultSelection<Prisma.$TestCasePayload>
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
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs>;

  /**
   * `prisma.testCase`: Exposes CRUD operations for the **TestCase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestCases
    * const testCases = await prisma.testCase.findMany()
    * ```
    */
  get testCase(): Prisma.TestCaseDelegate<ExtArgs>;

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
    Section: 'Section',
    TestCase: 'TestCase',
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
      modelProps: "project" | "suite" | "section" | "testCase" | "idempotencyKey"
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
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      TestCase: {
        payload: Prisma.$TestCasePayload<ExtArgs>
        fields: Prisma.TestCaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestCaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestCaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          findFirst: {
            args: Prisma.TestCaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestCaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          findMany: {
            args: Prisma.TestCaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[]
          }
          create: {
            args: Prisma.TestCaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          createMany: {
            args: Prisma.TestCaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[]
          }
          delete: {
            args: Prisma.TestCaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          update: {
            args: Prisma.TestCaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          deleteMany: {
            args: Prisma.TestCaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestCaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestCaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          aggregate: {
            args: Prisma.TestCaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestCase>
          }
          groupBy: {
            args: Prisma.TestCaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestCaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCaseCountArgs<ExtArgs>
            result: $Utils.Optional<TestCaseCountAggregateOutputType> | number
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
    suites: number
    sections: number
    testCases: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suites?: boolean | ProjectCountOutputTypeCountSuitesArgs
    sections?: boolean | ProjectCountOutputTypeCountSectionsArgs
    testCases?: boolean | ProjectCountOutputTypeCountTestCasesArgs
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
  export type ProjectCountOutputTypeCountSuitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuiteWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseWhereInput
  }


  /**
   * Count Type SuiteCountOutputType
   */

  export type SuiteCountOutputType = {
    sections: number
    testCases: number
  }

  export type SuiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | SuiteCountOutputTypeCountSectionsArgs
    testCases?: boolean | SuiteCountOutputTypeCountTestCasesArgs
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
  export type SuiteCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }

  /**
   * SuiteCountOutputType without action
   */
  export type SuiteCountOutputTypeCountTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    testCases: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testCases?: boolean | SectionCountOutputTypeCountTestCasesArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseWhereInput
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
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
    createdAt?: boolean
    updatedAt?: boolean
    suites?: boolean | Project$suitesArgs<ExtArgs>
    sections?: boolean | Project$sectionsArgs<ExtArgs>
    testCases?: boolean | Project$testCasesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suites?: boolean | Project$suitesArgs<ExtArgs>
    sections?: boolean | Project$sectionsArgs<ExtArgs>
    testCases?: boolean | Project$testCasesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      suites: Prisma.$SuitePayload<ExtArgs>[]
      sections: Prisma.$SectionPayload<ExtArgs>[]
      testCases: Prisma.$TestCasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
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
    suites<T extends Project$suitesArgs<ExtArgs> = {}>(args?: Subset<T, Project$suitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "findMany"> | Null>
    sections<T extends Project$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Project$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany"> | Null>
    testCases<T extends Project$testCasesArgs<ExtArgs> = {}>(args?: Subset<T, Project$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Project.suites
   */
  export type Project$suitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suite
     */
    select?: SuiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiteInclude<ExtArgs> | null
    where?: SuiteWhereInput
    orderBy?: SuiteOrderByWithRelationInput | SuiteOrderByWithRelationInput[]
    cursor?: SuiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuiteScalarFieldEnum | SuiteScalarFieldEnum[]
  }

  /**
   * Project.sections
   */
  export type Project$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Project.testCases
   */
  export type Project$testCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    where?: TestCaseWhereInput
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    cursor?: TestCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
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
    version: number | null
  }

  export type SuiteSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    version: number | null
  }

  export type SuiteMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    description: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuiteMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    description: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuiteCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    description: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SuiteAvgAggregateInputType = {
    id?: true
    projectId?: true
    version?: true
  }

  export type SuiteSumAggregateInputType = {
    id?: true
    projectId?: true
    version?: true
  }

  export type SuiteMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    description?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuiteMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    description?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuiteCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    description?: true
    version?: true
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
    description: string | null
    version: number
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
    description?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sections?: boolean | Suite$sectionsArgs<ExtArgs>
    testCases?: boolean | Suite$testCasesArgs<ExtArgs>
    _count?: boolean | SuiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suite"]>

  export type SuiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    description?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suite"]>

  export type SuiteSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    description?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SuiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sections?: boolean | Suite$sectionsArgs<ExtArgs>
    testCases?: boolean | Suite$testCasesArgs<ExtArgs>
    _count?: boolean | SuiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $SuitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suite"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      sections: Prisma.$SectionPayload<ExtArgs>[]
      testCases: Prisma.$TestCasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      name: string
      description: string | null
      version: number
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
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    sections<T extends Suite$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Suite$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany"> | Null>
    testCases<T extends Suite$testCasesArgs<ExtArgs> = {}>(args?: Subset<T, Suite$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly description: FieldRef<"Suite", 'String'>
    readonly version: FieldRef<"Suite", 'Int'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiteIncludeCreateManyAndReturn<ExtArgs> | null
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
   * Suite.sections
   */
  export type Suite$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Suite.testCases
   */
  export type Suite$testCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    where?: TestCaseWhereInput
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    cursor?: TestCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
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
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    id: number | null
    suiteId: number | null
    projectId: number | null
    version: number | null
  }

  export type SectionSumAggregateOutputType = {
    id: number | null
    suiteId: number | null
    projectId: number | null
    version: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: number | null
    suiteId: number | null
    projectId: number | null
    name: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionMaxAggregateOutputType = {
    id: number | null
    suiteId: number | null
    projectId: number | null
    name: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    suiteId: number
    projectId: number
    name: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    id?: true
    suiteId?: true
    projectId?: true
    version?: true
  }

  export type SectionSumAggregateInputType = {
    id?: true
    suiteId?: true
    projectId?: true
    version?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    suiteId?: true
    projectId?: true
    name?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    suiteId?: true
    projectId?: true
    name?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    suiteId?: true
    projectId?: true
    name?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: number
    suiteId: number
    projectId: number
    name: string
    version: number
    createdAt: Date
    updatedAt: Date
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suiteId?: boolean
    projectId?: boolean
    name?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    suite?: boolean | SuiteDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    testCases?: boolean | Section$testCasesArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suiteId?: boolean
    projectId?: boolean
    name?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    suite?: boolean | SuiteDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    suiteId?: boolean
    projectId?: boolean
    name?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suite?: boolean | SuiteDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    testCases?: boolean | Section$testCasesArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suite?: boolean | SuiteDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      suite: Prisma.$SuitePayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
      testCases: Prisma.$TestCasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      suiteId: number
      projectId: number
      name: string
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suite<T extends SuiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SuiteDefaultArgs<ExtArgs>>): Prisma__SuiteClient<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    testCases<T extends Section$testCasesArgs<ExtArgs> = {}>(args?: Subset<T, Section$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Section model
   */ 
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'Int'>
    readonly suiteId: FieldRef<"Section", 'Int'>
    readonly projectId: FieldRef<"Section", 'Int'>
    readonly name: FieldRef<"Section", 'String'>
    readonly version: FieldRef<"Section", 'Int'>
    readonly createdAt: FieldRef<"Section", 'DateTime'>
    readonly updatedAt: FieldRef<"Section", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
  }

  /**
   * Section.testCases
   */
  export type Section$testCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    where?: TestCaseWhereInput
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    cursor?: TestCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model TestCase
   */

  export type AggregateTestCase = {
    _count: TestCaseCountAggregateOutputType | null
    _avg: TestCaseAvgAggregateOutputType | null
    _sum: TestCaseSumAggregateOutputType | null
    _min: TestCaseMinAggregateOutputType | null
    _max: TestCaseMaxAggregateOutputType | null
  }

  export type TestCaseAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    suiteId: number | null
    sectionId: number | null
    version: number | null
  }

  export type TestCaseSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    suiteId: number | null
    sectionId: number | null
    version: number | null
  }

  export type TestCaseMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    suiteId: number | null
    sectionId: number | null
    title: string | null
    description: string | null
    status: string | null
    priority: string | null
    type: string | null
    preconditions: string | null
    steps: string | null
    expectedResult: string | null
    customFieldValues: string | null
    createdBy: string | null
    updatedBy: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TestCaseMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    suiteId: number | null
    sectionId: number | null
    title: string | null
    description: string | null
    status: string | null
    priority: string | null
    type: string | null
    preconditions: string | null
    steps: string | null
    expectedResult: string | null
    customFieldValues: string | null
    createdBy: string | null
    updatedBy: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TestCaseCountAggregateOutputType = {
    id: number
    projectId: number
    suiteId: number
    sectionId: number
    title: number
    description: number
    status: number
    priority: number
    type: number
    preconditions: number
    steps: number
    expectedResult: number
    customFieldValues: number
    createdBy: number
    updatedBy: number
    version: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TestCaseAvgAggregateInputType = {
    id?: true
    projectId?: true
    suiteId?: true
    sectionId?: true
    version?: true
  }

  export type TestCaseSumAggregateInputType = {
    id?: true
    projectId?: true
    suiteId?: true
    sectionId?: true
    version?: true
  }

  export type TestCaseMinAggregateInputType = {
    id?: true
    projectId?: true
    suiteId?: true
    sectionId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    type?: true
    preconditions?: true
    steps?: true
    expectedResult?: true
    customFieldValues?: true
    createdBy?: true
    updatedBy?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TestCaseMaxAggregateInputType = {
    id?: true
    projectId?: true
    suiteId?: true
    sectionId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    type?: true
    preconditions?: true
    steps?: true
    expectedResult?: true
    customFieldValues?: true
    createdBy?: true
    updatedBy?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TestCaseCountAggregateInputType = {
    id?: true
    projectId?: true
    suiteId?: true
    sectionId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    type?: true
    preconditions?: true
    steps?: true
    expectedResult?: true
    customFieldValues?: true
    createdBy?: true
    updatedBy?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TestCaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCase to aggregate.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestCases
    **/
    _count?: true | TestCaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestCaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestCaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestCaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestCaseMaxAggregateInputType
  }

  export type GetTestCaseAggregateType<T extends TestCaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTestCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestCase[P]>
      : GetScalarType<T[P], AggregateTestCase[P]>
  }




  export type TestCaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseWhereInput
    orderBy?: TestCaseOrderByWithAggregationInput | TestCaseOrderByWithAggregationInput[]
    by: TestCaseScalarFieldEnum[] | TestCaseScalarFieldEnum
    having?: TestCaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCaseCountAggregateInputType | true
    _avg?: TestCaseAvgAggregateInputType
    _sum?: TestCaseSumAggregateInputType
    _min?: TestCaseMinAggregateInputType
    _max?: TestCaseMaxAggregateInputType
  }

  export type TestCaseGroupByOutputType = {
    id: number
    projectId: number
    suiteId: number
    sectionId: number
    title: string
    description: string | null
    status: string
    priority: string
    type: string
    preconditions: string | null
    steps: string | null
    expectedResult: string | null
    customFieldValues: string | null
    createdBy: string | null
    updatedBy: string | null
    version: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TestCaseCountAggregateOutputType | null
    _avg: TestCaseAvgAggregateOutputType | null
    _sum: TestCaseSumAggregateOutputType | null
    _min: TestCaseMinAggregateOutputType | null
    _max: TestCaseMaxAggregateOutputType | null
  }

  type GetTestCaseGroupByPayload<T extends TestCaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestCaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestCaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestCaseGroupByOutputType[P]>
            : GetScalarType<T[P], TestCaseGroupByOutputType[P]>
        }
      >
    >


  export type TestCaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    suiteId?: boolean
    sectionId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    type?: boolean
    preconditions?: boolean
    steps?: boolean
    expectedResult?: boolean
    customFieldValues?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    suite?: boolean | SuiteDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCase"]>

  export type TestCaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    suiteId?: boolean
    sectionId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    type?: boolean
    preconditions?: boolean
    steps?: boolean
    expectedResult?: boolean
    customFieldValues?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    suite?: boolean | SuiteDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCase"]>

  export type TestCaseSelectScalar = {
    id?: boolean
    projectId?: boolean
    suiteId?: boolean
    sectionId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    type?: boolean
    preconditions?: boolean
    steps?: boolean
    expectedResult?: boolean
    customFieldValues?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TestCaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suite?: boolean | SuiteDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type TestCaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suite?: boolean | SuiteDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $TestCasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestCase"
    objects: {
      suite: Prisma.$SuitePayload<ExtArgs>
      section: Prisma.$SectionPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      suiteId: number
      sectionId: number
      title: string
      description: string | null
      status: string
      priority: string
      type: string
      preconditions: string | null
      steps: string | null
      expectedResult: string | null
      customFieldValues: string | null
      createdBy: string | null
      updatedBy: string | null
      version: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["testCase"]>
    composites: {}
  }

  type TestCaseGetPayload<S extends boolean | null | undefined | TestCaseDefaultArgs> = $Result.GetResult<Prisma.$TestCasePayload, S>

  type TestCaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestCaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestCaseCountAggregateInputType | true
    }

  export interface TestCaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestCase'], meta: { name: 'TestCase' } }
    /**
     * Find zero or one TestCase that matches the filter.
     * @param {TestCaseFindUniqueArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestCaseFindUniqueArgs>(args: SelectSubset<T, TestCaseFindUniqueArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TestCase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TestCaseFindUniqueOrThrowArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestCaseFindUniqueOrThrowArgs>(args: SelectSubset<T, TestCaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TestCase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindFirstArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestCaseFindFirstArgs>(args?: SelectSubset<T, TestCaseFindFirstArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TestCase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindFirstOrThrowArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestCaseFindFirstOrThrowArgs>(args?: SelectSubset<T, TestCaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TestCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestCases
     * const testCases = await prisma.testCase.findMany()
     * 
     * // Get first 10 TestCases
     * const testCases = await prisma.testCase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testCaseWithIdOnly = await prisma.testCase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestCaseFindManyArgs>(args?: SelectSubset<T, TestCaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TestCase.
     * @param {TestCaseCreateArgs} args - Arguments to create a TestCase.
     * @example
     * // Create one TestCase
     * const TestCase = await prisma.testCase.create({
     *   data: {
     *     // ... data to create a TestCase
     *   }
     * })
     * 
     */
    create<T extends TestCaseCreateArgs>(args: SelectSubset<T, TestCaseCreateArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TestCases.
     * @param {TestCaseCreateManyArgs} args - Arguments to create many TestCases.
     * @example
     * // Create many TestCases
     * const testCase = await prisma.testCase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCaseCreateManyArgs>(args?: SelectSubset<T, TestCaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestCases and returns the data saved in the database.
     * @param {TestCaseCreateManyAndReturnArgs} args - Arguments to create many TestCases.
     * @example
     * // Create many TestCases
     * const testCase = await prisma.testCase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestCases and only return the `id`
     * const testCaseWithIdOnly = await prisma.testCase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCaseCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TestCase.
     * @param {TestCaseDeleteArgs} args - Arguments to delete one TestCase.
     * @example
     * // Delete one TestCase
     * const TestCase = await prisma.testCase.delete({
     *   where: {
     *     // ... filter to delete one TestCase
     *   }
     * })
     * 
     */
    delete<T extends TestCaseDeleteArgs>(args: SelectSubset<T, TestCaseDeleteArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TestCase.
     * @param {TestCaseUpdateArgs} args - Arguments to update one TestCase.
     * @example
     * // Update one TestCase
     * const testCase = await prisma.testCase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestCaseUpdateArgs>(args: SelectSubset<T, TestCaseUpdateArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TestCases.
     * @param {TestCaseDeleteManyArgs} args - Arguments to filter TestCases to delete.
     * @example
     * // Delete a few TestCases
     * const { count } = await prisma.testCase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestCaseDeleteManyArgs>(args?: SelectSubset<T, TestCaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestCases
     * const testCase = await prisma.testCase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestCaseUpdateManyArgs>(args: SelectSubset<T, TestCaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestCase.
     * @param {TestCaseUpsertArgs} args - Arguments to update or create a TestCase.
     * @example
     * // Update or create a TestCase
     * const testCase = await prisma.testCase.upsert({
     *   create: {
     *     // ... data to create a TestCase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestCase we want to update
     *   }
     * })
     */
    upsert<T extends TestCaseUpsertArgs>(args: SelectSubset<T, TestCaseUpsertArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseCountArgs} args - Arguments to filter TestCases to count.
     * @example
     * // Count the number of TestCases
     * const count = await prisma.testCase.count({
     *   where: {
     *     // ... the filter for the TestCases we want to count
     *   }
     * })
    **/
    count<T extends TestCaseCountArgs>(
      args?: Subset<T, TestCaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestCaseAggregateArgs>(args: Subset<T, TestCaseAggregateArgs>): Prisma.PrismaPromise<GetTestCaseAggregateType<T>>

    /**
     * Group by TestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseGroupByArgs} args - Group by arguments.
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
      T extends TestCaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestCaseGroupByArgs['orderBy'] }
        : { orderBy?: TestCaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestCaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestCase model
   */
  readonly fields: TestCaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestCase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestCaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suite<T extends SuiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SuiteDefaultArgs<ExtArgs>>): Prisma__SuiteClient<$Result.GetResult<Prisma.$SuitePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TestCase model
   */ 
  interface TestCaseFieldRefs {
    readonly id: FieldRef<"TestCase", 'Int'>
    readonly projectId: FieldRef<"TestCase", 'Int'>
    readonly suiteId: FieldRef<"TestCase", 'Int'>
    readonly sectionId: FieldRef<"TestCase", 'Int'>
    readonly title: FieldRef<"TestCase", 'String'>
    readonly description: FieldRef<"TestCase", 'String'>
    readonly status: FieldRef<"TestCase", 'String'>
    readonly priority: FieldRef<"TestCase", 'String'>
    readonly type: FieldRef<"TestCase", 'String'>
    readonly preconditions: FieldRef<"TestCase", 'String'>
    readonly steps: FieldRef<"TestCase", 'String'>
    readonly expectedResult: FieldRef<"TestCase", 'String'>
    readonly customFieldValues: FieldRef<"TestCase", 'String'>
    readonly createdBy: FieldRef<"TestCase", 'String'>
    readonly updatedBy: FieldRef<"TestCase", 'String'>
    readonly version: FieldRef<"TestCase", 'Int'>
    readonly createdAt: FieldRef<"TestCase", 'DateTime'>
    readonly updatedAt: FieldRef<"TestCase", 'DateTime'>
    readonly deletedAt: FieldRef<"TestCase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestCase findUnique
   */
  export type TestCaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase findUniqueOrThrow
   */
  export type TestCaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase findFirst
   */
  export type TestCaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase findFirstOrThrow
   */
  export type TestCaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase findMany
   */
  export type TestCaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCases to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase create
   */
  export type TestCaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The data needed to create a TestCase.
     */
    data: XOR<TestCaseCreateInput, TestCaseUncheckedCreateInput>
  }

  /**
   * TestCase createMany
   */
  export type TestCaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestCases.
     */
    data: TestCaseCreateManyInput | TestCaseCreateManyInput[]
  }

  /**
   * TestCase createManyAndReturn
   */
  export type TestCaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TestCases.
     */
    data: TestCaseCreateManyInput | TestCaseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCase update
   */
  export type TestCaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The data needed to update a TestCase.
     */
    data: XOR<TestCaseUpdateInput, TestCaseUncheckedUpdateInput>
    /**
     * Choose, which TestCase to update.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase updateMany
   */
  export type TestCaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestCases.
     */
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyInput>
    /**
     * Filter which TestCases to update
     */
    where?: TestCaseWhereInput
  }

  /**
   * TestCase upsert
   */
  export type TestCaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The filter to search for the TestCase to update in case it exists.
     */
    where: TestCaseWhereUniqueInput
    /**
     * In case the TestCase found by the `where` argument doesn't exist, create a new TestCase with this data.
     */
    create: XOR<TestCaseCreateInput, TestCaseUncheckedCreateInput>
    /**
     * In case the TestCase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestCaseUpdateInput, TestCaseUncheckedUpdateInput>
  }

  /**
   * TestCase delete
   */
  export type TestCaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter which TestCase to delete.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase deleteMany
   */
  export type TestCaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCases to delete
     */
    where?: TestCaseWhereInput
  }

  /**
   * TestCase without action
   */
  export type TestCaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
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
    response: string | null
    statusCode: number | null
    createdAt: Date | null
  }

  export type IdempotencyKeyMaxAggregateOutputType = {
    id: number | null
    key: string | null
    service: string | null
    endpoint: string | null
    response: string | null
    statusCode: number | null
    createdAt: Date | null
  }

  export type IdempotencyKeyCountAggregateOutputType = {
    id: number
    key: number
    service: number
    endpoint: number
    response: number
    statusCode: number
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
    response?: true
    statusCode?: true
    createdAt?: true
  }

  export type IdempotencyKeyMaxAggregateInputType = {
    id?: true
    key?: true
    service?: true
    endpoint?: true
    response?: true
    statusCode?: true
    createdAt?: true
  }

  export type IdempotencyKeyCountAggregateInputType = {
    id?: true
    key?: true
    service?: true
    endpoint?: true
    response?: true
    statusCode?: true
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
    response: string
    statusCode: number
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
    response?: boolean
    statusCode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["idempotencyKey"]>

  export type IdempotencyKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    service?: boolean
    endpoint?: boolean
    response?: boolean
    statusCode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["idempotencyKey"]>

  export type IdempotencyKeySelectScalar = {
    id?: boolean
    key?: boolean
    service?: boolean
    endpoint?: boolean
    response?: boolean
    statusCode?: boolean
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
      response: string
      statusCode: number
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
    readonly response: FieldRef<"IdempotencyKey", 'String'>
    readonly statusCode: FieldRef<"IdempotencyKey", 'Int'>
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SuiteScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    description: 'description',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SuiteScalarFieldEnum = (typeof SuiteScalarFieldEnum)[keyof typeof SuiteScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    suiteId: 'suiteId',
    projectId: 'projectId',
    name: 'name',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const TestCaseScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    suiteId: 'suiteId',
    sectionId: 'sectionId',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    type: 'type',
    preconditions: 'preconditions',
    steps: 'steps',
    expectedResult: 'expectedResult',
    customFieldValues: 'customFieldValues',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TestCaseScalarFieldEnum = (typeof TestCaseScalarFieldEnum)[keyof typeof TestCaseScalarFieldEnum]


  export const IdempotencyKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    service: 'service',
    endpoint: 'endpoint',
    response: 'response',
    statusCode: 'statusCode',
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
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    suites?: SuiteListRelationFilter
    sections?: SectionListRelationFilter
    testCases?: TestCaseListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    suites?: SuiteOrderByRelationAggregateInput
    sections?: SectionOrderByRelationAggregateInput
    testCases?: TestCaseOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    suites?: SuiteListRelationFilter
    sections?: SectionListRelationFilter
    testCases?: TestCaseListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
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
    description?: StringNullableFilter<"Suite"> | string | null
    version?: IntFilter<"Suite"> | number
    createdAt?: DateTimeFilter<"Suite"> | Date | string
    updatedAt?: DateTimeFilter<"Suite"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    sections?: SectionListRelationFilter
    testCases?: TestCaseListRelationFilter
  }

  export type SuiteOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    sections?: SectionOrderByRelationAggregateInput
    testCases?: TestCaseOrderByRelationAggregateInput
  }

  export type SuiteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SuiteWhereInput | SuiteWhereInput[]
    OR?: SuiteWhereInput[]
    NOT?: SuiteWhereInput | SuiteWhereInput[]
    projectId?: IntFilter<"Suite"> | number
    name?: StringFilter<"Suite"> | string
    description?: StringNullableFilter<"Suite"> | string | null
    version?: IntFilter<"Suite"> | number
    createdAt?: DateTimeFilter<"Suite"> | Date | string
    updatedAt?: DateTimeFilter<"Suite"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    sections?: SectionListRelationFilter
    testCases?: TestCaseListRelationFilter
  }, "id">

  export type SuiteOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    version?: SortOrder
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
    description?: StringNullableWithAggregatesFilter<"Suite"> | string | null
    version?: IntWithAggregatesFilter<"Suite"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Suite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Suite"> | Date | string
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: IntFilter<"Section"> | number
    suiteId?: IntFilter<"Section"> | number
    projectId?: IntFilter<"Section"> | number
    name?: StringFilter<"Section"> | string
    version?: IntFilter<"Section"> | number
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    suite?: XOR<SuiteRelationFilter, SuiteWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    testCases?: TestCaseListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    suiteId?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    suite?: SuiteOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    testCases?: TestCaseOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    suiteId?: IntFilter<"Section"> | number
    projectId?: IntFilter<"Section"> | number
    name?: StringFilter<"Section"> | string
    version?: IntFilter<"Section"> | number
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    suite?: XOR<SuiteRelationFilter, SuiteWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    testCases?: TestCaseListRelationFilter
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    suiteId?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Section"> | number
    suiteId?: IntWithAggregatesFilter<"Section"> | number
    projectId?: IntWithAggregatesFilter<"Section"> | number
    name?: StringWithAggregatesFilter<"Section"> | string
    version?: IntWithAggregatesFilter<"Section"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
  }

  export type TestCaseWhereInput = {
    AND?: TestCaseWhereInput | TestCaseWhereInput[]
    OR?: TestCaseWhereInput[]
    NOT?: TestCaseWhereInput | TestCaseWhereInput[]
    id?: IntFilter<"TestCase"> | number
    projectId?: IntFilter<"TestCase"> | number
    suiteId?: IntFilter<"TestCase"> | number
    sectionId?: IntFilter<"TestCase"> | number
    title?: StringFilter<"TestCase"> | string
    description?: StringNullableFilter<"TestCase"> | string | null
    status?: StringFilter<"TestCase"> | string
    priority?: StringFilter<"TestCase"> | string
    type?: StringFilter<"TestCase"> | string
    preconditions?: StringNullableFilter<"TestCase"> | string | null
    steps?: StringNullableFilter<"TestCase"> | string | null
    expectedResult?: StringNullableFilter<"TestCase"> | string | null
    customFieldValues?: StringNullableFilter<"TestCase"> | string | null
    createdBy?: StringNullableFilter<"TestCase"> | string | null
    updatedBy?: StringNullableFilter<"TestCase"> | string | null
    version?: IntFilter<"TestCase"> | number
    createdAt?: DateTimeFilter<"TestCase"> | Date | string
    updatedAt?: DateTimeFilter<"TestCase"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TestCase"> | Date | string | null
    suite?: XOR<SuiteRelationFilter, SuiteWhereInput>
    section?: XOR<SectionRelationFilter, SectionWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type TestCaseOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrder
    sectionId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    type?: SortOrder
    preconditions?: SortOrderInput | SortOrder
    steps?: SortOrderInput | SortOrder
    expectedResult?: SortOrderInput | SortOrder
    customFieldValues?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    suite?: SuiteOrderByWithRelationInput
    section?: SectionOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type TestCaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestCaseWhereInput | TestCaseWhereInput[]
    OR?: TestCaseWhereInput[]
    NOT?: TestCaseWhereInput | TestCaseWhereInput[]
    projectId?: IntFilter<"TestCase"> | number
    suiteId?: IntFilter<"TestCase"> | number
    sectionId?: IntFilter<"TestCase"> | number
    title?: StringFilter<"TestCase"> | string
    description?: StringNullableFilter<"TestCase"> | string | null
    status?: StringFilter<"TestCase"> | string
    priority?: StringFilter<"TestCase"> | string
    type?: StringFilter<"TestCase"> | string
    preconditions?: StringNullableFilter<"TestCase"> | string | null
    steps?: StringNullableFilter<"TestCase"> | string | null
    expectedResult?: StringNullableFilter<"TestCase"> | string | null
    customFieldValues?: StringNullableFilter<"TestCase"> | string | null
    createdBy?: StringNullableFilter<"TestCase"> | string | null
    updatedBy?: StringNullableFilter<"TestCase"> | string | null
    version?: IntFilter<"TestCase"> | number
    createdAt?: DateTimeFilter<"TestCase"> | Date | string
    updatedAt?: DateTimeFilter<"TestCase"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TestCase"> | Date | string | null
    suite?: XOR<SuiteRelationFilter, SuiteWhereInput>
    section?: XOR<SectionRelationFilter, SectionWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id">

  export type TestCaseOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrder
    sectionId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    type?: SortOrder
    preconditions?: SortOrderInput | SortOrder
    steps?: SortOrderInput | SortOrder
    expectedResult?: SortOrderInput | SortOrder
    customFieldValues?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TestCaseCountOrderByAggregateInput
    _avg?: TestCaseAvgOrderByAggregateInput
    _max?: TestCaseMaxOrderByAggregateInput
    _min?: TestCaseMinOrderByAggregateInput
    _sum?: TestCaseSumOrderByAggregateInput
  }

  export type TestCaseScalarWhereWithAggregatesInput = {
    AND?: TestCaseScalarWhereWithAggregatesInput | TestCaseScalarWhereWithAggregatesInput[]
    OR?: TestCaseScalarWhereWithAggregatesInput[]
    NOT?: TestCaseScalarWhereWithAggregatesInput | TestCaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestCase"> | number
    projectId?: IntWithAggregatesFilter<"TestCase"> | number
    suiteId?: IntWithAggregatesFilter<"TestCase"> | number
    sectionId?: IntWithAggregatesFilter<"TestCase"> | number
    title?: StringWithAggregatesFilter<"TestCase"> | string
    description?: StringNullableWithAggregatesFilter<"TestCase"> | string | null
    status?: StringWithAggregatesFilter<"TestCase"> | string
    priority?: StringWithAggregatesFilter<"TestCase"> | string
    type?: StringWithAggregatesFilter<"TestCase"> | string
    preconditions?: StringNullableWithAggregatesFilter<"TestCase"> | string | null
    steps?: StringNullableWithAggregatesFilter<"TestCase"> | string | null
    expectedResult?: StringNullableWithAggregatesFilter<"TestCase"> | string | null
    customFieldValues?: StringNullableWithAggregatesFilter<"TestCase"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"TestCase"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"TestCase"> | string | null
    version?: IntWithAggregatesFilter<"TestCase"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TestCase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestCase"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TestCase"> | Date | string | null
  }

  export type IdempotencyKeyWhereInput = {
    AND?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    OR?: IdempotencyKeyWhereInput[]
    NOT?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    id?: IntFilter<"IdempotencyKey"> | number
    key?: StringFilter<"IdempotencyKey"> | string
    service?: StringFilter<"IdempotencyKey"> | string
    endpoint?: StringFilter<"IdempotencyKey"> | string
    response?: StringFilter<"IdempotencyKey"> | string
    statusCode?: IntFilter<"IdempotencyKey"> | number
    createdAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
  }

  export type IdempotencyKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    service?: SortOrder
    endpoint?: SortOrder
    response?: SortOrder
    statusCode?: SortOrder
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
    response?: StringFilter<"IdempotencyKey"> | string
    statusCode?: IntFilter<"IdempotencyKey"> | number
    createdAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
  }, "id" | "key_service">

  export type IdempotencyKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    service?: SortOrder
    endpoint?: SortOrder
    response?: SortOrder
    statusCode?: SortOrder
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
    response?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    statusCode?: IntWithAggregatesFilter<"IdempotencyKey"> | number
    createdAt?: DateTimeWithAggregatesFilter<"IdempotencyKey"> | Date | string
  }

  export type ProjectCreateInput = {
    id: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suites?: SuiteCreateNestedManyWithoutProjectInput
    sections?: SectionCreateNestedManyWithoutProjectInput
    testCases?: TestCaseCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suites?: SuiteUncheckedCreateNestedManyWithoutProjectInput
    sections?: SectionUncheckedCreateNestedManyWithoutProjectInput
    testCases?: TestCaseUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suites?: SuiteUpdateManyWithoutProjectNestedInput
    sections?: SectionUpdateManyWithoutProjectNestedInput
    testCases?: TestCaseUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suites?: SuiteUncheckedUpdateManyWithoutProjectNestedInput
    sections?: SectionUncheckedUpdateManyWithoutProjectNestedInput
    testCases?: TestCaseUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuiteCreateInput = {
    name: string
    description?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSuitesInput
    sections?: SectionCreateNestedManyWithoutSuiteInput
    testCases?: TestCaseCreateNestedManyWithoutSuiteInput
  }

  export type SuiteUncheckedCreateInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionUncheckedCreateNestedManyWithoutSuiteInput
    testCases?: TestCaseUncheckedCreateNestedManyWithoutSuiteInput
  }

  export type SuiteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSuitesNestedInput
    sections?: SectionUpdateManyWithoutSuiteNestedInput
    testCases?: TestCaseUpdateManyWithoutSuiteNestedInput
  }

  export type SuiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUncheckedUpdateManyWithoutSuiteNestedInput
    testCases?: TestCaseUncheckedUpdateManyWithoutSuiteNestedInput
  }

  export type SuiteCreateManyInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuiteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateInput = {
    name: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    suite: SuiteCreateNestedOneWithoutSectionsInput
    project: ProjectCreateNestedOneWithoutSectionsInput
    testCases?: TestCaseCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: number
    suiteId: number
    projectId: number
    name: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suite?: SuiteUpdateOneRequiredWithoutSectionsNestedInput
    project?: ProjectUpdateOneRequiredWithoutSectionsNestedInput
    testCases?: TestCaseUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    suiteId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: number
    suiteId: number
    projectId: number
    name: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    suiteId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseCreateInput = {
    title: string
    description?: string | null
    status?: string
    priority?: string
    type?: string
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    customFieldValues?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    suite: SuiteCreateNestedOneWithoutTestCasesInput
    section: SectionCreateNestedOneWithoutTestCasesInput
    project: ProjectCreateNestedOneWithoutTestCasesInput
  }

  export type TestCaseUncheckedCreateInput = {
    id?: number
    projectId: number
    suiteId: number
    sectionId: number
    title: string
    description?: string | null
    status?: string
    priority?: string
    type?: string
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    customFieldValues?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TestCaseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    customFieldValues?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suite?: SuiteUpdateOneRequiredWithoutTestCasesNestedInput
    section?: SectionUpdateOneRequiredWithoutTestCasesNestedInput
    project?: ProjectUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TestCaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    suiteId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    customFieldValues?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestCaseCreateManyInput = {
    id?: number
    projectId: number
    suiteId: number
    sectionId: number
    title: string
    description?: string | null
    status?: string
    priority?: string
    type?: string
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    customFieldValues?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TestCaseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    customFieldValues?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestCaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    suiteId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    customFieldValues?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IdempotencyKeyCreateInput = {
    key: string
    service: string
    endpoint: string
    response: string
    statusCode: number
    createdAt?: Date | string
  }

  export type IdempotencyKeyUncheckedCreateInput = {
    id?: number
    key: string
    service: string
    endpoint: string
    response: string
    statusCode: number
    createdAt?: Date | string
  }

  export type IdempotencyKeyUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyCreateManyInput = {
    id?: number
    key: string
    service: string
    endpoint: string
    response: string
    statusCode: number
    createdAt?: Date | string
  }

  export type IdempotencyKeyUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
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

  export type SuiteListRelationFilter = {
    every?: SuiteWhereInput
    some?: SuiteWhereInput
    none?: SuiteWhereInput
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type TestCaseListRelationFilter = {
    every?: TestCaseWhereInput
    some?: TestCaseWhereInput
    none?: TestCaseWhereInput
  }

  export type SuiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestCaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SuiteCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuiteAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    version?: SortOrder
  }

  export type SuiteMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuiteMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuiteSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    version?: SortOrder
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

  export type SuiteRelationFilter = {
    is?: SuiteWhereInput
    isNot?: SuiteWhereInput
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    suiteId?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    id?: SortOrder
    suiteId?: SortOrder
    projectId?: SortOrder
    version?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    suiteId?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    suiteId?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    id?: SortOrder
    suiteId?: SortOrder
    projectId?: SortOrder
    version?: SortOrder
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

  export type SectionRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type TestCaseCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrder
    sectionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    type?: SortOrder
    preconditions?: SortOrder
    steps?: SortOrder
    expectedResult?: SortOrder
    customFieldValues?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TestCaseAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrder
    sectionId?: SortOrder
    version?: SortOrder
  }

  export type TestCaseMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrder
    sectionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    type?: SortOrder
    preconditions?: SortOrder
    steps?: SortOrder
    expectedResult?: SortOrder
    customFieldValues?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TestCaseMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrder
    sectionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    type?: SortOrder
    preconditions?: SortOrder
    steps?: SortOrder
    expectedResult?: SortOrder
    customFieldValues?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TestCaseSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    suiteId?: SortOrder
    sectionId?: SortOrder
    version?: SortOrder
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

  export type IdempotencyKeyKeyServiceCompoundUniqueInput = {
    key: string
    service: string
  }

  export type IdempotencyKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    service?: SortOrder
    endpoint?: SortOrder
    response?: SortOrder
    statusCode?: SortOrder
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
    response?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type IdempotencyKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    service?: SortOrder
    endpoint?: SortOrder
    response?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type IdempotencyKeySumOrderByAggregateInput = {
    id?: SortOrder
    statusCode?: SortOrder
  }

  export type SuiteCreateNestedManyWithoutProjectInput = {
    create?: XOR<SuiteCreateWithoutProjectInput, SuiteUncheckedCreateWithoutProjectInput> | SuiteCreateWithoutProjectInput[] | SuiteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SuiteCreateOrConnectWithoutProjectInput | SuiteCreateOrConnectWithoutProjectInput[]
    createMany?: SuiteCreateManyProjectInputEnvelope
    connect?: SuiteWhereUniqueInput | SuiteWhereUniqueInput[]
  }

  export type SectionCreateNestedManyWithoutProjectInput = {
    create?: XOR<SectionCreateWithoutProjectInput, SectionUncheckedCreateWithoutProjectInput> | SectionCreateWithoutProjectInput[] | SectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutProjectInput | SectionCreateOrConnectWithoutProjectInput[]
    createMany?: SectionCreateManyProjectInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type TestCaseCreateNestedManyWithoutProjectInput = {
    create?: XOR<TestCaseCreateWithoutProjectInput, TestCaseUncheckedCreateWithoutProjectInput> | TestCaseCreateWithoutProjectInput[] | TestCaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutProjectInput | TestCaseCreateOrConnectWithoutProjectInput[]
    createMany?: TestCaseCreateManyProjectInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type SuiteUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<SuiteCreateWithoutProjectInput, SuiteUncheckedCreateWithoutProjectInput> | SuiteCreateWithoutProjectInput[] | SuiteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SuiteCreateOrConnectWithoutProjectInput | SuiteCreateOrConnectWithoutProjectInput[]
    createMany?: SuiteCreateManyProjectInputEnvelope
    connect?: SuiteWhereUniqueInput | SuiteWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<SectionCreateWithoutProjectInput, SectionUncheckedCreateWithoutProjectInput> | SectionCreateWithoutProjectInput[] | SectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutProjectInput | SectionCreateOrConnectWithoutProjectInput[]
    createMany?: SectionCreateManyProjectInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type TestCaseUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TestCaseCreateWithoutProjectInput, TestCaseUncheckedCreateWithoutProjectInput> | TestCaseCreateWithoutProjectInput[] | TestCaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutProjectInput | TestCaseCreateOrConnectWithoutProjectInput[]
    createMany?: TestCaseCreateManyProjectInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SuiteUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SuiteCreateWithoutProjectInput, SuiteUncheckedCreateWithoutProjectInput> | SuiteCreateWithoutProjectInput[] | SuiteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SuiteCreateOrConnectWithoutProjectInput | SuiteCreateOrConnectWithoutProjectInput[]
    upsert?: SuiteUpsertWithWhereUniqueWithoutProjectInput | SuiteUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SuiteCreateManyProjectInputEnvelope
    set?: SuiteWhereUniqueInput | SuiteWhereUniqueInput[]
    disconnect?: SuiteWhereUniqueInput | SuiteWhereUniqueInput[]
    delete?: SuiteWhereUniqueInput | SuiteWhereUniqueInput[]
    connect?: SuiteWhereUniqueInput | SuiteWhereUniqueInput[]
    update?: SuiteUpdateWithWhereUniqueWithoutProjectInput | SuiteUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SuiteUpdateManyWithWhereWithoutProjectInput | SuiteUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SuiteScalarWhereInput | SuiteScalarWhereInput[]
  }

  export type SectionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SectionCreateWithoutProjectInput, SectionUncheckedCreateWithoutProjectInput> | SectionCreateWithoutProjectInput[] | SectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutProjectInput | SectionCreateOrConnectWithoutProjectInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutProjectInput | SectionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SectionCreateManyProjectInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutProjectInput | SectionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutProjectInput | SectionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type TestCaseUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TestCaseCreateWithoutProjectInput, TestCaseUncheckedCreateWithoutProjectInput> | TestCaseCreateWithoutProjectInput[] | TestCaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutProjectInput | TestCaseCreateOrConnectWithoutProjectInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutProjectInput | TestCaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TestCaseCreateManyProjectInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutProjectInput | TestCaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutProjectInput | TestCaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type SuiteUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SuiteCreateWithoutProjectInput, SuiteUncheckedCreateWithoutProjectInput> | SuiteCreateWithoutProjectInput[] | SuiteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SuiteCreateOrConnectWithoutProjectInput | SuiteCreateOrConnectWithoutProjectInput[]
    upsert?: SuiteUpsertWithWhereUniqueWithoutProjectInput | SuiteUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SuiteCreateManyProjectInputEnvelope
    set?: SuiteWhereUniqueInput | SuiteWhereUniqueInput[]
    disconnect?: SuiteWhereUniqueInput | SuiteWhereUniqueInput[]
    delete?: SuiteWhereUniqueInput | SuiteWhereUniqueInput[]
    connect?: SuiteWhereUniqueInput | SuiteWhereUniqueInput[]
    update?: SuiteUpdateWithWhereUniqueWithoutProjectInput | SuiteUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SuiteUpdateManyWithWhereWithoutProjectInput | SuiteUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SuiteScalarWhereInput | SuiteScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SectionCreateWithoutProjectInput, SectionUncheckedCreateWithoutProjectInput> | SectionCreateWithoutProjectInput[] | SectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutProjectInput | SectionCreateOrConnectWithoutProjectInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutProjectInput | SectionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SectionCreateManyProjectInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutProjectInput | SectionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutProjectInput | SectionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type TestCaseUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TestCaseCreateWithoutProjectInput, TestCaseUncheckedCreateWithoutProjectInput> | TestCaseCreateWithoutProjectInput[] | TestCaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutProjectInput | TestCaseCreateOrConnectWithoutProjectInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutProjectInput | TestCaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TestCaseCreateManyProjectInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutProjectInput | TestCaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutProjectInput | TestCaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutSuitesInput = {
    create?: XOR<ProjectCreateWithoutSuitesInput, ProjectUncheckedCreateWithoutSuitesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSuitesInput
    connect?: ProjectWhereUniqueInput
  }

  export type SectionCreateNestedManyWithoutSuiteInput = {
    create?: XOR<SectionCreateWithoutSuiteInput, SectionUncheckedCreateWithoutSuiteInput> | SectionCreateWithoutSuiteInput[] | SectionUncheckedCreateWithoutSuiteInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutSuiteInput | SectionCreateOrConnectWithoutSuiteInput[]
    createMany?: SectionCreateManySuiteInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type TestCaseCreateNestedManyWithoutSuiteInput = {
    create?: XOR<TestCaseCreateWithoutSuiteInput, TestCaseUncheckedCreateWithoutSuiteInput> | TestCaseCreateWithoutSuiteInput[] | TestCaseUncheckedCreateWithoutSuiteInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutSuiteInput | TestCaseCreateOrConnectWithoutSuiteInput[]
    createMany?: TestCaseCreateManySuiteInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutSuiteInput = {
    create?: XOR<SectionCreateWithoutSuiteInput, SectionUncheckedCreateWithoutSuiteInput> | SectionCreateWithoutSuiteInput[] | SectionUncheckedCreateWithoutSuiteInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutSuiteInput | SectionCreateOrConnectWithoutSuiteInput[]
    createMany?: SectionCreateManySuiteInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type TestCaseUncheckedCreateNestedManyWithoutSuiteInput = {
    create?: XOR<TestCaseCreateWithoutSuiteInput, TestCaseUncheckedCreateWithoutSuiteInput> | TestCaseCreateWithoutSuiteInput[] | TestCaseUncheckedCreateWithoutSuiteInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutSuiteInput | TestCaseCreateOrConnectWithoutSuiteInput[]
    createMany?: TestCaseCreateManySuiteInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateOneRequiredWithoutSuitesNestedInput = {
    create?: XOR<ProjectCreateWithoutSuitesInput, ProjectUncheckedCreateWithoutSuitesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSuitesInput
    upsert?: ProjectUpsertWithoutSuitesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSuitesInput, ProjectUpdateWithoutSuitesInput>, ProjectUncheckedUpdateWithoutSuitesInput>
  }

  export type SectionUpdateManyWithoutSuiteNestedInput = {
    create?: XOR<SectionCreateWithoutSuiteInput, SectionUncheckedCreateWithoutSuiteInput> | SectionCreateWithoutSuiteInput[] | SectionUncheckedCreateWithoutSuiteInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutSuiteInput | SectionCreateOrConnectWithoutSuiteInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutSuiteInput | SectionUpsertWithWhereUniqueWithoutSuiteInput[]
    createMany?: SectionCreateManySuiteInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutSuiteInput | SectionUpdateWithWhereUniqueWithoutSuiteInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutSuiteInput | SectionUpdateManyWithWhereWithoutSuiteInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type TestCaseUpdateManyWithoutSuiteNestedInput = {
    create?: XOR<TestCaseCreateWithoutSuiteInput, TestCaseUncheckedCreateWithoutSuiteInput> | TestCaseCreateWithoutSuiteInput[] | TestCaseUncheckedCreateWithoutSuiteInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutSuiteInput | TestCaseCreateOrConnectWithoutSuiteInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutSuiteInput | TestCaseUpsertWithWhereUniqueWithoutSuiteInput[]
    createMany?: TestCaseCreateManySuiteInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutSuiteInput | TestCaseUpdateWithWhereUniqueWithoutSuiteInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutSuiteInput | TestCaseUpdateManyWithWhereWithoutSuiteInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutSuiteNestedInput = {
    create?: XOR<SectionCreateWithoutSuiteInput, SectionUncheckedCreateWithoutSuiteInput> | SectionCreateWithoutSuiteInput[] | SectionUncheckedCreateWithoutSuiteInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutSuiteInput | SectionCreateOrConnectWithoutSuiteInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutSuiteInput | SectionUpsertWithWhereUniqueWithoutSuiteInput[]
    createMany?: SectionCreateManySuiteInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutSuiteInput | SectionUpdateWithWhereUniqueWithoutSuiteInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutSuiteInput | SectionUpdateManyWithWhereWithoutSuiteInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type TestCaseUncheckedUpdateManyWithoutSuiteNestedInput = {
    create?: XOR<TestCaseCreateWithoutSuiteInput, TestCaseUncheckedCreateWithoutSuiteInput> | TestCaseCreateWithoutSuiteInput[] | TestCaseUncheckedCreateWithoutSuiteInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutSuiteInput | TestCaseCreateOrConnectWithoutSuiteInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutSuiteInput | TestCaseUpsertWithWhereUniqueWithoutSuiteInput[]
    createMany?: TestCaseCreateManySuiteInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutSuiteInput | TestCaseUpdateWithWhereUniqueWithoutSuiteInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutSuiteInput | TestCaseUpdateManyWithWhereWithoutSuiteInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type SuiteCreateNestedOneWithoutSectionsInput = {
    create?: XOR<SuiteCreateWithoutSectionsInput, SuiteUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: SuiteCreateOrConnectWithoutSectionsInput
    connect?: SuiteWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutSectionsInput = {
    create?: XOR<ProjectCreateWithoutSectionsInput, ProjectUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSectionsInput
    connect?: ProjectWhereUniqueInput
  }

  export type TestCaseCreateNestedManyWithoutSectionInput = {
    create?: XOR<TestCaseCreateWithoutSectionInput, TestCaseUncheckedCreateWithoutSectionInput> | TestCaseCreateWithoutSectionInput[] | TestCaseUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutSectionInput | TestCaseCreateOrConnectWithoutSectionInput[]
    createMany?: TestCaseCreateManySectionInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type TestCaseUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<TestCaseCreateWithoutSectionInput, TestCaseUncheckedCreateWithoutSectionInput> | TestCaseCreateWithoutSectionInput[] | TestCaseUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutSectionInput | TestCaseCreateOrConnectWithoutSectionInput[]
    createMany?: TestCaseCreateManySectionInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type SuiteUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<SuiteCreateWithoutSectionsInput, SuiteUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: SuiteCreateOrConnectWithoutSectionsInput
    upsert?: SuiteUpsertWithoutSectionsInput
    connect?: SuiteWhereUniqueInput
    update?: XOR<XOR<SuiteUpdateToOneWithWhereWithoutSectionsInput, SuiteUpdateWithoutSectionsInput>, SuiteUncheckedUpdateWithoutSectionsInput>
  }

  export type ProjectUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<ProjectCreateWithoutSectionsInput, ProjectUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSectionsInput
    upsert?: ProjectUpsertWithoutSectionsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSectionsInput, ProjectUpdateWithoutSectionsInput>, ProjectUncheckedUpdateWithoutSectionsInput>
  }

  export type TestCaseUpdateManyWithoutSectionNestedInput = {
    create?: XOR<TestCaseCreateWithoutSectionInput, TestCaseUncheckedCreateWithoutSectionInput> | TestCaseCreateWithoutSectionInput[] | TestCaseUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutSectionInput | TestCaseCreateOrConnectWithoutSectionInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutSectionInput | TestCaseUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: TestCaseCreateManySectionInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutSectionInput | TestCaseUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutSectionInput | TestCaseUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type TestCaseUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<TestCaseCreateWithoutSectionInput, TestCaseUncheckedCreateWithoutSectionInput> | TestCaseCreateWithoutSectionInput[] | TestCaseUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutSectionInput | TestCaseCreateOrConnectWithoutSectionInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutSectionInput | TestCaseUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: TestCaseCreateManySectionInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutSectionInput | TestCaseUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutSectionInput | TestCaseUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type SuiteCreateNestedOneWithoutTestCasesInput = {
    create?: XOR<SuiteCreateWithoutTestCasesInput, SuiteUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SuiteCreateOrConnectWithoutTestCasesInput
    connect?: SuiteWhereUniqueInput
  }

  export type SectionCreateNestedOneWithoutTestCasesInput = {
    create?: XOR<SectionCreateWithoutTestCasesInput, SectionUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutTestCasesInput
    connect?: SectionWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutTestCasesInput = {
    create?: XOR<ProjectCreateWithoutTestCasesInput, ProjectUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTestCasesInput
    connect?: ProjectWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SuiteUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: XOR<SuiteCreateWithoutTestCasesInput, SuiteUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SuiteCreateOrConnectWithoutTestCasesInput
    upsert?: SuiteUpsertWithoutTestCasesInput
    connect?: SuiteWhereUniqueInput
    update?: XOR<XOR<SuiteUpdateToOneWithWhereWithoutTestCasesInput, SuiteUpdateWithoutTestCasesInput>, SuiteUncheckedUpdateWithoutTestCasesInput>
  }

  export type SectionUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: XOR<SectionCreateWithoutTestCasesInput, SectionUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutTestCasesInput
    upsert?: SectionUpsertWithoutTestCasesInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutTestCasesInput, SectionUpdateWithoutTestCasesInput>, SectionUncheckedUpdateWithoutTestCasesInput>
  }

  export type ProjectUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: XOR<ProjectCreateWithoutTestCasesInput, ProjectUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTestCasesInput
    upsert?: ProjectUpsertWithoutTestCasesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTestCasesInput, ProjectUpdateWithoutTestCasesInput>, ProjectUncheckedUpdateWithoutTestCasesInput>
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

  export type SuiteCreateWithoutProjectInput = {
    name: string
    description?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionCreateNestedManyWithoutSuiteInput
    testCases?: TestCaseCreateNestedManyWithoutSuiteInput
  }

  export type SuiteUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    description?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionUncheckedCreateNestedManyWithoutSuiteInput
    testCases?: TestCaseUncheckedCreateNestedManyWithoutSuiteInput
  }

  export type SuiteCreateOrConnectWithoutProjectInput = {
    where: SuiteWhereUniqueInput
    create: XOR<SuiteCreateWithoutProjectInput, SuiteUncheckedCreateWithoutProjectInput>
  }

  export type SuiteCreateManyProjectInputEnvelope = {
    data: SuiteCreateManyProjectInput | SuiteCreateManyProjectInput[]
  }

  export type SectionCreateWithoutProjectInput = {
    name: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    suite: SuiteCreateNestedOneWithoutSectionsInput
    testCases?: TestCaseCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutProjectInput = {
    id?: number
    suiteId: number
    name: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutProjectInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutProjectInput, SectionUncheckedCreateWithoutProjectInput>
  }

  export type SectionCreateManyProjectInputEnvelope = {
    data: SectionCreateManyProjectInput | SectionCreateManyProjectInput[]
  }

  export type TestCaseCreateWithoutProjectInput = {
    title: string
    description?: string | null
    status?: string
    priority?: string
    type?: string
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    customFieldValues?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    suite: SuiteCreateNestedOneWithoutTestCasesInput
    section: SectionCreateNestedOneWithoutTestCasesInput
  }

  export type TestCaseUncheckedCreateWithoutProjectInput = {
    id?: number
    suiteId: number
    sectionId: number
    title: string
    description?: string | null
    status?: string
    priority?: string
    type?: string
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    customFieldValues?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TestCaseCreateOrConnectWithoutProjectInput = {
    where: TestCaseWhereUniqueInput
    create: XOR<TestCaseCreateWithoutProjectInput, TestCaseUncheckedCreateWithoutProjectInput>
  }

  export type TestCaseCreateManyProjectInputEnvelope = {
    data: TestCaseCreateManyProjectInput | TestCaseCreateManyProjectInput[]
  }

  export type SuiteUpsertWithWhereUniqueWithoutProjectInput = {
    where: SuiteWhereUniqueInput
    update: XOR<SuiteUpdateWithoutProjectInput, SuiteUncheckedUpdateWithoutProjectInput>
    create: XOR<SuiteCreateWithoutProjectInput, SuiteUncheckedCreateWithoutProjectInput>
  }

  export type SuiteUpdateWithWhereUniqueWithoutProjectInput = {
    where: SuiteWhereUniqueInput
    data: XOR<SuiteUpdateWithoutProjectInput, SuiteUncheckedUpdateWithoutProjectInput>
  }

  export type SuiteUpdateManyWithWhereWithoutProjectInput = {
    where: SuiteScalarWhereInput
    data: XOR<SuiteUpdateManyMutationInput, SuiteUncheckedUpdateManyWithoutProjectInput>
  }

  export type SuiteScalarWhereInput = {
    AND?: SuiteScalarWhereInput | SuiteScalarWhereInput[]
    OR?: SuiteScalarWhereInput[]
    NOT?: SuiteScalarWhereInput | SuiteScalarWhereInput[]
    id?: IntFilter<"Suite"> | number
    projectId?: IntFilter<"Suite"> | number
    name?: StringFilter<"Suite"> | string
    description?: StringNullableFilter<"Suite"> | string | null
    version?: IntFilter<"Suite"> | number
    createdAt?: DateTimeFilter<"Suite"> | Date | string
    updatedAt?: DateTimeFilter<"Suite"> | Date | string
  }

  export type SectionUpsertWithWhereUniqueWithoutProjectInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutProjectInput, SectionUncheckedUpdateWithoutProjectInput>
    create: XOR<SectionCreateWithoutProjectInput, SectionUncheckedCreateWithoutProjectInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutProjectInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutProjectInput, SectionUncheckedUpdateWithoutProjectInput>
  }

  export type SectionUpdateManyWithWhereWithoutProjectInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutProjectInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: IntFilter<"Section"> | number
    suiteId?: IntFilter<"Section"> | number
    projectId?: IntFilter<"Section"> | number
    name?: StringFilter<"Section"> | string
    version?: IntFilter<"Section"> | number
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
  }

  export type TestCaseUpsertWithWhereUniqueWithoutProjectInput = {
    where: TestCaseWhereUniqueInput
    update: XOR<TestCaseUpdateWithoutProjectInput, TestCaseUncheckedUpdateWithoutProjectInput>
    create: XOR<TestCaseCreateWithoutProjectInput, TestCaseUncheckedCreateWithoutProjectInput>
  }

  export type TestCaseUpdateWithWhereUniqueWithoutProjectInput = {
    where: TestCaseWhereUniqueInput
    data: XOR<TestCaseUpdateWithoutProjectInput, TestCaseUncheckedUpdateWithoutProjectInput>
  }

  export type TestCaseUpdateManyWithWhereWithoutProjectInput = {
    where: TestCaseScalarWhereInput
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyWithoutProjectInput>
  }

  export type TestCaseScalarWhereInput = {
    AND?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
    OR?: TestCaseScalarWhereInput[]
    NOT?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
    id?: IntFilter<"TestCase"> | number
    projectId?: IntFilter<"TestCase"> | number
    suiteId?: IntFilter<"TestCase"> | number
    sectionId?: IntFilter<"TestCase"> | number
    title?: StringFilter<"TestCase"> | string
    description?: StringNullableFilter<"TestCase"> | string | null
    status?: StringFilter<"TestCase"> | string
    priority?: StringFilter<"TestCase"> | string
    type?: StringFilter<"TestCase"> | string
    preconditions?: StringNullableFilter<"TestCase"> | string | null
    steps?: StringNullableFilter<"TestCase"> | string | null
    expectedResult?: StringNullableFilter<"TestCase"> | string | null
    customFieldValues?: StringNullableFilter<"TestCase"> | string | null
    createdBy?: StringNullableFilter<"TestCase"> | string | null
    updatedBy?: StringNullableFilter<"TestCase"> | string | null
    version?: IntFilter<"TestCase"> | number
    createdAt?: DateTimeFilter<"TestCase"> | Date | string
    updatedAt?: DateTimeFilter<"TestCase"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TestCase"> | Date | string | null
  }

  export type ProjectCreateWithoutSuitesInput = {
    id: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionCreateNestedManyWithoutProjectInput
    testCases?: TestCaseCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSuitesInput = {
    id: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionUncheckedCreateNestedManyWithoutProjectInput
    testCases?: TestCaseUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSuitesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSuitesInput, ProjectUncheckedCreateWithoutSuitesInput>
  }

  export type SectionCreateWithoutSuiteInput = {
    name: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSectionsInput
    testCases?: TestCaseCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutSuiteInput = {
    id?: number
    projectId: number
    name: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutSuiteInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutSuiteInput, SectionUncheckedCreateWithoutSuiteInput>
  }

  export type SectionCreateManySuiteInputEnvelope = {
    data: SectionCreateManySuiteInput | SectionCreateManySuiteInput[]
  }

  export type TestCaseCreateWithoutSuiteInput = {
    title: string
    description?: string | null
    status?: string
    priority?: string
    type?: string
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    customFieldValues?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    section: SectionCreateNestedOneWithoutTestCasesInput
    project: ProjectCreateNestedOneWithoutTestCasesInput
  }

  export type TestCaseUncheckedCreateWithoutSuiteInput = {
    id?: number
    projectId: number
    sectionId: number
    title: string
    description?: string | null
    status?: string
    priority?: string
    type?: string
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    customFieldValues?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TestCaseCreateOrConnectWithoutSuiteInput = {
    where: TestCaseWhereUniqueInput
    create: XOR<TestCaseCreateWithoutSuiteInput, TestCaseUncheckedCreateWithoutSuiteInput>
  }

  export type TestCaseCreateManySuiteInputEnvelope = {
    data: TestCaseCreateManySuiteInput | TestCaseCreateManySuiteInput[]
  }

  export type ProjectUpsertWithoutSuitesInput = {
    update: XOR<ProjectUpdateWithoutSuitesInput, ProjectUncheckedUpdateWithoutSuitesInput>
    create: XOR<ProjectCreateWithoutSuitesInput, ProjectUncheckedCreateWithoutSuitesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSuitesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSuitesInput, ProjectUncheckedUpdateWithoutSuitesInput>
  }

  export type ProjectUpdateWithoutSuitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUpdateManyWithoutProjectNestedInput
    testCases?: TestCaseUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSuitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUncheckedUpdateManyWithoutProjectNestedInput
    testCases?: TestCaseUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type SectionUpsertWithWhereUniqueWithoutSuiteInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutSuiteInput, SectionUncheckedUpdateWithoutSuiteInput>
    create: XOR<SectionCreateWithoutSuiteInput, SectionUncheckedCreateWithoutSuiteInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutSuiteInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutSuiteInput, SectionUncheckedUpdateWithoutSuiteInput>
  }

  export type SectionUpdateManyWithWhereWithoutSuiteInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutSuiteInput>
  }

  export type TestCaseUpsertWithWhereUniqueWithoutSuiteInput = {
    where: TestCaseWhereUniqueInput
    update: XOR<TestCaseUpdateWithoutSuiteInput, TestCaseUncheckedUpdateWithoutSuiteInput>
    create: XOR<TestCaseCreateWithoutSuiteInput, TestCaseUncheckedCreateWithoutSuiteInput>
  }

  export type TestCaseUpdateWithWhereUniqueWithoutSuiteInput = {
    where: TestCaseWhereUniqueInput
    data: XOR<TestCaseUpdateWithoutSuiteInput, TestCaseUncheckedUpdateWithoutSuiteInput>
  }

  export type TestCaseUpdateManyWithWhereWithoutSuiteInput = {
    where: TestCaseScalarWhereInput
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyWithoutSuiteInput>
  }

  export type SuiteCreateWithoutSectionsInput = {
    name: string
    description?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSuitesInput
    testCases?: TestCaseCreateNestedManyWithoutSuiteInput
  }

  export type SuiteUncheckedCreateWithoutSectionsInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseUncheckedCreateNestedManyWithoutSuiteInput
  }

  export type SuiteCreateOrConnectWithoutSectionsInput = {
    where: SuiteWhereUniqueInput
    create: XOR<SuiteCreateWithoutSectionsInput, SuiteUncheckedCreateWithoutSectionsInput>
  }

  export type ProjectCreateWithoutSectionsInput = {
    id: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suites?: SuiteCreateNestedManyWithoutProjectInput
    testCases?: TestCaseCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSectionsInput = {
    id: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suites?: SuiteUncheckedCreateNestedManyWithoutProjectInput
    testCases?: TestCaseUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSectionsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSectionsInput, ProjectUncheckedCreateWithoutSectionsInput>
  }

  export type TestCaseCreateWithoutSectionInput = {
    title: string
    description?: string | null
    status?: string
    priority?: string
    type?: string
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    customFieldValues?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    suite: SuiteCreateNestedOneWithoutTestCasesInput
    project: ProjectCreateNestedOneWithoutTestCasesInput
  }

  export type TestCaseUncheckedCreateWithoutSectionInput = {
    id?: number
    projectId: number
    suiteId: number
    title: string
    description?: string | null
    status?: string
    priority?: string
    type?: string
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    customFieldValues?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TestCaseCreateOrConnectWithoutSectionInput = {
    where: TestCaseWhereUniqueInput
    create: XOR<TestCaseCreateWithoutSectionInput, TestCaseUncheckedCreateWithoutSectionInput>
  }

  export type TestCaseCreateManySectionInputEnvelope = {
    data: TestCaseCreateManySectionInput | TestCaseCreateManySectionInput[]
  }

  export type SuiteUpsertWithoutSectionsInput = {
    update: XOR<SuiteUpdateWithoutSectionsInput, SuiteUncheckedUpdateWithoutSectionsInput>
    create: XOR<SuiteCreateWithoutSectionsInput, SuiteUncheckedCreateWithoutSectionsInput>
    where?: SuiteWhereInput
  }

  export type SuiteUpdateToOneWithWhereWithoutSectionsInput = {
    where?: SuiteWhereInput
    data: XOR<SuiteUpdateWithoutSectionsInput, SuiteUncheckedUpdateWithoutSectionsInput>
  }

  export type SuiteUpdateWithoutSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSuitesNestedInput
    testCases?: TestCaseUpdateManyWithoutSuiteNestedInput
  }

  export type SuiteUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseUncheckedUpdateManyWithoutSuiteNestedInput
  }

  export type ProjectUpsertWithoutSectionsInput = {
    update: XOR<ProjectUpdateWithoutSectionsInput, ProjectUncheckedUpdateWithoutSectionsInput>
    create: XOR<ProjectCreateWithoutSectionsInput, ProjectUncheckedCreateWithoutSectionsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSectionsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSectionsInput, ProjectUncheckedUpdateWithoutSectionsInput>
  }

  export type ProjectUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suites?: SuiteUpdateManyWithoutProjectNestedInput
    testCases?: TestCaseUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suites?: SuiteUncheckedUpdateManyWithoutProjectNestedInput
    testCases?: TestCaseUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TestCaseUpsertWithWhereUniqueWithoutSectionInput = {
    where: TestCaseWhereUniqueInput
    update: XOR<TestCaseUpdateWithoutSectionInput, TestCaseUncheckedUpdateWithoutSectionInput>
    create: XOR<TestCaseCreateWithoutSectionInput, TestCaseUncheckedCreateWithoutSectionInput>
  }

  export type TestCaseUpdateWithWhereUniqueWithoutSectionInput = {
    where: TestCaseWhereUniqueInput
    data: XOR<TestCaseUpdateWithoutSectionInput, TestCaseUncheckedUpdateWithoutSectionInput>
  }

  export type TestCaseUpdateManyWithWhereWithoutSectionInput = {
    where: TestCaseScalarWhereInput
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyWithoutSectionInput>
  }

  export type SuiteCreateWithoutTestCasesInput = {
    name: string
    description?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSuitesInput
    sections?: SectionCreateNestedManyWithoutSuiteInput
  }

  export type SuiteUncheckedCreateWithoutTestCasesInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionUncheckedCreateNestedManyWithoutSuiteInput
  }

  export type SuiteCreateOrConnectWithoutTestCasesInput = {
    where: SuiteWhereUniqueInput
    create: XOR<SuiteCreateWithoutTestCasesInput, SuiteUncheckedCreateWithoutTestCasesInput>
  }

  export type SectionCreateWithoutTestCasesInput = {
    name: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    suite: SuiteCreateNestedOneWithoutSectionsInput
    project: ProjectCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutTestCasesInput = {
    id?: number
    suiteId: number
    projectId: number
    name: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionCreateOrConnectWithoutTestCasesInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutTestCasesInput, SectionUncheckedCreateWithoutTestCasesInput>
  }

  export type ProjectCreateWithoutTestCasesInput = {
    id: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suites?: SuiteCreateNestedManyWithoutProjectInput
    sections?: SectionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTestCasesInput = {
    id: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suites?: SuiteUncheckedCreateNestedManyWithoutProjectInput
    sections?: SectionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTestCasesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTestCasesInput, ProjectUncheckedCreateWithoutTestCasesInput>
  }

  export type SuiteUpsertWithoutTestCasesInput = {
    update: XOR<SuiteUpdateWithoutTestCasesInput, SuiteUncheckedUpdateWithoutTestCasesInput>
    create: XOR<SuiteCreateWithoutTestCasesInput, SuiteUncheckedCreateWithoutTestCasesInput>
    where?: SuiteWhereInput
  }

  export type SuiteUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: SuiteWhereInput
    data: XOR<SuiteUpdateWithoutTestCasesInput, SuiteUncheckedUpdateWithoutTestCasesInput>
  }

  export type SuiteUpdateWithoutTestCasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSuitesNestedInput
    sections?: SectionUpdateManyWithoutSuiteNestedInput
  }

  export type SuiteUncheckedUpdateWithoutTestCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUncheckedUpdateManyWithoutSuiteNestedInput
  }

  export type SectionUpsertWithoutTestCasesInput = {
    update: XOR<SectionUpdateWithoutTestCasesInput, SectionUncheckedUpdateWithoutTestCasesInput>
    create: XOR<SectionCreateWithoutTestCasesInput, SectionUncheckedCreateWithoutTestCasesInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutTestCasesInput, SectionUncheckedUpdateWithoutTestCasesInput>
  }

  export type SectionUpdateWithoutTestCasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suite?: SuiteUpdateOneRequiredWithoutSectionsNestedInput
    project?: ProjectUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutTestCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    suiteId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpsertWithoutTestCasesInput = {
    update: XOR<ProjectUpdateWithoutTestCasesInput, ProjectUncheckedUpdateWithoutTestCasesInput>
    create: XOR<ProjectCreateWithoutTestCasesInput, ProjectUncheckedCreateWithoutTestCasesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTestCasesInput, ProjectUncheckedUpdateWithoutTestCasesInput>
  }

  export type ProjectUpdateWithoutTestCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suites?: SuiteUpdateManyWithoutProjectNestedInput
    sections?: SectionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTestCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suites?: SuiteUncheckedUpdateManyWithoutProjectNestedInput
    sections?: SectionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type SuiteCreateManyProjectInput = {
    id?: number
    name: string
    description?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionCreateManyProjectInput = {
    id?: number
    suiteId: number
    name: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCaseCreateManyProjectInput = {
    id?: number
    suiteId: number
    sectionId: number
    title: string
    description?: string | null
    status?: string
    priority?: string
    type?: string
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    customFieldValues?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SuiteUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUpdateManyWithoutSuiteNestedInput
    testCases?: TestCaseUpdateManyWithoutSuiteNestedInput
  }

  export type SuiteUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUncheckedUpdateManyWithoutSuiteNestedInput
    testCases?: TestCaseUncheckedUpdateManyWithoutSuiteNestedInput
  }

  export type SuiteUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suite?: SuiteUpdateOneRequiredWithoutSectionsNestedInput
    testCases?: TestCaseUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    suiteId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    suiteId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    customFieldValues?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suite?: SuiteUpdateOneRequiredWithoutTestCasesNestedInput
    section?: SectionUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TestCaseUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    suiteId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    customFieldValues?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestCaseUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    suiteId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    customFieldValues?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SectionCreateManySuiteInput = {
    id?: number
    projectId: number
    name: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCaseCreateManySuiteInput = {
    id?: number
    projectId: number
    sectionId: number
    title: string
    description?: string | null
    status?: string
    priority?: string
    type?: string
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    customFieldValues?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SectionUpdateWithoutSuiteInput = {
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSectionsNestedInput
    testCases?: TestCaseUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutSuiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutSuiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseUpdateWithoutSuiteInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    customFieldValues?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    section?: SectionUpdateOneRequiredWithoutTestCasesNestedInput
    project?: ProjectUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TestCaseUncheckedUpdateWithoutSuiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    customFieldValues?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestCaseUncheckedUpdateManyWithoutSuiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    customFieldValues?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestCaseCreateManySectionInput = {
    id?: number
    projectId: number
    suiteId: number
    title: string
    description?: string | null
    status?: string
    priority?: string
    type?: string
    preconditions?: string | null
    steps?: string | null
    expectedResult?: string | null
    customFieldValues?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TestCaseUpdateWithoutSectionInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    customFieldValues?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suite?: SuiteUpdateOneRequiredWithoutTestCasesNestedInput
    project?: ProjectUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TestCaseUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    suiteId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    customFieldValues?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestCaseUncheckedUpdateManyWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    suiteId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preconditions?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    expectedResult?: NullableStringFieldUpdateOperationsInput | string | null
    customFieldValues?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
     * @deprecated Use SectionCountOutputTypeDefaultArgs instead
     */
    export type SectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SuiteDefaultArgs instead
     */
    export type SuiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SuiteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SectionDefaultArgs instead
     */
    export type SectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestCaseDefaultArgs instead
     */
    export type TestCaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestCaseDefaultArgs<ExtArgs>
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
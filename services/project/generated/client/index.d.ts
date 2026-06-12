
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
 * Model TestCaseType
 * 
 */
export type TestCaseType = $Result.DefaultSelection<Prisma.$TestCaseTypePayload>
/**
 * Model Priority
 * 
 */
export type Priority = $Result.DefaultSelection<Prisma.$PriorityPayload>
/**
 * Model CustomField
 * 
 */
export type CustomField = $Result.DefaultSelection<Prisma.$CustomFieldPayload>
/**
 * Model CustomFieldOption
 * 
 */
export type CustomFieldOption = $Result.DefaultSelection<Prisma.$CustomFieldOptionPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model IdempotencyKey
 * 
 */
export type IdempotencyKey = $Result.DefaultSelection<Prisma.$IdempotencyKeyPayload>
/**
 * Model FeatureFlag
 * 
 */
export type FeatureFlag = $Result.DefaultSelection<Prisma.$FeatureFlagPayload>
/**
 * Model ProjectRole
 * 
 */
export type ProjectRole = $Result.DefaultSelection<Prisma.$ProjectRolePayload>
/**
 * Model ProjectPermission
 * 
 */
export type ProjectPermission = $Result.DefaultSelection<Prisma.$ProjectPermissionPayload>
/**
 * Model ProjectUserRole
 * 
 */
export type ProjectUserRole = $Result.DefaultSelection<Prisma.$ProjectUserRolePayload>

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
   * `prisma.testCaseType`: Exposes CRUD operations for the **TestCaseType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestCaseTypes
    * const testCaseTypes = await prisma.testCaseType.findMany()
    * ```
    */
  get testCaseType(): Prisma.TestCaseTypeDelegate<ExtArgs>;

  /**
   * `prisma.priority`: Exposes CRUD operations for the **Priority** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Priorities
    * const priorities = await prisma.priority.findMany()
    * ```
    */
  get priority(): Prisma.PriorityDelegate<ExtArgs>;

  /**
   * `prisma.customField`: Exposes CRUD operations for the **CustomField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomFields
    * const customFields = await prisma.customField.findMany()
    * ```
    */
  get customField(): Prisma.CustomFieldDelegate<ExtArgs>;

  /**
   * `prisma.customFieldOption`: Exposes CRUD operations for the **CustomFieldOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomFieldOptions
    * const customFieldOptions = await prisma.customFieldOption.findMany()
    * ```
    */
  get customFieldOption(): Prisma.CustomFieldOptionDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.idempotencyKey`: Exposes CRUD operations for the **IdempotencyKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdempotencyKeys
    * const idempotencyKeys = await prisma.idempotencyKey.findMany()
    * ```
    */
  get idempotencyKey(): Prisma.IdempotencyKeyDelegate<ExtArgs>;

  /**
   * `prisma.featureFlag`: Exposes CRUD operations for the **FeatureFlag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeatureFlags
    * const featureFlags = await prisma.featureFlag.findMany()
    * ```
    */
  get featureFlag(): Prisma.FeatureFlagDelegate<ExtArgs>;

  /**
   * `prisma.projectRole`: Exposes CRUD operations for the **ProjectRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectRoles
    * const projectRoles = await prisma.projectRole.findMany()
    * ```
    */
  get projectRole(): Prisma.ProjectRoleDelegate<ExtArgs>;

  /**
   * `prisma.projectPermission`: Exposes CRUD operations for the **ProjectPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectPermissions
    * const projectPermissions = await prisma.projectPermission.findMany()
    * ```
    */
  get projectPermission(): Prisma.ProjectPermissionDelegate<ExtArgs>;

  /**
   * `prisma.projectUserRole`: Exposes CRUD operations for the **ProjectUserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectUserRoles
    * const projectUserRoles = await prisma.projectUserRole.findMany()
    * ```
    */
  get projectUserRole(): Prisma.ProjectUserRoleDelegate<ExtArgs>;
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
    TestCaseType: 'TestCaseType',
    Priority: 'Priority',
    CustomField: 'CustomField',
    CustomFieldOption: 'CustomFieldOption',
    AuditLog: 'AuditLog',
    IdempotencyKey: 'IdempotencyKey',
    FeatureFlag: 'FeatureFlag',
    ProjectRole: 'ProjectRole',
    ProjectPermission: 'ProjectPermission',
    ProjectUserRole: 'ProjectUserRole'
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
      modelProps: "project" | "testCaseType" | "priority" | "customField" | "customFieldOption" | "auditLog" | "idempotencyKey" | "featureFlag" | "projectRole" | "projectPermission" | "projectUserRole"
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
      TestCaseType: {
        payload: Prisma.$TestCaseTypePayload<ExtArgs>
        fields: Prisma.TestCaseTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestCaseTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestCaseTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseTypePayload>
          }
          findFirst: {
            args: Prisma.TestCaseTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestCaseTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseTypePayload>
          }
          findMany: {
            args: Prisma.TestCaseTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseTypePayload>[]
          }
          create: {
            args: Prisma.TestCaseTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseTypePayload>
          }
          createMany: {
            args: Prisma.TestCaseTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCaseTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseTypePayload>[]
          }
          delete: {
            args: Prisma.TestCaseTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseTypePayload>
          }
          update: {
            args: Prisma.TestCaseTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseTypePayload>
          }
          deleteMany: {
            args: Prisma.TestCaseTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestCaseTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestCaseTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseTypePayload>
          }
          aggregate: {
            args: Prisma.TestCaseTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestCaseType>
          }
          groupBy: {
            args: Prisma.TestCaseTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestCaseTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCaseTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TestCaseTypeCountAggregateOutputType> | number
          }
        }
      }
      Priority: {
        payload: Prisma.$PriorityPayload<ExtArgs>
        fields: Prisma.PriorityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriorityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriorityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>
          }
          findFirst: {
            args: Prisma.PriorityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriorityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>
          }
          findMany: {
            args: Prisma.PriorityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>[]
          }
          create: {
            args: Prisma.PriorityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>
          }
          createMany: {
            args: Prisma.PriorityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriorityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>[]
          }
          delete: {
            args: Prisma.PriorityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>
          }
          update: {
            args: Prisma.PriorityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>
          }
          deleteMany: {
            args: Prisma.PriorityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriorityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriorityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>
          }
          aggregate: {
            args: Prisma.PriorityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriority>
          }
          groupBy: {
            args: Prisma.PriorityGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriorityGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriorityCountArgs<ExtArgs>
            result: $Utils.Optional<PriorityCountAggregateOutputType> | number
          }
        }
      }
      CustomField: {
        payload: Prisma.$CustomFieldPayload<ExtArgs>
        fields: Prisma.CustomFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          findFirst: {
            args: Prisma.CustomFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          findMany: {
            args: Prisma.CustomFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>[]
          }
          create: {
            args: Prisma.CustomFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          createMany: {
            args: Prisma.CustomFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>[]
          }
          delete: {
            args: Prisma.CustomFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          update: {
            args: Prisma.CustomFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          deleteMany: {
            args: Prisma.CustomFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          aggregate: {
            args: Prisma.CustomFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomField>
          }
          groupBy: {
            args: Prisma.CustomFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomFieldCountArgs<ExtArgs>
            result: $Utils.Optional<CustomFieldCountAggregateOutputType> | number
          }
        }
      }
      CustomFieldOption: {
        payload: Prisma.$CustomFieldOptionPayload<ExtArgs>
        fields: Prisma.CustomFieldOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomFieldOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomFieldOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldOptionPayload>
          }
          findFirst: {
            args: Prisma.CustomFieldOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomFieldOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldOptionPayload>
          }
          findMany: {
            args: Prisma.CustomFieldOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldOptionPayload>[]
          }
          create: {
            args: Prisma.CustomFieldOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldOptionPayload>
          }
          createMany: {
            args: Prisma.CustomFieldOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomFieldOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldOptionPayload>[]
          }
          delete: {
            args: Prisma.CustomFieldOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldOptionPayload>
          }
          update: {
            args: Prisma.CustomFieldOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldOptionPayload>
          }
          deleteMany: {
            args: Prisma.CustomFieldOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomFieldOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomFieldOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldOptionPayload>
          }
          aggregate: {
            args: Prisma.CustomFieldOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomFieldOption>
          }
          groupBy: {
            args: Prisma.CustomFieldOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomFieldOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomFieldOptionCountArgs<ExtArgs>
            result: $Utils.Optional<CustomFieldOptionCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
      FeatureFlag: {
        payload: Prisma.$FeatureFlagPayload<ExtArgs>
        fields: Prisma.FeatureFlagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureFlagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureFlagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>
          }
          findFirst: {
            args: Prisma.FeatureFlagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureFlagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>
          }
          findMany: {
            args: Prisma.FeatureFlagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>[]
          }
          create: {
            args: Prisma.FeatureFlagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>
          }
          createMany: {
            args: Prisma.FeatureFlagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureFlagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>[]
          }
          delete: {
            args: Prisma.FeatureFlagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>
          }
          update: {
            args: Prisma.FeatureFlagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>
          }
          deleteMany: {
            args: Prisma.FeatureFlagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureFlagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeatureFlagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>
          }
          aggregate: {
            args: Prisma.FeatureFlagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeatureFlag>
          }
          groupBy: {
            args: Prisma.FeatureFlagGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureFlagGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureFlagCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureFlagCountAggregateOutputType> | number
          }
        }
      }
      ProjectRole: {
        payload: Prisma.$ProjectRolePayload<ExtArgs>
        fields: Prisma.ProjectRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>
          }
          findFirst: {
            args: Prisma.ProjectRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>
          }
          findMany: {
            args: Prisma.ProjectRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>[]
          }
          create: {
            args: Prisma.ProjectRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>
          }
          createMany: {
            args: Prisma.ProjectRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>[]
          }
          delete: {
            args: Prisma.ProjectRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>
          }
          update: {
            args: Prisma.ProjectRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>
          }
          deleteMany: {
            args: Prisma.ProjectRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>
          }
          aggregate: {
            args: Prisma.ProjectRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectRole>
          }
          groupBy: {
            args: Prisma.ProjectRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectRoleCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectRoleCountAggregateOutputType> | number
          }
        }
      }
      ProjectPermission: {
        payload: Prisma.$ProjectPermissionPayload<ExtArgs>
        fields: Prisma.ProjectPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPermissionPayload>
          }
          findFirst: {
            args: Prisma.ProjectPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPermissionPayload>
          }
          findMany: {
            args: Prisma.ProjectPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPermissionPayload>[]
          }
          create: {
            args: Prisma.ProjectPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPermissionPayload>
          }
          createMany: {
            args: Prisma.ProjectPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectPermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPermissionPayload>[]
          }
          delete: {
            args: Prisma.ProjectPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPermissionPayload>
          }
          update: {
            args: Prisma.ProjectPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPermissionPayload>
          }
          deleteMany: {
            args: Prisma.ProjectPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPermissionPayload>
          }
          aggregate: {
            args: Prisma.ProjectPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectPermission>
          }
          groupBy: {
            args: Prisma.ProjectPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectPermissionCountAggregateOutputType> | number
          }
        }
      }
      ProjectUserRole: {
        payload: Prisma.$ProjectUserRolePayload<ExtArgs>
        fields: Prisma.ProjectUserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectUserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectUserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserRolePayload>
          }
          findFirst: {
            args: Prisma.ProjectUserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectUserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserRolePayload>
          }
          findMany: {
            args: Prisma.ProjectUserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserRolePayload>[]
          }
          create: {
            args: Prisma.ProjectUserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserRolePayload>
          }
          createMany: {
            args: Prisma.ProjectUserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectUserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserRolePayload>[]
          }
          delete: {
            args: Prisma.ProjectUserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserRolePayload>
          }
          update: {
            args: Prisma.ProjectUserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserRolePayload>
          }
          deleteMany: {
            args: Prisma.ProjectUserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserRolePayload>
          }
          aggregate: {
            args: Prisma.ProjectUserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectUserRole>
          }
          groupBy: {
            args: Prisma.ProjectUserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectUserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectUserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectUserRoleCountAggregateOutputType> | number
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
    testCaseTypes: number
    priorities: number
    customFields: number
    auditLogs: number
    featureFlags: number
    roles: number
    userRoles: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testCaseTypes?: boolean | ProjectCountOutputTypeCountTestCaseTypesArgs
    priorities?: boolean | ProjectCountOutputTypeCountPrioritiesArgs
    customFields?: boolean | ProjectCountOutputTypeCountCustomFieldsArgs
    auditLogs?: boolean | ProjectCountOutputTypeCountAuditLogsArgs
    featureFlags?: boolean | ProjectCountOutputTypeCountFeatureFlagsArgs
    roles?: boolean | ProjectCountOutputTypeCountRolesArgs
    userRoles?: boolean | ProjectCountOutputTypeCountUserRolesArgs
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
  export type ProjectCountOutputTypeCountTestCaseTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseTypeWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPrioritiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriorityWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCustomFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountFeatureFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureFlagWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectRoleWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectUserRoleWhereInput
  }


  /**
   * Count Type CustomFieldCountOutputType
   */

  export type CustomFieldCountOutputType = {
    options: number
  }

  export type CustomFieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | CustomFieldCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * CustomFieldCountOutputType without action
   */
  export type CustomFieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldCountOutputType
     */
    select?: CustomFieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomFieldCountOutputType without action
   */
  export type CustomFieldCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldOptionWhereInput
  }


  /**
   * Count Type ProjectRoleCountOutputType
   */

  export type ProjectRoleCountOutputType = {
    permissions: number
    userRoles: number
  }

  export type ProjectRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | ProjectRoleCountOutputTypeCountPermissionsArgs
    userRoles?: boolean | ProjectRoleCountOutputTypeCountUserRolesArgs
  }

  // Custom InputTypes
  /**
   * ProjectRoleCountOutputType without action
   */
  export type ProjectRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleCountOutputType
     */
    select?: ProjectRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectRoleCountOutputType without action
   */
  export type ProjectRoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPermissionWhereInput
  }

  /**
   * ProjectRoleCountOutputType without action
   */
  export type ProjectRoleCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectUserRoleWhereInput
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
    description: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
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
    description?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
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
    description: string | null
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
    description?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testCaseTypes?: boolean | Project$testCaseTypesArgs<ExtArgs>
    priorities?: boolean | Project$prioritiesArgs<ExtArgs>
    customFields?: boolean | Project$customFieldsArgs<ExtArgs>
    auditLogs?: boolean | Project$auditLogsArgs<ExtArgs>
    featureFlags?: boolean | Project$featureFlagsArgs<ExtArgs>
    roles?: boolean | Project$rolesArgs<ExtArgs>
    userRoles?: boolean | Project$userRolesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testCaseTypes?: boolean | Project$testCaseTypesArgs<ExtArgs>
    priorities?: boolean | Project$prioritiesArgs<ExtArgs>
    customFields?: boolean | Project$customFieldsArgs<ExtArgs>
    auditLogs?: boolean | Project$auditLogsArgs<ExtArgs>
    featureFlags?: boolean | Project$featureFlagsArgs<ExtArgs>
    roles?: boolean | Project$rolesArgs<ExtArgs>
    userRoles?: boolean | Project$userRolesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      testCaseTypes: Prisma.$TestCaseTypePayload<ExtArgs>[]
      priorities: Prisma.$PriorityPayload<ExtArgs>[]
      customFields: Prisma.$CustomFieldPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      featureFlags: Prisma.$FeatureFlagPayload<ExtArgs>[]
      roles: Prisma.$ProjectRolePayload<ExtArgs>[]
      userRoles: Prisma.$ProjectUserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
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
    testCaseTypes<T extends Project$testCaseTypesArgs<ExtArgs> = {}>(args?: Subset<T, Project$testCaseTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseTypePayload<ExtArgs>, T, "findMany"> | Null>
    priorities<T extends Project$prioritiesArgs<ExtArgs> = {}>(args?: Subset<T, Project$prioritiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findMany"> | Null>
    customFields<T extends Project$customFieldsArgs<ExtArgs> = {}>(args?: Subset<T, Project$customFieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends Project$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Project$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    featureFlags<T extends Project$featureFlagsArgs<ExtArgs> = {}>(args?: Subset<T, Project$featureFlagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findMany"> | Null>
    roles<T extends Project$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Project$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findMany"> | Null>
    userRoles<T extends Project$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, Project$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly description: FieldRef<"Project", 'String'>
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
   * Project.testCaseTypes
   */
  export type Project$testCaseTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseType
     */
    select?: TestCaseTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseTypeInclude<ExtArgs> | null
    where?: TestCaseTypeWhereInput
    orderBy?: TestCaseTypeOrderByWithRelationInput | TestCaseTypeOrderByWithRelationInput[]
    cursor?: TestCaseTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCaseTypeScalarFieldEnum | TestCaseTypeScalarFieldEnum[]
  }

  /**
   * Project.priorities
   */
  export type Project$prioritiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    where?: PriorityWhereInput
    orderBy?: PriorityOrderByWithRelationInput | PriorityOrderByWithRelationInput[]
    cursor?: PriorityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriorityScalarFieldEnum | PriorityScalarFieldEnum[]
  }

  /**
   * Project.customFields
   */
  export type Project$customFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    where?: CustomFieldWhereInput
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    cursor?: CustomFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomFieldScalarFieldEnum | CustomFieldScalarFieldEnum[]
  }

  /**
   * Project.auditLogs
   */
  export type Project$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Project.featureFlags
   */
  export type Project$featureFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureFlagInclude<ExtArgs> | null
    where?: FeatureFlagWhereInput
    orderBy?: FeatureFlagOrderByWithRelationInput | FeatureFlagOrderByWithRelationInput[]
    cursor?: FeatureFlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureFlagScalarFieldEnum | FeatureFlagScalarFieldEnum[]
  }

  /**
   * Project.roles
   */
  export type Project$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    where?: ProjectRoleWhereInput
    orderBy?: ProjectRoleOrderByWithRelationInput | ProjectRoleOrderByWithRelationInput[]
    cursor?: ProjectRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectRoleScalarFieldEnum | ProjectRoleScalarFieldEnum[]
  }

  /**
   * Project.userRoles
   */
  export type Project$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUserRole
     */
    select?: ProjectUserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserRoleInclude<ExtArgs> | null
    where?: ProjectUserRoleWhereInput
    orderBy?: ProjectUserRoleOrderByWithRelationInput | ProjectUserRoleOrderByWithRelationInput[]
    cursor?: ProjectUserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectUserRoleScalarFieldEnum | ProjectUserRoleScalarFieldEnum[]
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
   * Model TestCaseType
   */

  export type AggregateTestCaseType = {
    _count: TestCaseTypeCountAggregateOutputType | null
    _avg: TestCaseTypeAvgAggregateOutputType | null
    _sum: TestCaseTypeSumAggregateOutputType | null
    _min: TestCaseTypeMinAggregateOutputType | null
    _max: TestCaseTypeMaxAggregateOutputType | null
  }

  export type TestCaseTypeAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type TestCaseTypeSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type TestCaseTypeMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    description: string | null
    color: string | null
    createdAt: Date | null
  }

  export type TestCaseTypeMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    description: string | null
    color: string | null
    createdAt: Date | null
  }

  export type TestCaseTypeCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    description: number
    color: number
    createdAt: number
    _all: number
  }


  export type TestCaseTypeAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type TestCaseTypeSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type TestCaseTypeMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
  }

  export type TestCaseTypeMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
  }

  export type TestCaseTypeCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    _all?: true
  }

  export type TestCaseTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCaseType to aggregate.
     */
    where?: TestCaseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseTypes to fetch.
     */
    orderBy?: TestCaseTypeOrderByWithRelationInput | TestCaseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestCaseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestCaseTypes
    **/
    _count?: true | TestCaseTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestCaseTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestCaseTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestCaseTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestCaseTypeMaxAggregateInputType
  }

  export type GetTestCaseTypeAggregateType<T extends TestCaseTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTestCaseType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestCaseType[P]>
      : GetScalarType<T[P], AggregateTestCaseType[P]>
  }




  export type TestCaseTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseTypeWhereInput
    orderBy?: TestCaseTypeOrderByWithAggregationInput | TestCaseTypeOrderByWithAggregationInput[]
    by: TestCaseTypeScalarFieldEnum[] | TestCaseTypeScalarFieldEnum
    having?: TestCaseTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCaseTypeCountAggregateInputType | true
    _avg?: TestCaseTypeAvgAggregateInputType
    _sum?: TestCaseTypeSumAggregateInputType
    _min?: TestCaseTypeMinAggregateInputType
    _max?: TestCaseTypeMaxAggregateInputType
  }

  export type TestCaseTypeGroupByOutputType = {
    id: number
    projectId: number
    name: string
    description: string | null
    color: string | null
    createdAt: Date
    _count: TestCaseTypeCountAggregateOutputType | null
    _avg: TestCaseTypeAvgAggregateOutputType | null
    _sum: TestCaseTypeSumAggregateOutputType | null
    _min: TestCaseTypeMinAggregateOutputType | null
    _max: TestCaseTypeMaxAggregateOutputType | null
  }

  type GetTestCaseTypeGroupByPayload<T extends TestCaseTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestCaseTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestCaseTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestCaseTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TestCaseTypeGroupByOutputType[P]>
        }
      >
    >


  export type TestCaseTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCaseType"]>

  export type TestCaseTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCaseType"]>

  export type TestCaseTypeSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
  }

  export type TestCaseTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type TestCaseTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $TestCaseTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestCaseType"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      name: string
      description: string | null
      color: string | null
      createdAt: Date
    }, ExtArgs["result"]["testCaseType"]>
    composites: {}
  }

  type TestCaseTypeGetPayload<S extends boolean | null | undefined | TestCaseTypeDefaultArgs> = $Result.GetResult<Prisma.$TestCaseTypePayload, S>

  type TestCaseTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestCaseTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestCaseTypeCountAggregateInputType | true
    }

  export interface TestCaseTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestCaseType'], meta: { name: 'TestCaseType' } }
    /**
     * Find zero or one TestCaseType that matches the filter.
     * @param {TestCaseTypeFindUniqueArgs} args - Arguments to find a TestCaseType
     * @example
     * // Get one TestCaseType
     * const testCaseType = await prisma.testCaseType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestCaseTypeFindUniqueArgs>(args: SelectSubset<T, TestCaseTypeFindUniqueArgs<ExtArgs>>): Prisma__TestCaseTypeClient<$Result.GetResult<Prisma.$TestCaseTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TestCaseType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TestCaseTypeFindUniqueOrThrowArgs} args - Arguments to find a TestCaseType
     * @example
     * // Get one TestCaseType
     * const testCaseType = await prisma.testCaseType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestCaseTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TestCaseTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestCaseTypeClient<$Result.GetResult<Prisma.$TestCaseTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TestCaseType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseTypeFindFirstArgs} args - Arguments to find a TestCaseType
     * @example
     * // Get one TestCaseType
     * const testCaseType = await prisma.testCaseType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestCaseTypeFindFirstArgs>(args?: SelectSubset<T, TestCaseTypeFindFirstArgs<ExtArgs>>): Prisma__TestCaseTypeClient<$Result.GetResult<Prisma.$TestCaseTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TestCaseType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseTypeFindFirstOrThrowArgs} args - Arguments to find a TestCaseType
     * @example
     * // Get one TestCaseType
     * const testCaseType = await prisma.testCaseType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestCaseTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TestCaseTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestCaseTypeClient<$Result.GetResult<Prisma.$TestCaseTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TestCaseTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestCaseTypes
     * const testCaseTypes = await prisma.testCaseType.findMany()
     * 
     * // Get first 10 TestCaseTypes
     * const testCaseTypes = await prisma.testCaseType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testCaseTypeWithIdOnly = await prisma.testCaseType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestCaseTypeFindManyArgs>(args?: SelectSubset<T, TestCaseTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TestCaseType.
     * @param {TestCaseTypeCreateArgs} args - Arguments to create a TestCaseType.
     * @example
     * // Create one TestCaseType
     * const TestCaseType = await prisma.testCaseType.create({
     *   data: {
     *     // ... data to create a TestCaseType
     *   }
     * })
     * 
     */
    create<T extends TestCaseTypeCreateArgs>(args: SelectSubset<T, TestCaseTypeCreateArgs<ExtArgs>>): Prisma__TestCaseTypeClient<$Result.GetResult<Prisma.$TestCaseTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TestCaseTypes.
     * @param {TestCaseTypeCreateManyArgs} args - Arguments to create many TestCaseTypes.
     * @example
     * // Create many TestCaseTypes
     * const testCaseType = await prisma.testCaseType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCaseTypeCreateManyArgs>(args?: SelectSubset<T, TestCaseTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestCaseTypes and returns the data saved in the database.
     * @param {TestCaseTypeCreateManyAndReturnArgs} args - Arguments to create many TestCaseTypes.
     * @example
     * // Create many TestCaseTypes
     * const testCaseType = await prisma.testCaseType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestCaseTypes and only return the `id`
     * const testCaseTypeWithIdOnly = await prisma.testCaseType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCaseTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCaseTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TestCaseType.
     * @param {TestCaseTypeDeleteArgs} args - Arguments to delete one TestCaseType.
     * @example
     * // Delete one TestCaseType
     * const TestCaseType = await prisma.testCaseType.delete({
     *   where: {
     *     // ... filter to delete one TestCaseType
     *   }
     * })
     * 
     */
    delete<T extends TestCaseTypeDeleteArgs>(args: SelectSubset<T, TestCaseTypeDeleteArgs<ExtArgs>>): Prisma__TestCaseTypeClient<$Result.GetResult<Prisma.$TestCaseTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TestCaseType.
     * @param {TestCaseTypeUpdateArgs} args - Arguments to update one TestCaseType.
     * @example
     * // Update one TestCaseType
     * const testCaseType = await prisma.testCaseType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestCaseTypeUpdateArgs>(args: SelectSubset<T, TestCaseTypeUpdateArgs<ExtArgs>>): Prisma__TestCaseTypeClient<$Result.GetResult<Prisma.$TestCaseTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TestCaseTypes.
     * @param {TestCaseTypeDeleteManyArgs} args - Arguments to filter TestCaseTypes to delete.
     * @example
     * // Delete a few TestCaseTypes
     * const { count } = await prisma.testCaseType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestCaseTypeDeleteManyArgs>(args?: SelectSubset<T, TestCaseTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCaseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestCaseTypes
     * const testCaseType = await prisma.testCaseType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestCaseTypeUpdateManyArgs>(args: SelectSubset<T, TestCaseTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestCaseType.
     * @param {TestCaseTypeUpsertArgs} args - Arguments to update or create a TestCaseType.
     * @example
     * // Update or create a TestCaseType
     * const testCaseType = await prisma.testCaseType.upsert({
     *   create: {
     *     // ... data to create a TestCaseType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestCaseType we want to update
     *   }
     * })
     */
    upsert<T extends TestCaseTypeUpsertArgs>(args: SelectSubset<T, TestCaseTypeUpsertArgs<ExtArgs>>): Prisma__TestCaseTypeClient<$Result.GetResult<Prisma.$TestCaseTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TestCaseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseTypeCountArgs} args - Arguments to filter TestCaseTypes to count.
     * @example
     * // Count the number of TestCaseTypes
     * const count = await prisma.testCaseType.count({
     *   where: {
     *     // ... the filter for the TestCaseTypes we want to count
     *   }
     * })
    **/
    count<T extends TestCaseTypeCountArgs>(
      args?: Subset<T, TestCaseTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCaseTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestCaseType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestCaseTypeAggregateArgs>(args: Subset<T, TestCaseTypeAggregateArgs>): Prisma.PrismaPromise<GetTestCaseTypeAggregateType<T>>

    /**
     * Group by TestCaseType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseTypeGroupByArgs} args - Group by arguments.
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
      T extends TestCaseTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestCaseTypeGroupByArgs['orderBy'] }
        : { orderBy?: TestCaseTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestCaseTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestCaseTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestCaseType model
   */
  readonly fields: TestCaseTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestCaseType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestCaseTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TestCaseType model
   */ 
  interface TestCaseTypeFieldRefs {
    readonly id: FieldRef<"TestCaseType", 'Int'>
    readonly projectId: FieldRef<"TestCaseType", 'Int'>
    readonly name: FieldRef<"TestCaseType", 'String'>
    readonly description: FieldRef<"TestCaseType", 'String'>
    readonly color: FieldRef<"TestCaseType", 'String'>
    readonly createdAt: FieldRef<"TestCaseType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestCaseType findUnique
   */
  export type TestCaseTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseType
     */
    select?: TestCaseTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseTypeInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseType to fetch.
     */
    where: TestCaseTypeWhereUniqueInput
  }

  /**
   * TestCaseType findUniqueOrThrow
   */
  export type TestCaseTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseType
     */
    select?: TestCaseTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseTypeInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseType to fetch.
     */
    where: TestCaseTypeWhereUniqueInput
  }

  /**
   * TestCaseType findFirst
   */
  export type TestCaseTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseType
     */
    select?: TestCaseTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseTypeInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseType to fetch.
     */
    where?: TestCaseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseTypes to fetch.
     */
    orderBy?: TestCaseTypeOrderByWithRelationInput | TestCaseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCaseTypes.
     */
    cursor?: TestCaseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCaseTypes.
     */
    distinct?: TestCaseTypeScalarFieldEnum | TestCaseTypeScalarFieldEnum[]
  }

  /**
   * TestCaseType findFirstOrThrow
   */
  export type TestCaseTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseType
     */
    select?: TestCaseTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseTypeInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseType to fetch.
     */
    where?: TestCaseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseTypes to fetch.
     */
    orderBy?: TestCaseTypeOrderByWithRelationInput | TestCaseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCaseTypes.
     */
    cursor?: TestCaseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCaseTypes.
     */
    distinct?: TestCaseTypeScalarFieldEnum | TestCaseTypeScalarFieldEnum[]
  }

  /**
   * TestCaseType findMany
   */
  export type TestCaseTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseType
     */
    select?: TestCaseTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseTypeInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseTypes to fetch.
     */
    where?: TestCaseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseTypes to fetch.
     */
    orderBy?: TestCaseTypeOrderByWithRelationInput | TestCaseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestCaseTypes.
     */
    cursor?: TestCaseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseTypes.
     */
    skip?: number
    distinct?: TestCaseTypeScalarFieldEnum | TestCaseTypeScalarFieldEnum[]
  }

  /**
   * TestCaseType create
   */
  export type TestCaseTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseType
     */
    select?: TestCaseTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TestCaseType.
     */
    data: XOR<TestCaseTypeCreateInput, TestCaseTypeUncheckedCreateInput>
  }

  /**
   * TestCaseType createMany
   */
  export type TestCaseTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestCaseTypes.
     */
    data: TestCaseTypeCreateManyInput | TestCaseTypeCreateManyInput[]
  }

  /**
   * TestCaseType createManyAndReturn
   */
  export type TestCaseTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseType
     */
    select?: TestCaseTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TestCaseTypes.
     */
    data: TestCaseTypeCreateManyInput | TestCaseTypeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCaseType update
   */
  export type TestCaseTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseType
     */
    select?: TestCaseTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TestCaseType.
     */
    data: XOR<TestCaseTypeUpdateInput, TestCaseTypeUncheckedUpdateInput>
    /**
     * Choose, which TestCaseType to update.
     */
    where: TestCaseTypeWhereUniqueInput
  }

  /**
   * TestCaseType updateMany
   */
  export type TestCaseTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestCaseTypes.
     */
    data: XOR<TestCaseTypeUpdateManyMutationInput, TestCaseTypeUncheckedUpdateManyInput>
    /**
     * Filter which TestCaseTypes to update
     */
    where?: TestCaseTypeWhereInput
  }

  /**
   * TestCaseType upsert
   */
  export type TestCaseTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseType
     */
    select?: TestCaseTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TestCaseType to update in case it exists.
     */
    where: TestCaseTypeWhereUniqueInput
    /**
     * In case the TestCaseType found by the `where` argument doesn't exist, create a new TestCaseType with this data.
     */
    create: XOR<TestCaseTypeCreateInput, TestCaseTypeUncheckedCreateInput>
    /**
     * In case the TestCaseType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestCaseTypeUpdateInput, TestCaseTypeUncheckedUpdateInput>
  }

  /**
   * TestCaseType delete
   */
  export type TestCaseTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseType
     */
    select?: TestCaseTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseTypeInclude<ExtArgs> | null
    /**
     * Filter which TestCaseType to delete.
     */
    where: TestCaseTypeWhereUniqueInput
  }

  /**
   * TestCaseType deleteMany
   */
  export type TestCaseTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCaseTypes to delete
     */
    where?: TestCaseTypeWhereInput
  }

  /**
   * TestCaseType without action
   */
  export type TestCaseTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseType
     */
    select?: TestCaseTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseTypeInclude<ExtArgs> | null
  }


  /**
   * Model Priority
   */

  export type AggregatePriority = {
    _count: PriorityCountAggregateOutputType | null
    _avg: PriorityAvgAggregateOutputType | null
    _sum: PrioritySumAggregateOutputType | null
    _min: PriorityMinAggregateOutputType | null
    _max: PriorityMaxAggregateOutputType | null
  }

  export type PriorityAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    level: number | null
  }

  export type PrioritySumAggregateOutputType = {
    id: number | null
    projectId: number | null
    level: number | null
  }

  export type PriorityMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    level: number | null
    color: string | null
    createdAt: Date | null
  }

  export type PriorityMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    level: number | null
    color: string | null
    createdAt: Date | null
  }

  export type PriorityCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    level: number
    color: number
    createdAt: number
    _all: number
  }


  export type PriorityAvgAggregateInputType = {
    id?: true
    projectId?: true
    level?: true
  }

  export type PrioritySumAggregateInputType = {
    id?: true
    projectId?: true
    level?: true
  }

  export type PriorityMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    level?: true
    color?: true
    createdAt?: true
  }

  export type PriorityMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    level?: true
    color?: true
    createdAt?: true
  }

  export type PriorityCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    level?: true
    color?: true
    createdAt?: true
    _all?: true
  }

  export type PriorityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Priority to aggregate.
     */
    where?: PriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Priorities to fetch.
     */
    orderBy?: PriorityOrderByWithRelationInput | PriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Priorities
    **/
    _count?: true | PriorityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriorityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrioritySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriorityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriorityMaxAggregateInputType
  }

  export type GetPriorityAggregateType<T extends PriorityAggregateArgs> = {
        [P in keyof T & keyof AggregatePriority]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriority[P]>
      : GetScalarType<T[P], AggregatePriority[P]>
  }




  export type PriorityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriorityWhereInput
    orderBy?: PriorityOrderByWithAggregationInput | PriorityOrderByWithAggregationInput[]
    by: PriorityScalarFieldEnum[] | PriorityScalarFieldEnum
    having?: PriorityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriorityCountAggregateInputType | true
    _avg?: PriorityAvgAggregateInputType
    _sum?: PrioritySumAggregateInputType
    _min?: PriorityMinAggregateInputType
    _max?: PriorityMaxAggregateInputType
  }

  export type PriorityGroupByOutputType = {
    id: number
    projectId: number
    name: string
    level: number
    color: string | null
    createdAt: Date
    _count: PriorityCountAggregateOutputType | null
    _avg: PriorityAvgAggregateOutputType | null
    _sum: PrioritySumAggregateOutputType | null
    _min: PriorityMinAggregateOutputType | null
    _max: PriorityMaxAggregateOutputType | null
  }

  type GetPriorityGroupByPayload<T extends PriorityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriorityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriorityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriorityGroupByOutputType[P]>
            : GetScalarType<T[P], PriorityGroupByOutputType[P]>
        }
      >
    >


  export type PrioritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    level?: boolean
    color?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priority"]>

  export type PrioritySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    level?: boolean
    color?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priority"]>

  export type PrioritySelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    level?: boolean
    color?: boolean
    createdAt?: boolean
  }

  export type PriorityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PriorityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $PriorityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Priority"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      name: string
      level: number
      color: string | null
      createdAt: Date
    }, ExtArgs["result"]["priority"]>
    composites: {}
  }

  type PriorityGetPayload<S extends boolean | null | undefined | PriorityDefaultArgs> = $Result.GetResult<Prisma.$PriorityPayload, S>

  type PriorityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriorityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriorityCountAggregateInputType | true
    }

  export interface PriorityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Priority'], meta: { name: 'Priority' } }
    /**
     * Find zero or one Priority that matches the filter.
     * @param {PriorityFindUniqueArgs} args - Arguments to find a Priority
     * @example
     * // Get one Priority
     * const priority = await prisma.priority.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriorityFindUniqueArgs>(args: SelectSubset<T, PriorityFindUniqueArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Priority that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriorityFindUniqueOrThrowArgs} args - Arguments to find a Priority
     * @example
     * // Get one Priority
     * const priority = await prisma.priority.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriorityFindUniqueOrThrowArgs>(args: SelectSubset<T, PriorityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Priority that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityFindFirstArgs} args - Arguments to find a Priority
     * @example
     * // Get one Priority
     * const priority = await prisma.priority.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriorityFindFirstArgs>(args?: SelectSubset<T, PriorityFindFirstArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Priority that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityFindFirstOrThrowArgs} args - Arguments to find a Priority
     * @example
     * // Get one Priority
     * const priority = await prisma.priority.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriorityFindFirstOrThrowArgs>(args?: SelectSubset<T, PriorityFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Priorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Priorities
     * const priorities = await prisma.priority.findMany()
     * 
     * // Get first 10 Priorities
     * const priorities = await prisma.priority.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priorityWithIdOnly = await prisma.priority.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriorityFindManyArgs>(args?: SelectSubset<T, PriorityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Priority.
     * @param {PriorityCreateArgs} args - Arguments to create a Priority.
     * @example
     * // Create one Priority
     * const Priority = await prisma.priority.create({
     *   data: {
     *     // ... data to create a Priority
     *   }
     * })
     * 
     */
    create<T extends PriorityCreateArgs>(args: SelectSubset<T, PriorityCreateArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Priorities.
     * @param {PriorityCreateManyArgs} args - Arguments to create many Priorities.
     * @example
     * // Create many Priorities
     * const priority = await prisma.priority.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriorityCreateManyArgs>(args?: SelectSubset<T, PriorityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Priorities and returns the data saved in the database.
     * @param {PriorityCreateManyAndReturnArgs} args - Arguments to create many Priorities.
     * @example
     * // Create many Priorities
     * const priority = await prisma.priority.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Priorities and only return the `id`
     * const priorityWithIdOnly = await prisma.priority.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriorityCreateManyAndReturnArgs>(args?: SelectSubset<T, PriorityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Priority.
     * @param {PriorityDeleteArgs} args - Arguments to delete one Priority.
     * @example
     * // Delete one Priority
     * const Priority = await prisma.priority.delete({
     *   where: {
     *     // ... filter to delete one Priority
     *   }
     * })
     * 
     */
    delete<T extends PriorityDeleteArgs>(args: SelectSubset<T, PriorityDeleteArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Priority.
     * @param {PriorityUpdateArgs} args - Arguments to update one Priority.
     * @example
     * // Update one Priority
     * const priority = await prisma.priority.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriorityUpdateArgs>(args: SelectSubset<T, PriorityUpdateArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Priorities.
     * @param {PriorityDeleteManyArgs} args - Arguments to filter Priorities to delete.
     * @example
     * // Delete a few Priorities
     * const { count } = await prisma.priority.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriorityDeleteManyArgs>(args?: SelectSubset<T, PriorityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Priorities
     * const priority = await prisma.priority.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriorityUpdateManyArgs>(args: SelectSubset<T, PriorityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Priority.
     * @param {PriorityUpsertArgs} args - Arguments to update or create a Priority.
     * @example
     * // Update or create a Priority
     * const priority = await prisma.priority.upsert({
     *   create: {
     *     // ... data to create a Priority
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Priority we want to update
     *   }
     * })
     */
    upsert<T extends PriorityUpsertArgs>(args: SelectSubset<T, PriorityUpsertArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityCountArgs} args - Arguments to filter Priorities to count.
     * @example
     * // Count the number of Priorities
     * const count = await prisma.priority.count({
     *   where: {
     *     // ... the filter for the Priorities we want to count
     *   }
     * })
    **/
    count<T extends PriorityCountArgs>(
      args?: Subset<T, PriorityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriorityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Priority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriorityAggregateArgs>(args: Subset<T, PriorityAggregateArgs>): Prisma.PrismaPromise<GetPriorityAggregateType<T>>

    /**
     * Group by Priority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityGroupByArgs} args - Group by arguments.
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
      T extends PriorityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriorityGroupByArgs['orderBy'] }
        : { orderBy?: PriorityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriorityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriorityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Priority model
   */
  readonly fields: PriorityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Priority.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriorityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Priority model
   */ 
  interface PriorityFieldRefs {
    readonly id: FieldRef<"Priority", 'Int'>
    readonly projectId: FieldRef<"Priority", 'Int'>
    readonly name: FieldRef<"Priority", 'String'>
    readonly level: FieldRef<"Priority", 'Int'>
    readonly color: FieldRef<"Priority", 'String'>
    readonly createdAt: FieldRef<"Priority", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Priority findUnique
   */
  export type PriorityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * Filter, which Priority to fetch.
     */
    where: PriorityWhereUniqueInput
  }

  /**
   * Priority findUniqueOrThrow
   */
  export type PriorityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * Filter, which Priority to fetch.
     */
    where: PriorityWhereUniqueInput
  }

  /**
   * Priority findFirst
   */
  export type PriorityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * Filter, which Priority to fetch.
     */
    where?: PriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Priorities to fetch.
     */
    orderBy?: PriorityOrderByWithRelationInput | PriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Priorities.
     */
    cursor?: PriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Priorities.
     */
    distinct?: PriorityScalarFieldEnum | PriorityScalarFieldEnum[]
  }

  /**
   * Priority findFirstOrThrow
   */
  export type PriorityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * Filter, which Priority to fetch.
     */
    where?: PriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Priorities to fetch.
     */
    orderBy?: PriorityOrderByWithRelationInput | PriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Priorities.
     */
    cursor?: PriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Priorities.
     */
    distinct?: PriorityScalarFieldEnum | PriorityScalarFieldEnum[]
  }

  /**
   * Priority findMany
   */
  export type PriorityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * Filter, which Priorities to fetch.
     */
    where?: PriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Priorities to fetch.
     */
    orderBy?: PriorityOrderByWithRelationInput | PriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Priorities.
     */
    cursor?: PriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Priorities.
     */
    skip?: number
    distinct?: PriorityScalarFieldEnum | PriorityScalarFieldEnum[]
  }

  /**
   * Priority create
   */
  export type PriorityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * The data needed to create a Priority.
     */
    data: XOR<PriorityCreateInput, PriorityUncheckedCreateInput>
  }

  /**
   * Priority createMany
   */
  export type PriorityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Priorities.
     */
    data: PriorityCreateManyInput | PriorityCreateManyInput[]
  }

  /**
   * Priority createManyAndReturn
   */
  export type PriorityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Priorities.
     */
    data: PriorityCreateManyInput | PriorityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Priority update
   */
  export type PriorityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * The data needed to update a Priority.
     */
    data: XOR<PriorityUpdateInput, PriorityUncheckedUpdateInput>
    /**
     * Choose, which Priority to update.
     */
    where: PriorityWhereUniqueInput
  }

  /**
   * Priority updateMany
   */
  export type PriorityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Priorities.
     */
    data: XOR<PriorityUpdateManyMutationInput, PriorityUncheckedUpdateManyInput>
    /**
     * Filter which Priorities to update
     */
    where?: PriorityWhereInput
  }

  /**
   * Priority upsert
   */
  export type PriorityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * The filter to search for the Priority to update in case it exists.
     */
    where: PriorityWhereUniqueInput
    /**
     * In case the Priority found by the `where` argument doesn't exist, create a new Priority with this data.
     */
    create: XOR<PriorityCreateInput, PriorityUncheckedCreateInput>
    /**
     * In case the Priority was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriorityUpdateInput, PriorityUncheckedUpdateInput>
  }

  /**
   * Priority delete
   */
  export type PriorityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * Filter which Priority to delete.
     */
    where: PriorityWhereUniqueInput
  }

  /**
   * Priority deleteMany
   */
  export type PriorityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Priorities to delete
     */
    where?: PriorityWhereInput
  }

  /**
   * Priority without action
   */
  export type PriorityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
  }


  /**
   * Model CustomField
   */

  export type AggregateCustomField = {
    _count: CustomFieldCountAggregateOutputType | null
    _avg: CustomFieldAvgAggregateOutputType | null
    _sum: CustomFieldSumAggregateOutputType | null
    _min: CustomFieldMinAggregateOutputType | null
    _max: CustomFieldMaxAggregateOutputType | null
  }

  export type CustomFieldAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    order: number | null
  }

  export type CustomFieldSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    order: number | null
  }

  export type CustomFieldMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    description: string | null
    fieldType: string | null
    required: boolean | null
    order: number | null
    createdAt: Date | null
  }

  export type CustomFieldMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    description: string | null
    fieldType: string | null
    required: boolean | null
    order: number | null
    createdAt: Date | null
  }

  export type CustomFieldCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    description: number
    fieldType: number
    required: number
    order: number
    createdAt: number
    _all: number
  }


  export type CustomFieldAvgAggregateInputType = {
    id?: true
    projectId?: true
    order?: true
  }

  export type CustomFieldSumAggregateInputType = {
    id?: true
    projectId?: true
    order?: true
  }

  export type CustomFieldMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    description?: true
    fieldType?: true
    required?: true
    order?: true
    createdAt?: true
  }

  export type CustomFieldMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    description?: true
    fieldType?: true
    required?: true
    order?: true
    createdAt?: true
  }

  export type CustomFieldCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    description?: true
    fieldType?: true
    required?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type CustomFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomField to aggregate.
     */
    where?: CustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFields to fetch.
     */
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomFields
    **/
    _count?: true | CustomFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomFieldMaxAggregateInputType
  }

  export type GetCustomFieldAggregateType<T extends CustomFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomField[P]>
      : GetScalarType<T[P], AggregateCustomField[P]>
  }




  export type CustomFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldWhereInput
    orderBy?: CustomFieldOrderByWithAggregationInput | CustomFieldOrderByWithAggregationInput[]
    by: CustomFieldScalarFieldEnum[] | CustomFieldScalarFieldEnum
    having?: CustomFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomFieldCountAggregateInputType | true
    _avg?: CustomFieldAvgAggregateInputType
    _sum?: CustomFieldSumAggregateInputType
    _min?: CustomFieldMinAggregateInputType
    _max?: CustomFieldMaxAggregateInputType
  }

  export type CustomFieldGroupByOutputType = {
    id: number
    projectId: number
    name: string
    description: string | null
    fieldType: string
    required: boolean
    order: number
    createdAt: Date
    _count: CustomFieldCountAggregateOutputType | null
    _avg: CustomFieldAvgAggregateOutputType | null
    _sum: CustomFieldSumAggregateOutputType | null
    _min: CustomFieldMinAggregateOutputType | null
    _max: CustomFieldMaxAggregateOutputType | null
  }

  type GetCustomFieldGroupByPayload<T extends CustomFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomFieldGroupByOutputType[P]>
            : GetScalarType<T[P], CustomFieldGroupByOutputType[P]>
        }
      >
    >


  export type CustomFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    description?: boolean
    fieldType?: boolean
    required?: boolean
    order?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    options?: boolean | CustomField$optionsArgs<ExtArgs>
    _count?: boolean | CustomFieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customField"]>

  export type CustomFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    description?: boolean
    fieldType?: boolean
    required?: boolean
    order?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customField"]>

  export type CustomFieldSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    description?: boolean
    fieldType?: boolean
    required?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type CustomFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    options?: boolean | CustomField$optionsArgs<ExtArgs>
    _count?: boolean | CustomFieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $CustomFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomField"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      options: Prisma.$CustomFieldOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      name: string
      description: string | null
      fieldType: string
      required: boolean
      order: number
      createdAt: Date
    }, ExtArgs["result"]["customField"]>
    composites: {}
  }

  type CustomFieldGetPayload<S extends boolean | null | undefined | CustomFieldDefaultArgs> = $Result.GetResult<Prisma.$CustomFieldPayload, S>

  type CustomFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomFieldFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomFieldCountAggregateInputType | true
    }

  export interface CustomFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomField'], meta: { name: 'CustomField' } }
    /**
     * Find zero or one CustomField that matches the filter.
     * @param {CustomFieldFindUniqueArgs} args - Arguments to find a CustomField
     * @example
     * // Get one CustomField
     * const customField = await prisma.customField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomFieldFindUniqueArgs>(args: SelectSubset<T, CustomFieldFindUniqueArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomField that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomFieldFindUniqueOrThrowArgs} args - Arguments to find a CustomField
     * @example
     * // Get one CustomField
     * const customField = await prisma.customField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldFindFirstArgs} args - Arguments to find a CustomField
     * @example
     * // Get one CustomField
     * const customField = await prisma.customField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomFieldFindFirstArgs>(args?: SelectSubset<T, CustomFieldFindFirstArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldFindFirstOrThrowArgs} args - Arguments to find a CustomField
     * @example
     * // Get one CustomField
     * const customField = await prisma.customField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomFields
     * const customFields = await prisma.customField.findMany()
     * 
     * // Get first 10 CustomFields
     * const customFields = await prisma.customField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customFieldWithIdOnly = await prisma.customField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomFieldFindManyArgs>(args?: SelectSubset<T, CustomFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomField.
     * @param {CustomFieldCreateArgs} args - Arguments to create a CustomField.
     * @example
     * // Create one CustomField
     * const CustomField = await prisma.customField.create({
     *   data: {
     *     // ... data to create a CustomField
     *   }
     * })
     * 
     */
    create<T extends CustomFieldCreateArgs>(args: SelectSubset<T, CustomFieldCreateArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomFields.
     * @param {CustomFieldCreateManyArgs} args - Arguments to create many CustomFields.
     * @example
     * // Create many CustomFields
     * const customField = await prisma.customField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomFieldCreateManyArgs>(args?: SelectSubset<T, CustomFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomFields and returns the data saved in the database.
     * @param {CustomFieldCreateManyAndReturnArgs} args - Arguments to create many CustomFields.
     * @example
     * // Create many CustomFields
     * const customField = await prisma.customField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomFields and only return the `id`
     * const customFieldWithIdOnly = await prisma.customField.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomField.
     * @param {CustomFieldDeleteArgs} args - Arguments to delete one CustomField.
     * @example
     * // Delete one CustomField
     * const CustomField = await prisma.customField.delete({
     *   where: {
     *     // ... filter to delete one CustomField
     *   }
     * })
     * 
     */
    delete<T extends CustomFieldDeleteArgs>(args: SelectSubset<T, CustomFieldDeleteArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomField.
     * @param {CustomFieldUpdateArgs} args - Arguments to update one CustomField.
     * @example
     * // Update one CustomField
     * const customField = await prisma.customField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomFieldUpdateArgs>(args: SelectSubset<T, CustomFieldUpdateArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomFields.
     * @param {CustomFieldDeleteManyArgs} args - Arguments to filter CustomFields to delete.
     * @example
     * // Delete a few CustomFields
     * const { count } = await prisma.customField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomFieldDeleteManyArgs>(args?: SelectSubset<T, CustomFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomFields
     * const customField = await prisma.customField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomFieldUpdateManyArgs>(args: SelectSubset<T, CustomFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomField.
     * @param {CustomFieldUpsertArgs} args - Arguments to update or create a CustomField.
     * @example
     * // Update or create a CustomField
     * const customField = await prisma.customField.upsert({
     *   create: {
     *     // ... data to create a CustomField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomField we want to update
     *   }
     * })
     */
    upsert<T extends CustomFieldUpsertArgs>(args: SelectSubset<T, CustomFieldUpsertArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldCountArgs} args - Arguments to filter CustomFields to count.
     * @example
     * // Count the number of CustomFields
     * const count = await prisma.customField.count({
     *   where: {
     *     // ... the filter for the CustomFields we want to count
     *   }
     * })
    **/
    count<T extends CustomFieldCountArgs>(
      args?: Subset<T, CustomFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomFieldAggregateArgs>(args: Subset<T, CustomFieldAggregateArgs>): Prisma.PrismaPromise<GetCustomFieldAggregateType<T>>

    /**
     * Group by CustomField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldGroupByArgs} args - Group by arguments.
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
      T extends CustomFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomFieldGroupByArgs['orderBy'] }
        : { orderBy?: CustomFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomField model
   */
  readonly fields: CustomFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    options<T extends CustomField$optionsArgs<ExtArgs> = {}>(args?: Subset<T, CustomField$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldOptionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the CustomField model
   */ 
  interface CustomFieldFieldRefs {
    readonly id: FieldRef<"CustomField", 'Int'>
    readonly projectId: FieldRef<"CustomField", 'Int'>
    readonly name: FieldRef<"CustomField", 'String'>
    readonly description: FieldRef<"CustomField", 'String'>
    readonly fieldType: FieldRef<"CustomField", 'String'>
    readonly required: FieldRef<"CustomField", 'Boolean'>
    readonly order: FieldRef<"CustomField", 'Int'>
    readonly createdAt: FieldRef<"CustomField", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomField findUnique
   */
  export type CustomFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomField to fetch.
     */
    where: CustomFieldWhereUniqueInput
  }

  /**
   * CustomField findUniqueOrThrow
   */
  export type CustomFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomField to fetch.
     */
    where: CustomFieldWhereUniqueInput
  }

  /**
   * CustomField findFirst
   */
  export type CustomFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomField to fetch.
     */
    where?: CustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFields to fetch.
     */
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomFields.
     */
    cursor?: CustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFields.
     */
    distinct?: CustomFieldScalarFieldEnum | CustomFieldScalarFieldEnum[]
  }

  /**
   * CustomField findFirstOrThrow
   */
  export type CustomFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomField to fetch.
     */
    where?: CustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFields to fetch.
     */
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomFields.
     */
    cursor?: CustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFields.
     */
    distinct?: CustomFieldScalarFieldEnum | CustomFieldScalarFieldEnum[]
  }

  /**
   * CustomField findMany
   */
  export type CustomFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomFields to fetch.
     */
    where?: CustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFields to fetch.
     */
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomFields.
     */
    cursor?: CustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFields.
     */
    skip?: number
    distinct?: CustomFieldScalarFieldEnum | CustomFieldScalarFieldEnum[]
  }

  /**
   * CustomField create
   */
  export type CustomFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomField.
     */
    data: XOR<CustomFieldCreateInput, CustomFieldUncheckedCreateInput>
  }

  /**
   * CustomField createMany
   */
  export type CustomFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomFields.
     */
    data: CustomFieldCreateManyInput | CustomFieldCreateManyInput[]
  }

  /**
   * CustomField createManyAndReturn
   */
  export type CustomFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomFields.
     */
    data: CustomFieldCreateManyInput | CustomFieldCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomField update
   */
  export type CustomFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomField.
     */
    data: XOR<CustomFieldUpdateInput, CustomFieldUncheckedUpdateInput>
    /**
     * Choose, which CustomField to update.
     */
    where: CustomFieldWhereUniqueInput
  }

  /**
   * CustomField updateMany
   */
  export type CustomFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomFields.
     */
    data: XOR<CustomFieldUpdateManyMutationInput, CustomFieldUncheckedUpdateManyInput>
    /**
     * Filter which CustomFields to update
     */
    where?: CustomFieldWhereInput
  }

  /**
   * CustomField upsert
   */
  export type CustomFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomField to update in case it exists.
     */
    where: CustomFieldWhereUniqueInput
    /**
     * In case the CustomField found by the `where` argument doesn't exist, create a new CustomField with this data.
     */
    create: XOR<CustomFieldCreateInput, CustomFieldUncheckedCreateInput>
    /**
     * In case the CustomField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomFieldUpdateInput, CustomFieldUncheckedUpdateInput>
  }

  /**
   * CustomField delete
   */
  export type CustomFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter which CustomField to delete.
     */
    where: CustomFieldWhereUniqueInput
  }

  /**
   * CustomField deleteMany
   */
  export type CustomFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomFields to delete
     */
    where?: CustomFieldWhereInput
  }

  /**
   * CustomField.options
   */
  export type CustomField$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldOption
     */
    select?: CustomFieldOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldOptionInclude<ExtArgs> | null
    where?: CustomFieldOptionWhereInput
    orderBy?: CustomFieldOptionOrderByWithRelationInput | CustomFieldOptionOrderByWithRelationInput[]
    cursor?: CustomFieldOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomFieldOptionScalarFieldEnum | CustomFieldOptionScalarFieldEnum[]
  }

  /**
   * CustomField without action
   */
  export type CustomFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
  }


  /**
   * Model CustomFieldOption
   */

  export type AggregateCustomFieldOption = {
    _count: CustomFieldOptionCountAggregateOutputType | null
    _avg: CustomFieldOptionAvgAggregateOutputType | null
    _sum: CustomFieldOptionSumAggregateOutputType | null
    _min: CustomFieldOptionMinAggregateOutputType | null
    _max: CustomFieldOptionMaxAggregateOutputType | null
  }

  export type CustomFieldOptionAvgAggregateOutputType = {
    id: number | null
    fieldId: number | null
    order: number | null
  }

  export type CustomFieldOptionSumAggregateOutputType = {
    id: number | null
    fieldId: number | null
    order: number | null
  }

  export type CustomFieldOptionMinAggregateOutputType = {
    id: number | null
    fieldId: number | null
    label: string | null
    value: string | null
    order: number | null
    createdAt: Date | null
  }

  export type CustomFieldOptionMaxAggregateOutputType = {
    id: number | null
    fieldId: number | null
    label: string | null
    value: string | null
    order: number | null
    createdAt: Date | null
  }

  export type CustomFieldOptionCountAggregateOutputType = {
    id: number
    fieldId: number
    label: number
    value: number
    order: number
    createdAt: number
    _all: number
  }


  export type CustomFieldOptionAvgAggregateInputType = {
    id?: true
    fieldId?: true
    order?: true
  }

  export type CustomFieldOptionSumAggregateInputType = {
    id?: true
    fieldId?: true
    order?: true
  }

  export type CustomFieldOptionMinAggregateInputType = {
    id?: true
    fieldId?: true
    label?: true
    value?: true
    order?: true
    createdAt?: true
  }

  export type CustomFieldOptionMaxAggregateInputType = {
    id?: true
    fieldId?: true
    label?: true
    value?: true
    order?: true
    createdAt?: true
  }

  export type CustomFieldOptionCountAggregateInputType = {
    id?: true
    fieldId?: true
    label?: true
    value?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type CustomFieldOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomFieldOption to aggregate.
     */
    where?: CustomFieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFieldOptions to fetch.
     */
    orderBy?: CustomFieldOptionOrderByWithRelationInput | CustomFieldOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomFieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFieldOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFieldOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomFieldOptions
    **/
    _count?: true | CustomFieldOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomFieldOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomFieldOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomFieldOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomFieldOptionMaxAggregateInputType
  }

  export type GetCustomFieldOptionAggregateType<T extends CustomFieldOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomFieldOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomFieldOption[P]>
      : GetScalarType<T[P], AggregateCustomFieldOption[P]>
  }




  export type CustomFieldOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldOptionWhereInput
    orderBy?: CustomFieldOptionOrderByWithAggregationInput | CustomFieldOptionOrderByWithAggregationInput[]
    by: CustomFieldOptionScalarFieldEnum[] | CustomFieldOptionScalarFieldEnum
    having?: CustomFieldOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomFieldOptionCountAggregateInputType | true
    _avg?: CustomFieldOptionAvgAggregateInputType
    _sum?: CustomFieldOptionSumAggregateInputType
    _min?: CustomFieldOptionMinAggregateInputType
    _max?: CustomFieldOptionMaxAggregateInputType
  }

  export type CustomFieldOptionGroupByOutputType = {
    id: number
    fieldId: number
    label: string
    value: string
    order: number
    createdAt: Date
    _count: CustomFieldOptionCountAggregateOutputType | null
    _avg: CustomFieldOptionAvgAggregateOutputType | null
    _sum: CustomFieldOptionSumAggregateOutputType | null
    _min: CustomFieldOptionMinAggregateOutputType | null
    _max: CustomFieldOptionMaxAggregateOutputType | null
  }

  type GetCustomFieldOptionGroupByPayload<T extends CustomFieldOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomFieldOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomFieldOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomFieldOptionGroupByOutputType[P]>
            : GetScalarType<T[P], CustomFieldOptionGroupByOutputType[P]>
        }
      >
    >


  export type CustomFieldOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    label?: boolean
    value?: boolean
    order?: boolean
    createdAt?: boolean
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customFieldOption"]>

  export type CustomFieldOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    label?: boolean
    value?: boolean
    order?: boolean
    createdAt?: boolean
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customFieldOption"]>

  export type CustomFieldOptionSelectScalar = {
    id?: boolean
    fieldId?: boolean
    label?: boolean
    value?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type CustomFieldOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
  }
  export type CustomFieldOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
  }

  export type $CustomFieldOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomFieldOption"
    objects: {
      field: Prisma.$CustomFieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fieldId: number
      label: string
      value: string
      order: number
      createdAt: Date
    }, ExtArgs["result"]["customFieldOption"]>
    composites: {}
  }

  type CustomFieldOptionGetPayload<S extends boolean | null | undefined | CustomFieldOptionDefaultArgs> = $Result.GetResult<Prisma.$CustomFieldOptionPayload, S>

  type CustomFieldOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomFieldOptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomFieldOptionCountAggregateInputType | true
    }

  export interface CustomFieldOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomFieldOption'], meta: { name: 'CustomFieldOption' } }
    /**
     * Find zero or one CustomFieldOption that matches the filter.
     * @param {CustomFieldOptionFindUniqueArgs} args - Arguments to find a CustomFieldOption
     * @example
     * // Get one CustomFieldOption
     * const customFieldOption = await prisma.customFieldOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomFieldOptionFindUniqueArgs>(args: SelectSubset<T, CustomFieldOptionFindUniqueArgs<ExtArgs>>): Prisma__CustomFieldOptionClient<$Result.GetResult<Prisma.$CustomFieldOptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomFieldOption that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomFieldOptionFindUniqueOrThrowArgs} args - Arguments to find a CustomFieldOption
     * @example
     * // Get one CustomFieldOption
     * const customFieldOption = await prisma.customFieldOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomFieldOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomFieldOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomFieldOptionClient<$Result.GetResult<Prisma.$CustomFieldOptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomFieldOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldOptionFindFirstArgs} args - Arguments to find a CustomFieldOption
     * @example
     * // Get one CustomFieldOption
     * const customFieldOption = await prisma.customFieldOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomFieldOptionFindFirstArgs>(args?: SelectSubset<T, CustomFieldOptionFindFirstArgs<ExtArgs>>): Prisma__CustomFieldOptionClient<$Result.GetResult<Prisma.$CustomFieldOptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomFieldOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldOptionFindFirstOrThrowArgs} args - Arguments to find a CustomFieldOption
     * @example
     * // Get one CustomFieldOption
     * const customFieldOption = await prisma.customFieldOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomFieldOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomFieldOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomFieldOptionClient<$Result.GetResult<Prisma.$CustomFieldOptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomFieldOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomFieldOptions
     * const customFieldOptions = await prisma.customFieldOption.findMany()
     * 
     * // Get first 10 CustomFieldOptions
     * const customFieldOptions = await prisma.customFieldOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customFieldOptionWithIdOnly = await prisma.customFieldOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomFieldOptionFindManyArgs>(args?: SelectSubset<T, CustomFieldOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldOptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomFieldOption.
     * @param {CustomFieldOptionCreateArgs} args - Arguments to create a CustomFieldOption.
     * @example
     * // Create one CustomFieldOption
     * const CustomFieldOption = await prisma.customFieldOption.create({
     *   data: {
     *     // ... data to create a CustomFieldOption
     *   }
     * })
     * 
     */
    create<T extends CustomFieldOptionCreateArgs>(args: SelectSubset<T, CustomFieldOptionCreateArgs<ExtArgs>>): Prisma__CustomFieldOptionClient<$Result.GetResult<Prisma.$CustomFieldOptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomFieldOptions.
     * @param {CustomFieldOptionCreateManyArgs} args - Arguments to create many CustomFieldOptions.
     * @example
     * // Create many CustomFieldOptions
     * const customFieldOption = await prisma.customFieldOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomFieldOptionCreateManyArgs>(args?: SelectSubset<T, CustomFieldOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomFieldOptions and returns the data saved in the database.
     * @param {CustomFieldOptionCreateManyAndReturnArgs} args - Arguments to create many CustomFieldOptions.
     * @example
     * // Create many CustomFieldOptions
     * const customFieldOption = await prisma.customFieldOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomFieldOptions and only return the `id`
     * const customFieldOptionWithIdOnly = await prisma.customFieldOption.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomFieldOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomFieldOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldOptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomFieldOption.
     * @param {CustomFieldOptionDeleteArgs} args - Arguments to delete one CustomFieldOption.
     * @example
     * // Delete one CustomFieldOption
     * const CustomFieldOption = await prisma.customFieldOption.delete({
     *   where: {
     *     // ... filter to delete one CustomFieldOption
     *   }
     * })
     * 
     */
    delete<T extends CustomFieldOptionDeleteArgs>(args: SelectSubset<T, CustomFieldOptionDeleteArgs<ExtArgs>>): Prisma__CustomFieldOptionClient<$Result.GetResult<Prisma.$CustomFieldOptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomFieldOption.
     * @param {CustomFieldOptionUpdateArgs} args - Arguments to update one CustomFieldOption.
     * @example
     * // Update one CustomFieldOption
     * const customFieldOption = await prisma.customFieldOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomFieldOptionUpdateArgs>(args: SelectSubset<T, CustomFieldOptionUpdateArgs<ExtArgs>>): Prisma__CustomFieldOptionClient<$Result.GetResult<Prisma.$CustomFieldOptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomFieldOptions.
     * @param {CustomFieldOptionDeleteManyArgs} args - Arguments to filter CustomFieldOptions to delete.
     * @example
     * // Delete a few CustomFieldOptions
     * const { count } = await prisma.customFieldOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomFieldOptionDeleteManyArgs>(args?: SelectSubset<T, CustomFieldOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomFieldOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomFieldOptions
     * const customFieldOption = await prisma.customFieldOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomFieldOptionUpdateManyArgs>(args: SelectSubset<T, CustomFieldOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomFieldOption.
     * @param {CustomFieldOptionUpsertArgs} args - Arguments to update or create a CustomFieldOption.
     * @example
     * // Update or create a CustomFieldOption
     * const customFieldOption = await prisma.customFieldOption.upsert({
     *   create: {
     *     // ... data to create a CustomFieldOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomFieldOption we want to update
     *   }
     * })
     */
    upsert<T extends CustomFieldOptionUpsertArgs>(args: SelectSubset<T, CustomFieldOptionUpsertArgs<ExtArgs>>): Prisma__CustomFieldOptionClient<$Result.GetResult<Prisma.$CustomFieldOptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomFieldOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldOptionCountArgs} args - Arguments to filter CustomFieldOptions to count.
     * @example
     * // Count the number of CustomFieldOptions
     * const count = await prisma.customFieldOption.count({
     *   where: {
     *     // ... the filter for the CustomFieldOptions we want to count
     *   }
     * })
    **/
    count<T extends CustomFieldOptionCountArgs>(
      args?: Subset<T, CustomFieldOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomFieldOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomFieldOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomFieldOptionAggregateArgs>(args: Subset<T, CustomFieldOptionAggregateArgs>): Prisma.PrismaPromise<GetCustomFieldOptionAggregateType<T>>

    /**
     * Group by CustomFieldOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldOptionGroupByArgs} args - Group by arguments.
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
      T extends CustomFieldOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomFieldOptionGroupByArgs['orderBy'] }
        : { orderBy?: CustomFieldOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomFieldOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomFieldOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomFieldOption model
   */
  readonly fields: CustomFieldOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomFieldOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomFieldOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    field<T extends CustomFieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomFieldDefaultArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CustomFieldOption model
   */ 
  interface CustomFieldOptionFieldRefs {
    readonly id: FieldRef<"CustomFieldOption", 'Int'>
    readonly fieldId: FieldRef<"CustomFieldOption", 'Int'>
    readonly label: FieldRef<"CustomFieldOption", 'String'>
    readonly value: FieldRef<"CustomFieldOption", 'String'>
    readonly order: FieldRef<"CustomFieldOption", 'Int'>
    readonly createdAt: FieldRef<"CustomFieldOption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomFieldOption findUnique
   */
  export type CustomFieldOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldOption
     */
    select?: CustomFieldOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldOption to fetch.
     */
    where: CustomFieldOptionWhereUniqueInput
  }

  /**
   * CustomFieldOption findUniqueOrThrow
   */
  export type CustomFieldOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldOption
     */
    select?: CustomFieldOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldOption to fetch.
     */
    where: CustomFieldOptionWhereUniqueInput
  }

  /**
   * CustomFieldOption findFirst
   */
  export type CustomFieldOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldOption
     */
    select?: CustomFieldOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldOption to fetch.
     */
    where?: CustomFieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFieldOptions to fetch.
     */
    orderBy?: CustomFieldOptionOrderByWithRelationInput | CustomFieldOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomFieldOptions.
     */
    cursor?: CustomFieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFieldOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFieldOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFieldOptions.
     */
    distinct?: CustomFieldOptionScalarFieldEnum | CustomFieldOptionScalarFieldEnum[]
  }

  /**
   * CustomFieldOption findFirstOrThrow
   */
  export type CustomFieldOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldOption
     */
    select?: CustomFieldOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldOption to fetch.
     */
    where?: CustomFieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFieldOptions to fetch.
     */
    orderBy?: CustomFieldOptionOrderByWithRelationInput | CustomFieldOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomFieldOptions.
     */
    cursor?: CustomFieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFieldOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFieldOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFieldOptions.
     */
    distinct?: CustomFieldOptionScalarFieldEnum | CustomFieldOptionScalarFieldEnum[]
  }

  /**
   * CustomFieldOption findMany
   */
  export type CustomFieldOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldOption
     */
    select?: CustomFieldOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldOptions to fetch.
     */
    where?: CustomFieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFieldOptions to fetch.
     */
    orderBy?: CustomFieldOptionOrderByWithRelationInput | CustomFieldOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomFieldOptions.
     */
    cursor?: CustomFieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFieldOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFieldOptions.
     */
    skip?: number
    distinct?: CustomFieldOptionScalarFieldEnum | CustomFieldOptionScalarFieldEnum[]
  }

  /**
   * CustomFieldOption create
   */
  export type CustomFieldOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldOption
     */
    select?: CustomFieldOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomFieldOption.
     */
    data: XOR<CustomFieldOptionCreateInput, CustomFieldOptionUncheckedCreateInput>
  }

  /**
   * CustomFieldOption createMany
   */
  export type CustomFieldOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomFieldOptions.
     */
    data: CustomFieldOptionCreateManyInput | CustomFieldOptionCreateManyInput[]
  }

  /**
   * CustomFieldOption createManyAndReturn
   */
  export type CustomFieldOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldOption
     */
    select?: CustomFieldOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomFieldOptions.
     */
    data: CustomFieldOptionCreateManyInput | CustomFieldOptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomFieldOption update
   */
  export type CustomFieldOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldOption
     */
    select?: CustomFieldOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomFieldOption.
     */
    data: XOR<CustomFieldOptionUpdateInput, CustomFieldOptionUncheckedUpdateInput>
    /**
     * Choose, which CustomFieldOption to update.
     */
    where: CustomFieldOptionWhereUniqueInput
  }

  /**
   * CustomFieldOption updateMany
   */
  export type CustomFieldOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomFieldOptions.
     */
    data: XOR<CustomFieldOptionUpdateManyMutationInput, CustomFieldOptionUncheckedUpdateManyInput>
    /**
     * Filter which CustomFieldOptions to update
     */
    where?: CustomFieldOptionWhereInput
  }

  /**
   * CustomFieldOption upsert
   */
  export type CustomFieldOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldOption
     */
    select?: CustomFieldOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomFieldOption to update in case it exists.
     */
    where: CustomFieldOptionWhereUniqueInput
    /**
     * In case the CustomFieldOption found by the `where` argument doesn't exist, create a new CustomFieldOption with this data.
     */
    create: XOR<CustomFieldOptionCreateInput, CustomFieldOptionUncheckedCreateInput>
    /**
     * In case the CustomFieldOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomFieldOptionUpdateInput, CustomFieldOptionUncheckedUpdateInput>
  }

  /**
   * CustomFieldOption delete
   */
  export type CustomFieldOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldOption
     */
    select?: CustomFieldOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldOptionInclude<ExtArgs> | null
    /**
     * Filter which CustomFieldOption to delete.
     */
    where: CustomFieldOptionWhereUniqueInput
  }

  /**
   * CustomFieldOption deleteMany
   */
  export type CustomFieldOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomFieldOptions to delete
     */
    where?: CustomFieldOptionWhereInput
  }

  /**
   * CustomFieldOption without action
   */
  export type CustomFieldOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldOption
     */
    select?: CustomFieldOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldOptionInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    userEmail: string | null
    firstName: string | null
    lastName: string | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    metadata: string | null
    requestId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    userEmail: string | null
    firstName: string | null
    lastName: string | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    metadata: string | null
    requestId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    userEmail: number
    firstName: number
    lastName: number
    action: number
    resourceType: number
    resourceId: number
    metadata: number
    requestId: number
    createdAt: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    userEmail?: true
    firstName?: true
    lastName?: true
    action?: true
    resourceType?: true
    resourceId?: true
    metadata?: true
    requestId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    userEmail?: true
    firstName?: true
    lastName?: true
    action?: true
    resourceType?: true
    resourceId?: true
    metadata?: true
    requestId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    userEmail?: true
    firstName?: true
    lastName?: true
    action?: true
    resourceType?: true
    resourceId?: true
    metadata?: true
    requestId?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: number
    projectId: number | null
    userId: number
    userEmail: string
    firstName: string | null
    lastName: string | null
    action: string
    resourceType: string | null
    resourceId: string | null
    metadata: string | null
    requestId: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    userEmail?: boolean
    firstName?: boolean
    lastName?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    requestId?: boolean
    createdAt?: boolean
    project?: boolean | AuditLog$projectArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    userEmail?: boolean
    firstName?: boolean
    lastName?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    requestId?: boolean
    createdAt?: boolean
    project?: boolean | AuditLog$projectArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    userEmail?: boolean
    firstName?: boolean
    lastName?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    requestId?: boolean
    createdAt?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | AuditLog$projectArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | AuditLog$projectArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number | null
      userId: number
      userEmail: string
      firstName: string | null
      lastName: string | null
      action: string
      resourceType: string | null
      resourceId: string | null
      metadata: string | null
      requestId: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends AuditLog$projectArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'Int'>
    readonly projectId: FieldRef<"AuditLog", 'Int'>
    readonly userId: FieldRef<"AuditLog", 'Int'>
    readonly userEmail: FieldRef<"AuditLog", 'String'>
    readonly firstName: FieldRef<"AuditLog", 'String'>
    readonly lastName: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly resourceType: FieldRef<"AuditLog", 'String'>
    readonly resourceId: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'String'>
    readonly requestId: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog.project
   */
  export type AuditLog$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
   * Model FeatureFlag
   */

  export type AggregateFeatureFlag = {
    _count: FeatureFlagCountAggregateOutputType | null
    _avg: FeatureFlagAvgAggregateOutputType | null
    _sum: FeatureFlagSumAggregateOutputType | null
    _min: FeatureFlagMinAggregateOutputType | null
    _max: FeatureFlagMaxAggregateOutputType | null
  }

  export type FeatureFlagAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type FeatureFlagSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type FeatureFlagMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    key: string | null
    enabled: boolean | null
    description: string | null
    createdAt: Date | null
  }

  export type FeatureFlagMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    key: string | null
    enabled: boolean | null
    description: string | null
    createdAt: Date | null
  }

  export type FeatureFlagCountAggregateOutputType = {
    id: number
    projectId: number
    key: number
    enabled: number
    description: number
    createdAt: number
    _all: number
  }


  export type FeatureFlagAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type FeatureFlagSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type FeatureFlagMinAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    enabled?: true
    description?: true
    createdAt?: true
  }

  export type FeatureFlagMaxAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    enabled?: true
    description?: true
    createdAt?: true
  }

  export type FeatureFlagCountAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    enabled?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type FeatureFlagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureFlag to aggregate.
     */
    where?: FeatureFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureFlags to fetch.
     */
    orderBy?: FeatureFlagOrderByWithRelationInput | FeatureFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeatureFlags
    **/
    _count?: true | FeatureFlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeatureFlagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeatureFlagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureFlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureFlagMaxAggregateInputType
  }

  export type GetFeatureFlagAggregateType<T extends FeatureFlagAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatureFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatureFlag[P]>
      : GetScalarType<T[P], AggregateFeatureFlag[P]>
  }




  export type FeatureFlagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureFlagWhereInput
    orderBy?: FeatureFlagOrderByWithAggregationInput | FeatureFlagOrderByWithAggregationInput[]
    by: FeatureFlagScalarFieldEnum[] | FeatureFlagScalarFieldEnum
    having?: FeatureFlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureFlagCountAggregateInputType | true
    _avg?: FeatureFlagAvgAggregateInputType
    _sum?: FeatureFlagSumAggregateInputType
    _min?: FeatureFlagMinAggregateInputType
    _max?: FeatureFlagMaxAggregateInputType
  }

  export type FeatureFlagGroupByOutputType = {
    id: number
    projectId: number
    key: string
    enabled: boolean
    description: string | null
    createdAt: Date
    _count: FeatureFlagCountAggregateOutputType | null
    _avg: FeatureFlagAvgAggregateOutputType | null
    _sum: FeatureFlagSumAggregateOutputType | null
    _min: FeatureFlagMinAggregateOutputType | null
    _max: FeatureFlagMaxAggregateOutputType | null
  }

  type GetFeatureFlagGroupByPayload<T extends FeatureFlagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureFlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureFlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureFlagGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureFlagGroupByOutputType[P]>
        }
      >
    >


  export type FeatureFlagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    enabled?: boolean
    description?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureFlag"]>

  export type FeatureFlagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    enabled?: boolean
    description?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureFlag"]>

  export type FeatureFlagSelectScalar = {
    id?: boolean
    projectId?: boolean
    key?: boolean
    enabled?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type FeatureFlagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type FeatureFlagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $FeatureFlagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeatureFlag"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      key: string
      enabled: boolean
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["featureFlag"]>
    composites: {}
  }

  type FeatureFlagGetPayload<S extends boolean | null | undefined | FeatureFlagDefaultArgs> = $Result.GetResult<Prisma.$FeatureFlagPayload, S>

  type FeatureFlagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeatureFlagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeatureFlagCountAggregateInputType | true
    }

  export interface FeatureFlagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeatureFlag'], meta: { name: 'FeatureFlag' } }
    /**
     * Find zero or one FeatureFlag that matches the filter.
     * @param {FeatureFlagFindUniqueArgs} args - Arguments to find a FeatureFlag
     * @example
     * // Get one FeatureFlag
     * const featureFlag = await prisma.featureFlag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureFlagFindUniqueArgs>(args: SelectSubset<T, FeatureFlagFindUniqueArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FeatureFlag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FeatureFlagFindUniqueOrThrowArgs} args - Arguments to find a FeatureFlag
     * @example
     * // Get one FeatureFlag
     * const featureFlag = await prisma.featureFlag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureFlagFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureFlagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FeatureFlag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagFindFirstArgs} args - Arguments to find a FeatureFlag
     * @example
     * // Get one FeatureFlag
     * const featureFlag = await prisma.featureFlag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureFlagFindFirstArgs>(args?: SelectSubset<T, FeatureFlagFindFirstArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FeatureFlag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagFindFirstOrThrowArgs} args - Arguments to find a FeatureFlag
     * @example
     * // Get one FeatureFlag
     * const featureFlag = await prisma.featureFlag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureFlagFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureFlagFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FeatureFlags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeatureFlags
     * const featureFlags = await prisma.featureFlag.findMany()
     * 
     * // Get first 10 FeatureFlags
     * const featureFlags = await prisma.featureFlag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureFlagWithIdOnly = await prisma.featureFlag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureFlagFindManyArgs>(args?: SelectSubset<T, FeatureFlagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FeatureFlag.
     * @param {FeatureFlagCreateArgs} args - Arguments to create a FeatureFlag.
     * @example
     * // Create one FeatureFlag
     * const FeatureFlag = await prisma.featureFlag.create({
     *   data: {
     *     // ... data to create a FeatureFlag
     *   }
     * })
     * 
     */
    create<T extends FeatureFlagCreateArgs>(args: SelectSubset<T, FeatureFlagCreateArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FeatureFlags.
     * @param {FeatureFlagCreateManyArgs} args - Arguments to create many FeatureFlags.
     * @example
     * // Create many FeatureFlags
     * const featureFlag = await prisma.featureFlag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureFlagCreateManyArgs>(args?: SelectSubset<T, FeatureFlagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeatureFlags and returns the data saved in the database.
     * @param {FeatureFlagCreateManyAndReturnArgs} args - Arguments to create many FeatureFlags.
     * @example
     * // Create many FeatureFlags
     * const featureFlag = await prisma.featureFlag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeatureFlags and only return the `id`
     * const featureFlagWithIdOnly = await prisma.featureFlag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureFlagCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureFlagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FeatureFlag.
     * @param {FeatureFlagDeleteArgs} args - Arguments to delete one FeatureFlag.
     * @example
     * // Delete one FeatureFlag
     * const FeatureFlag = await prisma.featureFlag.delete({
     *   where: {
     *     // ... filter to delete one FeatureFlag
     *   }
     * })
     * 
     */
    delete<T extends FeatureFlagDeleteArgs>(args: SelectSubset<T, FeatureFlagDeleteArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FeatureFlag.
     * @param {FeatureFlagUpdateArgs} args - Arguments to update one FeatureFlag.
     * @example
     * // Update one FeatureFlag
     * const featureFlag = await prisma.featureFlag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureFlagUpdateArgs>(args: SelectSubset<T, FeatureFlagUpdateArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FeatureFlags.
     * @param {FeatureFlagDeleteManyArgs} args - Arguments to filter FeatureFlags to delete.
     * @example
     * // Delete a few FeatureFlags
     * const { count } = await prisma.featureFlag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureFlagDeleteManyArgs>(args?: SelectSubset<T, FeatureFlagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeatureFlags
     * const featureFlag = await prisma.featureFlag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureFlagUpdateManyArgs>(args: SelectSubset<T, FeatureFlagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeatureFlag.
     * @param {FeatureFlagUpsertArgs} args - Arguments to update or create a FeatureFlag.
     * @example
     * // Update or create a FeatureFlag
     * const featureFlag = await prisma.featureFlag.upsert({
     *   create: {
     *     // ... data to create a FeatureFlag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeatureFlag we want to update
     *   }
     * })
     */
    upsert<T extends FeatureFlagUpsertArgs>(args: SelectSubset<T, FeatureFlagUpsertArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FeatureFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagCountArgs} args - Arguments to filter FeatureFlags to count.
     * @example
     * // Count the number of FeatureFlags
     * const count = await prisma.featureFlag.count({
     *   where: {
     *     // ... the filter for the FeatureFlags we want to count
     *   }
     * })
    **/
    count<T extends FeatureFlagCountArgs>(
      args?: Subset<T, FeatureFlagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureFlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeatureFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeatureFlagAggregateArgs>(args: Subset<T, FeatureFlagAggregateArgs>): Prisma.PrismaPromise<GetFeatureFlagAggregateType<T>>

    /**
     * Group by FeatureFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagGroupByArgs} args - Group by arguments.
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
      T extends FeatureFlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureFlagGroupByArgs['orderBy'] }
        : { orderBy?: FeatureFlagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeatureFlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeatureFlag model
   */
  readonly fields: FeatureFlagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeatureFlag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureFlagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FeatureFlag model
   */ 
  interface FeatureFlagFieldRefs {
    readonly id: FieldRef<"FeatureFlag", 'Int'>
    readonly projectId: FieldRef<"FeatureFlag", 'Int'>
    readonly key: FieldRef<"FeatureFlag", 'String'>
    readonly enabled: FieldRef<"FeatureFlag", 'Boolean'>
    readonly description: FieldRef<"FeatureFlag", 'String'>
    readonly createdAt: FieldRef<"FeatureFlag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeatureFlag findUnique
   */
  export type FeatureFlagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureFlagInclude<ExtArgs> | null
    /**
     * Filter, which FeatureFlag to fetch.
     */
    where: FeatureFlagWhereUniqueInput
  }

  /**
   * FeatureFlag findUniqueOrThrow
   */
  export type FeatureFlagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureFlagInclude<ExtArgs> | null
    /**
     * Filter, which FeatureFlag to fetch.
     */
    where: FeatureFlagWhereUniqueInput
  }

  /**
   * FeatureFlag findFirst
   */
  export type FeatureFlagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureFlagInclude<ExtArgs> | null
    /**
     * Filter, which FeatureFlag to fetch.
     */
    where?: FeatureFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureFlags to fetch.
     */
    orderBy?: FeatureFlagOrderByWithRelationInput | FeatureFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureFlags.
     */
    cursor?: FeatureFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureFlags.
     */
    distinct?: FeatureFlagScalarFieldEnum | FeatureFlagScalarFieldEnum[]
  }

  /**
   * FeatureFlag findFirstOrThrow
   */
  export type FeatureFlagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureFlagInclude<ExtArgs> | null
    /**
     * Filter, which FeatureFlag to fetch.
     */
    where?: FeatureFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureFlags to fetch.
     */
    orderBy?: FeatureFlagOrderByWithRelationInput | FeatureFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureFlags.
     */
    cursor?: FeatureFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureFlags.
     */
    distinct?: FeatureFlagScalarFieldEnum | FeatureFlagScalarFieldEnum[]
  }

  /**
   * FeatureFlag findMany
   */
  export type FeatureFlagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureFlagInclude<ExtArgs> | null
    /**
     * Filter, which FeatureFlags to fetch.
     */
    where?: FeatureFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureFlags to fetch.
     */
    orderBy?: FeatureFlagOrderByWithRelationInput | FeatureFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeatureFlags.
     */
    cursor?: FeatureFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureFlags.
     */
    skip?: number
    distinct?: FeatureFlagScalarFieldEnum | FeatureFlagScalarFieldEnum[]
  }

  /**
   * FeatureFlag create
   */
  export type FeatureFlagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureFlagInclude<ExtArgs> | null
    /**
     * The data needed to create a FeatureFlag.
     */
    data: XOR<FeatureFlagCreateInput, FeatureFlagUncheckedCreateInput>
  }

  /**
   * FeatureFlag createMany
   */
  export type FeatureFlagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeatureFlags.
     */
    data: FeatureFlagCreateManyInput | FeatureFlagCreateManyInput[]
  }

  /**
   * FeatureFlag createManyAndReturn
   */
  export type FeatureFlagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FeatureFlags.
     */
    data: FeatureFlagCreateManyInput | FeatureFlagCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureFlagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeatureFlag update
   */
  export type FeatureFlagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureFlagInclude<ExtArgs> | null
    /**
     * The data needed to update a FeatureFlag.
     */
    data: XOR<FeatureFlagUpdateInput, FeatureFlagUncheckedUpdateInput>
    /**
     * Choose, which FeatureFlag to update.
     */
    where: FeatureFlagWhereUniqueInput
  }

  /**
   * FeatureFlag updateMany
   */
  export type FeatureFlagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeatureFlags.
     */
    data: XOR<FeatureFlagUpdateManyMutationInput, FeatureFlagUncheckedUpdateManyInput>
    /**
     * Filter which FeatureFlags to update
     */
    where?: FeatureFlagWhereInput
  }

  /**
   * FeatureFlag upsert
   */
  export type FeatureFlagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureFlagInclude<ExtArgs> | null
    /**
     * The filter to search for the FeatureFlag to update in case it exists.
     */
    where: FeatureFlagWhereUniqueInput
    /**
     * In case the FeatureFlag found by the `where` argument doesn't exist, create a new FeatureFlag with this data.
     */
    create: XOR<FeatureFlagCreateInput, FeatureFlagUncheckedCreateInput>
    /**
     * In case the FeatureFlag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureFlagUpdateInput, FeatureFlagUncheckedUpdateInput>
  }

  /**
   * FeatureFlag delete
   */
  export type FeatureFlagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureFlagInclude<ExtArgs> | null
    /**
     * Filter which FeatureFlag to delete.
     */
    where: FeatureFlagWhereUniqueInput
  }

  /**
   * FeatureFlag deleteMany
   */
  export type FeatureFlagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureFlags to delete
     */
    where?: FeatureFlagWhereInput
  }

  /**
   * FeatureFlag without action
   */
  export type FeatureFlagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureFlagInclude<ExtArgs> | null
  }


  /**
   * Model ProjectRole
   */

  export type AggregateProjectRole = {
    _count: ProjectRoleCountAggregateOutputType | null
    _avg: ProjectRoleAvgAggregateOutputType | null
    _sum: ProjectRoleSumAggregateOutputType | null
    _min: ProjectRoleMinAggregateOutputType | null
    _max: ProjectRoleMaxAggregateOutputType | null
  }

  export type ProjectRoleAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ProjectRoleSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ProjectRoleMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ProjectRoleMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ProjectRoleCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type ProjectRoleAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ProjectRoleSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ProjectRoleMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type ProjectRoleMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type ProjectRoleCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectRole to aggregate.
     */
    where?: ProjectRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRoles to fetch.
     */
    orderBy?: ProjectRoleOrderByWithRelationInput | ProjectRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectRoles
    **/
    _count?: true | ProjectRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectRoleMaxAggregateInputType
  }

  export type GetProjectRoleAggregateType<T extends ProjectRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectRole[P]>
      : GetScalarType<T[P], AggregateProjectRole[P]>
  }




  export type ProjectRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectRoleWhereInput
    orderBy?: ProjectRoleOrderByWithAggregationInput | ProjectRoleOrderByWithAggregationInput[]
    by: ProjectRoleScalarFieldEnum[] | ProjectRoleScalarFieldEnum
    having?: ProjectRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectRoleCountAggregateInputType | true
    _avg?: ProjectRoleAvgAggregateInputType
    _sum?: ProjectRoleSumAggregateInputType
    _min?: ProjectRoleMinAggregateInputType
    _max?: ProjectRoleMaxAggregateInputType
  }

  export type ProjectRoleGroupByOutputType = {
    id: number
    projectId: number
    name: string
    description: string | null
    createdAt: Date
    _count: ProjectRoleCountAggregateOutputType | null
    _avg: ProjectRoleAvgAggregateOutputType | null
    _sum: ProjectRoleSumAggregateOutputType | null
    _min: ProjectRoleMinAggregateOutputType | null
    _max: ProjectRoleMaxAggregateOutputType | null
  }

  type GetProjectRoleGroupByPayload<T extends ProjectRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectRoleGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectRoleGroupByOutputType[P]>
        }
      >
    >


  export type ProjectRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    permissions?: boolean | ProjectRole$permissionsArgs<ExtArgs>
    userRoles?: boolean | ProjectRole$userRolesArgs<ExtArgs>
    _count?: boolean | ProjectRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectRole"]>

  export type ProjectRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectRole"]>

  export type ProjectRoleSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type ProjectRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    permissions?: boolean | ProjectRole$permissionsArgs<ExtArgs>
    userRoles?: boolean | ProjectRole$userRolesArgs<ExtArgs>
    _count?: boolean | ProjectRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectRole"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      permissions: Prisma.$ProjectPermissionPayload<ExtArgs>[]
      userRoles: Prisma.$ProjectUserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      name: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["projectRole"]>
    composites: {}
  }

  type ProjectRoleGetPayload<S extends boolean | null | undefined | ProjectRoleDefaultArgs> = $Result.GetResult<Prisma.$ProjectRolePayload, S>

  type ProjectRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectRoleCountAggregateInputType | true
    }

  export interface ProjectRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectRole'], meta: { name: 'ProjectRole' } }
    /**
     * Find zero or one ProjectRole that matches the filter.
     * @param {ProjectRoleFindUniqueArgs} args - Arguments to find a ProjectRole
     * @example
     * // Get one ProjectRole
     * const projectRole = await prisma.projectRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectRoleFindUniqueArgs>(args: SelectSubset<T, ProjectRoleFindUniqueArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectRoleFindUniqueOrThrowArgs} args - Arguments to find a ProjectRole
     * @example
     * // Get one ProjectRole
     * const projectRole = await prisma.projectRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleFindFirstArgs} args - Arguments to find a ProjectRole
     * @example
     * // Get one ProjectRole
     * const projectRole = await prisma.projectRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectRoleFindFirstArgs>(args?: SelectSubset<T, ProjectRoleFindFirstArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleFindFirstOrThrowArgs} args - Arguments to find a ProjectRole
     * @example
     * // Get one ProjectRole
     * const projectRole = await prisma.projectRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectRoles
     * const projectRoles = await prisma.projectRole.findMany()
     * 
     * // Get first 10 ProjectRoles
     * const projectRoles = await prisma.projectRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectRoleWithIdOnly = await prisma.projectRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectRoleFindManyArgs>(args?: SelectSubset<T, ProjectRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectRole.
     * @param {ProjectRoleCreateArgs} args - Arguments to create a ProjectRole.
     * @example
     * // Create one ProjectRole
     * const ProjectRole = await prisma.projectRole.create({
     *   data: {
     *     // ... data to create a ProjectRole
     *   }
     * })
     * 
     */
    create<T extends ProjectRoleCreateArgs>(args: SelectSubset<T, ProjectRoleCreateArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectRoles.
     * @param {ProjectRoleCreateManyArgs} args - Arguments to create many ProjectRoles.
     * @example
     * // Create many ProjectRoles
     * const projectRole = await prisma.projectRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectRoleCreateManyArgs>(args?: SelectSubset<T, ProjectRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectRoles and returns the data saved in the database.
     * @param {ProjectRoleCreateManyAndReturnArgs} args - Arguments to create many ProjectRoles.
     * @example
     * // Create many ProjectRoles
     * const projectRole = await prisma.projectRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectRoles and only return the `id`
     * const projectRoleWithIdOnly = await prisma.projectRole.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProjectRole.
     * @param {ProjectRoleDeleteArgs} args - Arguments to delete one ProjectRole.
     * @example
     * // Delete one ProjectRole
     * const ProjectRole = await prisma.projectRole.delete({
     *   where: {
     *     // ... filter to delete one ProjectRole
     *   }
     * })
     * 
     */
    delete<T extends ProjectRoleDeleteArgs>(args: SelectSubset<T, ProjectRoleDeleteArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectRole.
     * @param {ProjectRoleUpdateArgs} args - Arguments to update one ProjectRole.
     * @example
     * // Update one ProjectRole
     * const projectRole = await prisma.projectRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectRoleUpdateArgs>(args: SelectSubset<T, ProjectRoleUpdateArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectRoles.
     * @param {ProjectRoleDeleteManyArgs} args - Arguments to filter ProjectRoles to delete.
     * @example
     * // Delete a few ProjectRoles
     * const { count } = await prisma.projectRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectRoleDeleteManyArgs>(args?: SelectSubset<T, ProjectRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectRoles
     * const projectRole = await prisma.projectRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectRoleUpdateManyArgs>(args: SelectSubset<T, ProjectRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectRole.
     * @param {ProjectRoleUpsertArgs} args - Arguments to update or create a ProjectRole.
     * @example
     * // Update or create a ProjectRole
     * const projectRole = await prisma.projectRole.upsert({
     *   create: {
     *     // ... data to create a ProjectRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectRole we want to update
     *   }
     * })
     */
    upsert<T extends ProjectRoleUpsertArgs>(args: SelectSubset<T, ProjectRoleUpsertArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleCountArgs} args - Arguments to filter ProjectRoles to count.
     * @example
     * // Count the number of ProjectRoles
     * const count = await prisma.projectRole.count({
     *   where: {
     *     // ... the filter for the ProjectRoles we want to count
     *   }
     * })
    **/
    count<T extends ProjectRoleCountArgs>(
      args?: Subset<T, ProjectRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectRoleAggregateArgs>(args: Subset<T, ProjectRoleAggregateArgs>): Prisma.PrismaPromise<GetProjectRoleAggregateType<T>>

    /**
     * Group by ProjectRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleGroupByArgs} args - Group by arguments.
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
      T extends ProjectRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectRoleGroupByArgs['orderBy'] }
        : { orderBy?: ProjectRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectRole model
   */
  readonly fields: ProjectRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    permissions<T extends ProjectRole$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectRole$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPermissionPayload<ExtArgs>, T, "findMany"> | Null>
    userRoles<T extends ProjectRole$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, ProjectRole$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ProjectRole model
   */ 
  interface ProjectRoleFieldRefs {
    readonly id: FieldRef<"ProjectRole", 'Int'>
    readonly projectId: FieldRef<"ProjectRole", 'Int'>
    readonly name: FieldRef<"ProjectRole", 'String'>
    readonly description: FieldRef<"ProjectRole", 'String'>
    readonly createdAt: FieldRef<"ProjectRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectRole findUnique
   */
  export type ProjectRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRole to fetch.
     */
    where: ProjectRoleWhereUniqueInput
  }

  /**
   * ProjectRole findUniqueOrThrow
   */
  export type ProjectRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRole to fetch.
     */
    where: ProjectRoleWhereUniqueInput
  }

  /**
   * ProjectRole findFirst
   */
  export type ProjectRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRole to fetch.
     */
    where?: ProjectRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRoles to fetch.
     */
    orderBy?: ProjectRoleOrderByWithRelationInput | ProjectRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectRoles.
     */
    cursor?: ProjectRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectRoles.
     */
    distinct?: ProjectRoleScalarFieldEnum | ProjectRoleScalarFieldEnum[]
  }

  /**
   * ProjectRole findFirstOrThrow
   */
  export type ProjectRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRole to fetch.
     */
    where?: ProjectRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRoles to fetch.
     */
    orderBy?: ProjectRoleOrderByWithRelationInput | ProjectRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectRoles.
     */
    cursor?: ProjectRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectRoles.
     */
    distinct?: ProjectRoleScalarFieldEnum | ProjectRoleScalarFieldEnum[]
  }

  /**
   * ProjectRole findMany
   */
  export type ProjectRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRoles to fetch.
     */
    where?: ProjectRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRoles to fetch.
     */
    orderBy?: ProjectRoleOrderByWithRelationInput | ProjectRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectRoles.
     */
    cursor?: ProjectRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRoles.
     */
    skip?: number
    distinct?: ProjectRoleScalarFieldEnum | ProjectRoleScalarFieldEnum[]
  }

  /**
   * ProjectRole create
   */
  export type ProjectRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectRole.
     */
    data: XOR<ProjectRoleCreateInput, ProjectRoleUncheckedCreateInput>
  }

  /**
   * ProjectRole createMany
   */
  export type ProjectRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectRoles.
     */
    data: ProjectRoleCreateManyInput | ProjectRoleCreateManyInput[]
  }

  /**
   * ProjectRole createManyAndReturn
   */
  export type ProjectRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProjectRoles.
     */
    data: ProjectRoleCreateManyInput | ProjectRoleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectRole update
   */
  export type ProjectRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectRole.
     */
    data: XOR<ProjectRoleUpdateInput, ProjectRoleUncheckedUpdateInput>
    /**
     * Choose, which ProjectRole to update.
     */
    where: ProjectRoleWhereUniqueInput
  }

  /**
   * ProjectRole updateMany
   */
  export type ProjectRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectRoles.
     */
    data: XOR<ProjectRoleUpdateManyMutationInput, ProjectRoleUncheckedUpdateManyInput>
    /**
     * Filter which ProjectRoles to update
     */
    where?: ProjectRoleWhereInput
  }

  /**
   * ProjectRole upsert
   */
  export type ProjectRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectRole to update in case it exists.
     */
    where: ProjectRoleWhereUniqueInput
    /**
     * In case the ProjectRole found by the `where` argument doesn't exist, create a new ProjectRole with this data.
     */
    create: XOR<ProjectRoleCreateInput, ProjectRoleUncheckedCreateInput>
    /**
     * In case the ProjectRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectRoleUpdateInput, ProjectRoleUncheckedUpdateInput>
  }

  /**
   * ProjectRole delete
   */
  export type ProjectRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * Filter which ProjectRole to delete.
     */
    where: ProjectRoleWhereUniqueInput
  }

  /**
   * ProjectRole deleteMany
   */
  export type ProjectRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectRoles to delete
     */
    where?: ProjectRoleWhereInput
  }

  /**
   * ProjectRole.permissions
   */
  export type ProjectRole$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPermission
     */
    select?: ProjectPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPermissionInclude<ExtArgs> | null
    where?: ProjectPermissionWhereInput
    orderBy?: ProjectPermissionOrderByWithRelationInput | ProjectPermissionOrderByWithRelationInput[]
    cursor?: ProjectPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectPermissionScalarFieldEnum | ProjectPermissionScalarFieldEnum[]
  }

  /**
   * ProjectRole.userRoles
   */
  export type ProjectRole$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUserRole
     */
    select?: ProjectUserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserRoleInclude<ExtArgs> | null
    where?: ProjectUserRoleWhereInput
    orderBy?: ProjectUserRoleOrderByWithRelationInput | ProjectUserRoleOrderByWithRelationInput[]
    cursor?: ProjectUserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectUserRoleScalarFieldEnum | ProjectUserRoleScalarFieldEnum[]
  }

  /**
   * ProjectRole without action
   */
  export type ProjectRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
  }


  /**
   * Model ProjectPermission
   */

  export type AggregateProjectPermission = {
    _count: ProjectPermissionCountAggregateOutputType | null
    _avg: ProjectPermissionAvgAggregateOutputType | null
    _sum: ProjectPermissionSumAggregateOutputType | null
    _min: ProjectPermissionMinAggregateOutputType | null
    _max: ProjectPermissionMaxAggregateOutputType | null
  }

  export type ProjectPermissionAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    roleId: number | null
  }

  export type ProjectPermissionSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    roleId: number | null
  }

  export type ProjectPermissionMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    roleId: number | null
    action: string | null
    createdAt: Date | null
  }

  export type ProjectPermissionMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    roleId: number | null
    action: string | null
    createdAt: Date | null
  }

  export type ProjectPermissionCountAggregateOutputType = {
    id: number
    projectId: number
    roleId: number
    action: number
    createdAt: number
    _all: number
  }


  export type ProjectPermissionAvgAggregateInputType = {
    id?: true
    projectId?: true
    roleId?: true
  }

  export type ProjectPermissionSumAggregateInputType = {
    id?: true
    projectId?: true
    roleId?: true
  }

  export type ProjectPermissionMinAggregateInputType = {
    id?: true
    projectId?: true
    roleId?: true
    action?: true
    createdAt?: true
  }

  export type ProjectPermissionMaxAggregateInputType = {
    id?: true
    projectId?: true
    roleId?: true
    action?: true
    createdAt?: true
  }

  export type ProjectPermissionCountAggregateInputType = {
    id?: true
    projectId?: true
    roleId?: true
    action?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPermission to aggregate.
     */
    where?: ProjectPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPermissions to fetch.
     */
    orderBy?: ProjectPermissionOrderByWithRelationInput | ProjectPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectPermissions
    **/
    _count?: true | ProjectPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectPermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectPermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectPermissionMaxAggregateInputType
  }

  export type GetProjectPermissionAggregateType<T extends ProjectPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectPermission[P]>
      : GetScalarType<T[P], AggregateProjectPermission[P]>
  }




  export type ProjectPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPermissionWhereInput
    orderBy?: ProjectPermissionOrderByWithAggregationInput | ProjectPermissionOrderByWithAggregationInput[]
    by: ProjectPermissionScalarFieldEnum[] | ProjectPermissionScalarFieldEnum
    having?: ProjectPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectPermissionCountAggregateInputType | true
    _avg?: ProjectPermissionAvgAggregateInputType
    _sum?: ProjectPermissionSumAggregateInputType
    _min?: ProjectPermissionMinAggregateInputType
    _max?: ProjectPermissionMaxAggregateInputType
  }

  export type ProjectPermissionGroupByOutputType = {
    id: number
    projectId: number
    roleId: number
    action: string
    createdAt: Date
    _count: ProjectPermissionCountAggregateOutputType | null
    _avg: ProjectPermissionAvgAggregateOutputType | null
    _sum: ProjectPermissionSumAggregateOutputType | null
    _min: ProjectPermissionMinAggregateOutputType | null
    _max: ProjectPermissionMaxAggregateOutputType | null
  }

  type GetProjectPermissionGroupByPayload<T extends ProjectPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectPermissionGroupByOutputType[P]>
        }
      >
    >


  export type ProjectPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    roleId?: boolean
    action?: boolean
    createdAt?: boolean
    role?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPermission"]>

  export type ProjectPermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    roleId?: boolean
    action?: boolean
    createdAt?: boolean
    role?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPermission"]>

  export type ProjectPermissionSelectScalar = {
    id?: boolean
    projectId?: boolean
    roleId?: boolean
    action?: boolean
    createdAt?: boolean
  }

  export type ProjectPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }
  export type ProjectPermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }

  export type $ProjectPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectPermission"
    objects: {
      role: Prisma.$ProjectRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      roleId: number
      action: string
      createdAt: Date
    }, ExtArgs["result"]["projectPermission"]>
    composites: {}
  }

  type ProjectPermissionGetPayload<S extends boolean | null | undefined | ProjectPermissionDefaultArgs> = $Result.GetResult<Prisma.$ProjectPermissionPayload, S>

  type ProjectPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectPermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectPermissionCountAggregateInputType | true
    }

  export interface ProjectPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectPermission'], meta: { name: 'ProjectPermission' } }
    /**
     * Find zero or one ProjectPermission that matches the filter.
     * @param {ProjectPermissionFindUniqueArgs} args - Arguments to find a ProjectPermission
     * @example
     * // Get one ProjectPermission
     * const projectPermission = await prisma.projectPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectPermissionFindUniqueArgs>(args: SelectSubset<T, ProjectPermissionFindUniqueArgs<ExtArgs>>): Prisma__ProjectPermissionClient<$Result.GetResult<Prisma.$ProjectPermissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectPermission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectPermissionFindUniqueOrThrowArgs} args - Arguments to find a ProjectPermission
     * @example
     * // Get one ProjectPermission
     * const projectPermission = await prisma.projectPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectPermissionClient<$Result.GetResult<Prisma.$ProjectPermissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPermissionFindFirstArgs} args - Arguments to find a ProjectPermission
     * @example
     * // Get one ProjectPermission
     * const projectPermission = await prisma.projectPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectPermissionFindFirstArgs>(args?: SelectSubset<T, ProjectPermissionFindFirstArgs<ExtArgs>>): Prisma__ProjectPermissionClient<$Result.GetResult<Prisma.$ProjectPermissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPermissionFindFirstOrThrowArgs} args - Arguments to find a ProjectPermission
     * @example
     * // Get one ProjectPermission
     * const projectPermission = await prisma.projectPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectPermissionClient<$Result.GetResult<Prisma.$ProjectPermissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectPermissions
     * const projectPermissions = await prisma.projectPermission.findMany()
     * 
     * // Get first 10 ProjectPermissions
     * const projectPermissions = await prisma.projectPermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectPermissionWithIdOnly = await prisma.projectPermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectPermissionFindManyArgs>(args?: SelectSubset<T, ProjectPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPermissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectPermission.
     * @param {ProjectPermissionCreateArgs} args - Arguments to create a ProjectPermission.
     * @example
     * // Create one ProjectPermission
     * const ProjectPermission = await prisma.projectPermission.create({
     *   data: {
     *     // ... data to create a ProjectPermission
     *   }
     * })
     * 
     */
    create<T extends ProjectPermissionCreateArgs>(args: SelectSubset<T, ProjectPermissionCreateArgs<ExtArgs>>): Prisma__ProjectPermissionClient<$Result.GetResult<Prisma.$ProjectPermissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectPermissions.
     * @param {ProjectPermissionCreateManyArgs} args - Arguments to create many ProjectPermissions.
     * @example
     * // Create many ProjectPermissions
     * const projectPermission = await prisma.projectPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectPermissionCreateManyArgs>(args?: SelectSubset<T, ProjectPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectPermissions and returns the data saved in the database.
     * @param {ProjectPermissionCreateManyAndReturnArgs} args - Arguments to create many ProjectPermissions.
     * @example
     * // Create many ProjectPermissions
     * const projectPermission = await prisma.projectPermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectPermissions and only return the `id`
     * const projectPermissionWithIdOnly = await prisma.projectPermission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectPermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectPermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPermissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProjectPermission.
     * @param {ProjectPermissionDeleteArgs} args - Arguments to delete one ProjectPermission.
     * @example
     * // Delete one ProjectPermission
     * const ProjectPermission = await prisma.projectPermission.delete({
     *   where: {
     *     // ... filter to delete one ProjectPermission
     *   }
     * })
     * 
     */
    delete<T extends ProjectPermissionDeleteArgs>(args: SelectSubset<T, ProjectPermissionDeleteArgs<ExtArgs>>): Prisma__ProjectPermissionClient<$Result.GetResult<Prisma.$ProjectPermissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectPermission.
     * @param {ProjectPermissionUpdateArgs} args - Arguments to update one ProjectPermission.
     * @example
     * // Update one ProjectPermission
     * const projectPermission = await prisma.projectPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectPermissionUpdateArgs>(args: SelectSubset<T, ProjectPermissionUpdateArgs<ExtArgs>>): Prisma__ProjectPermissionClient<$Result.GetResult<Prisma.$ProjectPermissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectPermissions.
     * @param {ProjectPermissionDeleteManyArgs} args - Arguments to filter ProjectPermissions to delete.
     * @example
     * // Delete a few ProjectPermissions
     * const { count } = await prisma.projectPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectPermissionDeleteManyArgs>(args?: SelectSubset<T, ProjectPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectPermissions
     * const projectPermission = await prisma.projectPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectPermissionUpdateManyArgs>(args: SelectSubset<T, ProjectPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectPermission.
     * @param {ProjectPermissionUpsertArgs} args - Arguments to update or create a ProjectPermission.
     * @example
     * // Update or create a ProjectPermission
     * const projectPermission = await prisma.projectPermission.upsert({
     *   create: {
     *     // ... data to create a ProjectPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectPermission we want to update
     *   }
     * })
     */
    upsert<T extends ProjectPermissionUpsertArgs>(args: SelectSubset<T, ProjectPermissionUpsertArgs<ExtArgs>>): Prisma__ProjectPermissionClient<$Result.GetResult<Prisma.$ProjectPermissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPermissionCountArgs} args - Arguments to filter ProjectPermissions to count.
     * @example
     * // Count the number of ProjectPermissions
     * const count = await prisma.projectPermission.count({
     *   where: {
     *     // ... the filter for the ProjectPermissions we want to count
     *   }
     * })
    **/
    count<T extends ProjectPermissionCountArgs>(
      args?: Subset<T, ProjectPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectPermissionAggregateArgs>(args: Subset<T, ProjectPermissionAggregateArgs>): Prisma.PrismaPromise<GetProjectPermissionAggregateType<T>>

    /**
     * Group by ProjectPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPermissionGroupByArgs} args - Group by arguments.
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
      T extends ProjectPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectPermissionGroupByArgs['orderBy'] }
        : { orderBy?: ProjectPermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectPermission model
   */
  readonly fields: ProjectPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends ProjectRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectRoleDefaultArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProjectPermission model
   */ 
  interface ProjectPermissionFieldRefs {
    readonly id: FieldRef<"ProjectPermission", 'Int'>
    readonly projectId: FieldRef<"ProjectPermission", 'Int'>
    readonly roleId: FieldRef<"ProjectPermission", 'Int'>
    readonly action: FieldRef<"ProjectPermission", 'String'>
    readonly createdAt: FieldRef<"ProjectPermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectPermission findUnique
   */
  export type ProjectPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPermission
     */
    select?: ProjectPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPermission to fetch.
     */
    where: ProjectPermissionWhereUniqueInput
  }

  /**
   * ProjectPermission findUniqueOrThrow
   */
  export type ProjectPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPermission
     */
    select?: ProjectPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPermission to fetch.
     */
    where: ProjectPermissionWhereUniqueInput
  }

  /**
   * ProjectPermission findFirst
   */
  export type ProjectPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPermission
     */
    select?: ProjectPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPermission to fetch.
     */
    where?: ProjectPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPermissions to fetch.
     */
    orderBy?: ProjectPermissionOrderByWithRelationInput | ProjectPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPermissions.
     */
    cursor?: ProjectPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPermissions.
     */
    distinct?: ProjectPermissionScalarFieldEnum | ProjectPermissionScalarFieldEnum[]
  }

  /**
   * ProjectPermission findFirstOrThrow
   */
  export type ProjectPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPermission
     */
    select?: ProjectPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPermission to fetch.
     */
    where?: ProjectPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPermissions to fetch.
     */
    orderBy?: ProjectPermissionOrderByWithRelationInput | ProjectPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPermissions.
     */
    cursor?: ProjectPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPermissions.
     */
    distinct?: ProjectPermissionScalarFieldEnum | ProjectPermissionScalarFieldEnum[]
  }

  /**
   * ProjectPermission findMany
   */
  export type ProjectPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPermission
     */
    select?: ProjectPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPermissions to fetch.
     */
    where?: ProjectPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPermissions to fetch.
     */
    orderBy?: ProjectPermissionOrderByWithRelationInput | ProjectPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectPermissions.
     */
    cursor?: ProjectPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPermissions.
     */
    skip?: number
    distinct?: ProjectPermissionScalarFieldEnum | ProjectPermissionScalarFieldEnum[]
  }

  /**
   * ProjectPermission create
   */
  export type ProjectPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPermission
     */
    select?: ProjectPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectPermission.
     */
    data: XOR<ProjectPermissionCreateInput, ProjectPermissionUncheckedCreateInput>
  }

  /**
   * ProjectPermission createMany
   */
  export type ProjectPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectPermissions.
     */
    data: ProjectPermissionCreateManyInput | ProjectPermissionCreateManyInput[]
  }

  /**
   * ProjectPermission createManyAndReturn
   */
  export type ProjectPermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPermission
     */
    select?: ProjectPermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProjectPermissions.
     */
    data: ProjectPermissionCreateManyInput | ProjectPermissionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectPermission update
   */
  export type ProjectPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPermission
     */
    select?: ProjectPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectPermission.
     */
    data: XOR<ProjectPermissionUpdateInput, ProjectPermissionUncheckedUpdateInput>
    /**
     * Choose, which ProjectPermission to update.
     */
    where: ProjectPermissionWhereUniqueInput
  }

  /**
   * ProjectPermission updateMany
   */
  export type ProjectPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectPermissions.
     */
    data: XOR<ProjectPermissionUpdateManyMutationInput, ProjectPermissionUncheckedUpdateManyInput>
    /**
     * Filter which ProjectPermissions to update
     */
    where?: ProjectPermissionWhereInput
  }

  /**
   * ProjectPermission upsert
   */
  export type ProjectPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPermission
     */
    select?: ProjectPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectPermission to update in case it exists.
     */
    where: ProjectPermissionWhereUniqueInput
    /**
     * In case the ProjectPermission found by the `where` argument doesn't exist, create a new ProjectPermission with this data.
     */
    create: XOR<ProjectPermissionCreateInput, ProjectPermissionUncheckedCreateInput>
    /**
     * In case the ProjectPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectPermissionUpdateInput, ProjectPermissionUncheckedUpdateInput>
  }

  /**
   * ProjectPermission delete
   */
  export type ProjectPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPermission
     */
    select?: ProjectPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPermissionInclude<ExtArgs> | null
    /**
     * Filter which ProjectPermission to delete.
     */
    where: ProjectPermissionWhereUniqueInput
  }

  /**
   * ProjectPermission deleteMany
   */
  export type ProjectPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPermissions to delete
     */
    where?: ProjectPermissionWhereInput
  }

  /**
   * ProjectPermission without action
   */
  export type ProjectPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPermission
     */
    select?: ProjectPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPermissionInclude<ExtArgs> | null
  }


  /**
   * Model ProjectUserRole
   */

  export type AggregateProjectUserRole = {
    _count: ProjectUserRoleCountAggregateOutputType | null
    _avg: ProjectUserRoleAvgAggregateOutputType | null
    _sum: ProjectUserRoleSumAggregateOutputType | null
    _min: ProjectUserRoleMinAggregateOutputType | null
    _max: ProjectUserRoleMaxAggregateOutputType | null
  }

  export type ProjectUserRoleAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    roleId: number | null
  }

  export type ProjectUserRoleSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    roleId: number | null
  }

  export type ProjectUserRoleMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    roleId: number | null
  }

  export type ProjectUserRoleMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    roleId: number | null
  }

  export type ProjectUserRoleCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    roleId: number
    _all: number
  }


  export type ProjectUserRoleAvgAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    roleId?: true
  }

  export type ProjectUserRoleSumAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    roleId?: true
  }

  export type ProjectUserRoleMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    roleId?: true
  }

  export type ProjectUserRoleMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    roleId?: true
  }

  export type ProjectUserRoleCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    roleId?: true
    _all?: true
  }

  export type ProjectUserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectUserRole to aggregate.
     */
    where?: ProjectUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectUserRoles to fetch.
     */
    orderBy?: ProjectUserRoleOrderByWithRelationInput | ProjectUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectUserRoles
    **/
    _count?: true | ProjectUserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectUserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectUserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectUserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectUserRoleMaxAggregateInputType
  }

  export type GetProjectUserRoleAggregateType<T extends ProjectUserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectUserRole[P]>
      : GetScalarType<T[P], AggregateProjectUserRole[P]>
  }




  export type ProjectUserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectUserRoleWhereInput
    orderBy?: ProjectUserRoleOrderByWithAggregationInput | ProjectUserRoleOrderByWithAggregationInput[]
    by: ProjectUserRoleScalarFieldEnum[] | ProjectUserRoleScalarFieldEnum
    having?: ProjectUserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectUserRoleCountAggregateInputType | true
    _avg?: ProjectUserRoleAvgAggregateInputType
    _sum?: ProjectUserRoleSumAggregateInputType
    _min?: ProjectUserRoleMinAggregateInputType
    _max?: ProjectUserRoleMaxAggregateInputType
  }

  export type ProjectUserRoleGroupByOutputType = {
    id: number
    projectId: number
    userId: number
    roleId: number
    _count: ProjectUserRoleCountAggregateOutputType | null
    _avg: ProjectUserRoleAvgAggregateOutputType | null
    _sum: ProjectUserRoleSumAggregateOutputType | null
    _min: ProjectUserRoleMinAggregateOutputType | null
    _max: ProjectUserRoleMaxAggregateOutputType | null
  }

  type GetProjectUserRoleGroupByPayload<T extends ProjectUserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectUserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectUserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectUserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectUserRoleGroupByOutputType[P]>
        }
      >
    >


  export type ProjectUserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    roleId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    role?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectUserRole"]>

  export type ProjectUserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    roleId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    role?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectUserRole"]>

  export type ProjectUserRoleSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    roleId?: boolean
  }

  export type ProjectUserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    role?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }
  export type ProjectUserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    role?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }

  export type $ProjectUserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectUserRole"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      role: Prisma.$ProjectRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      userId: number
      roleId: number
    }, ExtArgs["result"]["projectUserRole"]>
    composites: {}
  }

  type ProjectUserRoleGetPayload<S extends boolean | null | undefined | ProjectUserRoleDefaultArgs> = $Result.GetResult<Prisma.$ProjectUserRolePayload, S>

  type ProjectUserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectUserRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectUserRoleCountAggregateInputType | true
    }

  export interface ProjectUserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectUserRole'], meta: { name: 'ProjectUserRole' } }
    /**
     * Find zero or one ProjectUserRole that matches the filter.
     * @param {ProjectUserRoleFindUniqueArgs} args - Arguments to find a ProjectUserRole
     * @example
     * // Get one ProjectUserRole
     * const projectUserRole = await prisma.projectUserRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectUserRoleFindUniqueArgs>(args: SelectSubset<T, ProjectUserRoleFindUniqueArgs<ExtArgs>>): Prisma__ProjectUserRoleClient<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectUserRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectUserRoleFindUniqueOrThrowArgs} args - Arguments to find a ProjectUserRole
     * @example
     * // Get one ProjectUserRole
     * const projectUserRole = await prisma.projectUserRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectUserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectUserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectUserRoleClient<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectUserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserRoleFindFirstArgs} args - Arguments to find a ProjectUserRole
     * @example
     * // Get one ProjectUserRole
     * const projectUserRole = await prisma.projectUserRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectUserRoleFindFirstArgs>(args?: SelectSubset<T, ProjectUserRoleFindFirstArgs<ExtArgs>>): Prisma__ProjectUserRoleClient<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectUserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserRoleFindFirstOrThrowArgs} args - Arguments to find a ProjectUserRole
     * @example
     * // Get one ProjectUserRole
     * const projectUserRole = await prisma.projectUserRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectUserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectUserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectUserRoleClient<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectUserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectUserRoles
     * const projectUserRoles = await prisma.projectUserRole.findMany()
     * 
     * // Get first 10 ProjectUserRoles
     * const projectUserRoles = await prisma.projectUserRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectUserRoleWithIdOnly = await prisma.projectUserRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectUserRoleFindManyArgs>(args?: SelectSubset<T, ProjectUserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectUserRole.
     * @param {ProjectUserRoleCreateArgs} args - Arguments to create a ProjectUserRole.
     * @example
     * // Create one ProjectUserRole
     * const ProjectUserRole = await prisma.projectUserRole.create({
     *   data: {
     *     // ... data to create a ProjectUserRole
     *   }
     * })
     * 
     */
    create<T extends ProjectUserRoleCreateArgs>(args: SelectSubset<T, ProjectUserRoleCreateArgs<ExtArgs>>): Prisma__ProjectUserRoleClient<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectUserRoles.
     * @param {ProjectUserRoleCreateManyArgs} args - Arguments to create many ProjectUserRoles.
     * @example
     * // Create many ProjectUserRoles
     * const projectUserRole = await prisma.projectUserRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectUserRoleCreateManyArgs>(args?: SelectSubset<T, ProjectUserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectUserRoles and returns the data saved in the database.
     * @param {ProjectUserRoleCreateManyAndReturnArgs} args - Arguments to create many ProjectUserRoles.
     * @example
     * // Create many ProjectUserRoles
     * const projectUserRole = await prisma.projectUserRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectUserRoles and only return the `id`
     * const projectUserRoleWithIdOnly = await prisma.projectUserRole.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectUserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectUserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProjectUserRole.
     * @param {ProjectUserRoleDeleteArgs} args - Arguments to delete one ProjectUserRole.
     * @example
     * // Delete one ProjectUserRole
     * const ProjectUserRole = await prisma.projectUserRole.delete({
     *   where: {
     *     // ... filter to delete one ProjectUserRole
     *   }
     * })
     * 
     */
    delete<T extends ProjectUserRoleDeleteArgs>(args: SelectSubset<T, ProjectUserRoleDeleteArgs<ExtArgs>>): Prisma__ProjectUserRoleClient<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectUserRole.
     * @param {ProjectUserRoleUpdateArgs} args - Arguments to update one ProjectUserRole.
     * @example
     * // Update one ProjectUserRole
     * const projectUserRole = await prisma.projectUserRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUserRoleUpdateArgs>(args: SelectSubset<T, ProjectUserRoleUpdateArgs<ExtArgs>>): Prisma__ProjectUserRoleClient<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectUserRoles.
     * @param {ProjectUserRoleDeleteManyArgs} args - Arguments to filter ProjectUserRoles to delete.
     * @example
     * // Delete a few ProjectUserRoles
     * const { count } = await prisma.projectUserRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectUserRoleDeleteManyArgs>(args?: SelectSubset<T, ProjectUserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectUserRoles
     * const projectUserRole = await prisma.projectUserRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUserRoleUpdateManyArgs>(args: SelectSubset<T, ProjectUserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectUserRole.
     * @param {ProjectUserRoleUpsertArgs} args - Arguments to update or create a ProjectUserRole.
     * @example
     * // Update or create a ProjectUserRole
     * const projectUserRole = await prisma.projectUserRole.upsert({
     *   create: {
     *     // ... data to create a ProjectUserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectUserRole we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUserRoleUpsertArgs>(args: SelectSubset<T, ProjectUserRoleUpsertArgs<ExtArgs>>): Prisma__ProjectUserRoleClient<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserRoleCountArgs} args - Arguments to filter ProjectUserRoles to count.
     * @example
     * // Count the number of ProjectUserRoles
     * const count = await prisma.projectUserRole.count({
     *   where: {
     *     // ... the filter for the ProjectUserRoles we want to count
     *   }
     * })
    **/
    count<T extends ProjectUserRoleCountArgs>(
      args?: Subset<T, ProjectUserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectUserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectUserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectUserRoleAggregateArgs>(args: Subset<T, ProjectUserRoleAggregateArgs>): Prisma.PrismaPromise<GetProjectUserRoleAggregateType<T>>

    /**
     * Group by ProjectUserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserRoleGroupByArgs} args - Group by arguments.
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
      T extends ProjectUserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectUserRoleGroupByArgs['orderBy'] }
        : { orderBy?: ProjectUserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectUserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectUserRole model
   */
  readonly fields: ProjectUserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectUserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectUserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    role<T extends ProjectRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectRoleDefaultArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProjectUserRole model
   */ 
  interface ProjectUserRoleFieldRefs {
    readonly id: FieldRef<"ProjectUserRole", 'Int'>
    readonly projectId: FieldRef<"ProjectUserRole", 'Int'>
    readonly userId: FieldRef<"ProjectUserRole", 'Int'>
    readonly roleId: FieldRef<"ProjectUserRole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProjectUserRole findUnique
   */
  export type ProjectUserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUserRole
     */
    select?: ProjectUserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUserRole to fetch.
     */
    where: ProjectUserRoleWhereUniqueInput
  }

  /**
   * ProjectUserRole findUniqueOrThrow
   */
  export type ProjectUserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUserRole
     */
    select?: ProjectUserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUserRole to fetch.
     */
    where: ProjectUserRoleWhereUniqueInput
  }

  /**
   * ProjectUserRole findFirst
   */
  export type ProjectUserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUserRole
     */
    select?: ProjectUserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUserRole to fetch.
     */
    where?: ProjectUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectUserRoles to fetch.
     */
    orderBy?: ProjectUserRoleOrderByWithRelationInput | ProjectUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectUserRoles.
     */
    cursor?: ProjectUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectUserRoles.
     */
    distinct?: ProjectUserRoleScalarFieldEnum | ProjectUserRoleScalarFieldEnum[]
  }

  /**
   * ProjectUserRole findFirstOrThrow
   */
  export type ProjectUserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUserRole
     */
    select?: ProjectUserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUserRole to fetch.
     */
    where?: ProjectUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectUserRoles to fetch.
     */
    orderBy?: ProjectUserRoleOrderByWithRelationInput | ProjectUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectUserRoles.
     */
    cursor?: ProjectUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectUserRoles.
     */
    distinct?: ProjectUserRoleScalarFieldEnum | ProjectUserRoleScalarFieldEnum[]
  }

  /**
   * ProjectUserRole findMany
   */
  export type ProjectUserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUserRole
     */
    select?: ProjectUserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUserRoles to fetch.
     */
    where?: ProjectUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectUserRoles to fetch.
     */
    orderBy?: ProjectUserRoleOrderByWithRelationInput | ProjectUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectUserRoles.
     */
    cursor?: ProjectUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectUserRoles.
     */
    skip?: number
    distinct?: ProjectUserRoleScalarFieldEnum | ProjectUserRoleScalarFieldEnum[]
  }

  /**
   * ProjectUserRole create
   */
  export type ProjectUserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUserRole
     */
    select?: ProjectUserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectUserRole.
     */
    data: XOR<ProjectUserRoleCreateInput, ProjectUserRoleUncheckedCreateInput>
  }

  /**
   * ProjectUserRole createMany
   */
  export type ProjectUserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectUserRoles.
     */
    data: ProjectUserRoleCreateManyInput | ProjectUserRoleCreateManyInput[]
  }

  /**
   * ProjectUserRole createManyAndReturn
   */
  export type ProjectUserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUserRole
     */
    select?: ProjectUserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProjectUserRoles.
     */
    data: ProjectUserRoleCreateManyInput | ProjectUserRoleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectUserRole update
   */
  export type ProjectUserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUserRole
     */
    select?: ProjectUserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectUserRole.
     */
    data: XOR<ProjectUserRoleUpdateInput, ProjectUserRoleUncheckedUpdateInput>
    /**
     * Choose, which ProjectUserRole to update.
     */
    where: ProjectUserRoleWhereUniqueInput
  }

  /**
   * ProjectUserRole updateMany
   */
  export type ProjectUserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectUserRoles.
     */
    data: XOR<ProjectUserRoleUpdateManyMutationInput, ProjectUserRoleUncheckedUpdateManyInput>
    /**
     * Filter which ProjectUserRoles to update
     */
    where?: ProjectUserRoleWhereInput
  }

  /**
   * ProjectUserRole upsert
   */
  export type ProjectUserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUserRole
     */
    select?: ProjectUserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectUserRole to update in case it exists.
     */
    where: ProjectUserRoleWhereUniqueInput
    /**
     * In case the ProjectUserRole found by the `where` argument doesn't exist, create a new ProjectUserRole with this data.
     */
    create: XOR<ProjectUserRoleCreateInput, ProjectUserRoleUncheckedCreateInput>
    /**
     * In case the ProjectUserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUserRoleUpdateInput, ProjectUserRoleUncheckedUpdateInput>
  }

  /**
   * ProjectUserRole delete
   */
  export type ProjectUserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUserRole
     */
    select?: ProjectUserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserRoleInclude<ExtArgs> | null
    /**
     * Filter which ProjectUserRole to delete.
     */
    where: ProjectUserRoleWhereUniqueInput
  }

  /**
   * ProjectUserRole deleteMany
   */
  export type ProjectUserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectUserRoles to delete
     */
    where?: ProjectUserRoleWhereInput
  }

  /**
   * ProjectUserRole without action
   */
  export type ProjectUserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUserRole
     */
    select?: ProjectUserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserRoleInclude<ExtArgs> | null
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
    description: 'description',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TestCaseTypeScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    description: 'description',
    color: 'color',
    createdAt: 'createdAt'
  };

  export type TestCaseTypeScalarFieldEnum = (typeof TestCaseTypeScalarFieldEnum)[keyof typeof TestCaseTypeScalarFieldEnum]


  export const PriorityScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    level: 'level',
    color: 'color',
    createdAt: 'createdAt'
  };

  export type PriorityScalarFieldEnum = (typeof PriorityScalarFieldEnum)[keyof typeof PriorityScalarFieldEnum]


  export const CustomFieldScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    description: 'description',
    fieldType: 'fieldType',
    required: 'required',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type CustomFieldScalarFieldEnum = (typeof CustomFieldScalarFieldEnum)[keyof typeof CustomFieldScalarFieldEnum]


  export const CustomFieldOptionScalarFieldEnum: {
    id: 'id',
    fieldId: 'fieldId',
    label: 'label',
    value: 'value',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type CustomFieldOptionScalarFieldEnum = (typeof CustomFieldOptionScalarFieldEnum)[keyof typeof CustomFieldOptionScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    userEmail: 'userEmail',
    firstName: 'firstName',
    lastName: 'lastName',
    action: 'action',
    resourceType: 'resourceType',
    resourceId: 'resourceId',
    metadata: 'metadata',
    requestId: 'requestId',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


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


  export const FeatureFlagScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    key: 'key',
    enabled: 'enabled',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type FeatureFlagScalarFieldEnum = (typeof FeatureFlagScalarFieldEnum)[keyof typeof FeatureFlagScalarFieldEnum]


  export const ProjectRoleScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type ProjectRoleScalarFieldEnum = (typeof ProjectRoleScalarFieldEnum)[keyof typeof ProjectRoleScalarFieldEnum]


  export const ProjectPermissionScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    roleId: 'roleId',
    action: 'action',
    createdAt: 'createdAt'
  };

  export type ProjectPermissionScalarFieldEnum = (typeof ProjectPermissionScalarFieldEnum)[keyof typeof ProjectPermissionScalarFieldEnum]


  export const ProjectUserRoleScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    roleId: 'roleId'
  };

  export type ProjectUserRoleScalarFieldEnum = (typeof ProjectUserRoleScalarFieldEnum)[keyof typeof ProjectUserRoleScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    description?: StringNullableFilter<"Project"> | string | null
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    testCaseTypes?: TestCaseTypeListRelationFilter
    priorities?: PriorityListRelationFilter
    customFields?: CustomFieldListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    featureFlags?: FeatureFlagListRelationFilter
    roles?: ProjectRoleListRelationFilter
    userRoles?: ProjectUserRoleListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testCaseTypes?: TestCaseTypeOrderByRelationAggregateInput
    priorities?: PriorityOrderByRelationAggregateInput
    customFields?: CustomFieldOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    featureFlags?: FeatureFlagOrderByRelationAggregateInput
    roles?: ProjectRoleOrderByRelationAggregateInput
    userRoles?: ProjectUserRoleOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    testCaseTypes?: TestCaseTypeListRelationFilter
    priorities?: PriorityListRelationFilter
    customFields?: CustomFieldListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    featureFlags?: FeatureFlagListRelationFilter
    roles?: ProjectRoleListRelationFilter
    userRoles?: ProjectUserRoleListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
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
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type TestCaseTypeWhereInput = {
    AND?: TestCaseTypeWhereInput | TestCaseTypeWhereInput[]
    OR?: TestCaseTypeWhereInput[]
    NOT?: TestCaseTypeWhereInput | TestCaseTypeWhereInput[]
    id?: IntFilter<"TestCaseType"> | number
    projectId?: IntFilter<"TestCaseType"> | number
    name?: StringFilter<"TestCaseType"> | string
    description?: StringNullableFilter<"TestCaseType"> | string | null
    color?: StringNullableFilter<"TestCaseType"> | string | null
    createdAt?: DateTimeFilter<"TestCaseType"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type TestCaseTypeOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type TestCaseTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId_name?: TestCaseTypeProjectIdNameCompoundUniqueInput
    AND?: TestCaseTypeWhereInput | TestCaseTypeWhereInput[]
    OR?: TestCaseTypeWhereInput[]
    NOT?: TestCaseTypeWhereInput | TestCaseTypeWhereInput[]
    projectId?: IntFilter<"TestCaseType"> | number
    name?: StringFilter<"TestCaseType"> | string
    description?: StringNullableFilter<"TestCaseType"> | string | null
    color?: StringNullableFilter<"TestCaseType"> | string | null
    createdAt?: DateTimeFilter<"TestCaseType"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id" | "projectId_name">

  export type TestCaseTypeOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TestCaseTypeCountOrderByAggregateInput
    _avg?: TestCaseTypeAvgOrderByAggregateInput
    _max?: TestCaseTypeMaxOrderByAggregateInput
    _min?: TestCaseTypeMinOrderByAggregateInput
    _sum?: TestCaseTypeSumOrderByAggregateInput
  }

  export type TestCaseTypeScalarWhereWithAggregatesInput = {
    AND?: TestCaseTypeScalarWhereWithAggregatesInput | TestCaseTypeScalarWhereWithAggregatesInput[]
    OR?: TestCaseTypeScalarWhereWithAggregatesInput[]
    NOT?: TestCaseTypeScalarWhereWithAggregatesInput | TestCaseTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestCaseType"> | number
    projectId?: IntWithAggregatesFilter<"TestCaseType"> | number
    name?: StringWithAggregatesFilter<"TestCaseType"> | string
    description?: StringNullableWithAggregatesFilter<"TestCaseType"> | string | null
    color?: StringNullableWithAggregatesFilter<"TestCaseType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TestCaseType"> | Date | string
  }

  export type PriorityWhereInput = {
    AND?: PriorityWhereInput | PriorityWhereInput[]
    OR?: PriorityWhereInput[]
    NOT?: PriorityWhereInput | PriorityWhereInput[]
    id?: IntFilter<"Priority"> | number
    projectId?: IntFilter<"Priority"> | number
    name?: StringFilter<"Priority"> | string
    level?: IntFilter<"Priority"> | number
    color?: StringNullableFilter<"Priority"> | string | null
    createdAt?: DateTimeFilter<"Priority"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type PriorityOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    level?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type PriorityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId_name?: PriorityProjectIdNameCompoundUniqueInput
    AND?: PriorityWhereInput | PriorityWhereInput[]
    OR?: PriorityWhereInput[]
    NOT?: PriorityWhereInput | PriorityWhereInput[]
    projectId?: IntFilter<"Priority"> | number
    name?: StringFilter<"Priority"> | string
    level?: IntFilter<"Priority"> | number
    color?: StringNullableFilter<"Priority"> | string | null
    createdAt?: DateTimeFilter<"Priority"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id" | "projectId_name">

  export type PriorityOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    level?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PriorityCountOrderByAggregateInput
    _avg?: PriorityAvgOrderByAggregateInput
    _max?: PriorityMaxOrderByAggregateInput
    _min?: PriorityMinOrderByAggregateInput
    _sum?: PrioritySumOrderByAggregateInput
  }

  export type PriorityScalarWhereWithAggregatesInput = {
    AND?: PriorityScalarWhereWithAggregatesInput | PriorityScalarWhereWithAggregatesInput[]
    OR?: PriorityScalarWhereWithAggregatesInput[]
    NOT?: PriorityScalarWhereWithAggregatesInput | PriorityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Priority"> | number
    projectId?: IntWithAggregatesFilter<"Priority"> | number
    name?: StringWithAggregatesFilter<"Priority"> | string
    level?: IntWithAggregatesFilter<"Priority"> | number
    color?: StringNullableWithAggregatesFilter<"Priority"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Priority"> | Date | string
  }

  export type CustomFieldWhereInput = {
    AND?: CustomFieldWhereInput | CustomFieldWhereInput[]
    OR?: CustomFieldWhereInput[]
    NOT?: CustomFieldWhereInput | CustomFieldWhereInput[]
    id?: IntFilter<"CustomField"> | number
    projectId?: IntFilter<"CustomField"> | number
    name?: StringFilter<"CustomField"> | string
    description?: StringNullableFilter<"CustomField"> | string | null
    fieldType?: StringFilter<"CustomField"> | string
    required?: BoolFilter<"CustomField"> | boolean
    order?: IntFilter<"CustomField"> | number
    createdAt?: DateTimeFilter<"CustomField"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    options?: CustomFieldOptionListRelationFilter
  }

  export type CustomFieldOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fieldType?: SortOrder
    required?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    options?: CustomFieldOptionOrderByRelationAggregateInput
  }

  export type CustomFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId_name?: CustomFieldProjectIdNameCompoundUniqueInput
    AND?: CustomFieldWhereInput | CustomFieldWhereInput[]
    OR?: CustomFieldWhereInput[]
    NOT?: CustomFieldWhereInput | CustomFieldWhereInput[]
    projectId?: IntFilter<"CustomField"> | number
    name?: StringFilter<"CustomField"> | string
    description?: StringNullableFilter<"CustomField"> | string | null
    fieldType?: StringFilter<"CustomField"> | string
    required?: BoolFilter<"CustomField"> | boolean
    order?: IntFilter<"CustomField"> | number
    createdAt?: DateTimeFilter<"CustomField"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    options?: CustomFieldOptionListRelationFilter
  }, "id" | "projectId_name">

  export type CustomFieldOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fieldType?: SortOrder
    required?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: CustomFieldCountOrderByAggregateInput
    _avg?: CustomFieldAvgOrderByAggregateInput
    _max?: CustomFieldMaxOrderByAggregateInput
    _min?: CustomFieldMinOrderByAggregateInput
    _sum?: CustomFieldSumOrderByAggregateInput
  }

  export type CustomFieldScalarWhereWithAggregatesInput = {
    AND?: CustomFieldScalarWhereWithAggregatesInput | CustomFieldScalarWhereWithAggregatesInput[]
    OR?: CustomFieldScalarWhereWithAggregatesInput[]
    NOT?: CustomFieldScalarWhereWithAggregatesInput | CustomFieldScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomField"> | number
    projectId?: IntWithAggregatesFilter<"CustomField"> | number
    name?: StringWithAggregatesFilter<"CustomField"> | string
    description?: StringNullableWithAggregatesFilter<"CustomField"> | string | null
    fieldType?: StringWithAggregatesFilter<"CustomField"> | string
    required?: BoolWithAggregatesFilter<"CustomField"> | boolean
    order?: IntWithAggregatesFilter<"CustomField"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CustomField"> | Date | string
  }

  export type CustomFieldOptionWhereInput = {
    AND?: CustomFieldOptionWhereInput | CustomFieldOptionWhereInput[]
    OR?: CustomFieldOptionWhereInput[]
    NOT?: CustomFieldOptionWhereInput | CustomFieldOptionWhereInput[]
    id?: IntFilter<"CustomFieldOption"> | number
    fieldId?: IntFilter<"CustomFieldOption"> | number
    label?: StringFilter<"CustomFieldOption"> | string
    value?: StringFilter<"CustomFieldOption"> | string
    order?: IntFilter<"CustomFieldOption"> | number
    createdAt?: DateTimeFilter<"CustomFieldOption"> | Date | string
    field?: XOR<CustomFieldRelationFilter, CustomFieldWhereInput>
  }

  export type CustomFieldOptionOrderByWithRelationInput = {
    id?: SortOrder
    fieldId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    field?: CustomFieldOrderByWithRelationInput
  }

  export type CustomFieldOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fieldId_value?: CustomFieldOptionFieldIdValueCompoundUniqueInput
    AND?: CustomFieldOptionWhereInput | CustomFieldOptionWhereInput[]
    OR?: CustomFieldOptionWhereInput[]
    NOT?: CustomFieldOptionWhereInput | CustomFieldOptionWhereInput[]
    fieldId?: IntFilter<"CustomFieldOption"> | number
    label?: StringFilter<"CustomFieldOption"> | string
    value?: StringFilter<"CustomFieldOption"> | string
    order?: IntFilter<"CustomFieldOption"> | number
    createdAt?: DateTimeFilter<"CustomFieldOption"> | Date | string
    field?: XOR<CustomFieldRelationFilter, CustomFieldWhereInput>
  }, "id" | "fieldId_value">

  export type CustomFieldOptionOrderByWithAggregationInput = {
    id?: SortOrder
    fieldId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: CustomFieldOptionCountOrderByAggregateInput
    _avg?: CustomFieldOptionAvgOrderByAggregateInput
    _max?: CustomFieldOptionMaxOrderByAggregateInput
    _min?: CustomFieldOptionMinOrderByAggregateInput
    _sum?: CustomFieldOptionSumOrderByAggregateInput
  }

  export type CustomFieldOptionScalarWhereWithAggregatesInput = {
    AND?: CustomFieldOptionScalarWhereWithAggregatesInput | CustomFieldOptionScalarWhereWithAggregatesInput[]
    OR?: CustomFieldOptionScalarWhereWithAggregatesInput[]
    NOT?: CustomFieldOptionScalarWhereWithAggregatesInput | CustomFieldOptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomFieldOption"> | number
    fieldId?: IntWithAggregatesFilter<"CustomFieldOption"> | number
    label?: StringWithAggregatesFilter<"CustomFieldOption"> | string
    value?: StringWithAggregatesFilter<"CustomFieldOption"> | string
    order?: IntWithAggregatesFilter<"CustomFieldOption"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CustomFieldOption"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    projectId?: IntNullableFilter<"AuditLog"> | number | null
    userId?: IntFilter<"AuditLog"> | number
    userEmail?: StringFilter<"AuditLog"> | string
    firstName?: StringNullableFilter<"AuditLog"> | string | null
    lastName?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resourceType?: StringNullableFilter<"AuditLog"> | string | null
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: StringNullableFilter<"AuditLog"> | string | null
    requestId?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    project?: XOR<ProjectNullableRelationFilter, ProjectWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrderInput | SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    action?: SortOrder
    resourceType?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    projectId?: IntNullableFilter<"AuditLog"> | number | null
    userId?: IntFilter<"AuditLog"> | number
    userEmail?: StringFilter<"AuditLog"> | string
    firstName?: StringNullableFilter<"AuditLog"> | string | null
    lastName?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resourceType?: StringNullableFilter<"AuditLog"> | string | null
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: StringNullableFilter<"AuditLog"> | string | null
    requestId?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    project?: XOR<ProjectNullableRelationFilter, ProjectWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrderInput | SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    action?: SortOrder
    resourceType?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLog"> | number
    projectId?: IntNullableWithAggregatesFilter<"AuditLog"> | number | null
    userId?: IntWithAggregatesFilter<"AuditLog"> | number
    userEmail?: StringWithAggregatesFilter<"AuditLog"> | string
    firstName?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    resourceType?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    resourceId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    requestId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
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

  export type FeatureFlagWhereInput = {
    AND?: FeatureFlagWhereInput | FeatureFlagWhereInput[]
    OR?: FeatureFlagWhereInput[]
    NOT?: FeatureFlagWhereInput | FeatureFlagWhereInput[]
    id?: IntFilter<"FeatureFlag"> | number
    projectId?: IntFilter<"FeatureFlag"> | number
    key?: StringFilter<"FeatureFlag"> | string
    enabled?: BoolFilter<"FeatureFlag"> | boolean
    description?: StringNullableFilter<"FeatureFlag"> | string | null
    createdAt?: DateTimeFilter<"FeatureFlag"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type FeatureFlagOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    enabled?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type FeatureFlagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId_key?: FeatureFlagProjectIdKeyCompoundUniqueInput
    AND?: FeatureFlagWhereInput | FeatureFlagWhereInput[]
    OR?: FeatureFlagWhereInput[]
    NOT?: FeatureFlagWhereInput | FeatureFlagWhereInput[]
    projectId?: IntFilter<"FeatureFlag"> | number
    key?: StringFilter<"FeatureFlag"> | string
    enabled?: BoolFilter<"FeatureFlag"> | boolean
    description?: StringNullableFilter<"FeatureFlag"> | string | null
    createdAt?: DateTimeFilter<"FeatureFlag"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id" | "projectId_key">

  export type FeatureFlagOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    enabled?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FeatureFlagCountOrderByAggregateInput
    _avg?: FeatureFlagAvgOrderByAggregateInput
    _max?: FeatureFlagMaxOrderByAggregateInput
    _min?: FeatureFlagMinOrderByAggregateInput
    _sum?: FeatureFlagSumOrderByAggregateInput
  }

  export type FeatureFlagScalarWhereWithAggregatesInput = {
    AND?: FeatureFlagScalarWhereWithAggregatesInput | FeatureFlagScalarWhereWithAggregatesInput[]
    OR?: FeatureFlagScalarWhereWithAggregatesInput[]
    NOT?: FeatureFlagScalarWhereWithAggregatesInput | FeatureFlagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeatureFlag"> | number
    projectId?: IntWithAggregatesFilter<"FeatureFlag"> | number
    key?: StringWithAggregatesFilter<"FeatureFlag"> | string
    enabled?: BoolWithAggregatesFilter<"FeatureFlag"> | boolean
    description?: StringNullableWithAggregatesFilter<"FeatureFlag"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FeatureFlag"> | Date | string
  }

  export type ProjectRoleWhereInput = {
    AND?: ProjectRoleWhereInput | ProjectRoleWhereInput[]
    OR?: ProjectRoleWhereInput[]
    NOT?: ProjectRoleWhereInput | ProjectRoleWhereInput[]
    id?: IntFilter<"ProjectRole"> | number
    projectId?: IntFilter<"ProjectRole"> | number
    name?: StringFilter<"ProjectRole"> | string
    description?: StringNullableFilter<"ProjectRole"> | string | null
    createdAt?: DateTimeFilter<"ProjectRole"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    permissions?: ProjectPermissionListRelationFilter
    userRoles?: ProjectUserRoleListRelationFilter
  }

  export type ProjectRoleOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    permissions?: ProjectPermissionOrderByRelationAggregateInput
    userRoles?: ProjectUserRoleOrderByRelationAggregateInput
  }

  export type ProjectRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId_name?: ProjectRoleProjectIdNameCompoundUniqueInput
    AND?: ProjectRoleWhereInput | ProjectRoleWhereInput[]
    OR?: ProjectRoleWhereInput[]
    NOT?: ProjectRoleWhereInput | ProjectRoleWhereInput[]
    projectId?: IntFilter<"ProjectRole"> | number
    name?: StringFilter<"ProjectRole"> | string
    description?: StringNullableFilter<"ProjectRole"> | string | null
    createdAt?: DateTimeFilter<"ProjectRole"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    permissions?: ProjectPermissionListRelationFilter
    userRoles?: ProjectUserRoleListRelationFilter
  }, "id" | "projectId_name">

  export type ProjectRoleOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProjectRoleCountOrderByAggregateInput
    _avg?: ProjectRoleAvgOrderByAggregateInput
    _max?: ProjectRoleMaxOrderByAggregateInput
    _min?: ProjectRoleMinOrderByAggregateInput
    _sum?: ProjectRoleSumOrderByAggregateInput
  }

  export type ProjectRoleScalarWhereWithAggregatesInput = {
    AND?: ProjectRoleScalarWhereWithAggregatesInput | ProjectRoleScalarWhereWithAggregatesInput[]
    OR?: ProjectRoleScalarWhereWithAggregatesInput[]
    NOT?: ProjectRoleScalarWhereWithAggregatesInput | ProjectRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectRole"> | number
    projectId?: IntWithAggregatesFilter<"ProjectRole"> | number
    name?: StringWithAggregatesFilter<"ProjectRole"> | string
    description?: StringNullableWithAggregatesFilter<"ProjectRole"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProjectRole"> | Date | string
  }

  export type ProjectPermissionWhereInput = {
    AND?: ProjectPermissionWhereInput | ProjectPermissionWhereInput[]
    OR?: ProjectPermissionWhereInput[]
    NOT?: ProjectPermissionWhereInput | ProjectPermissionWhereInput[]
    id?: IntFilter<"ProjectPermission"> | number
    projectId?: IntFilter<"ProjectPermission"> | number
    roleId?: IntFilter<"ProjectPermission"> | number
    action?: StringFilter<"ProjectPermission"> | string
    createdAt?: DateTimeFilter<"ProjectPermission"> | Date | string
    role?: XOR<ProjectRoleRelationFilter, ProjectRoleWhereInput>
  }

  export type ProjectPermissionOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    roleId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    role?: ProjectRoleOrderByWithRelationInput
  }

  export type ProjectPermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roleId_action?: ProjectPermissionRoleIdActionCompoundUniqueInput
    AND?: ProjectPermissionWhereInput | ProjectPermissionWhereInput[]
    OR?: ProjectPermissionWhereInput[]
    NOT?: ProjectPermissionWhereInput | ProjectPermissionWhereInput[]
    projectId?: IntFilter<"ProjectPermission"> | number
    roleId?: IntFilter<"ProjectPermission"> | number
    action?: StringFilter<"ProjectPermission"> | string
    createdAt?: DateTimeFilter<"ProjectPermission"> | Date | string
    role?: XOR<ProjectRoleRelationFilter, ProjectRoleWhereInput>
  }, "id" | "roleId_action">

  export type ProjectPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    roleId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectPermissionCountOrderByAggregateInput
    _avg?: ProjectPermissionAvgOrderByAggregateInput
    _max?: ProjectPermissionMaxOrderByAggregateInput
    _min?: ProjectPermissionMinOrderByAggregateInput
    _sum?: ProjectPermissionSumOrderByAggregateInput
  }

  export type ProjectPermissionScalarWhereWithAggregatesInput = {
    AND?: ProjectPermissionScalarWhereWithAggregatesInput | ProjectPermissionScalarWhereWithAggregatesInput[]
    OR?: ProjectPermissionScalarWhereWithAggregatesInput[]
    NOT?: ProjectPermissionScalarWhereWithAggregatesInput | ProjectPermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectPermission"> | number
    projectId?: IntWithAggregatesFilter<"ProjectPermission"> | number
    roleId?: IntWithAggregatesFilter<"ProjectPermission"> | number
    action?: StringWithAggregatesFilter<"ProjectPermission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectPermission"> | Date | string
  }

  export type ProjectUserRoleWhereInput = {
    AND?: ProjectUserRoleWhereInput | ProjectUserRoleWhereInput[]
    OR?: ProjectUserRoleWhereInput[]
    NOT?: ProjectUserRoleWhereInput | ProjectUserRoleWhereInput[]
    id?: IntFilter<"ProjectUserRole"> | number
    projectId?: IntFilter<"ProjectUserRole"> | number
    userId?: IntFilter<"ProjectUserRole"> | number
    roleId?: IntFilter<"ProjectUserRole"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    role?: XOR<ProjectRoleRelationFilter, ProjectRoleWhereInput>
  }

  export type ProjectUserRoleOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    role?: ProjectRoleOrderByWithRelationInput
  }

  export type ProjectUserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId_userId_roleId?: ProjectUserRoleProjectIdUserIdRoleIdCompoundUniqueInput
    AND?: ProjectUserRoleWhereInput | ProjectUserRoleWhereInput[]
    OR?: ProjectUserRoleWhereInput[]
    NOT?: ProjectUserRoleWhereInput | ProjectUserRoleWhereInput[]
    projectId?: IntFilter<"ProjectUserRole"> | number
    userId?: IntFilter<"ProjectUserRole"> | number
    roleId?: IntFilter<"ProjectUserRole"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    role?: XOR<ProjectRoleRelationFilter, ProjectRoleWhereInput>
  }, "id" | "projectId_userId_roleId">

  export type ProjectUserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    _count?: ProjectUserRoleCountOrderByAggregateInput
    _avg?: ProjectUserRoleAvgOrderByAggregateInput
    _max?: ProjectUserRoleMaxOrderByAggregateInput
    _min?: ProjectUserRoleMinOrderByAggregateInput
    _sum?: ProjectUserRoleSumOrderByAggregateInput
  }

  export type ProjectUserRoleScalarWhereWithAggregatesInput = {
    AND?: ProjectUserRoleScalarWhereWithAggregatesInput | ProjectUserRoleScalarWhereWithAggregatesInput[]
    OR?: ProjectUserRoleScalarWhereWithAggregatesInput[]
    NOT?: ProjectUserRoleScalarWhereWithAggregatesInput | ProjectUserRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectUserRole"> | number
    projectId?: IntWithAggregatesFilter<"ProjectUserRole"> | number
    userId?: IntWithAggregatesFilter<"ProjectUserRole"> | number
    roleId?: IntWithAggregatesFilter<"ProjectUserRole"> | number
  }

  export type ProjectCreateInput = {
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeCreateNestedManyWithoutProjectInput
    priorities?: PriorityCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeUncheckedCreateNestedManyWithoutProjectInput
    priorities?: PriorityUncheckedCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldUncheckedCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagUncheckedCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleUncheckedCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUpdateManyWithoutProjectNestedInput
    priorities?: PriorityUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUncheckedUpdateManyWithoutProjectNestedInput
    priorities?: PriorityUncheckedUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUncheckedUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUncheckedUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseTypeCreateInput = {
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutTestCaseTypesInput
  }

  export type TestCaseTypeUncheckedCreateInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
  }

  export type TestCaseTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTestCaseTypesNestedInput
  }

  export type TestCaseTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseTypeCreateManyInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
  }

  export type TestCaseTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriorityCreateInput = {
    name: string
    level: number
    color?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutPrioritiesInput
  }

  export type PriorityUncheckedCreateInput = {
    id?: number
    projectId: number
    name: string
    level: number
    color?: string | null
    createdAt?: Date | string
  }

  export type PriorityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPrioritiesNestedInput
  }

  export type PriorityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriorityCreateManyInput = {
    id?: number
    projectId: number
    name: string
    level: number
    color?: string | null
    createdAt?: Date | string
  }

  export type PriorityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriorityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldCreateInput = {
    name: string
    description?: string | null
    fieldType: string
    required?: boolean
    order?: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutCustomFieldsInput
    options?: CustomFieldOptionCreateNestedManyWithoutFieldInput
  }

  export type CustomFieldUncheckedCreateInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    fieldType: string
    required?: boolean
    order?: number
    createdAt?: Date | string
    options?: CustomFieldOptionUncheckedCreateNestedManyWithoutFieldInput
  }

  export type CustomFieldUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCustomFieldsNestedInput
    options?: CustomFieldOptionUpdateManyWithoutFieldNestedInput
  }

  export type CustomFieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: CustomFieldOptionUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type CustomFieldCreateManyInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    fieldType: string
    required?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type CustomFieldUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldOptionCreateInput = {
    label: string
    value: string
    order?: number
    createdAt?: Date | string
    field: CustomFieldCreateNestedOneWithoutOptionsInput
  }

  export type CustomFieldOptionUncheckedCreateInput = {
    id?: number
    fieldId: number
    label: string
    value: string
    order?: number
    createdAt?: Date | string
  }

  export type CustomFieldOptionUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: CustomFieldUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type CustomFieldOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldOptionCreateManyInput = {
    id?: number
    fieldId: number
    label: string
    value: string
    order?: number
    createdAt?: Date | string
  }

  export type CustomFieldOptionUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    userId: number
    userEmail: string
    firstName?: string | null
    lastName?: string | null
    action: string
    resourceType?: string | null
    resourceId?: string | null
    metadata?: string | null
    requestId?: string | null
    createdAt?: Date | string
    project?: ProjectCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: number
    projectId?: number | null
    userId: number
    userEmail: string
    firstName?: string | null
    lastName?: string | null
    action: string
    resourceType?: string | null
    resourceId?: string | null
    metadata?: string | null
    requestId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: number
    projectId?: number | null
    userId: number
    userEmail: string
    firstName?: string | null
    lastName?: string | null
    action: string
    resourceType?: string | null
    resourceId?: string | null
    metadata?: string | null
    requestId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FeatureFlagCreateInput = {
    key: string
    enabled?: boolean
    description?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutFeatureFlagsInput
  }

  export type FeatureFlagUncheckedCreateInput = {
    id?: number
    projectId: number
    key: string
    enabled?: boolean
    description?: string | null
    createdAt?: Date | string
  }

  export type FeatureFlagUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutFeatureFlagsNestedInput
  }

  export type FeatureFlagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureFlagCreateManyInput = {
    id?: number
    projectId: number
    key: string
    enabled?: boolean
    description?: string | null
    createdAt?: Date | string
  }

  export type FeatureFlagUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureFlagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectRoleCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutRolesInput
    permissions?: ProjectPermissionCreateNestedManyWithoutRoleInput
    userRoles?: ProjectUserRoleCreateNestedManyWithoutRoleInput
  }

  export type ProjectRoleUncheckedCreateInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    createdAt?: Date | string
    permissions?: ProjectPermissionUncheckedCreateNestedManyWithoutRoleInput
    userRoles?: ProjectUserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type ProjectRoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutRolesNestedInput
    permissions?: ProjectPermissionUpdateManyWithoutRoleNestedInput
    userRoles?: ProjectUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type ProjectRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: ProjectPermissionUncheckedUpdateManyWithoutRoleNestedInput
    userRoles?: ProjectUserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ProjectRoleCreateManyInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ProjectRoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPermissionCreateInput = {
    projectId: number
    action: string
    createdAt?: Date | string
    role: ProjectRoleCreateNestedOneWithoutPermissionsInput
  }

  export type ProjectPermissionUncheckedCreateInput = {
    id?: number
    projectId: number
    roleId: number
    action: string
    createdAt?: Date | string
  }

  export type ProjectPermissionUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: ProjectRoleUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type ProjectPermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPermissionCreateManyInput = {
    id?: number
    projectId: number
    roleId: number
    action: string
    createdAt?: Date | string
  }

  export type ProjectPermissionUpdateManyMutationInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUserRoleCreateInput = {
    userId: number
    project: ProjectCreateNestedOneWithoutUserRolesInput
    role: ProjectRoleCreateNestedOneWithoutUserRolesInput
  }

  export type ProjectUserRoleUncheckedCreateInput = {
    id?: number
    projectId: number
    userId: number
    roleId: number
  }

  export type ProjectUserRoleUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutUserRolesNestedInput
    role?: ProjectRoleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type ProjectUserRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUserRoleCreateManyInput = {
    id?: number
    projectId: number
    userId: number
    roleId: number
  }

  export type ProjectUserRoleUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUserRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
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

  export type TestCaseTypeListRelationFilter = {
    every?: TestCaseTypeWhereInput
    some?: TestCaseTypeWhereInput
    none?: TestCaseTypeWhereInput
  }

  export type PriorityListRelationFilter = {
    every?: PriorityWhereInput
    some?: PriorityWhereInput
    none?: PriorityWhereInput
  }

  export type CustomFieldListRelationFilter = {
    every?: CustomFieldWhereInput
    some?: CustomFieldWhereInput
    none?: CustomFieldWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type FeatureFlagListRelationFilter = {
    every?: FeatureFlagWhereInput
    some?: FeatureFlagWhereInput
    none?: FeatureFlagWhereInput
  }

  export type ProjectRoleListRelationFilter = {
    every?: ProjectRoleWhereInput
    some?: ProjectRoleWhereInput
    none?: ProjectRoleWhereInput
  }

  export type ProjectUserRoleListRelationFilter = {
    every?: ProjectUserRoleWhereInput
    some?: ProjectUserRoleWhereInput
    none?: ProjectUserRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TestCaseTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriorityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureFlagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectUserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
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
    description?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
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

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TestCaseTypeProjectIdNameCompoundUniqueInput = {
    projectId: number
    name: string
  }

  export type TestCaseTypeCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TestCaseTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type TestCaseTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TestCaseTypeMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TestCaseTypeSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type PriorityProjectIdNameCompoundUniqueInput = {
    projectId: number
    name: string
  }

  export type PriorityCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    level?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type PriorityAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    level?: SortOrder
  }

  export type PriorityMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    level?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type PriorityMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    level?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type PrioritySumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    level?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CustomFieldOptionListRelationFilter = {
    every?: CustomFieldOptionWhereInput
    some?: CustomFieldOptionWhereInput
    none?: CustomFieldOptionWhereInput
  }

  export type CustomFieldOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomFieldProjectIdNameCompoundUniqueInput = {
    projectId: number
    name: string
  }

  export type CustomFieldCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fieldType?: SortOrder
    required?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomFieldAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    order?: SortOrder
  }

  export type CustomFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fieldType?: SortOrder
    required?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomFieldMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fieldType?: SortOrder
    required?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomFieldSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    order?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CustomFieldRelationFilter = {
    is?: CustomFieldWhereInput
    isNot?: CustomFieldWhereInput
  }

  export type CustomFieldOptionFieldIdValueCompoundUniqueInput = {
    fieldId: number
    value: string
  }

  export type CustomFieldOptionCountOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomFieldOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    order?: SortOrder
  }

  export type CustomFieldOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomFieldOptionMinOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomFieldOptionSumOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    order?: SortOrder
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

  export type ProjectNullableRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    metadata?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    metadata?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    metadata?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
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

  export type FeatureFlagProjectIdKeyCompoundUniqueInput = {
    projectId: number
    key: string
  }

  export type FeatureFlagCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    enabled?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FeatureFlagAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type FeatureFlagMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    enabled?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FeatureFlagMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    enabled?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FeatureFlagSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectPermissionListRelationFilter = {
    every?: ProjectPermissionWhereInput
    some?: ProjectPermissionWhereInput
    none?: ProjectPermissionWhereInput
  }

  export type ProjectPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectRoleProjectIdNameCompoundUniqueInput = {
    projectId: number
    name: string
  }

  export type ProjectRoleCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectRoleMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectRoleSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectRoleRelationFilter = {
    is?: ProjectRoleWhereInput
    isNot?: ProjectRoleWhereInput
  }

  export type ProjectPermissionRoleIdActionCompoundUniqueInput = {
    roleId: number
    action: string
  }

  export type ProjectPermissionCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    roleId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectPermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    roleId?: SortOrder
  }

  export type ProjectPermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    roleId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    roleId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectPermissionSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    roleId?: SortOrder
  }

  export type ProjectUserRoleProjectIdUserIdRoleIdCompoundUniqueInput = {
    projectId: number
    userId: number
    roleId: number
  }

  export type ProjectUserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type ProjectUserRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type ProjectUserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type ProjectUserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type ProjectUserRoleSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type TestCaseTypeCreateNestedManyWithoutProjectInput = {
    create?: XOR<TestCaseTypeCreateWithoutProjectInput, TestCaseTypeUncheckedCreateWithoutProjectInput> | TestCaseTypeCreateWithoutProjectInput[] | TestCaseTypeUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestCaseTypeCreateOrConnectWithoutProjectInput | TestCaseTypeCreateOrConnectWithoutProjectInput[]
    createMany?: TestCaseTypeCreateManyProjectInputEnvelope
    connect?: TestCaseTypeWhereUniqueInput | TestCaseTypeWhereUniqueInput[]
  }

  export type PriorityCreateNestedManyWithoutProjectInput = {
    create?: XOR<PriorityCreateWithoutProjectInput, PriorityUncheckedCreateWithoutProjectInput> | PriorityCreateWithoutProjectInput[] | PriorityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PriorityCreateOrConnectWithoutProjectInput | PriorityCreateOrConnectWithoutProjectInput[]
    createMany?: PriorityCreateManyProjectInputEnvelope
    connect?: PriorityWhereUniqueInput | PriorityWhereUniqueInput[]
  }

  export type CustomFieldCreateNestedManyWithoutProjectInput = {
    create?: XOR<CustomFieldCreateWithoutProjectInput, CustomFieldUncheckedCreateWithoutProjectInput> | CustomFieldCreateWithoutProjectInput[] | CustomFieldUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CustomFieldCreateOrConnectWithoutProjectInput | CustomFieldCreateOrConnectWithoutProjectInput[]
    createMany?: CustomFieldCreateManyProjectInputEnvelope
    connect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutProjectInput = {
    create?: XOR<AuditLogCreateWithoutProjectInput, AuditLogUncheckedCreateWithoutProjectInput> | AuditLogCreateWithoutProjectInput[] | AuditLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutProjectInput | AuditLogCreateOrConnectWithoutProjectInput[]
    createMany?: AuditLogCreateManyProjectInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type FeatureFlagCreateNestedManyWithoutProjectInput = {
    create?: XOR<FeatureFlagCreateWithoutProjectInput, FeatureFlagUncheckedCreateWithoutProjectInput> | FeatureFlagCreateWithoutProjectInput[] | FeatureFlagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FeatureFlagCreateOrConnectWithoutProjectInput | FeatureFlagCreateOrConnectWithoutProjectInput[]
    createMany?: FeatureFlagCreateManyProjectInputEnvelope
    connect?: FeatureFlagWhereUniqueInput | FeatureFlagWhereUniqueInput[]
  }

  export type ProjectRoleCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectRoleCreateWithoutProjectInput, ProjectRoleUncheckedCreateWithoutProjectInput> | ProjectRoleCreateWithoutProjectInput[] | ProjectRoleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectInput | ProjectRoleCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectRoleCreateManyProjectInputEnvelope
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
  }

  export type ProjectUserRoleCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectUserRoleCreateWithoutProjectInput, ProjectUserRoleUncheckedCreateWithoutProjectInput> | ProjectUserRoleCreateWithoutProjectInput[] | ProjectUserRoleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutProjectInput | ProjectUserRoleCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectUserRoleCreateManyProjectInputEnvelope
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
  }

  export type TestCaseTypeUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TestCaseTypeCreateWithoutProjectInput, TestCaseTypeUncheckedCreateWithoutProjectInput> | TestCaseTypeCreateWithoutProjectInput[] | TestCaseTypeUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestCaseTypeCreateOrConnectWithoutProjectInput | TestCaseTypeCreateOrConnectWithoutProjectInput[]
    createMany?: TestCaseTypeCreateManyProjectInputEnvelope
    connect?: TestCaseTypeWhereUniqueInput | TestCaseTypeWhereUniqueInput[]
  }

  export type PriorityUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PriorityCreateWithoutProjectInput, PriorityUncheckedCreateWithoutProjectInput> | PriorityCreateWithoutProjectInput[] | PriorityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PriorityCreateOrConnectWithoutProjectInput | PriorityCreateOrConnectWithoutProjectInput[]
    createMany?: PriorityCreateManyProjectInputEnvelope
    connect?: PriorityWhereUniqueInput | PriorityWhereUniqueInput[]
  }

  export type CustomFieldUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<CustomFieldCreateWithoutProjectInput, CustomFieldUncheckedCreateWithoutProjectInput> | CustomFieldCreateWithoutProjectInput[] | CustomFieldUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CustomFieldCreateOrConnectWithoutProjectInput | CustomFieldCreateOrConnectWithoutProjectInput[]
    createMany?: CustomFieldCreateManyProjectInputEnvelope
    connect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<AuditLogCreateWithoutProjectInput, AuditLogUncheckedCreateWithoutProjectInput> | AuditLogCreateWithoutProjectInput[] | AuditLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutProjectInput | AuditLogCreateOrConnectWithoutProjectInput[]
    createMany?: AuditLogCreateManyProjectInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type FeatureFlagUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<FeatureFlagCreateWithoutProjectInput, FeatureFlagUncheckedCreateWithoutProjectInput> | FeatureFlagCreateWithoutProjectInput[] | FeatureFlagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FeatureFlagCreateOrConnectWithoutProjectInput | FeatureFlagCreateOrConnectWithoutProjectInput[]
    createMany?: FeatureFlagCreateManyProjectInputEnvelope
    connect?: FeatureFlagWhereUniqueInput | FeatureFlagWhereUniqueInput[]
  }

  export type ProjectRoleUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectRoleCreateWithoutProjectInput, ProjectRoleUncheckedCreateWithoutProjectInput> | ProjectRoleCreateWithoutProjectInput[] | ProjectRoleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectInput | ProjectRoleCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectRoleCreateManyProjectInputEnvelope
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
  }

  export type ProjectUserRoleUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectUserRoleCreateWithoutProjectInput, ProjectUserRoleUncheckedCreateWithoutProjectInput> | ProjectUserRoleCreateWithoutProjectInput[] | ProjectUserRoleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutProjectInput | ProjectUserRoleCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectUserRoleCreateManyProjectInputEnvelope
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TestCaseTypeUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TestCaseTypeCreateWithoutProjectInput, TestCaseTypeUncheckedCreateWithoutProjectInput> | TestCaseTypeCreateWithoutProjectInput[] | TestCaseTypeUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestCaseTypeCreateOrConnectWithoutProjectInput | TestCaseTypeCreateOrConnectWithoutProjectInput[]
    upsert?: TestCaseTypeUpsertWithWhereUniqueWithoutProjectInput | TestCaseTypeUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TestCaseTypeCreateManyProjectInputEnvelope
    set?: TestCaseTypeWhereUniqueInput | TestCaseTypeWhereUniqueInput[]
    disconnect?: TestCaseTypeWhereUniqueInput | TestCaseTypeWhereUniqueInput[]
    delete?: TestCaseTypeWhereUniqueInput | TestCaseTypeWhereUniqueInput[]
    connect?: TestCaseTypeWhereUniqueInput | TestCaseTypeWhereUniqueInput[]
    update?: TestCaseTypeUpdateWithWhereUniqueWithoutProjectInput | TestCaseTypeUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TestCaseTypeUpdateManyWithWhereWithoutProjectInput | TestCaseTypeUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TestCaseTypeScalarWhereInput | TestCaseTypeScalarWhereInput[]
  }

  export type PriorityUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PriorityCreateWithoutProjectInput, PriorityUncheckedCreateWithoutProjectInput> | PriorityCreateWithoutProjectInput[] | PriorityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PriorityCreateOrConnectWithoutProjectInput | PriorityCreateOrConnectWithoutProjectInput[]
    upsert?: PriorityUpsertWithWhereUniqueWithoutProjectInput | PriorityUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PriorityCreateManyProjectInputEnvelope
    set?: PriorityWhereUniqueInput | PriorityWhereUniqueInput[]
    disconnect?: PriorityWhereUniqueInput | PriorityWhereUniqueInput[]
    delete?: PriorityWhereUniqueInput | PriorityWhereUniqueInput[]
    connect?: PriorityWhereUniqueInput | PriorityWhereUniqueInput[]
    update?: PriorityUpdateWithWhereUniqueWithoutProjectInput | PriorityUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PriorityUpdateManyWithWhereWithoutProjectInput | PriorityUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PriorityScalarWhereInput | PriorityScalarWhereInput[]
  }

  export type CustomFieldUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CustomFieldCreateWithoutProjectInput, CustomFieldUncheckedCreateWithoutProjectInput> | CustomFieldCreateWithoutProjectInput[] | CustomFieldUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CustomFieldCreateOrConnectWithoutProjectInput | CustomFieldCreateOrConnectWithoutProjectInput[]
    upsert?: CustomFieldUpsertWithWhereUniqueWithoutProjectInput | CustomFieldUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CustomFieldCreateManyProjectInputEnvelope
    set?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    disconnect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    delete?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    connect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    update?: CustomFieldUpdateWithWhereUniqueWithoutProjectInput | CustomFieldUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CustomFieldUpdateManyWithWhereWithoutProjectInput | CustomFieldUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CustomFieldScalarWhereInput | CustomFieldScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AuditLogCreateWithoutProjectInput, AuditLogUncheckedCreateWithoutProjectInput> | AuditLogCreateWithoutProjectInput[] | AuditLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutProjectInput | AuditLogCreateOrConnectWithoutProjectInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutProjectInput | AuditLogUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AuditLogCreateManyProjectInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutProjectInput | AuditLogUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutProjectInput | AuditLogUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type FeatureFlagUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FeatureFlagCreateWithoutProjectInput, FeatureFlagUncheckedCreateWithoutProjectInput> | FeatureFlagCreateWithoutProjectInput[] | FeatureFlagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FeatureFlagCreateOrConnectWithoutProjectInput | FeatureFlagCreateOrConnectWithoutProjectInput[]
    upsert?: FeatureFlagUpsertWithWhereUniqueWithoutProjectInput | FeatureFlagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FeatureFlagCreateManyProjectInputEnvelope
    set?: FeatureFlagWhereUniqueInput | FeatureFlagWhereUniqueInput[]
    disconnect?: FeatureFlagWhereUniqueInput | FeatureFlagWhereUniqueInput[]
    delete?: FeatureFlagWhereUniqueInput | FeatureFlagWhereUniqueInput[]
    connect?: FeatureFlagWhereUniqueInput | FeatureFlagWhereUniqueInput[]
    update?: FeatureFlagUpdateWithWhereUniqueWithoutProjectInput | FeatureFlagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FeatureFlagUpdateManyWithWhereWithoutProjectInput | FeatureFlagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FeatureFlagScalarWhereInput | FeatureFlagScalarWhereInput[]
  }

  export type ProjectRoleUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectRoleCreateWithoutProjectInput, ProjectRoleUncheckedCreateWithoutProjectInput> | ProjectRoleCreateWithoutProjectInput[] | ProjectRoleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectInput | ProjectRoleCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectRoleUpsertWithWhereUniqueWithoutProjectInput | ProjectRoleUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectRoleCreateManyProjectInputEnvelope
    set?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    disconnect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    delete?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    update?: ProjectRoleUpdateWithWhereUniqueWithoutProjectInput | ProjectRoleUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectRoleUpdateManyWithWhereWithoutProjectInput | ProjectRoleUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectRoleScalarWhereInput | ProjectRoleScalarWhereInput[]
  }

  export type ProjectUserRoleUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectUserRoleCreateWithoutProjectInput, ProjectUserRoleUncheckedCreateWithoutProjectInput> | ProjectUserRoleCreateWithoutProjectInput[] | ProjectUserRoleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutProjectInput | ProjectUserRoleCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectUserRoleUpsertWithWhereUniqueWithoutProjectInput | ProjectUserRoleUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectUserRoleCreateManyProjectInputEnvelope
    set?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    disconnect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    delete?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    update?: ProjectUserRoleUpdateWithWhereUniqueWithoutProjectInput | ProjectUserRoleUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectUserRoleUpdateManyWithWhereWithoutProjectInput | ProjectUserRoleUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectUserRoleScalarWhereInput | ProjectUserRoleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TestCaseTypeUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TestCaseTypeCreateWithoutProjectInput, TestCaseTypeUncheckedCreateWithoutProjectInput> | TestCaseTypeCreateWithoutProjectInput[] | TestCaseTypeUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestCaseTypeCreateOrConnectWithoutProjectInput | TestCaseTypeCreateOrConnectWithoutProjectInput[]
    upsert?: TestCaseTypeUpsertWithWhereUniqueWithoutProjectInput | TestCaseTypeUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TestCaseTypeCreateManyProjectInputEnvelope
    set?: TestCaseTypeWhereUniqueInput | TestCaseTypeWhereUniqueInput[]
    disconnect?: TestCaseTypeWhereUniqueInput | TestCaseTypeWhereUniqueInput[]
    delete?: TestCaseTypeWhereUniqueInput | TestCaseTypeWhereUniqueInput[]
    connect?: TestCaseTypeWhereUniqueInput | TestCaseTypeWhereUniqueInput[]
    update?: TestCaseTypeUpdateWithWhereUniqueWithoutProjectInput | TestCaseTypeUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TestCaseTypeUpdateManyWithWhereWithoutProjectInput | TestCaseTypeUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TestCaseTypeScalarWhereInput | TestCaseTypeScalarWhereInput[]
  }

  export type PriorityUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PriorityCreateWithoutProjectInput, PriorityUncheckedCreateWithoutProjectInput> | PriorityCreateWithoutProjectInput[] | PriorityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PriorityCreateOrConnectWithoutProjectInput | PriorityCreateOrConnectWithoutProjectInput[]
    upsert?: PriorityUpsertWithWhereUniqueWithoutProjectInput | PriorityUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PriorityCreateManyProjectInputEnvelope
    set?: PriorityWhereUniqueInput | PriorityWhereUniqueInput[]
    disconnect?: PriorityWhereUniqueInput | PriorityWhereUniqueInput[]
    delete?: PriorityWhereUniqueInput | PriorityWhereUniqueInput[]
    connect?: PriorityWhereUniqueInput | PriorityWhereUniqueInput[]
    update?: PriorityUpdateWithWhereUniqueWithoutProjectInput | PriorityUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PriorityUpdateManyWithWhereWithoutProjectInput | PriorityUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PriorityScalarWhereInput | PriorityScalarWhereInput[]
  }

  export type CustomFieldUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CustomFieldCreateWithoutProjectInput, CustomFieldUncheckedCreateWithoutProjectInput> | CustomFieldCreateWithoutProjectInput[] | CustomFieldUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CustomFieldCreateOrConnectWithoutProjectInput | CustomFieldCreateOrConnectWithoutProjectInput[]
    upsert?: CustomFieldUpsertWithWhereUniqueWithoutProjectInput | CustomFieldUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CustomFieldCreateManyProjectInputEnvelope
    set?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    disconnect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    delete?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    connect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    update?: CustomFieldUpdateWithWhereUniqueWithoutProjectInput | CustomFieldUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CustomFieldUpdateManyWithWhereWithoutProjectInput | CustomFieldUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CustomFieldScalarWhereInput | CustomFieldScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AuditLogCreateWithoutProjectInput, AuditLogUncheckedCreateWithoutProjectInput> | AuditLogCreateWithoutProjectInput[] | AuditLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutProjectInput | AuditLogCreateOrConnectWithoutProjectInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutProjectInput | AuditLogUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AuditLogCreateManyProjectInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutProjectInput | AuditLogUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutProjectInput | AuditLogUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type FeatureFlagUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FeatureFlagCreateWithoutProjectInput, FeatureFlagUncheckedCreateWithoutProjectInput> | FeatureFlagCreateWithoutProjectInput[] | FeatureFlagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FeatureFlagCreateOrConnectWithoutProjectInput | FeatureFlagCreateOrConnectWithoutProjectInput[]
    upsert?: FeatureFlagUpsertWithWhereUniqueWithoutProjectInput | FeatureFlagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FeatureFlagCreateManyProjectInputEnvelope
    set?: FeatureFlagWhereUniqueInput | FeatureFlagWhereUniqueInput[]
    disconnect?: FeatureFlagWhereUniqueInput | FeatureFlagWhereUniqueInput[]
    delete?: FeatureFlagWhereUniqueInput | FeatureFlagWhereUniqueInput[]
    connect?: FeatureFlagWhereUniqueInput | FeatureFlagWhereUniqueInput[]
    update?: FeatureFlagUpdateWithWhereUniqueWithoutProjectInput | FeatureFlagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FeatureFlagUpdateManyWithWhereWithoutProjectInput | FeatureFlagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FeatureFlagScalarWhereInput | FeatureFlagScalarWhereInput[]
  }

  export type ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectRoleCreateWithoutProjectInput, ProjectRoleUncheckedCreateWithoutProjectInput> | ProjectRoleCreateWithoutProjectInput[] | ProjectRoleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectInput | ProjectRoleCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectRoleUpsertWithWhereUniqueWithoutProjectInput | ProjectRoleUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectRoleCreateManyProjectInputEnvelope
    set?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    disconnect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    delete?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    update?: ProjectRoleUpdateWithWhereUniqueWithoutProjectInput | ProjectRoleUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectRoleUpdateManyWithWhereWithoutProjectInput | ProjectRoleUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectRoleScalarWhereInput | ProjectRoleScalarWhereInput[]
  }

  export type ProjectUserRoleUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectUserRoleCreateWithoutProjectInput, ProjectUserRoleUncheckedCreateWithoutProjectInput> | ProjectUserRoleCreateWithoutProjectInput[] | ProjectUserRoleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutProjectInput | ProjectUserRoleCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectUserRoleUpsertWithWhereUniqueWithoutProjectInput | ProjectUserRoleUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectUserRoleCreateManyProjectInputEnvelope
    set?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    disconnect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    delete?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    update?: ProjectUserRoleUpdateWithWhereUniqueWithoutProjectInput | ProjectUserRoleUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectUserRoleUpdateManyWithWhereWithoutProjectInput | ProjectUserRoleUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectUserRoleScalarWhereInput | ProjectUserRoleScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTestCaseTypesInput = {
    create?: XOR<ProjectCreateWithoutTestCaseTypesInput, ProjectUncheckedCreateWithoutTestCaseTypesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTestCaseTypesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTestCaseTypesNestedInput = {
    create?: XOR<ProjectCreateWithoutTestCaseTypesInput, ProjectUncheckedCreateWithoutTestCaseTypesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTestCaseTypesInput
    upsert?: ProjectUpsertWithoutTestCaseTypesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTestCaseTypesInput, ProjectUpdateWithoutTestCaseTypesInput>, ProjectUncheckedUpdateWithoutTestCaseTypesInput>
  }

  export type ProjectCreateNestedOneWithoutPrioritiesInput = {
    create?: XOR<ProjectCreateWithoutPrioritiesInput, ProjectUncheckedCreateWithoutPrioritiesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPrioritiesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutPrioritiesNestedInput = {
    create?: XOR<ProjectCreateWithoutPrioritiesInput, ProjectUncheckedCreateWithoutPrioritiesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPrioritiesInput
    upsert?: ProjectUpsertWithoutPrioritiesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPrioritiesInput, ProjectUpdateWithoutPrioritiesInput>, ProjectUncheckedUpdateWithoutPrioritiesInput>
  }

  export type ProjectCreateNestedOneWithoutCustomFieldsInput = {
    create?: XOR<ProjectCreateWithoutCustomFieldsInput, ProjectUncheckedCreateWithoutCustomFieldsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomFieldsInput
    connect?: ProjectWhereUniqueInput
  }

  export type CustomFieldOptionCreateNestedManyWithoutFieldInput = {
    create?: XOR<CustomFieldOptionCreateWithoutFieldInput, CustomFieldOptionUncheckedCreateWithoutFieldInput> | CustomFieldOptionCreateWithoutFieldInput[] | CustomFieldOptionUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CustomFieldOptionCreateOrConnectWithoutFieldInput | CustomFieldOptionCreateOrConnectWithoutFieldInput[]
    createMany?: CustomFieldOptionCreateManyFieldInputEnvelope
    connect?: CustomFieldOptionWhereUniqueInput | CustomFieldOptionWhereUniqueInput[]
  }

  export type CustomFieldOptionUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<CustomFieldOptionCreateWithoutFieldInput, CustomFieldOptionUncheckedCreateWithoutFieldInput> | CustomFieldOptionCreateWithoutFieldInput[] | CustomFieldOptionUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CustomFieldOptionCreateOrConnectWithoutFieldInput | CustomFieldOptionCreateOrConnectWithoutFieldInput[]
    createMany?: CustomFieldOptionCreateManyFieldInputEnvelope
    connect?: CustomFieldOptionWhereUniqueInput | CustomFieldOptionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectUpdateOneRequiredWithoutCustomFieldsNestedInput = {
    create?: XOR<ProjectCreateWithoutCustomFieldsInput, ProjectUncheckedCreateWithoutCustomFieldsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomFieldsInput
    upsert?: ProjectUpsertWithoutCustomFieldsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCustomFieldsInput, ProjectUpdateWithoutCustomFieldsInput>, ProjectUncheckedUpdateWithoutCustomFieldsInput>
  }

  export type CustomFieldOptionUpdateManyWithoutFieldNestedInput = {
    create?: XOR<CustomFieldOptionCreateWithoutFieldInput, CustomFieldOptionUncheckedCreateWithoutFieldInput> | CustomFieldOptionCreateWithoutFieldInput[] | CustomFieldOptionUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CustomFieldOptionCreateOrConnectWithoutFieldInput | CustomFieldOptionCreateOrConnectWithoutFieldInput[]
    upsert?: CustomFieldOptionUpsertWithWhereUniqueWithoutFieldInput | CustomFieldOptionUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: CustomFieldOptionCreateManyFieldInputEnvelope
    set?: CustomFieldOptionWhereUniqueInput | CustomFieldOptionWhereUniqueInput[]
    disconnect?: CustomFieldOptionWhereUniqueInput | CustomFieldOptionWhereUniqueInput[]
    delete?: CustomFieldOptionWhereUniqueInput | CustomFieldOptionWhereUniqueInput[]
    connect?: CustomFieldOptionWhereUniqueInput | CustomFieldOptionWhereUniqueInput[]
    update?: CustomFieldOptionUpdateWithWhereUniqueWithoutFieldInput | CustomFieldOptionUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: CustomFieldOptionUpdateManyWithWhereWithoutFieldInput | CustomFieldOptionUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: CustomFieldOptionScalarWhereInput | CustomFieldOptionScalarWhereInput[]
  }

  export type CustomFieldOptionUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<CustomFieldOptionCreateWithoutFieldInput, CustomFieldOptionUncheckedCreateWithoutFieldInput> | CustomFieldOptionCreateWithoutFieldInput[] | CustomFieldOptionUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CustomFieldOptionCreateOrConnectWithoutFieldInput | CustomFieldOptionCreateOrConnectWithoutFieldInput[]
    upsert?: CustomFieldOptionUpsertWithWhereUniqueWithoutFieldInput | CustomFieldOptionUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: CustomFieldOptionCreateManyFieldInputEnvelope
    set?: CustomFieldOptionWhereUniqueInput | CustomFieldOptionWhereUniqueInput[]
    disconnect?: CustomFieldOptionWhereUniqueInput | CustomFieldOptionWhereUniqueInput[]
    delete?: CustomFieldOptionWhereUniqueInput | CustomFieldOptionWhereUniqueInput[]
    connect?: CustomFieldOptionWhereUniqueInput | CustomFieldOptionWhereUniqueInput[]
    update?: CustomFieldOptionUpdateWithWhereUniqueWithoutFieldInput | CustomFieldOptionUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: CustomFieldOptionUpdateManyWithWhereWithoutFieldInput | CustomFieldOptionUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: CustomFieldOptionScalarWhereInput | CustomFieldOptionScalarWhereInput[]
  }

  export type CustomFieldCreateNestedOneWithoutOptionsInput = {
    create?: XOR<CustomFieldCreateWithoutOptionsInput, CustomFieldUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: CustomFieldCreateOrConnectWithoutOptionsInput
    connect?: CustomFieldWhereUniqueInput
  }

  export type CustomFieldUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<CustomFieldCreateWithoutOptionsInput, CustomFieldUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: CustomFieldCreateOrConnectWithoutOptionsInput
    upsert?: CustomFieldUpsertWithoutOptionsInput
    connect?: CustomFieldWhereUniqueInput
    update?: XOR<XOR<CustomFieldUpdateToOneWithWhereWithoutOptionsInput, CustomFieldUpdateWithoutOptionsInput>, CustomFieldUncheckedUpdateWithoutOptionsInput>
  }

  export type ProjectCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<ProjectCreateWithoutAuditLogsInput, ProjectUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAuditLogsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<ProjectCreateWithoutAuditLogsInput, ProjectUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAuditLogsInput
    upsert?: ProjectUpsertWithoutAuditLogsInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAuditLogsInput, ProjectUpdateWithoutAuditLogsInput>, ProjectUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectCreateNestedOneWithoutFeatureFlagsInput = {
    create?: XOR<ProjectCreateWithoutFeatureFlagsInput, ProjectUncheckedCreateWithoutFeatureFlagsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFeatureFlagsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutFeatureFlagsNestedInput = {
    create?: XOR<ProjectCreateWithoutFeatureFlagsInput, ProjectUncheckedCreateWithoutFeatureFlagsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFeatureFlagsInput
    upsert?: ProjectUpsertWithoutFeatureFlagsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutFeatureFlagsInput, ProjectUpdateWithoutFeatureFlagsInput>, ProjectUncheckedUpdateWithoutFeatureFlagsInput>
  }

  export type ProjectCreateNestedOneWithoutRolesInput = {
    create?: XOR<ProjectCreateWithoutRolesInput, ProjectUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutRolesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectPermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<ProjectPermissionCreateWithoutRoleInput, ProjectPermissionUncheckedCreateWithoutRoleInput> | ProjectPermissionCreateWithoutRoleInput[] | ProjectPermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProjectPermissionCreateOrConnectWithoutRoleInput | ProjectPermissionCreateOrConnectWithoutRoleInput[]
    createMany?: ProjectPermissionCreateManyRoleInputEnvelope
    connect?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
  }

  export type ProjectUserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<ProjectUserRoleCreateWithoutRoleInput, ProjectUserRoleUncheckedCreateWithoutRoleInput> | ProjectUserRoleCreateWithoutRoleInput[] | ProjectUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutRoleInput | ProjectUserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: ProjectUserRoleCreateManyRoleInputEnvelope
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
  }

  export type ProjectPermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<ProjectPermissionCreateWithoutRoleInput, ProjectPermissionUncheckedCreateWithoutRoleInput> | ProjectPermissionCreateWithoutRoleInput[] | ProjectPermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProjectPermissionCreateOrConnectWithoutRoleInput | ProjectPermissionCreateOrConnectWithoutRoleInput[]
    createMany?: ProjectPermissionCreateManyRoleInputEnvelope
    connect?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
  }

  export type ProjectUserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<ProjectUserRoleCreateWithoutRoleInput, ProjectUserRoleUncheckedCreateWithoutRoleInput> | ProjectUserRoleCreateWithoutRoleInput[] | ProjectUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutRoleInput | ProjectUserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: ProjectUserRoleCreateManyRoleInputEnvelope
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<ProjectCreateWithoutRolesInput, ProjectUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutRolesInput
    upsert?: ProjectUpsertWithoutRolesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutRolesInput, ProjectUpdateWithoutRolesInput>, ProjectUncheckedUpdateWithoutRolesInput>
  }

  export type ProjectPermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ProjectPermissionCreateWithoutRoleInput, ProjectPermissionUncheckedCreateWithoutRoleInput> | ProjectPermissionCreateWithoutRoleInput[] | ProjectPermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProjectPermissionCreateOrConnectWithoutRoleInput | ProjectPermissionCreateOrConnectWithoutRoleInput[]
    upsert?: ProjectPermissionUpsertWithWhereUniqueWithoutRoleInput | ProjectPermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ProjectPermissionCreateManyRoleInputEnvelope
    set?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    disconnect?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    delete?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    connect?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    update?: ProjectPermissionUpdateWithWhereUniqueWithoutRoleInput | ProjectPermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ProjectPermissionUpdateManyWithWhereWithoutRoleInput | ProjectPermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ProjectPermissionScalarWhereInput | ProjectPermissionScalarWhereInput[]
  }

  export type ProjectUserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ProjectUserRoleCreateWithoutRoleInput, ProjectUserRoleUncheckedCreateWithoutRoleInput> | ProjectUserRoleCreateWithoutRoleInput[] | ProjectUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutRoleInput | ProjectUserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: ProjectUserRoleUpsertWithWhereUniqueWithoutRoleInput | ProjectUserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ProjectUserRoleCreateManyRoleInputEnvelope
    set?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    disconnect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    delete?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    update?: ProjectUserRoleUpdateWithWhereUniqueWithoutRoleInput | ProjectUserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ProjectUserRoleUpdateManyWithWhereWithoutRoleInput | ProjectUserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ProjectUserRoleScalarWhereInput | ProjectUserRoleScalarWhereInput[]
  }

  export type ProjectPermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ProjectPermissionCreateWithoutRoleInput, ProjectPermissionUncheckedCreateWithoutRoleInput> | ProjectPermissionCreateWithoutRoleInput[] | ProjectPermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProjectPermissionCreateOrConnectWithoutRoleInput | ProjectPermissionCreateOrConnectWithoutRoleInput[]
    upsert?: ProjectPermissionUpsertWithWhereUniqueWithoutRoleInput | ProjectPermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ProjectPermissionCreateManyRoleInputEnvelope
    set?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    disconnect?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    delete?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    connect?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    update?: ProjectPermissionUpdateWithWhereUniqueWithoutRoleInput | ProjectPermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ProjectPermissionUpdateManyWithWhereWithoutRoleInput | ProjectPermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ProjectPermissionScalarWhereInput | ProjectPermissionScalarWhereInput[]
  }

  export type ProjectUserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ProjectUserRoleCreateWithoutRoleInput, ProjectUserRoleUncheckedCreateWithoutRoleInput> | ProjectUserRoleCreateWithoutRoleInput[] | ProjectUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutRoleInput | ProjectUserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: ProjectUserRoleUpsertWithWhereUniqueWithoutRoleInput | ProjectUserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ProjectUserRoleCreateManyRoleInputEnvelope
    set?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    disconnect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    delete?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    update?: ProjectUserRoleUpdateWithWhereUniqueWithoutRoleInput | ProjectUserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ProjectUserRoleUpdateManyWithWhereWithoutRoleInput | ProjectUserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ProjectUserRoleScalarWhereInput | ProjectUserRoleScalarWhereInput[]
  }

  export type ProjectRoleCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<ProjectRoleCreateWithoutPermissionsInput, ProjectRoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutPermissionsInput
    connect?: ProjectRoleWhereUniqueInput
  }

  export type ProjectRoleUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<ProjectRoleCreateWithoutPermissionsInput, ProjectRoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutPermissionsInput
    upsert?: ProjectRoleUpsertWithoutPermissionsInput
    connect?: ProjectRoleWhereUniqueInput
    update?: XOR<XOR<ProjectRoleUpdateToOneWithWhereWithoutPermissionsInput, ProjectRoleUpdateWithoutPermissionsInput>, ProjectRoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type ProjectCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<ProjectCreateWithoutUserRolesInput, ProjectUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUserRolesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectRoleCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<ProjectRoleCreateWithoutUserRolesInput, ProjectRoleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutUserRolesInput
    connect?: ProjectRoleWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<ProjectCreateWithoutUserRolesInput, ProjectUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUserRolesInput
    upsert?: ProjectUpsertWithoutUserRolesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutUserRolesInput, ProjectUpdateWithoutUserRolesInput>, ProjectUncheckedUpdateWithoutUserRolesInput>
  }

  export type ProjectRoleUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<ProjectRoleCreateWithoutUserRolesInput, ProjectRoleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutUserRolesInput
    upsert?: ProjectRoleUpsertWithoutUserRolesInput
    connect?: ProjectRoleWhereUniqueInput
    update?: XOR<XOR<ProjectRoleUpdateToOneWithWhereWithoutUserRolesInput, ProjectRoleUpdateWithoutUserRolesInput>, ProjectRoleUncheckedUpdateWithoutUserRolesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TestCaseTypeCreateWithoutProjectInput = {
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
  }

  export type TestCaseTypeUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
  }

  export type TestCaseTypeCreateOrConnectWithoutProjectInput = {
    where: TestCaseTypeWhereUniqueInput
    create: XOR<TestCaseTypeCreateWithoutProjectInput, TestCaseTypeUncheckedCreateWithoutProjectInput>
  }

  export type TestCaseTypeCreateManyProjectInputEnvelope = {
    data: TestCaseTypeCreateManyProjectInput | TestCaseTypeCreateManyProjectInput[]
  }

  export type PriorityCreateWithoutProjectInput = {
    name: string
    level: number
    color?: string | null
    createdAt?: Date | string
  }

  export type PriorityUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    level: number
    color?: string | null
    createdAt?: Date | string
  }

  export type PriorityCreateOrConnectWithoutProjectInput = {
    where: PriorityWhereUniqueInput
    create: XOR<PriorityCreateWithoutProjectInput, PriorityUncheckedCreateWithoutProjectInput>
  }

  export type PriorityCreateManyProjectInputEnvelope = {
    data: PriorityCreateManyProjectInput | PriorityCreateManyProjectInput[]
  }

  export type CustomFieldCreateWithoutProjectInput = {
    name: string
    description?: string | null
    fieldType: string
    required?: boolean
    order?: number
    createdAt?: Date | string
    options?: CustomFieldOptionCreateNestedManyWithoutFieldInput
  }

  export type CustomFieldUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    description?: string | null
    fieldType: string
    required?: boolean
    order?: number
    createdAt?: Date | string
    options?: CustomFieldOptionUncheckedCreateNestedManyWithoutFieldInput
  }

  export type CustomFieldCreateOrConnectWithoutProjectInput = {
    where: CustomFieldWhereUniqueInput
    create: XOR<CustomFieldCreateWithoutProjectInput, CustomFieldUncheckedCreateWithoutProjectInput>
  }

  export type CustomFieldCreateManyProjectInputEnvelope = {
    data: CustomFieldCreateManyProjectInput | CustomFieldCreateManyProjectInput[]
  }

  export type AuditLogCreateWithoutProjectInput = {
    userId: number
    userEmail: string
    firstName?: string | null
    lastName?: string | null
    action: string
    resourceType?: string | null
    resourceId?: string | null
    metadata?: string | null
    requestId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutProjectInput = {
    id?: number
    userId: number
    userEmail: string
    firstName?: string | null
    lastName?: string | null
    action: string
    resourceType?: string | null
    resourceId?: string | null
    metadata?: string | null
    requestId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutProjectInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutProjectInput, AuditLogUncheckedCreateWithoutProjectInput>
  }

  export type AuditLogCreateManyProjectInputEnvelope = {
    data: AuditLogCreateManyProjectInput | AuditLogCreateManyProjectInput[]
  }

  export type FeatureFlagCreateWithoutProjectInput = {
    key: string
    enabled?: boolean
    description?: string | null
    createdAt?: Date | string
  }

  export type FeatureFlagUncheckedCreateWithoutProjectInput = {
    id?: number
    key: string
    enabled?: boolean
    description?: string | null
    createdAt?: Date | string
  }

  export type FeatureFlagCreateOrConnectWithoutProjectInput = {
    where: FeatureFlagWhereUniqueInput
    create: XOR<FeatureFlagCreateWithoutProjectInput, FeatureFlagUncheckedCreateWithoutProjectInput>
  }

  export type FeatureFlagCreateManyProjectInputEnvelope = {
    data: FeatureFlagCreateManyProjectInput | FeatureFlagCreateManyProjectInput[]
  }

  export type ProjectRoleCreateWithoutProjectInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    permissions?: ProjectPermissionCreateNestedManyWithoutRoleInput
    userRoles?: ProjectUserRoleCreateNestedManyWithoutRoleInput
  }

  export type ProjectRoleUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    permissions?: ProjectPermissionUncheckedCreateNestedManyWithoutRoleInput
    userRoles?: ProjectUserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type ProjectRoleCreateOrConnectWithoutProjectInput = {
    where: ProjectRoleWhereUniqueInput
    create: XOR<ProjectRoleCreateWithoutProjectInput, ProjectRoleUncheckedCreateWithoutProjectInput>
  }

  export type ProjectRoleCreateManyProjectInputEnvelope = {
    data: ProjectRoleCreateManyProjectInput | ProjectRoleCreateManyProjectInput[]
  }

  export type ProjectUserRoleCreateWithoutProjectInput = {
    userId: number
    role: ProjectRoleCreateNestedOneWithoutUserRolesInput
  }

  export type ProjectUserRoleUncheckedCreateWithoutProjectInput = {
    id?: number
    userId: number
    roleId: number
  }

  export type ProjectUserRoleCreateOrConnectWithoutProjectInput = {
    where: ProjectUserRoleWhereUniqueInput
    create: XOR<ProjectUserRoleCreateWithoutProjectInput, ProjectUserRoleUncheckedCreateWithoutProjectInput>
  }

  export type ProjectUserRoleCreateManyProjectInputEnvelope = {
    data: ProjectUserRoleCreateManyProjectInput | ProjectUserRoleCreateManyProjectInput[]
  }

  export type TestCaseTypeUpsertWithWhereUniqueWithoutProjectInput = {
    where: TestCaseTypeWhereUniqueInput
    update: XOR<TestCaseTypeUpdateWithoutProjectInput, TestCaseTypeUncheckedUpdateWithoutProjectInput>
    create: XOR<TestCaseTypeCreateWithoutProjectInput, TestCaseTypeUncheckedCreateWithoutProjectInput>
  }

  export type TestCaseTypeUpdateWithWhereUniqueWithoutProjectInput = {
    where: TestCaseTypeWhereUniqueInput
    data: XOR<TestCaseTypeUpdateWithoutProjectInput, TestCaseTypeUncheckedUpdateWithoutProjectInput>
  }

  export type TestCaseTypeUpdateManyWithWhereWithoutProjectInput = {
    where: TestCaseTypeScalarWhereInput
    data: XOR<TestCaseTypeUpdateManyMutationInput, TestCaseTypeUncheckedUpdateManyWithoutProjectInput>
  }

  export type TestCaseTypeScalarWhereInput = {
    AND?: TestCaseTypeScalarWhereInput | TestCaseTypeScalarWhereInput[]
    OR?: TestCaseTypeScalarWhereInput[]
    NOT?: TestCaseTypeScalarWhereInput | TestCaseTypeScalarWhereInput[]
    id?: IntFilter<"TestCaseType"> | number
    projectId?: IntFilter<"TestCaseType"> | number
    name?: StringFilter<"TestCaseType"> | string
    description?: StringNullableFilter<"TestCaseType"> | string | null
    color?: StringNullableFilter<"TestCaseType"> | string | null
    createdAt?: DateTimeFilter<"TestCaseType"> | Date | string
  }

  export type PriorityUpsertWithWhereUniqueWithoutProjectInput = {
    where: PriorityWhereUniqueInput
    update: XOR<PriorityUpdateWithoutProjectInput, PriorityUncheckedUpdateWithoutProjectInput>
    create: XOR<PriorityCreateWithoutProjectInput, PriorityUncheckedCreateWithoutProjectInput>
  }

  export type PriorityUpdateWithWhereUniqueWithoutProjectInput = {
    where: PriorityWhereUniqueInput
    data: XOR<PriorityUpdateWithoutProjectInput, PriorityUncheckedUpdateWithoutProjectInput>
  }

  export type PriorityUpdateManyWithWhereWithoutProjectInput = {
    where: PriorityScalarWhereInput
    data: XOR<PriorityUpdateManyMutationInput, PriorityUncheckedUpdateManyWithoutProjectInput>
  }

  export type PriorityScalarWhereInput = {
    AND?: PriorityScalarWhereInput | PriorityScalarWhereInput[]
    OR?: PriorityScalarWhereInput[]
    NOT?: PriorityScalarWhereInput | PriorityScalarWhereInput[]
    id?: IntFilter<"Priority"> | number
    projectId?: IntFilter<"Priority"> | number
    name?: StringFilter<"Priority"> | string
    level?: IntFilter<"Priority"> | number
    color?: StringNullableFilter<"Priority"> | string | null
    createdAt?: DateTimeFilter<"Priority"> | Date | string
  }

  export type CustomFieldUpsertWithWhereUniqueWithoutProjectInput = {
    where: CustomFieldWhereUniqueInput
    update: XOR<CustomFieldUpdateWithoutProjectInput, CustomFieldUncheckedUpdateWithoutProjectInput>
    create: XOR<CustomFieldCreateWithoutProjectInput, CustomFieldUncheckedCreateWithoutProjectInput>
  }

  export type CustomFieldUpdateWithWhereUniqueWithoutProjectInput = {
    where: CustomFieldWhereUniqueInput
    data: XOR<CustomFieldUpdateWithoutProjectInput, CustomFieldUncheckedUpdateWithoutProjectInput>
  }

  export type CustomFieldUpdateManyWithWhereWithoutProjectInput = {
    where: CustomFieldScalarWhereInput
    data: XOR<CustomFieldUpdateManyMutationInput, CustomFieldUncheckedUpdateManyWithoutProjectInput>
  }

  export type CustomFieldScalarWhereInput = {
    AND?: CustomFieldScalarWhereInput | CustomFieldScalarWhereInput[]
    OR?: CustomFieldScalarWhereInput[]
    NOT?: CustomFieldScalarWhereInput | CustomFieldScalarWhereInput[]
    id?: IntFilter<"CustomField"> | number
    projectId?: IntFilter<"CustomField"> | number
    name?: StringFilter<"CustomField"> | string
    description?: StringNullableFilter<"CustomField"> | string | null
    fieldType?: StringFilter<"CustomField"> | string
    required?: BoolFilter<"CustomField"> | boolean
    order?: IntFilter<"CustomField"> | number
    createdAt?: DateTimeFilter<"CustomField"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutProjectInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutProjectInput, AuditLogUncheckedUpdateWithoutProjectInput>
    create: XOR<AuditLogCreateWithoutProjectInput, AuditLogUncheckedCreateWithoutProjectInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutProjectInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutProjectInput, AuditLogUncheckedUpdateWithoutProjectInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutProjectInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutProjectInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    projectId?: IntNullableFilter<"AuditLog"> | number | null
    userId?: IntFilter<"AuditLog"> | number
    userEmail?: StringFilter<"AuditLog"> | string
    firstName?: StringNullableFilter<"AuditLog"> | string | null
    lastName?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resourceType?: StringNullableFilter<"AuditLog"> | string | null
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: StringNullableFilter<"AuditLog"> | string | null
    requestId?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type FeatureFlagUpsertWithWhereUniqueWithoutProjectInput = {
    where: FeatureFlagWhereUniqueInput
    update: XOR<FeatureFlagUpdateWithoutProjectInput, FeatureFlagUncheckedUpdateWithoutProjectInput>
    create: XOR<FeatureFlagCreateWithoutProjectInput, FeatureFlagUncheckedCreateWithoutProjectInput>
  }

  export type FeatureFlagUpdateWithWhereUniqueWithoutProjectInput = {
    where: FeatureFlagWhereUniqueInput
    data: XOR<FeatureFlagUpdateWithoutProjectInput, FeatureFlagUncheckedUpdateWithoutProjectInput>
  }

  export type FeatureFlagUpdateManyWithWhereWithoutProjectInput = {
    where: FeatureFlagScalarWhereInput
    data: XOR<FeatureFlagUpdateManyMutationInput, FeatureFlagUncheckedUpdateManyWithoutProjectInput>
  }

  export type FeatureFlagScalarWhereInput = {
    AND?: FeatureFlagScalarWhereInput | FeatureFlagScalarWhereInput[]
    OR?: FeatureFlagScalarWhereInput[]
    NOT?: FeatureFlagScalarWhereInput | FeatureFlagScalarWhereInput[]
    id?: IntFilter<"FeatureFlag"> | number
    projectId?: IntFilter<"FeatureFlag"> | number
    key?: StringFilter<"FeatureFlag"> | string
    enabled?: BoolFilter<"FeatureFlag"> | boolean
    description?: StringNullableFilter<"FeatureFlag"> | string | null
    createdAt?: DateTimeFilter<"FeatureFlag"> | Date | string
  }

  export type ProjectRoleUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectRoleWhereUniqueInput
    update: XOR<ProjectRoleUpdateWithoutProjectInput, ProjectRoleUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectRoleCreateWithoutProjectInput, ProjectRoleUncheckedCreateWithoutProjectInput>
  }

  export type ProjectRoleUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectRoleWhereUniqueInput
    data: XOR<ProjectRoleUpdateWithoutProjectInput, ProjectRoleUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectRoleUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectRoleScalarWhereInput
    data: XOR<ProjectRoleUpdateManyMutationInput, ProjectRoleUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectRoleScalarWhereInput = {
    AND?: ProjectRoleScalarWhereInput | ProjectRoleScalarWhereInput[]
    OR?: ProjectRoleScalarWhereInput[]
    NOT?: ProjectRoleScalarWhereInput | ProjectRoleScalarWhereInput[]
    id?: IntFilter<"ProjectRole"> | number
    projectId?: IntFilter<"ProjectRole"> | number
    name?: StringFilter<"ProjectRole"> | string
    description?: StringNullableFilter<"ProjectRole"> | string | null
    createdAt?: DateTimeFilter<"ProjectRole"> | Date | string
  }

  export type ProjectUserRoleUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectUserRoleWhereUniqueInput
    update: XOR<ProjectUserRoleUpdateWithoutProjectInput, ProjectUserRoleUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectUserRoleCreateWithoutProjectInput, ProjectUserRoleUncheckedCreateWithoutProjectInput>
  }

  export type ProjectUserRoleUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectUserRoleWhereUniqueInput
    data: XOR<ProjectUserRoleUpdateWithoutProjectInput, ProjectUserRoleUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectUserRoleUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectUserRoleScalarWhereInput
    data: XOR<ProjectUserRoleUpdateManyMutationInput, ProjectUserRoleUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectUserRoleScalarWhereInput = {
    AND?: ProjectUserRoleScalarWhereInput | ProjectUserRoleScalarWhereInput[]
    OR?: ProjectUserRoleScalarWhereInput[]
    NOT?: ProjectUserRoleScalarWhereInput | ProjectUserRoleScalarWhereInput[]
    id?: IntFilter<"ProjectUserRole"> | number
    projectId?: IntFilter<"ProjectUserRole"> | number
    userId?: IntFilter<"ProjectUserRole"> | number
    roleId?: IntFilter<"ProjectUserRole"> | number
  }

  export type ProjectCreateWithoutTestCaseTypesInput = {
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    priorities?: PriorityCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTestCaseTypesInput = {
    id?: number
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    priorities?: PriorityUncheckedCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldUncheckedCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagUncheckedCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleUncheckedCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTestCaseTypesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTestCaseTypesInput, ProjectUncheckedCreateWithoutTestCaseTypesInput>
  }

  export type ProjectUpsertWithoutTestCaseTypesInput = {
    update: XOR<ProjectUpdateWithoutTestCaseTypesInput, ProjectUncheckedUpdateWithoutTestCaseTypesInput>
    create: XOR<ProjectCreateWithoutTestCaseTypesInput, ProjectUncheckedCreateWithoutTestCaseTypesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTestCaseTypesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTestCaseTypesInput, ProjectUncheckedUpdateWithoutTestCaseTypesInput>
  }

  export type ProjectUpdateWithoutTestCaseTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priorities?: PriorityUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTestCaseTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priorities?: PriorityUncheckedUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUncheckedUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUncheckedUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutPrioritiesInput = {
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPrioritiesInput = {
    id?: number
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeUncheckedCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldUncheckedCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagUncheckedCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleUncheckedCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPrioritiesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPrioritiesInput, ProjectUncheckedCreateWithoutPrioritiesInput>
  }

  export type ProjectUpsertWithoutPrioritiesInput = {
    update: XOR<ProjectUpdateWithoutPrioritiesInput, ProjectUncheckedUpdateWithoutPrioritiesInput>
    create: XOR<ProjectCreateWithoutPrioritiesInput, ProjectUncheckedCreateWithoutPrioritiesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPrioritiesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPrioritiesInput, ProjectUncheckedUpdateWithoutPrioritiesInput>
  }

  export type ProjectUpdateWithoutPrioritiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPrioritiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUncheckedUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUncheckedUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUncheckedUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutCustomFieldsInput = {
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeCreateNestedManyWithoutProjectInput
    priorities?: PriorityCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCustomFieldsInput = {
    id?: number
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeUncheckedCreateNestedManyWithoutProjectInput
    priorities?: PriorityUncheckedCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagUncheckedCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleUncheckedCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCustomFieldsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCustomFieldsInput, ProjectUncheckedCreateWithoutCustomFieldsInput>
  }

  export type CustomFieldOptionCreateWithoutFieldInput = {
    label: string
    value: string
    order?: number
    createdAt?: Date | string
  }

  export type CustomFieldOptionUncheckedCreateWithoutFieldInput = {
    id?: number
    label: string
    value: string
    order?: number
    createdAt?: Date | string
  }

  export type CustomFieldOptionCreateOrConnectWithoutFieldInput = {
    where: CustomFieldOptionWhereUniqueInput
    create: XOR<CustomFieldOptionCreateWithoutFieldInput, CustomFieldOptionUncheckedCreateWithoutFieldInput>
  }

  export type CustomFieldOptionCreateManyFieldInputEnvelope = {
    data: CustomFieldOptionCreateManyFieldInput | CustomFieldOptionCreateManyFieldInput[]
  }

  export type ProjectUpsertWithoutCustomFieldsInput = {
    update: XOR<ProjectUpdateWithoutCustomFieldsInput, ProjectUncheckedUpdateWithoutCustomFieldsInput>
    create: XOR<ProjectCreateWithoutCustomFieldsInput, ProjectUncheckedCreateWithoutCustomFieldsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCustomFieldsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCustomFieldsInput, ProjectUncheckedUpdateWithoutCustomFieldsInput>
  }

  export type ProjectUpdateWithoutCustomFieldsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUpdateManyWithoutProjectNestedInput
    priorities?: PriorityUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCustomFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUncheckedUpdateManyWithoutProjectNestedInput
    priorities?: PriorityUncheckedUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUncheckedUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type CustomFieldOptionUpsertWithWhereUniqueWithoutFieldInput = {
    where: CustomFieldOptionWhereUniqueInput
    update: XOR<CustomFieldOptionUpdateWithoutFieldInput, CustomFieldOptionUncheckedUpdateWithoutFieldInput>
    create: XOR<CustomFieldOptionCreateWithoutFieldInput, CustomFieldOptionUncheckedCreateWithoutFieldInput>
  }

  export type CustomFieldOptionUpdateWithWhereUniqueWithoutFieldInput = {
    where: CustomFieldOptionWhereUniqueInput
    data: XOR<CustomFieldOptionUpdateWithoutFieldInput, CustomFieldOptionUncheckedUpdateWithoutFieldInput>
  }

  export type CustomFieldOptionUpdateManyWithWhereWithoutFieldInput = {
    where: CustomFieldOptionScalarWhereInput
    data: XOR<CustomFieldOptionUpdateManyMutationInput, CustomFieldOptionUncheckedUpdateManyWithoutFieldInput>
  }

  export type CustomFieldOptionScalarWhereInput = {
    AND?: CustomFieldOptionScalarWhereInput | CustomFieldOptionScalarWhereInput[]
    OR?: CustomFieldOptionScalarWhereInput[]
    NOT?: CustomFieldOptionScalarWhereInput | CustomFieldOptionScalarWhereInput[]
    id?: IntFilter<"CustomFieldOption"> | number
    fieldId?: IntFilter<"CustomFieldOption"> | number
    label?: StringFilter<"CustomFieldOption"> | string
    value?: StringFilter<"CustomFieldOption"> | string
    order?: IntFilter<"CustomFieldOption"> | number
    createdAt?: DateTimeFilter<"CustomFieldOption"> | Date | string
  }

  export type CustomFieldCreateWithoutOptionsInput = {
    name: string
    description?: string | null
    fieldType: string
    required?: boolean
    order?: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutCustomFieldsInput
  }

  export type CustomFieldUncheckedCreateWithoutOptionsInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    fieldType: string
    required?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type CustomFieldCreateOrConnectWithoutOptionsInput = {
    where: CustomFieldWhereUniqueInput
    create: XOR<CustomFieldCreateWithoutOptionsInput, CustomFieldUncheckedCreateWithoutOptionsInput>
  }

  export type CustomFieldUpsertWithoutOptionsInput = {
    update: XOR<CustomFieldUpdateWithoutOptionsInput, CustomFieldUncheckedUpdateWithoutOptionsInput>
    create: XOR<CustomFieldCreateWithoutOptionsInput, CustomFieldUncheckedCreateWithoutOptionsInput>
    where?: CustomFieldWhereInput
  }

  export type CustomFieldUpdateToOneWithWhereWithoutOptionsInput = {
    where?: CustomFieldWhereInput
    data: XOR<CustomFieldUpdateWithoutOptionsInput, CustomFieldUncheckedUpdateWithoutOptionsInput>
  }

  export type CustomFieldUpdateWithoutOptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCustomFieldsNestedInput
  }

  export type CustomFieldUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutAuditLogsInput = {
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeCreateNestedManyWithoutProjectInput
    priorities?: PriorityCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAuditLogsInput = {
    id?: number
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeUncheckedCreateNestedManyWithoutProjectInput
    priorities?: PriorityUncheckedCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldUncheckedCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagUncheckedCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleUncheckedCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAuditLogsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAuditLogsInput, ProjectUncheckedCreateWithoutAuditLogsInput>
  }

  export type ProjectUpsertWithoutAuditLogsInput = {
    update: XOR<ProjectUpdateWithoutAuditLogsInput, ProjectUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<ProjectCreateWithoutAuditLogsInput, ProjectUncheckedCreateWithoutAuditLogsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAuditLogsInput, ProjectUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ProjectUpdateWithoutAuditLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUpdateManyWithoutProjectNestedInput
    priorities?: PriorityUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAuditLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUncheckedUpdateManyWithoutProjectNestedInput
    priorities?: PriorityUncheckedUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUncheckedUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUncheckedUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutFeatureFlagsInput = {
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeCreateNestedManyWithoutProjectInput
    priorities?: PriorityCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutFeatureFlagsInput = {
    id?: number
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeUncheckedCreateNestedManyWithoutProjectInput
    priorities?: PriorityUncheckedCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldUncheckedCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleUncheckedCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutFeatureFlagsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFeatureFlagsInput, ProjectUncheckedCreateWithoutFeatureFlagsInput>
  }

  export type ProjectUpsertWithoutFeatureFlagsInput = {
    update: XOR<ProjectUpdateWithoutFeatureFlagsInput, ProjectUncheckedUpdateWithoutFeatureFlagsInput>
    create: XOR<ProjectCreateWithoutFeatureFlagsInput, ProjectUncheckedCreateWithoutFeatureFlagsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutFeatureFlagsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutFeatureFlagsInput, ProjectUncheckedUpdateWithoutFeatureFlagsInput>
  }

  export type ProjectUpdateWithoutFeatureFlagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUpdateManyWithoutProjectNestedInput
    priorities?: PriorityUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutFeatureFlagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUncheckedUpdateManyWithoutProjectNestedInput
    priorities?: PriorityUncheckedUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUncheckedUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutRolesInput = {
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeCreateNestedManyWithoutProjectInput
    priorities?: PriorityCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutRolesInput = {
    id?: number
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeUncheckedCreateNestedManyWithoutProjectInput
    priorities?: PriorityUncheckedCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldUncheckedCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagUncheckedCreateNestedManyWithoutProjectInput
    userRoles?: ProjectUserRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutRolesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutRolesInput, ProjectUncheckedCreateWithoutRolesInput>
  }

  export type ProjectPermissionCreateWithoutRoleInput = {
    projectId: number
    action: string
    createdAt?: Date | string
  }

  export type ProjectPermissionUncheckedCreateWithoutRoleInput = {
    id?: number
    projectId: number
    action: string
    createdAt?: Date | string
  }

  export type ProjectPermissionCreateOrConnectWithoutRoleInput = {
    where: ProjectPermissionWhereUniqueInput
    create: XOR<ProjectPermissionCreateWithoutRoleInput, ProjectPermissionUncheckedCreateWithoutRoleInput>
  }

  export type ProjectPermissionCreateManyRoleInputEnvelope = {
    data: ProjectPermissionCreateManyRoleInput | ProjectPermissionCreateManyRoleInput[]
  }

  export type ProjectUserRoleCreateWithoutRoleInput = {
    userId: number
    project: ProjectCreateNestedOneWithoutUserRolesInput
  }

  export type ProjectUserRoleUncheckedCreateWithoutRoleInput = {
    id?: number
    projectId: number
    userId: number
  }

  export type ProjectUserRoleCreateOrConnectWithoutRoleInput = {
    where: ProjectUserRoleWhereUniqueInput
    create: XOR<ProjectUserRoleCreateWithoutRoleInput, ProjectUserRoleUncheckedCreateWithoutRoleInput>
  }

  export type ProjectUserRoleCreateManyRoleInputEnvelope = {
    data: ProjectUserRoleCreateManyRoleInput | ProjectUserRoleCreateManyRoleInput[]
  }

  export type ProjectUpsertWithoutRolesInput = {
    update: XOR<ProjectUpdateWithoutRolesInput, ProjectUncheckedUpdateWithoutRolesInput>
    create: XOR<ProjectCreateWithoutRolesInput, ProjectUncheckedCreateWithoutRolesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutRolesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutRolesInput, ProjectUncheckedUpdateWithoutRolesInput>
  }

  export type ProjectUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUpdateManyWithoutProjectNestedInput
    priorities?: PriorityUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUncheckedUpdateManyWithoutProjectNestedInput
    priorities?: PriorityUncheckedUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUncheckedUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUncheckedUpdateManyWithoutProjectNestedInput
    userRoles?: ProjectUserRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectPermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: ProjectPermissionWhereUniqueInput
    update: XOR<ProjectPermissionUpdateWithoutRoleInput, ProjectPermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<ProjectPermissionCreateWithoutRoleInput, ProjectPermissionUncheckedCreateWithoutRoleInput>
  }

  export type ProjectPermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: ProjectPermissionWhereUniqueInput
    data: XOR<ProjectPermissionUpdateWithoutRoleInput, ProjectPermissionUncheckedUpdateWithoutRoleInput>
  }

  export type ProjectPermissionUpdateManyWithWhereWithoutRoleInput = {
    where: ProjectPermissionScalarWhereInput
    data: XOR<ProjectPermissionUpdateManyMutationInput, ProjectPermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type ProjectPermissionScalarWhereInput = {
    AND?: ProjectPermissionScalarWhereInput | ProjectPermissionScalarWhereInput[]
    OR?: ProjectPermissionScalarWhereInput[]
    NOT?: ProjectPermissionScalarWhereInput | ProjectPermissionScalarWhereInput[]
    id?: IntFilter<"ProjectPermission"> | number
    projectId?: IntFilter<"ProjectPermission"> | number
    roleId?: IntFilter<"ProjectPermission"> | number
    action?: StringFilter<"ProjectPermission"> | string
    createdAt?: DateTimeFilter<"ProjectPermission"> | Date | string
  }

  export type ProjectUserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: ProjectUserRoleWhereUniqueInput
    update: XOR<ProjectUserRoleUpdateWithoutRoleInput, ProjectUserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<ProjectUserRoleCreateWithoutRoleInput, ProjectUserRoleUncheckedCreateWithoutRoleInput>
  }

  export type ProjectUserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: ProjectUserRoleWhereUniqueInput
    data: XOR<ProjectUserRoleUpdateWithoutRoleInput, ProjectUserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type ProjectUserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: ProjectUserRoleScalarWhereInput
    data: XOR<ProjectUserRoleUpdateManyMutationInput, ProjectUserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type ProjectRoleCreateWithoutPermissionsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutRolesInput
    userRoles?: ProjectUserRoleCreateNestedManyWithoutRoleInput
  }

  export type ProjectRoleUncheckedCreateWithoutPermissionsInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    createdAt?: Date | string
    userRoles?: ProjectUserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type ProjectRoleCreateOrConnectWithoutPermissionsInput = {
    where: ProjectRoleWhereUniqueInput
    create: XOR<ProjectRoleCreateWithoutPermissionsInput, ProjectRoleUncheckedCreateWithoutPermissionsInput>
  }

  export type ProjectRoleUpsertWithoutPermissionsInput = {
    update: XOR<ProjectRoleUpdateWithoutPermissionsInput, ProjectRoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<ProjectRoleCreateWithoutPermissionsInput, ProjectRoleUncheckedCreateWithoutPermissionsInput>
    where?: ProjectRoleWhereInput
  }

  export type ProjectRoleUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: ProjectRoleWhereInput
    data: XOR<ProjectRoleUpdateWithoutPermissionsInput, ProjectRoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type ProjectRoleUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutRolesNestedInput
    userRoles?: ProjectUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type ProjectRoleUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: ProjectUserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ProjectCreateWithoutUserRolesInput = {
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeCreateNestedManyWithoutProjectInput
    priorities?: PriorityCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserRolesInput = {
    id?: number
    name: string
    description?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCaseTypes?: TestCaseTypeUncheckedCreateNestedManyWithoutProjectInput
    priorities?: PriorityUncheckedCreateNestedManyWithoutProjectInput
    customFields?: CustomFieldUncheckedCreateNestedManyWithoutProjectInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutProjectInput
    featureFlags?: FeatureFlagUncheckedCreateNestedManyWithoutProjectInput
    roles?: ProjectRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserRolesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserRolesInput, ProjectUncheckedCreateWithoutUserRolesInput>
  }

  export type ProjectRoleCreateWithoutUserRolesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutRolesInput
    permissions?: ProjectPermissionCreateNestedManyWithoutRoleInput
  }

  export type ProjectRoleUncheckedCreateWithoutUserRolesInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    createdAt?: Date | string
    permissions?: ProjectPermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type ProjectRoleCreateOrConnectWithoutUserRolesInput = {
    where: ProjectRoleWhereUniqueInput
    create: XOR<ProjectRoleCreateWithoutUserRolesInput, ProjectRoleUncheckedCreateWithoutUserRolesInput>
  }

  export type ProjectUpsertWithoutUserRolesInput = {
    update: XOR<ProjectUpdateWithoutUserRolesInput, ProjectUncheckedUpdateWithoutUserRolesInput>
    create: XOR<ProjectCreateWithoutUserRolesInput, ProjectUncheckedCreateWithoutUserRolesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutUserRolesInput, ProjectUncheckedUpdateWithoutUserRolesInput>
  }

  export type ProjectUpdateWithoutUserRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUpdateManyWithoutProjectNestedInput
    priorities?: PriorityUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCaseTypes?: TestCaseTypeUncheckedUpdateManyWithoutProjectNestedInput
    priorities?: PriorityUncheckedUpdateManyWithoutProjectNestedInput
    customFields?: CustomFieldUncheckedUpdateManyWithoutProjectNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutProjectNestedInput
    featureFlags?: FeatureFlagUncheckedUpdateManyWithoutProjectNestedInput
    roles?: ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectRoleUpsertWithoutUserRolesInput = {
    update: XOR<ProjectRoleUpdateWithoutUserRolesInput, ProjectRoleUncheckedUpdateWithoutUserRolesInput>
    create: XOR<ProjectRoleCreateWithoutUserRolesInput, ProjectRoleUncheckedCreateWithoutUserRolesInput>
    where?: ProjectRoleWhereInput
  }

  export type ProjectRoleUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: ProjectRoleWhereInput
    data: XOR<ProjectRoleUpdateWithoutUserRolesInput, ProjectRoleUncheckedUpdateWithoutUserRolesInput>
  }

  export type ProjectRoleUpdateWithoutUserRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutRolesNestedInput
    permissions?: ProjectPermissionUpdateManyWithoutRoleNestedInput
  }

  export type ProjectRoleUncheckedUpdateWithoutUserRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: ProjectPermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type TestCaseTypeCreateManyProjectInput = {
    id?: number
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
  }

  export type PriorityCreateManyProjectInput = {
    id?: number
    name: string
    level: number
    color?: string | null
    createdAt?: Date | string
  }

  export type CustomFieldCreateManyProjectInput = {
    id?: number
    name: string
    description?: string | null
    fieldType: string
    required?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type AuditLogCreateManyProjectInput = {
    id?: number
    userId: number
    userEmail: string
    firstName?: string | null
    lastName?: string | null
    action: string
    resourceType?: string | null
    resourceId?: string | null
    metadata?: string | null
    requestId?: string | null
    createdAt?: Date | string
  }

  export type FeatureFlagCreateManyProjectInput = {
    id?: number
    key: string
    enabled?: boolean
    description?: string | null
    createdAt?: Date | string
  }

  export type ProjectRoleCreateManyProjectInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ProjectUserRoleCreateManyProjectInput = {
    id?: number
    userId: number
    roleId: number
  }

  export type TestCaseTypeUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseTypeUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseTypeUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriorityUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriorityUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriorityUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: CustomFieldOptionUpdateManyWithoutFieldNestedInput
  }

  export type CustomFieldUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: CustomFieldOptionUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type CustomFieldUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutProjectInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureFlagUpdateWithoutProjectInput = {
    key?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureFlagUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureFlagUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectRoleUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: ProjectPermissionUpdateManyWithoutRoleNestedInput
    userRoles?: ProjectUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type ProjectRoleUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: ProjectPermissionUncheckedUpdateManyWithoutRoleNestedInput
    userRoles?: ProjectUserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ProjectRoleUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUserRoleUpdateWithoutProjectInput = {
    userId?: IntFieldUpdateOperationsInput | number
    role?: ProjectRoleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type ProjectUserRoleUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUserRoleUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type CustomFieldOptionCreateManyFieldInput = {
    id?: number
    label: string
    value: string
    order?: number
    createdAt?: Date | string
  }

  export type CustomFieldOptionUpdateWithoutFieldInput = {
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldOptionUncheckedUpdateWithoutFieldInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldOptionUncheckedUpdateManyWithoutFieldInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPermissionCreateManyRoleInput = {
    id?: number
    projectId: number
    action: string
    createdAt?: Date | string
  }

  export type ProjectUserRoleCreateManyRoleInput = {
    id?: number
    projectId: number
    userId: number
  }

  export type ProjectPermissionUpdateWithoutRoleInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPermissionUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPermissionUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUserRoleUpdateWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type ProjectUserRoleUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUserRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomFieldCountOutputTypeDefaultArgs instead
     */
    export type CustomFieldCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomFieldCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectRoleCountOutputTypeDefaultArgs instead
     */
    export type ProjectRoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectRoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestCaseTypeDefaultArgs instead
     */
    export type TestCaseTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestCaseTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriorityDefaultArgs instead
     */
    export type PriorityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriorityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomFieldDefaultArgs instead
     */
    export type CustomFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomFieldDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomFieldOptionDefaultArgs instead
     */
    export type CustomFieldOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomFieldOptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IdempotencyKeyDefaultArgs instead
     */
    export type IdempotencyKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IdempotencyKeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeatureFlagDefaultArgs instead
     */
    export type FeatureFlagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeatureFlagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectRoleDefaultArgs instead
     */
    export type ProjectRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectPermissionDefaultArgs instead
     */
    export type ProjectPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectPermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectUserRoleDefaultArgs instead
     */
    export type ProjectUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectUserRoleDefaultArgs<ExtArgs>

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

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
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model OrganizationMember
 * 
 */
export type OrganizationMember = $Result.DefaultSelection<Prisma.$OrganizationMemberPayload>
/**
 * Model OrgAuditLog
 * 
 */
export type OrgAuditLog = $Result.DefaultSelection<Prisma.$OrgAuditLogPayload>
/**
 * Model IdempotencyKey
 * 
 */
export type IdempotencyKey = $Result.DefaultSelection<Prisma.$IdempotencyKeyPayload>
/**
 * Model ProjectPermission
 * 
 */
export type ProjectPermission = $Result.DefaultSelection<Prisma.$ProjectPermissionPayload>
/**
 * Model ProjectRole
 * 
 */
export type ProjectRole = $Result.DefaultSelection<Prisma.$ProjectRolePayload>
/**
 * Model ProjectUserRole
 * 
 */
export type ProjectUserRole = $Result.DefaultSelection<Prisma.$ProjectUserRolePayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
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
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
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
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs>;

  /**
   * `prisma.organizationMember`: Exposes CRUD operations for the **OrganizationMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationMembers
    * const organizationMembers = await prisma.organizationMember.findMany()
    * ```
    */
  get organizationMember(): Prisma.OrganizationMemberDelegate<ExtArgs>;

  /**
   * `prisma.orgAuditLog`: Exposes CRUD operations for the **OrgAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrgAuditLogs
    * const orgAuditLogs = await prisma.orgAuditLog.findMany()
    * ```
    */
  get orgAuditLog(): Prisma.OrgAuditLogDelegate<ExtArgs>;

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
   * `prisma.projectPermission`: Exposes CRUD operations for the **ProjectPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectPermissions
    * const projectPermissions = await prisma.projectPermission.findMany()
    * ```
    */
  get projectPermission(): Prisma.ProjectPermissionDelegate<ExtArgs>;

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
   * `prisma.projectUserRole`: Exposes CRUD operations for the **ProjectUserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectUserRoles
    * const projectUserRoles = await prisma.projectUserRole.findMany()
    * ```
    */
  get projectUserRole(): Prisma.ProjectUserRoleDelegate<ExtArgs>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;
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
    Organization: 'Organization',
    OrganizationMember: 'OrganizationMember',
    OrgAuditLog: 'OrgAuditLog',
    IdempotencyKey: 'IdempotencyKey',
    ProjectPermission: 'ProjectPermission',
    ProjectRole: 'ProjectRole',
    ProjectUserRole: 'ProjectUserRole',
    RefreshToken: 'RefreshToken',
    User: 'User'
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
      modelProps: "organization" | "organizationMember" | "orgAuditLog" | "idempotencyKey" | "projectPermission" | "projectRole" | "projectUserRole" | "refreshToken" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      OrganizationMember: {
        payload: Prisma.$OrganizationMemberPayload<ExtArgs>
        fields: Prisma.OrganizationMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findFirst: {
            args: Prisma.OrganizationMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findMany: {
            args: Prisma.OrganizationMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          create: {
            args: Prisma.OrganizationMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          createMany: {
            args: Prisma.OrganizationMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          delete: {
            args: Prisma.OrganizationMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          update: {
            args: Prisma.OrganizationMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          aggregate: {
            args: Prisma.OrganizationMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationMember>
          }
          groupBy: {
            args: Prisma.OrganizationMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationMemberCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberCountAggregateOutputType> | number
          }
        }
      }
      OrgAuditLog: {
        payload: Prisma.$OrgAuditLogPayload<ExtArgs>
        fields: Prisma.OrgAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrgAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrgAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgAuditLogPayload>
          }
          findFirst: {
            args: Prisma.OrgAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrgAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgAuditLogPayload>
          }
          findMany: {
            args: Prisma.OrgAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgAuditLogPayload>[]
          }
          create: {
            args: Prisma.OrgAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgAuditLogPayload>
          }
          createMany: {
            args: Prisma.OrgAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrgAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgAuditLogPayload>[]
          }
          delete: {
            args: Prisma.OrgAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgAuditLogPayload>
          }
          update: {
            args: Prisma.OrgAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.OrgAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrgAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrgAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgAuditLogPayload>
          }
          aggregate: {
            args: Prisma.OrgAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrgAuditLog>
          }
          groupBy: {
            args: Prisma.OrgAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrgAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrgAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<OrgAuditLogCountAggregateOutputType> | number
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
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    members: number
    auditLogs: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | OrganizationCountOutputTypeCountMembersArgs
    auditLogs?: boolean | OrganizationCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgAuditLogWhereInput
  }


  /**
   * Count Type ProjectRoleCountOutputType
   */

  export type ProjectRoleCountOutputType = {
    ProjectPermission: number
    ProjectUserRole: number
  }

  export type ProjectRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectPermission?: boolean | ProjectRoleCountOutputTypeCountProjectPermissionArgs
    ProjectUserRole?: boolean | ProjectRoleCountOutputTypeCountProjectUserRoleArgs
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
  export type ProjectRoleCountOutputTypeCountProjectPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPermissionWhereInput
  }

  /**
   * ProjectRoleCountOutputType without action
   */
  export type ProjectRoleCountOutputTypeCountProjectUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectUserRoleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ProjectUserRole: number
    RefreshToken: number
    OrganizationMember: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectUserRole?: boolean | UserCountOutputTypeCountProjectUserRoleArgs
    RefreshToken?: boolean | UserCountOutputTypeCountRefreshTokenArgs
    OrganizationMember?: boolean | UserCountOutputTypeCountOrganizationMemberArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectUserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
    version: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
    version: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    plan: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    plan: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    plan: number
    version: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
    version?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
    version?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    name: string
    slug: string
    plan: string
    version: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    members?: boolean | Organization$membersArgs<ExtArgs>
    auditLogs?: boolean | Organization$auditLogsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Organization$membersArgs<ExtArgs>
    auditLogs?: boolean | Organization$auditLogsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      members: Prisma.$OrganizationMemberPayload<ExtArgs>[]
      auditLogs: Prisma.$OrgAuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      plan: string
      version: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Organization$membersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends Organization$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgAuditLogPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Organization model
   */ 
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'Int'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly slug: FieldRef<"Organization", 'String'>
    readonly plan: FieldRef<"Organization", 'String'>
    readonly version: FieldRef<"Organization", 'Int'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
    readonly deletedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization.members
   */
  export type Organization$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * Organization.auditLogs
   */
  export type Organization$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgAuditLog
     */
    select?: OrgAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgAuditLogInclude<ExtArgs> | null
    where?: OrgAuditLogWhereInput
    orderBy?: OrgAuditLogOrderByWithRelationInput | OrgAuditLogOrderByWithRelationInput[]
    cursor?: OrgAuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrgAuditLogScalarFieldEnum | OrgAuditLogScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationMember
   */

  export type AggregateOrganizationMember = {
    _count: OrganizationMemberCountAggregateOutputType | null
    _avg: OrganizationMemberAvgAggregateOutputType | null
    _sum: OrganizationMemberSumAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  export type OrganizationMemberAvgAggregateOutputType = {
    id: number | null
    orgId: number | null
    userId: number | null
  }

  export type OrganizationMemberSumAggregateOutputType = {
    id: number | null
    orgId: number | null
    userId: number | null
  }

  export type OrganizationMemberMinAggregateOutputType = {
    id: number | null
    orgId: number | null
    userId: number | null
    role: string | null
    invitedAt: Date | null
    acceptedAt: Date | null
  }

  export type OrganizationMemberMaxAggregateOutputType = {
    id: number | null
    orgId: number | null
    userId: number | null
    role: string | null
    invitedAt: Date | null
    acceptedAt: Date | null
  }

  export type OrganizationMemberCountAggregateOutputType = {
    id: number
    orgId: number
    userId: number
    role: number
    invitedAt: number
    acceptedAt: number
    _all: number
  }


  export type OrganizationMemberAvgAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
  }

  export type OrganizationMemberSumAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
  }

  export type OrganizationMemberMinAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    role?: true
    invitedAt?: true
    acceptedAt?: true
  }

  export type OrganizationMemberMaxAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    role?: true
    invitedAt?: true
    acceptedAt?: true
  }

  export type OrganizationMemberCountAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    role?: true
    invitedAt?: true
    acceptedAt?: true
    _all?: true
  }

  export type OrganizationMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMember to aggregate.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationMembers
    **/
    _count?: true | OrganizationMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type GetOrganizationMemberAggregateType<T extends OrganizationMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationMember[P]>
      : GetScalarType<T[P], AggregateOrganizationMember[P]>
  }




  export type OrganizationMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithAggregationInput | OrganizationMemberOrderByWithAggregationInput[]
    by: OrganizationMemberScalarFieldEnum[] | OrganizationMemberScalarFieldEnum
    having?: OrganizationMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationMemberCountAggregateInputType | true
    _avg?: OrganizationMemberAvgAggregateInputType
    _sum?: OrganizationMemberSumAggregateInputType
    _min?: OrganizationMemberMinAggregateInputType
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type OrganizationMemberGroupByOutputType = {
    id: number
    orgId: number
    userId: number
    role: string
    invitedAt: Date
    acceptedAt: Date | null
    _count: OrganizationMemberCountAggregateOutputType | null
    _avg: OrganizationMemberAvgAggregateOutputType | null
    _sum: OrganizationMemberSumAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  type GetOrganizationMemberGroupByPayload<T extends OrganizationMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    role?: boolean
    invitedAt?: boolean
    acceptedAt?: boolean
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    role?: boolean
    invitedAt?: boolean
    acceptedAt?: boolean
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectScalar = {
    id?: boolean
    orgId?: boolean
    userId?: boolean
    role?: boolean
    invitedAt?: boolean
    acceptedAt?: boolean
  }

  export type OrganizationMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrganizationMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationMember"
    objects: {
      Organization: Prisma.$OrganizationPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orgId: number
      userId: number
      role: string
      invitedAt: Date
      acceptedAt: Date | null
    }, ExtArgs["result"]["organizationMember"]>
    composites: {}
  }

  type OrganizationMemberGetPayload<S extends boolean | null | undefined | OrganizationMemberDefaultArgs> = $Result.GetResult<Prisma.$OrganizationMemberPayload, S>

  type OrganizationMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizationMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizationMemberCountAggregateInputType | true
    }

  export interface OrganizationMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationMember'], meta: { name: 'OrganizationMember' } }
    /**
     * Find zero or one OrganizationMember that matches the filter.
     * @param {OrganizationMemberFindUniqueArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationMemberFindUniqueArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrganizationMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganizationMemberFindUniqueOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrganizationMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationMemberFindFirstArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrganizationMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrganizationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany()
     * 
     * // Get first 10 OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationMemberFindManyArgs>(args?: SelectSubset<T, OrganizationMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrganizationMember.
     * @param {OrganizationMemberCreateArgs} args - Arguments to create a OrganizationMember.
     * @example
     * // Create one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.create({
     *   data: {
     *     // ... data to create a OrganizationMember
     *   }
     * })
     * 
     */
    create<T extends OrganizationMemberCreateArgs>(args: SelectSubset<T, OrganizationMemberCreateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrganizationMembers.
     * @param {OrganizationMemberCreateManyArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationMemberCreateManyArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationMembers and returns the data saved in the database.
     * @param {OrganizationMemberCreateManyAndReturnArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationMembers and only return the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrganizationMember.
     * @param {OrganizationMemberDeleteArgs} args - Arguments to delete one OrganizationMember.
     * @example
     * // Delete one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.delete({
     *   where: {
     *     // ... filter to delete one OrganizationMember
     *   }
     * })
     * 
     */
    delete<T extends OrganizationMemberDeleteArgs>(args: SelectSubset<T, OrganizationMemberDeleteArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrganizationMember.
     * @param {OrganizationMemberUpdateArgs} args - Arguments to update one OrganizationMember.
     * @example
     * // Update one OrganizationMember
     * const organizationMember = await prisma.organizationMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationMemberUpdateArgs>(args: SelectSubset<T, OrganizationMemberUpdateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrganizationMembers.
     * @param {OrganizationMemberDeleteManyArgs} args - Arguments to filter OrganizationMembers to delete.
     * @example
     * // Delete a few OrganizationMembers
     * const { count } = await prisma.organizationMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationMemberDeleteManyArgs>(args?: SelectSubset<T, OrganizationMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationMemberUpdateManyArgs>(args: SelectSubset<T, OrganizationMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrganizationMember.
     * @param {OrganizationMemberUpsertArgs} args - Arguments to update or create a OrganizationMember.
     * @example
     * // Update or create a OrganizationMember
     * const organizationMember = await prisma.organizationMember.upsert({
     *   create: {
     *     // ... data to create a OrganizationMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationMember we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationMemberUpsertArgs>(args: SelectSubset<T, OrganizationMemberUpsertArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberCountArgs} args - Arguments to filter OrganizationMembers to count.
     * @example
     * // Count the number of OrganizationMembers
     * const count = await prisma.organizationMember.count({
     *   where: {
     *     // ... the filter for the OrganizationMembers we want to count
     *   }
     * })
    **/
    count<T extends OrganizationMemberCountArgs>(
      args?: Subset<T, OrganizationMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationMemberAggregateArgs>(args: Subset<T, OrganizationMemberAggregateArgs>): Prisma.PrismaPromise<GetOrganizationMemberAggregateType<T>>

    /**
     * Group by OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberGroupByArgs} args - Group by arguments.
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
      T extends OrganizationMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationMemberGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationMember model
   */
  readonly fields: OrganizationMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OrganizationMember model
   */ 
  interface OrganizationMemberFieldRefs {
    readonly id: FieldRef<"OrganizationMember", 'Int'>
    readonly orgId: FieldRef<"OrganizationMember", 'Int'>
    readonly userId: FieldRef<"OrganizationMember", 'Int'>
    readonly role: FieldRef<"OrganizationMember", 'String'>
    readonly invitedAt: FieldRef<"OrganizationMember", 'DateTime'>
    readonly acceptedAt: FieldRef<"OrganizationMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationMember findUnique
   */
  export type OrganizationMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findUniqueOrThrow
   */
  export type OrganizationMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findFirst
   */
  export type OrganizationMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findFirstOrThrow
   */
  export type OrganizationMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findMany
   */
  export type OrganizationMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembers to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember create
   */
  export type OrganizationMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationMember.
     */
    data: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
  }

  /**
   * OrganizationMember createMany
   */
  export type OrganizationMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
  }

  /**
   * OrganizationMember createManyAndReturn
   */
  export type OrganizationMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMember update
   */
  export type OrganizationMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationMember.
     */
    data: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
    /**
     * Choose, which OrganizationMember to update.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember updateMany
   */
  export type OrganizationMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMemberWhereInput
  }

  /**
   * OrganizationMember upsert
   */
  export type OrganizationMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationMember to update in case it exists.
     */
    where: OrganizationMemberWhereUniqueInput
    /**
     * In case the OrganizationMember found by the `where` argument doesn't exist, create a new OrganizationMember with this data.
     */
    create: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
    /**
     * In case the OrganizationMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
  }

  /**
   * OrganizationMember delete
   */
  export type OrganizationMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter which OrganizationMember to delete.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember deleteMany
   */
  export type OrganizationMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMembers to delete
     */
    where?: OrganizationMemberWhereInput
  }

  /**
   * OrganizationMember without action
   */
  export type OrganizationMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
  }


  /**
   * Model OrgAuditLog
   */

  export type AggregateOrgAuditLog = {
    _count: OrgAuditLogCountAggregateOutputType | null
    _avg: OrgAuditLogAvgAggregateOutputType | null
    _sum: OrgAuditLogSumAggregateOutputType | null
    _min: OrgAuditLogMinAggregateOutputType | null
    _max: OrgAuditLogMaxAggregateOutputType | null
  }

  export type OrgAuditLogAvgAggregateOutputType = {
    id: number | null
    orgId: number | null
    actorId: number | null
  }

  export type OrgAuditLogSumAggregateOutputType = {
    id: number | null
    orgId: number | null
    actorId: number | null
  }

  export type OrgAuditLogMinAggregateOutputType = {
    id: number | null
    orgId: number | null
    actorId: number | null
    action: string | null
    targetType: string | null
    targetId: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type OrgAuditLogMaxAggregateOutputType = {
    id: number | null
    orgId: number | null
    actorId: number | null
    action: string | null
    targetType: string | null
    targetId: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type OrgAuditLogCountAggregateOutputType = {
    id: number
    orgId: number
    actorId: number
    action: number
    targetType: number
    targetId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type OrgAuditLogAvgAggregateInputType = {
    id?: true
    orgId?: true
    actorId?: true
  }

  export type OrgAuditLogSumAggregateInputType = {
    id?: true
    orgId?: true
    actorId?: true
  }

  export type OrgAuditLogMinAggregateInputType = {
    id?: true
    orgId?: true
    actorId?: true
    action?: true
    targetType?: true
    targetId?: true
    metadata?: true
    createdAt?: true
  }

  export type OrgAuditLogMaxAggregateInputType = {
    id?: true
    orgId?: true
    actorId?: true
    action?: true
    targetType?: true
    targetId?: true
    metadata?: true
    createdAt?: true
  }

  export type OrgAuditLogCountAggregateInputType = {
    id?: true
    orgId?: true
    actorId?: true
    action?: true
    targetType?: true
    targetId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type OrgAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrgAuditLog to aggregate.
     */
    where?: OrgAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgAuditLogs to fetch.
     */
    orderBy?: OrgAuditLogOrderByWithRelationInput | OrgAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrgAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrgAuditLogs
    **/
    _count?: true | OrgAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrgAuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrgAuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrgAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrgAuditLogMaxAggregateInputType
  }

  export type GetOrgAuditLogAggregateType<T extends OrgAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateOrgAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrgAuditLog[P]>
      : GetScalarType<T[P], AggregateOrgAuditLog[P]>
  }




  export type OrgAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgAuditLogWhereInput
    orderBy?: OrgAuditLogOrderByWithAggregationInput | OrgAuditLogOrderByWithAggregationInput[]
    by: OrgAuditLogScalarFieldEnum[] | OrgAuditLogScalarFieldEnum
    having?: OrgAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrgAuditLogCountAggregateInputType | true
    _avg?: OrgAuditLogAvgAggregateInputType
    _sum?: OrgAuditLogSumAggregateInputType
    _min?: OrgAuditLogMinAggregateInputType
    _max?: OrgAuditLogMaxAggregateInputType
  }

  export type OrgAuditLogGroupByOutputType = {
    id: number
    orgId: number
    actorId: number | null
    action: string
    targetType: string | null
    targetId: string | null
    metadata: string | null
    createdAt: Date
    _count: OrgAuditLogCountAggregateOutputType | null
    _avg: OrgAuditLogAvgAggregateOutputType | null
    _sum: OrgAuditLogSumAggregateOutputType | null
    _min: OrgAuditLogMinAggregateOutputType | null
    _max: OrgAuditLogMaxAggregateOutputType | null
  }

  type GetOrgAuditLogGroupByPayload<T extends OrgAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrgAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrgAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrgAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], OrgAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type OrgAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    actorId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    metadata?: boolean
    createdAt?: boolean
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgAuditLog"]>

  export type OrgAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    actorId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    metadata?: boolean
    createdAt?: boolean
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgAuditLog"]>

  export type OrgAuditLogSelectScalar = {
    id?: boolean
    orgId?: boolean
    actorId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type OrgAuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrgAuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OrgAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrgAuditLog"
    objects: {
      Organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orgId: number
      actorId: number | null
      action: string
      targetType: string | null
      targetId: string | null
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["orgAuditLog"]>
    composites: {}
  }

  type OrgAuditLogGetPayload<S extends boolean | null | undefined | OrgAuditLogDefaultArgs> = $Result.GetResult<Prisma.$OrgAuditLogPayload, S>

  type OrgAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrgAuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrgAuditLogCountAggregateInputType | true
    }

  export interface OrgAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrgAuditLog'], meta: { name: 'OrgAuditLog' } }
    /**
     * Find zero or one OrgAuditLog that matches the filter.
     * @param {OrgAuditLogFindUniqueArgs} args - Arguments to find a OrgAuditLog
     * @example
     * // Get one OrgAuditLog
     * const orgAuditLog = await prisma.orgAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrgAuditLogFindUniqueArgs>(args: SelectSubset<T, OrgAuditLogFindUniqueArgs<ExtArgs>>): Prisma__OrgAuditLogClient<$Result.GetResult<Prisma.$OrgAuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrgAuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrgAuditLogFindUniqueOrThrowArgs} args - Arguments to find a OrgAuditLog
     * @example
     * // Get one OrgAuditLog
     * const orgAuditLog = await prisma.orgAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrgAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, OrgAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrgAuditLogClient<$Result.GetResult<Prisma.$OrgAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrgAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgAuditLogFindFirstArgs} args - Arguments to find a OrgAuditLog
     * @example
     * // Get one OrgAuditLog
     * const orgAuditLog = await prisma.orgAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrgAuditLogFindFirstArgs>(args?: SelectSubset<T, OrgAuditLogFindFirstArgs<ExtArgs>>): Prisma__OrgAuditLogClient<$Result.GetResult<Prisma.$OrgAuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrgAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgAuditLogFindFirstOrThrowArgs} args - Arguments to find a OrgAuditLog
     * @example
     * // Get one OrgAuditLog
     * const orgAuditLog = await prisma.orgAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrgAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, OrgAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrgAuditLogClient<$Result.GetResult<Prisma.$OrgAuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrgAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrgAuditLogs
     * const orgAuditLogs = await prisma.orgAuditLog.findMany()
     * 
     * // Get first 10 OrgAuditLogs
     * const orgAuditLogs = await prisma.orgAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orgAuditLogWithIdOnly = await prisma.orgAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrgAuditLogFindManyArgs>(args?: SelectSubset<T, OrgAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgAuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrgAuditLog.
     * @param {OrgAuditLogCreateArgs} args - Arguments to create a OrgAuditLog.
     * @example
     * // Create one OrgAuditLog
     * const OrgAuditLog = await prisma.orgAuditLog.create({
     *   data: {
     *     // ... data to create a OrgAuditLog
     *   }
     * })
     * 
     */
    create<T extends OrgAuditLogCreateArgs>(args: SelectSubset<T, OrgAuditLogCreateArgs<ExtArgs>>): Prisma__OrgAuditLogClient<$Result.GetResult<Prisma.$OrgAuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrgAuditLogs.
     * @param {OrgAuditLogCreateManyArgs} args - Arguments to create many OrgAuditLogs.
     * @example
     * // Create many OrgAuditLogs
     * const orgAuditLog = await prisma.orgAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrgAuditLogCreateManyArgs>(args?: SelectSubset<T, OrgAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrgAuditLogs and returns the data saved in the database.
     * @param {OrgAuditLogCreateManyAndReturnArgs} args - Arguments to create many OrgAuditLogs.
     * @example
     * // Create many OrgAuditLogs
     * const orgAuditLog = await prisma.orgAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrgAuditLogs and only return the `id`
     * const orgAuditLogWithIdOnly = await prisma.orgAuditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrgAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, OrgAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgAuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrgAuditLog.
     * @param {OrgAuditLogDeleteArgs} args - Arguments to delete one OrgAuditLog.
     * @example
     * // Delete one OrgAuditLog
     * const OrgAuditLog = await prisma.orgAuditLog.delete({
     *   where: {
     *     // ... filter to delete one OrgAuditLog
     *   }
     * })
     * 
     */
    delete<T extends OrgAuditLogDeleteArgs>(args: SelectSubset<T, OrgAuditLogDeleteArgs<ExtArgs>>): Prisma__OrgAuditLogClient<$Result.GetResult<Prisma.$OrgAuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrgAuditLog.
     * @param {OrgAuditLogUpdateArgs} args - Arguments to update one OrgAuditLog.
     * @example
     * // Update one OrgAuditLog
     * const orgAuditLog = await prisma.orgAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrgAuditLogUpdateArgs>(args: SelectSubset<T, OrgAuditLogUpdateArgs<ExtArgs>>): Prisma__OrgAuditLogClient<$Result.GetResult<Prisma.$OrgAuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrgAuditLogs.
     * @param {OrgAuditLogDeleteManyArgs} args - Arguments to filter OrgAuditLogs to delete.
     * @example
     * // Delete a few OrgAuditLogs
     * const { count } = await prisma.orgAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrgAuditLogDeleteManyArgs>(args?: SelectSubset<T, OrgAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrgAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrgAuditLogs
     * const orgAuditLog = await prisma.orgAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrgAuditLogUpdateManyArgs>(args: SelectSubset<T, OrgAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrgAuditLog.
     * @param {OrgAuditLogUpsertArgs} args - Arguments to update or create a OrgAuditLog.
     * @example
     * // Update or create a OrgAuditLog
     * const orgAuditLog = await prisma.orgAuditLog.upsert({
     *   create: {
     *     // ... data to create a OrgAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrgAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends OrgAuditLogUpsertArgs>(args: SelectSubset<T, OrgAuditLogUpsertArgs<ExtArgs>>): Prisma__OrgAuditLogClient<$Result.GetResult<Prisma.$OrgAuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrgAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgAuditLogCountArgs} args - Arguments to filter OrgAuditLogs to count.
     * @example
     * // Count the number of OrgAuditLogs
     * const count = await prisma.orgAuditLog.count({
     *   where: {
     *     // ... the filter for the OrgAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends OrgAuditLogCountArgs>(
      args?: Subset<T, OrgAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrgAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrgAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrgAuditLogAggregateArgs>(args: Subset<T, OrgAuditLogAggregateArgs>): Prisma.PrismaPromise<GetOrgAuditLogAggregateType<T>>

    /**
     * Group by OrgAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgAuditLogGroupByArgs} args - Group by arguments.
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
      T extends OrgAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrgAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: OrgAuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrgAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrgAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrgAuditLog model
   */
  readonly fields: OrgAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrgAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrgAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OrgAuditLog model
   */ 
  interface OrgAuditLogFieldRefs {
    readonly id: FieldRef<"OrgAuditLog", 'Int'>
    readonly orgId: FieldRef<"OrgAuditLog", 'Int'>
    readonly actorId: FieldRef<"OrgAuditLog", 'Int'>
    readonly action: FieldRef<"OrgAuditLog", 'String'>
    readonly targetType: FieldRef<"OrgAuditLog", 'String'>
    readonly targetId: FieldRef<"OrgAuditLog", 'String'>
    readonly metadata: FieldRef<"OrgAuditLog", 'String'>
    readonly createdAt: FieldRef<"OrgAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrgAuditLog findUnique
   */
  export type OrgAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgAuditLog
     */
    select?: OrgAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which OrgAuditLog to fetch.
     */
    where: OrgAuditLogWhereUniqueInput
  }

  /**
   * OrgAuditLog findUniqueOrThrow
   */
  export type OrgAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgAuditLog
     */
    select?: OrgAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which OrgAuditLog to fetch.
     */
    where: OrgAuditLogWhereUniqueInput
  }

  /**
   * OrgAuditLog findFirst
   */
  export type OrgAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgAuditLog
     */
    select?: OrgAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which OrgAuditLog to fetch.
     */
    where?: OrgAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgAuditLogs to fetch.
     */
    orderBy?: OrgAuditLogOrderByWithRelationInput | OrgAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrgAuditLogs.
     */
    cursor?: OrgAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrgAuditLogs.
     */
    distinct?: OrgAuditLogScalarFieldEnum | OrgAuditLogScalarFieldEnum[]
  }

  /**
   * OrgAuditLog findFirstOrThrow
   */
  export type OrgAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgAuditLog
     */
    select?: OrgAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which OrgAuditLog to fetch.
     */
    where?: OrgAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgAuditLogs to fetch.
     */
    orderBy?: OrgAuditLogOrderByWithRelationInput | OrgAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrgAuditLogs.
     */
    cursor?: OrgAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrgAuditLogs.
     */
    distinct?: OrgAuditLogScalarFieldEnum | OrgAuditLogScalarFieldEnum[]
  }

  /**
   * OrgAuditLog findMany
   */
  export type OrgAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgAuditLog
     */
    select?: OrgAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which OrgAuditLogs to fetch.
     */
    where?: OrgAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgAuditLogs to fetch.
     */
    orderBy?: OrgAuditLogOrderByWithRelationInput | OrgAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrgAuditLogs.
     */
    cursor?: OrgAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgAuditLogs.
     */
    skip?: number
    distinct?: OrgAuditLogScalarFieldEnum | OrgAuditLogScalarFieldEnum[]
  }

  /**
   * OrgAuditLog create
   */
  export type OrgAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgAuditLog
     */
    select?: OrgAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a OrgAuditLog.
     */
    data: XOR<OrgAuditLogCreateInput, OrgAuditLogUncheckedCreateInput>
  }

  /**
   * OrgAuditLog createMany
   */
  export type OrgAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrgAuditLogs.
     */
    data: OrgAuditLogCreateManyInput | OrgAuditLogCreateManyInput[]
  }

  /**
   * OrgAuditLog createManyAndReturn
   */
  export type OrgAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgAuditLog
     */
    select?: OrgAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrgAuditLogs.
     */
    data: OrgAuditLogCreateManyInput | OrgAuditLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgAuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrgAuditLog update
   */
  export type OrgAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgAuditLog
     */
    select?: OrgAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a OrgAuditLog.
     */
    data: XOR<OrgAuditLogUpdateInput, OrgAuditLogUncheckedUpdateInput>
    /**
     * Choose, which OrgAuditLog to update.
     */
    where: OrgAuditLogWhereUniqueInput
  }

  /**
   * OrgAuditLog updateMany
   */
  export type OrgAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrgAuditLogs.
     */
    data: XOR<OrgAuditLogUpdateManyMutationInput, OrgAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which OrgAuditLogs to update
     */
    where?: OrgAuditLogWhereInput
  }

  /**
   * OrgAuditLog upsert
   */
  export type OrgAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgAuditLog
     */
    select?: OrgAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgAuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the OrgAuditLog to update in case it exists.
     */
    where: OrgAuditLogWhereUniqueInput
    /**
     * In case the OrgAuditLog found by the `where` argument doesn't exist, create a new OrgAuditLog with this data.
     */
    create: XOR<OrgAuditLogCreateInput, OrgAuditLogUncheckedCreateInput>
    /**
     * In case the OrgAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrgAuditLogUpdateInput, OrgAuditLogUncheckedUpdateInput>
  }

  /**
   * OrgAuditLog delete
   */
  export type OrgAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgAuditLog
     */
    select?: OrgAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgAuditLogInclude<ExtArgs> | null
    /**
     * Filter which OrgAuditLog to delete.
     */
    where: OrgAuditLogWhereUniqueInput
  }

  /**
   * OrgAuditLog deleteMany
   */
  export type OrgAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrgAuditLogs to delete
     */
    where?: OrgAuditLogWhereInput
  }

  /**
   * OrgAuditLog without action
   */
  export type OrgAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgAuditLog
     */
    select?: OrgAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgAuditLogInclude<ExtArgs> | null
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
  }

  export type ProjectPermissionMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    roleId: number | null
    action: string | null
  }

  export type ProjectPermissionCountAggregateOutputType = {
    id: number
    projectId: number
    roleId: number
    action: number
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
  }

  export type ProjectPermissionMaxAggregateInputType = {
    id?: true
    projectId?: true
    roleId?: true
    action?: true
  }

  export type ProjectPermissionCountAggregateInputType = {
    id?: true
    projectId?: true
    roleId?: true
    action?: true
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
    ProjectRole?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPermission"]>

  export type ProjectPermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    roleId?: boolean
    action?: boolean
    ProjectRole?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPermission"]>

  export type ProjectPermissionSelectScalar = {
    id?: boolean
    projectId?: boolean
    roleId?: boolean
    action?: boolean
  }

  export type ProjectPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectRole?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }
  export type ProjectPermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectRole?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }

  export type $ProjectPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectPermission"
    objects: {
      ProjectRole: Prisma.$ProjectRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      roleId: number
      action: string
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
    ProjectRole<T extends ProjectRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectRoleDefaultArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    ProjectPermission?: boolean | ProjectRole$ProjectPermissionArgs<ExtArgs>
    ProjectUserRole?: boolean | ProjectRole$ProjectUserRoleArgs<ExtArgs>
    _count?: boolean | ProjectRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectRole"]>

  export type ProjectRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["projectRole"]>

  export type ProjectRoleSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type ProjectRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectPermission?: boolean | ProjectRole$ProjectPermissionArgs<ExtArgs>
    ProjectUserRole?: boolean | ProjectRole$ProjectUserRoleArgs<ExtArgs>
    _count?: boolean | ProjectRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectRole"
    objects: {
      ProjectPermission: Prisma.$ProjectPermissionPayload<ExtArgs>[]
      ProjectUserRole: Prisma.$ProjectUserRolePayload<ExtArgs>[]
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
    ProjectPermission<T extends ProjectRole$ProjectPermissionArgs<ExtArgs> = {}>(args?: Subset<T, ProjectRole$ProjectPermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPermissionPayload<ExtArgs>, T, "findMany"> | Null>
    ProjectUserRole<T extends ProjectRole$ProjectUserRoleArgs<ExtArgs> = {}>(args?: Subset<T, ProjectRole$ProjectUserRoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "findMany"> | Null>
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
   * ProjectRole.ProjectPermission
   */
  export type ProjectRole$ProjectPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProjectRole.ProjectUserRole
   */
  export type ProjectRole$ProjectUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    User?: boolean | UserDefaultArgs<ExtArgs>
    ProjectRole?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectUserRole"]>

  export type ProjectUserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    roleId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    ProjectRole?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectUserRole"]>

  export type ProjectUserRoleSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    roleId?: boolean
  }

  export type ProjectUserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    ProjectRole?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }
  export type ProjectUserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    ProjectRole?: boolean | ProjectRoleDefaultArgs<ExtArgs>
  }

  export type $ProjectUserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectUserRole"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      ProjectRole: Prisma.$ProjectRolePayload<ExtArgs>
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
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ProjectRole<T extends ProjectRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectRoleDefaultArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    hash: string | null
    revoked: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    hash: string | null
    revoked: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    userId: number
    hash: number
    revoked: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    id?: true
    userId?: true
    hash?: true
    revoked?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    hash?: true
    revoked?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    userId?: true
    hash?: true
    revoked?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: number
    userId: number
    hash: string
    revoked: boolean
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hash?: boolean
    revoked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hash?: boolean
    revoked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    hash?: boolean
    revoked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      hash: string
      revoked: boolean
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the RefreshToken model
   */ 
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'Int'>
    readonly userId: FieldRef<"RefreshToken", 'Int'>
    readonly hash: FieldRef<"RefreshToken", 'String'>
    readonly revoked: FieldRef<"RefreshToken", 'Boolean'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: string | null
    systemPermissions: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: string | null
    systemPermissions: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    systemPermissions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    systemPermissions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    systemPermissions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    systemPermissions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    role: string
    systemPermissions: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    systemPermissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ProjectUserRole?: boolean | User$ProjectUserRoleArgs<ExtArgs>
    RefreshToken?: boolean | User$RefreshTokenArgs<ExtArgs>
    OrganizationMember?: boolean | User$OrganizationMemberArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    systemPermissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    systemPermissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectUserRole?: boolean | User$ProjectUserRoleArgs<ExtArgs>
    RefreshToken?: boolean | User$RefreshTokenArgs<ExtArgs>
    OrganizationMember?: boolean | User$OrganizationMemberArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ProjectUserRole: Prisma.$ProjectUserRolePayload<ExtArgs>[]
      RefreshToken: Prisma.$RefreshTokenPayload<ExtArgs>[]
      OrganizationMember: Prisma.$OrganizationMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      firstName: string | null
      lastName: string | null
      role: string
      systemPermissions: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProjectUserRole<T extends User$ProjectUserRoleArgs<ExtArgs> = {}>(args?: Subset<T, User$ProjectUserRoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUserRolePayload<ExtArgs>, T, "findMany"> | Null>
    RefreshToken<T extends User$RefreshTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$RefreshTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany"> | Null>
    OrganizationMember<T extends User$OrganizationMemberArgs<ExtArgs> = {}>(args?: Subset<T, User$OrganizationMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly systemPermissions: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.ProjectUserRole
   */
  export type User$ProjectUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.RefreshToken
   */
  export type User$RefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.OrganizationMember
   */
  export type User$OrganizationMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    plan: 'plan',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OrganizationMemberScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    userId: 'userId',
    role: 'role',
    invitedAt: 'invitedAt',
    acceptedAt: 'acceptedAt'
  };

  export type OrganizationMemberScalarFieldEnum = (typeof OrganizationMemberScalarFieldEnum)[keyof typeof OrganizationMemberScalarFieldEnum]


  export const OrgAuditLogScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    actorId: 'actorId',
    action: 'action',
    targetType: 'targetType',
    targetId: 'targetId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type OrgAuditLogScalarFieldEnum = (typeof OrgAuditLogScalarFieldEnum)[keyof typeof OrgAuditLogScalarFieldEnum]


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


  export const ProjectPermissionScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    roleId: 'roleId',
    action: 'action'
  };

  export type ProjectPermissionScalarFieldEnum = (typeof ProjectPermissionScalarFieldEnum)[keyof typeof ProjectPermissionScalarFieldEnum]


  export const ProjectRoleScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type ProjectRoleScalarFieldEnum = (typeof ProjectRoleScalarFieldEnum)[keyof typeof ProjectRoleScalarFieldEnum]


  export const ProjectUserRoleScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    roleId: 'roleId'
  };

  export type ProjectUserRoleScalarFieldEnum = (typeof ProjectUserRoleScalarFieldEnum)[keyof typeof ProjectUserRoleScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    hash: 'hash',
    revoked: 'revoked',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    systemPermissions: 'systemPermissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    slug?: StringFilter<"Organization"> | string
    plan?: StringFilter<"Organization"> | string
    version?: IntFilter<"Organization"> | number
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    members?: OrganizationMemberListRelationFilter
    auditLogs?: OrgAuditLogListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    members?: OrganizationMemberOrderByRelationAggregateInput
    auditLogs?: OrgAuditLogOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    plan?: StringFilter<"Organization"> | string
    version?: IntFilter<"Organization"> | number
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    members?: OrganizationMemberListRelationFilter
    auditLogs?: OrgAuditLogListRelationFilter
  }, "id" | "slug">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organization"> | number
    name?: StringWithAggregatesFilter<"Organization"> | string
    slug?: StringWithAggregatesFilter<"Organization"> | string
    plan?: StringWithAggregatesFilter<"Organization"> | string
    version?: IntWithAggregatesFilter<"Organization"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Organization"> | Date | string | null
  }

  export type OrganizationMemberWhereInput = {
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    id?: IntFilter<"OrganizationMember"> | number
    orgId?: IntFilter<"OrganizationMember"> | number
    userId?: IntFilter<"OrganizationMember"> | number
    role?: StringFilter<"OrganizationMember"> | string
    invitedAt?: DateTimeFilter<"OrganizationMember"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"OrganizationMember"> | Date | string | null
    Organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OrganizationMemberOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    invitedAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    Organization?: OrganizationOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type OrganizationMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orgId_userId?: OrganizationMemberOrgIdUserIdCompoundUniqueInput
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    orgId?: IntFilter<"OrganizationMember"> | number
    userId?: IntFilter<"OrganizationMember"> | number
    role?: StringFilter<"OrganizationMember"> | string
    invitedAt?: DateTimeFilter<"OrganizationMember"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"OrganizationMember"> | Date | string | null
    Organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "orgId_userId">

  export type OrganizationMemberOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    invitedAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    _count?: OrganizationMemberCountOrderByAggregateInput
    _avg?: OrganizationMemberAvgOrderByAggregateInput
    _max?: OrganizationMemberMaxOrderByAggregateInput
    _min?: OrganizationMemberMinOrderByAggregateInput
    _sum?: OrganizationMemberSumOrderByAggregateInput
  }

  export type OrganizationMemberScalarWhereWithAggregatesInput = {
    AND?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    OR?: OrganizationMemberScalarWhereWithAggregatesInput[]
    NOT?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrganizationMember"> | number
    orgId?: IntWithAggregatesFilter<"OrganizationMember"> | number
    userId?: IntWithAggregatesFilter<"OrganizationMember"> | number
    role?: StringWithAggregatesFilter<"OrganizationMember"> | string
    invitedAt?: DateTimeWithAggregatesFilter<"OrganizationMember"> | Date | string
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"OrganizationMember"> | Date | string | null
  }

  export type OrgAuditLogWhereInput = {
    AND?: OrgAuditLogWhereInput | OrgAuditLogWhereInput[]
    OR?: OrgAuditLogWhereInput[]
    NOT?: OrgAuditLogWhereInput | OrgAuditLogWhereInput[]
    id?: IntFilter<"OrgAuditLog"> | number
    orgId?: IntFilter<"OrgAuditLog"> | number
    actorId?: IntNullableFilter<"OrgAuditLog"> | number | null
    action?: StringFilter<"OrgAuditLog"> | string
    targetType?: StringNullableFilter<"OrgAuditLog"> | string | null
    targetId?: StringNullableFilter<"OrgAuditLog"> | string | null
    metadata?: StringNullableFilter<"OrgAuditLog"> | string | null
    createdAt?: DateTimeFilter<"OrgAuditLog"> | Date | string
    Organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }

  export type OrgAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    actorId?: SortOrderInput | SortOrder
    action?: SortOrder
    targetType?: SortOrderInput | SortOrder
    targetId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    Organization?: OrganizationOrderByWithRelationInput
  }

  export type OrgAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrgAuditLogWhereInput | OrgAuditLogWhereInput[]
    OR?: OrgAuditLogWhereInput[]
    NOT?: OrgAuditLogWhereInput | OrgAuditLogWhereInput[]
    orgId?: IntFilter<"OrgAuditLog"> | number
    actorId?: IntNullableFilter<"OrgAuditLog"> | number | null
    action?: StringFilter<"OrgAuditLog"> | string
    targetType?: StringNullableFilter<"OrgAuditLog"> | string | null
    targetId?: StringNullableFilter<"OrgAuditLog"> | string | null
    metadata?: StringNullableFilter<"OrgAuditLog"> | string | null
    createdAt?: DateTimeFilter<"OrgAuditLog"> | Date | string
    Organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }, "id">

  export type OrgAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    actorId?: SortOrderInput | SortOrder
    action?: SortOrder
    targetType?: SortOrderInput | SortOrder
    targetId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrgAuditLogCountOrderByAggregateInput
    _avg?: OrgAuditLogAvgOrderByAggregateInput
    _max?: OrgAuditLogMaxOrderByAggregateInput
    _min?: OrgAuditLogMinOrderByAggregateInput
    _sum?: OrgAuditLogSumOrderByAggregateInput
  }

  export type OrgAuditLogScalarWhereWithAggregatesInput = {
    AND?: OrgAuditLogScalarWhereWithAggregatesInput | OrgAuditLogScalarWhereWithAggregatesInput[]
    OR?: OrgAuditLogScalarWhereWithAggregatesInput[]
    NOT?: OrgAuditLogScalarWhereWithAggregatesInput | OrgAuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrgAuditLog"> | number
    orgId?: IntWithAggregatesFilter<"OrgAuditLog"> | number
    actorId?: IntNullableWithAggregatesFilter<"OrgAuditLog"> | number | null
    action?: StringWithAggregatesFilter<"OrgAuditLog"> | string
    targetType?: StringNullableWithAggregatesFilter<"OrgAuditLog"> | string | null
    targetId?: StringNullableWithAggregatesFilter<"OrgAuditLog"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"OrgAuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OrgAuditLog"> | Date | string
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

  export type ProjectPermissionWhereInput = {
    AND?: ProjectPermissionWhereInput | ProjectPermissionWhereInput[]
    OR?: ProjectPermissionWhereInput[]
    NOT?: ProjectPermissionWhereInput | ProjectPermissionWhereInput[]
    id?: IntFilter<"ProjectPermission"> | number
    projectId?: IntFilter<"ProjectPermission"> | number
    roleId?: IntFilter<"ProjectPermission"> | number
    action?: StringFilter<"ProjectPermission"> | string
    ProjectRole?: XOR<ProjectRoleRelationFilter, ProjectRoleWhereInput>
  }

  export type ProjectPermissionOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    roleId?: SortOrder
    action?: SortOrder
    ProjectRole?: ProjectRoleOrderByWithRelationInput
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
    ProjectRole?: XOR<ProjectRoleRelationFilter, ProjectRoleWhereInput>
  }, "id" | "roleId_action">

  export type ProjectPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    roleId?: SortOrder
    action?: SortOrder
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
    ProjectPermission?: ProjectPermissionListRelationFilter
    ProjectUserRole?: ProjectUserRoleListRelationFilter
  }

  export type ProjectRoleOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ProjectPermission?: ProjectPermissionOrderByRelationAggregateInput
    ProjectUserRole?: ProjectUserRoleOrderByRelationAggregateInput
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
    ProjectPermission?: ProjectPermissionListRelationFilter
    ProjectUserRole?: ProjectUserRoleListRelationFilter
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

  export type ProjectUserRoleWhereInput = {
    AND?: ProjectUserRoleWhereInput | ProjectUserRoleWhereInput[]
    OR?: ProjectUserRoleWhereInput[]
    NOT?: ProjectUserRoleWhereInput | ProjectUserRoleWhereInput[]
    id?: IntFilter<"ProjectUserRole"> | number
    projectId?: IntFilter<"ProjectUserRole"> | number
    userId?: IntFilter<"ProjectUserRole"> | number
    roleId?: IntFilter<"ProjectUserRole"> | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    ProjectRole?: XOR<ProjectRoleRelationFilter, ProjectRoleWhereInput>
  }

  export type ProjectUserRoleOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    User?: UserOrderByWithRelationInput
    ProjectRole?: ProjectRoleOrderByWithRelationInput
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
    User?: XOR<UserRelationFilter, UserWhereInput>
    ProjectRole?: XOR<ProjectRoleRelationFilter, ProjectRoleWhereInput>
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

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    userId?: IntFilter<"RefreshToken"> | number
    hash?: StringFilter<"RefreshToken"> | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    hash?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    hash?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: IntFilter<"RefreshToken"> | number
    revoked?: BoolFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "hash">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    hash?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefreshToken"> | number
    userId?: IntWithAggregatesFilter<"RefreshToken"> | number
    hash?: StringWithAggregatesFilter<"RefreshToken"> | string
    revoked?: BoolWithAggregatesFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    systemPermissions?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ProjectUserRole?: ProjectUserRoleListRelationFilter
    RefreshToken?: RefreshTokenListRelationFilter
    OrganizationMember?: OrganizationMemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    systemPermissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ProjectUserRole?: ProjectUserRoleOrderByRelationAggregateInput
    RefreshToken?: RefreshTokenOrderByRelationAggregateInput
    OrganizationMember?: OrganizationMemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    systemPermissions?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ProjectUserRole?: ProjectUserRoleListRelationFilter
    RefreshToken?: RefreshTokenListRelationFilter
    OrganizationMember?: OrganizationMemberListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    systemPermissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    systemPermissions?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OrganizationCreateInput = {
    name: string
    slug: string
    plan?: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    auditLogs?: OrgAuditLogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    plan?: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    auditLogs?: OrgAuditLogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    auditLogs?: OrgAuditLogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    auditLogs?: OrgAuditLogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    name: string
    slug: string
    plan?: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationMemberCreateInput = {
    role?: string
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
    Organization: OrganizationCreateNestedOneWithoutMembersInput
    User: UserCreateNestedOneWithoutOrganizationMemberInput
  }

  export type OrganizationMemberUncheckedCreateInput = {
    id?: number
    orgId: number
    userId: number
    role?: string
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type OrganizationMemberUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput
    User?: UserUpdateOneRequiredWithoutOrganizationMemberNestedInput
  }

  export type OrganizationMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orgId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationMemberCreateManyInput = {
    id?: number
    orgId: number
    userId: number
    role?: string
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type OrganizationMemberUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orgId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrgAuditLogCreateInput = {
    actorId?: number | null
    action: string
    targetType?: string | null
    targetId?: string | null
    metadata?: string | null
    createdAt?: Date | string
    Organization: OrganizationCreateNestedOneWithoutAuditLogsInput
  }

  export type OrgAuditLogUncheckedCreateInput = {
    id?: number
    orgId: number
    actorId?: number | null
    action: string
    targetType?: string | null
    targetId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type OrgAuditLogUpdateInput = {
    actorId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type OrgAuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orgId?: IntFieldUpdateOperationsInput | number
    actorId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgAuditLogCreateManyInput = {
    id?: number
    orgId: number
    actorId?: number | null
    action: string
    targetType?: string | null
    targetId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type OrgAuditLogUpdateManyMutationInput = {
    actorId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgAuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orgId?: IntFieldUpdateOperationsInput | number
    actorId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ProjectPermissionCreateInput = {
    projectId: number
    action: string
    ProjectRole: ProjectRoleCreateNestedOneWithoutProjectPermissionInput
  }

  export type ProjectPermissionUncheckedCreateInput = {
    id?: number
    projectId: number
    roleId: number
    action: string
  }

  export type ProjectPermissionUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    ProjectRole?: ProjectRoleUpdateOneRequiredWithoutProjectPermissionNestedInput
  }

  export type ProjectPermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectPermissionCreateManyInput = {
    id?: number
    projectId: number
    roleId: number
    action: string
  }

  export type ProjectPermissionUpdateManyMutationInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectPermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectRoleCreateInput = {
    projectId: number
    name: string
    description?: string | null
    createdAt?: Date | string
    ProjectPermission?: ProjectPermissionCreateNestedManyWithoutProjectRoleInput
    ProjectUserRole?: ProjectUserRoleCreateNestedManyWithoutProjectRoleInput
  }

  export type ProjectRoleUncheckedCreateInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    createdAt?: Date | string
    ProjectPermission?: ProjectPermissionUncheckedCreateNestedManyWithoutProjectRoleInput
    ProjectUserRole?: ProjectUserRoleUncheckedCreateNestedManyWithoutProjectRoleInput
  }

  export type ProjectRoleUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectPermission?: ProjectPermissionUpdateManyWithoutProjectRoleNestedInput
    ProjectUserRole?: ProjectUserRoleUpdateManyWithoutProjectRoleNestedInput
  }

  export type ProjectRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectPermission?: ProjectPermissionUncheckedUpdateManyWithoutProjectRoleNestedInput
    ProjectUserRole?: ProjectUserRoleUncheckedUpdateManyWithoutProjectRoleNestedInput
  }

  export type ProjectRoleCreateManyInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ProjectRoleUpdateManyMutationInput = {
    projectId?: IntFieldUpdateOperationsInput | number
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

  export type ProjectUserRoleCreateInput = {
    projectId: number
    User: UserCreateNestedOneWithoutProjectUserRoleInput
    ProjectRole: ProjectRoleCreateNestedOneWithoutProjectUserRoleInput
  }

  export type ProjectUserRoleUncheckedCreateInput = {
    id?: number
    projectId: number
    userId: number
    roleId: number
  }

  export type ProjectUserRoleUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutProjectUserRoleNestedInput
    ProjectRole?: ProjectRoleUpdateOneRequiredWithoutProjectUserRoleNestedInput
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
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUserRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshTokenCreateInput = {
    hash: string
    revoked?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: number
    userId: number
    hash: string
    revoked?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    hash?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutRefreshTokenNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: number
    userId: number
    hash: string
    revoked?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    hash?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    systemPermissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ProjectUserRole?: ProjectUserRoleCreateNestedManyWithoutUserInput
    RefreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
    OrganizationMember?: OrganizationMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    systemPermissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ProjectUserRole?: ProjectUserRoleUncheckedCreateNestedManyWithoutUserInput
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    OrganizationMember?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    systemPermissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectUserRole?: ProjectUserRoleUpdateManyWithoutUserNestedInput
    RefreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
    OrganizationMember?: OrganizationMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    systemPermissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectUserRole?: ProjectUserRoleUncheckedUpdateManyWithoutUserNestedInput
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    OrganizationMember?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    systemPermissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    systemPermissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    systemPermissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type OrganizationMemberListRelationFilter = {
    every?: OrganizationMemberWhereInput
    some?: OrganizationMemberWhereInput
    none?: OrganizationMemberWhereInput
  }

  export type OrgAuditLogListRelationFilter = {
    every?: OrgAuditLogWhereInput
    some?: OrgAuditLogWhereInput
    none?: OrgAuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrganizationMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrgAuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
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

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrganizationMemberOrgIdUserIdCompoundUniqueInput = {
    orgId: number
    userId: number
  }

  export type OrganizationMemberCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    invitedAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type OrganizationMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
  }

  export type OrganizationMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    invitedAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type OrganizationMemberMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    invitedAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type OrganizationMemberSumOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
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

  export type OrgAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type OrgAuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    actorId?: SortOrder
  }

  export type OrgAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type OrgAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type OrgAuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    actorId?: SortOrder
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
  }

  export type ProjectPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    roleId?: SortOrder
    action?: SortOrder
  }

  export type ProjectPermissionSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    roleId?: SortOrder
  }

  export type ProjectPermissionListRelationFilter = {
    every?: ProjectPermissionWhereInput
    some?: ProjectPermissionWhereInput
    none?: ProjectPermissionWhereInput
  }

  export type ProjectUserRoleListRelationFilter = {
    every?: ProjectUserRoleWhereInput
    some?: ProjectUserRoleWhereInput
    none?: ProjectUserRoleWhereInput
  }

  export type ProjectPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectUserRoleOrderByRelationAggregateInput = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hash?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hash?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hash?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    systemPermissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    systemPermissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    systemPermissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizationMemberCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type OrgAuditLogCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrgAuditLogCreateWithoutOrganizationInput, OrgAuditLogUncheckedCreateWithoutOrganizationInput> | OrgAuditLogCreateWithoutOrganizationInput[] | OrgAuditLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrgAuditLogCreateOrConnectWithoutOrganizationInput | OrgAuditLogCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrgAuditLogCreateManyOrganizationInputEnvelope
    connect?: OrgAuditLogWhereUniqueInput | OrgAuditLogWhereUniqueInput[]
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type OrgAuditLogUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrgAuditLogCreateWithoutOrganizationInput, OrgAuditLogUncheckedCreateWithoutOrganizationInput> | OrgAuditLogCreateWithoutOrganizationInput[] | OrgAuditLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrgAuditLogCreateOrConnectWithoutOrganizationInput | OrgAuditLogCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrgAuditLogCreateManyOrganizationInputEnvelope
    connect?: OrgAuditLogWhereUniqueInput | OrgAuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrganizationMemberUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type OrgAuditLogUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrgAuditLogCreateWithoutOrganizationInput, OrgAuditLogUncheckedCreateWithoutOrganizationInput> | OrgAuditLogCreateWithoutOrganizationInput[] | OrgAuditLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrgAuditLogCreateOrConnectWithoutOrganizationInput | OrgAuditLogCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrgAuditLogUpsertWithWhereUniqueWithoutOrganizationInput | OrgAuditLogUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrgAuditLogCreateManyOrganizationInputEnvelope
    set?: OrgAuditLogWhereUniqueInput | OrgAuditLogWhereUniqueInput[]
    disconnect?: OrgAuditLogWhereUniqueInput | OrgAuditLogWhereUniqueInput[]
    delete?: OrgAuditLogWhereUniqueInput | OrgAuditLogWhereUniqueInput[]
    connect?: OrgAuditLogWhereUniqueInput | OrgAuditLogWhereUniqueInput[]
    update?: OrgAuditLogUpdateWithWhereUniqueWithoutOrganizationInput | OrgAuditLogUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrgAuditLogUpdateManyWithWhereWithoutOrganizationInput | OrgAuditLogUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrgAuditLogScalarWhereInput | OrgAuditLogScalarWhereInput[]
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type OrgAuditLogUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrgAuditLogCreateWithoutOrganizationInput, OrgAuditLogUncheckedCreateWithoutOrganizationInput> | OrgAuditLogCreateWithoutOrganizationInput[] | OrgAuditLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrgAuditLogCreateOrConnectWithoutOrganizationInput | OrgAuditLogCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrgAuditLogUpsertWithWhereUniqueWithoutOrganizationInput | OrgAuditLogUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrgAuditLogCreateManyOrganizationInputEnvelope
    set?: OrgAuditLogWhereUniqueInput | OrgAuditLogWhereUniqueInput[]
    disconnect?: OrgAuditLogWhereUniqueInput | OrgAuditLogWhereUniqueInput[]
    delete?: OrgAuditLogWhereUniqueInput | OrgAuditLogWhereUniqueInput[]
    connect?: OrgAuditLogWhereUniqueInput | OrgAuditLogWhereUniqueInput[]
    update?: OrgAuditLogUpdateWithWhereUniqueWithoutOrganizationInput | OrgAuditLogUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrgAuditLogUpdateManyWithWhereWithoutOrganizationInput | OrgAuditLogUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrgAuditLogScalarWhereInput | OrgAuditLogScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutMembersInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrganizationMemberInput = {
    create?: XOR<UserCreateWithoutOrganizationMemberInput, UserUncheckedCreateWithoutOrganizationMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationMemberInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    upsert?: OrganizationUpsertWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembersInput, OrganizationUpdateWithoutMembersInput>, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutOrganizationMemberNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationMemberInput, UserUncheckedCreateWithoutOrganizationMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationMemberInput
    upsert?: UserUpsertWithoutOrganizationMemberInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizationMemberInput, UserUpdateWithoutOrganizationMemberInput>, UserUncheckedUpdateWithoutOrganizationMemberInput>
  }

  export type OrganizationCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<OrganizationCreateWithoutAuditLogsInput, OrganizationUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAuditLogsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrganizationUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<OrganizationCreateWithoutAuditLogsInput, OrganizationUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAuditLogsInput
    upsert?: OrganizationUpsertWithoutAuditLogsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAuditLogsInput, OrganizationUpdateWithoutAuditLogsInput>, OrganizationUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ProjectRoleCreateNestedOneWithoutProjectPermissionInput = {
    create?: XOR<ProjectRoleCreateWithoutProjectPermissionInput, ProjectRoleUncheckedCreateWithoutProjectPermissionInput>
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectPermissionInput
    connect?: ProjectRoleWhereUniqueInput
  }

  export type ProjectRoleUpdateOneRequiredWithoutProjectPermissionNestedInput = {
    create?: XOR<ProjectRoleCreateWithoutProjectPermissionInput, ProjectRoleUncheckedCreateWithoutProjectPermissionInput>
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectPermissionInput
    upsert?: ProjectRoleUpsertWithoutProjectPermissionInput
    connect?: ProjectRoleWhereUniqueInput
    update?: XOR<XOR<ProjectRoleUpdateToOneWithWhereWithoutProjectPermissionInput, ProjectRoleUpdateWithoutProjectPermissionInput>, ProjectRoleUncheckedUpdateWithoutProjectPermissionInput>
  }

  export type ProjectPermissionCreateNestedManyWithoutProjectRoleInput = {
    create?: XOR<ProjectPermissionCreateWithoutProjectRoleInput, ProjectPermissionUncheckedCreateWithoutProjectRoleInput> | ProjectPermissionCreateWithoutProjectRoleInput[] | ProjectPermissionUncheckedCreateWithoutProjectRoleInput[]
    connectOrCreate?: ProjectPermissionCreateOrConnectWithoutProjectRoleInput | ProjectPermissionCreateOrConnectWithoutProjectRoleInput[]
    createMany?: ProjectPermissionCreateManyProjectRoleInputEnvelope
    connect?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
  }

  export type ProjectUserRoleCreateNestedManyWithoutProjectRoleInput = {
    create?: XOR<ProjectUserRoleCreateWithoutProjectRoleInput, ProjectUserRoleUncheckedCreateWithoutProjectRoleInput> | ProjectUserRoleCreateWithoutProjectRoleInput[] | ProjectUserRoleUncheckedCreateWithoutProjectRoleInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutProjectRoleInput | ProjectUserRoleCreateOrConnectWithoutProjectRoleInput[]
    createMany?: ProjectUserRoleCreateManyProjectRoleInputEnvelope
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
  }

  export type ProjectPermissionUncheckedCreateNestedManyWithoutProjectRoleInput = {
    create?: XOR<ProjectPermissionCreateWithoutProjectRoleInput, ProjectPermissionUncheckedCreateWithoutProjectRoleInput> | ProjectPermissionCreateWithoutProjectRoleInput[] | ProjectPermissionUncheckedCreateWithoutProjectRoleInput[]
    connectOrCreate?: ProjectPermissionCreateOrConnectWithoutProjectRoleInput | ProjectPermissionCreateOrConnectWithoutProjectRoleInput[]
    createMany?: ProjectPermissionCreateManyProjectRoleInputEnvelope
    connect?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
  }

  export type ProjectUserRoleUncheckedCreateNestedManyWithoutProjectRoleInput = {
    create?: XOR<ProjectUserRoleCreateWithoutProjectRoleInput, ProjectUserRoleUncheckedCreateWithoutProjectRoleInput> | ProjectUserRoleCreateWithoutProjectRoleInput[] | ProjectUserRoleUncheckedCreateWithoutProjectRoleInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutProjectRoleInput | ProjectUserRoleCreateOrConnectWithoutProjectRoleInput[]
    createMany?: ProjectUserRoleCreateManyProjectRoleInputEnvelope
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
  }

  export type ProjectPermissionUpdateManyWithoutProjectRoleNestedInput = {
    create?: XOR<ProjectPermissionCreateWithoutProjectRoleInput, ProjectPermissionUncheckedCreateWithoutProjectRoleInput> | ProjectPermissionCreateWithoutProjectRoleInput[] | ProjectPermissionUncheckedCreateWithoutProjectRoleInput[]
    connectOrCreate?: ProjectPermissionCreateOrConnectWithoutProjectRoleInput | ProjectPermissionCreateOrConnectWithoutProjectRoleInput[]
    upsert?: ProjectPermissionUpsertWithWhereUniqueWithoutProjectRoleInput | ProjectPermissionUpsertWithWhereUniqueWithoutProjectRoleInput[]
    createMany?: ProjectPermissionCreateManyProjectRoleInputEnvelope
    set?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    disconnect?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    delete?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    connect?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    update?: ProjectPermissionUpdateWithWhereUniqueWithoutProjectRoleInput | ProjectPermissionUpdateWithWhereUniqueWithoutProjectRoleInput[]
    updateMany?: ProjectPermissionUpdateManyWithWhereWithoutProjectRoleInput | ProjectPermissionUpdateManyWithWhereWithoutProjectRoleInput[]
    deleteMany?: ProjectPermissionScalarWhereInput | ProjectPermissionScalarWhereInput[]
  }

  export type ProjectUserRoleUpdateManyWithoutProjectRoleNestedInput = {
    create?: XOR<ProjectUserRoleCreateWithoutProjectRoleInput, ProjectUserRoleUncheckedCreateWithoutProjectRoleInput> | ProjectUserRoleCreateWithoutProjectRoleInput[] | ProjectUserRoleUncheckedCreateWithoutProjectRoleInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutProjectRoleInput | ProjectUserRoleCreateOrConnectWithoutProjectRoleInput[]
    upsert?: ProjectUserRoleUpsertWithWhereUniqueWithoutProjectRoleInput | ProjectUserRoleUpsertWithWhereUniqueWithoutProjectRoleInput[]
    createMany?: ProjectUserRoleCreateManyProjectRoleInputEnvelope
    set?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    disconnect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    delete?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    update?: ProjectUserRoleUpdateWithWhereUniqueWithoutProjectRoleInput | ProjectUserRoleUpdateWithWhereUniqueWithoutProjectRoleInput[]
    updateMany?: ProjectUserRoleUpdateManyWithWhereWithoutProjectRoleInput | ProjectUserRoleUpdateManyWithWhereWithoutProjectRoleInput[]
    deleteMany?: ProjectUserRoleScalarWhereInput | ProjectUserRoleScalarWhereInput[]
  }

  export type ProjectPermissionUncheckedUpdateManyWithoutProjectRoleNestedInput = {
    create?: XOR<ProjectPermissionCreateWithoutProjectRoleInput, ProjectPermissionUncheckedCreateWithoutProjectRoleInput> | ProjectPermissionCreateWithoutProjectRoleInput[] | ProjectPermissionUncheckedCreateWithoutProjectRoleInput[]
    connectOrCreate?: ProjectPermissionCreateOrConnectWithoutProjectRoleInput | ProjectPermissionCreateOrConnectWithoutProjectRoleInput[]
    upsert?: ProjectPermissionUpsertWithWhereUniqueWithoutProjectRoleInput | ProjectPermissionUpsertWithWhereUniqueWithoutProjectRoleInput[]
    createMany?: ProjectPermissionCreateManyProjectRoleInputEnvelope
    set?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    disconnect?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    delete?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    connect?: ProjectPermissionWhereUniqueInput | ProjectPermissionWhereUniqueInput[]
    update?: ProjectPermissionUpdateWithWhereUniqueWithoutProjectRoleInput | ProjectPermissionUpdateWithWhereUniqueWithoutProjectRoleInput[]
    updateMany?: ProjectPermissionUpdateManyWithWhereWithoutProjectRoleInput | ProjectPermissionUpdateManyWithWhereWithoutProjectRoleInput[]
    deleteMany?: ProjectPermissionScalarWhereInput | ProjectPermissionScalarWhereInput[]
  }

  export type ProjectUserRoleUncheckedUpdateManyWithoutProjectRoleNestedInput = {
    create?: XOR<ProjectUserRoleCreateWithoutProjectRoleInput, ProjectUserRoleUncheckedCreateWithoutProjectRoleInput> | ProjectUserRoleCreateWithoutProjectRoleInput[] | ProjectUserRoleUncheckedCreateWithoutProjectRoleInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutProjectRoleInput | ProjectUserRoleCreateOrConnectWithoutProjectRoleInput[]
    upsert?: ProjectUserRoleUpsertWithWhereUniqueWithoutProjectRoleInput | ProjectUserRoleUpsertWithWhereUniqueWithoutProjectRoleInput[]
    createMany?: ProjectUserRoleCreateManyProjectRoleInputEnvelope
    set?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    disconnect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    delete?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    update?: ProjectUserRoleUpdateWithWhereUniqueWithoutProjectRoleInput | ProjectUserRoleUpdateWithWhereUniqueWithoutProjectRoleInput[]
    updateMany?: ProjectUserRoleUpdateManyWithWhereWithoutProjectRoleInput | ProjectUserRoleUpdateManyWithWhereWithoutProjectRoleInput[]
    deleteMany?: ProjectUserRoleScalarWhereInput | ProjectUserRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectUserRoleInput = {
    create?: XOR<UserCreateWithoutProjectUserRoleInput, UserUncheckedCreateWithoutProjectUserRoleInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectUserRoleInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectRoleCreateNestedOneWithoutProjectUserRoleInput = {
    create?: XOR<ProjectRoleCreateWithoutProjectUserRoleInput, ProjectRoleUncheckedCreateWithoutProjectUserRoleInput>
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectUserRoleInput
    connect?: ProjectRoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProjectUserRoleNestedInput = {
    create?: XOR<UserCreateWithoutProjectUserRoleInput, UserUncheckedCreateWithoutProjectUserRoleInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectUserRoleInput
    upsert?: UserUpsertWithoutProjectUserRoleInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectUserRoleInput, UserUpdateWithoutProjectUserRoleInput>, UserUncheckedUpdateWithoutProjectUserRoleInput>
  }

  export type ProjectRoleUpdateOneRequiredWithoutProjectUserRoleNestedInput = {
    create?: XOR<ProjectRoleCreateWithoutProjectUserRoleInput, ProjectRoleUncheckedCreateWithoutProjectUserRoleInput>
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectUserRoleInput
    upsert?: ProjectRoleUpsertWithoutProjectUserRoleInput
    connect?: ProjectRoleWhereUniqueInput
    update?: XOR<XOR<ProjectRoleUpdateToOneWithWhereWithoutProjectUserRoleInput, ProjectRoleUpdateWithoutProjectUserRoleInput>, ProjectRoleUncheckedUpdateWithoutProjectUserRoleInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRefreshTokenNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    upsert?: UserUpsertWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokenInput, UserUpdateWithoutRefreshTokenInput>, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type ProjectUserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectUserRoleCreateWithoutUserInput, ProjectUserRoleUncheckedCreateWithoutUserInput> | ProjectUserRoleCreateWithoutUserInput[] | ProjectUserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutUserInput | ProjectUserRoleCreateOrConnectWithoutUserInput[]
    createMany?: ProjectUserRoleCreateManyUserInputEnvelope
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type OrganizationMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type ProjectUserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectUserRoleCreateWithoutUserInput, ProjectUserRoleUncheckedCreateWithoutUserInput> | ProjectUserRoleCreateWithoutUserInput[] | ProjectUserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutUserInput | ProjectUserRoleCreateOrConnectWithoutUserInput[]
    createMany?: ProjectUserRoleCreateManyUserInputEnvelope
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type ProjectUserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectUserRoleCreateWithoutUserInput, ProjectUserRoleUncheckedCreateWithoutUserInput> | ProjectUserRoleCreateWithoutUserInput[] | ProjectUserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutUserInput | ProjectUserRoleCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUserRoleUpsertWithWhereUniqueWithoutUserInput | ProjectUserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectUserRoleCreateManyUserInputEnvelope
    set?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    disconnect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    delete?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    update?: ProjectUserRoleUpdateWithWhereUniqueWithoutUserInput | ProjectUserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUserRoleUpdateManyWithWhereWithoutUserInput | ProjectUserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectUserRoleScalarWhereInput | ProjectUserRoleScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type OrganizationMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutUserInput | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutUserInput | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutUserInput | OrganizationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type ProjectUserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectUserRoleCreateWithoutUserInput, ProjectUserRoleUncheckedCreateWithoutUserInput> | ProjectUserRoleCreateWithoutUserInput[] | ProjectUserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectUserRoleCreateOrConnectWithoutUserInput | ProjectUserRoleCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUserRoleUpsertWithWhereUniqueWithoutUserInput | ProjectUserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectUserRoleCreateManyUserInputEnvelope
    set?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    disconnect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    delete?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    connect?: ProjectUserRoleWhereUniqueInput | ProjectUserRoleWhereUniqueInput[]
    update?: ProjectUserRoleUpdateWithWhereUniqueWithoutUserInput | ProjectUserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUserRoleUpdateManyWithWhereWithoutUserInput | ProjectUserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectUserRoleScalarWhereInput | ProjectUserRoleScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutUserInput | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutUserInput | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutUserInput | OrganizationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
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

  export type OrganizationMemberCreateWithoutOrganizationInput = {
    role?: string
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
    User: UserCreateNestedOneWithoutOrganizationMemberInput
  }

  export type OrganizationMemberUncheckedCreateWithoutOrganizationInput = {
    id?: number
    userId: number
    role?: string
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type OrganizationMemberCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberCreateManyOrganizationInputEnvelope = {
    data: OrganizationMemberCreateManyOrganizationInput | OrganizationMemberCreateManyOrganizationInput[]
  }

  export type OrgAuditLogCreateWithoutOrganizationInput = {
    actorId?: number | null
    action: string
    targetType?: string | null
    targetId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type OrgAuditLogUncheckedCreateWithoutOrganizationInput = {
    id?: number
    actorId?: number | null
    action: string
    targetType?: string | null
    targetId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type OrgAuditLogCreateOrConnectWithoutOrganizationInput = {
    where: OrgAuditLogWhereUniqueInput
    create: XOR<OrgAuditLogCreateWithoutOrganizationInput, OrgAuditLogUncheckedCreateWithoutOrganizationInput>
  }

  export type OrgAuditLogCreateManyOrganizationInputEnvelope = {
    data: OrgAuditLogCreateManyOrganizationInput | OrgAuditLogCreateManyOrganizationInput[]
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrganizationMemberScalarWhereInput = {
    AND?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    OR?: OrganizationMemberScalarWhereInput[]
    NOT?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    id?: IntFilter<"OrganizationMember"> | number
    orgId?: IntFilter<"OrganizationMember"> | number
    userId?: IntFilter<"OrganizationMember"> | number
    role?: StringFilter<"OrganizationMember"> | string
    invitedAt?: DateTimeFilter<"OrganizationMember"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"OrganizationMember"> | Date | string | null
  }

  export type OrgAuditLogUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrgAuditLogWhereUniqueInput
    update: XOR<OrgAuditLogUpdateWithoutOrganizationInput, OrgAuditLogUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrgAuditLogCreateWithoutOrganizationInput, OrgAuditLogUncheckedCreateWithoutOrganizationInput>
  }

  export type OrgAuditLogUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrgAuditLogWhereUniqueInput
    data: XOR<OrgAuditLogUpdateWithoutOrganizationInput, OrgAuditLogUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrgAuditLogUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrgAuditLogScalarWhereInput
    data: XOR<OrgAuditLogUpdateManyMutationInput, OrgAuditLogUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrgAuditLogScalarWhereInput = {
    AND?: OrgAuditLogScalarWhereInput | OrgAuditLogScalarWhereInput[]
    OR?: OrgAuditLogScalarWhereInput[]
    NOT?: OrgAuditLogScalarWhereInput | OrgAuditLogScalarWhereInput[]
    id?: IntFilter<"OrgAuditLog"> | number
    orgId?: IntFilter<"OrgAuditLog"> | number
    actorId?: IntNullableFilter<"OrgAuditLog"> | number | null
    action?: StringFilter<"OrgAuditLog"> | string
    targetType?: StringNullableFilter<"OrgAuditLog"> | string | null
    targetId?: StringNullableFilter<"OrgAuditLog"> | string | null
    metadata?: StringNullableFilter<"OrgAuditLog"> | string | null
    createdAt?: DateTimeFilter<"OrgAuditLog"> | Date | string
  }

  export type OrganizationCreateWithoutMembersInput = {
    name: string
    slug: string
    plan?: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    auditLogs?: OrgAuditLogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    slug: string
    plan?: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    auditLogs?: OrgAuditLogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMembersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutOrganizationMemberInput = {
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    systemPermissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ProjectUserRole?: ProjectUserRoleCreateNestedManyWithoutUserInput
    RefreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationMemberInput = {
    id?: number
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    systemPermissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ProjectUserRole?: ProjectUserRoleUncheckedCreateNestedManyWithoutUserInput
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationMemberInput, UserUncheckedCreateWithoutOrganizationMemberInput>
  }

  export type OrganizationUpsertWithoutMembersInput = {
    update: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: OrgAuditLogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: OrgAuditLogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutOrganizationMemberInput = {
    update: XOR<UserUpdateWithoutOrganizationMemberInput, UserUncheckedUpdateWithoutOrganizationMemberInput>
    create: XOR<UserCreateWithoutOrganizationMemberInput, UserUncheckedCreateWithoutOrganizationMemberInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizationMemberInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizationMemberInput, UserUncheckedUpdateWithoutOrganizationMemberInput>
  }

  export type UserUpdateWithoutOrganizationMemberInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    systemPermissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectUserRole?: ProjectUserRoleUpdateManyWithoutUserNestedInput
    RefreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    systemPermissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectUserRole?: ProjectUserRoleUncheckedUpdateManyWithoutUserNestedInput
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationCreateWithoutAuditLogsInput = {
    name: string
    slug: string
    plan?: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAuditLogsInput = {
    id?: number
    name: string
    slug: string
    plan?: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAuditLogsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAuditLogsInput, OrganizationUncheckedCreateWithoutAuditLogsInput>
  }

  export type OrganizationUpsertWithoutAuditLogsInput = {
    update: XOR<OrganizationUpdateWithoutAuditLogsInput, OrganizationUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<OrganizationCreateWithoutAuditLogsInput, OrganizationUncheckedCreateWithoutAuditLogsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAuditLogsInput, OrganizationUncheckedUpdateWithoutAuditLogsInput>
  }

  export type OrganizationUpdateWithoutAuditLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAuditLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ProjectRoleCreateWithoutProjectPermissionInput = {
    projectId: number
    name: string
    description?: string | null
    createdAt?: Date | string
    ProjectUserRole?: ProjectUserRoleCreateNestedManyWithoutProjectRoleInput
  }

  export type ProjectRoleUncheckedCreateWithoutProjectPermissionInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    createdAt?: Date | string
    ProjectUserRole?: ProjectUserRoleUncheckedCreateNestedManyWithoutProjectRoleInput
  }

  export type ProjectRoleCreateOrConnectWithoutProjectPermissionInput = {
    where: ProjectRoleWhereUniqueInput
    create: XOR<ProjectRoleCreateWithoutProjectPermissionInput, ProjectRoleUncheckedCreateWithoutProjectPermissionInput>
  }

  export type ProjectRoleUpsertWithoutProjectPermissionInput = {
    update: XOR<ProjectRoleUpdateWithoutProjectPermissionInput, ProjectRoleUncheckedUpdateWithoutProjectPermissionInput>
    create: XOR<ProjectRoleCreateWithoutProjectPermissionInput, ProjectRoleUncheckedCreateWithoutProjectPermissionInput>
    where?: ProjectRoleWhereInput
  }

  export type ProjectRoleUpdateToOneWithWhereWithoutProjectPermissionInput = {
    where?: ProjectRoleWhereInput
    data: XOR<ProjectRoleUpdateWithoutProjectPermissionInput, ProjectRoleUncheckedUpdateWithoutProjectPermissionInput>
  }

  export type ProjectRoleUpdateWithoutProjectPermissionInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectUserRole?: ProjectUserRoleUpdateManyWithoutProjectRoleNestedInput
  }

  export type ProjectRoleUncheckedUpdateWithoutProjectPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectUserRole?: ProjectUserRoleUncheckedUpdateManyWithoutProjectRoleNestedInput
  }

  export type ProjectPermissionCreateWithoutProjectRoleInput = {
    projectId: number
    action: string
  }

  export type ProjectPermissionUncheckedCreateWithoutProjectRoleInput = {
    id?: number
    projectId: number
    action: string
  }

  export type ProjectPermissionCreateOrConnectWithoutProjectRoleInput = {
    where: ProjectPermissionWhereUniqueInput
    create: XOR<ProjectPermissionCreateWithoutProjectRoleInput, ProjectPermissionUncheckedCreateWithoutProjectRoleInput>
  }

  export type ProjectPermissionCreateManyProjectRoleInputEnvelope = {
    data: ProjectPermissionCreateManyProjectRoleInput | ProjectPermissionCreateManyProjectRoleInput[]
  }

  export type ProjectUserRoleCreateWithoutProjectRoleInput = {
    projectId: number
    User: UserCreateNestedOneWithoutProjectUserRoleInput
  }

  export type ProjectUserRoleUncheckedCreateWithoutProjectRoleInput = {
    id?: number
    projectId: number
    userId: number
  }

  export type ProjectUserRoleCreateOrConnectWithoutProjectRoleInput = {
    where: ProjectUserRoleWhereUniqueInput
    create: XOR<ProjectUserRoleCreateWithoutProjectRoleInput, ProjectUserRoleUncheckedCreateWithoutProjectRoleInput>
  }

  export type ProjectUserRoleCreateManyProjectRoleInputEnvelope = {
    data: ProjectUserRoleCreateManyProjectRoleInput | ProjectUserRoleCreateManyProjectRoleInput[]
  }

  export type ProjectPermissionUpsertWithWhereUniqueWithoutProjectRoleInput = {
    where: ProjectPermissionWhereUniqueInput
    update: XOR<ProjectPermissionUpdateWithoutProjectRoleInput, ProjectPermissionUncheckedUpdateWithoutProjectRoleInput>
    create: XOR<ProjectPermissionCreateWithoutProjectRoleInput, ProjectPermissionUncheckedCreateWithoutProjectRoleInput>
  }

  export type ProjectPermissionUpdateWithWhereUniqueWithoutProjectRoleInput = {
    where: ProjectPermissionWhereUniqueInput
    data: XOR<ProjectPermissionUpdateWithoutProjectRoleInput, ProjectPermissionUncheckedUpdateWithoutProjectRoleInput>
  }

  export type ProjectPermissionUpdateManyWithWhereWithoutProjectRoleInput = {
    where: ProjectPermissionScalarWhereInput
    data: XOR<ProjectPermissionUpdateManyMutationInput, ProjectPermissionUncheckedUpdateManyWithoutProjectRoleInput>
  }

  export type ProjectPermissionScalarWhereInput = {
    AND?: ProjectPermissionScalarWhereInput | ProjectPermissionScalarWhereInput[]
    OR?: ProjectPermissionScalarWhereInput[]
    NOT?: ProjectPermissionScalarWhereInput | ProjectPermissionScalarWhereInput[]
    id?: IntFilter<"ProjectPermission"> | number
    projectId?: IntFilter<"ProjectPermission"> | number
    roleId?: IntFilter<"ProjectPermission"> | number
    action?: StringFilter<"ProjectPermission"> | string
  }

  export type ProjectUserRoleUpsertWithWhereUniqueWithoutProjectRoleInput = {
    where: ProjectUserRoleWhereUniqueInput
    update: XOR<ProjectUserRoleUpdateWithoutProjectRoleInput, ProjectUserRoleUncheckedUpdateWithoutProjectRoleInput>
    create: XOR<ProjectUserRoleCreateWithoutProjectRoleInput, ProjectUserRoleUncheckedCreateWithoutProjectRoleInput>
  }

  export type ProjectUserRoleUpdateWithWhereUniqueWithoutProjectRoleInput = {
    where: ProjectUserRoleWhereUniqueInput
    data: XOR<ProjectUserRoleUpdateWithoutProjectRoleInput, ProjectUserRoleUncheckedUpdateWithoutProjectRoleInput>
  }

  export type ProjectUserRoleUpdateManyWithWhereWithoutProjectRoleInput = {
    where: ProjectUserRoleScalarWhereInput
    data: XOR<ProjectUserRoleUpdateManyMutationInput, ProjectUserRoleUncheckedUpdateManyWithoutProjectRoleInput>
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

  export type UserCreateWithoutProjectUserRoleInput = {
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    systemPermissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RefreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
    OrganizationMember?: OrganizationMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectUserRoleInput = {
    id?: number
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    systemPermissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    OrganizationMember?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectUserRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectUserRoleInput, UserUncheckedCreateWithoutProjectUserRoleInput>
  }

  export type ProjectRoleCreateWithoutProjectUserRoleInput = {
    projectId: number
    name: string
    description?: string | null
    createdAt?: Date | string
    ProjectPermission?: ProjectPermissionCreateNestedManyWithoutProjectRoleInput
  }

  export type ProjectRoleUncheckedCreateWithoutProjectUserRoleInput = {
    id?: number
    projectId: number
    name: string
    description?: string | null
    createdAt?: Date | string
    ProjectPermission?: ProjectPermissionUncheckedCreateNestedManyWithoutProjectRoleInput
  }

  export type ProjectRoleCreateOrConnectWithoutProjectUserRoleInput = {
    where: ProjectRoleWhereUniqueInput
    create: XOR<ProjectRoleCreateWithoutProjectUserRoleInput, ProjectRoleUncheckedCreateWithoutProjectUserRoleInput>
  }

  export type UserUpsertWithoutProjectUserRoleInput = {
    update: XOR<UserUpdateWithoutProjectUserRoleInput, UserUncheckedUpdateWithoutProjectUserRoleInput>
    create: XOR<UserCreateWithoutProjectUserRoleInput, UserUncheckedCreateWithoutProjectUserRoleInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectUserRoleInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectUserRoleInput, UserUncheckedUpdateWithoutProjectUserRoleInput>
  }

  export type UserUpdateWithoutProjectUserRoleInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    systemPermissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RefreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
    OrganizationMember?: OrganizationMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    systemPermissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    OrganizationMember?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectRoleUpsertWithoutProjectUserRoleInput = {
    update: XOR<ProjectRoleUpdateWithoutProjectUserRoleInput, ProjectRoleUncheckedUpdateWithoutProjectUserRoleInput>
    create: XOR<ProjectRoleCreateWithoutProjectUserRoleInput, ProjectRoleUncheckedCreateWithoutProjectUserRoleInput>
    where?: ProjectRoleWhereInput
  }

  export type ProjectRoleUpdateToOneWithWhereWithoutProjectUserRoleInput = {
    where?: ProjectRoleWhereInput
    data: XOR<ProjectRoleUpdateWithoutProjectUserRoleInput, ProjectRoleUncheckedUpdateWithoutProjectUserRoleInput>
  }

  export type ProjectRoleUpdateWithoutProjectUserRoleInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectPermission?: ProjectPermissionUpdateManyWithoutProjectRoleNestedInput
  }

  export type ProjectRoleUncheckedUpdateWithoutProjectUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectPermission?: ProjectPermissionUncheckedUpdateManyWithoutProjectRoleNestedInput
  }

  export type UserCreateWithoutRefreshTokenInput = {
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    systemPermissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ProjectUserRole?: ProjectUserRoleCreateNestedManyWithoutUserInput
    OrganizationMember?: OrganizationMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokenInput = {
    id?: number
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    systemPermissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ProjectUserRole?: ProjectUserRoleUncheckedCreateNestedManyWithoutUserInput
    OrganizationMember?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
  }

  export type UserUpsertWithoutRefreshTokenInput = {
    update: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type UserUpdateWithoutRefreshTokenInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    systemPermissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectUserRole?: ProjectUserRoleUpdateManyWithoutUserNestedInput
    OrganizationMember?: OrganizationMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    systemPermissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectUserRole?: ProjectUserRoleUncheckedUpdateManyWithoutUserNestedInput
    OrganizationMember?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUserRoleCreateWithoutUserInput = {
    projectId: number
    ProjectRole: ProjectRoleCreateNestedOneWithoutProjectUserRoleInput
  }

  export type ProjectUserRoleUncheckedCreateWithoutUserInput = {
    id?: number
    projectId: number
    roleId: number
  }

  export type ProjectUserRoleCreateOrConnectWithoutUserInput = {
    where: ProjectUserRoleWhereUniqueInput
    create: XOR<ProjectUserRoleCreateWithoutUserInput, ProjectUserRoleUncheckedCreateWithoutUserInput>
  }

  export type ProjectUserRoleCreateManyUserInputEnvelope = {
    data: ProjectUserRoleCreateManyUserInput | ProjectUserRoleCreateManyUserInput[]
  }

  export type RefreshTokenCreateWithoutUserInput = {
    hash: string
    revoked?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: number
    hash: string
    revoked?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
  }

  export type OrganizationMemberCreateWithoutUserInput = {
    role?: string
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
    Organization: OrganizationCreateNestedOneWithoutMembersInput
  }

  export type OrganizationMemberUncheckedCreateWithoutUserInput = {
    id?: number
    orgId: number
    role?: string
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type OrganizationMemberCreateOrConnectWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMemberCreateManyUserInputEnvelope = {
    data: OrganizationMemberCreateManyUserInput | OrganizationMemberCreateManyUserInput[]
  }

  export type ProjectUserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectUserRoleWhereUniqueInput
    update: XOR<ProjectUserRoleUpdateWithoutUserInput, ProjectUserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectUserRoleCreateWithoutUserInput, ProjectUserRoleUncheckedCreateWithoutUserInput>
  }

  export type ProjectUserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectUserRoleWhereUniqueInput
    data: XOR<ProjectUserRoleUpdateWithoutUserInput, ProjectUserRoleUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUserRoleUpdateManyWithWhereWithoutUserInput = {
    where: ProjectUserRoleScalarWhereInput
    data: XOR<ProjectUserRoleUpdateManyMutationInput, ProjectUserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    userId?: IntFilter<"RefreshToken"> | number
    hash?: StringFilter<"RefreshToken"> | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutUserInput, OrganizationMemberUncheckedUpdateWithoutUserInput>
    create: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutUserInput, OrganizationMemberUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutUserInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type OrganizationMemberCreateManyOrganizationInput = {
    id?: number
    userId: number
    role?: string
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type OrgAuditLogCreateManyOrganizationInput = {
    id?: number
    actorId?: number | null
    action: string
    targetType?: string | null
    targetId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type OrganizationMemberUpdateWithoutOrganizationInput = {
    role?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutOrganizationMemberNestedInput
  }

  export type OrganizationMemberUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrgAuditLogUpdateWithoutOrganizationInput = {
    actorId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgAuditLogUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    actorId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgAuditLogUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    actorId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPermissionCreateManyProjectRoleInput = {
    id?: number
    projectId: number
    action: string
  }

  export type ProjectUserRoleCreateManyProjectRoleInput = {
    id?: number
    projectId: number
    userId: number
  }

  export type ProjectPermissionUpdateWithoutProjectRoleInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectPermissionUncheckedUpdateWithoutProjectRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectPermissionUncheckedUpdateManyWithoutProjectRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUserRoleUpdateWithoutProjectRoleInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutProjectUserRoleNestedInput
  }

  export type ProjectUserRoleUncheckedUpdateWithoutProjectRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUserRoleUncheckedUpdateManyWithoutProjectRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUserRoleCreateManyUserInput = {
    id?: number
    projectId: number
    roleId: number
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: number
    hash: string
    revoked?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OrganizationMemberCreateManyUserInput = {
    id?: number
    orgId: number
    role?: string
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type ProjectUserRoleUpdateWithoutUserInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    ProjectRole?: ProjectRoleUpdateOneRequiredWithoutProjectUserRoleNestedInput
  }

  export type ProjectUserRoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUserRoleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    hash?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput
  }

  export type OrganizationMemberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    orgId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    orgId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
     */
    export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectRoleCountOutputTypeDefaultArgs instead
     */
    export type ProjectRoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectRoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizationDefaultArgs instead
     */
    export type OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizationMemberDefaultArgs instead
     */
    export type OrganizationMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrgAuditLogDefaultArgs instead
     */
    export type OrgAuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrgAuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IdempotencyKeyDefaultArgs instead
     */
    export type IdempotencyKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IdempotencyKeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectPermissionDefaultArgs instead
     */
    export type ProjectPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectPermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectRoleDefaultArgs instead
     */
    export type ProjectRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectUserRoleDefaultArgs instead
     */
    export type ProjectUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectUserRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RefreshTokenDefaultArgs instead
     */
    export type RefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RefreshTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>

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
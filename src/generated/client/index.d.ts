
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserPlant
 * 
 */
export type UserPlant = $Result.DefaultSelection<Prisma.$UserPlantPayload>
/**
 * Model Plant
 * 
 */
export type Plant = $Result.DefaultSelection<Prisma.$PlantPayload>
/**
 * Model MachineType
 * 
 */
export type MachineType = $Result.DefaultSelection<Prisma.$MachineTypePayload>
/**
 * Model ExternalFactor
 * 
 */
export type ExternalFactor = $Result.DefaultSelection<Prisma.$ExternalFactorPayload>
/**
 * Model MachineExternalFactor
 * 
 */
export type MachineExternalFactor = $Result.DefaultSelection<Prisma.$MachineExternalFactorPayload>
/**
 * Model Machine
 * 
 */
export type Machine = $Result.DefaultSelection<Prisma.$MachinePayload>
/**
 * Model MaterialFlow
 * 
 */
export type MaterialFlow = $Result.DefaultSelection<Prisma.$MaterialFlowPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userPlant`: Exposes CRUD operations for the **UserPlant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPlants
    * const userPlants = await prisma.userPlant.findMany()
    * ```
    */
  get userPlant(): Prisma.UserPlantDelegate<ExtArgs>;

  /**
   * `prisma.plant`: Exposes CRUD operations for the **Plant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plants
    * const plants = await prisma.plant.findMany()
    * ```
    */
  get plant(): Prisma.PlantDelegate<ExtArgs>;

  /**
   * `prisma.machineType`: Exposes CRUD operations for the **MachineType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MachineTypes
    * const machineTypes = await prisma.machineType.findMany()
    * ```
    */
  get machineType(): Prisma.MachineTypeDelegate<ExtArgs>;

  /**
   * `prisma.externalFactor`: Exposes CRUD operations for the **ExternalFactor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExternalFactors
    * const externalFactors = await prisma.externalFactor.findMany()
    * ```
    */
  get externalFactor(): Prisma.ExternalFactorDelegate<ExtArgs>;

  /**
   * `prisma.machineExternalFactor`: Exposes CRUD operations for the **MachineExternalFactor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MachineExternalFactors
    * const machineExternalFactors = await prisma.machineExternalFactor.findMany()
    * ```
    */
  get machineExternalFactor(): Prisma.MachineExternalFactorDelegate<ExtArgs>;

  /**
   * `prisma.machine`: Exposes CRUD operations for the **Machine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Machines
    * const machines = await prisma.machine.findMany()
    * ```
    */
  get machine(): Prisma.MachineDelegate<ExtArgs>;

  /**
   * `prisma.materialFlow`: Exposes CRUD operations for the **MaterialFlow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaterialFlows
    * const materialFlows = await prisma.materialFlow.findMany()
    * ```
    */
  get materialFlow(): Prisma.MaterialFlowDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
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
    User: 'User',
    UserPlant: 'UserPlant',
    Plant: 'Plant',
    MachineType: 'MachineType',
    ExternalFactor: 'ExternalFactor',
    MachineExternalFactor: 'MachineExternalFactor',
    Machine: 'Machine',
    MaterialFlow: 'MaterialFlow'
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
      modelProps: "user" | "userPlant" | "plant" | "machineType" | "externalFactor" | "machineExternalFactor" | "machine" | "materialFlow"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      UserPlant: {
        payload: Prisma.$UserPlantPayload<ExtArgs>
        fields: Prisma.UserPlantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPlantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPlantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlantPayload>
          }
          findFirst: {
            args: Prisma.UserPlantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPlantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlantPayload>
          }
          findMany: {
            args: Prisma.UserPlantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlantPayload>[]
          }
          create: {
            args: Prisma.UserPlantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlantPayload>
          }
          createMany: {
            args: Prisma.UserPlantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPlantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlantPayload>[]
          }
          delete: {
            args: Prisma.UserPlantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlantPayload>
          }
          update: {
            args: Prisma.UserPlantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlantPayload>
          }
          deleteMany: {
            args: Prisma.UserPlantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPlantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPlantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlantPayload>
          }
          aggregate: {
            args: Prisma.UserPlantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPlant>
          }
          groupBy: {
            args: Prisma.UserPlantGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPlantGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPlantCountArgs<ExtArgs>
            result: $Utils.Optional<UserPlantCountAggregateOutputType> | number
          }
        }
      }
      Plant: {
        payload: Prisma.$PlantPayload<ExtArgs>
        fields: Prisma.PlantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          findFirst: {
            args: Prisma.PlantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          findMany: {
            args: Prisma.PlantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>[]
          }
          create: {
            args: Prisma.PlantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          createMany: {
            args: Prisma.PlantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>[]
          }
          delete: {
            args: Prisma.PlantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          update: {
            args: Prisma.PlantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          deleteMany: {
            args: Prisma.PlantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          aggregate: {
            args: Prisma.PlantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlant>
          }
          groupBy: {
            args: Prisma.PlantGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantCountArgs<ExtArgs>
            result: $Utils.Optional<PlantCountAggregateOutputType> | number
          }
        }
      }
      MachineType: {
        payload: Prisma.$MachineTypePayload<ExtArgs>
        fields: Prisma.MachineTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MachineTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MachineTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineTypePayload>
          }
          findFirst: {
            args: Prisma.MachineTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MachineTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineTypePayload>
          }
          findMany: {
            args: Prisma.MachineTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineTypePayload>[]
          }
          create: {
            args: Prisma.MachineTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineTypePayload>
          }
          createMany: {
            args: Prisma.MachineTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MachineTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineTypePayload>[]
          }
          delete: {
            args: Prisma.MachineTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineTypePayload>
          }
          update: {
            args: Prisma.MachineTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineTypePayload>
          }
          deleteMany: {
            args: Prisma.MachineTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MachineTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MachineTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineTypePayload>
          }
          aggregate: {
            args: Prisma.MachineTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMachineType>
          }
          groupBy: {
            args: Prisma.MachineTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MachineTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MachineTypeCountArgs<ExtArgs>
            result: $Utils.Optional<MachineTypeCountAggregateOutputType> | number
          }
        }
      }
      ExternalFactor: {
        payload: Prisma.$ExternalFactorPayload<ExtArgs>
        fields: Prisma.ExternalFactorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternalFactorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalFactorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternalFactorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalFactorPayload>
          }
          findFirst: {
            args: Prisma.ExternalFactorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalFactorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternalFactorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalFactorPayload>
          }
          findMany: {
            args: Prisma.ExternalFactorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalFactorPayload>[]
          }
          create: {
            args: Prisma.ExternalFactorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalFactorPayload>
          }
          createMany: {
            args: Prisma.ExternalFactorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExternalFactorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalFactorPayload>[]
          }
          delete: {
            args: Prisma.ExternalFactorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalFactorPayload>
          }
          update: {
            args: Prisma.ExternalFactorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalFactorPayload>
          }
          deleteMany: {
            args: Prisma.ExternalFactorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExternalFactorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExternalFactorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalFactorPayload>
          }
          aggregate: {
            args: Prisma.ExternalFactorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExternalFactor>
          }
          groupBy: {
            args: Prisma.ExternalFactorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExternalFactorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternalFactorCountArgs<ExtArgs>
            result: $Utils.Optional<ExternalFactorCountAggregateOutputType> | number
          }
        }
      }
      MachineExternalFactor: {
        payload: Prisma.$MachineExternalFactorPayload<ExtArgs>
        fields: Prisma.MachineExternalFactorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MachineExternalFactorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineExternalFactorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MachineExternalFactorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineExternalFactorPayload>
          }
          findFirst: {
            args: Prisma.MachineExternalFactorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineExternalFactorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MachineExternalFactorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineExternalFactorPayload>
          }
          findMany: {
            args: Prisma.MachineExternalFactorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineExternalFactorPayload>[]
          }
          create: {
            args: Prisma.MachineExternalFactorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineExternalFactorPayload>
          }
          createMany: {
            args: Prisma.MachineExternalFactorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MachineExternalFactorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineExternalFactorPayload>[]
          }
          delete: {
            args: Prisma.MachineExternalFactorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineExternalFactorPayload>
          }
          update: {
            args: Prisma.MachineExternalFactorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineExternalFactorPayload>
          }
          deleteMany: {
            args: Prisma.MachineExternalFactorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MachineExternalFactorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MachineExternalFactorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineExternalFactorPayload>
          }
          aggregate: {
            args: Prisma.MachineExternalFactorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMachineExternalFactor>
          }
          groupBy: {
            args: Prisma.MachineExternalFactorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MachineExternalFactorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MachineExternalFactorCountArgs<ExtArgs>
            result: $Utils.Optional<MachineExternalFactorCountAggregateOutputType> | number
          }
        }
      }
      Machine: {
        payload: Prisma.$MachinePayload<ExtArgs>
        fields: Prisma.MachineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MachineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MachineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          findFirst: {
            args: Prisma.MachineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MachineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          findMany: {
            args: Prisma.MachineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>[]
          }
          create: {
            args: Prisma.MachineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          createMany: {
            args: Prisma.MachineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MachineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>[]
          }
          delete: {
            args: Prisma.MachineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          update: {
            args: Prisma.MachineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          deleteMany: {
            args: Prisma.MachineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MachineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MachineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          aggregate: {
            args: Prisma.MachineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMachine>
          }
          groupBy: {
            args: Prisma.MachineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MachineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MachineCountArgs<ExtArgs>
            result: $Utils.Optional<MachineCountAggregateOutputType> | number
          }
        }
      }
      MaterialFlow: {
        payload: Prisma.$MaterialFlowPayload<ExtArgs>
        fields: Prisma.MaterialFlowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFlowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFlowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFlowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFlowPayload>
          }
          findFirst: {
            args: Prisma.MaterialFlowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFlowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFlowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFlowPayload>
          }
          findMany: {
            args: Prisma.MaterialFlowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFlowPayload>[]
          }
          create: {
            args: Prisma.MaterialFlowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFlowPayload>
          }
          createMany: {
            args: Prisma.MaterialFlowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialFlowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFlowPayload>[]
          }
          delete: {
            args: Prisma.MaterialFlowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFlowPayload>
          }
          update: {
            args: Prisma.MaterialFlowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFlowPayload>
          }
          deleteMany: {
            args: Prisma.MaterialFlowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialFlowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaterialFlowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFlowPayload>
          }
          aggregate: {
            args: Prisma.MaterialFlowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterialFlow>
          }
          groupBy: {
            args: Prisma.MaterialFlowGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialFlowGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialFlowCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialFlowCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    plants: number
    machines: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plants?: boolean | UserCountOutputTypeCountPlantsArgs
    machines?: boolean | UserCountOutputTypeCountMachinesArgs
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
  export type UserCountOutputTypeCountPlantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMachinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineWhereInput
  }


  /**
   * Count Type PlantCountOutputType
   */

  export type PlantCountOutputType = {
    users: number
    machines: number
    materialFlows: number
  }

  export type PlantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PlantCountOutputTypeCountUsersArgs
    machines?: boolean | PlantCountOutputTypeCountMachinesArgs
    materialFlows?: boolean | PlantCountOutputTypeCountMaterialFlowsArgs
  }

  // Custom InputTypes
  /**
   * PlantCountOutputType without action
   */
  export type PlantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantCountOutputType
     */
    select?: PlantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlantCountOutputType without action
   */
  export type PlantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlantWhereInput
  }

  /**
   * PlantCountOutputType without action
   */
  export type PlantCountOutputTypeCountMachinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineWhereInput
  }

  /**
   * PlantCountOutputType without action
   */
  export type PlantCountOutputTypeCountMaterialFlowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialFlowWhereInput
  }


  /**
   * Count Type MachineTypeCountOutputType
   */

  export type MachineTypeCountOutputType = {
    machines: number
  }

  export type MachineTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machines?: boolean | MachineTypeCountOutputTypeCountMachinesArgs
  }

  // Custom InputTypes
  /**
   * MachineTypeCountOutputType without action
   */
  export type MachineTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineTypeCountOutputType
     */
    select?: MachineTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MachineTypeCountOutputType without action
   */
  export type MachineTypeCountOutputTypeCountMachinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineWhereInput
  }


  /**
   * Count Type ExternalFactorCountOutputType
   */

  export type ExternalFactorCountOutputType = {
    producers: number
    sensitives: number
  }

  export type ExternalFactorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producers?: boolean | ExternalFactorCountOutputTypeCountProducersArgs
    sensitives?: boolean | ExternalFactorCountOutputTypeCountSensitivesArgs
  }

  // Custom InputTypes
  /**
   * ExternalFactorCountOutputType without action
   */
  export type ExternalFactorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactorCountOutputType
     */
    select?: ExternalFactorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExternalFactorCountOutputType without action
   */
  export type ExternalFactorCountOutputTypeCountProducersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineExternalFactorWhereInput
  }

  /**
   * ExternalFactorCountOutputType without action
   */
  export type ExternalFactorCountOutputTypeCountSensitivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineExternalFactorWhereInput
  }


  /**
   * Count Type MachineCountOutputType
   */

  export type MachineCountOutputType = {
    factors: number
    flowSources: number
    flowDestinations: number
  }

  export type MachineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factors?: boolean | MachineCountOutputTypeCountFactorsArgs
    flowSources?: boolean | MachineCountOutputTypeCountFlowSourcesArgs
    flowDestinations?: boolean | MachineCountOutputTypeCountFlowDestinationsArgs
  }

  // Custom InputTypes
  /**
   * MachineCountOutputType without action
   */
  export type MachineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineCountOutputType
     */
    select?: MachineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MachineCountOutputType without action
   */
  export type MachineCountOutputTypeCountFactorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineExternalFactorWhereInput
  }

  /**
   * MachineCountOutputType without action
   */
  export type MachineCountOutputTypeCountFlowSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialFlowWhereInput
  }

  /**
   * MachineCountOutputType without action
   */
  export type MachineCountOutputTypeCountFlowDestinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialFlowWhereInput
  }


  /**
   * Models
   */

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
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    isAdmin: number
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
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    isAdmin?: true
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
    firstName: string
    lastName: string
    email: string
    password: string
    isAdmin: boolean
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
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plants?: boolean | User$plantsArgs<ExtArgs>
    machines?: boolean | User$machinesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plants?: boolean | User$plantsArgs<ExtArgs>
    machines?: boolean | User$machinesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      plants: Prisma.$UserPlantPayload<ExtArgs>[]
      machines: Prisma.$MachinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string
      isAdmin: boolean
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
    plants<T extends User$plantsArgs<ExtArgs> = {}>(args?: Subset<T, User$plantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlantPayload<ExtArgs>, T, "findMany"> | Null>
    machines<T extends User$machinesArgs<ExtArgs> = {}>(args?: Subset<T, User$machinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
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
   * User.plants
   */
  export type User$plantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlant
     */
    select?: UserPlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlantInclude<ExtArgs> | null
    where?: UserPlantWhereInput
    orderBy?: UserPlantOrderByWithRelationInput | UserPlantOrderByWithRelationInput[]
    cursor?: UserPlantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPlantScalarFieldEnum | UserPlantScalarFieldEnum[]
  }

  /**
   * User.machines
   */
  export type User$machinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    where?: MachineWhereInput
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    cursor?: MachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
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
   * Model UserPlant
   */

  export type AggregateUserPlant = {
    _count: UserPlantCountAggregateOutputType | null
    _avg: UserPlantAvgAggregateOutputType | null
    _sum: UserPlantSumAggregateOutputType | null
    _min: UserPlantMinAggregateOutputType | null
    _max: UserPlantMaxAggregateOutputType | null
  }

  export type UserPlantAvgAggregateOutputType = {
    userId: number | null
    plantId: number | null
  }

  export type UserPlantSumAggregateOutputType = {
    userId: number | null
    plantId: number | null
  }

  export type UserPlantMinAggregateOutputType = {
    userId: number | null
    plantId: number | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPlantMaxAggregateOutputType = {
    userId: number | null
    plantId: number | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPlantCountAggregateOutputType = {
    userId: number
    plantId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPlantAvgAggregateInputType = {
    userId?: true
    plantId?: true
  }

  export type UserPlantSumAggregateInputType = {
    userId?: true
    plantId?: true
  }

  export type UserPlantMinAggregateInputType = {
    userId?: true
    plantId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPlantMaxAggregateInputType = {
    userId?: true
    plantId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPlantCountAggregateInputType = {
    userId?: true
    plantId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPlantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPlant to aggregate.
     */
    where?: UserPlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlants to fetch.
     */
    orderBy?: UserPlantOrderByWithRelationInput | UserPlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPlants
    **/
    _count?: true | UserPlantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPlantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPlantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPlantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPlantMaxAggregateInputType
  }

  export type GetUserPlantAggregateType<T extends UserPlantAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPlant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPlant[P]>
      : GetScalarType<T[P], AggregateUserPlant[P]>
  }




  export type UserPlantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlantWhereInput
    orderBy?: UserPlantOrderByWithAggregationInput | UserPlantOrderByWithAggregationInput[]
    by: UserPlantScalarFieldEnum[] | UserPlantScalarFieldEnum
    having?: UserPlantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPlantCountAggregateInputType | true
    _avg?: UserPlantAvgAggregateInputType
    _sum?: UserPlantSumAggregateInputType
    _min?: UserPlantMinAggregateInputType
    _max?: UserPlantMaxAggregateInputType
  }

  export type UserPlantGroupByOutputType = {
    userId: number
    plantId: number
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserPlantCountAggregateOutputType | null
    _avg: UserPlantAvgAggregateOutputType | null
    _sum: UserPlantSumAggregateOutputType | null
    _min: UserPlantMinAggregateOutputType | null
    _max: UserPlantMaxAggregateOutputType | null
  }

  type GetUserPlantGroupByPayload<T extends UserPlantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPlantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPlantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPlantGroupByOutputType[P]>
            : GetScalarType<T[P], UserPlantGroupByOutputType[P]>
        }
      >
    >


  export type UserPlantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    plantId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plant?: boolean | PlantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPlant"]>

  export type UserPlantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    plantId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plant?: boolean | PlantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPlant"]>

  export type UserPlantSelectScalar = {
    userId?: boolean
    plantId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPlantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plant?: boolean | PlantDefaultArgs<ExtArgs>
  }
  export type UserPlantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plant?: boolean | PlantDefaultArgs<ExtArgs>
  }

  export type $UserPlantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPlant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plant: Prisma.$PlantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      plantId: number
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPlant"]>
    composites: {}
  }

  type UserPlantGetPayload<S extends boolean | null | undefined | UserPlantDefaultArgs> = $Result.GetResult<Prisma.$UserPlantPayload, S>

  type UserPlantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPlantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPlantCountAggregateInputType | true
    }

  export interface UserPlantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPlant'], meta: { name: 'UserPlant' } }
    /**
     * Find zero or one UserPlant that matches the filter.
     * @param {UserPlantFindUniqueArgs} args - Arguments to find a UserPlant
     * @example
     * // Get one UserPlant
     * const userPlant = await prisma.userPlant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPlantFindUniqueArgs>(args: SelectSubset<T, UserPlantFindUniqueArgs<ExtArgs>>): Prisma__UserPlantClient<$Result.GetResult<Prisma.$UserPlantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserPlant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserPlantFindUniqueOrThrowArgs} args - Arguments to find a UserPlant
     * @example
     * // Get one UserPlant
     * const userPlant = await prisma.userPlant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPlantFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPlantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPlantClient<$Result.GetResult<Prisma.$UserPlantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserPlant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlantFindFirstArgs} args - Arguments to find a UserPlant
     * @example
     * // Get one UserPlant
     * const userPlant = await prisma.userPlant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPlantFindFirstArgs>(args?: SelectSubset<T, UserPlantFindFirstArgs<ExtArgs>>): Prisma__UserPlantClient<$Result.GetResult<Prisma.$UserPlantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserPlant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlantFindFirstOrThrowArgs} args - Arguments to find a UserPlant
     * @example
     * // Get one UserPlant
     * const userPlant = await prisma.userPlant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPlantFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPlantFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPlantClient<$Result.GetResult<Prisma.$UserPlantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserPlants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPlants
     * const userPlants = await prisma.userPlant.findMany()
     * 
     * // Get first 10 UserPlants
     * const userPlants = await prisma.userPlant.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userPlantWithUserIdOnly = await prisma.userPlant.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserPlantFindManyArgs>(args?: SelectSubset<T, UserPlantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserPlant.
     * @param {UserPlantCreateArgs} args - Arguments to create a UserPlant.
     * @example
     * // Create one UserPlant
     * const UserPlant = await prisma.userPlant.create({
     *   data: {
     *     // ... data to create a UserPlant
     *   }
     * })
     * 
     */
    create<T extends UserPlantCreateArgs>(args: SelectSubset<T, UserPlantCreateArgs<ExtArgs>>): Prisma__UserPlantClient<$Result.GetResult<Prisma.$UserPlantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserPlants.
     * @param {UserPlantCreateManyArgs} args - Arguments to create many UserPlants.
     * @example
     * // Create many UserPlants
     * const userPlant = await prisma.userPlant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPlantCreateManyArgs>(args?: SelectSubset<T, UserPlantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPlants and returns the data saved in the database.
     * @param {UserPlantCreateManyAndReturnArgs} args - Arguments to create many UserPlants.
     * @example
     * // Create many UserPlants
     * const userPlant = await prisma.userPlant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPlants and only return the `userId`
     * const userPlantWithUserIdOnly = await prisma.userPlant.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPlantCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPlantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserPlant.
     * @param {UserPlantDeleteArgs} args - Arguments to delete one UserPlant.
     * @example
     * // Delete one UserPlant
     * const UserPlant = await prisma.userPlant.delete({
     *   where: {
     *     // ... filter to delete one UserPlant
     *   }
     * })
     * 
     */
    delete<T extends UserPlantDeleteArgs>(args: SelectSubset<T, UserPlantDeleteArgs<ExtArgs>>): Prisma__UserPlantClient<$Result.GetResult<Prisma.$UserPlantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserPlant.
     * @param {UserPlantUpdateArgs} args - Arguments to update one UserPlant.
     * @example
     * // Update one UserPlant
     * const userPlant = await prisma.userPlant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPlantUpdateArgs>(args: SelectSubset<T, UserPlantUpdateArgs<ExtArgs>>): Prisma__UserPlantClient<$Result.GetResult<Prisma.$UserPlantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserPlants.
     * @param {UserPlantDeleteManyArgs} args - Arguments to filter UserPlants to delete.
     * @example
     * // Delete a few UserPlants
     * const { count } = await prisma.userPlant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPlantDeleteManyArgs>(args?: SelectSubset<T, UserPlantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPlants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPlants
     * const userPlant = await prisma.userPlant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPlantUpdateManyArgs>(args: SelectSubset<T, UserPlantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPlant.
     * @param {UserPlantUpsertArgs} args - Arguments to update or create a UserPlant.
     * @example
     * // Update or create a UserPlant
     * const userPlant = await prisma.userPlant.upsert({
     *   create: {
     *     // ... data to create a UserPlant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPlant we want to update
     *   }
     * })
     */
    upsert<T extends UserPlantUpsertArgs>(args: SelectSubset<T, UserPlantUpsertArgs<ExtArgs>>): Prisma__UserPlantClient<$Result.GetResult<Prisma.$UserPlantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserPlants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlantCountArgs} args - Arguments to filter UserPlants to count.
     * @example
     * // Count the number of UserPlants
     * const count = await prisma.userPlant.count({
     *   where: {
     *     // ... the filter for the UserPlants we want to count
     *   }
     * })
    **/
    count<T extends UserPlantCountArgs>(
      args?: Subset<T, UserPlantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPlantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPlant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPlantAggregateArgs>(args: Subset<T, UserPlantAggregateArgs>): Prisma.PrismaPromise<GetUserPlantAggregateType<T>>

    /**
     * Group by UserPlant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlantGroupByArgs} args - Group by arguments.
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
      T extends UserPlantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPlantGroupByArgs['orderBy'] }
        : { orderBy?: UserPlantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPlantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPlantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPlant model
   */
  readonly fields: UserPlantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPlant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPlantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plant<T extends PlantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantDefaultArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserPlant model
   */ 
  interface UserPlantFieldRefs {
    readonly userId: FieldRef<"UserPlant", 'Int'>
    readonly plantId: FieldRef<"UserPlant", 'Int'>
    readonly role: FieldRef<"UserPlant", 'String'>
    readonly createdAt: FieldRef<"UserPlant", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPlant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPlant findUnique
   */
  export type UserPlantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlant
     */
    select?: UserPlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlantInclude<ExtArgs> | null
    /**
     * Filter, which UserPlant to fetch.
     */
    where: UserPlantWhereUniqueInput
  }

  /**
   * UserPlant findUniqueOrThrow
   */
  export type UserPlantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlant
     */
    select?: UserPlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlantInclude<ExtArgs> | null
    /**
     * Filter, which UserPlant to fetch.
     */
    where: UserPlantWhereUniqueInput
  }

  /**
   * UserPlant findFirst
   */
  export type UserPlantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlant
     */
    select?: UserPlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlantInclude<ExtArgs> | null
    /**
     * Filter, which UserPlant to fetch.
     */
    where?: UserPlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlants to fetch.
     */
    orderBy?: UserPlantOrderByWithRelationInput | UserPlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPlants.
     */
    cursor?: UserPlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPlants.
     */
    distinct?: UserPlantScalarFieldEnum | UserPlantScalarFieldEnum[]
  }

  /**
   * UserPlant findFirstOrThrow
   */
  export type UserPlantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlant
     */
    select?: UserPlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlantInclude<ExtArgs> | null
    /**
     * Filter, which UserPlant to fetch.
     */
    where?: UserPlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlants to fetch.
     */
    orderBy?: UserPlantOrderByWithRelationInput | UserPlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPlants.
     */
    cursor?: UserPlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPlants.
     */
    distinct?: UserPlantScalarFieldEnum | UserPlantScalarFieldEnum[]
  }

  /**
   * UserPlant findMany
   */
  export type UserPlantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlant
     */
    select?: UserPlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlantInclude<ExtArgs> | null
    /**
     * Filter, which UserPlants to fetch.
     */
    where?: UserPlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlants to fetch.
     */
    orderBy?: UserPlantOrderByWithRelationInput | UserPlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPlants.
     */
    cursor?: UserPlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlants.
     */
    skip?: number
    distinct?: UserPlantScalarFieldEnum | UserPlantScalarFieldEnum[]
  }

  /**
   * UserPlant create
   */
  export type UserPlantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlant
     */
    select?: UserPlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlantInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPlant.
     */
    data: XOR<UserPlantCreateInput, UserPlantUncheckedCreateInput>
  }

  /**
   * UserPlant createMany
   */
  export type UserPlantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPlants.
     */
    data: UserPlantCreateManyInput | UserPlantCreateManyInput[]
  }

  /**
   * UserPlant createManyAndReturn
   */
  export type UserPlantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlant
     */
    select?: UserPlantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserPlants.
     */
    data: UserPlantCreateManyInput | UserPlantCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPlant update
   */
  export type UserPlantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlant
     */
    select?: UserPlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlantInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPlant.
     */
    data: XOR<UserPlantUpdateInput, UserPlantUncheckedUpdateInput>
    /**
     * Choose, which UserPlant to update.
     */
    where: UserPlantWhereUniqueInput
  }

  /**
   * UserPlant updateMany
   */
  export type UserPlantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPlants.
     */
    data: XOR<UserPlantUpdateManyMutationInput, UserPlantUncheckedUpdateManyInput>
    /**
     * Filter which UserPlants to update
     */
    where?: UserPlantWhereInput
  }

  /**
   * UserPlant upsert
   */
  export type UserPlantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlant
     */
    select?: UserPlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlantInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPlant to update in case it exists.
     */
    where: UserPlantWhereUniqueInput
    /**
     * In case the UserPlant found by the `where` argument doesn't exist, create a new UserPlant with this data.
     */
    create: XOR<UserPlantCreateInput, UserPlantUncheckedCreateInput>
    /**
     * In case the UserPlant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPlantUpdateInput, UserPlantUncheckedUpdateInput>
  }

  /**
   * UserPlant delete
   */
  export type UserPlantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlant
     */
    select?: UserPlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlantInclude<ExtArgs> | null
    /**
     * Filter which UserPlant to delete.
     */
    where: UserPlantWhereUniqueInput
  }

  /**
   * UserPlant deleteMany
   */
  export type UserPlantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPlants to delete
     */
    where?: UserPlantWhereInput
  }

  /**
   * UserPlant without action
   */
  export type UserPlantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlant
     */
    select?: UserPlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlantInclude<ExtArgs> | null
  }


  /**
   * Model Plant
   */

  export type AggregatePlant = {
    _count: PlantCountAggregateOutputType | null
    _avg: PlantAvgAggregateOutputType | null
    _sum: PlantSumAggregateOutputType | null
    _min: PlantMinAggregateOutputType | null
    _max: PlantMaxAggregateOutputType | null
  }

  export type PlantAvgAggregateOutputType = {
    id: number | null
    length: number | null
    width: number | null
    height: number | null
  }

  export type PlantSumAggregateOutputType = {
    id: number | null
    length: number | null
    width: number | null
    height: number | null
  }

  export type PlantMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    length: number | null
    width: number | null
    height: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    length: number | null
    width: number | null
    height: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlantCountAggregateOutputType = {
    id: number
    name: number
    description: number
    length: number
    width: number
    height: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlantAvgAggregateInputType = {
    id?: true
    length?: true
    width?: true
    height?: true
  }

  export type PlantSumAggregateInputType = {
    id?: true
    length?: true
    width?: true
    height?: true
  }

  export type PlantMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    length?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlantMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    length?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlantCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    length?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plant to aggregate.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plants
    **/
    _count?: true | PlantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantMaxAggregateInputType
  }

  export type GetPlantAggregateType<T extends PlantAggregateArgs> = {
        [P in keyof T & keyof AggregatePlant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlant[P]>
      : GetScalarType<T[P], AggregatePlant[P]>
  }




  export type PlantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantWhereInput
    orderBy?: PlantOrderByWithAggregationInput | PlantOrderByWithAggregationInput[]
    by: PlantScalarFieldEnum[] | PlantScalarFieldEnum
    having?: PlantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantCountAggregateInputType | true
    _avg?: PlantAvgAggregateInputType
    _sum?: PlantSumAggregateInputType
    _min?: PlantMinAggregateInputType
    _max?: PlantMaxAggregateInputType
  }

  export type PlantGroupByOutputType = {
    id: number
    name: string
    description: string | null
    length: number
    width: number
    height: number
    createdAt: Date
    updatedAt: Date
    _count: PlantCountAggregateOutputType | null
    _avg: PlantAvgAggregateOutputType | null
    _sum: PlantSumAggregateOutputType | null
    _min: PlantMinAggregateOutputType | null
    _max: PlantMaxAggregateOutputType | null
  }

  type GetPlantGroupByPayload<T extends PlantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantGroupByOutputType[P]>
            : GetScalarType<T[P], PlantGroupByOutputType[P]>
        }
      >
    >


  export type PlantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Plant$usersArgs<ExtArgs>
    machines?: boolean | Plant$machinesArgs<ExtArgs>
    materialFlows?: boolean | Plant$materialFlowsArgs<ExtArgs>
    _count?: boolean | PlantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plant"]>

  export type PlantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plant"]>

  export type PlantSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Plant$usersArgs<ExtArgs>
    machines?: boolean | Plant$machinesArgs<ExtArgs>
    materialFlows?: boolean | Plant$materialFlowsArgs<ExtArgs>
    _count?: boolean | PlantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plant"
    objects: {
      users: Prisma.$UserPlantPayload<ExtArgs>[]
      machines: Prisma.$MachinePayload<ExtArgs>[]
      materialFlows: Prisma.$MaterialFlowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      length: number
      width: number
      height: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plant"]>
    composites: {}
  }

  type PlantGetPayload<S extends boolean | null | undefined | PlantDefaultArgs> = $Result.GetResult<Prisma.$PlantPayload, S>

  type PlantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlantCountAggregateInputType | true
    }

  export interface PlantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plant'], meta: { name: 'Plant' } }
    /**
     * Find zero or one Plant that matches the filter.
     * @param {PlantFindUniqueArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantFindUniqueArgs>(args: SelectSubset<T, PlantFindUniqueArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Plant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlantFindUniqueOrThrowArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Plant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindFirstArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantFindFirstArgs>(args?: SelectSubset<T, PlantFindFirstArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Plant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindFirstOrThrowArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Plants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plants
     * const plants = await prisma.plant.findMany()
     * 
     * // Get first 10 Plants
     * const plants = await prisma.plant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantWithIdOnly = await prisma.plant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantFindManyArgs>(args?: SelectSubset<T, PlantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Plant.
     * @param {PlantCreateArgs} args - Arguments to create a Plant.
     * @example
     * // Create one Plant
     * const Plant = await prisma.plant.create({
     *   data: {
     *     // ... data to create a Plant
     *   }
     * })
     * 
     */
    create<T extends PlantCreateArgs>(args: SelectSubset<T, PlantCreateArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Plants.
     * @param {PlantCreateManyArgs} args - Arguments to create many Plants.
     * @example
     * // Create many Plants
     * const plant = await prisma.plant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantCreateManyArgs>(args?: SelectSubset<T, PlantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plants and returns the data saved in the database.
     * @param {PlantCreateManyAndReturnArgs} args - Arguments to create many Plants.
     * @example
     * // Create many Plants
     * const plant = await prisma.plant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plants and only return the `id`
     * const plantWithIdOnly = await prisma.plant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Plant.
     * @param {PlantDeleteArgs} args - Arguments to delete one Plant.
     * @example
     * // Delete one Plant
     * const Plant = await prisma.plant.delete({
     *   where: {
     *     // ... filter to delete one Plant
     *   }
     * })
     * 
     */
    delete<T extends PlantDeleteArgs>(args: SelectSubset<T, PlantDeleteArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Plant.
     * @param {PlantUpdateArgs} args - Arguments to update one Plant.
     * @example
     * // Update one Plant
     * const plant = await prisma.plant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantUpdateArgs>(args: SelectSubset<T, PlantUpdateArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Plants.
     * @param {PlantDeleteManyArgs} args - Arguments to filter Plants to delete.
     * @example
     * // Delete a few Plants
     * const { count } = await prisma.plant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantDeleteManyArgs>(args?: SelectSubset<T, PlantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plants
     * const plant = await prisma.plant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantUpdateManyArgs>(args: SelectSubset<T, PlantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plant.
     * @param {PlantUpsertArgs} args - Arguments to update or create a Plant.
     * @example
     * // Update or create a Plant
     * const plant = await prisma.plant.upsert({
     *   create: {
     *     // ... data to create a Plant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plant we want to update
     *   }
     * })
     */
    upsert<T extends PlantUpsertArgs>(args: SelectSubset<T, PlantUpsertArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantCountArgs} args - Arguments to filter Plants to count.
     * @example
     * // Count the number of Plants
     * const count = await prisma.plant.count({
     *   where: {
     *     // ... the filter for the Plants we want to count
     *   }
     * })
    **/
    count<T extends PlantCountArgs>(
      args?: Subset<T, PlantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlantAggregateArgs>(args: Subset<T, PlantAggregateArgs>): Prisma.PrismaPromise<GetPlantAggregateType<T>>

    /**
     * Group by Plant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantGroupByArgs} args - Group by arguments.
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
      T extends PlantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantGroupByArgs['orderBy'] }
        : { orderBy?: PlantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plant model
   */
  readonly fields: PlantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Plant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Plant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlantPayload<ExtArgs>, T, "findMany"> | Null>
    machines<T extends Plant$machinesArgs<ExtArgs> = {}>(args?: Subset<T, Plant$machinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findMany"> | Null>
    materialFlows<T extends Plant$materialFlowsArgs<ExtArgs> = {}>(args?: Subset<T, Plant$materialFlowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialFlowPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Plant model
   */ 
  interface PlantFieldRefs {
    readonly id: FieldRef<"Plant", 'Int'>
    readonly name: FieldRef<"Plant", 'String'>
    readonly description: FieldRef<"Plant", 'String'>
    readonly length: FieldRef<"Plant", 'Int'>
    readonly width: FieldRef<"Plant", 'Int'>
    readonly height: FieldRef<"Plant", 'Int'>
    readonly createdAt: FieldRef<"Plant", 'DateTime'>
    readonly updatedAt: FieldRef<"Plant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plant findUnique
   */
  export type PlantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where: PlantWhereUniqueInput
  }

  /**
   * Plant findUniqueOrThrow
   */
  export type PlantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where: PlantWhereUniqueInput
  }

  /**
   * Plant findFirst
   */
  export type PlantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plants.
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plants.
     */
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }

  /**
   * Plant findFirstOrThrow
   */
  export type PlantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plants.
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plants.
     */
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }

  /**
   * Plant findMany
   */
  export type PlantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plants to fetch.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plants.
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }

  /**
   * Plant create
   */
  export type PlantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * The data needed to create a Plant.
     */
    data: XOR<PlantCreateInput, PlantUncheckedCreateInput>
  }

  /**
   * Plant createMany
   */
  export type PlantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plants.
     */
    data: PlantCreateManyInput | PlantCreateManyInput[]
  }

  /**
   * Plant createManyAndReturn
   */
  export type PlantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Plants.
     */
    data: PlantCreateManyInput | PlantCreateManyInput[]
  }

  /**
   * Plant update
   */
  export type PlantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * The data needed to update a Plant.
     */
    data: XOR<PlantUpdateInput, PlantUncheckedUpdateInput>
    /**
     * Choose, which Plant to update.
     */
    where: PlantWhereUniqueInput
  }

  /**
   * Plant updateMany
   */
  export type PlantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plants.
     */
    data: XOR<PlantUpdateManyMutationInput, PlantUncheckedUpdateManyInput>
    /**
     * Filter which Plants to update
     */
    where?: PlantWhereInput
  }

  /**
   * Plant upsert
   */
  export type PlantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * The filter to search for the Plant to update in case it exists.
     */
    where: PlantWhereUniqueInput
    /**
     * In case the Plant found by the `where` argument doesn't exist, create a new Plant with this data.
     */
    create: XOR<PlantCreateInput, PlantUncheckedCreateInput>
    /**
     * In case the Plant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantUpdateInput, PlantUncheckedUpdateInput>
  }

  /**
   * Plant delete
   */
  export type PlantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter which Plant to delete.
     */
    where: PlantWhereUniqueInput
  }

  /**
   * Plant deleteMany
   */
  export type PlantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plants to delete
     */
    where?: PlantWhereInput
  }

  /**
   * Plant.users
   */
  export type Plant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlant
     */
    select?: UserPlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlantInclude<ExtArgs> | null
    where?: UserPlantWhereInput
    orderBy?: UserPlantOrderByWithRelationInput | UserPlantOrderByWithRelationInput[]
    cursor?: UserPlantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPlantScalarFieldEnum | UserPlantScalarFieldEnum[]
  }

  /**
   * Plant.machines
   */
  export type Plant$machinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    where?: MachineWhereInput
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    cursor?: MachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
  }

  /**
   * Plant.materialFlows
   */
  export type Plant$materialFlowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowInclude<ExtArgs> | null
    where?: MaterialFlowWhereInput
    orderBy?: MaterialFlowOrderByWithRelationInput | MaterialFlowOrderByWithRelationInput[]
    cursor?: MaterialFlowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialFlowScalarFieldEnum | MaterialFlowScalarFieldEnum[]
  }

  /**
   * Plant without action
   */
  export type PlantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
  }


  /**
   * Model MachineType
   */

  export type AggregateMachineType = {
    _count: MachineTypeCountAggregateOutputType | null
    _avg: MachineTypeAvgAggregateOutputType | null
    _sum: MachineTypeSumAggregateOutputType | null
    _min: MachineTypeMinAggregateOutputType | null
    _max: MachineTypeMaxAggregateOutputType | null
  }

  export type MachineTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type MachineTypeSumAggregateOutputType = {
    id: number | null
  }

  export type MachineTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MachineTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MachineTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MachineTypeAvgAggregateInputType = {
    id?: true
  }

  export type MachineTypeSumAggregateInputType = {
    id?: true
  }

  export type MachineTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MachineTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MachineTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MachineTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MachineType to aggregate.
     */
    where?: MachineTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineTypes to fetch.
     */
    orderBy?: MachineTypeOrderByWithRelationInput | MachineTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MachineTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MachineTypes
    **/
    _count?: true | MachineTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MachineTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MachineTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MachineTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MachineTypeMaxAggregateInputType
  }

  export type GetMachineTypeAggregateType<T extends MachineTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMachineType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMachineType[P]>
      : GetScalarType<T[P], AggregateMachineType[P]>
  }




  export type MachineTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineTypeWhereInput
    orderBy?: MachineTypeOrderByWithAggregationInput | MachineTypeOrderByWithAggregationInput[]
    by: MachineTypeScalarFieldEnum[] | MachineTypeScalarFieldEnum
    having?: MachineTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MachineTypeCountAggregateInputType | true
    _avg?: MachineTypeAvgAggregateInputType
    _sum?: MachineTypeSumAggregateInputType
    _min?: MachineTypeMinAggregateInputType
    _max?: MachineTypeMaxAggregateInputType
  }

  export type MachineTypeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: MachineTypeCountAggregateOutputType | null
    _avg: MachineTypeAvgAggregateOutputType | null
    _sum: MachineTypeSumAggregateOutputType | null
    _min: MachineTypeMinAggregateOutputType | null
    _max: MachineTypeMaxAggregateOutputType | null
  }

  type GetMachineTypeGroupByPayload<T extends MachineTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MachineTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MachineTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MachineTypeGroupByOutputType[P]>
            : GetScalarType<T[P], MachineTypeGroupByOutputType[P]>
        }
      >
    >


  export type MachineTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    machines?: boolean | MachineType$machinesArgs<ExtArgs>
    _count?: boolean | MachineTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["machineType"]>

  export type MachineTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["machineType"]>

  export type MachineTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MachineTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machines?: boolean | MachineType$machinesArgs<ExtArgs>
    _count?: boolean | MachineTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MachineTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MachineTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MachineType"
    objects: {
      machines: Prisma.$MachinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["machineType"]>
    composites: {}
  }

  type MachineTypeGetPayload<S extends boolean | null | undefined | MachineTypeDefaultArgs> = $Result.GetResult<Prisma.$MachineTypePayload, S>

  type MachineTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MachineTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MachineTypeCountAggregateInputType | true
    }

  export interface MachineTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MachineType'], meta: { name: 'MachineType' } }
    /**
     * Find zero or one MachineType that matches the filter.
     * @param {MachineTypeFindUniqueArgs} args - Arguments to find a MachineType
     * @example
     * // Get one MachineType
     * const machineType = await prisma.machineType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MachineTypeFindUniqueArgs>(args: SelectSubset<T, MachineTypeFindUniqueArgs<ExtArgs>>): Prisma__MachineTypeClient<$Result.GetResult<Prisma.$MachineTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MachineType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MachineTypeFindUniqueOrThrowArgs} args - Arguments to find a MachineType
     * @example
     * // Get one MachineType
     * const machineType = await prisma.machineType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MachineTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, MachineTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MachineTypeClient<$Result.GetResult<Prisma.$MachineTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MachineType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineTypeFindFirstArgs} args - Arguments to find a MachineType
     * @example
     * // Get one MachineType
     * const machineType = await prisma.machineType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MachineTypeFindFirstArgs>(args?: SelectSubset<T, MachineTypeFindFirstArgs<ExtArgs>>): Prisma__MachineTypeClient<$Result.GetResult<Prisma.$MachineTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MachineType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineTypeFindFirstOrThrowArgs} args - Arguments to find a MachineType
     * @example
     * // Get one MachineType
     * const machineType = await prisma.machineType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MachineTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, MachineTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MachineTypeClient<$Result.GetResult<Prisma.$MachineTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MachineTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MachineTypes
     * const machineTypes = await prisma.machineType.findMany()
     * 
     * // Get first 10 MachineTypes
     * const machineTypes = await prisma.machineType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const machineTypeWithIdOnly = await prisma.machineType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MachineTypeFindManyArgs>(args?: SelectSubset<T, MachineTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MachineType.
     * @param {MachineTypeCreateArgs} args - Arguments to create a MachineType.
     * @example
     * // Create one MachineType
     * const MachineType = await prisma.machineType.create({
     *   data: {
     *     // ... data to create a MachineType
     *   }
     * })
     * 
     */
    create<T extends MachineTypeCreateArgs>(args: SelectSubset<T, MachineTypeCreateArgs<ExtArgs>>): Prisma__MachineTypeClient<$Result.GetResult<Prisma.$MachineTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MachineTypes.
     * @param {MachineTypeCreateManyArgs} args - Arguments to create many MachineTypes.
     * @example
     * // Create many MachineTypes
     * const machineType = await prisma.machineType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MachineTypeCreateManyArgs>(args?: SelectSubset<T, MachineTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MachineTypes and returns the data saved in the database.
     * @param {MachineTypeCreateManyAndReturnArgs} args - Arguments to create many MachineTypes.
     * @example
     * // Create many MachineTypes
     * const machineType = await prisma.machineType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MachineTypes and only return the `id`
     * const machineTypeWithIdOnly = await prisma.machineType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MachineTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, MachineTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MachineType.
     * @param {MachineTypeDeleteArgs} args - Arguments to delete one MachineType.
     * @example
     * // Delete one MachineType
     * const MachineType = await prisma.machineType.delete({
     *   where: {
     *     // ... filter to delete one MachineType
     *   }
     * })
     * 
     */
    delete<T extends MachineTypeDeleteArgs>(args: SelectSubset<T, MachineTypeDeleteArgs<ExtArgs>>): Prisma__MachineTypeClient<$Result.GetResult<Prisma.$MachineTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MachineType.
     * @param {MachineTypeUpdateArgs} args - Arguments to update one MachineType.
     * @example
     * // Update one MachineType
     * const machineType = await prisma.machineType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MachineTypeUpdateArgs>(args: SelectSubset<T, MachineTypeUpdateArgs<ExtArgs>>): Prisma__MachineTypeClient<$Result.GetResult<Prisma.$MachineTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MachineTypes.
     * @param {MachineTypeDeleteManyArgs} args - Arguments to filter MachineTypes to delete.
     * @example
     * // Delete a few MachineTypes
     * const { count } = await prisma.machineType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MachineTypeDeleteManyArgs>(args?: SelectSubset<T, MachineTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MachineTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MachineTypes
     * const machineType = await prisma.machineType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MachineTypeUpdateManyArgs>(args: SelectSubset<T, MachineTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MachineType.
     * @param {MachineTypeUpsertArgs} args - Arguments to update or create a MachineType.
     * @example
     * // Update or create a MachineType
     * const machineType = await prisma.machineType.upsert({
     *   create: {
     *     // ... data to create a MachineType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MachineType we want to update
     *   }
     * })
     */
    upsert<T extends MachineTypeUpsertArgs>(args: SelectSubset<T, MachineTypeUpsertArgs<ExtArgs>>): Prisma__MachineTypeClient<$Result.GetResult<Prisma.$MachineTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MachineTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineTypeCountArgs} args - Arguments to filter MachineTypes to count.
     * @example
     * // Count the number of MachineTypes
     * const count = await prisma.machineType.count({
     *   where: {
     *     // ... the filter for the MachineTypes we want to count
     *   }
     * })
    **/
    count<T extends MachineTypeCountArgs>(
      args?: Subset<T, MachineTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MachineTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MachineType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MachineTypeAggregateArgs>(args: Subset<T, MachineTypeAggregateArgs>): Prisma.PrismaPromise<GetMachineTypeAggregateType<T>>

    /**
     * Group by MachineType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineTypeGroupByArgs} args - Group by arguments.
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
      T extends MachineTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MachineTypeGroupByArgs['orderBy'] }
        : { orderBy?: MachineTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MachineTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMachineTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MachineType model
   */
  readonly fields: MachineTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MachineType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MachineTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machines<T extends MachineType$machinesArgs<ExtArgs> = {}>(args?: Subset<T, MachineType$machinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the MachineType model
   */ 
  interface MachineTypeFieldRefs {
    readonly id: FieldRef<"MachineType", 'Int'>
    readonly name: FieldRef<"MachineType", 'String'>
    readonly description: FieldRef<"MachineType", 'String'>
    readonly createdAt: FieldRef<"MachineType", 'DateTime'>
    readonly updatedAt: FieldRef<"MachineType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MachineType findUnique
   */
  export type MachineTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineType
     */
    select?: MachineTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineTypeInclude<ExtArgs> | null
    /**
     * Filter, which MachineType to fetch.
     */
    where: MachineTypeWhereUniqueInput
  }

  /**
   * MachineType findUniqueOrThrow
   */
  export type MachineTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineType
     */
    select?: MachineTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineTypeInclude<ExtArgs> | null
    /**
     * Filter, which MachineType to fetch.
     */
    where: MachineTypeWhereUniqueInput
  }

  /**
   * MachineType findFirst
   */
  export type MachineTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineType
     */
    select?: MachineTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineTypeInclude<ExtArgs> | null
    /**
     * Filter, which MachineType to fetch.
     */
    where?: MachineTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineTypes to fetch.
     */
    orderBy?: MachineTypeOrderByWithRelationInput | MachineTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MachineTypes.
     */
    cursor?: MachineTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MachineTypes.
     */
    distinct?: MachineTypeScalarFieldEnum | MachineTypeScalarFieldEnum[]
  }

  /**
   * MachineType findFirstOrThrow
   */
  export type MachineTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineType
     */
    select?: MachineTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineTypeInclude<ExtArgs> | null
    /**
     * Filter, which MachineType to fetch.
     */
    where?: MachineTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineTypes to fetch.
     */
    orderBy?: MachineTypeOrderByWithRelationInput | MachineTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MachineTypes.
     */
    cursor?: MachineTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MachineTypes.
     */
    distinct?: MachineTypeScalarFieldEnum | MachineTypeScalarFieldEnum[]
  }

  /**
   * MachineType findMany
   */
  export type MachineTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineType
     */
    select?: MachineTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineTypeInclude<ExtArgs> | null
    /**
     * Filter, which MachineTypes to fetch.
     */
    where?: MachineTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineTypes to fetch.
     */
    orderBy?: MachineTypeOrderByWithRelationInput | MachineTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MachineTypes.
     */
    cursor?: MachineTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineTypes.
     */
    skip?: number
    distinct?: MachineTypeScalarFieldEnum | MachineTypeScalarFieldEnum[]
  }

  /**
   * MachineType create
   */
  export type MachineTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineType
     */
    select?: MachineTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a MachineType.
     */
    data: XOR<MachineTypeCreateInput, MachineTypeUncheckedCreateInput>
  }

  /**
   * MachineType createMany
   */
  export type MachineTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MachineTypes.
     */
    data: MachineTypeCreateManyInput | MachineTypeCreateManyInput[]
  }

  /**
   * MachineType createManyAndReturn
   */
  export type MachineTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineType
     */
    select?: MachineTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MachineTypes.
     */
    data: MachineTypeCreateManyInput | MachineTypeCreateManyInput[]
  }

  /**
   * MachineType update
   */
  export type MachineTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineType
     */
    select?: MachineTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a MachineType.
     */
    data: XOR<MachineTypeUpdateInput, MachineTypeUncheckedUpdateInput>
    /**
     * Choose, which MachineType to update.
     */
    where: MachineTypeWhereUniqueInput
  }

  /**
   * MachineType updateMany
   */
  export type MachineTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MachineTypes.
     */
    data: XOR<MachineTypeUpdateManyMutationInput, MachineTypeUncheckedUpdateManyInput>
    /**
     * Filter which MachineTypes to update
     */
    where?: MachineTypeWhereInput
  }

  /**
   * MachineType upsert
   */
  export type MachineTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineType
     */
    select?: MachineTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the MachineType to update in case it exists.
     */
    where: MachineTypeWhereUniqueInput
    /**
     * In case the MachineType found by the `where` argument doesn't exist, create a new MachineType with this data.
     */
    create: XOR<MachineTypeCreateInput, MachineTypeUncheckedCreateInput>
    /**
     * In case the MachineType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MachineTypeUpdateInput, MachineTypeUncheckedUpdateInput>
  }

  /**
   * MachineType delete
   */
  export type MachineTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineType
     */
    select?: MachineTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineTypeInclude<ExtArgs> | null
    /**
     * Filter which MachineType to delete.
     */
    where: MachineTypeWhereUniqueInput
  }

  /**
   * MachineType deleteMany
   */
  export type MachineTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MachineTypes to delete
     */
    where?: MachineTypeWhereInput
  }

  /**
   * MachineType.machines
   */
  export type MachineType$machinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    where?: MachineWhereInput
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    cursor?: MachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
  }

  /**
   * MachineType without action
   */
  export type MachineTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineType
     */
    select?: MachineTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineTypeInclude<ExtArgs> | null
  }


  /**
   * Model ExternalFactor
   */

  export type AggregateExternalFactor = {
    _count: ExternalFactorCountAggregateOutputType | null
    _avg: ExternalFactorAvgAggregateOutputType | null
    _sum: ExternalFactorSumAggregateOutputType | null
    _min: ExternalFactorMinAggregateOutputType | null
    _max: ExternalFactorMaxAggregateOutputType | null
  }

  export type ExternalFactorAvgAggregateOutputType = {
    id: number | null
  }

  export type ExternalFactorSumAggregateOutputType = {
    id: number | null
  }

  export type ExternalFactorMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExternalFactorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExternalFactorCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExternalFactorAvgAggregateInputType = {
    id?: true
  }

  export type ExternalFactorSumAggregateInputType = {
    id?: true
  }

  export type ExternalFactorMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExternalFactorMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExternalFactorCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExternalFactorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalFactor to aggregate.
     */
    where?: ExternalFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalFactors to fetch.
     */
    orderBy?: ExternalFactorOrderByWithRelationInput | ExternalFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternalFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExternalFactors
    **/
    _count?: true | ExternalFactorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExternalFactorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExternalFactorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternalFactorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternalFactorMaxAggregateInputType
  }

  export type GetExternalFactorAggregateType<T extends ExternalFactorAggregateArgs> = {
        [P in keyof T & keyof AggregateExternalFactor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternalFactor[P]>
      : GetScalarType<T[P], AggregateExternalFactor[P]>
  }




  export type ExternalFactorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalFactorWhereInput
    orderBy?: ExternalFactorOrderByWithAggregationInput | ExternalFactorOrderByWithAggregationInput[]
    by: ExternalFactorScalarFieldEnum[] | ExternalFactorScalarFieldEnum
    having?: ExternalFactorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternalFactorCountAggregateInputType | true
    _avg?: ExternalFactorAvgAggregateInputType
    _sum?: ExternalFactorSumAggregateInputType
    _min?: ExternalFactorMinAggregateInputType
    _max?: ExternalFactorMaxAggregateInputType
  }

  export type ExternalFactorGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExternalFactorCountAggregateOutputType | null
    _avg: ExternalFactorAvgAggregateOutputType | null
    _sum: ExternalFactorSumAggregateOutputType | null
    _min: ExternalFactorMinAggregateOutputType | null
    _max: ExternalFactorMaxAggregateOutputType | null
  }

  type GetExternalFactorGroupByPayload<T extends ExternalFactorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternalFactorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternalFactorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternalFactorGroupByOutputType[P]>
            : GetScalarType<T[P], ExternalFactorGroupByOutputType[P]>
        }
      >
    >


  export type ExternalFactorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    producers?: boolean | ExternalFactor$producersArgs<ExtArgs>
    sensitives?: boolean | ExternalFactor$sensitivesArgs<ExtArgs>
    _count?: boolean | ExternalFactorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["externalFactor"]>

  export type ExternalFactorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["externalFactor"]>

  export type ExternalFactorSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExternalFactorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producers?: boolean | ExternalFactor$producersArgs<ExtArgs>
    sensitives?: boolean | ExternalFactor$sensitivesArgs<ExtArgs>
    _count?: boolean | ExternalFactorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExternalFactorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExternalFactorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExternalFactor"
    objects: {
      producers: Prisma.$MachineExternalFactorPayload<ExtArgs>[]
      sensitives: Prisma.$MachineExternalFactorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["externalFactor"]>
    composites: {}
  }

  type ExternalFactorGetPayload<S extends boolean | null | undefined | ExternalFactorDefaultArgs> = $Result.GetResult<Prisma.$ExternalFactorPayload, S>

  type ExternalFactorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExternalFactorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExternalFactorCountAggregateInputType | true
    }

  export interface ExternalFactorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExternalFactor'], meta: { name: 'ExternalFactor' } }
    /**
     * Find zero or one ExternalFactor that matches the filter.
     * @param {ExternalFactorFindUniqueArgs} args - Arguments to find a ExternalFactor
     * @example
     * // Get one ExternalFactor
     * const externalFactor = await prisma.externalFactor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExternalFactorFindUniqueArgs>(args: SelectSubset<T, ExternalFactorFindUniqueArgs<ExtArgs>>): Prisma__ExternalFactorClient<$Result.GetResult<Prisma.$ExternalFactorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExternalFactor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExternalFactorFindUniqueOrThrowArgs} args - Arguments to find a ExternalFactor
     * @example
     * // Get one ExternalFactor
     * const externalFactor = await prisma.externalFactor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExternalFactorFindUniqueOrThrowArgs>(args: SelectSubset<T, ExternalFactorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExternalFactorClient<$Result.GetResult<Prisma.$ExternalFactorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExternalFactor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalFactorFindFirstArgs} args - Arguments to find a ExternalFactor
     * @example
     * // Get one ExternalFactor
     * const externalFactor = await prisma.externalFactor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExternalFactorFindFirstArgs>(args?: SelectSubset<T, ExternalFactorFindFirstArgs<ExtArgs>>): Prisma__ExternalFactorClient<$Result.GetResult<Prisma.$ExternalFactorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExternalFactor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalFactorFindFirstOrThrowArgs} args - Arguments to find a ExternalFactor
     * @example
     * // Get one ExternalFactor
     * const externalFactor = await prisma.externalFactor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExternalFactorFindFirstOrThrowArgs>(args?: SelectSubset<T, ExternalFactorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExternalFactorClient<$Result.GetResult<Prisma.$ExternalFactorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExternalFactors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalFactorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExternalFactors
     * const externalFactors = await prisma.externalFactor.findMany()
     * 
     * // Get first 10 ExternalFactors
     * const externalFactors = await prisma.externalFactor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const externalFactorWithIdOnly = await prisma.externalFactor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExternalFactorFindManyArgs>(args?: SelectSubset<T, ExternalFactorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalFactorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExternalFactor.
     * @param {ExternalFactorCreateArgs} args - Arguments to create a ExternalFactor.
     * @example
     * // Create one ExternalFactor
     * const ExternalFactor = await prisma.externalFactor.create({
     *   data: {
     *     // ... data to create a ExternalFactor
     *   }
     * })
     * 
     */
    create<T extends ExternalFactorCreateArgs>(args: SelectSubset<T, ExternalFactorCreateArgs<ExtArgs>>): Prisma__ExternalFactorClient<$Result.GetResult<Prisma.$ExternalFactorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExternalFactors.
     * @param {ExternalFactorCreateManyArgs} args - Arguments to create many ExternalFactors.
     * @example
     * // Create many ExternalFactors
     * const externalFactor = await prisma.externalFactor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExternalFactorCreateManyArgs>(args?: SelectSubset<T, ExternalFactorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExternalFactors and returns the data saved in the database.
     * @param {ExternalFactorCreateManyAndReturnArgs} args - Arguments to create many ExternalFactors.
     * @example
     * // Create many ExternalFactors
     * const externalFactor = await prisma.externalFactor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExternalFactors and only return the `id`
     * const externalFactorWithIdOnly = await prisma.externalFactor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExternalFactorCreateManyAndReturnArgs>(args?: SelectSubset<T, ExternalFactorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalFactorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExternalFactor.
     * @param {ExternalFactorDeleteArgs} args - Arguments to delete one ExternalFactor.
     * @example
     * // Delete one ExternalFactor
     * const ExternalFactor = await prisma.externalFactor.delete({
     *   where: {
     *     // ... filter to delete one ExternalFactor
     *   }
     * })
     * 
     */
    delete<T extends ExternalFactorDeleteArgs>(args: SelectSubset<T, ExternalFactorDeleteArgs<ExtArgs>>): Prisma__ExternalFactorClient<$Result.GetResult<Prisma.$ExternalFactorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExternalFactor.
     * @param {ExternalFactorUpdateArgs} args - Arguments to update one ExternalFactor.
     * @example
     * // Update one ExternalFactor
     * const externalFactor = await prisma.externalFactor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExternalFactorUpdateArgs>(args: SelectSubset<T, ExternalFactorUpdateArgs<ExtArgs>>): Prisma__ExternalFactorClient<$Result.GetResult<Prisma.$ExternalFactorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExternalFactors.
     * @param {ExternalFactorDeleteManyArgs} args - Arguments to filter ExternalFactors to delete.
     * @example
     * // Delete a few ExternalFactors
     * const { count } = await prisma.externalFactor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExternalFactorDeleteManyArgs>(args?: SelectSubset<T, ExternalFactorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalFactorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExternalFactors
     * const externalFactor = await prisma.externalFactor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExternalFactorUpdateManyArgs>(args: SelectSubset<T, ExternalFactorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExternalFactor.
     * @param {ExternalFactorUpsertArgs} args - Arguments to update or create a ExternalFactor.
     * @example
     * // Update or create a ExternalFactor
     * const externalFactor = await prisma.externalFactor.upsert({
     *   create: {
     *     // ... data to create a ExternalFactor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExternalFactor we want to update
     *   }
     * })
     */
    upsert<T extends ExternalFactorUpsertArgs>(args: SelectSubset<T, ExternalFactorUpsertArgs<ExtArgs>>): Prisma__ExternalFactorClient<$Result.GetResult<Prisma.$ExternalFactorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExternalFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalFactorCountArgs} args - Arguments to filter ExternalFactors to count.
     * @example
     * // Count the number of ExternalFactors
     * const count = await prisma.externalFactor.count({
     *   where: {
     *     // ... the filter for the ExternalFactors we want to count
     *   }
     * })
    **/
    count<T extends ExternalFactorCountArgs>(
      args?: Subset<T, ExternalFactorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternalFactorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExternalFactor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalFactorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExternalFactorAggregateArgs>(args: Subset<T, ExternalFactorAggregateArgs>): Prisma.PrismaPromise<GetExternalFactorAggregateType<T>>

    /**
     * Group by ExternalFactor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalFactorGroupByArgs} args - Group by arguments.
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
      T extends ExternalFactorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternalFactorGroupByArgs['orderBy'] }
        : { orderBy?: ExternalFactorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExternalFactorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalFactorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExternalFactor model
   */
  readonly fields: ExternalFactorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExternalFactor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternalFactorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producers<T extends ExternalFactor$producersArgs<ExtArgs> = {}>(args?: Subset<T, ExternalFactor$producersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineExternalFactorPayload<ExtArgs>, T, "findMany"> | Null>
    sensitives<T extends ExternalFactor$sensitivesArgs<ExtArgs> = {}>(args?: Subset<T, ExternalFactor$sensitivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineExternalFactorPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ExternalFactor model
   */ 
  interface ExternalFactorFieldRefs {
    readonly id: FieldRef<"ExternalFactor", 'Int'>
    readonly name: FieldRef<"ExternalFactor", 'String'>
    readonly description: FieldRef<"ExternalFactor", 'String'>
    readonly createdAt: FieldRef<"ExternalFactor", 'DateTime'>
    readonly updatedAt: FieldRef<"ExternalFactor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExternalFactor findUnique
   */
  export type ExternalFactorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactor
     */
    select?: ExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalFactorInclude<ExtArgs> | null
    /**
     * Filter, which ExternalFactor to fetch.
     */
    where: ExternalFactorWhereUniqueInput
  }

  /**
   * ExternalFactor findUniqueOrThrow
   */
  export type ExternalFactorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactor
     */
    select?: ExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalFactorInclude<ExtArgs> | null
    /**
     * Filter, which ExternalFactor to fetch.
     */
    where: ExternalFactorWhereUniqueInput
  }

  /**
   * ExternalFactor findFirst
   */
  export type ExternalFactorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactor
     */
    select?: ExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalFactorInclude<ExtArgs> | null
    /**
     * Filter, which ExternalFactor to fetch.
     */
    where?: ExternalFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalFactors to fetch.
     */
    orderBy?: ExternalFactorOrderByWithRelationInput | ExternalFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalFactors.
     */
    cursor?: ExternalFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalFactors.
     */
    distinct?: ExternalFactorScalarFieldEnum | ExternalFactorScalarFieldEnum[]
  }

  /**
   * ExternalFactor findFirstOrThrow
   */
  export type ExternalFactorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactor
     */
    select?: ExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalFactorInclude<ExtArgs> | null
    /**
     * Filter, which ExternalFactor to fetch.
     */
    where?: ExternalFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalFactors to fetch.
     */
    orderBy?: ExternalFactorOrderByWithRelationInput | ExternalFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalFactors.
     */
    cursor?: ExternalFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalFactors.
     */
    distinct?: ExternalFactorScalarFieldEnum | ExternalFactorScalarFieldEnum[]
  }

  /**
   * ExternalFactor findMany
   */
  export type ExternalFactorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactor
     */
    select?: ExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalFactorInclude<ExtArgs> | null
    /**
     * Filter, which ExternalFactors to fetch.
     */
    where?: ExternalFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalFactors to fetch.
     */
    orderBy?: ExternalFactorOrderByWithRelationInput | ExternalFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExternalFactors.
     */
    cursor?: ExternalFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalFactors.
     */
    skip?: number
    distinct?: ExternalFactorScalarFieldEnum | ExternalFactorScalarFieldEnum[]
  }

  /**
   * ExternalFactor create
   */
  export type ExternalFactorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactor
     */
    select?: ExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalFactorInclude<ExtArgs> | null
    /**
     * The data needed to create a ExternalFactor.
     */
    data: XOR<ExternalFactorCreateInput, ExternalFactorUncheckedCreateInput>
  }

  /**
   * ExternalFactor createMany
   */
  export type ExternalFactorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExternalFactors.
     */
    data: ExternalFactorCreateManyInput | ExternalFactorCreateManyInput[]
  }

  /**
   * ExternalFactor createManyAndReturn
   */
  export type ExternalFactorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactor
     */
    select?: ExternalFactorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExternalFactors.
     */
    data: ExternalFactorCreateManyInput | ExternalFactorCreateManyInput[]
  }

  /**
   * ExternalFactor update
   */
  export type ExternalFactorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactor
     */
    select?: ExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalFactorInclude<ExtArgs> | null
    /**
     * The data needed to update a ExternalFactor.
     */
    data: XOR<ExternalFactorUpdateInput, ExternalFactorUncheckedUpdateInput>
    /**
     * Choose, which ExternalFactor to update.
     */
    where: ExternalFactorWhereUniqueInput
  }

  /**
   * ExternalFactor updateMany
   */
  export type ExternalFactorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExternalFactors.
     */
    data: XOR<ExternalFactorUpdateManyMutationInput, ExternalFactorUncheckedUpdateManyInput>
    /**
     * Filter which ExternalFactors to update
     */
    where?: ExternalFactorWhereInput
  }

  /**
   * ExternalFactor upsert
   */
  export type ExternalFactorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactor
     */
    select?: ExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalFactorInclude<ExtArgs> | null
    /**
     * The filter to search for the ExternalFactor to update in case it exists.
     */
    where: ExternalFactorWhereUniqueInput
    /**
     * In case the ExternalFactor found by the `where` argument doesn't exist, create a new ExternalFactor with this data.
     */
    create: XOR<ExternalFactorCreateInput, ExternalFactorUncheckedCreateInput>
    /**
     * In case the ExternalFactor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternalFactorUpdateInput, ExternalFactorUncheckedUpdateInput>
  }

  /**
   * ExternalFactor delete
   */
  export type ExternalFactorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactor
     */
    select?: ExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalFactorInclude<ExtArgs> | null
    /**
     * Filter which ExternalFactor to delete.
     */
    where: ExternalFactorWhereUniqueInput
  }

  /**
   * ExternalFactor deleteMany
   */
  export type ExternalFactorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalFactors to delete
     */
    where?: ExternalFactorWhereInput
  }

  /**
   * ExternalFactor.producers
   */
  export type ExternalFactor$producersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorInclude<ExtArgs> | null
    where?: MachineExternalFactorWhereInput
    orderBy?: MachineExternalFactorOrderByWithRelationInput | MachineExternalFactorOrderByWithRelationInput[]
    cursor?: MachineExternalFactorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MachineExternalFactorScalarFieldEnum | MachineExternalFactorScalarFieldEnum[]
  }

  /**
   * ExternalFactor.sensitives
   */
  export type ExternalFactor$sensitivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorInclude<ExtArgs> | null
    where?: MachineExternalFactorWhereInput
    orderBy?: MachineExternalFactorOrderByWithRelationInput | MachineExternalFactorOrderByWithRelationInput[]
    cursor?: MachineExternalFactorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MachineExternalFactorScalarFieldEnum | MachineExternalFactorScalarFieldEnum[]
  }

  /**
   * ExternalFactor without action
   */
  export type ExternalFactorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactor
     */
    select?: ExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalFactorInclude<ExtArgs> | null
  }


  /**
   * Model MachineExternalFactor
   */

  export type AggregateMachineExternalFactor = {
    _count: MachineExternalFactorCountAggregateOutputType | null
    _avg: MachineExternalFactorAvgAggregateOutputType | null
    _sum: MachineExternalFactorSumAggregateOutputType | null
    _min: MachineExternalFactorMinAggregateOutputType | null
    _max: MachineExternalFactorMaxAggregateOutputType | null
  }

  export type MachineExternalFactorAvgAggregateOutputType = {
    machineId: number | null
    factorId: number | null
    intensity: number | null
  }

  export type MachineExternalFactorSumAggregateOutputType = {
    machineId: number | null
    factorId: number | null
    intensity: number | null
  }

  export type MachineExternalFactorMinAggregateOutputType = {
    machineId: number | null
    factorId: number | null
    isProducer: boolean | null
    isSensitive: boolean | null
    intensity: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MachineExternalFactorMaxAggregateOutputType = {
    machineId: number | null
    factorId: number | null
    isProducer: boolean | null
    isSensitive: boolean | null
    intensity: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MachineExternalFactorCountAggregateOutputType = {
    machineId: number
    factorId: number
    isProducer: number
    isSensitive: number
    intensity: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MachineExternalFactorAvgAggregateInputType = {
    machineId?: true
    factorId?: true
    intensity?: true
  }

  export type MachineExternalFactorSumAggregateInputType = {
    machineId?: true
    factorId?: true
    intensity?: true
  }

  export type MachineExternalFactorMinAggregateInputType = {
    machineId?: true
    factorId?: true
    isProducer?: true
    isSensitive?: true
    intensity?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MachineExternalFactorMaxAggregateInputType = {
    machineId?: true
    factorId?: true
    isProducer?: true
    isSensitive?: true
    intensity?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MachineExternalFactorCountAggregateInputType = {
    machineId?: true
    factorId?: true
    isProducer?: true
    isSensitive?: true
    intensity?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MachineExternalFactorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MachineExternalFactor to aggregate.
     */
    where?: MachineExternalFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineExternalFactors to fetch.
     */
    orderBy?: MachineExternalFactorOrderByWithRelationInput | MachineExternalFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MachineExternalFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineExternalFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineExternalFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MachineExternalFactors
    **/
    _count?: true | MachineExternalFactorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MachineExternalFactorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MachineExternalFactorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MachineExternalFactorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MachineExternalFactorMaxAggregateInputType
  }

  export type GetMachineExternalFactorAggregateType<T extends MachineExternalFactorAggregateArgs> = {
        [P in keyof T & keyof AggregateMachineExternalFactor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMachineExternalFactor[P]>
      : GetScalarType<T[P], AggregateMachineExternalFactor[P]>
  }




  export type MachineExternalFactorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineExternalFactorWhereInput
    orderBy?: MachineExternalFactorOrderByWithAggregationInput | MachineExternalFactorOrderByWithAggregationInput[]
    by: MachineExternalFactorScalarFieldEnum[] | MachineExternalFactorScalarFieldEnum
    having?: MachineExternalFactorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MachineExternalFactorCountAggregateInputType | true
    _avg?: MachineExternalFactorAvgAggregateInputType
    _sum?: MachineExternalFactorSumAggregateInputType
    _min?: MachineExternalFactorMinAggregateInputType
    _max?: MachineExternalFactorMaxAggregateInputType
  }

  export type MachineExternalFactorGroupByOutputType = {
    machineId: number
    factorId: number
    isProducer: boolean
    isSensitive: boolean
    intensity: number | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MachineExternalFactorCountAggregateOutputType | null
    _avg: MachineExternalFactorAvgAggregateOutputType | null
    _sum: MachineExternalFactorSumAggregateOutputType | null
    _min: MachineExternalFactorMinAggregateOutputType | null
    _max: MachineExternalFactorMaxAggregateOutputType | null
  }

  type GetMachineExternalFactorGroupByPayload<T extends MachineExternalFactorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MachineExternalFactorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MachineExternalFactorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MachineExternalFactorGroupByOutputType[P]>
            : GetScalarType<T[P], MachineExternalFactorGroupByOutputType[P]>
        }
      >
    >


  export type MachineExternalFactorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    machineId?: boolean
    factorId?: boolean
    isProducer?: boolean
    isSensitive?: boolean
    intensity?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    machine?: boolean | MachineDefaultArgs<ExtArgs>
    producedFactor?: boolean | MachineExternalFactor$producedFactorArgs<ExtArgs>
    sensitiveFactor?: boolean | MachineExternalFactor$sensitiveFactorArgs<ExtArgs>
  }, ExtArgs["result"]["machineExternalFactor"]>

  export type MachineExternalFactorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    machineId?: boolean
    factorId?: boolean
    isProducer?: boolean
    isSensitive?: boolean
    intensity?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    machine?: boolean | MachineDefaultArgs<ExtArgs>
    producedFactor?: boolean | MachineExternalFactor$producedFactorArgs<ExtArgs>
    sensitiveFactor?: boolean | MachineExternalFactor$sensitiveFactorArgs<ExtArgs>
  }, ExtArgs["result"]["machineExternalFactor"]>

  export type MachineExternalFactorSelectScalar = {
    machineId?: boolean
    factorId?: boolean
    isProducer?: boolean
    isSensitive?: boolean
    intensity?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MachineExternalFactorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machine?: boolean | MachineDefaultArgs<ExtArgs>
    producedFactor?: boolean | MachineExternalFactor$producedFactorArgs<ExtArgs>
    sensitiveFactor?: boolean | MachineExternalFactor$sensitiveFactorArgs<ExtArgs>
  }
  export type MachineExternalFactorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machine?: boolean | MachineDefaultArgs<ExtArgs>
    producedFactor?: boolean | MachineExternalFactor$producedFactorArgs<ExtArgs>
    sensitiveFactor?: boolean | MachineExternalFactor$sensitiveFactorArgs<ExtArgs>
  }

  export type $MachineExternalFactorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MachineExternalFactor"
    objects: {
      machine: Prisma.$MachinePayload<ExtArgs>
      producedFactor: Prisma.$ExternalFactorPayload<ExtArgs> | null
      sensitiveFactor: Prisma.$ExternalFactorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      machineId: number
      factorId: number
      isProducer: boolean
      isSensitive: boolean
      intensity: number | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["machineExternalFactor"]>
    composites: {}
  }

  type MachineExternalFactorGetPayload<S extends boolean | null | undefined | MachineExternalFactorDefaultArgs> = $Result.GetResult<Prisma.$MachineExternalFactorPayload, S>

  type MachineExternalFactorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MachineExternalFactorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MachineExternalFactorCountAggregateInputType | true
    }

  export interface MachineExternalFactorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MachineExternalFactor'], meta: { name: 'MachineExternalFactor' } }
    /**
     * Find zero or one MachineExternalFactor that matches the filter.
     * @param {MachineExternalFactorFindUniqueArgs} args - Arguments to find a MachineExternalFactor
     * @example
     * // Get one MachineExternalFactor
     * const machineExternalFactor = await prisma.machineExternalFactor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MachineExternalFactorFindUniqueArgs>(args: SelectSubset<T, MachineExternalFactorFindUniqueArgs<ExtArgs>>): Prisma__MachineExternalFactorClient<$Result.GetResult<Prisma.$MachineExternalFactorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MachineExternalFactor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MachineExternalFactorFindUniqueOrThrowArgs} args - Arguments to find a MachineExternalFactor
     * @example
     * // Get one MachineExternalFactor
     * const machineExternalFactor = await prisma.machineExternalFactor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MachineExternalFactorFindUniqueOrThrowArgs>(args: SelectSubset<T, MachineExternalFactorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MachineExternalFactorClient<$Result.GetResult<Prisma.$MachineExternalFactorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MachineExternalFactor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineExternalFactorFindFirstArgs} args - Arguments to find a MachineExternalFactor
     * @example
     * // Get one MachineExternalFactor
     * const machineExternalFactor = await prisma.machineExternalFactor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MachineExternalFactorFindFirstArgs>(args?: SelectSubset<T, MachineExternalFactorFindFirstArgs<ExtArgs>>): Prisma__MachineExternalFactorClient<$Result.GetResult<Prisma.$MachineExternalFactorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MachineExternalFactor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineExternalFactorFindFirstOrThrowArgs} args - Arguments to find a MachineExternalFactor
     * @example
     * // Get one MachineExternalFactor
     * const machineExternalFactor = await prisma.machineExternalFactor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MachineExternalFactorFindFirstOrThrowArgs>(args?: SelectSubset<T, MachineExternalFactorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MachineExternalFactorClient<$Result.GetResult<Prisma.$MachineExternalFactorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MachineExternalFactors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineExternalFactorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MachineExternalFactors
     * const machineExternalFactors = await prisma.machineExternalFactor.findMany()
     * 
     * // Get first 10 MachineExternalFactors
     * const machineExternalFactors = await prisma.machineExternalFactor.findMany({ take: 10 })
     * 
     * // Only select the `machineId`
     * const machineExternalFactorWithMachineIdOnly = await prisma.machineExternalFactor.findMany({ select: { machineId: true } })
     * 
     */
    findMany<T extends MachineExternalFactorFindManyArgs>(args?: SelectSubset<T, MachineExternalFactorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineExternalFactorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MachineExternalFactor.
     * @param {MachineExternalFactorCreateArgs} args - Arguments to create a MachineExternalFactor.
     * @example
     * // Create one MachineExternalFactor
     * const MachineExternalFactor = await prisma.machineExternalFactor.create({
     *   data: {
     *     // ... data to create a MachineExternalFactor
     *   }
     * })
     * 
     */
    create<T extends MachineExternalFactorCreateArgs>(args: SelectSubset<T, MachineExternalFactorCreateArgs<ExtArgs>>): Prisma__MachineExternalFactorClient<$Result.GetResult<Prisma.$MachineExternalFactorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MachineExternalFactors.
     * @param {MachineExternalFactorCreateManyArgs} args - Arguments to create many MachineExternalFactors.
     * @example
     * // Create many MachineExternalFactors
     * const machineExternalFactor = await prisma.machineExternalFactor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MachineExternalFactorCreateManyArgs>(args?: SelectSubset<T, MachineExternalFactorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MachineExternalFactors and returns the data saved in the database.
     * @param {MachineExternalFactorCreateManyAndReturnArgs} args - Arguments to create many MachineExternalFactors.
     * @example
     * // Create many MachineExternalFactors
     * const machineExternalFactor = await prisma.machineExternalFactor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MachineExternalFactors and only return the `machineId`
     * const machineExternalFactorWithMachineIdOnly = await prisma.machineExternalFactor.createManyAndReturn({ 
     *   select: { machineId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MachineExternalFactorCreateManyAndReturnArgs>(args?: SelectSubset<T, MachineExternalFactorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineExternalFactorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MachineExternalFactor.
     * @param {MachineExternalFactorDeleteArgs} args - Arguments to delete one MachineExternalFactor.
     * @example
     * // Delete one MachineExternalFactor
     * const MachineExternalFactor = await prisma.machineExternalFactor.delete({
     *   where: {
     *     // ... filter to delete one MachineExternalFactor
     *   }
     * })
     * 
     */
    delete<T extends MachineExternalFactorDeleteArgs>(args: SelectSubset<T, MachineExternalFactorDeleteArgs<ExtArgs>>): Prisma__MachineExternalFactorClient<$Result.GetResult<Prisma.$MachineExternalFactorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MachineExternalFactor.
     * @param {MachineExternalFactorUpdateArgs} args - Arguments to update one MachineExternalFactor.
     * @example
     * // Update one MachineExternalFactor
     * const machineExternalFactor = await prisma.machineExternalFactor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MachineExternalFactorUpdateArgs>(args: SelectSubset<T, MachineExternalFactorUpdateArgs<ExtArgs>>): Prisma__MachineExternalFactorClient<$Result.GetResult<Prisma.$MachineExternalFactorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MachineExternalFactors.
     * @param {MachineExternalFactorDeleteManyArgs} args - Arguments to filter MachineExternalFactors to delete.
     * @example
     * // Delete a few MachineExternalFactors
     * const { count } = await prisma.machineExternalFactor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MachineExternalFactorDeleteManyArgs>(args?: SelectSubset<T, MachineExternalFactorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MachineExternalFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineExternalFactorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MachineExternalFactors
     * const machineExternalFactor = await prisma.machineExternalFactor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MachineExternalFactorUpdateManyArgs>(args: SelectSubset<T, MachineExternalFactorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MachineExternalFactor.
     * @param {MachineExternalFactorUpsertArgs} args - Arguments to update or create a MachineExternalFactor.
     * @example
     * // Update or create a MachineExternalFactor
     * const machineExternalFactor = await prisma.machineExternalFactor.upsert({
     *   create: {
     *     // ... data to create a MachineExternalFactor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MachineExternalFactor we want to update
     *   }
     * })
     */
    upsert<T extends MachineExternalFactorUpsertArgs>(args: SelectSubset<T, MachineExternalFactorUpsertArgs<ExtArgs>>): Prisma__MachineExternalFactorClient<$Result.GetResult<Prisma.$MachineExternalFactorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MachineExternalFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineExternalFactorCountArgs} args - Arguments to filter MachineExternalFactors to count.
     * @example
     * // Count the number of MachineExternalFactors
     * const count = await prisma.machineExternalFactor.count({
     *   where: {
     *     // ... the filter for the MachineExternalFactors we want to count
     *   }
     * })
    **/
    count<T extends MachineExternalFactorCountArgs>(
      args?: Subset<T, MachineExternalFactorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MachineExternalFactorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MachineExternalFactor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineExternalFactorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MachineExternalFactorAggregateArgs>(args: Subset<T, MachineExternalFactorAggregateArgs>): Prisma.PrismaPromise<GetMachineExternalFactorAggregateType<T>>

    /**
     * Group by MachineExternalFactor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineExternalFactorGroupByArgs} args - Group by arguments.
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
      T extends MachineExternalFactorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MachineExternalFactorGroupByArgs['orderBy'] }
        : { orderBy?: MachineExternalFactorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MachineExternalFactorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMachineExternalFactorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MachineExternalFactor model
   */
  readonly fields: MachineExternalFactorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MachineExternalFactor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MachineExternalFactorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machine<T extends MachineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MachineDefaultArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    producedFactor<T extends MachineExternalFactor$producedFactorArgs<ExtArgs> = {}>(args?: Subset<T, MachineExternalFactor$producedFactorArgs<ExtArgs>>): Prisma__ExternalFactorClient<$Result.GetResult<Prisma.$ExternalFactorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    sensitiveFactor<T extends MachineExternalFactor$sensitiveFactorArgs<ExtArgs> = {}>(args?: Subset<T, MachineExternalFactor$sensitiveFactorArgs<ExtArgs>>): Prisma__ExternalFactorClient<$Result.GetResult<Prisma.$ExternalFactorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the MachineExternalFactor model
   */ 
  interface MachineExternalFactorFieldRefs {
    readonly machineId: FieldRef<"MachineExternalFactor", 'Int'>
    readonly factorId: FieldRef<"MachineExternalFactor", 'Int'>
    readonly isProducer: FieldRef<"MachineExternalFactor", 'Boolean'>
    readonly isSensitive: FieldRef<"MachineExternalFactor", 'Boolean'>
    readonly intensity: FieldRef<"MachineExternalFactor", 'Int'>
    readonly notes: FieldRef<"MachineExternalFactor", 'String'>
    readonly createdAt: FieldRef<"MachineExternalFactor", 'DateTime'>
    readonly updatedAt: FieldRef<"MachineExternalFactor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MachineExternalFactor findUnique
   */
  export type MachineExternalFactorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorInclude<ExtArgs> | null
    /**
     * Filter, which MachineExternalFactor to fetch.
     */
    where: MachineExternalFactorWhereUniqueInput
  }

  /**
   * MachineExternalFactor findUniqueOrThrow
   */
  export type MachineExternalFactorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorInclude<ExtArgs> | null
    /**
     * Filter, which MachineExternalFactor to fetch.
     */
    where: MachineExternalFactorWhereUniqueInput
  }

  /**
   * MachineExternalFactor findFirst
   */
  export type MachineExternalFactorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorInclude<ExtArgs> | null
    /**
     * Filter, which MachineExternalFactor to fetch.
     */
    where?: MachineExternalFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineExternalFactors to fetch.
     */
    orderBy?: MachineExternalFactorOrderByWithRelationInput | MachineExternalFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MachineExternalFactors.
     */
    cursor?: MachineExternalFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineExternalFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineExternalFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MachineExternalFactors.
     */
    distinct?: MachineExternalFactorScalarFieldEnum | MachineExternalFactorScalarFieldEnum[]
  }

  /**
   * MachineExternalFactor findFirstOrThrow
   */
  export type MachineExternalFactorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorInclude<ExtArgs> | null
    /**
     * Filter, which MachineExternalFactor to fetch.
     */
    where?: MachineExternalFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineExternalFactors to fetch.
     */
    orderBy?: MachineExternalFactorOrderByWithRelationInput | MachineExternalFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MachineExternalFactors.
     */
    cursor?: MachineExternalFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineExternalFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineExternalFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MachineExternalFactors.
     */
    distinct?: MachineExternalFactorScalarFieldEnum | MachineExternalFactorScalarFieldEnum[]
  }

  /**
   * MachineExternalFactor findMany
   */
  export type MachineExternalFactorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorInclude<ExtArgs> | null
    /**
     * Filter, which MachineExternalFactors to fetch.
     */
    where?: MachineExternalFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineExternalFactors to fetch.
     */
    orderBy?: MachineExternalFactorOrderByWithRelationInput | MachineExternalFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MachineExternalFactors.
     */
    cursor?: MachineExternalFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineExternalFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineExternalFactors.
     */
    skip?: number
    distinct?: MachineExternalFactorScalarFieldEnum | MachineExternalFactorScalarFieldEnum[]
  }

  /**
   * MachineExternalFactor create
   */
  export type MachineExternalFactorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorInclude<ExtArgs> | null
    /**
     * The data needed to create a MachineExternalFactor.
     */
    data: XOR<MachineExternalFactorCreateInput, MachineExternalFactorUncheckedCreateInput>
  }

  /**
   * MachineExternalFactor createMany
   */
  export type MachineExternalFactorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MachineExternalFactors.
     */
    data: MachineExternalFactorCreateManyInput | MachineExternalFactorCreateManyInput[]
  }

  /**
   * MachineExternalFactor createManyAndReturn
   */
  export type MachineExternalFactorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MachineExternalFactors.
     */
    data: MachineExternalFactorCreateManyInput | MachineExternalFactorCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MachineExternalFactor update
   */
  export type MachineExternalFactorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorInclude<ExtArgs> | null
    /**
     * The data needed to update a MachineExternalFactor.
     */
    data: XOR<MachineExternalFactorUpdateInput, MachineExternalFactorUncheckedUpdateInput>
    /**
     * Choose, which MachineExternalFactor to update.
     */
    where: MachineExternalFactorWhereUniqueInput
  }

  /**
   * MachineExternalFactor updateMany
   */
  export type MachineExternalFactorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MachineExternalFactors.
     */
    data: XOR<MachineExternalFactorUpdateManyMutationInput, MachineExternalFactorUncheckedUpdateManyInput>
    /**
     * Filter which MachineExternalFactors to update
     */
    where?: MachineExternalFactorWhereInput
  }

  /**
   * MachineExternalFactor upsert
   */
  export type MachineExternalFactorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorInclude<ExtArgs> | null
    /**
     * The filter to search for the MachineExternalFactor to update in case it exists.
     */
    where: MachineExternalFactorWhereUniqueInput
    /**
     * In case the MachineExternalFactor found by the `where` argument doesn't exist, create a new MachineExternalFactor with this data.
     */
    create: XOR<MachineExternalFactorCreateInput, MachineExternalFactorUncheckedCreateInput>
    /**
     * In case the MachineExternalFactor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MachineExternalFactorUpdateInput, MachineExternalFactorUncheckedUpdateInput>
  }

  /**
   * MachineExternalFactor delete
   */
  export type MachineExternalFactorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorInclude<ExtArgs> | null
    /**
     * Filter which MachineExternalFactor to delete.
     */
    where: MachineExternalFactorWhereUniqueInput
  }

  /**
   * MachineExternalFactor deleteMany
   */
  export type MachineExternalFactorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MachineExternalFactors to delete
     */
    where?: MachineExternalFactorWhereInput
  }

  /**
   * MachineExternalFactor.producedFactor
   */
  export type MachineExternalFactor$producedFactorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactor
     */
    select?: ExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalFactorInclude<ExtArgs> | null
    where?: ExternalFactorWhereInput
  }

  /**
   * MachineExternalFactor.sensitiveFactor
   */
  export type MachineExternalFactor$sensitiveFactorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalFactor
     */
    select?: ExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalFactorInclude<ExtArgs> | null
    where?: ExternalFactorWhereInput
  }

  /**
   * MachineExternalFactor without action
   */
  export type MachineExternalFactorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorInclude<ExtArgs> | null
  }


  /**
   * Model Machine
   */

  export type AggregateMachine = {
    _count: MachineCountAggregateOutputType | null
    _avg: MachineAvgAggregateOutputType | null
    _sum: MachineSumAggregateOutputType | null
    _min: MachineMinAggregateOutputType | null
    _max: MachineMaxAggregateOutputType | null
  }

  export type MachineAvgAggregateOutputType = {
    id: number | null
    typeId: number | null
    length: number | null
    width: number | null
    height: number | null
    ownerId: number | null
    plantId: number | null
    x: number | null
    y: number | null
    z: number | null
    rotation: number | null
  }

  export type MachineSumAggregateOutputType = {
    id: number | null
    typeId: number | null
    length: number | null
    width: number | null
    height: number | null
    ownerId: number | null
    plantId: number | null
    x: number | null
    y: number | null
    z: number | null
    rotation: number | null
  }

  export type MachineMinAggregateOutputType = {
    id: number | null
    name: string | null
    serialNumber: string | null
    typeId: number | null
    length: number | null
    width: number | null
    height: number | null
    ownerId: number | null
    plantId: number | null
    x: number | null
    y: number | null
    z: number | null
    rotation: number | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MachineMaxAggregateOutputType = {
    id: number | null
    name: string | null
    serialNumber: string | null
    typeId: number | null
    length: number | null
    width: number | null
    height: number | null
    ownerId: number | null
    plantId: number | null
    x: number | null
    y: number | null
    z: number | null
    rotation: number | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MachineCountAggregateOutputType = {
    id: number
    name: number
    serialNumber: number
    typeId: number
    length: number
    width: number
    height: number
    ownerId: number
    plantId: number
    x: number
    y: number
    z: number
    rotation: number
    color: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MachineAvgAggregateInputType = {
    id?: true
    typeId?: true
    length?: true
    width?: true
    height?: true
    ownerId?: true
    plantId?: true
    x?: true
    y?: true
    z?: true
    rotation?: true
  }

  export type MachineSumAggregateInputType = {
    id?: true
    typeId?: true
    length?: true
    width?: true
    height?: true
    ownerId?: true
    plantId?: true
    x?: true
    y?: true
    z?: true
    rotation?: true
  }

  export type MachineMinAggregateInputType = {
    id?: true
    name?: true
    serialNumber?: true
    typeId?: true
    length?: true
    width?: true
    height?: true
    ownerId?: true
    plantId?: true
    x?: true
    y?: true
    z?: true
    rotation?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MachineMaxAggregateInputType = {
    id?: true
    name?: true
    serialNumber?: true
    typeId?: true
    length?: true
    width?: true
    height?: true
    ownerId?: true
    plantId?: true
    x?: true
    y?: true
    z?: true
    rotation?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MachineCountAggregateInputType = {
    id?: true
    name?: true
    serialNumber?: true
    typeId?: true
    length?: true
    width?: true
    height?: true
    ownerId?: true
    plantId?: true
    x?: true
    y?: true
    z?: true
    rotation?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MachineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Machine to aggregate.
     */
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     */
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Machines
    **/
    _count?: true | MachineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MachineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MachineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MachineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MachineMaxAggregateInputType
  }

  export type GetMachineAggregateType<T extends MachineAggregateArgs> = {
        [P in keyof T & keyof AggregateMachine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMachine[P]>
      : GetScalarType<T[P], AggregateMachine[P]>
  }




  export type MachineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineWhereInput
    orderBy?: MachineOrderByWithAggregationInput | MachineOrderByWithAggregationInput[]
    by: MachineScalarFieldEnum[] | MachineScalarFieldEnum
    having?: MachineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MachineCountAggregateInputType | true
    _avg?: MachineAvgAggregateInputType
    _sum?: MachineSumAggregateInputType
    _min?: MachineMinAggregateInputType
    _max?: MachineMaxAggregateInputType
  }

  export type MachineGroupByOutputType = {
    id: number
    name: string
    serialNumber: string
    typeId: number
    length: number
    width: number
    height: number
    ownerId: number
    plantId: number | null
    x: number | null
    y: number | null
    z: number | null
    rotation: number | null
    color: string | null
    createdAt: Date
    updatedAt: Date
    _count: MachineCountAggregateOutputType | null
    _avg: MachineAvgAggregateOutputType | null
    _sum: MachineSumAggregateOutputType | null
    _min: MachineMinAggregateOutputType | null
    _max: MachineMaxAggregateOutputType | null
  }

  type GetMachineGroupByPayload<T extends MachineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MachineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MachineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MachineGroupByOutputType[P]>
            : GetScalarType<T[P], MachineGroupByOutputType[P]>
        }
      >
    >


  export type MachineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serialNumber?: boolean
    typeId?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    ownerId?: boolean
    plantId?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    rotation?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | MachineTypeDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    plant?: boolean | Machine$plantArgs<ExtArgs>
    factors?: boolean | Machine$factorsArgs<ExtArgs>
    flowSources?: boolean | Machine$flowSourcesArgs<ExtArgs>
    flowDestinations?: boolean | Machine$flowDestinationsArgs<ExtArgs>
    _count?: boolean | MachineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["machine"]>

  export type MachineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serialNumber?: boolean
    typeId?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    ownerId?: boolean
    plantId?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    rotation?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | MachineTypeDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    plant?: boolean | Machine$plantArgs<ExtArgs>
  }, ExtArgs["result"]["machine"]>

  export type MachineSelectScalar = {
    id?: boolean
    name?: boolean
    serialNumber?: boolean
    typeId?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    ownerId?: boolean
    plantId?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    rotation?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MachineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | MachineTypeDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    plant?: boolean | Machine$plantArgs<ExtArgs>
    factors?: boolean | Machine$factorsArgs<ExtArgs>
    flowSources?: boolean | Machine$flowSourcesArgs<ExtArgs>
    flowDestinations?: boolean | Machine$flowDestinationsArgs<ExtArgs>
    _count?: boolean | MachineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MachineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | MachineTypeDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    plant?: boolean | Machine$plantArgs<ExtArgs>
  }

  export type $MachinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Machine"
    objects: {
      type: Prisma.$MachineTypePayload<ExtArgs>
      owner: Prisma.$UserPayload<ExtArgs>
      plant: Prisma.$PlantPayload<ExtArgs> | null
      factors: Prisma.$MachineExternalFactorPayload<ExtArgs>[]
      flowSources: Prisma.$MaterialFlowPayload<ExtArgs>[]
      flowDestinations: Prisma.$MaterialFlowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      serialNumber: string
      typeId: number
      length: number
      width: number
      height: number
      ownerId: number
      plantId: number | null
      x: number | null
      y: number | null
      z: number | null
      rotation: number | null
      color: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["machine"]>
    composites: {}
  }

  type MachineGetPayload<S extends boolean | null | undefined | MachineDefaultArgs> = $Result.GetResult<Prisma.$MachinePayload, S>

  type MachineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MachineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MachineCountAggregateInputType | true
    }

  export interface MachineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Machine'], meta: { name: 'Machine' } }
    /**
     * Find zero or one Machine that matches the filter.
     * @param {MachineFindUniqueArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MachineFindUniqueArgs>(args: SelectSubset<T, MachineFindUniqueArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Machine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MachineFindUniqueOrThrowArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MachineFindUniqueOrThrowArgs>(args: SelectSubset<T, MachineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Machine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineFindFirstArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MachineFindFirstArgs>(args?: SelectSubset<T, MachineFindFirstArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Machine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineFindFirstOrThrowArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MachineFindFirstOrThrowArgs>(args?: SelectSubset<T, MachineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Machines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Machines
     * const machines = await prisma.machine.findMany()
     * 
     * // Get first 10 Machines
     * const machines = await prisma.machine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const machineWithIdOnly = await prisma.machine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MachineFindManyArgs>(args?: SelectSubset<T, MachineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Machine.
     * @param {MachineCreateArgs} args - Arguments to create a Machine.
     * @example
     * // Create one Machine
     * const Machine = await prisma.machine.create({
     *   data: {
     *     // ... data to create a Machine
     *   }
     * })
     * 
     */
    create<T extends MachineCreateArgs>(args: SelectSubset<T, MachineCreateArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Machines.
     * @param {MachineCreateManyArgs} args - Arguments to create many Machines.
     * @example
     * // Create many Machines
     * const machine = await prisma.machine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MachineCreateManyArgs>(args?: SelectSubset<T, MachineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Machines and returns the data saved in the database.
     * @param {MachineCreateManyAndReturnArgs} args - Arguments to create many Machines.
     * @example
     * // Create many Machines
     * const machine = await prisma.machine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Machines and only return the `id`
     * const machineWithIdOnly = await prisma.machine.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MachineCreateManyAndReturnArgs>(args?: SelectSubset<T, MachineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Machine.
     * @param {MachineDeleteArgs} args - Arguments to delete one Machine.
     * @example
     * // Delete one Machine
     * const Machine = await prisma.machine.delete({
     *   where: {
     *     // ... filter to delete one Machine
     *   }
     * })
     * 
     */
    delete<T extends MachineDeleteArgs>(args: SelectSubset<T, MachineDeleteArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Machine.
     * @param {MachineUpdateArgs} args - Arguments to update one Machine.
     * @example
     * // Update one Machine
     * const machine = await prisma.machine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MachineUpdateArgs>(args: SelectSubset<T, MachineUpdateArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Machines.
     * @param {MachineDeleteManyArgs} args - Arguments to filter Machines to delete.
     * @example
     * // Delete a few Machines
     * const { count } = await prisma.machine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MachineDeleteManyArgs>(args?: SelectSubset<T, MachineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Machines
     * const machine = await prisma.machine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MachineUpdateManyArgs>(args: SelectSubset<T, MachineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Machine.
     * @param {MachineUpsertArgs} args - Arguments to update or create a Machine.
     * @example
     * // Update or create a Machine
     * const machine = await prisma.machine.upsert({
     *   create: {
     *     // ... data to create a Machine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Machine we want to update
     *   }
     * })
     */
    upsert<T extends MachineUpsertArgs>(args: SelectSubset<T, MachineUpsertArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineCountArgs} args - Arguments to filter Machines to count.
     * @example
     * // Count the number of Machines
     * const count = await prisma.machine.count({
     *   where: {
     *     // ... the filter for the Machines we want to count
     *   }
     * })
    **/
    count<T extends MachineCountArgs>(
      args?: Subset<T, MachineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MachineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Machine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MachineAggregateArgs>(args: Subset<T, MachineAggregateArgs>): Prisma.PrismaPromise<GetMachineAggregateType<T>>

    /**
     * Group by Machine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineGroupByArgs} args - Group by arguments.
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
      T extends MachineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MachineGroupByArgs['orderBy'] }
        : { orderBy?: MachineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MachineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMachineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Machine model
   */
  readonly fields: MachineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Machine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MachineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends MachineTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MachineTypeDefaultArgs<ExtArgs>>): Prisma__MachineTypeClient<$Result.GetResult<Prisma.$MachineTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plant<T extends Machine$plantArgs<ExtArgs> = {}>(args?: Subset<T, Machine$plantArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    factors<T extends Machine$factorsArgs<ExtArgs> = {}>(args?: Subset<T, Machine$factorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineExternalFactorPayload<ExtArgs>, T, "findMany"> | Null>
    flowSources<T extends Machine$flowSourcesArgs<ExtArgs> = {}>(args?: Subset<T, Machine$flowSourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialFlowPayload<ExtArgs>, T, "findMany"> | Null>
    flowDestinations<T extends Machine$flowDestinationsArgs<ExtArgs> = {}>(args?: Subset<T, Machine$flowDestinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialFlowPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Machine model
   */ 
  interface MachineFieldRefs {
    readonly id: FieldRef<"Machine", 'Int'>
    readonly name: FieldRef<"Machine", 'String'>
    readonly serialNumber: FieldRef<"Machine", 'String'>
    readonly typeId: FieldRef<"Machine", 'Int'>
    readonly length: FieldRef<"Machine", 'Int'>
    readonly width: FieldRef<"Machine", 'Int'>
    readonly height: FieldRef<"Machine", 'Int'>
    readonly ownerId: FieldRef<"Machine", 'Int'>
    readonly plantId: FieldRef<"Machine", 'Int'>
    readonly x: FieldRef<"Machine", 'Float'>
    readonly y: FieldRef<"Machine", 'Float'>
    readonly z: FieldRef<"Machine", 'Float'>
    readonly rotation: FieldRef<"Machine", 'Float'>
    readonly color: FieldRef<"Machine", 'String'>
    readonly createdAt: FieldRef<"Machine", 'DateTime'>
    readonly updatedAt: FieldRef<"Machine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Machine findUnique
   */
  export type MachineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machine to fetch.
     */
    where: MachineWhereUniqueInput
  }

  /**
   * Machine findUniqueOrThrow
   */
  export type MachineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machine to fetch.
     */
    where: MachineWhereUniqueInput
  }

  /**
   * Machine findFirst
   */
  export type MachineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machine to fetch.
     */
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     */
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Machines.
     */
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Machines.
     */
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
  }

  /**
   * Machine findFirstOrThrow
   */
  export type MachineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machine to fetch.
     */
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     */
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Machines.
     */
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Machines.
     */
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
  }

  /**
   * Machine findMany
   */
  export type MachineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machines to fetch.
     */
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     */
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Machines.
     */
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     */
    skip?: number
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
  }

  /**
   * Machine create
   */
  export type MachineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * The data needed to create a Machine.
     */
    data: XOR<MachineCreateInput, MachineUncheckedCreateInput>
  }

  /**
   * Machine createMany
   */
  export type MachineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Machines.
     */
    data: MachineCreateManyInput | MachineCreateManyInput[]
  }

  /**
   * Machine createManyAndReturn
   */
  export type MachineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Machines.
     */
    data: MachineCreateManyInput | MachineCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Machine update
   */
  export type MachineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * The data needed to update a Machine.
     */
    data: XOR<MachineUpdateInput, MachineUncheckedUpdateInput>
    /**
     * Choose, which Machine to update.
     */
    where: MachineWhereUniqueInput
  }

  /**
   * Machine updateMany
   */
  export type MachineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Machines.
     */
    data: XOR<MachineUpdateManyMutationInput, MachineUncheckedUpdateManyInput>
    /**
     * Filter which Machines to update
     */
    where?: MachineWhereInput
  }

  /**
   * Machine upsert
   */
  export type MachineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * The filter to search for the Machine to update in case it exists.
     */
    where: MachineWhereUniqueInput
    /**
     * In case the Machine found by the `where` argument doesn't exist, create a new Machine with this data.
     */
    create: XOR<MachineCreateInput, MachineUncheckedCreateInput>
    /**
     * In case the Machine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MachineUpdateInput, MachineUncheckedUpdateInput>
  }

  /**
   * Machine delete
   */
  export type MachineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter which Machine to delete.
     */
    where: MachineWhereUniqueInput
  }

  /**
   * Machine deleteMany
   */
  export type MachineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Machines to delete
     */
    where?: MachineWhereInput
  }

  /**
   * Machine.plant
   */
  export type Machine$plantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    where?: PlantWhereInput
  }

  /**
   * Machine.factors
   */
  export type Machine$factorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineExternalFactor
     */
    select?: MachineExternalFactorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineExternalFactorInclude<ExtArgs> | null
    where?: MachineExternalFactorWhereInput
    orderBy?: MachineExternalFactorOrderByWithRelationInput | MachineExternalFactorOrderByWithRelationInput[]
    cursor?: MachineExternalFactorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MachineExternalFactorScalarFieldEnum | MachineExternalFactorScalarFieldEnum[]
  }

  /**
   * Machine.flowSources
   */
  export type Machine$flowSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowInclude<ExtArgs> | null
    where?: MaterialFlowWhereInput
    orderBy?: MaterialFlowOrderByWithRelationInput | MaterialFlowOrderByWithRelationInput[]
    cursor?: MaterialFlowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialFlowScalarFieldEnum | MaterialFlowScalarFieldEnum[]
  }

  /**
   * Machine.flowDestinations
   */
  export type Machine$flowDestinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowInclude<ExtArgs> | null
    where?: MaterialFlowWhereInput
    orderBy?: MaterialFlowOrderByWithRelationInput | MaterialFlowOrderByWithRelationInput[]
    cursor?: MaterialFlowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialFlowScalarFieldEnum | MaterialFlowScalarFieldEnum[]
  }

  /**
   * Machine without action
   */
  export type MachineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
  }


  /**
   * Model MaterialFlow
   */

  export type AggregateMaterialFlow = {
    _count: MaterialFlowCountAggregateOutputType | null
    _avg: MaterialFlowAvgAggregateOutputType | null
    _sum: MaterialFlowSumAggregateOutputType | null
    _min: MaterialFlowMinAggregateOutputType | null
    _max: MaterialFlowMaxAggregateOutputType | null
  }

  export type MaterialFlowAvgAggregateOutputType = {
    id: number | null
    plantId: number | null
    fromMachineId: number | null
    toMachineId: number | null
    flowAmount: number | null
  }

  export type MaterialFlowSumAggregateOutputType = {
    id: number | null
    plantId: number | null
    fromMachineId: number | null
    toMachineId: number | null
    flowAmount: number | null
  }

  export type MaterialFlowMinAggregateOutputType = {
    id: number | null
    plantId: number | null
    fromMachineId: number | null
    toMachineId: number | null
    flowAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialFlowMaxAggregateOutputType = {
    id: number | null
    plantId: number | null
    fromMachineId: number | null
    toMachineId: number | null
    flowAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialFlowCountAggregateOutputType = {
    id: number
    plantId: number
    fromMachineId: number
    toMachineId: number
    flowAmount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaterialFlowAvgAggregateInputType = {
    id?: true
    plantId?: true
    fromMachineId?: true
    toMachineId?: true
    flowAmount?: true
  }

  export type MaterialFlowSumAggregateInputType = {
    id?: true
    plantId?: true
    fromMachineId?: true
    toMachineId?: true
    flowAmount?: true
  }

  export type MaterialFlowMinAggregateInputType = {
    id?: true
    plantId?: true
    fromMachineId?: true
    toMachineId?: true
    flowAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialFlowMaxAggregateInputType = {
    id?: true
    plantId?: true
    fromMachineId?: true
    toMachineId?: true
    flowAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialFlowCountAggregateInputType = {
    id?: true
    plantId?: true
    fromMachineId?: true
    toMachineId?: true
    flowAmount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaterialFlowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialFlow to aggregate.
     */
    where?: MaterialFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialFlows to fetch.
     */
    orderBy?: MaterialFlowOrderByWithRelationInput | MaterialFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaterialFlows
    **/
    _count?: true | MaterialFlowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialFlowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialFlowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialFlowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialFlowMaxAggregateInputType
  }

  export type GetMaterialFlowAggregateType<T extends MaterialFlowAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterialFlow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterialFlow[P]>
      : GetScalarType<T[P], AggregateMaterialFlow[P]>
  }




  export type MaterialFlowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialFlowWhereInput
    orderBy?: MaterialFlowOrderByWithAggregationInput | MaterialFlowOrderByWithAggregationInput[]
    by: MaterialFlowScalarFieldEnum[] | MaterialFlowScalarFieldEnum
    having?: MaterialFlowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialFlowCountAggregateInputType | true
    _avg?: MaterialFlowAvgAggregateInputType
    _sum?: MaterialFlowSumAggregateInputType
    _min?: MaterialFlowMinAggregateInputType
    _max?: MaterialFlowMaxAggregateInputType
  }

  export type MaterialFlowGroupByOutputType = {
    id: number
    plantId: number
    fromMachineId: number
    toMachineId: number
    flowAmount: number
    createdAt: Date
    updatedAt: Date
    _count: MaterialFlowCountAggregateOutputType | null
    _avg: MaterialFlowAvgAggregateOutputType | null
    _sum: MaterialFlowSumAggregateOutputType | null
    _min: MaterialFlowMinAggregateOutputType | null
    _max: MaterialFlowMaxAggregateOutputType | null
  }

  type GetMaterialFlowGroupByPayload<T extends MaterialFlowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialFlowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialFlowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialFlowGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialFlowGroupByOutputType[P]>
        }
      >
    >


  export type MaterialFlowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plantId?: boolean
    fromMachineId?: boolean
    toMachineId?: boolean
    flowAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plant?: boolean | PlantDefaultArgs<ExtArgs>
    fromMachine?: boolean | MachineDefaultArgs<ExtArgs>
    toMachine?: boolean | MachineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialFlow"]>

  export type MaterialFlowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plantId?: boolean
    fromMachineId?: boolean
    toMachineId?: boolean
    flowAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plant?: boolean | PlantDefaultArgs<ExtArgs>
    fromMachine?: boolean | MachineDefaultArgs<ExtArgs>
    toMachine?: boolean | MachineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialFlow"]>

  export type MaterialFlowSelectScalar = {
    id?: boolean
    plantId?: boolean
    fromMachineId?: boolean
    toMachineId?: boolean
    flowAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaterialFlowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantDefaultArgs<ExtArgs>
    fromMachine?: boolean | MachineDefaultArgs<ExtArgs>
    toMachine?: boolean | MachineDefaultArgs<ExtArgs>
  }
  export type MaterialFlowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantDefaultArgs<ExtArgs>
    fromMachine?: boolean | MachineDefaultArgs<ExtArgs>
    toMachine?: boolean | MachineDefaultArgs<ExtArgs>
  }

  export type $MaterialFlowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaterialFlow"
    objects: {
      plant: Prisma.$PlantPayload<ExtArgs>
      fromMachine: Prisma.$MachinePayload<ExtArgs>
      toMachine: Prisma.$MachinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      plantId: number
      fromMachineId: number
      toMachineId: number
      flowAmount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["materialFlow"]>
    composites: {}
  }

  type MaterialFlowGetPayload<S extends boolean | null | undefined | MaterialFlowDefaultArgs> = $Result.GetResult<Prisma.$MaterialFlowPayload, S>

  type MaterialFlowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaterialFlowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MaterialFlowCountAggregateInputType | true
    }

  export interface MaterialFlowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaterialFlow'], meta: { name: 'MaterialFlow' } }
    /**
     * Find zero or one MaterialFlow that matches the filter.
     * @param {MaterialFlowFindUniqueArgs} args - Arguments to find a MaterialFlow
     * @example
     * // Get one MaterialFlow
     * const materialFlow = await prisma.materialFlow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFlowFindUniqueArgs>(args: SelectSubset<T, MaterialFlowFindUniqueArgs<ExtArgs>>): Prisma__MaterialFlowClient<$Result.GetResult<Prisma.$MaterialFlowPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MaterialFlow that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MaterialFlowFindUniqueOrThrowArgs} args - Arguments to find a MaterialFlow
     * @example
     * // Get one MaterialFlow
     * const materialFlow = await prisma.materialFlow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFlowFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFlowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialFlowClient<$Result.GetResult<Prisma.$MaterialFlowPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MaterialFlow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFlowFindFirstArgs} args - Arguments to find a MaterialFlow
     * @example
     * // Get one MaterialFlow
     * const materialFlow = await prisma.materialFlow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFlowFindFirstArgs>(args?: SelectSubset<T, MaterialFlowFindFirstArgs<ExtArgs>>): Prisma__MaterialFlowClient<$Result.GetResult<Prisma.$MaterialFlowPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MaterialFlow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFlowFindFirstOrThrowArgs} args - Arguments to find a MaterialFlow
     * @example
     * // Get one MaterialFlow
     * const materialFlow = await prisma.materialFlow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFlowFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFlowFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialFlowClient<$Result.GetResult<Prisma.$MaterialFlowPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MaterialFlows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFlowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaterialFlows
     * const materialFlows = await prisma.materialFlow.findMany()
     * 
     * // Get first 10 MaterialFlows
     * const materialFlows = await prisma.materialFlow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialFlowWithIdOnly = await prisma.materialFlow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFlowFindManyArgs>(args?: SelectSubset<T, MaterialFlowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialFlowPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MaterialFlow.
     * @param {MaterialFlowCreateArgs} args - Arguments to create a MaterialFlow.
     * @example
     * // Create one MaterialFlow
     * const MaterialFlow = await prisma.materialFlow.create({
     *   data: {
     *     // ... data to create a MaterialFlow
     *   }
     * })
     * 
     */
    create<T extends MaterialFlowCreateArgs>(args: SelectSubset<T, MaterialFlowCreateArgs<ExtArgs>>): Prisma__MaterialFlowClient<$Result.GetResult<Prisma.$MaterialFlowPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MaterialFlows.
     * @param {MaterialFlowCreateManyArgs} args - Arguments to create many MaterialFlows.
     * @example
     * // Create many MaterialFlows
     * const materialFlow = await prisma.materialFlow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialFlowCreateManyArgs>(args?: SelectSubset<T, MaterialFlowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaterialFlows and returns the data saved in the database.
     * @param {MaterialFlowCreateManyAndReturnArgs} args - Arguments to create many MaterialFlows.
     * @example
     * // Create many MaterialFlows
     * const materialFlow = await prisma.materialFlow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaterialFlows and only return the `id`
     * const materialFlowWithIdOnly = await prisma.materialFlow.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialFlowCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialFlowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialFlowPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MaterialFlow.
     * @param {MaterialFlowDeleteArgs} args - Arguments to delete one MaterialFlow.
     * @example
     * // Delete one MaterialFlow
     * const MaterialFlow = await prisma.materialFlow.delete({
     *   where: {
     *     // ... filter to delete one MaterialFlow
     *   }
     * })
     * 
     */
    delete<T extends MaterialFlowDeleteArgs>(args: SelectSubset<T, MaterialFlowDeleteArgs<ExtArgs>>): Prisma__MaterialFlowClient<$Result.GetResult<Prisma.$MaterialFlowPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MaterialFlow.
     * @param {MaterialFlowUpdateArgs} args - Arguments to update one MaterialFlow.
     * @example
     * // Update one MaterialFlow
     * const materialFlow = await prisma.materialFlow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialFlowUpdateArgs>(args: SelectSubset<T, MaterialFlowUpdateArgs<ExtArgs>>): Prisma__MaterialFlowClient<$Result.GetResult<Prisma.$MaterialFlowPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MaterialFlows.
     * @param {MaterialFlowDeleteManyArgs} args - Arguments to filter MaterialFlows to delete.
     * @example
     * // Delete a few MaterialFlows
     * const { count } = await prisma.materialFlow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialFlowDeleteManyArgs>(args?: SelectSubset<T, MaterialFlowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFlowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaterialFlows
     * const materialFlow = await prisma.materialFlow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialFlowUpdateManyArgs>(args: SelectSubset<T, MaterialFlowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MaterialFlow.
     * @param {MaterialFlowUpsertArgs} args - Arguments to update or create a MaterialFlow.
     * @example
     * // Update or create a MaterialFlow
     * const materialFlow = await prisma.materialFlow.upsert({
     *   create: {
     *     // ... data to create a MaterialFlow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaterialFlow we want to update
     *   }
     * })
     */
    upsert<T extends MaterialFlowUpsertArgs>(args: SelectSubset<T, MaterialFlowUpsertArgs<ExtArgs>>): Prisma__MaterialFlowClient<$Result.GetResult<Prisma.$MaterialFlowPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MaterialFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFlowCountArgs} args - Arguments to filter MaterialFlows to count.
     * @example
     * // Count the number of MaterialFlows
     * const count = await prisma.materialFlow.count({
     *   where: {
     *     // ... the filter for the MaterialFlows we want to count
     *   }
     * })
    **/
    count<T extends MaterialFlowCountArgs>(
      args?: Subset<T, MaterialFlowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialFlowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaterialFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFlowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialFlowAggregateArgs>(args: Subset<T, MaterialFlowAggregateArgs>): Prisma.PrismaPromise<GetMaterialFlowAggregateType<T>>

    /**
     * Group by MaterialFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFlowGroupByArgs} args - Group by arguments.
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
      T extends MaterialFlowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialFlowGroupByArgs['orderBy'] }
        : { orderBy?: MaterialFlowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialFlowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialFlowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaterialFlow model
   */
  readonly fields: MaterialFlowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaterialFlow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialFlowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plant<T extends PlantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantDefaultArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    fromMachine<T extends MachineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MachineDefaultArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    toMachine<T extends MachineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MachineDefaultArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MaterialFlow model
   */ 
  interface MaterialFlowFieldRefs {
    readonly id: FieldRef<"MaterialFlow", 'Int'>
    readonly plantId: FieldRef<"MaterialFlow", 'Int'>
    readonly fromMachineId: FieldRef<"MaterialFlow", 'Int'>
    readonly toMachineId: FieldRef<"MaterialFlow", 'Int'>
    readonly flowAmount: FieldRef<"MaterialFlow", 'Float'>
    readonly createdAt: FieldRef<"MaterialFlow", 'DateTime'>
    readonly updatedAt: FieldRef<"MaterialFlow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaterialFlow findUnique
   */
  export type MaterialFlowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowInclude<ExtArgs> | null
    /**
     * Filter, which MaterialFlow to fetch.
     */
    where: MaterialFlowWhereUniqueInput
  }

  /**
   * MaterialFlow findUniqueOrThrow
   */
  export type MaterialFlowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowInclude<ExtArgs> | null
    /**
     * Filter, which MaterialFlow to fetch.
     */
    where: MaterialFlowWhereUniqueInput
  }

  /**
   * MaterialFlow findFirst
   */
  export type MaterialFlowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowInclude<ExtArgs> | null
    /**
     * Filter, which MaterialFlow to fetch.
     */
    where?: MaterialFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialFlows to fetch.
     */
    orderBy?: MaterialFlowOrderByWithRelationInput | MaterialFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialFlows.
     */
    cursor?: MaterialFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialFlows.
     */
    distinct?: MaterialFlowScalarFieldEnum | MaterialFlowScalarFieldEnum[]
  }

  /**
   * MaterialFlow findFirstOrThrow
   */
  export type MaterialFlowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowInclude<ExtArgs> | null
    /**
     * Filter, which MaterialFlow to fetch.
     */
    where?: MaterialFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialFlows to fetch.
     */
    orderBy?: MaterialFlowOrderByWithRelationInput | MaterialFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialFlows.
     */
    cursor?: MaterialFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialFlows.
     */
    distinct?: MaterialFlowScalarFieldEnum | MaterialFlowScalarFieldEnum[]
  }

  /**
   * MaterialFlow findMany
   */
  export type MaterialFlowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowInclude<ExtArgs> | null
    /**
     * Filter, which MaterialFlows to fetch.
     */
    where?: MaterialFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialFlows to fetch.
     */
    orderBy?: MaterialFlowOrderByWithRelationInput | MaterialFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaterialFlows.
     */
    cursor?: MaterialFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialFlows.
     */
    skip?: number
    distinct?: MaterialFlowScalarFieldEnum | MaterialFlowScalarFieldEnum[]
  }

  /**
   * MaterialFlow create
   */
  export type MaterialFlowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowInclude<ExtArgs> | null
    /**
     * The data needed to create a MaterialFlow.
     */
    data: XOR<MaterialFlowCreateInput, MaterialFlowUncheckedCreateInput>
  }

  /**
   * MaterialFlow createMany
   */
  export type MaterialFlowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaterialFlows.
     */
    data: MaterialFlowCreateManyInput | MaterialFlowCreateManyInput[]
  }

  /**
   * MaterialFlow createManyAndReturn
   */
  export type MaterialFlowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MaterialFlows.
     */
    data: MaterialFlowCreateManyInput | MaterialFlowCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialFlow update
   */
  export type MaterialFlowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowInclude<ExtArgs> | null
    /**
     * The data needed to update a MaterialFlow.
     */
    data: XOR<MaterialFlowUpdateInput, MaterialFlowUncheckedUpdateInput>
    /**
     * Choose, which MaterialFlow to update.
     */
    where: MaterialFlowWhereUniqueInput
  }

  /**
   * MaterialFlow updateMany
   */
  export type MaterialFlowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaterialFlows.
     */
    data: XOR<MaterialFlowUpdateManyMutationInput, MaterialFlowUncheckedUpdateManyInput>
    /**
     * Filter which MaterialFlows to update
     */
    where?: MaterialFlowWhereInput
  }

  /**
   * MaterialFlow upsert
   */
  export type MaterialFlowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowInclude<ExtArgs> | null
    /**
     * The filter to search for the MaterialFlow to update in case it exists.
     */
    where: MaterialFlowWhereUniqueInput
    /**
     * In case the MaterialFlow found by the `where` argument doesn't exist, create a new MaterialFlow with this data.
     */
    create: XOR<MaterialFlowCreateInput, MaterialFlowUncheckedCreateInput>
    /**
     * In case the MaterialFlow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialFlowUpdateInput, MaterialFlowUncheckedUpdateInput>
  }

  /**
   * MaterialFlow delete
   */
  export type MaterialFlowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowInclude<ExtArgs> | null
    /**
     * Filter which MaterialFlow to delete.
     */
    where: MaterialFlowWhereUniqueInput
  }

  /**
   * MaterialFlow deleteMany
   */
  export type MaterialFlowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialFlows to delete
     */
    where?: MaterialFlowWhereInput
  }

  /**
   * MaterialFlow without action
   */
  export type MaterialFlowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFlow
     */
    select?: MaterialFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFlowInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserPlantScalarFieldEnum: {
    userId: 'userId',
    plantId: 'plantId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPlantScalarFieldEnum = (typeof UserPlantScalarFieldEnum)[keyof typeof UserPlantScalarFieldEnum]


  export const PlantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    length: 'length',
    width: 'width',
    height: 'height',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlantScalarFieldEnum = (typeof PlantScalarFieldEnum)[keyof typeof PlantScalarFieldEnum]


  export const MachineTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MachineTypeScalarFieldEnum = (typeof MachineTypeScalarFieldEnum)[keyof typeof MachineTypeScalarFieldEnum]


  export const ExternalFactorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExternalFactorScalarFieldEnum = (typeof ExternalFactorScalarFieldEnum)[keyof typeof ExternalFactorScalarFieldEnum]


  export const MachineExternalFactorScalarFieldEnum: {
    machineId: 'machineId',
    factorId: 'factorId',
    isProducer: 'isProducer',
    isSensitive: 'isSensitive',
    intensity: 'intensity',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MachineExternalFactorScalarFieldEnum = (typeof MachineExternalFactorScalarFieldEnum)[keyof typeof MachineExternalFactorScalarFieldEnum]


  export const MachineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    serialNumber: 'serialNumber',
    typeId: 'typeId',
    length: 'length',
    width: 'width',
    height: 'height',
    ownerId: 'ownerId',
    plantId: 'plantId',
    x: 'x',
    y: 'y',
    z: 'z',
    rotation: 'rotation',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MachineScalarFieldEnum = (typeof MachineScalarFieldEnum)[keyof typeof MachineScalarFieldEnum]


  export const MaterialFlowScalarFieldEnum: {
    id: 'id',
    plantId: 'plantId',
    fromMachineId: 'fromMachineId',
    toMachineId: 'toMachineId',
    flowAmount: 'flowAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaterialFlowScalarFieldEnum = (typeof MaterialFlowScalarFieldEnum)[keyof typeof MaterialFlowScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    plants?: UserPlantListRelationFilter
    machines?: MachineListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plants?: UserPlantOrderByRelationAggregateInput
    machines?: MachineOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    plants?: UserPlantListRelationFilter
    machines?: MachineListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
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
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserPlantWhereInput = {
    AND?: UserPlantWhereInput | UserPlantWhereInput[]
    OR?: UserPlantWhereInput[]
    NOT?: UserPlantWhereInput | UserPlantWhereInput[]
    userId?: IntFilter<"UserPlant"> | number
    plantId?: IntFilter<"UserPlant"> | number
    role?: StringFilter<"UserPlant"> | string
    createdAt?: DateTimeFilter<"UserPlant"> | Date | string
    updatedAt?: DateTimeFilter<"UserPlant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plant?: XOR<PlantScalarRelationFilter, PlantWhereInput>
  }

  export type UserPlantOrderByWithRelationInput = {
    userId?: SortOrder
    plantId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    plant?: PlantOrderByWithRelationInput
  }

  export type UserPlantWhereUniqueInput = Prisma.AtLeast<{
    userId_plantId?: UserPlantUserIdPlantIdCompoundUniqueInput
    AND?: UserPlantWhereInput | UserPlantWhereInput[]
    OR?: UserPlantWhereInput[]
    NOT?: UserPlantWhereInput | UserPlantWhereInput[]
    userId?: IntFilter<"UserPlant"> | number
    plantId?: IntFilter<"UserPlant"> | number
    role?: StringFilter<"UserPlant"> | string
    createdAt?: DateTimeFilter<"UserPlant"> | Date | string
    updatedAt?: DateTimeFilter<"UserPlant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plant?: XOR<PlantScalarRelationFilter, PlantWhereInput>
  }, "userId_plantId">

  export type UserPlantOrderByWithAggregationInput = {
    userId?: SortOrder
    plantId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPlantCountOrderByAggregateInput
    _avg?: UserPlantAvgOrderByAggregateInput
    _max?: UserPlantMaxOrderByAggregateInput
    _min?: UserPlantMinOrderByAggregateInput
    _sum?: UserPlantSumOrderByAggregateInput
  }

  export type UserPlantScalarWhereWithAggregatesInput = {
    AND?: UserPlantScalarWhereWithAggregatesInput | UserPlantScalarWhereWithAggregatesInput[]
    OR?: UserPlantScalarWhereWithAggregatesInput[]
    NOT?: UserPlantScalarWhereWithAggregatesInput | UserPlantScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserPlant"> | number
    plantId?: IntWithAggregatesFilter<"UserPlant"> | number
    role?: StringWithAggregatesFilter<"UserPlant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserPlant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPlant"> | Date | string
  }

  export type PlantWhereInput = {
    AND?: PlantWhereInput | PlantWhereInput[]
    OR?: PlantWhereInput[]
    NOT?: PlantWhereInput | PlantWhereInput[]
    id?: IntFilter<"Plant"> | number
    name?: StringFilter<"Plant"> | string
    description?: StringNullableFilter<"Plant"> | string | null
    length?: IntFilter<"Plant"> | number
    width?: IntFilter<"Plant"> | number
    height?: IntFilter<"Plant"> | number
    createdAt?: DateTimeFilter<"Plant"> | Date | string
    updatedAt?: DateTimeFilter<"Plant"> | Date | string
    users?: UserPlantListRelationFilter
    machines?: MachineListRelationFilter
    materialFlows?: MaterialFlowListRelationFilter
  }

  export type PlantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserPlantOrderByRelationAggregateInput
    machines?: MachineOrderByRelationAggregateInput
    materialFlows?: MaterialFlowOrderByRelationAggregateInput
  }

  export type PlantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlantWhereInput | PlantWhereInput[]
    OR?: PlantWhereInput[]
    NOT?: PlantWhereInput | PlantWhereInput[]
    name?: StringFilter<"Plant"> | string
    description?: StringNullableFilter<"Plant"> | string | null
    length?: IntFilter<"Plant"> | number
    width?: IntFilter<"Plant"> | number
    height?: IntFilter<"Plant"> | number
    createdAt?: DateTimeFilter<"Plant"> | Date | string
    updatedAt?: DateTimeFilter<"Plant"> | Date | string
    users?: UserPlantListRelationFilter
    machines?: MachineListRelationFilter
    materialFlows?: MaterialFlowListRelationFilter
  }, "id">

  export type PlantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlantCountOrderByAggregateInput
    _avg?: PlantAvgOrderByAggregateInput
    _max?: PlantMaxOrderByAggregateInput
    _min?: PlantMinOrderByAggregateInput
    _sum?: PlantSumOrderByAggregateInput
  }

  export type PlantScalarWhereWithAggregatesInput = {
    AND?: PlantScalarWhereWithAggregatesInput | PlantScalarWhereWithAggregatesInput[]
    OR?: PlantScalarWhereWithAggregatesInput[]
    NOT?: PlantScalarWhereWithAggregatesInput | PlantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plant"> | number
    name?: StringWithAggregatesFilter<"Plant"> | string
    description?: StringNullableWithAggregatesFilter<"Plant"> | string | null
    length?: IntWithAggregatesFilter<"Plant"> | number
    width?: IntWithAggregatesFilter<"Plant"> | number
    height?: IntWithAggregatesFilter<"Plant"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Plant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plant"> | Date | string
  }

  export type MachineTypeWhereInput = {
    AND?: MachineTypeWhereInput | MachineTypeWhereInput[]
    OR?: MachineTypeWhereInput[]
    NOT?: MachineTypeWhereInput | MachineTypeWhereInput[]
    id?: IntFilter<"MachineType"> | number
    name?: StringFilter<"MachineType"> | string
    description?: StringNullableFilter<"MachineType"> | string | null
    createdAt?: DateTimeFilter<"MachineType"> | Date | string
    updatedAt?: DateTimeFilter<"MachineType"> | Date | string
    machines?: MachineListRelationFilter
  }

  export type MachineTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    machines?: MachineOrderByRelationAggregateInput
  }

  export type MachineTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MachineTypeWhereInput | MachineTypeWhereInput[]
    OR?: MachineTypeWhereInput[]
    NOT?: MachineTypeWhereInput | MachineTypeWhereInput[]
    name?: StringFilter<"MachineType"> | string
    description?: StringNullableFilter<"MachineType"> | string | null
    createdAt?: DateTimeFilter<"MachineType"> | Date | string
    updatedAt?: DateTimeFilter<"MachineType"> | Date | string
    machines?: MachineListRelationFilter
  }, "id">

  export type MachineTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MachineTypeCountOrderByAggregateInput
    _avg?: MachineTypeAvgOrderByAggregateInput
    _max?: MachineTypeMaxOrderByAggregateInput
    _min?: MachineTypeMinOrderByAggregateInput
    _sum?: MachineTypeSumOrderByAggregateInput
  }

  export type MachineTypeScalarWhereWithAggregatesInput = {
    AND?: MachineTypeScalarWhereWithAggregatesInput | MachineTypeScalarWhereWithAggregatesInput[]
    OR?: MachineTypeScalarWhereWithAggregatesInput[]
    NOT?: MachineTypeScalarWhereWithAggregatesInput | MachineTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MachineType"> | number
    name?: StringWithAggregatesFilter<"MachineType"> | string
    description?: StringNullableWithAggregatesFilter<"MachineType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MachineType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MachineType"> | Date | string
  }

  export type ExternalFactorWhereInput = {
    AND?: ExternalFactorWhereInput | ExternalFactorWhereInput[]
    OR?: ExternalFactorWhereInput[]
    NOT?: ExternalFactorWhereInput | ExternalFactorWhereInput[]
    id?: IntFilter<"ExternalFactor"> | number
    name?: StringFilter<"ExternalFactor"> | string
    description?: StringNullableFilter<"ExternalFactor"> | string | null
    createdAt?: DateTimeFilter<"ExternalFactor"> | Date | string
    updatedAt?: DateTimeFilter<"ExternalFactor"> | Date | string
    producers?: MachineExternalFactorListRelationFilter
    sensitives?: MachineExternalFactorListRelationFilter
  }

  export type ExternalFactorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    producers?: MachineExternalFactorOrderByRelationAggregateInput
    sensitives?: MachineExternalFactorOrderByRelationAggregateInput
  }

  export type ExternalFactorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExternalFactorWhereInput | ExternalFactorWhereInput[]
    OR?: ExternalFactorWhereInput[]
    NOT?: ExternalFactorWhereInput | ExternalFactorWhereInput[]
    name?: StringFilter<"ExternalFactor"> | string
    description?: StringNullableFilter<"ExternalFactor"> | string | null
    createdAt?: DateTimeFilter<"ExternalFactor"> | Date | string
    updatedAt?: DateTimeFilter<"ExternalFactor"> | Date | string
    producers?: MachineExternalFactorListRelationFilter
    sensitives?: MachineExternalFactorListRelationFilter
  }, "id">

  export type ExternalFactorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExternalFactorCountOrderByAggregateInput
    _avg?: ExternalFactorAvgOrderByAggregateInput
    _max?: ExternalFactorMaxOrderByAggregateInput
    _min?: ExternalFactorMinOrderByAggregateInput
    _sum?: ExternalFactorSumOrderByAggregateInput
  }

  export type ExternalFactorScalarWhereWithAggregatesInput = {
    AND?: ExternalFactorScalarWhereWithAggregatesInput | ExternalFactorScalarWhereWithAggregatesInput[]
    OR?: ExternalFactorScalarWhereWithAggregatesInput[]
    NOT?: ExternalFactorScalarWhereWithAggregatesInput | ExternalFactorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExternalFactor"> | number
    name?: StringWithAggregatesFilter<"ExternalFactor"> | string
    description?: StringNullableWithAggregatesFilter<"ExternalFactor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ExternalFactor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExternalFactor"> | Date | string
  }

  export type MachineExternalFactorWhereInput = {
    AND?: MachineExternalFactorWhereInput | MachineExternalFactorWhereInput[]
    OR?: MachineExternalFactorWhereInput[]
    NOT?: MachineExternalFactorWhereInput | MachineExternalFactorWhereInput[]
    machineId?: IntFilter<"MachineExternalFactor"> | number
    factorId?: IntFilter<"MachineExternalFactor"> | number
    isProducer?: BoolFilter<"MachineExternalFactor"> | boolean
    isSensitive?: BoolFilter<"MachineExternalFactor"> | boolean
    intensity?: IntNullableFilter<"MachineExternalFactor"> | number | null
    notes?: StringNullableFilter<"MachineExternalFactor"> | string | null
    createdAt?: DateTimeFilter<"MachineExternalFactor"> | Date | string
    updatedAt?: DateTimeFilter<"MachineExternalFactor"> | Date | string
    machine?: XOR<MachineScalarRelationFilter, MachineWhereInput>
    producedFactor?: XOR<ExternalFactorNullableScalarRelationFilter, ExternalFactorWhereInput> | null
    sensitiveFactor?: XOR<ExternalFactorNullableScalarRelationFilter, ExternalFactorWhereInput> | null
  }

  export type MachineExternalFactorOrderByWithRelationInput = {
    machineId?: SortOrder
    factorId?: SortOrder
    isProducer?: SortOrder
    isSensitive?: SortOrder
    intensity?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    machine?: MachineOrderByWithRelationInput
    producedFactor?: ExternalFactorOrderByWithRelationInput
    sensitiveFactor?: ExternalFactorOrderByWithRelationInput
  }

  export type MachineExternalFactorWhereUniqueInput = Prisma.AtLeast<{
    machineId_factorId?: MachineExternalFactorMachineIdFactorIdCompoundUniqueInput
    AND?: MachineExternalFactorWhereInput | MachineExternalFactorWhereInput[]
    OR?: MachineExternalFactorWhereInput[]
    NOT?: MachineExternalFactorWhereInput | MachineExternalFactorWhereInput[]
    machineId?: IntFilter<"MachineExternalFactor"> | number
    factorId?: IntFilter<"MachineExternalFactor"> | number
    isProducer?: BoolFilter<"MachineExternalFactor"> | boolean
    isSensitive?: BoolFilter<"MachineExternalFactor"> | boolean
    intensity?: IntNullableFilter<"MachineExternalFactor"> | number | null
    notes?: StringNullableFilter<"MachineExternalFactor"> | string | null
    createdAt?: DateTimeFilter<"MachineExternalFactor"> | Date | string
    updatedAt?: DateTimeFilter<"MachineExternalFactor"> | Date | string
    machine?: XOR<MachineScalarRelationFilter, MachineWhereInput>
    producedFactor?: XOR<ExternalFactorNullableScalarRelationFilter, ExternalFactorWhereInput> | null
    sensitiveFactor?: XOR<ExternalFactorNullableScalarRelationFilter, ExternalFactorWhereInput> | null
  }, "machineId_factorId">

  export type MachineExternalFactorOrderByWithAggregationInput = {
    machineId?: SortOrder
    factorId?: SortOrder
    isProducer?: SortOrder
    isSensitive?: SortOrder
    intensity?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MachineExternalFactorCountOrderByAggregateInput
    _avg?: MachineExternalFactorAvgOrderByAggregateInput
    _max?: MachineExternalFactorMaxOrderByAggregateInput
    _min?: MachineExternalFactorMinOrderByAggregateInput
    _sum?: MachineExternalFactorSumOrderByAggregateInput
  }

  export type MachineExternalFactorScalarWhereWithAggregatesInput = {
    AND?: MachineExternalFactorScalarWhereWithAggregatesInput | MachineExternalFactorScalarWhereWithAggregatesInput[]
    OR?: MachineExternalFactorScalarWhereWithAggregatesInput[]
    NOT?: MachineExternalFactorScalarWhereWithAggregatesInput | MachineExternalFactorScalarWhereWithAggregatesInput[]
    machineId?: IntWithAggregatesFilter<"MachineExternalFactor"> | number
    factorId?: IntWithAggregatesFilter<"MachineExternalFactor"> | number
    isProducer?: BoolWithAggregatesFilter<"MachineExternalFactor"> | boolean
    isSensitive?: BoolWithAggregatesFilter<"MachineExternalFactor"> | boolean
    intensity?: IntNullableWithAggregatesFilter<"MachineExternalFactor"> | number | null
    notes?: StringNullableWithAggregatesFilter<"MachineExternalFactor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MachineExternalFactor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MachineExternalFactor"> | Date | string
  }

  export type MachineWhereInput = {
    AND?: MachineWhereInput | MachineWhereInput[]
    OR?: MachineWhereInput[]
    NOT?: MachineWhereInput | MachineWhereInput[]
    id?: IntFilter<"Machine"> | number
    name?: StringFilter<"Machine"> | string
    serialNumber?: StringFilter<"Machine"> | string
    typeId?: IntFilter<"Machine"> | number
    length?: IntFilter<"Machine"> | number
    width?: IntFilter<"Machine"> | number
    height?: IntFilter<"Machine"> | number
    ownerId?: IntFilter<"Machine"> | number
    plantId?: IntNullableFilter<"Machine"> | number | null
    x?: FloatNullableFilter<"Machine"> | number | null
    y?: FloatNullableFilter<"Machine"> | number | null
    z?: FloatNullableFilter<"Machine"> | number | null
    rotation?: FloatNullableFilter<"Machine"> | number | null
    color?: StringNullableFilter<"Machine"> | string | null
    createdAt?: DateTimeFilter<"Machine"> | Date | string
    updatedAt?: DateTimeFilter<"Machine"> | Date | string
    type?: XOR<MachineTypeScalarRelationFilter, MachineTypeWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    plant?: XOR<PlantNullableScalarRelationFilter, PlantWhereInput> | null
    factors?: MachineExternalFactorListRelationFilter
    flowSources?: MaterialFlowListRelationFilter
    flowDestinations?: MaterialFlowListRelationFilter
  }

  export type MachineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    typeId?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    ownerId?: SortOrder
    plantId?: SortOrderInput | SortOrder
    x?: SortOrderInput | SortOrder
    y?: SortOrderInput | SortOrder
    z?: SortOrderInput | SortOrder
    rotation?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: MachineTypeOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    plant?: PlantOrderByWithRelationInput
    factors?: MachineExternalFactorOrderByRelationAggregateInput
    flowSources?: MaterialFlowOrderByRelationAggregateInput
    flowDestinations?: MaterialFlowOrderByRelationAggregateInput
  }

  export type MachineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MachineWhereInput | MachineWhereInput[]
    OR?: MachineWhereInput[]
    NOT?: MachineWhereInput | MachineWhereInput[]
    name?: StringFilter<"Machine"> | string
    serialNumber?: StringFilter<"Machine"> | string
    typeId?: IntFilter<"Machine"> | number
    length?: IntFilter<"Machine"> | number
    width?: IntFilter<"Machine"> | number
    height?: IntFilter<"Machine"> | number
    ownerId?: IntFilter<"Machine"> | number
    plantId?: IntNullableFilter<"Machine"> | number | null
    x?: FloatNullableFilter<"Machine"> | number | null
    y?: FloatNullableFilter<"Machine"> | number | null
    z?: FloatNullableFilter<"Machine"> | number | null
    rotation?: FloatNullableFilter<"Machine"> | number | null
    color?: StringNullableFilter<"Machine"> | string | null
    createdAt?: DateTimeFilter<"Machine"> | Date | string
    updatedAt?: DateTimeFilter<"Machine"> | Date | string
    type?: XOR<MachineTypeScalarRelationFilter, MachineTypeWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    plant?: XOR<PlantNullableScalarRelationFilter, PlantWhereInput> | null
    factors?: MachineExternalFactorListRelationFilter
    flowSources?: MaterialFlowListRelationFilter
    flowDestinations?: MaterialFlowListRelationFilter
  }, "id">

  export type MachineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    typeId?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    ownerId?: SortOrder
    plantId?: SortOrderInput | SortOrder
    x?: SortOrderInput | SortOrder
    y?: SortOrderInput | SortOrder
    z?: SortOrderInput | SortOrder
    rotation?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MachineCountOrderByAggregateInput
    _avg?: MachineAvgOrderByAggregateInput
    _max?: MachineMaxOrderByAggregateInput
    _min?: MachineMinOrderByAggregateInput
    _sum?: MachineSumOrderByAggregateInput
  }

  export type MachineScalarWhereWithAggregatesInput = {
    AND?: MachineScalarWhereWithAggregatesInput | MachineScalarWhereWithAggregatesInput[]
    OR?: MachineScalarWhereWithAggregatesInput[]
    NOT?: MachineScalarWhereWithAggregatesInput | MachineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Machine"> | number
    name?: StringWithAggregatesFilter<"Machine"> | string
    serialNumber?: StringWithAggregatesFilter<"Machine"> | string
    typeId?: IntWithAggregatesFilter<"Machine"> | number
    length?: IntWithAggregatesFilter<"Machine"> | number
    width?: IntWithAggregatesFilter<"Machine"> | number
    height?: IntWithAggregatesFilter<"Machine"> | number
    ownerId?: IntWithAggregatesFilter<"Machine"> | number
    plantId?: IntNullableWithAggregatesFilter<"Machine"> | number | null
    x?: FloatNullableWithAggregatesFilter<"Machine"> | number | null
    y?: FloatNullableWithAggregatesFilter<"Machine"> | number | null
    z?: FloatNullableWithAggregatesFilter<"Machine"> | number | null
    rotation?: FloatNullableWithAggregatesFilter<"Machine"> | number | null
    color?: StringNullableWithAggregatesFilter<"Machine"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Machine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Machine"> | Date | string
  }

  export type MaterialFlowWhereInput = {
    AND?: MaterialFlowWhereInput | MaterialFlowWhereInput[]
    OR?: MaterialFlowWhereInput[]
    NOT?: MaterialFlowWhereInput | MaterialFlowWhereInput[]
    id?: IntFilter<"MaterialFlow"> | number
    plantId?: IntFilter<"MaterialFlow"> | number
    fromMachineId?: IntFilter<"MaterialFlow"> | number
    toMachineId?: IntFilter<"MaterialFlow"> | number
    flowAmount?: FloatFilter<"MaterialFlow"> | number
    createdAt?: DateTimeFilter<"MaterialFlow"> | Date | string
    updatedAt?: DateTimeFilter<"MaterialFlow"> | Date | string
    plant?: XOR<PlantScalarRelationFilter, PlantWhereInput>
    fromMachine?: XOR<MachineScalarRelationFilter, MachineWhereInput>
    toMachine?: XOR<MachineScalarRelationFilter, MachineWhereInput>
  }

  export type MaterialFlowOrderByWithRelationInput = {
    id?: SortOrder
    plantId?: SortOrder
    fromMachineId?: SortOrder
    toMachineId?: SortOrder
    flowAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plant?: PlantOrderByWithRelationInput
    fromMachine?: MachineOrderByWithRelationInput
    toMachine?: MachineOrderByWithRelationInput
  }

  export type MaterialFlowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    plantId_fromMachineId_toMachineId?: MaterialFlowPlantIdFromMachineIdToMachineIdCompoundUniqueInput
    AND?: MaterialFlowWhereInput | MaterialFlowWhereInput[]
    OR?: MaterialFlowWhereInput[]
    NOT?: MaterialFlowWhereInput | MaterialFlowWhereInput[]
    plantId?: IntFilter<"MaterialFlow"> | number
    fromMachineId?: IntFilter<"MaterialFlow"> | number
    toMachineId?: IntFilter<"MaterialFlow"> | number
    flowAmount?: FloatFilter<"MaterialFlow"> | number
    createdAt?: DateTimeFilter<"MaterialFlow"> | Date | string
    updatedAt?: DateTimeFilter<"MaterialFlow"> | Date | string
    plant?: XOR<PlantScalarRelationFilter, PlantWhereInput>
    fromMachine?: XOR<MachineScalarRelationFilter, MachineWhereInput>
    toMachine?: XOR<MachineScalarRelationFilter, MachineWhereInput>
  }, "id" | "plantId_fromMachineId_toMachineId">

  export type MaterialFlowOrderByWithAggregationInput = {
    id?: SortOrder
    plantId?: SortOrder
    fromMachineId?: SortOrder
    toMachineId?: SortOrder
    flowAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaterialFlowCountOrderByAggregateInput
    _avg?: MaterialFlowAvgOrderByAggregateInput
    _max?: MaterialFlowMaxOrderByAggregateInput
    _min?: MaterialFlowMinOrderByAggregateInput
    _sum?: MaterialFlowSumOrderByAggregateInput
  }

  export type MaterialFlowScalarWhereWithAggregatesInput = {
    AND?: MaterialFlowScalarWhereWithAggregatesInput | MaterialFlowScalarWhereWithAggregatesInput[]
    OR?: MaterialFlowScalarWhereWithAggregatesInput[]
    NOT?: MaterialFlowScalarWhereWithAggregatesInput | MaterialFlowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MaterialFlow"> | number
    plantId?: IntWithAggregatesFilter<"MaterialFlow"> | number
    fromMachineId?: IntWithAggregatesFilter<"MaterialFlow"> | number
    toMachineId?: IntWithAggregatesFilter<"MaterialFlow"> | number
    flowAmount?: FloatWithAggregatesFilter<"MaterialFlow"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MaterialFlow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaterialFlow"> | Date | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plants?: UserPlantCreateNestedManyWithoutUserInput
    machines?: MachineCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plants?: UserPlantUncheckedCreateNestedManyWithoutUserInput
    machines?: MachineUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plants?: UserPlantUpdateManyWithoutUserNestedInput
    machines?: MachineUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plants?: UserPlantUncheckedUpdateManyWithoutUserNestedInput
    machines?: MachineUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlantCreateInput = {
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlantsInput
    plant: PlantCreateNestedOneWithoutUsersInput
  }

  export type UserPlantUncheckedCreateInput = {
    userId: number
    plantId: number
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlantUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlantsNestedInput
    plant?: PlantUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserPlantUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    plantId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlantCreateManyInput = {
    userId: number
    plantId: number
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlantUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlantUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    plantId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantCreateInput = {
    name: string
    description?: string | null
    length: number
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserPlantCreateNestedManyWithoutPlantInput
    machines?: MachineCreateNestedManyWithoutPlantInput
    materialFlows?: MaterialFlowCreateNestedManyWithoutPlantInput
  }

  export type PlantUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    length: number
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserPlantUncheckedCreateNestedManyWithoutPlantInput
    machines?: MachineUncheckedCreateNestedManyWithoutPlantInput
    materialFlows?: MaterialFlowUncheckedCreateNestedManyWithoutPlantInput
  }

  export type PlantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserPlantUpdateManyWithoutPlantNestedInput
    machines?: MachineUpdateManyWithoutPlantNestedInput
    materialFlows?: MaterialFlowUpdateManyWithoutPlantNestedInput
  }

  export type PlantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserPlantUncheckedUpdateManyWithoutPlantNestedInput
    machines?: MachineUncheckedUpdateManyWithoutPlantNestedInput
    materialFlows?: MaterialFlowUncheckedUpdateManyWithoutPlantNestedInput
  }

  export type PlantCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    length: number
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineTypeCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    machines?: MachineCreateNestedManyWithoutTypeInput
  }

  export type MachineTypeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    machines?: MachineUncheckedCreateNestedManyWithoutTypeInput
  }

  export type MachineTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUpdateManyWithoutTypeNestedInput
  }

  export type MachineTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type MachineTypeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalFactorCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    producers?: MachineExternalFactorCreateNestedManyWithoutProducedFactorInput
    sensitives?: MachineExternalFactorCreateNestedManyWithoutSensitiveFactorInput
  }

  export type ExternalFactorUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    producers?: MachineExternalFactorUncheckedCreateNestedManyWithoutProducedFactorInput
    sensitives?: MachineExternalFactorUncheckedCreateNestedManyWithoutSensitiveFactorInput
  }

  export type ExternalFactorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producers?: MachineExternalFactorUpdateManyWithoutProducedFactorNestedInput
    sensitives?: MachineExternalFactorUpdateManyWithoutSensitiveFactorNestedInput
  }

  export type ExternalFactorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producers?: MachineExternalFactorUncheckedUpdateManyWithoutProducedFactorNestedInput
    sensitives?: MachineExternalFactorUncheckedUpdateManyWithoutSensitiveFactorNestedInput
  }

  export type ExternalFactorCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExternalFactorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalFactorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineExternalFactorCreateInput = {
    isProducer: boolean
    isSensitive: boolean
    intensity?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    machine: MachineCreateNestedOneWithoutFactorsInput
    producedFactor?: ExternalFactorCreateNestedOneWithoutProducersInput
    sensitiveFactor?: ExternalFactorCreateNestedOneWithoutSensitivesInput
  }

  export type MachineExternalFactorUncheckedCreateInput = {
    machineId: number
    factorId: number
    isProducer: boolean
    isSensitive: boolean
    intensity?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineExternalFactorUpdateInput = {
    isProducer?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    intensity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machine?: MachineUpdateOneRequiredWithoutFactorsNestedInput
    producedFactor?: ExternalFactorUpdateOneWithoutProducersNestedInput
    sensitiveFactor?: ExternalFactorUpdateOneWithoutSensitivesNestedInput
  }

  export type MachineExternalFactorUncheckedUpdateInput = {
    machineId?: IntFieldUpdateOperationsInput | number
    factorId?: IntFieldUpdateOperationsInput | number
    isProducer?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    intensity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineExternalFactorCreateManyInput = {
    machineId: number
    factorId: number
    isProducer: boolean
    isSensitive: boolean
    intensity?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineExternalFactorUpdateManyMutationInput = {
    isProducer?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    intensity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineExternalFactorUncheckedUpdateManyInput = {
    machineId?: IntFieldUpdateOperationsInput | number
    factorId?: IntFieldUpdateOperationsInput | number
    isProducer?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    intensity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineCreateInput = {
    name: string
    serialNumber: string
    length: number
    width: number
    height: number
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: MachineTypeCreateNestedOneWithoutMachinesInput
    owner: UserCreateNestedOneWithoutMachinesInput
    plant?: PlantCreateNestedOneWithoutMachinesInput
    factors?: MachineExternalFactorCreateNestedManyWithoutMachineInput
    flowSources?: MaterialFlowCreateNestedManyWithoutFromMachineInput
    flowDestinations?: MaterialFlowCreateNestedManyWithoutToMachineInput
  }

  export type MachineUncheckedCreateInput = {
    id?: number
    name: string
    serialNumber: string
    typeId: number
    length: number
    width: number
    height: number
    ownerId: number
    plantId?: number | null
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    factors?: MachineExternalFactorUncheckedCreateNestedManyWithoutMachineInput
    flowSources?: MaterialFlowUncheckedCreateNestedManyWithoutFromMachineInput
    flowDestinations?: MaterialFlowUncheckedCreateNestedManyWithoutToMachineInput
  }

  export type MachineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: MachineTypeUpdateOneRequiredWithoutMachinesNestedInput
    owner?: UserUpdateOneRequiredWithoutMachinesNestedInput
    plant?: PlantUpdateOneWithoutMachinesNestedInput
    factors?: MachineExternalFactorUpdateManyWithoutMachineNestedInput
    flowSources?: MaterialFlowUpdateManyWithoutFromMachineNestedInput
    flowDestinations?: MaterialFlowUpdateManyWithoutToMachineNestedInput
  }

  export type MachineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    plantId?: NullableIntFieldUpdateOperationsInput | number | null
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    factors?: MachineExternalFactorUncheckedUpdateManyWithoutMachineNestedInput
    flowSources?: MaterialFlowUncheckedUpdateManyWithoutFromMachineNestedInput
    flowDestinations?: MaterialFlowUncheckedUpdateManyWithoutToMachineNestedInput
  }

  export type MachineCreateManyInput = {
    id?: number
    name: string
    serialNumber: string
    typeId: number
    length: number
    width: number
    height: number
    ownerId: number
    plantId?: number | null
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    plantId?: NullableIntFieldUpdateOperationsInput | number | null
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialFlowCreateInput = {
    flowAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    plant: PlantCreateNestedOneWithoutMaterialFlowsInput
    fromMachine: MachineCreateNestedOneWithoutFlowSourcesInput
    toMachine: MachineCreateNestedOneWithoutFlowDestinationsInput
  }

  export type MaterialFlowUncheckedCreateInput = {
    id?: number
    plantId: number
    fromMachineId: number
    toMachineId: number
    flowAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialFlowUpdateInput = {
    flowAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plant?: PlantUpdateOneRequiredWithoutMaterialFlowsNestedInput
    fromMachine?: MachineUpdateOneRequiredWithoutFlowSourcesNestedInput
    toMachine?: MachineUpdateOneRequiredWithoutFlowDestinationsNestedInput
  }

  export type MaterialFlowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    plantId?: IntFieldUpdateOperationsInput | number
    fromMachineId?: IntFieldUpdateOperationsInput | number
    toMachineId?: IntFieldUpdateOperationsInput | number
    flowAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialFlowCreateManyInput = {
    id?: number
    plantId: number
    fromMachineId: number
    toMachineId: number
    flowAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialFlowUpdateManyMutationInput = {
    flowAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialFlowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    plantId?: IntFieldUpdateOperationsInput | number
    fromMachineId?: IntFieldUpdateOperationsInput | number
    toMachineId?: IntFieldUpdateOperationsInput | number
    flowAmount?: FloatFieldUpdateOperationsInput | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserPlantListRelationFilter = {
    every?: UserPlantWhereInput
    some?: UserPlantWhereInput
    none?: UserPlantWhereInput
  }

  export type MachineListRelationFilter = {
    every?: MachineWhereInput
    some?: MachineWhereInput
    none?: MachineWhereInput
  }

  export type UserPlantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MachineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlantScalarRelationFilter = {
    is?: PlantWhereInput
    isNot?: PlantWhereInput
  }

  export type UserPlantUserIdPlantIdCompoundUniqueInput = {
    userId: number
    plantId: number
  }

  export type UserPlantCountOrderByAggregateInput = {
    userId?: SortOrder
    plantId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPlantAvgOrderByAggregateInput = {
    userId?: SortOrder
    plantId?: SortOrder
  }

  export type UserPlantMaxOrderByAggregateInput = {
    userId?: SortOrder
    plantId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPlantMinOrderByAggregateInput = {
    userId?: SortOrder
    plantId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPlantSumOrderByAggregateInput = {
    userId?: SortOrder
    plantId?: SortOrder
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

  export type MaterialFlowListRelationFilter = {
    every?: MaterialFlowWhereInput
    some?: MaterialFlowWhereInput
    none?: MaterialFlowWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MaterialFlowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlantAvgOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type PlantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlantSumOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
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

  export type MachineTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MachineTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MachineTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MachineTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MachineTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MachineExternalFactorListRelationFilter = {
    every?: MachineExternalFactorWhereInput
    some?: MachineExternalFactorWhereInput
    none?: MachineExternalFactorWhereInput
  }

  export type MachineExternalFactorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExternalFactorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExternalFactorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExternalFactorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExternalFactorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExternalFactorSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type MachineScalarRelationFilter = {
    is?: MachineWhereInput
    isNot?: MachineWhereInput
  }

  export type ExternalFactorNullableScalarRelationFilter = {
    is?: ExternalFactorWhereInput | null
    isNot?: ExternalFactorWhereInput | null
  }

  export type MachineExternalFactorMachineIdFactorIdCompoundUniqueInput = {
    machineId: number
    factorId: number
  }

  export type MachineExternalFactorCountOrderByAggregateInput = {
    machineId?: SortOrder
    factorId?: SortOrder
    isProducer?: SortOrder
    isSensitive?: SortOrder
    intensity?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MachineExternalFactorAvgOrderByAggregateInput = {
    machineId?: SortOrder
    factorId?: SortOrder
    intensity?: SortOrder
  }

  export type MachineExternalFactorMaxOrderByAggregateInput = {
    machineId?: SortOrder
    factorId?: SortOrder
    isProducer?: SortOrder
    isSensitive?: SortOrder
    intensity?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MachineExternalFactorMinOrderByAggregateInput = {
    machineId?: SortOrder
    factorId?: SortOrder
    isProducer?: SortOrder
    isSensitive?: SortOrder
    intensity?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MachineExternalFactorSumOrderByAggregateInput = {
    machineId?: SortOrder
    factorId?: SortOrder
    intensity?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MachineTypeScalarRelationFilter = {
    is?: MachineTypeWhereInput
    isNot?: MachineTypeWhereInput
  }

  export type PlantNullableScalarRelationFilter = {
    is?: PlantWhereInput | null
    isNot?: PlantWhereInput | null
  }

  export type MachineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    typeId?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    ownerId?: SortOrder
    plantId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    rotation?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MachineAvgOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    ownerId?: SortOrder
    plantId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    rotation?: SortOrder
  }

  export type MachineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    typeId?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    ownerId?: SortOrder
    plantId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    rotation?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MachineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    typeId?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    ownerId?: SortOrder
    plantId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    rotation?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MachineSumOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    ownerId?: SortOrder
    plantId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    rotation?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type MaterialFlowPlantIdFromMachineIdToMachineIdCompoundUniqueInput = {
    plantId: number
    fromMachineId: number
    toMachineId: number
  }

  export type MaterialFlowCountOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
    fromMachineId?: SortOrder
    toMachineId?: SortOrder
    flowAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialFlowAvgOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
    fromMachineId?: SortOrder
    toMachineId?: SortOrder
    flowAmount?: SortOrder
  }

  export type MaterialFlowMaxOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
    fromMachineId?: SortOrder
    toMachineId?: SortOrder
    flowAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialFlowMinOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
    fromMachineId?: SortOrder
    toMachineId?: SortOrder
    flowAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialFlowSumOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
    fromMachineId?: SortOrder
    toMachineId?: SortOrder
    flowAmount?: SortOrder
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

  export type UserPlantCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPlantCreateWithoutUserInput, UserPlantUncheckedCreateWithoutUserInput> | UserPlantCreateWithoutUserInput[] | UserPlantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlantCreateOrConnectWithoutUserInput | UserPlantCreateOrConnectWithoutUserInput[]
    createMany?: UserPlantCreateManyUserInputEnvelope
    connect?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
  }

  export type MachineCreateNestedManyWithoutOwnerInput = {
    create?: XOR<MachineCreateWithoutOwnerInput, MachineUncheckedCreateWithoutOwnerInput> | MachineCreateWithoutOwnerInput[] | MachineUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutOwnerInput | MachineCreateOrConnectWithoutOwnerInput[]
    createMany?: MachineCreateManyOwnerInputEnvelope
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
  }

  export type UserPlantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPlantCreateWithoutUserInput, UserPlantUncheckedCreateWithoutUserInput> | UserPlantCreateWithoutUserInput[] | UserPlantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlantCreateOrConnectWithoutUserInput | UserPlantCreateOrConnectWithoutUserInput[]
    createMany?: UserPlantCreateManyUserInputEnvelope
    connect?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
  }

  export type MachineUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<MachineCreateWithoutOwnerInput, MachineUncheckedCreateWithoutOwnerInput> | MachineCreateWithoutOwnerInput[] | MachineUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutOwnerInput | MachineCreateOrConnectWithoutOwnerInput[]
    createMany?: MachineCreateManyOwnerInputEnvelope
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserPlantUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPlantCreateWithoutUserInput, UserPlantUncheckedCreateWithoutUserInput> | UserPlantCreateWithoutUserInput[] | UserPlantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlantCreateOrConnectWithoutUserInput | UserPlantCreateOrConnectWithoutUserInput[]
    upsert?: UserPlantUpsertWithWhereUniqueWithoutUserInput | UserPlantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPlantCreateManyUserInputEnvelope
    set?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    disconnect?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    delete?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    connect?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    update?: UserPlantUpdateWithWhereUniqueWithoutUserInput | UserPlantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPlantUpdateManyWithWhereWithoutUserInput | UserPlantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPlantScalarWhereInput | UserPlantScalarWhereInput[]
  }

  export type MachineUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<MachineCreateWithoutOwnerInput, MachineUncheckedCreateWithoutOwnerInput> | MachineCreateWithoutOwnerInput[] | MachineUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutOwnerInput | MachineCreateOrConnectWithoutOwnerInput[]
    upsert?: MachineUpsertWithWhereUniqueWithoutOwnerInput | MachineUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: MachineCreateManyOwnerInputEnvelope
    set?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    disconnect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    delete?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    update?: MachineUpdateWithWhereUniqueWithoutOwnerInput | MachineUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: MachineUpdateManyWithWhereWithoutOwnerInput | MachineUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: MachineScalarWhereInput | MachineScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserPlantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPlantCreateWithoutUserInput, UserPlantUncheckedCreateWithoutUserInput> | UserPlantCreateWithoutUserInput[] | UserPlantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlantCreateOrConnectWithoutUserInput | UserPlantCreateOrConnectWithoutUserInput[]
    upsert?: UserPlantUpsertWithWhereUniqueWithoutUserInput | UserPlantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPlantCreateManyUserInputEnvelope
    set?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    disconnect?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    delete?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    connect?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    update?: UserPlantUpdateWithWhereUniqueWithoutUserInput | UserPlantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPlantUpdateManyWithWhereWithoutUserInput | UserPlantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPlantScalarWhereInput | UserPlantScalarWhereInput[]
  }

  export type MachineUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<MachineCreateWithoutOwnerInput, MachineUncheckedCreateWithoutOwnerInput> | MachineCreateWithoutOwnerInput[] | MachineUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutOwnerInput | MachineCreateOrConnectWithoutOwnerInput[]
    upsert?: MachineUpsertWithWhereUniqueWithoutOwnerInput | MachineUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: MachineCreateManyOwnerInputEnvelope
    set?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    disconnect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    delete?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    update?: MachineUpdateWithWhereUniqueWithoutOwnerInput | MachineUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: MachineUpdateManyWithWhereWithoutOwnerInput | MachineUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: MachineScalarWhereInput | MachineScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPlantsInput = {
    create?: XOR<UserCreateWithoutPlantsInput, UserUncheckedCreateWithoutPlantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlantsInput
    connect?: UserWhereUniqueInput
  }

  export type PlantCreateNestedOneWithoutUsersInput = {
    create?: XOR<PlantCreateWithoutUsersInput, PlantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PlantCreateOrConnectWithoutUsersInput
    connect?: PlantWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPlantsNestedInput = {
    create?: XOR<UserCreateWithoutPlantsInput, UserUncheckedCreateWithoutPlantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlantsInput
    upsert?: UserUpsertWithoutPlantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlantsInput, UserUpdateWithoutPlantsInput>, UserUncheckedUpdateWithoutPlantsInput>
  }

  export type PlantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<PlantCreateWithoutUsersInput, PlantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PlantCreateOrConnectWithoutUsersInput
    upsert?: PlantUpsertWithoutUsersInput
    connect?: PlantWhereUniqueInput
    update?: XOR<XOR<PlantUpdateToOneWithWhereWithoutUsersInput, PlantUpdateWithoutUsersInput>, PlantUncheckedUpdateWithoutUsersInput>
  }

  export type UserPlantCreateNestedManyWithoutPlantInput = {
    create?: XOR<UserPlantCreateWithoutPlantInput, UserPlantUncheckedCreateWithoutPlantInput> | UserPlantCreateWithoutPlantInput[] | UserPlantUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: UserPlantCreateOrConnectWithoutPlantInput | UserPlantCreateOrConnectWithoutPlantInput[]
    createMany?: UserPlantCreateManyPlantInputEnvelope
    connect?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
  }

  export type MachineCreateNestedManyWithoutPlantInput = {
    create?: XOR<MachineCreateWithoutPlantInput, MachineUncheckedCreateWithoutPlantInput> | MachineCreateWithoutPlantInput[] | MachineUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutPlantInput | MachineCreateOrConnectWithoutPlantInput[]
    createMany?: MachineCreateManyPlantInputEnvelope
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
  }

  export type MaterialFlowCreateNestedManyWithoutPlantInput = {
    create?: XOR<MaterialFlowCreateWithoutPlantInput, MaterialFlowUncheckedCreateWithoutPlantInput> | MaterialFlowCreateWithoutPlantInput[] | MaterialFlowUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: MaterialFlowCreateOrConnectWithoutPlantInput | MaterialFlowCreateOrConnectWithoutPlantInput[]
    createMany?: MaterialFlowCreateManyPlantInputEnvelope
    connect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
  }

  export type UserPlantUncheckedCreateNestedManyWithoutPlantInput = {
    create?: XOR<UserPlantCreateWithoutPlantInput, UserPlantUncheckedCreateWithoutPlantInput> | UserPlantCreateWithoutPlantInput[] | UserPlantUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: UserPlantCreateOrConnectWithoutPlantInput | UserPlantCreateOrConnectWithoutPlantInput[]
    createMany?: UserPlantCreateManyPlantInputEnvelope
    connect?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
  }

  export type MachineUncheckedCreateNestedManyWithoutPlantInput = {
    create?: XOR<MachineCreateWithoutPlantInput, MachineUncheckedCreateWithoutPlantInput> | MachineCreateWithoutPlantInput[] | MachineUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutPlantInput | MachineCreateOrConnectWithoutPlantInput[]
    createMany?: MachineCreateManyPlantInputEnvelope
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
  }

  export type MaterialFlowUncheckedCreateNestedManyWithoutPlantInput = {
    create?: XOR<MaterialFlowCreateWithoutPlantInput, MaterialFlowUncheckedCreateWithoutPlantInput> | MaterialFlowCreateWithoutPlantInput[] | MaterialFlowUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: MaterialFlowCreateOrConnectWithoutPlantInput | MaterialFlowCreateOrConnectWithoutPlantInput[]
    createMany?: MaterialFlowCreateManyPlantInputEnvelope
    connect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserPlantUpdateManyWithoutPlantNestedInput = {
    create?: XOR<UserPlantCreateWithoutPlantInput, UserPlantUncheckedCreateWithoutPlantInput> | UserPlantCreateWithoutPlantInput[] | UserPlantUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: UserPlantCreateOrConnectWithoutPlantInput | UserPlantCreateOrConnectWithoutPlantInput[]
    upsert?: UserPlantUpsertWithWhereUniqueWithoutPlantInput | UserPlantUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: UserPlantCreateManyPlantInputEnvelope
    set?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    disconnect?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    delete?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    connect?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    update?: UserPlantUpdateWithWhereUniqueWithoutPlantInput | UserPlantUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: UserPlantUpdateManyWithWhereWithoutPlantInput | UserPlantUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: UserPlantScalarWhereInput | UserPlantScalarWhereInput[]
  }

  export type MachineUpdateManyWithoutPlantNestedInput = {
    create?: XOR<MachineCreateWithoutPlantInput, MachineUncheckedCreateWithoutPlantInput> | MachineCreateWithoutPlantInput[] | MachineUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutPlantInput | MachineCreateOrConnectWithoutPlantInput[]
    upsert?: MachineUpsertWithWhereUniqueWithoutPlantInput | MachineUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: MachineCreateManyPlantInputEnvelope
    set?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    disconnect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    delete?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    update?: MachineUpdateWithWhereUniqueWithoutPlantInput | MachineUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: MachineUpdateManyWithWhereWithoutPlantInput | MachineUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: MachineScalarWhereInput | MachineScalarWhereInput[]
  }

  export type MaterialFlowUpdateManyWithoutPlantNestedInput = {
    create?: XOR<MaterialFlowCreateWithoutPlantInput, MaterialFlowUncheckedCreateWithoutPlantInput> | MaterialFlowCreateWithoutPlantInput[] | MaterialFlowUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: MaterialFlowCreateOrConnectWithoutPlantInput | MaterialFlowCreateOrConnectWithoutPlantInput[]
    upsert?: MaterialFlowUpsertWithWhereUniqueWithoutPlantInput | MaterialFlowUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: MaterialFlowCreateManyPlantInputEnvelope
    set?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    disconnect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    delete?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    connect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    update?: MaterialFlowUpdateWithWhereUniqueWithoutPlantInput | MaterialFlowUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: MaterialFlowUpdateManyWithWhereWithoutPlantInput | MaterialFlowUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: MaterialFlowScalarWhereInput | MaterialFlowScalarWhereInput[]
  }

  export type UserPlantUncheckedUpdateManyWithoutPlantNestedInput = {
    create?: XOR<UserPlantCreateWithoutPlantInput, UserPlantUncheckedCreateWithoutPlantInput> | UserPlantCreateWithoutPlantInput[] | UserPlantUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: UserPlantCreateOrConnectWithoutPlantInput | UserPlantCreateOrConnectWithoutPlantInput[]
    upsert?: UserPlantUpsertWithWhereUniqueWithoutPlantInput | UserPlantUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: UserPlantCreateManyPlantInputEnvelope
    set?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    disconnect?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    delete?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    connect?: UserPlantWhereUniqueInput | UserPlantWhereUniqueInput[]
    update?: UserPlantUpdateWithWhereUniqueWithoutPlantInput | UserPlantUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: UserPlantUpdateManyWithWhereWithoutPlantInput | UserPlantUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: UserPlantScalarWhereInput | UserPlantScalarWhereInput[]
  }

  export type MachineUncheckedUpdateManyWithoutPlantNestedInput = {
    create?: XOR<MachineCreateWithoutPlantInput, MachineUncheckedCreateWithoutPlantInput> | MachineCreateWithoutPlantInput[] | MachineUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutPlantInput | MachineCreateOrConnectWithoutPlantInput[]
    upsert?: MachineUpsertWithWhereUniqueWithoutPlantInput | MachineUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: MachineCreateManyPlantInputEnvelope
    set?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    disconnect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    delete?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    update?: MachineUpdateWithWhereUniqueWithoutPlantInput | MachineUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: MachineUpdateManyWithWhereWithoutPlantInput | MachineUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: MachineScalarWhereInput | MachineScalarWhereInput[]
  }

  export type MaterialFlowUncheckedUpdateManyWithoutPlantNestedInput = {
    create?: XOR<MaterialFlowCreateWithoutPlantInput, MaterialFlowUncheckedCreateWithoutPlantInput> | MaterialFlowCreateWithoutPlantInput[] | MaterialFlowUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: MaterialFlowCreateOrConnectWithoutPlantInput | MaterialFlowCreateOrConnectWithoutPlantInput[]
    upsert?: MaterialFlowUpsertWithWhereUniqueWithoutPlantInput | MaterialFlowUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: MaterialFlowCreateManyPlantInputEnvelope
    set?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    disconnect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    delete?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    connect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    update?: MaterialFlowUpdateWithWhereUniqueWithoutPlantInput | MaterialFlowUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: MaterialFlowUpdateManyWithWhereWithoutPlantInput | MaterialFlowUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: MaterialFlowScalarWhereInput | MaterialFlowScalarWhereInput[]
  }

  export type MachineCreateNestedManyWithoutTypeInput = {
    create?: XOR<MachineCreateWithoutTypeInput, MachineUncheckedCreateWithoutTypeInput> | MachineCreateWithoutTypeInput[] | MachineUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutTypeInput | MachineCreateOrConnectWithoutTypeInput[]
    createMany?: MachineCreateManyTypeInputEnvelope
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
  }

  export type MachineUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<MachineCreateWithoutTypeInput, MachineUncheckedCreateWithoutTypeInput> | MachineCreateWithoutTypeInput[] | MachineUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutTypeInput | MachineCreateOrConnectWithoutTypeInput[]
    createMany?: MachineCreateManyTypeInputEnvelope
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
  }

  export type MachineUpdateManyWithoutTypeNestedInput = {
    create?: XOR<MachineCreateWithoutTypeInput, MachineUncheckedCreateWithoutTypeInput> | MachineCreateWithoutTypeInput[] | MachineUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutTypeInput | MachineCreateOrConnectWithoutTypeInput[]
    upsert?: MachineUpsertWithWhereUniqueWithoutTypeInput | MachineUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: MachineCreateManyTypeInputEnvelope
    set?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    disconnect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    delete?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    update?: MachineUpdateWithWhereUniqueWithoutTypeInput | MachineUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: MachineUpdateManyWithWhereWithoutTypeInput | MachineUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: MachineScalarWhereInput | MachineScalarWhereInput[]
  }

  export type MachineUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<MachineCreateWithoutTypeInput, MachineUncheckedCreateWithoutTypeInput> | MachineCreateWithoutTypeInput[] | MachineUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutTypeInput | MachineCreateOrConnectWithoutTypeInput[]
    upsert?: MachineUpsertWithWhereUniqueWithoutTypeInput | MachineUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: MachineCreateManyTypeInputEnvelope
    set?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    disconnect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    delete?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    update?: MachineUpdateWithWhereUniqueWithoutTypeInput | MachineUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: MachineUpdateManyWithWhereWithoutTypeInput | MachineUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: MachineScalarWhereInput | MachineScalarWhereInput[]
  }

  export type MachineExternalFactorCreateNestedManyWithoutProducedFactorInput = {
    create?: XOR<MachineExternalFactorCreateWithoutProducedFactorInput, MachineExternalFactorUncheckedCreateWithoutProducedFactorInput> | MachineExternalFactorCreateWithoutProducedFactorInput[] | MachineExternalFactorUncheckedCreateWithoutProducedFactorInput[]
    connectOrCreate?: MachineExternalFactorCreateOrConnectWithoutProducedFactorInput | MachineExternalFactorCreateOrConnectWithoutProducedFactorInput[]
    createMany?: MachineExternalFactorCreateManyProducedFactorInputEnvelope
    connect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
  }

  export type MachineExternalFactorCreateNestedManyWithoutSensitiveFactorInput = {
    create?: XOR<MachineExternalFactorCreateWithoutSensitiveFactorInput, MachineExternalFactorUncheckedCreateWithoutSensitiveFactorInput> | MachineExternalFactorCreateWithoutSensitiveFactorInput[] | MachineExternalFactorUncheckedCreateWithoutSensitiveFactorInput[]
    connectOrCreate?: MachineExternalFactorCreateOrConnectWithoutSensitiveFactorInput | MachineExternalFactorCreateOrConnectWithoutSensitiveFactorInput[]
    createMany?: MachineExternalFactorCreateManySensitiveFactorInputEnvelope
    connect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
  }

  export type MachineExternalFactorUncheckedCreateNestedManyWithoutProducedFactorInput = {
    create?: XOR<MachineExternalFactorCreateWithoutProducedFactorInput, MachineExternalFactorUncheckedCreateWithoutProducedFactorInput> | MachineExternalFactorCreateWithoutProducedFactorInput[] | MachineExternalFactorUncheckedCreateWithoutProducedFactorInput[]
    connectOrCreate?: MachineExternalFactorCreateOrConnectWithoutProducedFactorInput | MachineExternalFactorCreateOrConnectWithoutProducedFactorInput[]
    createMany?: MachineExternalFactorCreateManyProducedFactorInputEnvelope
    connect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
  }

  export type MachineExternalFactorUncheckedCreateNestedManyWithoutSensitiveFactorInput = {
    create?: XOR<MachineExternalFactorCreateWithoutSensitiveFactorInput, MachineExternalFactorUncheckedCreateWithoutSensitiveFactorInput> | MachineExternalFactorCreateWithoutSensitiveFactorInput[] | MachineExternalFactorUncheckedCreateWithoutSensitiveFactorInput[]
    connectOrCreate?: MachineExternalFactorCreateOrConnectWithoutSensitiveFactorInput | MachineExternalFactorCreateOrConnectWithoutSensitiveFactorInput[]
    createMany?: MachineExternalFactorCreateManySensitiveFactorInputEnvelope
    connect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
  }

  export type MachineExternalFactorUpdateManyWithoutProducedFactorNestedInput = {
    create?: XOR<MachineExternalFactorCreateWithoutProducedFactorInput, MachineExternalFactorUncheckedCreateWithoutProducedFactorInput> | MachineExternalFactorCreateWithoutProducedFactorInput[] | MachineExternalFactorUncheckedCreateWithoutProducedFactorInput[]
    connectOrCreate?: MachineExternalFactorCreateOrConnectWithoutProducedFactorInput | MachineExternalFactorCreateOrConnectWithoutProducedFactorInput[]
    upsert?: MachineExternalFactorUpsertWithWhereUniqueWithoutProducedFactorInput | MachineExternalFactorUpsertWithWhereUniqueWithoutProducedFactorInput[]
    createMany?: MachineExternalFactorCreateManyProducedFactorInputEnvelope
    set?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    disconnect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    delete?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    connect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    update?: MachineExternalFactorUpdateWithWhereUniqueWithoutProducedFactorInput | MachineExternalFactorUpdateWithWhereUniqueWithoutProducedFactorInput[]
    updateMany?: MachineExternalFactorUpdateManyWithWhereWithoutProducedFactorInput | MachineExternalFactorUpdateManyWithWhereWithoutProducedFactorInput[]
    deleteMany?: MachineExternalFactorScalarWhereInput | MachineExternalFactorScalarWhereInput[]
  }

  export type MachineExternalFactorUpdateManyWithoutSensitiveFactorNestedInput = {
    create?: XOR<MachineExternalFactorCreateWithoutSensitiveFactorInput, MachineExternalFactorUncheckedCreateWithoutSensitiveFactorInput> | MachineExternalFactorCreateWithoutSensitiveFactorInput[] | MachineExternalFactorUncheckedCreateWithoutSensitiveFactorInput[]
    connectOrCreate?: MachineExternalFactorCreateOrConnectWithoutSensitiveFactorInput | MachineExternalFactorCreateOrConnectWithoutSensitiveFactorInput[]
    upsert?: MachineExternalFactorUpsertWithWhereUniqueWithoutSensitiveFactorInput | MachineExternalFactorUpsertWithWhereUniqueWithoutSensitiveFactorInput[]
    createMany?: MachineExternalFactorCreateManySensitiveFactorInputEnvelope
    set?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    disconnect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    delete?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    connect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    update?: MachineExternalFactorUpdateWithWhereUniqueWithoutSensitiveFactorInput | MachineExternalFactorUpdateWithWhereUniqueWithoutSensitiveFactorInput[]
    updateMany?: MachineExternalFactorUpdateManyWithWhereWithoutSensitiveFactorInput | MachineExternalFactorUpdateManyWithWhereWithoutSensitiveFactorInput[]
    deleteMany?: MachineExternalFactorScalarWhereInput | MachineExternalFactorScalarWhereInput[]
  }

  export type MachineExternalFactorUncheckedUpdateManyWithoutProducedFactorNestedInput = {
    create?: XOR<MachineExternalFactorCreateWithoutProducedFactorInput, MachineExternalFactorUncheckedCreateWithoutProducedFactorInput> | MachineExternalFactorCreateWithoutProducedFactorInput[] | MachineExternalFactorUncheckedCreateWithoutProducedFactorInput[]
    connectOrCreate?: MachineExternalFactorCreateOrConnectWithoutProducedFactorInput | MachineExternalFactorCreateOrConnectWithoutProducedFactorInput[]
    upsert?: MachineExternalFactorUpsertWithWhereUniqueWithoutProducedFactorInput | MachineExternalFactorUpsertWithWhereUniqueWithoutProducedFactorInput[]
    createMany?: MachineExternalFactorCreateManyProducedFactorInputEnvelope
    set?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    disconnect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    delete?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    connect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    update?: MachineExternalFactorUpdateWithWhereUniqueWithoutProducedFactorInput | MachineExternalFactorUpdateWithWhereUniqueWithoutProducedFactorInput[]
    updateMany?: MachineExternalFactorUpdateManyWithWhereWithoutProducedFactorInput | MachineExternalFactorUpdateManyWithWhereWithoutProducedFactorInput[]
    deleteMany?: MachineExternalFactorScalarWhereInput | MachineExternalFactorScalarWhereInput[]
  }

  export type MachineExternalFactorUncheckedUpdateManyWithoutSensitiveFactorNestedInput = {
    create?: XOR<MachineExternalFactorCreateWithoutSensitiveFactorInput, MachineExternalFactorUncheckedCreateWithoutSensitiveFactorInput> | MachineExternalFactorCreateWithoutSensitiveFactorInput[] | MachineExternalFactorUncheckedCreateWithoutSensitiveFactorInput[]
    connectOrCreate?: MachineExternalFactorCreateOrConnectWithoutSensitiveFactorInput | MachineExternalFactorCreateOrConnectWithoutSensitiveFactorInput[]
    upsert?: MachineExternalFactorUpsertWithWhereUniqueWithoutSensitiveFactorInput | MachineExternalFactorUpsertWithWhereUniqueWithoutSensitiveFactorInput[]
    createMany?: MachineExternalFactorCreateManySensitiveFactorInputEnvelope
    set?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    disconnect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    delete?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    connect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    update?: MachineExternalFactorUpdateWithWhereUniqueWithoutSensitiveFactorInput | MachineExternalFactorUpdateWithWhereUniqueWithoutSensitiveFactorInput[]
    updateMany?: MachineExternalFactorUpdateManyWithWhereWithoutSensitiveFactorInput | MachineExternalFactorUpdateManyWithWhereWithoutSensitiveFactorInput[]
    deleteMany?: MachineExternalFactorScalarWhereInput | MachineExternalFactorScalarWhereInput[]
  }

  export type MachineCreateNestedOneWithoutFactorsInput = {
    create?: XOR<MachineCreateWithoutFactorsInput, MachineUncheckedCreateWithoutFactorsInput>
    connectOrCreate?: MachineCreateOrConnectWithoutFactorsInput
    connect?: MachineWhereUniqueInput
  }

  export type ExternalFactorCreateNestedOneWithoutProducersInput = {
    create?: XOR<ExternalFactorCreateWithoutProducersInput, ExternalFactorUncheckedCreateWithoutProducersInput>
    connectOrCreate?: ExternalFactorCreateOrConnectWithoutProducersInput
    connect?: ExternalFactorWhereUniqueInput
  }

  export type ExternalFactorCreateNestedOneWithoutSensitivesInput = {
    create?: XOR<ExternalFactorCreateWithoutSensitivesInput, ExternalFactorUncheckedCreateWithoutSensitivesInput>
    connectOrCreate?: ExternalFactorCreateOrConnectWithoutSensitivesInput
    connect?: ExternalFactorWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MachineUpdateOneRequiredWithoutFactorsNestedInput = {
    create?: XOR<MachineCreateWithoutFactorsInput, MachineUncheckedCreateWithoutFactorsInput>
    connectOrCreate?: MachineCreateOrConnectWithoutFactorsInput
    upsert?: MachineUpsertWithoutFactorsInput
    connect?: MachineWhereUniqueInput
    update?: XOR<XOR<MachineUpdateToOneWithWhereWithoutFactorsInput, MachineUpdateWithoutFactorsInput>, MachineUncheckedUpdateWithoutFactorsInput>
  }

  export type ExternalFactorUpdateOneWithoutProducersNestedInput = {
    create?: XOR<ExternalFactorCreateWithoutProducersInput, ExternalFactorUncheckedCreateWithoutProducersInput>
    connectOrCreate?: ExternalFactorCreateOrConnectWithoutProducersInput
    upsert?: ExternalFactorUpsertWithoutProducersInput
    disconnect?: ExternalFactorWhereInput | boolean
    delete?: ExternalFactorWhereInput | boolean
    connect?: ExternalFactorWhereUniqueInput
    update?: XOR<XOR<ExternalFactorUpdateToOneWithWhereWithoutProducersInput, ExternalFactorUpdateWithoutProducersInput>, ExternalFactorUncheckedUpdateWithoutProducersInput>
  }

  export type ExternalFactorUpdateOneWithoutSensitivesNestedInput = {
    create?: XOR<ExternalFactorCreateWithoutSensitivesInput, ExternalFactorUncheckedCreateWithoutSensitivesInput>
    connectOrCreate?: ExternalFactorCreateOrConnectWithoutSensitivesInput
    upsert?: ExternalFactorUpsertWithoutSensitivesInput
    disconnect?: ExternalFactorWhereInput | boolean
    delete?: ExternalFactorWhereInput | boolean
    connect?: ExternalFactorWhereUniqueInput
    update?: XOR<XOR<ExternalFactorUpdateToOneWithWhereWithoutSensitivesInput, ExternalFactorUpdateWithoutSensitivesInput>, ExternalFactorUncheckedUpdateWithoutSensitivesInput>
  }

  export type MachineTypeCreateNestedOneWithoutMachinesInput = {
    create?: XOR<MachineTypeCreateWithoutMachinesInput, MachineTypeUncheckedCreateWithoutMachinesInput>
    connectOrCreate?: MachineTypeCreateOrConnectWithoutMachinesInput
    connect?: MachineTypeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMachinesInput = {
    create?: XOR<UserCreateWithoutMachinesInput, UserUncheckedCreateWithoutMachinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMachinesInput
    connect?: UserWhereUniqueInput
  }

  export type PlantCreateNestedOneWithoutMachinesInput = {
    create?: XOR<PlantCreateWithoutMachinesInput, PlantUncheckedCreateWithoutMachinesInput>
    connectOrCreate?: PlantCreateOrConnectWithoutMachinesInput
    connect?: PlantWhereUniqueInput
  }

  export type MachineExternalFactorCreateNestedManyWithoutMachineInput = {
    create?: XOR<MachineExternalFactorCreateWithoutMachineInput, MachineExternalFactorUncheckedCreateWithoutMachineInput> | MachineExternalFactorCreateWithoutMachineInput[] | MachineExternalFactorUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: MachineExternalFactorCreateOrConnectWithoutMachineInput | MachineExternalFactorCreateOrConnectWithoutMachineInput[]
    createMany?: MachineExternalFactorCreateManyMachineInputEnvelope
    connect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
  }

  export type MaterialFlowCreateNestedManyWithoutFromMachineInput = {
    create?: XOR<MaterialFlowCreateWithoutFromMachineInput, MaterialFlowUncheckedCreateWithoutFromMachineInput> | MaterialFlowCreateWithoutFromMachineInput[] | MaterialFlowUncheckedCreateWithoutFromMachineInput[]
    connectOrCreate?: MaterialFlowCreateOrConnectWithoutFromMachineInput | MaterialFlowCreateOrConnectWithoutFromMachineInput[]
    createMany?: MaterialFlowCreateManyFromMachineInputEnvelope
    connect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
  }

  export type MaterialFlowCreateNestedManyWithoutToMachineInput = {
    create?: XOR<MaterialFlowCreateWithoutToMachineInput, MaterialFlowUncheckedCreateWithoutToMachineInput> | MaterialFlowCreateWithoutToMachineInput[] | MaterialFlowUncheckedCreateWithoutToMachineInput[]
    connectOrCreate?: MaterialFlowCreateOrConnectWithoutToMachineInput | MaterialFlowCreateOrConnectWithoutToMachineInput[]
    createMany?: MaterialFlowCreateManyToMachineInputEnvelope
    connect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
  }

  export type MachineExternalFactorUncheckedCreateNestedManyWithoutMachineInput = {
    create?: XOR<MachineExternalFactorCreateWithoutMachineInput, MachineExternalFactorUncheckedCreateWithoutMachineInput> | MachineExternalFactorCreateWithoutMachineInput[] | MachineExternalFactorUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: MachineExternalFactorCreateOrConnectWithoutMachineInput | MachineExternalFactorCreateOrConnectWithoutMachineInput[]
    createMany?: MachineExternalFactorCreateManyMachineInputEnvelope
    connect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
  }

  export type MaterialFlowUncheckedCreateNestedManyWithoutFromMachineInput = {
    create?: XOR<MaterialFlowCreateWithoutFromMachineInput, MaterialFlowUncheckedCreateWithoutFromMachineInput> | MaterialFlowCreateWithoutFromMachineInput[] | MaterialFlowUncheckedCreateWithoutFromMachineInput[]
    connectOrCreate?: MaterialFlowCreateOrConnectWithoutFromMachineInput | MaterialFlowCreateOrConnectWithoutFromMachineInput[]
    createMany?: MaterialFlowCreateManyFromMachineInputEnvelope
    connect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
  }

  export type MaterialFlowUncheckedCreateNestedManyWithoutToMachineInput = {
    create?: XOR<MaterialFlowCreateWithoutToMachineInput, MaterialFlowUncheckedCreateWithoutToMachineInput> | MaterialFlowCreateWithoutToMachineInput[] | MaterialFlowUncheckedCreateWithoutToMachineInput[]
    connectOrCreate?: MaterialFlowCreateOrConnectWithoutToMachineInput | MaterialFlowCreateOrConnectWithoutToMachineInput[]
    createMany?: MaterialFlowCreateManyToMachineInputEnvelope
    connect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MachineTypeUpdateOneRequiredWithoutMachinesNestedInput = {
    create?: XOR<MachineTypeCreateWithoutMachinesInput, MachineTypeUncheckedCreateWithoutMachinesInput>
    connectOrCreate?: MachineTypeCreateOrConnectWithoutMachinesInput
    upsert?: MachineTypeUpsertWithoutMachinesInput
    connect?: MachineTypeWhereUniqueInput
    update?: XOR<XOR<MachineTypeUpdateToOneWithWhereWithoutMachinesInput, MachineTypeUpdateWithoutMachinesInput>, MachineTypeUncheckedUpdateWithoutMachinesInput>
  }

  export type UserUpdateOneRequiredWithoutMachinesNestedInput = {
    create?: XOR<UserCreateWithoutMachinesInput, UserUncheckedCreateWithoutMachinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMachinesInput
    upsert?: UserUpsertWithoutMachinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMachinesInput, UserUpdateWithoutMachinesInput>, UserUncheckedUpdateWithoutMachinesInput>
  }

  export type PlantUpdateOneWithoutMachinesNestedInput = {
    create?: XOR<PlantCreateWithoutMachinesInput, PlantUncheckedCreateWithoutMachinesInput>
    connectOrCreate?: PlantCreateOrConnectWithoutMachinesInput
    upsert?: PlantUpsertWithoutMachinesInput
    disconnect?: PlantWhereInput | boolean
    delete?: PlantWhereInput | boolean
    connect?: PlantWhereUniqueInput
    update?: XOR<XOR<PlantUpdateToOneWithWhereWithoutMachinesInput, PlantUpdateWithoutMachinesInput>, PlantUncheckedUpdateWithoutMachinesInput>
  }

  export type MachineExternalFactorUpdateManyWithoutMachineNestedInput = {
    create?: XOR<MachineExternalFactorCreateWithoutMachineInput, MachineExternalFactorUncheckedCreateWithoutMachineInput> | MachineExternalFactorCreateWithoutMachineInput[] | MachineExternalFactorUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: MachineExternalFactorCreateOrConnectWithoutMachineInput | MachineExternalFactorCreateOrConnectWithoutMachineInput[]
    upsert?: MachineExternalFactorUpsertWithWhereUniqueWithoutMachineInput | MachineExternalFactorUpsertWithWhereUniqueWithoutMachineInput[]
    createMany?: MachineExternalFactorCreateManyMachineInputEnvelope
    set?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    disconnect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    delete?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    connect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    update?: MachineExternalFactorUpdateWithWhereUniqueWithoutMachineInput | MachineExternalFactorUpdateWithWhereUniqueWithoutMachineInput[]
    updateMany?: MachineExternalFactorUpdateManyWithWhereWithoutMachineInput | MachineExternalFactorUpdateManyWithWhereWithoutMachineInput[]
    deleteMany?: MachineExternalFactorScalarWhereInput | MachineExternalFactorScalarWhereInput[]
  }

  export type MaterialFlowUpdateManyWithoutFromMachineNestedInput = {
    create?: XOR<MaterialFlowCreateWithoutFromMachineInput, MaterialFlowUncheckedCreateWithoutFromMachineInput> | MaterialFlowCreateWithoutFromMachineInput[] | MaterialFlowUncheckedCreateWithoutFromMachineInput[]
    connectOrCreate?: MaterialFlowCreateOrConnectWithoutFromMachineInput | MaterialFlowCreateOrConnectWithoutFromMachineInput[]
    upsert?: MaterialFlowUpsertWithWhereUniqueWithoutFromMachineInput | MaterialFlowUpsertWithWhereUniqueWithoutFromMachineInput[]
    createMany?: MaterialFlowCreateManyFromMachineInputEnvelope
    set?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    disconnect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    delete?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    connect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    update?: MaterialFlowUpdateWithWhereUniqueWithoutFromMachineInput | MaterialFlowUpdateWithWhereUniqueWithoutFromMachineInput[]
    updateMany?: MaterialFlowUpdateManyWithWhereWithoutFromMachineInput | MaterialFlowUpdateManyWithWhereWithoutFromMachineInput[]
    deleteMany?: MaterialFlowScalarWhereInput | MaterialFlowScalarWhereInput[]
  }

  export type MaterialFlowUpdateManyWithoutToMachineNestedInput = {
    create?: XOR<MaterialFlowCreateWithoutToMachineInput, MaterialFlowUncheckedCreateWithoutToMachineInput> | MaterialFlowCreateWithoutToMachineInput[] | MaterialFlowUncheckedCreateWithoutToMachineInput[]
    connectOrCreate?: MaterialFlowCreateOrConnectWithoutToMachineInput | MaterialFlowCreateOrConnectWithoutToMachineInput[]
    upsert?: MaterialFlowUpsertWithWhereUniqueWithoutToMachineInput | MaterialFlowUpsertWithWhereUniqueWithoutToMachineInput[]
    createMany?: MaterialFlowCreateManyToMachineInputEnvelope
    set?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    disconnect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    delete?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    connect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    update?: MaterialFlowUpdateWithWhereUniqueWithoutToMachineInput | MaterialFlowUpdateWithWhereUniqueWithoutToMachineInput[]
    updateMany?: MaterialFlowUpdateManyWithWhereWithoutToMachineInput | MaterialFlowUpdateManyWithWhereWithoutToMachineInput[]
    deleteMany?: MaterialFlowScalarWhereInput | MaterialFlowScalarWhereInput[]
  }

  export type MachineExternalFactorUncheckedUpdateManyWithoutMachineNestedInput = {
    create?: XOR<MachineExternalFactorCreateWithoutMachineInput, MachineExternalFactorUncheckedCreateWithoutMachineInput> | MachineExternalFactorCreateWithoutMachineInput[] | MachineExternalFactorUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: MachineExternalFactorCreateOrConnectWithoutMachineInput | MachineExternalFactorCreateOrConnectWithoutMachineInput[]
    upsert?: MachineExternalFactorUpsertWithWhereUniqueWithoutMachineInput | MachineExternalFactorUpsertWithWhereUniqueWithoutMachineInput[]
    createMany?: MachineExternalFactorCreateManyMachineInputEnvelope
    set?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    disconnect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    delete?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    connect?: MachineExternalFactorWhereUniqueInput | MachineExternalFactorWhereUniqueInput[]
    update?: MachineExternalFactorUpdateWithWhereUniqueWithoutMachineInput | MachineExternalFactorUpdateWithWhereUniqueWithoutMachineInput[]
    updateMany?: MachineExternalFactorUpdateManyWithWhereWithoutMachineInput | MachineExternalFactorUpdateManyWithWhereWithoutMachineInput[]
    deleteMany?: MachineExternalFactorScalarWhereInput | MachineExternalFactorScalarWhereInput[]
  }

  export type MaterialFlowUncheckedUpdateManyWithoutFromMachineNestedInput = {
    create?: XOR<MaterialFlowCreateWithoutFromMachineInput, MaterialFlowUncheckedCreateWithoutFromMachineInput> | MaterialFlowCreateWithoutFromMachineInput[] | MaterialFlowUncheckedCreateWithoutFromMachineInput[]
    connectOrCreate?: MaterialFlowCreateOrConnectWithoutFromMachineInput | MaterialFlowCreateOrConnectWithoutFromMachineInput[]
    upsert?: MaterialFlowUpsertWithWhereUniqueWithoutFromMachineInput | MaterialFlowUpsertWithWhereUniqueWithoutFromMachineInput[]
    createMany?: MaterialFlowCreateManyFromMachineInputEnvelope
    set?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    disconnect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    delete?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    connect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    update?: MaterialFlowUpdateWithWhereUniqueWithoutFromMachineInput | MaterialFlowUpdateWithWhereUniqueWithoutFromMachineInput[]
    updateMany?: MaterialFlowUpdateManyWithWhereWithoutFromMachineInput | MaterialFlowUpdateManyWithWhereWithoutFromMachineInput[]
    deleteMany?: MaterialFlowScalarWhereInput | MaterialFlowScalarWhereInput[]
  }

  export type MaterialFlowUncheckedUpdateManyWithoutToMachineNestedInput = {
    create?: XOR<MaterialFlowCreateWithoutToMachineInput, MaterialFlowUncheckedCreateWithoutToMachineInput> | MaterialFlowCreateWithoutToMachineInput[] | MaterialFlowUncheckedCreateWithoutToMachineInput[]
    connectOrCreate?: MaterialFlowCreateOrConnectWithoutToMachineInput | MaterialFlowCreateOrConnectWithoutToMachineInput[]
    upsert?: MaterialFlowUpsertWithWhereUniqueWithoutToMachineInput | MaterialFlowUpsertWithWhereUniqueWithoutToMachineInput[]
    createMany?: MaterialFlowCreateManyToMachineInputEnvelope
    set?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    disconnect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    delete?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    connect?: MaterialFlowWhereUniqueInput | MaterialFlowWhereUniqueInput[]
    update?: MaterialFlowUpdateWithWhereUniqueWithoutToMachineInput | MaterialFlowUpdateWithWhereUniqueWithoutToMachineInput[]
    updateMany?: MaterialFlowUpdateManyWithWhereWithoutToMachineInput | MaterialFlowUpdateManyWithWhereWithoutToMachineInput[]
    deleteMany?: MaterialFlowScalarWhereInput | MaterialFlowScalarWhereInput[]
  }

  export type PlantCreateNestedOneWithoutMaterialFlowsInput = {
    create?: XOR<PlantCreateWithoutMaterialFlowsInput, PlantUncheckedCreateWithoutMaterialFlowsInput>
    connectOrCreate?: PlantCreateOrConnectWithoutMaterialFlowsInput
    connect?: PlantWhereUniqueInput
  }

  export type MachineCreateNestedOneWithoutFlowSourcesInput = {
    create?: XOR<MachineCreateWithoutFlowSourcesInput, MachineUncheckedCreateWithoutFlowSourcesInput>
    connectOrCreate?: MachineCreateOrConnectWithoutFlowSourcesInput
    connect?: MachineWhereUniqueInput
  }

  export type MachineCreateNestedOneWithoutFlowDestinationsInput = {
    create?: XOR<MachineCreateWithoutFlowDestinationsInput, MachineUncheckedCreateWithoutFlowDestinationsInput>
    connectOrCreate?: MachineCreateOrConnectWithoutFlowDestinationsInput
    connect?: MachineWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlantUpdateOneRequiredWithoutMaterialFlowsNestedInput = {
    create?: XOR<PlantCreateWithoutMaterialFlowsInput, PlantUncheckedCreateWithoutMaterialFlowsInput>
    connectOrCreate?: PlantCreateOrConnectWithoutMaterialFlowsInput
    upsert?: PlantUpsertWithoutMaterialFlowsInput
    connect?: PlantWhereUniqueInput
    update?: XOR<XOR<PlantUpdateToOneWithWhereWithoutMaterialFlowsInput, PlantUpdateWithoutMaterialFlowsInput>, PlantUncheckedUpdateWithoutMaterialFlowsInput>
  }

  export type MachineUpdateOneRequiredWithoutFlowSourcesNestedInput = {
    create?: XOR<MachineCreateWithoutFlowSourcesInput, MachineUncheckedCreateWithoutFlowSourcesInput>
    connectOrCreate?: MachineCreateOrConnectWithoutFlowSourcesInput
    upsert?: MachineUpsertWithoutFlowSourcesInput
    connect?: MachineWhereUniqueInput
    update?: XOR<XOR<MachineUpdateToOneWithWhereWithoutFlowSourcesInput, MachineUpdateWithoutFlowSourcesInput>, MachineUncheckedUpdateWithoutFlowSourcesInput>
  }

  export type MachineUpdateOneRequiredWithoutFlowDestinationsNestedInput = {
    create?: XOR<MachineCreateWithoutFlowDestinationsInput, MachineUncheckedCreateWithoutFlowDestinationsInput>
    connectOrCreate?: MachineCreateOrConnectWithoutFlowDestinationsInput
    upsert?: MachineUpsertWithoutFlowDestinationsInput
    connect?: MachineWhereUniqueInput
    update?: XOR<XOR<MachineUpdateToOneWithWhereWithoutFlowDestinationsInput, MachineUpdateWithoutFlowDestinationsInput>, MachineUncheckedUpdateWithoutFlowDestinationsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type UserPlantCreateWithoutUserInput = {
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plant: PlantCreateNestedOneWithoutUsersInput
  }

  export type UserPlantUncheckedCreateWithoutUserInput = {
    plantId: number
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlantCreateOrConnectWithoutUserInput = {
    where: UserPlantWhereUniqueInput
    create: XOR<UserPlantCreateWithoutUserInput, UserPlantUncheckedCreateWithoutUserInput>
  }

  export type UserPlantCreateManyUserInputEnvelope = {
    data: UserPlantCreateManyUserInput | UserPlantCreateManyUserInput[]
  }

  export type MachineCreateWithoutOwnerInput = {
    name: string
    serialNumber: string
    length: number
    width: number
    height: number
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: MachineTypeCreateNestedOneWithoutMachinesInput
    plant?: PlantCreateNestedOneWithoutMachinesInput
    factors?: MachineExternalFactorCreateNestedManyWithoutMachineInput
    flowSources?: MaterialFlowCreateNestedManyWithoutFromMachineInput
    flowDestinations?: MaterialFlowCreateNestedManyWithoutToMachineInput
  }

  export type MachineUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    serialNumber: string
    typeId: number
    length: number
    width: number
    height: number
    plantId?: number | null
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    factors?: MachineExternalFactorUncheckedCreateNestedManyWithoutMachineInput
    flowSources?: MaterialFlowUncheckedCreateNestedManyWithoutFromMachineInput
    flowDestinations?: MaterialFlowUncheckedCreateNestedManyWithoutToMachineInput
  }

  export type MachineCreateOrConnectWithoutOwnerInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutOwnerInput, MachineUncheckedCreateWithoutOwnerInput>
  }

  export type MachineCreateManyOwnerInputEnvelope = {
    data: MachineCreateManyOwnerInput | MachineCreateManyOwnerInput[]
  }

  export type UserPlantUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPlantWhereUniqueInput
    update: XOR<UserPlantUpdateWithoutUserInput, UserPlantUncheckedUpdateWithoutUserInput>
    create: XOR<UserPlantCreateWithoutUserInput, UserPlantUncheckedCreateWithoutUserInput>
  }

  export type UserPlantUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPlantWhereUniqueInput
    data: XOR<UserPlantUpdateWithoutUserInput, UserPlantUncheckedUpdateWithoutUserInput>
  }

  export type UserPlantUpdateManyWithWhereWithoutUserInput = {
    where: UserPlantScalarWhereInput
    data: XOR<UserPlantUpdateManyMutationInput, UserPlantUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPlantScalarWhereInput = {
    AND?: UserPlantScalarWhereInput | UserPlantScalarWhereInput[]
    OR?: UserPlantScalarWhereInput[]
    NOT?: UserPlantScalarWhereInput | UserPlantScalarWhereInput[]
    userId?: IntFilter<"UserPlant"> | number
    plantId?: IntFilter<"UserPlant"> | number
    role?: StringFilter<"UserPlant"> | string
    createdAt?: DateTimeFilter<"UserPlant"> | Date | string
    updatedAt?: DateTimeFilter<"UserPlant"> | Date | string
  }

  export type MachineUpsertWithWhereUniqueWithoutOwnerInput = {
    where: MachineWhereUniqueInput
    update: XOR<MachineUpdateWithoutOwnerInput, MachineUncheckedUpdateWithoutOwnerInput>
    create: XOR<MachineCreateWithoutOwnerInput, MachineUncheckedCreateWithoutOwnerInput>
  }

  export type MachineUpdateWithWhereUniqueWithoutOwnerInput = {
    where: MachineWhereUniqueInput
    data: XOR<MachineUpdateWithoutOwnerInput, MachineUncheckedUpdateWithoutOwnerInput>
  }

  export type MachineUpdateManyWithWhereWithoutOwnerInput = {
    where: MachineScalarWhereInput
    data: XOR<MachineUpdateManyMutationInput, MachineUncheckedUpdateManyWithoutOwnerInput>
  }

  export type MachineScalarWhereInput = {
    AND?: MachineScalarWhereInput | MachineScalarWhereInput[]
    OR?: MachineScalarWhereInput[]
    NOT?: MachineScalarWhereInput | MachineScalarWhereInput[]
    id?: IntFilter<"Machine"> | number
    name?: StringFilter<"Machine"> | string
    serialNumber?: StringFilter<"Machine"> | string
    typeId?: IntFilter<"Machine"> | number
    length?: IntFilter<"Machine"> | number
    width?: IntFilter<"Machine"> | number
    height?: IntFilter<"Machine"> | number
    ownerId?: IntFilter<"Machine"> | number
    plantId?: IntNullableFilter<"Machine"> | number | null
    x?: FloatNullableFilter<"Machine"> | number | null
    y?: FloatNullableFilter<"Machine"> | number | null
    z?: FloatNullableFilter<"Machine"> | number | null
    rotation?: FloatNullableFilter<"Machine"> | number | null
    color?: StringNullableFilter<"Machine"> | string | null
    createdAt?: DateTimeFilter<"Machine"> | Date | string
    updatedAt?: DateTimeFilter<"Machine"> | Date | string
  }

  export type UserCreateWithoutPlantsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    machines?: MachineCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutPlantsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    machines?: MachineUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutPlantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlantsInput, UserUncheckedCreateWithoutPlantsInput>
  }

  export type PlantCreateWithoutUsersInput = {
    name: string
    description?: string | null
    length: number
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    machines?: MachineCreateNestedManyWithoutPlantInput
    materialFlows?: MaterialFlowCreateNestedManyWithoutPlantInput
  }

  export type PlantUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    length: number
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    machines?: MachineUncheckedCreateNestedManyWithoutPlantInput
    materialFlows?: MaterialFlowUncheckedCreateNestedManyWithoutPlantInput
  }

  export type PlantCreateOrConnectWithoutUsersInput = {
    where: PlantWhereUniqueInput
    create: XOR<PlantCreateWithoutUsersInput, PlantUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutPlantsInput = {
    update: XOR<UserUpdateWithoutPlantsInput, UserUncheckedUpdateWithoutPlantsInput>
    create: XOR<UserCreateWithoutPlantsInput, UserUncheckedCreateWithoutPlantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlantsInput, UserUncheckedUpdateWithoutPlantsInput>
  }

  export type UserUpdateWithoutPlantsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutPlantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type PlantUpsertWithoutUsersInput = {
    update: XOR<PlantUpdateWithoutUsersInput, PlantUncheckedUpdateWithoutUsersInput>
    create: XOR<PlantCreateWithoutUsersInput, PlantUncheckedCreateWithoutUsersInput>
    where?: PlantWhereInput
  }

  export type PlantUpdateToOneWithWhereWithoutUsersInput = {
    where?: PlantWhereInput
    data: XOR<PlantUpdateWithoutUsersInput, PlantUncheckedUpdateWithoutUsersInput>
  }

  export type PlantUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUpdateManyWithoutPlantNestedInput
    materialFlows?: MaterialFlowUpdateManyWithoutPlantNestedInput
  }

  export type PlantUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUncheckedUpdateManyWithoutPlantNestedInput
    materialFlows?: MaterialFlowUncheckedUpdateManyWithoutPlantNestedInput
  }

  export type UserPlantCreateWithoutPlantInput = {
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlantsInput
  }

  export type UserPlantUncheckedCreateWithoutPlantInput = {
    userId: number
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlantCreateOrConnectWithoutPlantInput = {
    where: UserPlantWhereUniqueInput
    create: XOR<UserPlantCreateWithoutPlantInput, UserPlantUncheckedCreateWithoutPlantInput>
  }

  export type UserPlantCreateManyPlantInputEnvelope = {
    data: UserPlantCreateManyPlantInput | UserPlantCreateManyPlantInput[]
  }

  export type MachineCreateWithoutPlantInput = {
    name: string
    serialNumber: string
    length: number
    width: number
    height: number
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: MachineTypeCreateNestedOneWithoutMachinesInput
    owner: UserCreateNestedOneWithoutMachinesInput
    factors?: MachineExternalFactorCreateNestedManyWithoutMachineInput
    flowSources?: MaterialFlowCreateNestedManyWithoutFromMachineInput
    flowDestinations?: MaterialFlowCreateNestedManyWithoutToMachineInput
  }

  export type MachineUncheckedCreateWithoutPlantInput = {
    id?: number
    name: string
    serialNumber: string
    typeId: number
    length: number
    width: number
    height: number
    ownerId: number
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    factors?: MachineExternalFactorUncheckedCreateNestedManyWithoutMachineInput
    flowSources?: MaterialFlowUncheckedCreateNestedManyWithoutFromMachineInput
    flowDestinations?: MaterialFlowUncheckedCreateNestedManyWithoutToMachineInput
  }

  export type MachineCreateOrConnectWithoutPlantInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutPlantInput, MachineUncheckedCreateWithoutPlantInput>
  }

  export type MachineCreateManyPlantInputEnvelope = {
    data: MachineCreateManyPlantInput | MachineCreateManyPlantInput[]
  }

  export type MaterialFlowCreateWithoutPlantInput = {
    flowAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fromMachine: MachineCreateNestedOneWithoutFlowSourcesInput
    toMachine: MachineCreateNestedOneWithoutFlowDestinationsInput
  }

  export type MaterialFlowUncheckedCreateWithoutPlantInput = {
    id?: number
    fromMachineId: number
    toMachineId: number
    flowAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialFlowCreateOrConnectWithoutPlantInput = {
    where: MaterialFlowWhereUniqueInput
    create: XOR<MaterialFlowCreateWithoutPlantInput, MaterialFlowUncheckedCreateWithoutPlantInput>
  }

  export type MaterialFlowCreateManyPlantInputEnvelope = {
    data: MaterialFlowCreateManyPlantInput | MaterialFlowCreateManyPlantInput[]
  }

  export type UserPlantUpsertWithWhereUniqueWithoutPlantInput = {
    where: UserPlantWhereUniqueInput
    update: XOR<UserPlantUpdateWithoutPlantInput, UserPlantUncheckedUpdateWithoutPlantInput>
    create: XOR<UserPlantCreateWithoutPlantInput, UserPlantUncheckedCreateWithoutPlantInput>
  }

  export type UserPlantUpdateWithWhereUniqueWithoutPlantInput = {
    where: UserPlantWhereUniqueInput
    data: XOR<UserPlantUpdateWithoutPlantInput, UserPlantUncheckedUpdateWithoutPlantInput>
  }

  export type UserPlantUpdateManyWithWhereWithoutPlantInput = {
    where: UserPlantScalarWhereInput
    data: XOR<UserPlantUpdateManyMutationInput, UserPlantUncheckedUpdateManyWithoutPlantInput>
  }

  export type MachineUpsertWithWhereUniqueWithoutPlantInput = {
    where: MachineWhereUniqueInput
    update: XOR<MachineUpdateWithoutPlantInput, MachineUncheckedUpdateWithoutPlantInput>
    create: XOR<MachineCreateWithoutPlantInput, MachineUncheckedCreateWithoutPlantInput>
  }

  export type MachineUpdateWithWhereUniqueWithoutPlantInput = {
    where: MachineWhereUniqueInput
    data: XOR<MachineUpdateWithoutPlantInput, MachineUncheckedUpdateWithoutPlantInput>
  }

  export type MachineUpdateManyWithWhereWithoutPlantInput = {
    where: MachineScalarWhereInput
    data: XOR<MachineUpdateManyMutationInput, MachineUncheckedUpdateManyWithoutPlantInput>
  }

  export type MaterialFlowUpsertWithWhereUniqueWithoutPlantInput = {
    where: MaterialFlowWhereUniqueInput
    update: XOR<MaterialFlowUpdateWithoutPlantInput, MaterialFlowUncheckedUpdateWithoutPlantInput>
    create: XOR<MaterialFlowCreateWithoutPlantInput, MaterialFlowUncheckedCreateWithoutPlantInput>
  }

  export type MaterialFlowUpdateWithWhereUniqueWithoutPlantInput = {
    where: MaterialFlowWhereUniqueInput
    data: XOR<MaterialFlowUpdateWithoutPlantInput, MaterialFlowUncheckedUpdateWithoutPlantInput>
  }

  export type MaterialFlowUpdateManyWithWhereWithoutPlantInput = {
    where: MaterialFlowScalarWhereInput
    data: XOR<MaterialFlowUpdateManyMutationInput, MaterialFlowUncheckedUpdateManyWithoutPlantInput>
  }

  export type MaterialFlowScalarWhereInput = {
    AND?: MaterialFlowScalarWhereInput | MaterialFlowScalarWhereInput[]
    OR?: MaterialFlowScalarWhereInput[]
    NOT?: MaterialFlowScalarWhereInput | MaterialFlowScalarWhereInput[]
    id?: IntFilter<"MaterialFlow"> | number
    plantId?: IntFilter<"MaterialFlow"> | number
    fromMachineId?: IntFilter<"MaterialFlow"> | number
    toMachineId?: IntFilter<"MaterialFlow"> | number
    flowAmount?: FloatFilter<"MaterialFlow"> | number
    createdAt?: DateTimeFilter<"MaterialFlow"> | Date | string
    updatedAt?: DateTimeFilter<"MaterialFlow"> | Date | string
  }

  export type MachineCreateWithoutTypeInput = {
    name: string
    serialNumber: string
    length: number
    width: number
    height: number
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutMachinesInput
    plant?: PlantCreateNestedOneWithoutMachinesInput
    factors?: MachineExternalFactorCreateNestedManyWithoutMachineInput
    flowSources?: MaterialFlowCreateNestedManyWithoutFromMachineInput
    flowDestinations?: MaterialFlowCreateNestedManyWithoutToMachineInput
  }

  export type MachineUncheckedCreateWithoutTypeInput = {
    id?: number
    name: string
    serialNumber: string
    length: number
    width: number
    height: number
    ownerId: number
    plantId?: number | null
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    factors?: MachineExternalFactorUncheckedCreateNestedManyWithoutMachineInput
    flowSources?: MaterialFlowUncheckedCreateNestedManyWithoutFromMachineInput
    flowDestinations?: MaterialFlowUncheckedCreateNestedManyWithoutToMachineInput
  }

  export type MachineCreateOrConnectWithoutTypeInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutTypeInput, MachineUncheckedCreateWithoutTypeInput>
  }

  export type MachineCreateManyTypeInputEnvelope = {
    data: MachineCreateManyTypeInput | MachineCreateManyTypeInput[]
  }

  export type MachineUpsertWithWhereUniqueWithoutTypeInput = {
    where: MachineWhereUniqueInput
    update: XOR<MachineUpdateWithoutTypeInput, MachineUncheckedUpdateWithoutTypeInput>
    create: XOR<MachineCreateWithoutTypeInput, MachineUncheckedCreateWithoutTypeInput>
  }

  export type MachineUpdateWithWhereUniqueWithoutTypeInput = {
    where: MachineWhereUniqueInput
    data: XOR<MachineUpdateWithoutTypeInput, MachineUncheckedUpdateWithoutTypeInput>
  }

  export type MachineUpdateManyWithWhereWithoutTypeInput = {
    where: MachineScalarWhereInput
    data: XOR<MachineUpdateManyMutationInput, MachineUncheckedUpdateManyWithoutTypeInput>
  }

  export type MachineExternalFactorCreateWithoutProducedFactorInput = {
    isProducer: boolean
    isSensitive: boolean
    intensity?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    machine: MachineCreateNestedOneWithoutFactorsInput
    sensitiveFactor?: ExternalFactorCreateNestedOneWithoutSensitivesInput
  }

  export type MachineExternalFactorUncheckedCreateWithoutProducedFactorInput = {
    machineId: number
    isProducer: boolean
    isSensitive: boolean
    intensity?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineExternalFactorCreateOrConnectWithoutProducedFactorInput = {
    where: MachineExternalFactorWhereUniqueInput
    create: XOR<MachineExternalFactorCreateWithoutProducedFactorInput, MachineExternalFactorUncheckedCreateWithoutProducedFactorInput>
  }

  export type MachineExternalFactorCreateManyProducedFactorInputEnvelope = {
    data: MachineExternalFactorCreateManyProducedFactorInput | MachineExternalFactorCreateManyProducedFactorInput[]
  }

  export type MachineExternalFactorCreateWithoutSensitiveFactorInput = {
    isProducer: boolean
    isSensitive: boolean
    intensity?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    machine: MachineCreateNestedOneWithoutFactorsInput
    producedFactor?: ExternalFactorCreateNestedOneWithoutProducersInput
  }

  export type MachineExternalFactorUncheckedCreateWithoutSensitiveFactorInput = {
    machineId: number
    isProducer: boolean
    isSensitive: boolean
    intensity?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineExternalFactorCreateOrConnectWithoutSensitiveFactorInput = {
    where: MachineExternalFactorWhereUniqueInput
    create: XOR<MachineExternalFactorCreateWithoutSensitiveFactorInput, MachineExternalFactorUncheckedCreateWithoutSensitiveFactorInput>
  }

  export type MachineExternalFactorCreateManySensitiveFactorInputEnvelope = {
    data: MachineExternalFactorCreateManySensitiveFactorInput | MachineExternalFactorCreateManySensitiveFactorInput[]
  }

  export type MachineExternalFactorUpsertWithWhereUniqueWithoutProducedFactorInput = {
    where: MachineExternalFactorWhereUniqueInput
    update: XOR<MachineExternalFactorUpdateWithoutProducedFactorInput, MachineExternalFactorUncheckedUpdateWithoutProducedFactorInput>
    create: XOR<MachineExternalFactorCreateWithoutProducedFactorInput, MachineExternalFactorUncheckedCreateWithoutProducedFactorInput>
  }

  export type MachineExternalFactorUpdateWithWhereUniqueWithoutProducedFactorInput = {
    where: MachineExternalFactorWhereUniqueInput
    data: XOR<MachineExternalFactorUpdateWithoutProducedFactorInput, MachineExternalFactorUncheckedUpdateWithoutProducedFactorInput>
  }

  export type MachineExternalFactorUpdateManyWithWhereWithoutProducedFactorInput = {
    where: MachineExternalFactorScalarWhereInput
    data: XOR<MachineExternalFactorUpdateManyMutationInput, MachineExternalFactorUncheckedUpdateManyWithoutProducedFactorInput>
  }

  export type MachineExternalFactorScalarWhereInput = {
    AND?: MachineExternalFactorScalarWhereInput | MachineExternalFactorScalarWhereInput[]
    OR?: MachineExternalFactorScalarWhereInput[]
    NOT?: MachineExternalFactorScalarWhereInput | MachineExternalFactorScalarWhereInput[]
    machineId?: IntFilter<"MachineExternalFactor"> | number
    factorId?: IntFilter<"MachineExternalFactor"> | number
    isProducer?: BoolFilter<"MachineExternalFactor"> | boolean
    isSensitive?: BoolFilter<"MachineExternalFactor"> | boolean
    intensity?: IntNullableFilter<"MachineExternalFactor"> | number | null
    notes?: StringNullableFilter<"MachineExternalFactor"> | string | null
    createdAt?: DateTimeFilter<"MachineExternalFactor"> | Date | string
    updatedAt?: DateTimeFilter<"MachineExternalFactor"> | Date | string
  }

  export type MachineExternalFactorUpsertWithWhereUniqueWithoutSensitiveFactorInput = {
    where: MachineExternalFactorWhereUniqueInput
    update: XOR<MachineExternalFactorUpdateWithoutSensitiveFactorInput, MachineExternalFactorUncheckedUpdateWithoutSensitiveFactorInput>
    create: XOR<MachineExternalFactorCreateWithoutSensitiveFactorInput, MachineExternalFactorUncheckedCreateWithoutSensitiveFactorInput>
  }

  export type MachineExternalFactorUpdateWithWhereUniqueWithoutSensitiveFactorInput = {
    where: MachineExternalFactorWhereUniqueInput
    data: XOR<MachineExternalFactorUpdateWithoutSensitiveFactorInput, MachineExternalFactorUncheckedUpdateWithoutSensitiveFactorInput>
  }

  export type MachineExternalFactorUpdateManyWithWhereWithoutSensitiveFactorInput = {
    where: MachineExternalFactorScalarWhereInput
    data: XOR<MachineExternalFactorUpdateManyMutationInput, MachineExternalFactorUncheckedUpdateManyWithoutSensitiveFactorInput>
  }

  export type MachineCreateWithoutFactorsInput = {
    name: string
    serialNumber: string
    length: number
    width: number
    height: number
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: MachineTypeCreateNestedOneWithoutMachinesInput
    owner: UserCreateNestedOneWithoutMachinesInput
    plant?: PlantCreateNestedOneWithoutMachinesInput
    flowSources?: MaterialFlowCreateNestedManyWithoutFromMachineInput
    flowDestinations?: MaterialFlowCreateNestedManyWithoutToMachineInput
  }

  export type MachineUncheckedCreateWithoutFactorsInput = {
    id?: number
    name: string
    serialNumber: string
    typeId: number
    length: number
    width: number
    height: number
    ownerId: number
    plantId?: number | null
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flowSources?: MaterialFlowUncheckedCreateNestedManyWithoutFromMachineInput
    flowDestinations?: MaterialFlowUncheckedCreateNestedManyWithoutToMachineInput
  }

  export type MachineCreateOrConnectWithoutFactorsInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutFactorsInput, MachineUncheckedCreateWithoutFactorsInput>
  }

  export type ExternalFactorCreateWithoutProducersInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sensitives?: MachineExternalFactorCreateNestedManyWithoutSensitiveFactorInput
  }

  export type ExternalFactorUncheckedCreateWithoutProducersInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sensitives?: MachineExternalFactorUncheckedCreateNestedManyWithoutSensitiveFactorInput
  }

  export type ExternalFactorCreateOrConnectWithoutProducersInput = {
    where: ExternalFactorWhereUniqueInput
    create: XOR<ExternalFactorCreateWithoutProducersInput, ExternalFactorUncheckedCreateWithoutProducersInput>
  }

  export type ExternalFactorCreateWithoutSensitivesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    producers?: MachineExternalFactorCreateNestedManyWithoutProducedFactorInput
  }

  export type ExternalFactorUncheckedCreateWithoutSensitivesInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    producers?: MachineExternalFactorUncheckedCreateNestedManyWithoutProducedFactorInput
  }

  export type ExternalFactorCreateOrConnectWithoutSensitivesInput = {
    where: ExternalFactorWhereUniqueInput
    create: XOR<ExternalFactorCreateWithoutSensitivesInput, ExternalFactorUncheckedCreateWithoutSensitivesInput>
  }

  export type MachineUpsertWithoutFactorsInput = {
    update: XOR<MachineUpdateWithoutFactorsInput, MachineUncheckedUpdateWithoutFactorsInput>
    create: XOR<MachineCreateWithoutFactorsInput, MachineUncheckedCreateWithoutFactorsInput>
    where?: MachineWhereInput
  }

  export type MachineUpdateToOneWithWhereWithoutFactorsInput = {
    where?: MachineWhereInput
    data: XOR<MachineUpdateWithoutFactorsInput, MachineUncheckedUpdateWithoutFactorsInput>
  }

  export type MachineUpdateWithoutFactorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: MachineTypeUpdateOneRequiredWithoutMachinesNestedInput
    owner?: UserUpdateOneRequiredWithoutMachinesNestedInput
    plant?: PlantUpdateOneWithoutMachinesNestedInput
    flowSources?: MaterialFlowUpdateManyWithoutFromMachineNestedInput
    flowDestinations?: MaterialFlowUpdateManyWithoutToMachineNestedInput
  }

  export type MachineUncheckedUpdateWithoutFactorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    plantId?: NullableIntFieldUpdateOperationsInput | number | null
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowSources?: MaterialFlowUncheckedUpdateManyWithoutFromMachineNestedInput
    flowDestinations?: MaterialFlowUncheckedUpdateManyWithoutToMachineNestedInput
  }

  export type ExternalFactorUpsertWithoutProducersInput = {
    update: XOR<ExternalFactorUpdateWithoutProducersInput, ExternalFactorUncheckedUpdateWithoutProducersInput>
    create: XOR<ExternalFactorCreateWithoutProducersInput, ExternalFactorUncheckedCreateWithoutProducersInput>
    where?: ExternalFactorWhereInput
  }

  export type ExternalFactorUpdateToOneWithWhereWithoutProducersInput = {
    where?: ExternalFactorWhereInput
    data: XOR<ExternalFactorUpdateWithoutProducersInput, ExternalFactorUncheckedUpdateWithoutProducersInput>
  }

  export type ExternalFactorUpdateWithoutProducersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensitives?: MachineExternalFactorUpdateManyWithoutSensitiveFactorNestedInput
  }

  export type ExternalFactorUncheckedUpdateWithoutProducersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensitives?: MachineExternalFactorUncheckedUpdateManyWithoutSensitiveFactorNestedInput
  }

  export type ExternalFactorUpsertWithoutSensitivesInput = {
    update: XOR<ExternalFactorUpdateWithoutSensitivesInput, ExternalFactorUncheckedUpdateWithoutSensitivesInput>
    create: XOR<ExternalFactorCreateWithoutSensitivesInput, ExternalFactorUncheckedCreateWithoutSensitivesInput>
    where?: ExternalFactorWhereInput
  }

  export type ExternalFactorUpdateToOneWithWhereWithoutSensitivesInput = {
    where?: ExternalFactorWhereInput
    data: XOR<ExternalFactorUpdateWithoutSensitivesInput, ExternalFactorUncheckedUpdateWithoutSensitivesInput>
  }

  export type ExternalFactorUpdateWithoutSensitivesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producers?: MachineExternalFactorUpdateManyWithoutProducedFactorNestedInput
  }

  export type ExternalFactorUncheckedUpdateWithoutSensitivesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producers?: MachineExternalFactorUncheckedUpdateManyWithoutProducedFactorNestedInput
  }

  export type MachineTypeCreateWithoutMachinesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineTypeUncheckedCreateWithoutMachinesInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineTypeCreateOrConnectWithoutMachinesInput = {
    where: MachineTypeWhereUniqueInput
    create: XOR<MachineTypeCreateWithoutMachinesInput, MachineTypeUncheckedCreateWithoutMachinesInput>
  }

  export type UserCreateWithoutMachinesInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plants?: UserPlantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMachinesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plants?: UserPlantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMachinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMachinesInput, UserUncheckedCreateWithoutMachinesInput>
  }

  export type PlantCreateWithoutMachinesInput = {
    name: string
    description?: string | null
    length: number
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserPlantCreateNestedManyWithoutPlantInput
    materialFlows?: MaterialFlowCreateNestedManyWithoutPlantInput
  }

  export type PlantUncheckedCreateWithoutMachinesInput = {
    id?: number
    name: string
    description?: string | null
    length: number
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserPlantUncheckedCreateNestedManyWithoutPlantInput
    materialFlows?: MaterialFlowUncheckedCreateNestedManyWithoutPlantInput
  }

  export type PlantCreateOrConnectWithoutMachinesInput = {
    where: PlantWhereUniqueInput
    create: XOR<PlantCreateWithoutMachinesInput, PlantUncheckedCreateWithoutMachinesInput>
  }

  export type MachineExternalFactorCreateWithoutMachineInput = {
    isProducer: boolean
    isSensitive: boolean
    intensity?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    producedFactor?: ExternalFactorCreateNestedOneWithoutProducersInput
    sensitiveFactor?: ExternalFactorCreateNestedOneWithoutSensitivesInput
  }

  export type MachineExternalFactorUncheckedCreateWithoutMachineInput = {
    factorId: number
    isProducer: boolean
    isSensitive: boolean
    intensity?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineExternalFactorCreateOrConnectWithoutMachineInput = {
    where: MachineExternalFactorWhereUniqueInput
    create: XOR<MachineExternalFactorCreateWithoutMachineInput, MachineExternalFactorUncheckedCreateWithoutMachineInput>
  }

  export type MachineExternalFactorCreateManyMachineInputEnvelope = {
    data: MachineExternalFactorCreateManyMachineInput | MachineExternalFactorCreateManyMachineInput[]
  }

  export type MaterialFlowCreateWithoutFromMachineInput = {
    flowAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    plant: PlantCreateNestedOneWithoutMaterialFlowsInput
    toMachine: MachineCreateNestedOneWithoutFlowDestinationsInput
  }

  export type MaterialFlowUncheckedCreateWithoutFromMachineInput = {
    id?: number
    plantId: number
    toMachineId: number
    flowAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialFlowCreateOrConnectWithoutFromMachineInput = {
    where: MaterialFlowWhereUniqueInput
    create: XOR<MaterialFlowCreateWithoutFromMachineInput, MaterialFlowUncheckedCreateWithoutFromMachineInput>
  }

  export type MaterialFlowCreateManyFromMachineInputEnvelope = {
    data: MaterialFlowCreateManyFromMachineInput | MaterialFlowCreateManyFromMachineInput[]
  }

  export type MaterialFlowCreateWithoutToMachineInput = {
    flowAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    plant: PlantCreateNestedOneWithoutMaterialFlowsInput
    fromMachine: MachineCreateNestedOneWithoutFlowSourcesInput
  }

  export type MaterialFlowUncheckedCreateWithoutToMachineInput = {
    id?: number
    plantId: number
    fromMachineId: number
    flowAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialFlowCreateOrConnectWithoutToMachineInput = {
    where: MaterialFlowWhereUniqueInput
    create: XOR<MaterialFlowCreateWithoutToMachineInput, MaterialFlowUncheckedCreateWithoutToMachineInput>
  }

  export type MaterialFlowCreateManyToMachineInputEnvelope = {
    data: MaterialFlowCreateManyToMachineInput | MaterialFlowCreateManyToMachineInput[]
  }

  export type MachineTypeUpsertWithoutMachinesInput = {
    update: XOR<MachineTypeUpdateWithoutMachinesInput, MachineTypeUncheckedUpdateWithoutMachinesInput>
    create: XOR<MachineTypeCreateWithoutMachinesInput, MachineTypeUncheckedCreateWithoutMachinesInput>
    where?: MachineTypeWhereInput
  }

  export type MachineTypeUpdateToOneWithWhereWithoutMachinesInput = {
    where?: MachineTypeWhereInput
    data: XOR<MachineTypeUpdateWithoutMachinesInput, MachineTypeUncheckedUpdateWithoutMachinesInput>
  }

  export type MachineTypeUpdateWithoutMachinesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineTypeUncheckedUpdateWithoutMachinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutMachinesInput = {
    update: XOR<UserUpdateWithoutMachinesInput, UserUncheckedUpdateWithoutMachinesInput>
    create: XOR<UserCreateWithoutMachinesInput, UserUncheckedCreateWithoutMachinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMachinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMachinesInput, UserUncheckedUpdateWithoutMachinesInput>
  }

  export type UserUpdateWithoutMachinesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plants?: UserPlantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMachinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plants?: UserPlantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlantUpsertWithoutMachinesInput = {
    update: XOR<PlantUpdateWithoutMachinesInput, PlantUncheckedUpdateWithoutMachinesInput>
    create: XOR<PlantCreateWithoutMachinesInput, PlantUncheckedCreateWithoutMachinesInput>
    where?: PlantWhereInput
  }

  export type PlantUpdateToOneWithWhereWithoutMachinesInput = {
    where?: PlantWhereInput
    data: XOR<PlantUpdateWithoutMachinesInput, PlantUncheckedUpdateWithoutMachinesInput>
  }

  export type PlantUpdateWithoutMachinesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserPlantUpdateManyWithoutPlantNestedInput
    materialFlows?: MaterialFlowUpdateManyWithoutPlantNestedInput
  }

  export type PlantUncheckedUpdateWithoutMachinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserPlantUncheckedUpdateManyWithoutPlantNestedInput
    materialFlows?: MaterialFlowUncheckedUpdateManyWithoutPlantNestedInput
  }

  export type MachineExternalFactorUpsertWithWhereUniqueWithoutMachineInput = {
    where: MachineExternalFactorWhereUniqueInput
    update: XOR<MachineExternalFactorUpdateWithoutMachineInput, MachineExternalFactorUncheckedUpdateWithoutMachineInput>
    create: XOR<MachineExternalFactorCreateWithoutMachineInput, MachineExternalFactorUncheckedCreateWithoutMachineInput>
  }

  export type MachineExternalFactorUpdateWithWhereUniqueWithoutMachineInput = {
    where: MachineExternalFactorWhereUniqueInput
    data: XOR<MachineExternalFactorUpdateWithoutMachineInput, MachineExternalFactorUncheckedUpdateWithoutMachineInput>
  }

  export type MachineExternalFactorUpdateManyWithWhereWithoutMachineInput = {
    where: MachineExternalFactorScalarWhereInput
    data: XOR<MachineExternalFactorUpdateManyMutationInput, MachineExternalFactorUncheckedUpdateManyWithoutMachineInput>
  }

  export type MaterialFlowUpsertWithWhereUniqueWithoutFromMachineInput = {
    where: MaterialFlowWhereUniqueInput
    update: XOR<MaterialFlowUpdateWithoutFromMachineInput, MaterialFlowUncheckedUpdateWithoutFromMachineInput>
    create: XOR<MaterialFlowCreateWithoutFromMachineInput, MaterialFlowUncheckedCreateWithoutFromMachineInput>
  }

  export type MaterialFlowUpdateWithWhereUniqueWithoutFromMachineInput = {
    where: MaterialFlowWhereUniqueInput
    data: XOR<MaterialFlowUpdateWithoutFromMachineInput, MaterialFlowUncheckedUpdateWithoutFromMachineInput>
  }

  export type MaterialFlowUpdateManyWithWhereWithoutFromMachineInput = {
    where: MaterialFlowScalarWhereInput
    data: XOR<MaterialFlowUpdateManyMutationInput, MaterialFlowUncheckedUpdateManyWithoutFromMachineInput>
  }

  export type MaterialFlowUpsertWithWhereUniqueWithoutToMachineInput = {
    where: MaterialFlowWhereUniqueInput
    update: XOR<MaterialFlowUpdateWithoutToMachineInput, MaterialFlowUncheckedUpdateWithoutToMachineInput>
    create: XOR<MaterialFlowCreateWithoutToMachineInput, MaterialFlowUncheckedCreateWithoutToMachineInput>
  }

  export type MaterialFlowUpdateWithWhereUniqueWithoutToMachineInput = {
    where: MaterialFlowWhereUniqueInput
    data: XOR<MaterialFlowUpdateWithoutToMachineInput, MaterialFlowUncheckedUpdateWithoutToMachineInput>
  }

  export type MaterialFlowUpdateManyWithWhereWithoutToMachineInput = {
    where: MaterialFlowScalarWhereInput
    data: XOR<MaterialFlowUpdateManyMutationInput, MaterialFlowUncheckedUpdateManyWithoutToMachineInput>
  }

  export type PlantCreateWithoutMaterialFlowsInput = {
    name: string
    description?: string | null
    length: number
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserPlantCreateNestedManyWithoutPlantInput
    machines?: MachineCreateNestedManyWithoutPlantInput
  }

  export type PlantUncheckedCreateWithoutMaterialFlowsInput = {
    id?: number
    name: string
    description?: string | null
    length: number
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserPlantUncheckedCreateNestedManyWithoutPlantInput
    machines?: MachineUncheckedCreateNestedManyWithoutPlantInput
  }

  export type PlantCreateOrConnectWithoutMaterialFlowsInput = {
    where: PlantWhereUniqueInput
    create: XOR<PlantCreateWithoutMaterialFlowsInput, PlantUncheckedCreateWithoutMaterialFlowsInput>
  }

  export type MachineCreateWithoutFlowSourcesInput = {
    name: string
    serialNumber: string
    length: number
    width: number
    height: number
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: MachineTypeCreateNestedOneWithoutMachinesInput
    owner: UserCreateNestedOneWithoutMachinesInput
    plant?: PlantCreateNestedOneWithoutMachinesInput
    factors?: MachineExternalFactorCreateNestedManyWithoutMachineInput
    flowDestinations?: MaterialFlowCreateNestedManyWithoutToMachineInput
  }

  export type MachineUncheckedCreateWithoutFlowSourcesInput = {
    id?: number
    name: string
    serialNumber: string
    typeId: number
    length: number
    width: number
    height: number
    ownerId: number
    plantId?: number | null
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    factors?: MachineExternalFactorUncheckedCreateNestedManyWithoutMachineInput
    flowDestinations?: MaterialFlowUncheckedCreateNestedManyWithoutToMachineInput
  }

  export type MachineCreateOrConnectWithoutFlowSourcesInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutFlowSourcesInput, MachineUncheckedCreateWithoutFlowSourcesInput>
  }

  export type MachineCreateWithoutFlowDestinationsInput = {
    name: string
    serialNumber: string
    length: number
    width: number
    height: number
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: MachineTypeCreateNestedOneWithoutMachinesInput
    owner: UserCreateNestedOneWithoutMachinesInput
    plant?: PlantCreateNestedOneWithoutMachinesInput
    factors?: MachineExternalFactorCreateNestedManyWithoutMachineInput
    flowSources?: MaterialFlowCreateNestedManyWithoutFromMachineInput
  }

  export type MachineUncheckedCreateWithoutFlowDestinationsInput = {
    id?: number
    name: string
    serialNumber: string
    typeId: number
    length: number
    width: number
    height: number
    ownerId: number
    plantId?: number | null
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    factors?: MachineExternalFactorUncheckedCreateNestedManyWithoutMachineInput
    flowSources?: MaterialFlowUncheckedCreateNestedManyWithoutFromMachineInput
  }

  export type MachineCreateOrConnectWithoutFlowDestinationsInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutFlowDestinationsInput, MachineUncheckedCreateWithoutFlowDestinationsInput>
  }

  export type PlantUpsertWithoutMaterialFlowsInput = {
    update: XOR<PlantUpdateWithoutMaterialFlowsInput, PlantUncheckedUpdateWithoutMaterialFlowsInput>
    create: XOR<PlantCreateWithoutMaterialFlowsInput, PlantUncheckedCreateWithoutMaterialFlowsInput>
    where?: PlantWhereInput
  }

  export type PlantUpdateToOneWithWhereWithoutMaterialFlowsInput = {
    where?: PlantWhereInput
    data: XOR<PlantUpdateWithoutMaterialFlowsInput, PlantUncheckedUpdateWithoutMaterialFlowsInput>
  }

  export type PlantUpdateWithoutMaterialFlowsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserPlantUpdateManyWithoutPlantNestedInput
    machines?: MachineUpdateManyWithoutPlantNestedInput
  }

  export type PlantUncheckedUpdateWithoutMaterialFlowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserPlantUncheckedUpdateManyWithoutPlantNestedInput
    machines?: MachineUncheckedUpdateManyWithoutPlantNestedInput
  }

  export type MachineUpsertWithoutFlowSourcesInput = {
    update: XOR<MachineUpdateWithoutFlowSourcesInput, MachineUncheckedUpdateWithoutFlowSourcesInput>
    create: XOR<MachineCreateWithoutFlowSourcesInput, MachineUncheckedCreateWithoutFlowSourcesInput>
    where?: MachineWhereInput
  }

  export type MachineUpdateToOneWithWhereWithoutFlowSourcesInput = {
    where?: MachineWhereInput
    data: XOR<MachineUpdateWithoutFlowSourcesInput, MachineUncheckedUpdateWithoutFlowSourcesInput>
  }

  export type MachineUpdateWithoutFlowSourcesInput = {
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: MachineTypeUpdateOneRequiredWithoutMachinesNestedInput
    owner?: UserUpdateOneRequiredWithoutMachinesNestedInput
    plant?: PlantUpdateOneWithoutMachinesNestedInput
    factors?: MachineExternalFactorUpdateManyWithoutMachineNestedInput
    flowDestinations?: MaterialFlowUpdateManyWithoutToMachineNestedInput
  }

  export type MachineUncheckedUpdateWithoutFlowSourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    plantId?: NullableIntFieldUpdateOperationsInput | number | null
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    factors?: MachineExternalFactorUncheckedUpdateManyWithoutMachineNestedInput
    flowDestinations?: MaterialFlowUncheckedUpdateManyWithoutToMachineNestedInput
  }

  export type MachineUpsertWithoutFlowDestinationsInput = {
    update: XOR<MachineUpdateWithoutFlowDestinationsInput, MachineUncheckedUpdateWithoutFlowDestinationsInput>
    create: XOR<MachineCreateWithoutFlowDestinationsInput, MachineUncheckedCreateWithoutFlowDestinationsInput>
    where?: MachineWhereInput
  }

  export type MachineUpdateToOneWithWhereWithoutFlowDestinationsInput = {
    where?: MachineWhereInput
    data: XOR<MachineUpdateWithoutFlowDestinationsInput, MachineUncheckedUpdateWithoutFlowDestinationsInput>
  }

  export type MachineUpdateWithoutFlowDestinationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: MachineTypeUpdateOneRequiredWithoutMachinesNestedInput
    owner?: UserUpdateOneRequiredWithoutMachinesNestedInput
    plant?: PlantUpdateOneWithoutMachinesNestedInput
    factors?: MachineExternalFactorUpdateManyWithoutMachineNestedInput
    flowSources?: MaterialFlowUpdateManyWithoutFromMachineNestedInput
  }

  export type MachineUncheckedUpdateWithoutFlowDestinationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    plantId?: NullableIntFieldUpdateOperationsInput | number | null
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    factors?: MachineExternalFactorUncheckedUpdateManyWithoutMachineNestedInput
    flowSources?: MaterialFlowUncheckedUpdateManyWithoutFromMachineNestedInput
  }

  export type UserPlantCreateManyUserInput = {
    plantId: number
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineCreateManyOwnerInput = {
    id?: number
    name: string
    serialNumber: string
    typeId: number
    length: number
    width: number
    height: number
    plantId?: number | null
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlantUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plant?: PlantUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserPlantUncheckedUpdateWithoutUserInput = {
    plantId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlantUncheckedUpdateManyWithoutUserInput = {
    plantId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: MachineTypeUpdateOneRequiredWithoutMachinesNestedInput
    plant?: PlantUpdateOneWithoutMachinesNestedInput
    factors?: MachineExternalFactorUpdateManyWithoutMachineNestedInput
    flowSources?: MaterialFlowUpdateManyWithoutFromMachineNestedInput
    flowDestinations?: MaterialFlowUpdateManyWithoutToMachineNestedInput
  }

  export type MachineUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    plantId?: NullableIntFieldUpdateOperationsInput | number | null
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    factors?: MachineExternalFactorUncheckedUpdateManyWithoutMachineNestedInput
    flowSources?: MaterialFlowUncheckedUpdateManyWithoutFromMachineNestedInput
    flowDestinations?: MaterialFlowUncheckedUpdateManyWithoutToMachineNestedInput
  }

  export type MachineUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    plantId?: NullableIntFieldUpdateOperationsInput | number | null
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlantCreateManyPlantInput = {
    userId: number
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineCreateManyPlantInput = {
    id?: number
    name: string
    serialNumber: string
    typeId: number
    length: number
    width: number
    height: number
    ownerId: number
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialFlowCreateManyPlantInput = {
    id?: number
    fromMachineId: number
    toMachineId: number
    flowAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlantUpdateWithoutPlantInput = {
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlantsNestedInput
  }

  export type UserPlantUncheckedUpdateWithoutPlantInput = {
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlantUncheckedUpdateManyWithoutPlantInput = {
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineUpdateWithoutPlantInput = {
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: MachineTypeUpdateOneRequiredWithoutMachinesNestedInput
    owner?: UserUpdateOneRequiredWithoutMachinesNestedInput
    factors?: MachineExternalFactorUpdateManyWithoutMachineNestedInput
    flowSources?: MaterialFlowUpdateManyWithoutFromMachineNestedInput
    flowDestinations?: MaterialFlowUpdateManyWithoutToMachineNestedInput
  }

  export type MachineUncheckedUpdateWithoutPlantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    factors?: MachineExternalFactorUncheckedUpdateManyWithoutMachineNestedInput
    flowSources?: MaterialFlowUncheckedUpdateManyWithoutFromMachineNestedInput
    flowDestinations?: MaterialFlowUncheckedUpdateManyWithoutToMachineNestedInput
  }

  export type MachineUncheckedUpdateManyWithoutPlantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialFlowUpdateWithoutPlantInput = {
    flowAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromMachine?: MachineUpdateOneRequiredWithoutFlowSourcesNestedInput
    toMachine?: MachineUpdateOneRequiredWithoutFlowDestinationsNestedInput
  }

  export type MaterialFlowUncheckedUpdateWithoutPlantInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromMachineId?: IntFieldUpdateOperationsInput | number
    toMachineId?: IntFieldUpdateOperationsInput | number
    flowAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialFlowUncheckedUpdateManyWithoutPlantInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromMachineId?: IntFieldUpdateOperationsInput | number
    toMachineId?: IntFieldUpdateOperationsInput | number
    flowAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineCreateManyTypeInput = {
    id?: number
    name: string
    serialNumber: string
    length: number
    width: number
    height: number
    ownerId: number
    plantId?: number | null
    x?: number | null
    y?: number | null
    z?: number | null
    rotation?: number | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutMachinesNestedInput
    plant?: PlantUpdateOneWithoutMachinesNestedInput
    factors?: MachineExternalFactorUpdateManyWithoutMachineNestedInput
    flowSources?: MaterialFlowUpdateManyWithoutFromMachineNestedInput
    flowDestinations?: MaterialFlowUpdateManyWithoutToMachineNestedInput
  }

  export type MachineUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    plantId?: NullableIntFieldUpdateOperationsInput | number | null
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    factors?: MachineExternalFactorUncheckedUpdateManyWithoutMachineNestedInput
    flowSources?: MaterialFlowUncheckedUpdateManyWithoutFromMachineNestedInput
    flowDestinations?: MaterialFlowUncheckedUpdateManyWithoutToMachineNestedInput
  }

  export type MachineUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    plantId?: NullableIntFieldUpdateOperationsInput | number | null
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    z?: NullableFloatFieldUpdateOperationsInput | number | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineExternalFactorCreateManyProducedFactorInput = {
    machineId: number
    isProducer: boolean
    isSensitive: boolean
    intensity?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineExternalFactorCreateManySensitiveFactorInput = {
    machineId: number
    isProducer: boolean
    isSensitive: boolean
    intensity?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineExternalFactorUpdateWithoutProducedFactorInput = {
    isProducer?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    intensity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machine?: MachineUpdateOneRequiredWithoutFactorsNestedInput
    sensitiveFactor?: ExternalFactorUpdateOneWithoutSensitivesNestedInput
  }

  export type MachineExternalFactorUncheckedUpdateWithoutProducedFactorInput = {
    machineId?: IntFieldUpdateOperationsInput | number
    isProducer?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    intensity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineExternalFactorUncheckedUpdateManyWithoutProducedFactorInput = {
    machineId?: IntFieldUpdateOperationsInput | number
    isProducer?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    intensity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineExternalFactorUpdateWithoutSensitiveFactorInput = {
    isProducer?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    intensity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machine?: MachineUpdateOneRequiredWithoutFactorsNestedInput
    producedFactor?: ExternalFactorUpdateOneWithoutProducersNestedInput
  }

  export type MachineExternalFactorUncheckedUpdateWithoutSensitiveFactorInput = {
    machineId?: IntFieldUpdateOperationsInput | number
    isProducer?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    intensity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineExternalFactorUncheckedUpdateManyWithoutSensitiveFactorInput = {
    machineId?: IntFieldUpdateOperationsInput | number
    isProducer?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    intensity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineExternalFactorCreateManyMachineInput = {
    factorId: number
    isProducer: boolean
    isSensitive: boolean
    intensity?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialFlowCreateManyFromMachineInput = {
    id?: number
    plantId: number
    toMachineId: number
    flowAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialFlowCreateManyToMachineInput = {
    id?: number
    plantId: number
    fromMachineId: number
    flowAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineExternalFactorUpdateWithoutMachineInput = {
    isProducer?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    intensity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producedFactor?: ExternalFactorUpdateOneWithoutProducersNestedInput
    sensitiveFactor?: ExternalFactorUpdateOneWithoutSensitivesNestedInput
  }

  export type MachineExternalFactorUncheckedUpdateWithoutMachineInput = {
    factorId?: IntFieldUpdateOperationsInput | number
    isProducer?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    intensity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineExternalFactorUncheckedUpdateManyWithoutMachineInput = {
    factorId?: IntFieldUpdateOperationsInput | number
    isProducer?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    intensity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialFlowUpdateWithoutFromMachineInput = {
    flowAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plant?: PlantUpdateOneRequiredWithoutMaterialFlowsNestedInput
    toMachine?: MachineUpdateOneRequiredWithoutFlowDestinationsNestedInput
  }

  export type MaterialFlowUncheckedUpdateWithoutFromMachineInput = {
    id?: IntFieldUpdateOperationsInput | number
    plantId?: IntFieldUpdateOperationsInput | number
    toMachineId?: IntFieldUpdateOperationsInput | number
    flowAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialFlowUncheckedUpdateManyWithoutFromMachineInput = {
    id?: IntFieldUpdateOperationsInput | number
    plantId?: IntFieldUpdateOperationsInput | number
    toMachineId?: IntFieldUpdateOperationsInput | number
    flowAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialFlowUpdateWithoutToMachineInput = {
    flowAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plant?: PlantUpdateOneRequiredWithoutMaterialFlowsNestedInput
    fromMachine?: MachineUpdateOneRequiredWithoutFlowSourcesNestedInput
  }

  export type MaterialFlowUncheckedUpdateWithoutToMachineInput = {
    id?: IntFieldUpdateOperationsInput | number
    plantId?: IntFieldUpdateOperationsInput | number
    fromMachineId?: IntFieldUpdateOperationsInput | number
    flowAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialFlowUncheckedUpdateManyWithoutToMachineInput = {
    id?: IntFieldUpdateOperationsInput | number
    plantId?: IntFieldUpdateOperationsInput | number
    fromMachineId?: IntFieldUpdateOperationsInput | number
    flowAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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
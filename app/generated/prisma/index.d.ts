
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
 * Model License
 * 
 */
export type License = $Result.DefaultSelection<Prisma.$LicensePayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model MonthlyRate
 * 
 */
export type MonthlyRate = $Result.DefaultSelection<Prisma.$MonthlyRatePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>
/**
 * Model AccontoLog
 * 
 */
export type AccontoLog = $Result.DefaultSelection<Prisma.$AccontoLogPayload>
/**
 * Model PropertyCollaborator
 * 
 */
export type PropertyCollaborator = $Result.DefaultSelection<Prisma.$PropertyCollaboratorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  admin: 'admin',
  owner: 'owner',
  concierge: 'concierge',
  collaboratore: 'collaboratore'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const BookingStatus: {
  in_trattativa: 'in_trattativa',
  bloccato: 'bloccato',
  prenotato: 'prenotato',
  acconto: 'acconto',
  finalizzato: 'finalizzato',
  cancellato: 'cancellato'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const CollaboratorRole: {
  owner: 'owner',
  concierge: 'concierge',
  collaboratore: 'collaboratore'
};

export type CollaboratorRole = (typeof CollaboratorRole)[keyof typeof CollaboratorRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type CollaboratorRole = $Enums.CollaboratorRole

export const CollaboratorRole: typeof $Enums.CollaboratorRole

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.license`: Exposes CRUD operations for the **License** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licenses
    * const licenses = await prisma.license.findMany()
    * ```
    */
  get license(): Prisma.LicenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlyRate`: Exposes CRUD operations for the **MonthlyRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyRates
    * const monthlyRates = await prisma.monthlyRate.findMany()
    * ```
    */
  get monthlyRate(): Prisma.MonthlyRateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accontoLog`: Exposes CRUD operations for the **AccontoLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccontoLogs
    * const accontoLogs = await prisma.accontoLog.findMany()
    * ```
    */
  get accontoLog(): Prisma.AccontoLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyCollaborator`: Exposes CRUD operations for the **PropertyCollaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyCollaborators
    * const propertyCollaborators = await prisma.propertyCollaborator.findMany()
    * ```
    */
  get propertyCollaborator(): Prisma.PropertyCollaboratorDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    License: 'License',
    Property: 'Property',
    Room: 'Room',
    MonthlyRate: 'MonthlyRate',
    Booking: 'Booking',
    PaymentMethod: 'PaymentMethod',
    AccontoLog: 'AccontoLog',
    PropertyCollaborator: 'PropertyCollaborator'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "license" | "property" | "room" | "monthlyRate" | "booking" | "paymentMethod" | "accontoLog" | "propertyCollaborator"
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
      License: {
        payload: Prisma.$LicensePayload<ExtArgs>
        fields: Prisma.LicenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findFirst: {
            args: Prisma.LicenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findMany: {
            args: Prisma.LicenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          create: {
            args: Prisma.LicenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          createMany: {
            args: Prisma.LicenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LicenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          update: {
            args: Prisma.LicenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          deleteMany: {
            args: Prisma.LicenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          aggregate: {
            args: Prisma.LicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicense>
          }
          groupBy: {
            args: Prisma.LicenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      MonthlyRate: {
        payload: Prisma.$MonthlyRatePayload<ExtArgs>
        fields: Prisma.MonthlyRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyRatePayload>
          }
          findFirst: {
            args: Prisma.MonthlyRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyRatePayload>
          }
          findMany: {
            args: Prisma.MonthlyRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyRatePayload>[]
          }
          create: {
            args: Prisma.MonthlyRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyRatePayload>
          }
          createMany: {
            args: Prisma.MonthlyRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MonthlyRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyRatePayload>
          }
          update: {
            args: Prisma.MonthlyRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyRatePayload>
          }
          deleteMany: {
            args: Prisma.MonthlyRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonthlyRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyRatePayload>
          }
          aggregate: {
            args: Prisma.MonthlyRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyRate>
          }
          groupBy: {
            args: Prisma.MonthlyRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyRateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyRateCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyRateCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
      AccontoLog: {
        payload: Prisma.$AccontoLogPayload<ExtArgs>
        fields: Prisma.AccontoLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccontoLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccontoLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccontoLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccontoLogPayload>
          }
          findFirst: {
            args: Prisma.AccontoLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccontoLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccontoLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccontoLogPayload>
          }
          findMany: {
            args: Prisma.AccontoLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccontoLogPayload>[]
          }
          create: {
            args: Prisma.AccontoLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccontoLogPayload>
          }
          createMany: {
            args: Prisma.AccontoLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccontoLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccontoLogPayload>
          }
          update: {
            args: Prisma.AccontoLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccontoLogPayload>
          }
          deleteMany: {
            args: Prisma.AccontoLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccontoLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccontoLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccontoLogPayload>
          }
          aggregate: {
            args: Prisma.AccontoLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccontoLog>
          }
          groupBy: {
            args: Prisma.AccontoLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccontoLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccontoLogCountArgs<ExtArgs>
            result: $Utils.Optional<AccontoLogCountAggregateOutputType> | number
          }
        }
      }
      PropertyCollaborator: {
        payload: Prisma.$PropertyCollaboratorPayload<ExtArgs>
        fields: Prisma.PropertyCollaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyCollaboratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCollaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyCollaboratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCollaboratorPayload>
          }
          findFirst: {
            args: Prisma.PropertyCollaboratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCollaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyCollaboratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCollaboratorPayload>
          }
          findMany: {
            args: Prisma.PropertyCollaboratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCollaboratorPayload>[]
          }
          create: {
            args: Prisma.PropertyCollaboratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCollaboratorPayload>
          }
          createMany: {
            args: Prisma.PropertyCollaboratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropertyCollaboratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCollaboratorPayload>
          }
          update: {
            args: Prisma.PropertyCollaboratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCollaboratorPayload>
          }
          deleteMany: {
            args: Prisma.PropertyCollaboratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyCollaboratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyCollaboratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCollaboratorPayload>
          }
          aggregate: {
            args: Prisma.PropertyCollaboratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyCollaborator>
          }
          groupBy: {
            args: Prisma.PropertyCollaboratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyCollaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCollaboratorCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCollaboratorCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    license?: LicenseOmit
    property?: PropertyOmit
    room?: RoomOmit
    monthlyRate?: MonthlyRateOmit
    booking?: BookingOmit
    paymentMethod?: PaymentMethodOmit
    accontoLog?: AccontoLogOmit
    propertyCollaborator?: PropertyCollaboratorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
    collaboratorBookings: number
    propertyLinks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaboratorBookings?: boolean | UserCountOutputTypeCountCollaboratorBookingsArgs
    propertyLinks?: boolean | UserCountOutputTypeCountPropertyLinksArgs
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
  export type UserCountOutputTypeCountCollaboratorBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPropertyLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyCollaboratorWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    rooms: number
    bookings: number
    collaborators: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | PropertyCountOutputTypeCountRoomsArgs
    bookings?: boolean | PropertyCountOutputTypeCountBookingsArgs
    collaborators?: boolean | PropertyCountOutputTypeCountCollaboratorsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyCollaboratorWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    monthlyRates: number
    bookings: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monthlyRates?: boolean | RoomCountOutputTypeCountMonthlyRatesArgs
    bookings?: boolean | RoomCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMonthlyRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyRateWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    accontiLogs: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accontiLogs?: boolean | BookingCountOutputTypeCountAccontiLogsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountAccontiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccontoLogWhereInput
  }


  /**
   * Count Type PaymentMethodCountOutputType
   */

  export type PaymentMethodCountOutputType = {
    bookings: number
    collaboratorBookings: number
    accontiLogs: number
  }

  export type PaymentMethodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | PaymentMethodCountOutputTypeCountBookingsArgs
    collaboratorBookings?: boolean | PaymentMethodCountOutputTypeCountCollaboratorBookingsArgs
    accontiLogs?: boolean | PaymentMethodCountOutputTypeCountAccontiLogsArgs
  }

  // Custom InputTypes
  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodCountOutputType
     */
    select?: PaymentMethodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountCollaboratorBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountAccontiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccontoLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nickname: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nickname: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nickname: number
    email: number
    passwordHash: number
    role: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    passwordHash?: true
    role?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    passwordHash?: true
    role?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    passwordHash?: true
    role?: true
    ownerId?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nickname: string
    email: string | null
    passwordHash: string
    role: $Enums.UserRole
    ownerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    nickname?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collaboratorBookings?: boolean | User$collaboratorBookingsArgs<ExtArgs>
    propertyLinks?: boolean | User$propertyLinksArgs<ExtArgs>
    license?: boolean | User$licenseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    nickname?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "email" | "passwordHash" | "role" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaboratorBookings?: boolean | User$collaboratorBookingsArgs<ExtArgs>
    propertyLinks?: boolean | User$propertyLinksArgs<ExtArgs>
    license?: boolean | User$licenseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      collaboratorBookings: Prisma.$BookingPayload<ExtArgs>[]
      propertyLinks: Prisma.$PropertyCollaboratorPayload<ExtArgs>[]
      license: Prisma.$LicensePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nickname: string
      email: string | null
      passwordHash: string
      role: $Enums.UserRole
      ownerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collaboratorBookings<T extends User$collaboratorBookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$collaboratorBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propertyLinks<T extends User$propertyLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$propertyLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    license<T extends User$licenseArgs<ExtArgs> = {}>(args?: Subset<T, User$licenseArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly ownerId: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.collaboratorBookings
   */
  export type User$collaboratorBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.propertyLinks
   */
  export type User$propertyLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCollaborator
     */
    select?: PropertyCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCollaborator
     */
    omit?: PropertyCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCollaboratorInclude<ExtArgs> | null
    where?: PropertyCollaboratorWhereInput
    orderBy?: PropertyCollaboratorOrderByWithRelationInput | PropertyCollaboratorOrderByWithRelationInput[]
    cursor?: PropertyCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyCollaboratorScalarFieldEnum | PropertyCollaboratorScalarFieldEnum[]
  }

  /**
   * User.license
   */
  export type User$licenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model License
   */

  export type AggregateLicense = {
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  export type LicenseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    status: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    status: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    status: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    currentPeriodEnd: number
    cancelAtPeriodEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LicenseMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which License to aggregate.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licenses
    **/
    _count?: true | LicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseMaxAggregateInputType
  }

  export type GetLicenseAggregateType<T extends LicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicense[P]>
      : GetScalarType<T[P], AggregateLicense[P]>
  }




  export type LicenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithAggregationInput | LicenseOrderByWithAggregationInput[]
    by: LicenseScalarFieldEnum[] | LicenseScalarFieldEnum
    having?: LicenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseCountAggregateInputType | true
    _min?: LicenseMinAggregateInputType
    _max?: LicenseMaxAggregateInputType
  }

  export type LicenseGroupByOutputType = {
    id: string
    userId: string
    type: string
    status: string
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean
    createdAt: Date
    updatedAt: Date
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  type GetLicenseGroupByPayload<T extends LicenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseGroupByOutputType[P]>
        }
      >
    >


  export type LicenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>



  export type LicenseSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LicenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "status" | "stripeCustomerId" | "stripeSubscriptionId" | "currentPeriodEnd" | "cancelAtPeriodEnd" | "createdAt" | "updatedAt", ExtArgs["result"]["license"]>
  export type LicenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LicensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "License"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      status: string
      stripeCustomerId: string | null
      stripeSubscriptionId: string | null
      currentPeriodEnd: Date | null
      cancelAtPeriodEnd: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["license"]>
    composites: {}
  }

  type LicenseGetPayload<S extends boolean | null | undefined | LicenseDefaultArgs> = $Result.GetResult<Prisma.$LicensePayload, S>

  type LicenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseCountAggregateInputType | true
    }

  export interface LicenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['License'], meta: { name: 'License' } }
    /**
     * Find zero or one License that matches the filter.
     * @param {LicenseFindUniqueArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseFindUniqueArgs>(args: SelectSubset<T, LicenseFindUniqueArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one License that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenseFindUniqueOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseFindFirstArgs>(args?: SelectSubset<T, LicenseFindFirstArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licenses
     * const licenses = await prisma.license.findMany()
     * 
     * // Get first 10 Licenses
     * const licenses = await prisma.license.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseWithIdOnly = await prisma.license.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseFindManyArgs>(args?: SelectSubset<T, LicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a License.
     * @param {LicenseCreateArgs} args - Arguments to create a License.
     * @example
     * // Create one License
     * const License = await prisma.license.create({
     *   data: {
     *     // ... data to create a License
     *   }
     * })
     * 
     */
    create<T extends LicenseCreateArgs>(args: SelectSubset<T, LicenseCreateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licenses.
     * @param {LicenseCreateManyArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseCreateManyArgs>(args?: SelectSubset<T, LicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a License.
     * @param {LicenseDeleteArgs} args - Arguments to delete one License.
     * @example
     * // Delete one License
     * const License = await prisma.license.delete({
     *   where: {
     *     // ... filter to delete one License
     *   }
     * })
     * 
     */
    delete<T extends LicenseDeleteArgs>(args: SelectSubset<T, LicenseDeleteArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one License.
     * @param {LicenseUpdateArgs} args - Arguments to update one License.
     * @example
     * // Update one License
     * const license = await prisma.license.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseUpdateArgs>(args: SelectSubset<T, LicenseUpdateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licenses.
     * @param {LicenseDeleteManyArgs} args - Arguments to filter Licenses to delete.
     * @example
     * // Delete a few Licenses
     * const { count } = await prisma.license.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseDeleteManyArgs>(args?: SelectSubset<T, LicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseUpdateManyArgs>(args: SelectSubset<T, LicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one License.
     * @param {LicenseUpsertArgs} args - Arguments to update or create a License.
     * @example
     * // Update or create a License
     * const license = await prisma.license.upsert({
     *   create: {
     *     // ... data to create a License
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the License we want to update
     *   }
     * })
     */
    upsert<T extends LicenseUpsertArgs>(args: SelectSubset<T, LicenseUpsertArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseCountArgs} args - Arguments to filter Licenses to count.
     * @example
     * // Count the number of Licenses
     * const count = await prisma.license.count({
     *   where: {
     *     // ... the filter for the Licenses we want to count
     *   }
     * })
    **/
    count<T extends LicenseCountArgs>(
      args?: Subset<T, LicenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LicenseAggregateArgs>(args: Subset<T, LicenseAggregateArgs>): Prisma.PrismaPromise<GetLicenseAggregateType<T>>

    /**
     * Group by License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseGroupByArgs} args - Group by arguments.
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
      T extends LicenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseGroupByArgs['orderBy'] }
        : { orderBy?: LicenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the License model
   */
  readonly fields: LicenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for License.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the License model
   */
  interface LicenseFieldRefs {
    readonly id: FieldRef<"License", 'String'>
    readonly userId: FieldRef<"License", 'String'>
    readonly type: FieldRef<"License", 'String'>
    readonly status: FieldRef<"License", 'String'>
    readonly stripeCustomerId: FieldRef<"License", 'String'>
    readonly stripeSubscriptionId: FieldRef<"License", 'String'>
    readonly currentPeriodEnd: FieldRef<"License", 'DateTime'>
    readonly cancelAtPeriodEnd: FieldRef<"License", 'Boolean'>
    readonly createdAt: FieldRef<"License", 'DateTime'>
    readonly updatedAt: FieldRef<"License", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * License findUnique
   */
  export type LicenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findUniqueOrThrow
   */
  export type LicenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findFirst
   */
  export type LicenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findFirstOrThrow
   */
  export type LicenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findMany
   */
  export type LicenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License create
   */
  export type LicenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to create a License.
     */
    data: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
  }

  /**
   * License createMany
   */
  export type LicenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * License update
   */
  export type LicenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to update a License.
     */
    data: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
    /**
     * Choose, which License to update.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License updateMany
   */
  export type LicenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
  }

  /**
   * License upsert
   */
  export type LicenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The filter to search for the License to update in case it exists.
     */
    where: LicenseWhereUniqueInput
    /**
     * In case the License found by the `where` argument doesn't exist, create a new License with this data.
     */
    create: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
    /**
     * In case the License was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
  }

  /**
   * License delete
   */
  export type LicenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter which License to delete.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License deleteMany
   */
  export type LicenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licenses to delete
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to delete.
     */
    limit?: number
  }

  /**
   * License without action
   */
  export type LicenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    address: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    address: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    name: number
    location: number
    address: number
    description: number
    images: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    address?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    address?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    address?: true
    description?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    name: string
    location: string
    address: string | null
    description: string | null
    images: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    address?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rooms?: boolean | Property$roomsArgs<ExtArgs>
    bookings?: boolean | Property$bookingsArgs<ExtArgs>
    collaborators?: boolean | Property$collaboratorsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>



  export type PropertySelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    address?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "address" | "description" | "images" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Property$roomsArgs<ExtArgs>
    bookings?: boolean | Property$bookingsArgs<ExtArgs>
    collaborators?: boolean | Property$collaboratorsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      collaborators: Prisma.$PropertyCollaboratorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      address: string | null
      description: string | null
      images: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Property$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Property$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Property$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Property$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborators<T extends Property$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, Property$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly name: FieldRef<"Property", 'String'>
    readonly location: FieldRef<"Property", 'String'>
    readonly address: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly images: FieldRef<"Property", 'Json'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.rooms
   */
  export type Property$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Property.bookings
   */
  export type Property$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Property.collaborators
   */
  export type Property$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCollaborator
     */
    select?: PropertyCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCollaborator
     */
    omit?: PropertyCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCollaboratorInclude<ExtArgs> | null
    where?: PropertyCollaboratorWhereInput
    orderBy?: PropertyCollaboratorOrderByWithRelationInput | PropertyCollaboratorOrderByWithRelationInput[]
    cursor?: PropertyCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyCollaboratorScalarFieldEnum | PropertyCollaboratorScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    capacity: number | null
  }

  export type RoomSumAggregateOutputType = {
    capacity: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    name: string | null
    capacity: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    name: string | null
    capacity: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    propertyId: number
    name: number
    capacity: number
    description: number
    images: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    capacity?: true
  }

  export type RoomSumAggregateInputType = {
    capacity?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    capacity?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    capacity?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    capacity?: true
    description?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    propertyId: string
    name: string
    capacity: number
    description: string | null
    images: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    capacity?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    monthlyRates?: boolean | Room$monthlyRatesArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    id?: boolean
    propertyId?: boolean
    name?: boolean
    capacity?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "name" | "capacity" | "description" | "images" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    monthlyRates?: boolean | Room$monthlyRatesArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      monthlyRates: Prisma.$MonthlyRatePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      name: string
      capacity: number
      description: string | null
      images: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    monthlyRates<T extends Room$monthlyRatesArgs<ExtArgs> = {}>(args?: Subset<T, Room$monthlyRatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Room$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Room$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly propertyId: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly description: FieldRef<"Room", 'String'>
    readonly images: FieldRef<"Room", 'Json'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.monthlyRates
   */
  export type Room$monthlyRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRate
     */
    select?: MonthlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyRate
     */
    omit?: MonthlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyRateInclude<ExtArgs> | null
    where?: MonthlyRateWhereInput
    orderBy?: MonthlyRateOrderByWithRelationInput | MonthlyRateOrderByWithRelationInput[]
    cursor?: MonthlyRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyRateScalarFieldEnum | MonthlyRateScalarFieldEnum[]
  }

  /**
   * Room.bookings
   */
  export type Room$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model MonthlyRate
   */

  export type AggregateMonthlyRate = {
    _count: MonthlyRateCountAggregateOutputType | null
    _avg: MonthlyRateAvgAggregateOutputType | null
    _sum: MonthlyRateSumAggregateOutputType | null
    _min: MonthlyRateMinAggregateOutputType | null
    _max: MonthlyRateMaxAggregateOutputType | null
  }

  export type MonthlyRateAvgAggregateOutputType = {
    year: number | null
    month: number | null
    price: number | null
    cleaningFee: number | null
  }

  export type MonthlyRateSumAggregateOutputType = {
    year: number | null
    month: number | null
    price: number | null
    cleaningFee: number | null
  }

  export type MonthlyRateMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    year: number | null
    month: number | null
    price: number | null
    cleaningFee: number | null
  }

  export type MonthlyRateMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    year: number | null
    month: number | null
    price: number | null
    cleaningFee: number | null
  }

  export type MonthlyRateCountAggregateOutputType = {
    id: number
    roomId: number
    year: number
    month: number
    price: number
    cleaningFee: number
    _all: number
  }


  export type MonthlyRateAvgAggregateInputType = {
    year?: true
    month?: true
    price?: true
    cleaningFee?: true
  }

  export type MonthlyRateSumAggregateInputType = {
    year?: true
    month?: true
    price?: true
    cleaningFee?: true
  }

  export type MonthlyRateMinAggregateInputType = {
    id?: true
    roomId?: true
    year?: true
    month?: true
    price?: true
    cleaningFee?: true
  }

  export type MonthlyRateMaxAggregateInputType = {
    id?: true
    roomId?: true
    year?: true
    month?: true
    price?: true
    cleaningFee?: true
  }

  export type MonthlyRateCountAggregateInputType = {
    id?: true
    roomId?: true
    year?: true
    month?: true
    price?: true
    cleaningFee?: true
    _all?: true
  }

  export type MonthlyRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyRate to aggregate.
     */
    where?: MonthlyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyRates to fetch.
     */
    orderBy?: MonthlyRateOrderByWithRelationInput | MonthlyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyRates
    **/
    _count?: true | MonthlyRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyRateMaxAggregateInputType
  }

  export type GetMonthlyRateAggregateType<T extends MonthlyRateAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyRate[P]>
      : GetScalarType<T[P], AggregateMonthlyRate[P]>
  }




  export type MonthlyRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyRateWhereInput
    orderBy?: MonthlyRateOrderByWithAggregationInput | MonthlyRateOrderByWithAggregationInput[]
    by: MonthlyRateScalarFieldEnum[] | MonthlyRateScalarFieldEnum
    having?: MonthlyRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyRateCountAggregateInputType | true
    _avg?: MonthlyRateAvgAggregateInputType
    _sum?: MonthlyRateSumAggregateInputType
    _min?: MonthlyRateMinAggregateInputType
    _max?: MonthlyRateMaxAggregateInputType
  }

  export type MonthlyRateGroupByOutputType = {
    id: string
    roomId: string
    year: number
    month: number
    price: number
    cleaningFee: number
    _count: MonthlyRateCountAggregateOutputType | null
    _avg: MonthlyRateAvgAggregateOutputType | null
    _sum: MonthlyRateSumAggregateOutputType | null
    _min: MonthlyRateMinAggregateOutputType | null
    _max: MonthlyRateMaxAggregateOutputType | null
  }

  type GetMonthlyRateGroupByPayload<T extends MonthlyRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyRateGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyRateGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    year?: boolean
    month?: boolean
    price?: boolean
    cleaningFee?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyRate"]>



  export type MonthlyRateSelectScalar = {
    id?: boolean
    roomId?: boolean
    year?: boolean
    month?: boolean
    price?: boolean
    cleaningFee?: boolean
  }

  export type MonthlyRateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "year" | "month" | "price" | "cleaningFee", ExtArgs["result"]["monthlyRate"]>
  export type MonthlyRateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $MonthlyRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyRate"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      year: number
      month: number
      price: number
      cleaningFee: number
    }, ExtArgs["result"]["monthlyRate"]>
    composites: {}
  }

  type MonthlyRateGetPayload<S extends boolean | null | undefined | MonthlyRateDefaultArgs> = $Result.GetResult<Prisma.$MonthlyRatePayload, S>

  type MonthlyRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlyRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlyRateCountAggregateInputType | true
    }

  export interface MonthlyRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyRate'], meta: { name: 'MonthlyRate' } }
    /**
     * Find zero or one MonthlyRate that matches the filter.
     * @param {MonthlyRateFindUniqueArgs} args - Arguments to find a MonthlyRate
     * @example
     * // Get one MonthlyRate
     * const monthlyRate = await prisma.monthlyRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyRateFindUniqueArgs>(args: SelectSubset<T, MonthlyRateFindUniqueArgs<ExtArgs>>): Prisma__MonthlyRateClient<$Result.GetResult<Prisma.$MonthlyRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlyRate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyRateFindUniqueOrThrowArgs} args - Arguments to find a MonthlyRate
     * @example
     * // Get one MonthlyRate
     * const monthlyRate = await prisma.monthlyRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyRateFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyRateClient<$Result.GetResult<Prisma.$MonthlyRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRateFindFirstArgs} args - Arguments to find a MonthlyRate
     * @example
     * // Get one MonthlyRate
     * const monthlyRate = await prisma.monthlyRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyRateFindFirstArgs>(args?: SelectSubset<T, MonthlyRateFindFirstArgs<ExtArgs>>): Prisma__MonthlyRateClient<$Result.GetResult<Prisma.$MonthlyRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRateFindFirstOrThrowArgs} args - Arguments to find a MonthlyRate
     * @example
     * // Get one MonthlyRate
     * const monthlyRate = await prisma.monthlyRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyRateFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyRateClient<$Result.GetResult<Prisma.$MonthlyRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlyRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyRates
     * const monthlyRates = await prisma.monthlyRate.findMany()
     * 
     * // Get first 10 MonthlyRates
     * const monthlyRates = await prisma.monthlyRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyRateWithIdOnly = await prisma.monthlyRate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyRateFindManyArgs>(args?: SelectSubset<T, MonthlyRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlyRate.
     * @param {MonthlyRateCreateArgs} args - Arguments to create a MonthlyRate.
     * @example
     * // Create one MonthlyRate
     * const MonthlyRate = await prisma.monthlyRate.create({
     *   data: {
     *     // ... data to create a MonthlyRate
     *   }
     * })
     * 
     */
    create<T extends MonthlyRateCreateArgs>(args: SelectSubset<T, MonthlyRateCreateArgs<ExtArgs>>): Prisma__MonthlyRateClient<$Result.GetResult<Prisma.$MonthlyRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlyRates.
     * @param {MonthlyRateCreateManyArgs} args - Arguments to create many MonthlyRates.
     * @example
     * // Create many MonthlyRates
     * const monthlyRate = await prisma.monthlyRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyRateCreateManyArgs>(args?: SelectSubset<T, MonthlyRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MonthlyRate.
     * @param {MonthlyRateDeleteArgs} args - Arguments to delete one MonthlyRate.
     * @example
     * // Delete one MonthlyRate
     * const MonthlyRate = await prisma.monthlyRate.delete({
     *   where: {
     *     // ... filter to delete one MonthlyRate
     *   }
     * })
     * 
     */
    delete<T extends MonthlyRateDeleteArgs>(args: SelectSubset<T, MonthlyRateDeleteArgs<ExtArgs>>): Prisma__MonthlyRateClient<$Result.GetResult<Prisma.$MonthlyRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlyRate.
     * @param {MonthlyRateUpdateArgs} args - Arguments to update one MonthlyRate.
     * @example
     * // Update one MonthlyRate
     * const monthlyRate = await prisma.monthlyRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyRateUpdateArgs>(args: SelectSubset<T, MonthlyRateUpdateArgs<ExtArgs>>): Prisma__MonthlyRateClient<$Result.GetResult<Prisma.$MonthlyRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlyRates.
     * @param {MonthlyRateDeleteManyArgs} args - Arguments to filter MonthlyRates to delete.
     * @example
     * // Delete a few MonthlyRates
     * const { count } = await prisma.monthlyRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyRateDeleteManyArgs>(args?: SelectSubset<T, MonthlyRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyRates
     * const monthlyRate = await prisma.monthlyRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyRateUpdateManyArgs>(args: SelectSubset<T, MonthlyRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonthlyRate.
     * @param {MonthlyRateUpsertArgs} args - Arguments to update or create a MonthlyRate.
     * @example
     * // Update or create a MonthlyRate
     * const monthlyRate = await prisma.monthlyRate.upsert({
     *   create: {
     *     // ... data to create a MonthlyRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyRate we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyRateUpsertArgs>(args: SelectSubset<T, MonthlyRateUpsertArgs<ExtArgs>>): Prisma__MonthlyRateClient<$Result.GetResult<Prisma.$MonthlyRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlyRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRateCountArgs} args - Arguments to filter MonthlyRates to count.
     * @example
     * // Count the number of MonthlyRates
     * const count = await prisma.monthlyRate.count({
     *   where: {
     *     // ... the filter for the MonthlyRates we want to count
     *   }
     * })
    **/
    count<T extends MonthlyRateCountArgs>(
      args?: Subset<T, MonthlyRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonthlyRateAggregateArgs>(args: Subset<T, MonthlyRateAggregateArgs>): Prisma.PrismaPromise<GetMonthlyRateAggregateType<T>>

    /**
     * Group by MonthlyRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRateGroupByArgs} args - Group by arguments.
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
      T extends MonthlyRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyRateGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyRateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonthlyRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyRate model
   */
  readonly fields: MonthlyRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MonthlyRate model
   */
  interface MonthlyRateFieldRefs {
    readonly id: FieldRef<"MonthlyRate", 'String'>
    readonly roomId: FieldRef<"MonthlyRate", 'String'>
    readonly year: FieldRef<"MonthlyRate", 'Int'>
    readonly month: FieldRef<"MonthlyRate", 'Int'>
    readonly price: FieldRef<"MonthlyRate", 'Float'>
    readonly cleaningFee: FieldRef<"MonthlyRate", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyRate findUnique
   */
  export type MonthlyRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRate
     */
    select?: MonthlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyRate
     */
    omit?: MonthlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyRateInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyRate to fetch.
     */
    where: MonthlyRateWhereUniqueInput
  }

  /**
   * MonthlyRate findUniqueOrThrow
   */
  export type MonthlyRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRate
     */
    select?: MonthlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyRate
     */
    omit?: MonthlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyRateInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyRate to fetch.
     */
    where: MonthlyRateWhereUniqueInput
  }

  /**
   * MonthlyRate findFirst
   */
  export type MonthlyRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRate
     */
    select?: MonthlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyRate
     */
    omit?: MonthlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyRateInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyRate to fetch.
     */
    where?: MonthlyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyRates to fetch.
     */
    orderBy?: MonthlyRateOrderByWithRelationInput | MonthlyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyRates.
     */
    cursor?: MonthlyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyRates.
     */
    distinct?: MonthlyRateScalarFieldEnum | MonthlyRateScalarFieldEnum[]
  }

  /**
   * MonthlyRate findFirstOrThrow
   */
  export type MonthlyRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRate
     */
    select?: MonthlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyRate
     */
    omit?: MonthlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyRateInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyRate to fetch.
     */
    where?: MonthlyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyRates to fetch.
     */
    orderBy?: MonthlyRateOrderByWithRelationInput | MonthlyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyRates.
     */
    cursor?: MonthlyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyRates.
     */
    distinct?: MonthlyRateScalarFieldEnum | MonthlyRateScalarFieldEnum[]
  }

  /**
   * MonthlyRate findMany
   */
  export type MonthlyRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRate
     */
    select?: MonthlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyRate
     */
    omit?: MonthlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyRateInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyRates to fetch.
     */
    where?: MonthlyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyRates to fetch.
     */
    orderBy?: MonthlyRateOrderByWithRelationInput | MonthlyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyRates.
     */
    cursor?: MonthlyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyRates.
     */
    skip?: number
    distinct?: MonthlyRateScalarFieldEnum | MonthlyRateScalarFieldEnum[]
  }

  /**
   * MonthlyRate create
   */
  export type MonthlyRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRate
     */
    select?: MonthlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyRate
     */
    omit?: MonthlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyRateInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthlyRate.
     */
    data: XOR<MonthlyRateCreateInput, MonthlyRateUncheckedCreateInput>
  }

  /**
   * MonthlyRate createMany
   */
  export type MonthlyRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyRates.
     */
    data: MonthlyRateCreateManyInput | MonthlyRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyRate update
   */
  export type MonthlyRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRate
     */
    select?: MonthlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyRate
     */
    omit?: MonthlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyRateInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthlyRate.
     */
    data: XOR<MonthlyRateUpdateInput, MonthlyRateUncheckedUpdateInput>
    /**
     * Choose, which MonthlyRate to update.
     */
    where: MonthlyRateWhereUniqueInput
  }

  /**
   * MonthlyRate updateMany
   */
  export type MonthlyRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyRates.
     */
    data: XOR<MonthlyRateUpdateManyMutationInput, MonthlyRateUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyRates to update
     */
    where?: MonthlyRateWhereInput
    /**
     * Limit how many MonthlyRates to update.
     */
    limit?: number
  }

  /**
   * MonthlyRate upsert
   */
  export type MonthlyRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRate
     */
    select?: MonthlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyRate
     */
    omit?: MonthlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyRateInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthlyRate to update in case it exists.
     */
    where: MonthlyRateWhereUniqueInput
    /**
     * In case the MonthlyRate found by the `where` argument doesn't exist, create a new MonthlyRate with this data.
     */
    create: XOR<MonthlyRateCreateInput, MonthlyRateUncheckedCreateInput>
    /**
     * In case the MonthlyRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyRateUpdateInput, MonthlyRateUncheckedUpdateInput>
  }

  /**
   * MonthlyRate delete
   */
  export type MonthlyRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRate
     */
    select?: MonthlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyRate
     */
    omit?: MonthlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyRateInclude<ExtArgs> | null
    /**
     * Filter which MonthlyRate to delete.
     */
    where: MonthlyRateWhereUniqueInput
  }

  /**
   * MonthlyRate deleteMany
   */
  export type MonthlyRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyRates to delete
     */
    where?: MonthlyRateWhereInput
    /**
     * Limit how many MonthlyRates to delete.
     */
    limit?: number
  }

  /**
   * MonthlyRate without action
   */
  export type MonthlyRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRate
     */
    select?: MonthlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyRate
     */
    omit?: MonthlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyRateInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    guests: number | null
    nights: number | null
    stayAmount: number | null
    cleaningAmount: number | null
    ownerAmount: number | null
    feeAmount: number | null
    totalAmount: number | null
    collectedAmount: number | null
  }

  export type BookingSumAggregateOutputType = {
    guests: number | null
    nights: number | null
    stayAmount: number | null
    cleaningAmount: number | null
    ownerAmount: number | null
    feeAmount: number | null
    totalAmount: number | null
    collectedAmount: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    roomId: string | null
    clientFirstName: string | null
    clientLastName: string | null
    clientPhone: string | null
    clientEmail: string | null
    guests: number | null
    checkIn: Date | null
    checkOut: Date | null
    nights: number | null
    stayAmount: number | null
    cleaningAmount: number | null
    ownerAmount: number | null
    feeAmount: number | null
    totalAmount: number | null
    collectedAmount: number | null
    paymentMethodId: string | null
    bookingSource: string | null
    status: $Enums.BookingStatus | null
    notes: string | null
    collaboratorId: string | null
    collaboratorPaid: boolean | null
    collaboratorPaidAt: Date | null
    collaboratorPaymentMethodId: string | null
    quotePdfUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    roomId: string | null
    clientFirstName: string | null
    clientLastName: string | null
    clientPhone: string | null
    clientEmail: string | null
    guests: number | null
    checkIn: Date | null
    checkOut: Date | null
    nights: number | null
    stayAmount: number | null
    cleaningAmount: number | null
    ownerAmount: number | null
    feeAmount: number | null
    totalAmount: number | null
    collectedAmount: number | null
    paymentMethodId: string | null
    bookingSource: string | null
    status: $Enums.BookingStatus | null
    notes: string | null
    collaboratorId: string | null
    collaboratorPaid: boolean | null
    collaboratorPaidAt: Date | null
    collaboratorPaymentMethodId: string | null
    quotePdfUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    propertyId: number
    roomId: number
    clientFirstName: number
    clientLastName: number
    clientPhone: number
    clientEmail: number
    guests: number
    checkIn: number
    checkOut: number
    nights: number
    stayAmount: number
    cleaningAmount: number
    ownerAmount: number
    feeAmount: number
    totalAmount: number
    collectedAmount: number
    paymentMethodId: number
    bookingSource: number
    status: number
    notes: number
    collaboratorId: number
    collaboratorPaid: number
    collaboratorPaidAt: number
    collaboratorPaymentMethodId: number
    quotePdfUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    guests?: true
    nights?: true
    stayAmount?: true
    cleaningAmount?: true
    ownerAmount?: true
    feeAmount?: true
    totalAmount?: true
    collectedAmount?: true
  }

  export type BookingSumAggregateInputType = {
    guests?: true
    nights?: true
    stayAmount?: true
    cleaningAmount?: true
    ownerAmount?: true
    feeAmount?: true
    totalAmount?: true
    collectedAmount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    propertyId?: true
    roomId?: true
    clientFirstName?: true
    clientLastName?: true
    clientPhone?: true
    clientEmail?: true
    guests?: true
    checkIn?: true
    checkOut?: true
    nights?: true
    stayAmount?: true
    cleaningAmount?: true
    ownerAmount?: true
    feeAmount?: true
    totalAmount?: true
    collectedAmount?: true
    paymentMethodId?: true
    bookingSource?: true
    status?: true
    notes?: true
    collaboratorId?: true
    collaboratorPaid?: true
    collaboratorPaidAt?: true
    collaboratorPaymentMethodId?: true
    quotePdfUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    propertyId?: true
    roomId?: true
    clientFirstName?: true
    clientLastName?: true
    clientPhone?: true
    clientEmail?: true
    guests?: true
    checkIn?: true
    checkOut?: true
    nights?: true
    stayAmount?: true
    cleaningAmount?: true
    ownerAmount?: true
    feeAmount?: true
    totalAmount?: true
    collectedAmount?: true
    paymentMethodId?: true
    bookingSource?: true
    status?: true
    notes?: true
    collaboratorId?: true
    collaboratorPaid?: true
    collaboratorPaidAt?: true
    collaboratorPaymentMethodId?: true
    quotePdfUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    propertyId?: true
    roomId?: true
    clientFirstName?: true
    clientLastName?: true
    clientPhone?: true
    clientEmail?: true
    guests?: true
    checkIn?: true
    checkOut?: true
    nights?: true
    stayAmount?: true
    cleaningAmount?: true
    ownerAmount?: true
    feeAmount?: true
    totalAmount?: true
    collectedAmount?: true
    paymentMethodId?: true
    bookingSource?: true
    status?: true
    notes?: true
    collaboratorId?: true
    collaboratorPaid?: true
    collaboratorPaidAt?: true
    collaboratorPaymentMethodId?: true
    quotePdfUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    propertyId: string
    roomId: string
    clientFirstName: string
    clientLastName: string | null
    clientPhone: string | null
    clientEmail: string | null
    guests: number
    checkIn: Date
    checkOut: Date
    nights: number
    stayAmount: number
    cleaningAmount: number
    ownerAmount: number
    feeAmount: number
    totalAmount: number
    collectedAmount: number
    paymentMethodId: string | null
    bookingSource: string | null
    status: $Enums.BookingStatus
    notes: string | null
    collaboratorId: string | null
    collaboratorPaid: boolean
    collaboratorPaidAt: Date | null
    collaboratorPaymentMethodId: string | null
    quotePdfUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    roomId?: boolean
    clientFirstName?: boolean
    clientLastName?: boolean
    clientPhone?: boolean
    clientEmail?: boolean
    guests?: boolean
    checkIn?: boolean
    checkOut?: boolean
    nights?: boolean
    stayAmount?: boolean
    cleaningAmount?: boolean
    ownerAmount?: boolean
    feeAmount?: boolean
    totalAmount?: boolean
    collectedAmount?: boolean
    paymentMethodId?: boolean
    bookingSource?: boolean
    status?: boolean
    notes?: boolean
    collaboratorId?: boolean
    collaboratorPaid?: boolean
    collaboratorPaidAt?: boolean
    collaboratorPaymentMethodId?: boolean
    quotePdfUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    paymentMethod?: boolean | Booking$paymentMethodArgs<ExtArgs>
    collaboratorPaymentMethod?: boolean | Booking$collaboratorPaymentMethodArgs<ExtArgs>
    collaborator?: boolean | Booking$collaboratorArgs<ExtArgs>
    accontiLogs?: boolean | Booking$accontiLogsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    propertyId?: boolean
    roomId?: boolean
    clientFirstName?: boolean
    clientLastName?: boolean
    clientPhone?: boolean
    clientEmail?: boolean
    guests?: boolean
    checkIn?: boolean
    checkOut?: boolean
    nights?: boolean
    stayAmount?: boolean
    cleaningAmount?: boolean
    ownerAmount?: boolean
    feeAmount?: boolean
    totalAmount?: boolean
    collectedAmount?: boolean
    paymentMethodId?: boolean
    bookingSource?: boolean
    status?: boolean
    notes?: boolean
    collaboratorId?: boolean
    collaboratorPaid?: boolean
    collaboratorPaidAt?: boolean
    collaboratorPaymentMethodId?: boolean
    quotePdfUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "roomId" | "clientFirstName" | "clientLastName" | "clientPhone" | "clientEmail" | "guests" | "checkIn" | "checkOut" | "nights" | "stayAmount" | "cleaningAmount" | "ownerAmount" | "feeAmount" | "totalAmount" | "collectedAmount" | "paymentMethodId" | "bookingSource" | "status" | "notes" | "collaboratorId" | "collaboratorPaid" | "collaboratorPaidAt" | "collaboratorPaymentMethodId" | "quotePdfUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    paymentMethod?: boolean | Booking$paymentMethodArgs<ExtArgs>
    collaboratorPaymentMethod?: boolean | Booking$collaboratorPaymentMethodArgs<ExtArgs>
    collaborator?: boolean | Booking$collaboratorArgs<ExtArgs>
    accontiLogs?: boolean | Booking$accontiLogsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      paymentMethod: Prisma.$PaymentMethodPayload<ExtArgs> | null
      collaboratorPaymentMethod: Prisma.$PaymentMethodPayload<ExtArgs> | null
      collaborator: Prisma.$UserPayload<ExtArgs> | null
      accontiLogs: Prisma.$AccontoLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      roomId: string
      clientFirstName: string
      clientLastName: string | null
      clientPhone: string | null
      clientEmail: string | null
      guests: number
      checkIn: Date
      checkOut: Date
      nights: number
      stayAmount: number
      cleaningAmount: number
      ownerAmount: number
      feeAmount: number
      totalAmount: number
      collectedAmount: number
      paymentMethodId: string | null
      bookingSource: string | null
      status: $Enums.BookingStatus
      notes: string | null
      collaboratorId: string | null
      collaboratorPaid: boolean
      collaboratorPaidAt: Date | null
      collaboratorPaymentMethodId: string | null
      quotePdfUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paymentMethod<T extends Booking$paymentMethodArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentMethodArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    collaboratorPaymentMethod<T extends Booking$collaboratorPaymentMethodArgs<ExtArgs> = {}>(args?: Subset<T, Booking$collaboratorPaymentMethodArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    collaborator<T extends Booking$collaboratorArgs<ExtArgs> = {}>(args?: Subset<T, Booking$collaboratorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    accontiLogs<T extends Booking$accontiLogsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$accontiLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccontoLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly propertyId: FieldRef<"Booking", 'String'>
    readonly roomId: FieldRef<"Booking", 'String'>
    readonly clientFirstName: FieldRef<"Booking", 'String'>
    readonly clientLastName: FieldRef<"Booking", 'String'>
    readonly clientPhone: FieldRef<"Booking", 'String'>
    readonly clientEmail: FieldRef<"Booking", 'String'>
    readonly guests: FieldRef<"Booking", 'Int'>
    readonly checkIn: FieldRef<"Booking", 'DateTime'>
    readonly checkOut: FieldRef<"Booking", 'DateTime'>
    readonly nights: FieldRef<"Booking", 'Int'>
    readonly stayAmount: FieldRef<"Booking", 'Float'>
    readonly cleaningAmount: FieldRef<"Booking", 'Float'>
    readonly ownerAmount: FieldRef<"Booking", 'Float'>
    readonly feeAmount: FieldRef<"Booking", 'Float'>
    readonly totalAmount: FieldRef<"Booking", 'Float'>
    readonly collectedAmount: FieldRef<"Booking", 'Float'>
    readonly paymentMethodId: FieldRef<"Booking", 'String'>
    readonly bookingSource: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly collaboratorId: FieldRef<"Booking", 'String'>
    readonly collaboratorPaid: FieldRef<"Booking", 'Boolean'>
    readonly collaboratorPaidAt: FieldRef<"Booking", 'DateTime'>
    readonly collaboratorPaymentMethodId: FieldRef<"Booking", 'String'>
    readonly quotePdfUrl: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.paymentMethod
   */
  export type Booking$paymentMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    where?: PaymentMethodWhereInput
  }

  /**
   * Booking.collaboratorPaymentMethod
   */
  export type Booking$collaboratorPaymentMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    where?: PaymentMethodWhereInput
  }

  /**
   * Booking.collaborator
   */
  export type Booking$collaboratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Booking.accontiLogs
   */
  export type Booking$accontiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccontoLog
     */
    select?: AccontoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccontoLog
     */
    omit?: AccontoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccontoLogInclude<ExtArgs> | null
    where?: AccontoLogWhereInput
    orderBy?: AccontoLogOrderByWithRelationInput | AccontoLogOrderByWithRelationInput[]
    cursor?: AccontoLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccontoLogScalarFieldEnum | AccontoLogScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    id: string | null
    name: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    id: string | null
    name: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    id: number
    name: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentMethodMinAggregateInputType = {
    id?: true
    name?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    id?: true
    name?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    id?: true
    name?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[]
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    id: string
    name: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: PaymentMethodCountAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | PaymentMethod$bookingsArgs<ExtArgs>
    collaboratorBookings?: boolean | PaymentMethod$collaboratorBookingsArgs<ExtArgs>
    accontiLogs?: boolean | PaymentMethod$accontiLogsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>



  export type PaymentMethodSelectScalar = {
    id?: boolean
    name?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentMethodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentMethod"]>
  export type PaymentMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | PaymentMethod$bookingsArgs<ExtArgs>
    collaboratorBookings?: boolean | PaymentMethod$collaboratorBookingsArgs<ExtArgs>
    accontiLogs?: boolean | PaymentMethod$accontiLogsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      collaboratorBookings: Prisma.$BookingPayload<ExtArgs>[]
      accontiLogs: Prisma.$AccontoLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }

  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentMethod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodFindManyArgs>(args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodCreateArgs>(args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodCreateManyArgs>(args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodDeleteArgs>(args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodUpdateArgs>(args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodUpsertArgs>(args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
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
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends PaymentMethod$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaboratorBookings<T extends PaymentMethod$collaboratorBookingsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$collaboratorBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accontiLogs<T extends PaymentMethod$accontiLogsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$accontiLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccontoLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PaymentMethod model
   */
  interface PaymentMethodFieldRefs {
    readonly id: FieldRef<"PaymentMethod", 'String'>
    readonly name: FieldRef<"PaymentMethod", 'String'>
    readonly active: FieldRef<"PaymentMethod", 'Boolean'>
    readonly createdAt: FieldRef<"PaymentMethod", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentMethod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }

  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
  }

  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }

  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to delete.
     */
    limit?: number
  }

  /**
   * PaymentMethod.bookings
   */
  export type PaymentMethod$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * PaymentMethod.collaboratorBookings
   */
  export type PaymentMethod$collaboratorBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * PaymentMethod.accontiLogs
   */
  export type PaymentMethod$accontiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccontoLog
     */
    select?: AccontoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccontoLog
     */
    omit?: AccontoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccontoLogInclude<ExtArgs> | null
    where?: AccontoLogWhereInput
    orderBy?: AccontoLogOrderByWithRelationInput | AccontoLogOrderByWithRelationInput[]
    cursor?: AccontoLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccontoLogScalarFieldEnum | AccontoLogScalarFieldEnum[]
  }

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
  }


  /**
   * Model AccontoLog
   */

  export type AggregateAccontoLog = {
    _count: AccontoLogCountAggregateOutputType | null
    _avg: AccontoLogAvgAggregateOutputType | null
    _sum: AccontoLogSumAggregateOutputType | null
    _min: AccontoLogMinAggregateOutputType | null
    _max: AccontoLogMaxAggregateOutputType | null
  }

  export type AccontoLogAvgAggregateOutputType = {
    amount: number | null
  }

  export type AccontoLogSumAggregateOutputType = {
    amount: number | null
  }

  export type AccontoLogMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amount: number | null
    paymentMethodId: string | null
    type: string | null
    savedAt: Date | null
  }

  export type AccontoLogMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amount: number | null
    paymentMethodId: string | null
    type: string | null
    savedAt: Date | null
  }

  export type AccontoLogCountAggregateOutputType = {
    id: number
    bookingId: number
    amount: number
    paymentMethodId: number
    type: number
    savedAt: number
    _all: number
  }


  export type AccontoLogAvgAggregateInputType = {
    amount?: true
  }

  export type AccontoLogSumAggregateInputType = {
    amount?: true
  }

  export type AccontoLogMinAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    paymentMethodId?: true
    type?: true
    savedAt?: true
  }

  export type AccontoLogMaxAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    paymentMethodId?: true
    type?: true
    savedAt?: true
  }

  export type AccontoLogCountAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    paymentMethodId?: true
    type?: true
    savedAt?: true
    _all?: true
  }

  export type AccontoLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccontoLog to aggregate.
     */
    where?: AccontoLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccontoLogs to fetch.
     */
    orderBy?: AccontoLogOrderByWithRelationInput | AccontoLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccontoLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccontoLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccontoLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccontoLogs
    **/
    _count?: true | AccontoLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccontoLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccontoLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccontoLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccontoLogMaxAggregateInputType
  }

  export type GetAccontoLogAggregateType<T extends AccontoLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAccontoLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccontoLog[P]>
      : GetScalarType<T[P], AggregateAccontoLog[P]>
  }




  export type AccontoLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccontoLogWhereInput
    orderBy?: AccontoLogOrderByWithAggregationInput | AccontoLogOrderByWithAggregationInput[]
    by: AccontoLogScalarFieldEnum[] | AccontoLogScalarFieldEnum
    having?: AccontoLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccontoLogCountAggregateInputType | true
    _avg?: AccontoLogAvgAggregateInputType
    _sum?: AccontoLogSumAggregateInputType
    _min?: AccontoLogMinAggregateInputType
    _max?: AccontoLogMaxAggregateInputType
  }

  export type AccontoLogGroupByOutputType = {
    id: string
    bookingId: string
    amount: number
    paymentMethodId: string | null
    type: string
    savedAt: Date
    _count: AccontoLogCountAggregateOutputType | null
    _avg: AccontoLogAvgAggregateOutputType | null
    _sum: AccontoLogSumAggregateOutputType | null
    _min: AccontoLogMinAggregateOutputType | null
    _max: AccontoLogMaxAggregateOutputType | null
  }

  type GetAccontoLogGroupByPayload<T extends AccontoLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccontoLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccontoLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccontoLogGroupByOutputType[P]>
            : GetScalarType<T[P], AccontoLogGroupByOutputType[P]>
        }
      >
    >


  export type AccontoLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    paymentMethodId?: boolean
    type?: boolean
    savedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    paymentMethod?: boolean | AccontoLog$paymentMethodArgs<ExtArgs>
  }, ExtArgs["result"]["accontoLog"]>



  export type AccontoLogSelectScalar = {
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    paymentMethodId?: boolean
    type?: boolean
    savedAt?: boolean
  }

  export type AccontoLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "amount" | "paymentMethodId" | "type" | "savedAt", ExtArgs["result"]["accontoLog"]>
  export type AccontoLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    paymentMethod?: boolean | AccontoLog$paymentMethodArgs<ExtArgs>
  }

  export type $AccontoLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccontoLog"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      paymentMethod: Prisma.$PaymentMethodPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      amount: number
      paymentMethodId: string | null
      type: string
      savedAt: Date
    }, ExtArgs["result"]["accontoLog"]>
    composites: {}
  }

  type AccontoLogGetPayload<S extends boolean | null | undefined | AccontoLogDefaultArgs> = $Result.GetResult<Prisma.$AccontoLogPayload, S>

  type AccontoLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccontoLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccontoLogCountAggregateInputType | true
    }

  export interface AccontoLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccontoLog'], meta: { name: 'AccontoLog' } }
    /**
     * Find zero or one AccontoLog that matches the filter.
     * @param {AccontoLogFindUniqueArgs} args - Arguments to find a AccontoLog
     * @example
     * // Get one AccontoLog
     * const accontoLog = await prisma.accontoLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccontoLogFindUniqueArgs>(args: SelectSubset<T, AccontoLogFindUniqueArgs<ExtArgs>>): Prisma__AccontoLogClient<$Result.GetResult<Prisma.$AccontoLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccontoLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccontoLogFindUniqueOrThrowArgs} args - Arguments to find a AccontoLog
     * @example
     * // Get one AccontoLog
     * const accontoLog = await prisma.accontoLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccontoLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AccontoLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccontoLogClient<$Result.GetResult<Prisma.$AccontoLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccontoLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccontoLogFindFirstArgs} args - Arguments to find a AccontoLog
     * @example
     * // Get one AccontoLog
     * const accontoLog = await prisma.accontoLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccontoLogFindFirstArgs>(args?: SelectSubset<T, AccontoLogFindFirstArgs<ExtArgs>>): Prisma__AccontoLogClient<$Result.GetResult<Prisma.$AccontoLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccontoLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccontoLogFindFirstOrThrowArgs} args - Arguments to find a AccontoLog
     * @example
     * // Get one AccontoLog
     * const accontoLog = await prisma.accontoLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccontoLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AccontoLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccontoLogClient<$Result.GetResult<Prisma.$AccontoLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccontoLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccontoLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccontoLogs
     * const accontoLogs = await prisma.accontoLog.findMany()
     * 
     * // Get first 10 AccontoLogs
     * const accontoLogs = await prisma.accontoLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accontoLogWithIdOnly = await prisma.accontoLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccontoLogFindManyArgs>(args?: SelectSubset<T, AccontoLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccontoLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccontoLog.
     * @param {AccontoLogCreateArgs} args - Arguments to create a AccontoLog.
     * @example
     * // Create one AccontoLog
     * const AccontoLog = await prisma.accontoLog.create({
     *   data: {
     *     // ... data to create a AccontoLog
     *   }
     * })
     * 
     */
    create<T extends AccontoLogCreateArgs>(args: SelectSubset<T, AccontoLogCreateArgs<ExtArgs>>): Prisma__AccontoLogClient<$Result.GetResult<Prisma.$AccontoLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccontoLogs.
     * @param {AccontoLogCreateManyArgs} args - Arguments to create many AccontoLogs.
     * @example
     * // Create many AccontoLogs
     * const accontoLog = await prisma.accontoLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccontoLogCreateManyArgs>(args?: SelectSubset<T, AccontoLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccontoLog.
     * @param {AccontoLogDeleteArgs} args - Arguments to delete one AccontoLog.
     * @example
     * // Delete one AccontoLog
     * const AccontoLog = await prisma.accontoLog.delete({
     *   where: {
     *     // ... filter to delete one AccontoLog
     *   }
     * })
     * 
     */
    delete<T extends AccontoLogDeleteArgs>(args: SelectSubset<T, AccontoLogDeleteArgs<ExtArgs>>): Prisma__AccontoLogClient<$Result.GetResult<Prisma.$AccontoLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccontoLog.
     * @param {AccontoLogUpdateArgs} args - Arguments to update one AccontoLog.
     * @example
     * // Update one AccontoLog
     * const accontoLog = await prisma.accontoLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccontoLogUpdateArgs>(args: SelectSubset<T, AccontoLogUpdateArgs<ExtArgs>>): Prisma__AccontoLogClient<$Result.GetResult<Prisma.$AccontoLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccontoLogs.
     * @param {AccontoLogDeleteManyArgs} args - Arguments to filter AccontoLogs to delete.
     * @example
     * // Delete a few AccontoLogs
     * const { count } = await prisma.accontoLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccontoLogDeleteManyArgs>(args?: SelectSubset<T, AccontoLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccontoLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccontoLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccontoLogs
     * const accontoLog = await prisma.accontoLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccontoLogUpdateManyArgs>(args: SelectSubset<T, AccontoLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccontoLog.
     * @param {AccontoLogUpsertArgs} args - Arguments to update or create a AccontoLog.
     * @example
     * // Update or create a AccontoLog
     * const accontoLog = await prisma.accontoLog.upsert({
     *   create: {
     *     // ... data to create a AccontoLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccontoLog we want to update
     *   }
     * })
     */
    upsert<T extends AccontoLogUpsertArgs>(args: SelectSubset<T, AccontoLogUpsertArgs<ExtArgs>>): Prisma__AccontoLogClient<$Result.GetResult<Prisma.$AccontoLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccontoLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccontoLogCountArgs} args - Arguments to filter AccontoLogs to count.
     * @example
     * // Count the number of AccontoLogs
     * const count = await prisma.accontoLog.count({
     *   where: {
     *     // ... the filter for the AccontoLogs we want to count
     *   }
     * })
    **/
    count<T extends AccontoLogCountArgs>(
      args?: Subset<T, AccontoLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccontoLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccontoLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccontoLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccontoLogAggregateArgs>(args: Subset<T, AccontoLogAggregateArgs>): Prisma.PrismaPromise<GetAccontoLogAggregateType<T>>

    /**
     * Group by AccontoLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccontoLogGroupByArgs} args - Group by arguments.
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
      T extends AccontoLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccontoLogGroupByArgs['orderBy'] }
        : { orderBy?: AccontoLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccontoLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccontoLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccontoLog model
   */
  readonly fields: AccontoLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccontoLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccontoLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paymentMethod<T extends AccontoLog$paymentMethodArgs<ExtArgs> = {}>(args?: Subset<T, AccontoLog$paymentMethodArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AccontoLog model
   */
  interface AccontoLogFieldRefs {
    readonly id: FieldRef<"AccontoLog", 'String'>
    readonly bookingId: FieldRef<"AccontoLog", 'String'>
    readonly amount: FieldRef<"AccontoLog", 'Float'>
    readonly paymentMethodId: FieldRef<"AccontoLog", 'String'>
    readonly type: FieldRef<"AccontoLog", 'String'>
    readonly savedAt: FieldRef<"AccontoLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccontoLog findUnique
   */
  export type AccontoLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccontoLog
     */
    select?: AccontoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccontoLog
     */
    omit?: AccontoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccontoLogInclude<ExtArgs> | null
    /**
     * Filter, which AccontoLog to fetch.
     */
    where: AccontoLogWhereUniqueInput
  }

  /**
   * AccontoLog findUniqueOrThrow
   */
  export type AccontoLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccontoLog
     */
    select?: AccontoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccontoLog
     */
    omit?: AccontoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccontoLogInclude<ExtArgs> | null
    /**
     * Filter, which AccontoLog to fetch.
     */
    where: AccontoLogWhereUniqueInput
  }

  /**
   * AccontoLog findFirst
   */
  export type AccontoLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccontoLog
     */
    select?: AccontoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccontoLog
     */
    omit?: AccontoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccontoLogInclude<ExtArgs> | null
    /**
     * Filter, which AccontoLog to fetch.
     */
    where?: AccontoLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccontoLogs to fetch.
     */
    orderBy?: AccontoLogOrderByWithRelationInput | AccontoLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccontoLogs.
     */
    cursor?: AccontoLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccontoLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccontoLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccontoLogs.
     */
    distinct?: AccontoLogScalarFieldEnum | AccontoLogScalarFieldEnum[]
  }

  /**
   * AccontoLog findFirstOrThrow
   */
  export type AccontoLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccontoLog
     */
    select?: AccontoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccontoLog
     */
    omit?: AccontoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccontoLogInclude<ExtArgs> | null
    /**
     * Filter, which AccontoLog to fetch.
     */
    where?: AccontoLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccontoLogs to fetch.
     */
    orderBy?: AccontoLogOrderByWithRelationInput | AccontoLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccontoLogs.
     */
    cursor?: AccontoLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccontoLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccontoLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccontoLogs.
     */
    distinct?: AccontoLogScalarFieldEnum | AccontoLogScalarFieldEnum[]
  }

  /**
   * AccontoLog findMany
   */
  export type AccontoLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccontoLog
     */
    select?: AccontoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccontoLog
     */
    omit?: AccontoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccontoLogInclude<ExtArgs> | null
    /**
     * Filter, which AccontoLogs to fetch.
     */
    where?: AccontoLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccontoLogs to fetch.
     */
    orderBy?: AccontoLogOrderByWithRelationInput | AccontoLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccontoLogs.
     */
    cursor?: AccontoLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccontoLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccontoLogs.
     */
    skip?: number
    distinct?: AccontoLogScalarFieldEnum | AccontoLogScalarFieldEnum[]
  }

  /**
   * AccontoLog create
   */
  export type AccontoLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccontoLog
     */
    select?: AccontoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccontoLog
     */
    omit?: AccontoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccontoLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AccontoLog.
     */
    data: XOR<AccontoLogCreateInput, AccontoLogUncheckedCreateInput>
  }

  /**
   * AccontoLog createMany
   */
  export type AccontoLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccontoLogs.
     */
    data: AccontoLogCreateManyInput | AccontoLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccontoLog update
   */
  export type AccontoLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccontoLog
     */
    select?: AccontoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccontoLog
     */
    omit?: AccontoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccontoLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AccontoLog.
     */
    data: XOR<AccontoLogUpdateInput, AccontoLogUncheckedUpdateInput>
    /**
     * Choose, which AccontoLog to update.
     */
    where: AccontoLogWhereUniqueInput
  }

  /**
   * AccontoLog updateMany
   */
  export type AccontoLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccontoLogs.
     */
    data: XOR<AccontoLogUpdateManyMutationInput, AccontoLogUncheckedUpdateManyInput>
    /**
     * Filter which AccontoLogs to update
     */
    where?: AccontoLogWhereInput
    /**
     * Limit how many AccontoLogs to update.
     */
    limit?: number
  }

  /**
   * AccontoLog upsert
   */
  export type AccontoLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccontoLog
     */
    select?: AccontoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccontoLog
     */
    omit?: AccontoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccontoLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AccontoLog to update in case it exists.
     */
    where: AccontoLogWhereUniqueInput
    /**
     * In case the AccontoLog found by the `where` argument doesn't exist, create a new AccontoLog with this data.
     */
    create: XOR<AccontoLogCreateInput, AccontoLogUncheckedCreateInput>
    /**
     * In case the AccontoLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccontoLogUpdateInput, AccontoLogUncheckedUpdateInput>
  }

  /**
   * AccontoLog delete
   */
  export type AccontoLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccontoLog
     */
    select?: AccontoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccontoLog
     */
    omit?: AccontoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccontoLogInclude<ExtArgs> | null
    /**
     * Filter which AccontoLog to delete.
     */
    where: AccontoLogWhereUniqueInput
  }

  /**
   * AccontoLog deleteMany
   */
  export type AccontoLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccontoLogs to delete
     */
    where?: AccontoLogWhereInput
    /**
     * Limit how many AccontoLogs to delete.
     */
    limit?: number
  }

  /**
   * AccontoLog.paymentMethod
   */
  export type AccontoLog$paymentMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    where?: PaymentMethodWhereInput
  }

  /**
   * AccontoLog without action
   */
  export type AccontoLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccontoLog
     */
    select?: AccontoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccontoLog
     */
    omit?: AccontoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccontoLogInclude<ExtArgs> | null
  }


  /**
   * Model PropertyCollaborator
   */

  export type AggregatePropertyCollaborator = {
    _count: PropertyCollaboratorCountAggregateOutputType | null
    _min: PropertyCollaboratorMinAggregateOutputType | null
    _max: PropertyCollaboratorMaxAggregateOutputType | null
  }

  export type PropertyCollaboratorMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    userId: string | null
    roleOnProperty: $Enums.CollaboratorRole | null
    createdAt: Date | null
  }

  export type PropertyCollaboratorMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    userId: string | null
    roleOnProperty: $Enums.CollaboratorRole | null
    createdAt: Date | null
  }

  export type PropertyCollaboratorCountAggregateOutputType = {
    id: number
    propertyId: number
    userId: number
    roleOnProperty: number
    createdAt: number
    _all: number
  }


  export type PropertyCollaboratorMinAggregateInputType = {
    id?: true
    propertyId?: true
    userId?: true
    roleOnProperty?: true
    createdAt?: true
  }

  export type PropertyCollaboratorMaxAggregateInputType = {
    id?: true
    propertyId?: true
    userId?: true
    roleOnProperty?: true
    createdAt?: true
  }

  export type PropertyCollaboratorCountAggregateInputType = {
    id?: true
    propertyId?: true
    userId?: true
    roleOnProperty?: true
    createdAt?: true
    _all?: true
  }

  export type PropertyCollaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyCollaborator to aggregate.
     */
    where?: PropertyCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCollaborators to fetch.
     */
    orderBy?: PropertyCollaboratorOrderByWithRelationInput | PropertyCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyCollaborators
    **/
    _count?: true | PropertyCollaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyCollaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyCollaboratorMaxAggregateInputType
  }

  export type GetPropertyCollaboratorAggregateType<T extends PropertyCollaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyCollaborator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyCollaborator[P]>
      : GetScalarType<T[P], AggregatePropertyCollaborator[P]>
  }




  export type PropertyCollaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyCollaboratorWhereInput
    orderBy?: PropertyCollaboratorOrderByWithAggregationInput | PropertyCollaboratorOrderByWithAggregationInput[]
    by: PropertyCollaboratorScalarFieldEnum[] | PropertyCollaboratorScalarFieldEnum
    having?: PropertyCollaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCollaboratorCountAggregateInputType | true
    _min?: PropertyCollaboratorMinAggregateInputType
    _max?: PropertyCollaboratorMaxAggregateInputType
  }

  export type PropertyCollaboratorGroupByOutputType = {
    id: string
    propertyId: string
    userId: string
    roleOnProperty: $Enums.CollaboratorRole
    createdAt: Date
    _count: PropertyCollaboratorCountAggregateOutputType | null
    _min: PropertyCollaboratorMinAggregateOutputType | null
    _max: PropertyCollaboratorMaxAggregateOutputType | null
  }

  type GetPropertyCollaboratorGroupByPayload<T extends PropertyCollaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyCollaboratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyCollaboratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyCollaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyCollaboratorGroupByOutputType[P]>
        }
      >
    >


  export type PropertyCollaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    userId?: boolean
    roleOnProperty?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyCollaborator"]>



  export type PropertyCollaboratorSelectScalar = {
    id?: boolean
    propertyId?: boolean
    userId?: boolean
    roleOnProperty?: boolean
    createdAt?: boolean
  }

  export type PropertyCollaboratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "userId" | "roleOnProperty" | "createdAt", ExtArgs["result"]["propertyCollaborator"]>
  export type PropertyCollaboratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PropertyCollaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyCollaborator"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      userId: string
      roleOnProperty: $Enums.CollaboratorRole
      createdAt: Date
    }, ExtArgs["result"]["propertyCollaborator"]>
    composites: {}
  }

  type PropertyCollaboratorGetPayload<S extends boolean | null | undefined | PropertyCollaboratorDefaultArgs> = $Result.GetResult<Prisma.$PropertyCollaboratorPayload, S>

  type PropertyCollaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyCollaboratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCollaboratorCountAggregateInputType | true
    }

  export interface PropertyCollaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyCollaborator'], meta: { name: 'PropertyCollaborator' } }
    /**
     * Find zero or one PropertyCollaborator that matches the filter.
     * @param {PropertyCollaboratorFindUniqueArgs} args - Arguments to find a PropertyCollaborator
     * @example
     * // Get one PropertyCollaborator
     * const propertyCollaborator = await prisma.propertyCollaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyCollaboratorFindUniqueArgs>(args: SelectSubset<T, PropertyCollaboratorFindUniqueArgs<ExtArgs>>): Prisma__PropertyCollaboratorClient<$Result.GetResult<Prisma.$PropertyCollaboratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyCollaborator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyCollaboratorFindUniqueOrThrowArgs} args - Arguments to find a PropertyCollaborator
     * @example
     * // Get one PropertyCollaborator
     * const propertyCollaborator = await prisma.propertyCollaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyCollaboratorFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyCollaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyCollaboratorClient<$Result.GetResult<Prisma.$PropertyCollaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyCollaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCollaboratorFindFirstArgs} args - Arguments to find a PropertyCollaborator
     * @example
     * // Get one PropertyCollaborator
     * const propertyCollaborator = await prisma.propertyCollaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyCollaboratorFindFirstArgs>(args?: SelectSubset<T, PropertyCollaboratorFindFirstArgs<ExtArgs>>): Prisma__PropertyCollaboratorClient<$Result.GetResult<Prisma.$PropertyCollaboratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyCollaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCollaboratorFindFirstOrThrowArgs} args - Arguments to find a PropertyCollaborator
     * @example
     * // Get one PropertyCollaborator
     * const propertyCollaborator = await prisma.propertyCollaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyCollaboratorFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyCollaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyCollaboratorClient<$Result.GetResult<Prisma.$PropertyCollaboratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyCollaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCollaboratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyCollaborators
     * const propertyCollaborators = await prisma.propertyCollaborator.findMany()
     * 
     * // Get first 10 PropertyCollaborators
     * const propertyCollaborators = await prisma.propertyCollaborator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyCollaboratorWithIdOnly = await prisma.propertyCollaborator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyCollaboratorFindManyArgs>(args?: SelectSubset<T, PropertyCollaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyCollaborator.
     * @param {PropertyCollaboratorCreateArgs} args - Arguments to create a PropertyCollaborator.
     * @example
     * // Create one PropertyCollaborator
     * const PropertyCollaborator = await prisma.propertyCollaborator.create({
     *   data: {
     *     // ... data to create a PropertyCollaborator
     *   }
     * })
     * 
     */
    create<T extends PropertyCollaboratorCreateArgs>(args: SelectSubset<T, PropertyCollaboratorCreateArgs<ExtArgs>>): Prisma__PropertyCollaboratorClient<$Result.GetResult<Prisma.$PropertyCollaboratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyCollaborators.
     * @param {PropertyCollaboratorCreateManyArgs} args - Arguments to create many PropertyCollaborators.
     * @example
     * // Create many PropertyCollaborators
     * const propertyCollaborator = await prisma.propertyCollaborator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCollaboratorCreateManyArgs>(args?: SelectSubset<T, PropertyCollaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropertyCollaborator.
     * @param {PropertyCollaboratorDeleteArgs} args - Arguments to delete one PropertyCollaborator.
     * @example
     * // Delete one PropertyCollaborator
     * const PropertyCollaborator = await prisma.propertyCollaborator.delete({
     *   where: {
     *     // ... filter to delete one PropertyCollaborator
     *   }
     * })
     * 
     */
    delete<T extends PropertyCollaboratorDeleteArgs>(args: SelectSubset<T, PropertyCollaboratorDeleteArgs<ExtArgs>>): Prisma__PropertyCollaboratorClient<$Result.GetResult<Prisma.$PropertyCollaboratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyCollaborator.
     * @param {PropertyCollaboratorUpdateArgs} args - Arguments to update one PropertyCollaborator.
     * @example
     * // Update one PropertyCollaborator
     * const propertyCollaborator = await prisma.propertyCollaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyCollaboratorUpdateArgs>(args: SelectSubset<T, PropertyCollaboratorUpdateArgs<ExtArgs>>): Prisma__PropertyCollaboratorClient<$Result.GetResult<Prisma.$PropertyCollaboratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyCollaborators.
     * @param {PropertyCollaboratorDeleteManyArgs} args - Arguments to filter PropertyCollaborators to delete.
     * @example
     * // Delete a few PropertyCollaborators
     * const { count } = await prisma.propertyCollaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyCollaboratorDeleteManyArgs>(args?: SelectSubset<T, PropertyCollaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCollaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyCollaborators
     * const propertyCollaborator = await prisma.propertyCollaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyCollaboratorUpdateManyArgs>(args: SelectSubset<T, PropertyCollaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyCollaborator.
     * @param {PropertyCollaboratorUpsertArgs} args - Arguments to update or create a PropertyCollaborator.
     * @example
     * // Update or create a PropertyCollaborator
     * const propertyCollaborator = await prisma.propertyCollaborator.upsert({
     *   create: {
     *     // ... data to create a PropertyCollaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyCollaborator we want to update
     *   }
     * })
     */
    upsert<T extends PropertyCollaboratorUpsertArgs>(args: SelectSubset<T, PropertyCollaboratorUpsertArgs<ExtArgs>>): Prisma__PropertyCollaboratorClient<$Result.GetResult<Prisma.$PropertyCollaboratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCollaboratorCountArgs} args - Arguments to filter PropertyCollaborators to count.
     * @example
     * // Count the number of PropertyCollaborators
     * const count = await prisma.propertyCollaborator.count({
     *   where: {
     *     // ... the filter for the PropertyCollaborators we want to count
     *   }
     * })
    **/
    count<T extends PropertyCollaboratorCountArgs>(
      args?: Subset<T, PropertyCollaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCollaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCollaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyCollaboratorAggregateArgs>(args: Subset<T, PropertyCollaboratorAggregateArgs>): Prisma.PrismaPromise<GetPropertyCollaboratorAggregateType<T>>

    /**
     * Group by PropertyCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCollaboratorGroupByArgs} args - Group by arguments.
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
      T extends PropertyCollaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyCollaboratorGroupByArgs['orderBy'] }
        : { orderBy?: PropertyCollaboratorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyCollaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyCollaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyCollaborator model
   */
  readonly fields: PropertyCollaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyCollaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyCollaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PropertyCollaborator model
   */
  interface PropertyCollaboratorFieldRefs {
    readonly id: FieldRef<"PropertyCollaborator", 'String'>
    readonly propertyId: FieldRef<"PropertyCollaborator", 'String'>
    readonly userId: FieldRef<"PropertyCollaborator", 'String'>
    readonly roleOnProperty: FieldRef<"PropertyCollaborator", 'CollaboratorRole'>
    readonly createdAt: FieldRef<"PropertyCollaborator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyCollaborator findUnique
   */
  export type PropertyCollaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCollaborator
     */
    select?: PropertyCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCollaborator
     */
    omit?: PropertyCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCollaborator to fetch.
     */
    where: PropertyCollaboratorWhereUniqueInput
  }

  /**
   * PropertyCollaborator findUniqueOrThrow
   */
  export type PropertyCollaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCollaborator
     */
    select?: PropertyCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCollaborator
     */
    omit?: PropertyCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCollaborator to fetch.
     */
    where: PropertyCollaboratorWhereUniqueInput
  }

  /**
   * PropertyCollaborator findFirst
   */
  export type PropertyCollaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCollaborator
     */
    select?: PropertyCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCollaborator
     */
    omit?: PropertyCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCollaborator to fetch.
     */
    where?: PropertyCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCollaborators to fetch.
     */
    orderBy?: PropertyCollaboratorOrderByWithRelationInput | PropertyCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyCollaborators.
     */
    cursor?: PropertyCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyCollaborators.
     */
    distinct?: PropertyCollaboratorScalarFieldEnum | PropertyCollaboratorScalarFieldEnum[]
  }

  /**
   * PropertyCollaborator findFirstOrThrow
   */
  export type PropertyCollaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCollaborator
     */
    select?: PropertyCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCollaborator
     */
    omit?: PropertyCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCollaborator to fetch.
     */
    where?: PropertyCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCollaborators to fetch.
     */
    orderBy?: PropertyCollaboratorOrderByWithRelationInput | PropertyCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyCollaborators.
     */
    cursor?: PropertyCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyCollaborators.
     */
    distinct?: PropertyCollaboratorScalarFieldEnum | PropertyCollaboratorScalarFieldEnum[]
  }

  /**
   * PropertyCollaborator findMany
   */
  export type PropertyCollaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCollaborator
     */
    select?: PropertyCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCollaborator
     */
    omit?: PropertyCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCollaborators to fetch.
     */
    where?: PropertyCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCollaborators to fetch.
     */
    orderBy?: PropertyCollaboratorOrderByWithRelationInput | PropertyCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyCollaborators.
     */
    cursor?: PropertyCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCollaborators.
     */
    skip?: number
    distinct?: PropertyCollaboratorScalarFieldEnum | PropertyCollaboratorScalarFieldEnum[]
  }

  /**
   * PropertyCollaborator create
   */
  export type PropertyCollaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCollaborator
     */
    select?: PropertyCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCollaborator
     */
    omit?: PropertyCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyCollaborator.
     */
    data: XOR<PropertyCollaboratorCreateInput, PropertyCollaboratorUncheckedCreateInput>
  }

  /**
   * PropertyCollaborator createMany
   */
  export type PropertyCollaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyCollaborators.
     */
    data: PropertyCollaboratorCreateManyInput | PropertyCollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyCollaborator update
   */
  export type PropertyCollaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCollaborator
     */
    select?: PropertyCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCollaborator
     */
    omit?: PropertyCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyCollaborator.
     */
    data: XOR<PropertyCollaboratorUpdateInput, PropertyCollaboratorUncheckedUpdateInput>
    /**
     * Choose, which PropertyCollaborator to update.
     */
    where: PropertyCollaboratorWhereUniqueInput
  }

  /**
   * PropertyCollaborator updateMany
   */
  export type PropertyCollaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyCollaborators.
     */
    data: XOR<PropertyCollaboratorUpdateManyMutationInput, PropertyCollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which PropertyCollaborators to update
     */
    where?: PropertyCollaboratorWhereInput
    /**
     * Limit how many PropertyCollaborators to update.
     */
    limit?: number
  }

  /**
   * PropertyCollaborator upsert
   */
  export type PropertyCollaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCollaborator
     */
    select?: PropertyCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCollaborator
     */
    omit?: PropertyCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCollaboratorInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyCollaborator to update in case it exists.
     */
    where: PropertyCollaboratorWhereUniqueInput
    /**
     * In case the PropertyCollaborator found by the `where` argument doesn't exist, create a new PropertyCollaborator with this data.
     */
    create: XOR<PropertyCollaboratorCreateInput, PropertyCollaboratorUncheckedCreateInput>
    /**
     * In case the PropertyCollaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyCollaboratorUpdateInput, PropertyCollaboratorUncheckedUpdateInput>
  }

  /**
   * PropertyCollaborator delete
   */
  export type PropertyCollaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCollaborator
     */
    select?: PropertyCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCollaborator
     */
    omit?: PropertyCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCollaboratorInclude<ExtArgs> | null
    /**
     * Filter which PropertyCollaborator to delete.
     */
    where: PropertyCollaboratorWhereUniqueInput
  }

  /**
   * PropertyCollaborator deleteMany
   */
  export type PropertyCollaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyCollaborators to delete
     */
    where?: PropertyCollaboratorWhereInput
    /**
     * Limit how many PropertyCollaborators to delete.
     */
    limit?: number
  }

  /**
   * PropertyCollaborator without action
   */
  export type PropertyCollaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCollaborator
     */
    select?: PropertyCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCollaborator
     */
    omit?: PropertyCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCollaboratorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LicenseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    status: 'status',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    currentPeriodEnd: 'currentPeriodEnd',
    cancelAtPeriodEnd: 'cancelAtPeriodEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LicenseScalarFieldEnum = (typeof LicenseScalarFieldEnum)[keyof typeof LicenseScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    address: 'address',
    description: 'description',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    name: 'name',
    capacity: 'capacity',
    description: 'description',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const MonthlyRateScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    year: 'year',
    month: 'month',
    price: 'price',
    cleaningFee: 'cleaningFee'
  };

  export type MonthlyRateScalarFieldEnum = (typeof MonthlyRateScalarFieldEnum)[keyof typeof MonthlyRateScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    roomId: 'roomId',
    clientFirstName: 'clientFirstName',
    clientLastName: 'clientLastName',
    clientPhone: 'clientPhone',
    clientEmail: 'clientEmail',
    guests: 'guests',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    nights: 'nights',
    stayAmount: 'stayAmount',
    cleaningAmount: 'cleaningAmount',
    ownerAmount: 'ownerAmount',
    feeAmount: 'feeAmount',
    totalAmount: 'totalAmount',
    collectedAmount: 'collectedAmount',
    paymentMethodId: 'paymentMethodId',
    bookingSource: 'bookingSource',
    status: 'status',
    notes: 'notes',
    collaboratorId: 'collaboratorId',
    collaboratorPaid: 'collaboratorPaid',
    collaboratorPaidAt: 'collaboratorPaidAt',
    collaboratorPaymentMethodId: 'collaboratorPaymentMethodId',
    quotePdfUrl: 'quotePdfUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const AccontoLogScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    amount: 'amount',
    paymentMethodId: 'paymentMethodId',
    type: 'type',
    savedAt: 'savedAt'
  };

  export type AccontoLogScalarFieldEnum = (typeof AccontoLogScalarFieldEnum)[keyof typeof AccontoLogScalarFieldEnum]


  export const PropertyCollaboratorScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    userId: 'userId',
    roleOnProperty: 'roleOnProperty',
    createdAt: 'createdAt'
  };

  export type PropertyCollaboratorScalarFieldEnum = (typeof PropertyCollaboratorScalarFieldEnum)[keyof typeof PropertyCollaboratorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    email: 'email',
    passwordHash: 'passwordHash',
    ownerId: 'ownerId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const LicenseOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    status: 'status',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId'
  };

  export type LicenseOrderByRelevanceFieldEnum = (typeof LicenseOrderByRelevanceFieldEnum)[keyof typeof LicenseOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const PropertyOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    address: 'address',
    description: 'description'
  };

  export type PropertyOrderByRelevanceFieldEnum = (typeof PropertyOrderByRelevanceFieldEnum)[keyof typeof PropertyOrderByRelevanceFieldEnum]


  export const RoomOrderByRelevanceFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    name: 'name',
    description: 'description'
  };

  export type RoomOrderByRelevanceFieldEnum = (typeof RoomOrderByRelevanceFieldEnum)[keyof typeof RoomOrderByRelevanceFieldEnum]


  export const MonthlyRateOrderByRelevanceFieldEnum: {
    id: 'id',
    roomId: 'roomId'
  };

  export type MonthlyRateOrderByRelevanceFieldEnum = (typeof MonthlyRateOrderByRelevanceFieldEnum)[keyof typeof MonthlyRateOrderByRelevanceFieldEnum]


  export const BookingOrderByRelevanceFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    roomId: 'roomId',
    clientFirstName: 'clientFirstName',
    clientLastName: 'clientLastName',
    clientPhone: 'clientPhone',
    clientEmail: 'clientEmail',
    paymentMethodId: 'paymentMethodId',
    bookingSource: 'bookingSource',
    notes: 'notes',
    collaboratorId: 'collaboratorId',
    collaboratorPaymentMethodId: 'collaboratorPaymentMethodId',
    quotePdfUrl: 'quotePdfUrl'
  };

  export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum]


  export const PaymentMethodOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PaymentMethodOrderByRelevanceFieldEnum = (typeof PaymentMethodOrderByRelevanceFieldEnum)[keyof typeof PaymentMethodOrderByRelevanceFieldEnum]


  export const AccontoLogOrderByRelevanceFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    paymentMethodId: 'paymentMethodId',
    type: 'type'
  };

  export type AccontoLogOrderByRelevanceFieldEnum = (typeof AccontoLogOrderByRelevanceFieldEnum)[keyof typeof AccontoLogOrderByRelevanceFieldEnum]


  export const PropertyCollaboratorOrderByRelevanceFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    userId: 'userId'
  };

  export type PropertyCollaboratorOrderByRelevanceFieldEnum = (typeof PropertyCollaboratorOrderByRelevanceFieldEnum)[keyof typeof PropertyCollaboratorOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'CollaboratorRole'
   */
  export type EnumCollaboratorRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaboratorRole'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nickname?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    ownerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    collaboratorBookings?: BookingListRelationFilter
    propertyLinks?: PropertyCollaboratorListRelationFilter
    license?: XOR<LicenseNullableScalarRelationFilter, LicenseWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collaboratorBookings?: BookingOrderByRelationAggregateInput
    propertyLinks?: PropertyCollaboratorOrderByRelationAggregateInput
    license?: LicenseOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nickname?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    ownerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    collaboratorBookings?: BookingListRelationFilter
    propertyLinks?: PropertyCollaboratorListRelationFilter
    license?: XOR<LicenseNullableScalarRelationFilter, LicenseWhereInput> | null
  }, "id" | "nickname" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    ownerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LicenseWhereInput = {
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    id?: StringFilter<"License"> | string
    userId?: StringFilter<"License"> | string
    type?: StringFilter<"License"> | string
    status?: StringFilter<"License"> | string
    stripeCustomerId?: StringNullableFilter<"License"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"License"> | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"License"> | Date | string | null
    cancelAtPeriodEnd?: BoolFilter<"License"> | boolean
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LicenseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    cancelAtPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: LicenseOrderByRelevanceInput
  }

  export type LicenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    type?: StringFilter<"License"> | string
    status?: StringFilter<"License"> | string
    stripeCustomerId?: StringNullableFilter<"License"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"License"> | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"License"> | Date | string | null
    cancelAtPeriodEnd?: BoolFilter<"License"> | boolean
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type LicenseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    cancelAtPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LicenseCountOrderByAggregateInput
    _max?: LicenseMaxOrderByAggregateInput
    _min?: LicenseMinOrderByAggregateInput
  }

  export type LicenseScalarWhereWithAggregatesInput = {
    AND?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    OR?: LicenseScalarWhereWithAggregatesInput[]
    NOT?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"License"> | string
    userId?: StringWithAggregatesFilter<"License"> | string
    type?: StringWithAggregatesFilter<"License"> | string
    status?: StringWithAggregatesFilter<"License"> | string
    stripeCustomerId?: StringNullableWithAggregatesFilter<"License"> | string | null
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"License"> | string | null
    currentPeriodEnd?: DateTimeNullableWithAggregatesFilter<"License"> | Date | string | null
    cancelAtPeriodEnd?: BoolWithAggregatesFilter<"License"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    location?: StringFilter<"Property"> | string
    address?: StringNullableFilter<"Property"> | string | null
    description?: StringNullableFilter<"Property"> | string | null
    images?: JsonFilter<"Property">
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    rooms?: RoomListRelationFilter
    bookings?: BookingListRelationFilter
    collaborators?: PropertyCollaboratorListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    collaborators?: PropertyCollaboratorOrderByRelationAggregateInput
    _relevance?: PropertyOrderByRelevanceInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    name?: StringFilter<"Property"> | string
    location?: StringFilter<"Property"> | string
    address?: StringNullableFilter<"Property"> | string | null
    description?: StringNullableFilter<"Property"> | string | null
    images?: JsonFilter<"Property">
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    rooms?: RoomListRelationFilter
    bookings?: BookingListRelationFilter
    collaborators?: PropertyCollaboratorListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    name?: StringWithAggregatesFilter<"Property"> | string
    location?: StringWithAggregatesFilter<"Property"> | string
    address?: StringNullableWithAggregatesFilter<"Property"> | string | null
    description?: StringNullableWithAggregatesFilter<"Property"> | string | null
    images?: JsonWithAggregatesFilter<"Property">
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    propertyId?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    description?: StringNullableFilter<"Room"> | string | null
    images?: JsonFilter<"Room">
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    monthlyRates?: MonthlyRateListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    description?: SortOrderInput | SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    monthlyRates?: MonthlyRateOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    _relevance?: RoomOrderByRelevanceInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    propertyId?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    description?: StringNullableFilter<"Room"> | string | null
    images?: JsonFilter<"Room">
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    monthlyRates?: MonthlyRateListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    description?: SortOrderInput | SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    propertyId?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    capacity?: IntWithAggregatesFilter<"Room"> | number
    description?: StringNullableWithAggregatesFilter<"Room"> | string | null
    images?: JsonWithAggregatesFilter<"Room">
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type MonthlyRateWhereInput = {
    AND?: MonthlyRateWhereInput | MonthlyRateWhereInput[]
    OR?: MonthlyRateWhereInput[]
    NOT?: MonthlyRateWhereInput | MonthlyRateWhereInput[]
    id?: StringFilter<"MonthlyRate"> | string
    roomId?: StringFilter<"MonthlyRate"> | string
    year?: IntFilter<"MonthlyRate"> | number
    month?: IntFilter<"MonthlyRate"> | number
    price?: FloatFilter<"MonthlyRate"> | number
    cleaningFee?: FloatFilter<"MonthlyRate"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type MonthlyRateOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    price?: SortOrder
    cleaningFee?: SortOrder
    room?: RoomOrderByWithRelationInput
    _relevance?: MonthlyRateOrderByRelevanceInput
  }

  export type MonthlyRateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomId_year_month?: MonthlyRateRoomIdYearMonthCompoundUniqueInput
    AND?: MonthlyRateWhereInput | MonthlyRateWhereInput[]
    OR?: MonthlyRateWhereInput[]
    NOT?: MonthlyRateWhereInput | MonthlyRateWhereInput[]
    roomId?: StringFilter<"MonthlyRate"> | string
    year?: IntFilter<"MonthlyRate"> | number
    month?: IntFilter<"MonthlyRate"> | number
    price?: FloatFilter<"MonthlyRate"> | number
    cleaningFee?: FloatFilter<"MonthlyRate"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id" | "roomId_year_month">

  export type MonthlyRateOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    price?: SortOrder
    cleaningFee?: SortOrder
    _count?: MonthlyRateCountOrderByAggregateInput
    _avg?: MonthlyRateAvgOrderByAggregateInput
    _max?: MonthlyRateMaxOrderByAggregateInput
    _min?: MonthlyRateMinOrderByAggregateInput
    _sum?: MonthlyRateSumOrderByAggregateInput
  }

  export type MonthlyRateScalarWhereWithAggregatesInput = {
    AND?: MonthlyRateScalarWhereWithAggregatesInput | MonthlyRateScalarWhereWithAggregatesInput[]
    OR?: MonthlyRateScalarWhereWithAggregatesInput[]
    NOT?: MonthlyRateScalarWhereWithAggregatesInput | MonthlyRateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthlyRate"> | string
    roomId?: StringWithAggregatesFilter<"MonthlyRate"> | string
    year?: IntWithAggregatesFilter<"MonthlyRate"> | number
    month?: IntWithAggregatesFilter<"MonthlyRate"> | number
    price?: FloatWithAggregatesFilter<"MonthlyRate"> | number
    cleaningFee?: FloatWithAggregatesFilter<"MonthlyRate"> | number
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    propertyId?: StringFilter<"Booking"> | string
    roomId?: StringFilter<"Booking"> | string
    clientFirstName?: StringFilter<"Booking"> | string
    clientLastName?: StringNullableFilter<"Booking"> | string | null
    clientPhone?: StringNullableFilter<"Booking"> | string | null
    clientEmail?: StringNullableFilter<"Booking"> | string | null
    guests?: IntFilter<"Booking"> | number
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    nights?: IntFilter<"Booking"> | number
    stayAmount?: FloatFilter<"Booking"> | number
    cleaningAmount?: FloatFilter<"Booking"> | number
    ownerAmount?: FloatFilter<"Booking"> | number
    feeAmount?: FloatFilter<"Booking"> | number
    totalAmount?: FloatFilter<"Booking"> | number
    collectedAmount?: FloatFilter<"Booking"> | number
    paymentMethodId?: StringNullableFilter<"Booking"> | string | null
    bookingSource?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"Booking"> | string | null
    collaboratorId?: StringNullableFilter<"Booking"> | string | null
    collaboratorPaid?: BoolFilter<"Booking"> | boolean
    collaboratorPaidAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    collaboratorPaymentMethodId?: StringNullableFilter<"Booking"> | string | null
    quotePdfUrl?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    paymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
    collaboratorPaymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
    collaborator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    accontiLogs?: AccontoLogListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    clientFirstName?: SortOrder
    clientLastName?: SortOrderInput | SortOrder
    clientPhone?: SortOrderInput | SortOrder
    clientEmail?: SortOrderInput | SortOrder
    guests?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    nights?: SortOrder
    stayAmount?: SortOrder
    cleaningAmount?: SortOrder
    ownerAmount?: SortOrder
    feeAmount?: SortOrder
    totalAmount?: SortOrder
    collectedAmount?: SortOrder
    paymentMethodId?: SortOrderInput | SortOrder
    bookingSource?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    collaboratorId?: SortOrderInput | SortOrder
    collaboratorPaid?: SortOrder
    collaboratorPaidAt?: SortOrderInput | SortOrder
    collaboratorPaymentMethodId?: SortOrderInput | SortOrder
    quotePdfUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    paymentMethod?: PaymentMethodOrderByWithRelationInput
    collaboratorPaymentMethod?: PaymentMethodOrderByWithRelationInput
    collaborator?: UserOrderByWithRelationInput
    accontiLogs?: AccontoLogOrderByRelationAggregateInput
    _relevance?: BookingOrderByRelevanceInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    propertyId?: StringFilter<"Booking"> | string
    roomId?: StringFilter<"Booking"> | string
    clientFirstName?: StringFilter<"Booking"> | string
    clientLastName?: StringNullableFilter<"Booking"> | string | null
    clientPhone?: StringNullableFilter<"Booking"> | string | null
    clientEmail?: StringNullableFilter<"Booking"> | string | null
    guests?: IntFilter<"Booking"> | number
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    nights?: IntFilter<"Booking"> | number
    stayAmount?: FloatFilter<"Booking"> | number
    cleaningAmount?: FloatFilter<"Booking"> | number
    ownerAmount?: FloatFilter<"Booking"> | number
    feeAmount?: FloatFilter<"Booking"> | number
    totalAmount?: FloatFilter<"Booking"> | number
    collectedAmount?: FloatFilter<"Booking"> | number
    paymentMethodId?: StringNullableFilter<"Booking"> | string | null
    bookingSource?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"Booking"> | string | null
    collaboratorId?: StringNullableFilter<"Booking"> | string | null
    collaboratorPaid?: BoolFilter<"Booking"> | boolean
    collaboratorPaidAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    collaboratorPaymentMethodId?: StringNullableFilter<"Booking"> | string | null
    quotePdfUrl?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    paymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
    collaboratorPaymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
    collaborator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    accontiLogs?: AccontoLogListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    clientFirstName?: SortOrder
    clientLastName?: SortOrderInput | SortOrder
    clientPhone?: SortOrderInput | SortOrder
    clientEmail?: SortOrderInput | SortOrder
    guests?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    nights?: SortOrder
    stayAmount?: SortOrder
    cleaningAmount?: SortOrder
    ownerAmount?: SortOrder
    feeAmount?: SortOrder
    totalAmount?: SortOrder
    collectedAmount?: SortOrder
    paymentMethodId?: SortOrderInput | SortOrder
    bookingSource?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    collaboratorId?: SortOrderInput | SortOrder
    collaboratorPaid?: SortOrder
    collaboratorPaidAt?: SortOrderInput | SortOrder
    collaboratorPaymentMethodId?: SortOrderInput | SortOrder
    quotePdfUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    propertyId?: StringWithAggregatesFilter<"Booking"> | string
    roomId?: StringWithAggregatesFilter<"Booking"> | string
    clientFirstName?: StringWithAggregatesFilter<"Booking"> | string
    clientLastName?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    clientPhone?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    clientEmail?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    guests?: IntWithAggregatesFilter<"Booking"> | number
    checkIn?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    nights?: IntWithAggregatesFilter<"Booking"> | number
    stayAmount?: FloatWithAggregatesFilter<"Booking"> | number
    cleaningAmount?: FloatWithAggregatesFilter<"Booking"> | number
    ownerAmount?: FloatWithAggregatesFilter<"Booking"> | number
    feeAmount?: FloatWithAggregatesFilter<"Booking"> | number
    totalAmount?: FloatWithAggregatesFilter<"Booking"> | number
    collectedAmount?: FloatWithAggregatesFilter<"Booking"> | number
    paymentMethodId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    bookingSource?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    collaboratorId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    collaboratorPaid?: BoolWithAggregatesFilter<"Booking"> | boolean
    collaboratorPaidAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    collaboratorPaymentMethodId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    quotePdfUrl?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    id?: StringFilter<"PaymentMethod"> | string
    name?: StringFilter<"PaymentMethod"> | string
    active?: BoolFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    bookings?: BookingListRelationFilter
    collaboratorBookings?: BookingListRelationFilter
    accontiLogs?: AccontoLogListRelationFilter
  }

  export type PaymentMethodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    collaboratorBookings?: BookingOrderByRelationAggregateInput
    accontiLogs?: AccontoLogOrderByRelationAggregateInput
    _relevance?: PaymentMethodOrderByRelevanceInput
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    active?: BoolFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    bookings?: BookingListRelationFilter
    collaboratorBookings?: BookingListRelationFilter
    accontiLogs?: AccontoLogListRelationFilter
  }, "id" | "name">

  export type PaymentMethodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentMethod"> | string
    name?: StringWithAggregatesFilter<"PaymentMethod"> | string
    active?: BoolWithAggregatesFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
  }

  export type AccontoLogWhereInput = {
    AND?: AccontoLogWhereInput | AccontoLogWhereInput[]
    OR?: AccontoLogWhereInput[]
    NOT?: AccontoLogWhereInput | AccontoLogWhereInput[]
    id?: StringFilter<"AccontoLog"> | string
    bookingId?: StringFilter<"AccontoLog"> | string
    amount?: FloatFilter<"AccontoLog"> | number
    paymentMethodId?: StringNullableFilter<"AccontoLog"> | string | null
    type?: StringFilter<"AccontoLog"> | string
    savedAt?: DateTimeFilter<"AccontoLog"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    paymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
  }

  export type AccontoLogOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    paymentMethodId?: SortOrderInput | SortOrder
    type?: SortOrder
    savedAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
    paymentMethod?: PaymentMethodOrderByWithRelationInput
    _relevance?: AccontoLogOrderByRelevanceInput
  }

  export type AccontoLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccontoLogWhereInput | AccontoLogWhereInput[]
    OR?: AccontoLogWhereInput[]
    NOT?: AccontoLogWhereInput | AccontoLogWhereInput[]
    bookingId?: StringFilter<"AccontoLog"> | string
    amount?: FloatFilter<"AccontoLog"> | number
    paymentMethodId?: StringNullableFilter<"AccontoLog"> | string | null
    type?: StringFilter<"AccontoLog"> | string
    savedAt?: DateTimeFilter<"AccontoLog"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    paymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
  }, "id">

  export type AccontoLogOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    paymentMethodId?: SortOrderInput | SortOrder
    type?: SortOrder
    savedAt?: SortOrder
    _count?: AccontoLogCountOrderByAggregateInput
    _avg?: AccontoLogAvgOrderByAggregateInput
    _max?: AccontoLogMaxOrderByAggregateInput
    _min?: AccontoLogMinOrderByAggregateInput
    _sum?: AccontoLogSumOrderByAggregateInput
  }

  export type AccontoLogScalarWhereWithAggregatesInput = {
    AND?: AccontoLogScalarWhereWithAggregatesInput | AccontoLogScalarWhereWithAggregatesInput[]
    OR?: AccontoLogScalarWhereWithAggregatesInput[]
    NOT?: AccontoLogScalarWhereWithAggregatesInput | AccontoLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccontoLog"> | string
    bookingId?: StringWithAggregatesFilter<"AccontoLog"> | string
    amount?: FloatWithAggregatesFilter<"AccontoLog"> | number
    paymentMethodId?: StringNullableWithAggregatesFilter<"AccontoLog"> | string | null
    type?: StringWithAggregatesFilter<"AccontoLog"> | string
    savedAt?: DateTimeWithAggregatesFilter<"AccontoLog"> | Date | string
  }

  export type PropertyCollaboratorWhereInput = {
    AND?: PropertyCollaboratorWhereInput | PropertyCollaboratorWhereInput[]
    OR?: PropertyCollaboratorWhereInput[]
    NOT?: PropertyCollaboratorWhereInput | PropertyCollaboratorWhereInput[]
    id?: StringFilter<"PropertyCollaborator"> | string
    propertyId?: StringFilter<"PropertyCollaborator"> | string
    userId?: StringFilter<"PropertyCollaborator"> | string
    roleOnProperty?: EnumCollaboratorRoleFilter<"PropertyCollaborator"> | $Enums.CollaboratorRole
    createdAt?: DateTimeFilter<"PropertyCollaborator"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PropertyCollaboratorOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    roleOnProperty?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: PropertyCollaboratorOrderByRelevanceInput
  }

  export type PropertyCollaboratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    propertyId_userId?: PropertyCollaboratorPropertyIdUserIdCompoundUniqueInput
    AND?: PropertyCollaboratorWhereInput | PropertyCollaboratorWhereInput[]
    OR?: PropertyCollaboratorWhereInput[]
    NOT?: PropertyCollaboratorWhereInput | PropertyCollaboratorWhereInput[]
    propertyId?: StringFilter<"PropertyCollaborator"> | string
    userId?: StringFilter<"PropertyCollaborator"> | string
    roleOnProperty?: EnumCollaboratorRoleFilter<"PropertyCollaborator"> | $Enums.CollaboratorRole
    createdAt?: DateTimeFilter<"PropertyCollaborator"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "propertyId_userId">

  export type PropertyCollaboratorOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    roleOnProperty?: SortOrder
    createdAt?: SortOrder
    _count?: PropertyCollaboratorCountOrderByAggregateInput
    _max?: PropertyCollaboratorMaxOrderByAggregateInput
    _min?: PropertyCollaboratorMinOrderByAggregateInput
  }

  export type PropertyCollaboratorScalarWhereWithAggregatesInput = {
    AND?: PropertyCollaboratorScalarWhereWithAggregatesInput | PropertyCollaboratorScalarWhereWithAggregatesInput[]
    OR?: PropertyCollaboratorScalarWhereWithAggregatesInput[]
    NOT?: PropertyCollaboratorScalarWhereWithAggregatesInput | PropertyCollaboratorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropertyCollaborator"> | string
    propertyId?: StringWithAggregatesFilter<"PropertyCollaborator"> | string
    userId?: StringWithAggregatesFilter<"PropertyCollaborator"> | string
    roleOnProperty?: EnumCollaboratorRoleWithAggregatesFilter<"PropertyCollaborator"> | $Enums.CollaboratorRole
    createdAt?: DateTimeWithAggregatesFilter<"PropertyCollaborator"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    nickname: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaboratorBookings?: BookingCreateNestedManyWithoutCollaboratorInput
    propertyLinks?: PropertyCollaboratorCreateNestedManyWithoutUserInput
    license?: LicenseCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nickname: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaboratorBookings?: BookingUncheckedCreateNestedManyWithoutCollaboratorInput
    propertyLinks?: PropertyCollaboratorUncheckedCreateNestedManyWithoutUserInput
    license?: LicenseUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaboratorBookings?: BookingUpdateManyWithoutCollaboratorNestedInput
    propertyLinks?: PropertyCollaboratorUpdateManyWithoutUserNestedInput
    license?: LicenseUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaboratorBookings?: BookingUncheckedUpdateManyWithoutCollaboratorNestedInput
    propertyLinks?: PropertyCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    license?: LicenseUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nickname: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateInput = {
    id?: string
    type: string
    status?: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLicenseInput
  }

  export type LicenseUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    status?: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateManyInput = {
    id?: string
    userId: string
    type: string
    status?: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    name: string
    location: string
    address?: string | null
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
    collaborators?: PropertyCollaboratorCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    address?: string | null
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
    collaborators?: PropertyCollaboratorUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
    collaborators?: PropertyCollaboratorUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
    collaborators?: PropertyCollaboratorUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    name: string
    location: string
    address?: string | null
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    capacity?: number
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutRoomsInput
    monthlyRates?: MonthlyRateCreateNestedManyWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    propertyId: string
    name: string
    capacity?: number
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyRates?: MonthlyRateUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
    monthlyRates?: MonthlyRateUpdateManyWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRates?: MonthlyRateUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    propertyId: string
    name: string
    capacity?: number
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyRateCreateInput = {
    id?: string
    year: number
    month: number
    price: number
    cleaningFee?: number
    room: RoomCreateNestedOneWithoutMonthlyRatesInput
  }

  export type MonthlyRateUncheckedCreateInput = {
    id?: string
    roomId: string
    year: number
    month: number
    price: number
    cleaningFee?: number
  }

  export type MonthlyRateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cleaningFee?: FloatFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutMonthlyRatesNestedInput
  }

  export type MonthlyRateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cleaningFee?: FloatFieldUpdateOperationsInput | number
  }

  export type MonthlyRateCreateManyInput = {
    id?: string
    roomId: string
    year: number
    month: number
    price: number
    cleaningFee?: number
  }

  export type MonthlyRateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cleaningFee?: FloatFieldUpdateOperationsInput | number
  }

  export type MonthlyRateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cleaningFee?: FloatFieldUpdateOperationsInput | number
  }

  export type BookingCreateInput = {
    id?: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutBookingsInput
    collaboratorPaymentMethod?: PaymentMethodCreateNestedOneWithoutCollaboratorBookingsInput
    collaborator?: UserCreateNestedOneWithoutCollaboratorBookingsInput
    accontiLogs?: AccontoLogCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    propertyId: string
    roomId: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    paymentMethodId?: string | null
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorId?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    collaboratorPaymentMethodId?: string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accontiLogs?: AccontoLogUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutBookingsNestedInput
    collaboratorPaymentMethod?: PaymentMethodUpdateOneWithoutCollaboratorBookingsNestedInput
    collaborator?: UserUpdateOneWithoutCollaboratorBookingsNestedInput
    accontiLogs?: AccontoLogUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorId?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaboratorPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accontiLogs?: AccontoLogUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    propertyId: string
    roomId: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    paymentMethodId?: string | null
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorId?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    collaboratorPaymentMethodId?: string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorId?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaboratorPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutPaymentMethodInput
    collaboratorBookings?: BookingCreateNestedManyWithoutCollaboratorPaymentMethodInput
    accontiLogs?: AccontoLogCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutPaymentMethodInput
    collaboratorBookings?: BookingUncheckedCreateNestedManyWithoutCollaboratorPaymentMethodInput
    accontiLogs?: AccontoLogUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutPaymentMethodNestedInput
    collaboratorBookings?: BookingUpdateManyWithoutCollaboratorPaymentMethodNestedInput
    accontiLogs?: AccontoLogUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutPaymentMethodNestedInput
    collaboratorBookings?: BookingUncheckedUpdateManyWithoutCollaboratorPaymentMethodNestedInput
    accontiLogs?: AccontoLogUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodCreateManyInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccontoLogCreateInput = {
    id?: string
    amount: number
    type?: string
    savedAt?: Date | string
    booking: BookingCreateNestedOneWithoutAccontiLogsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutAccontiLogsInput
  }

  export type AccontoLogUncheckedCreateInput = {
    id?: string
    bookingId: string
    amount: number
    paymentMethodId?: string | null
    type?: string
    savedAt?: Date | string
  }

  export type AccontoLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutAccontiLogsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutAccontiLogsNestedInput
  }

  export type AccontoLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccontoLogCreateManyInput = {
    id?: string
    bookingId: string
    amount: number
    paymentMethodId?: string | null
    type?: string
    savedAt?: Date | string
  }

  export type AccontoLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccontoLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCollaboratorCreateInput = {
    id?: string
    roleOnProperty?: $Enums.CollaboratorRole
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutCollaboratorsInput
    user: UserCreateNestedOneWithoutPropertyLinksInput
  }

  export type PropertyCollaboratorUncheckedCreateInput = {
    id?: string
    propertyId: string
    userId: string
    roleOnProperty?: $Enums.CollaboratorRole
    createdAt?: Date | string
  }

  export type PropertyCollaboratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleOnProperty?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutCollaboratorsNestedInput
    user?: UserUpdateOneRequiredWithoutPropertyLinksNestedInput
  }

  export type PropertyCollaboratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleOnProperty?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCollaboratorCreateManyInput = {
    id?: string
    propertyId: string
    userId: string
    roleOnProperty?: $Enums.CollaboratorRole
    createdAt?: Date | string
  }

  export type PropertyCollaboratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleOnProperty?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCollaboratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleOnProperty?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type PropertyCollaboratorListRelationFilter = {
    every?: PropertyCollaboratorWhereInput
    some?: PropertyCollaboratorWhereInput
    none?: PropertyCollaboratorWhereInput
  }

  export type LicenseNullableScalarRelationFilter = {
    is?: LicenseWhereInput | null
    isNot?: LicenseWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCollaboratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    search?: string
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LicenseOrderByRelevanceInput = {
    fields: LicenseOrderByRelevanceFieldEnum | LicenseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LicenseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOrderByRelevanceInput = {
    fields: PropertyOrderByRelevanceFieldEnum | PropertyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    address?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    address?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    address?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type MonthlyRateListRelationFilter = {
    every?: MonthlyRateWhereInput
    some?: MonthlyRateWhereInput
    none?: MonthlyRateWhereInput
  }

  export type MonthlyRateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelevanceInput = {
    fields: RoomOrderByRelevanceFieldEnum | RoomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    capacity?: SortOrder
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

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type MonthlyRateOrderByRelevanceInput = {
    fields: MonthlyRateOrderByRelevanceFieldEnum | MonthlyRateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MonthlyRateRoomIdYearMonthCompoundUniqueInput = {
    roomId: string
    year: number
    month: number
  }

  export type MonthlyRateCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    price?: SortOrder
    cleaningFee?: SortOrder
  }

  export type MonthlyRateAvgOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    price?: SortOrder
    cleaningFee?: SortOrder
  }

  export type MonthlyRateMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    price?: SortOrder
    cleaningFee?: SortOrder
  }

  export type MonthlyRateMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    price?: SortOrder
    cleaningFee?: SortOrder
  }

  export type MonthlyRateSumOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    price?: SortOrder
    cleaningFee?: SortOrder
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

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type PaymentMethodNullableScalarRelationFilter = {
    is?: PaymentMethodWhereInput | null
    isNot?: PaymentMethodWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AccontoLogListRelationFilter = {
    every?: AccontoLogWhereInput
    some?: AccontoLogWhereInput
    none?: AccontoLogWhereInput
  }

  export type AccontoLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelevanceInput = {
    fields: BookingOrderByRelevanceFieldEnum | BookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    clientFirstName?: SortOrder
    clientLastName?: SortOrder
    clientPhone?: SortOrder
    clientEmail?: SortOrder
    guests?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    nights?: SortOrder
    stayAmount?: SortOrder
    cleaningAmount?: SortOrder
    ownerAmount?: SortOrder
    feeAmount?: SortOrder
    totalAmount?: SortOrder
    collectedAmount?: SortOrder
    paymentMethodId?: SortOrder
    bookingSource?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    collaboratorId?: SortOrder
    collaboratorPaid?: SortOrder
    collaboratorPaidAt?: SortOrder
    collaboratorPaymentMethodId?: SortOrder
    quotePdfUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    guests?: SortOrder
    nights?: SortOrder
    stayAmount?: SortOrder
    cleaningAmount?: SortOrder
    ownerAmount?: SortOrder
    feeAmount?: SortOrder
    totalAmount?: SortOrder
    collectedAmount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    clientFirstName?: SortOrder
    clientLastName?: SortOrder
    clientPhone?: SortOrder
    clientEmail?: SortOrder
    guests?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    nights?: SortOrder
    stayAmount?: SortOrder
    cleaningAmount?: SortOrder
    ownerAmount?: SortOrder
    feeAmount?: SortOrder
    totalAmount?: SortOrder
    collectedAmount?: SortOrder
    paymentMethodId?: SortOrder
    bookingSource?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    collaboratorId?: SortOrder
    collaboratorPaid?: SortOrder
    collaboratorPaidAt?: SortOrder
    collaboratorPaymentMethodId?: SortOrder
    quotePdfUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    clientFirstName?: SortOrder
    clientLastName?: SortOrder
    clientPhone?: SortOrder
    clientEmail?: SortOrder
    guests?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    nights?: SortOrder
    stayAmount?: SortOrder
    cleaningAmount?: SortOrder
    ownerAmount?: SortOrder
    feeAmount?: SortOrder
    totalAmount?: SortOrder
    collectedAmount?: SortOrder
    paymentMethodId?: SortOrder
    bookingSource?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    collaboratorId?: SortOrder
    collaboratorPaid?: SortOrder
    collaboratorPaidAt?: SortOrder
    collaboratorPaymentMethodId?: SortOrder
    quotePdfUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    guests?: SortOrder
    nights?: SortOrder
    stayAmount?: SortOrder
    cleaningAmount?: SortOrder
    ownerAmount?: SortOrder
    feeAmount?: SortOrder
    totalAmount?: SortOrder
    collectedAmount?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type PaymentMethodOrderByRelevanceInput = {
    fields: PaymentMethodOrderByRelevanceFieldEnum | PaymentMethodOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type AccontoLogOrderByRelevanceInput = {
    fields: AccontoLogOrderByRelevanceFieldEnum | AccontoLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccontoLogCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    paymentMethodId?: SortOrder
    type?: SortOrder
    savedAt?: SortOrder
  }

  export type AccontoLogAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AccontoLogMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    paymentMethodId?: SortOrder
    type?: SortOrder
    savedAt?: SortOrder
  }

  export type AccontoLogMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    paymentMethodId?: SortOrder
    type?: SortOrder
    savedAt?: SortOrder
  }

  export type AccontoLogSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumCollaboratorRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorRole | EnumCollaboratorRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorRole[]
    notIn?: $Enums.CollaboratorRole[]
    not?: NestedEnumCollaboratorRoleFilter<$PrismaModel> | $Enums.CollaboratorRole
  }

  export type PropertyCollaboratorOrderByRelevanceInput = {
    fields: PropertyCollaboratorOrderByRelevanceFieldEnum | PropertyCollaboratorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PropertyCollaboratorPropertyIdUserIdCompoundUniqueInput = {
    propertyId: string
    userId: string
  }

  export type PropertyCollaboratorCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    roleOnProperty?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyCollaboratorMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    roleOnProperty?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyCollaboratorMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    roleOnProperty?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCollaboratorRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorRole | EnumCollaboratorRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorRole[]
    notIn?: $Enums.CollaboratorRole[]
    not?: NestedEnumCollaboratorRoleWithAggregatesFilter<$PrismaModel> | $Enums.CollaboratorRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaboratorRoleFilter<$PrismaModel>
    _max?: NestedEnumCollaboratorRoleFilter<$PrismaModel>
  }

  export type BookingCreateNestedManyWithoutCollaboratorInput = {
    create?: XOR<BookingCreateWithoutCollaboratorInput, BookingUncheckedCreateWithoutCollaboratorInput> | BookingCreateWithoutCollaboratorInput[] | BookingUncheckedCreateWithoutCollaboratorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCollaboratorInput | BookingCreateOrConnectWithoutCollaboratorInput[]
    createMany?: BookingCreateManyCollaboratorInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PropertyCollaboratorCreateNestedManyWithoutUserInput = {
    create?: XOR<PropertyCollaboratorCreateWithoutUserInput, PropertyCollaboratorUncheckedCreateWithoutUserInput> | PropertyCollaboratorCreateWithoutUserInput[] | PropertyCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropertyCollaboratorCreateOrConnectWithoutUserInput | PropertyCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: PropertyCollaboratorCreateManyUserInputEnvelope
    connect?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
  }

  export type LicenseCreateNestedOneWithoutUserInput = {
    create?: XOR<LicenseCreateWithoutUserInput, LicenseUncheckedCreateWithoutUserInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutUserInput
    connect?: LicenseWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutCollaboratorInput = {
    create?: XOR<BookingCreateWithoutCollaboratorInput, BookingUncheckedCreateWithoutCollaboratorInput> | BookingCreateWithoutCollaboratorInput[] | BookingUncheckedCreateWithoutCollaboratorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCollaboratorInput | BookingCreateOrConnectWithoutCollaboratorInput[]
    createMany?: BookingCreateManyCollaboratorInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PropertyCollaboratorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PropertyCollaboratorCreateWithoutUserInput, PropertyCollaboratorUncheckedCreateWithoutUserInput> | PropertyCollaboratorCreateWithoutUserInput[] | PropertyCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropertyCollaboratorCreateOrConnectWithoutUserInput | PropertyCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: PropertyCollaboratorCreateManyUserInputEnvelope
    connect?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
  }

  export type LicenseUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LicenseCreateWithoutUserInput, LicenseUncheckedCreateWithoutUserInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutUserInput
    connect?: LicenseWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutCollaboratorNestedInput = {
    create?: XOR<BookingCreateWithoutCollaboratorInput, BookingUncheckedCreateWithoutCollaboratorInput> | BookingCreateWithoutCollaboratorInput[] | BookingUncheckedCreateWithoutCollaboratorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCollaboratorInput | BookingCreateOrConnectWithoutCollaboratorInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCollaboratorInput | BookingUpsertWithWhereUniqueWithoutCollaboratorInput[]
    createMany?: BookingCreateManyCollaboratorInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCollaboratorInput | BookingUpdateWithWhereUniqueWithoutCollaboratorInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCollaboratorInput | BookingUpdateManyWithWhereWithoutCollaboratorInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PropertyCollaboratorUpdateManyWithoutUserNestedInput = {
    create?: XOR<PropertyCollaboratorCreateWithoutUserInput, PropertyCollaboratorUncheckedCreateWithoutUserInput> | PropertyCollaboratorCreateWithoutUserInput[] | PropertyCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropertyCollaboratorCreateOrConnectWithoutUserInput | PropertyCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: PropertyCollaboratorUpsertWithWhereUniqueWithoutUserInput | PropertyCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PropertyCollaboratorCreateManyUserInputEnvelope
    set?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    disconnect?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    delete?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    connect?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    update?: PropertyCollaboratorUpdateWithWhereUniqueWithoutUserInput | PropertyCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PropertyCollaboratorUpdateManyWithWhereWithoutUserInput | PropertyCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PropertyCollaboratorScalarWhereInput | PropertyCollaboratorScalarWhereInput[]
  }

  export type LicenseUpdateOneWithoutUserNestedInput = {
    create?: XOR<LicenseCreateWithoutUserInput, LicenseUncheckedCreateWithoutUserInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutUserInput
    upsert?: LicenseUpsertWithoutUserInput
    disconnect?: LicenseWhereInput | boolean
    delete?: LicenseWhereInput | boolean
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutUserInput, LicenseUpdateWithoutUserInput>, LicenseUncheckedUpdateWithoutUserInput>
  }

  export type BookingUncheckedUpdateManyWithoutCollaboratorNestedInput = {
    create?: XOR<BookingCreateWithoutCollaboratorInput, BookingUncheckedCreateWithoutCollaboratorInput> | BookingCreateWithoutCollaboratorInput[] | BookingUncheckedCreateWithoutCollaboratorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCollaboratorInput | BookingCreateOrConnectWithoutCollaboratorInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCollaboratorInput | BookingUpsertWithWhereUniqueWithoutCollaboratorInput[]
    createMany?: BookingCreateManyCollaboratorInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCollaboratorInput | BookingUpdateWithWhereUniqueWithoutCollaboratorInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCollaboratorInput | BookingUpdateManyWithWhereWithoutCollaboratorInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PropertyCollaboratorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PropertyCollaboratorCreateWithoutUserInput, PropertyCollaboratorUncheckedCreateWithoutUserInput> | PropertyCollaboratorCreateWithoutUserInput[] | PropertyCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropertyCollaboratorCreateOrConnectWithoutUserInput | PropertyCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: PropertyCollaboratorUpsertWithWhereUniqueWithoutUserInput | PropertyCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PropertyCollaboratorCreateManyUserInputEnvelope
    set?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    disconnect?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    delete?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    connect?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    update?: PropertyCollaboratorUpdateWithWhereUniqueWithoutUserInput | PropertyCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PropertyCollaboratorUpdateManyWithWhereWithoutUserInput | PropertyCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PropertyCollaboratorScalarWhereInput | PropertyCollaboratorScalarWhereInput[]
  }

  export type LicenseUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LicenseCreateWithoutUserInput, LicenseUncheckedCreateWithoutUserInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutUserInput
    upsert?: LicenseUpsertWithoutUserInput
    disconnect?: LicenseWhereInput | boolean
    delete?: LicenseWhereInput | boolean
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutUserInput, LicenseUpdateWithoutUserInput>, LicenseUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutLicenseInput = {
    create?: XOR<UserCreateWithoutLicenseInput, UserUncheckedCreateWithoutLicenseInput>
    connectOrCreate?: UserCreateOrConnectWithoutLicenseInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutLicenseNestedInput = {
    create?: XOR<UserCreateWithoutLicenseInput, UserUncheckedCreateWithoutLicenseInput>
    connectOrCreate?: UserCreateOrConnectWithoutLicenseInput
    upsert?: UserUpsertWithoutLicenseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLicenseInput, UserUpdateWithoutLicenseInput>, UserUncheckedUpdateWithoutLicenseInput>
  }

  export type RoomCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutPropertyInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput> | BookingCreateWithoutPropertyInput[] | BookingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput | BookingCreateOrConnectWithoutPropertyInput[]
    createMany?: BookingCreateManyPropertyInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PropertyCollaboratorCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyCollaboratorCreateWithoutPropertyInput, PropertyCollaboratorUncheckedCreateWithoutPropertyInput> | PropertyCollaboratorCreateWithoutPropertyInput[] | PropertyCollaboratorUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyCollaboratorCreateOrConnectWithoutPropertyInput | PropertyCollaboratorCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyCollaboratorCreateManyPropertyInputEnvelope
    connect?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput> | BookingCreateWithoutPropertyInput[] | BookingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput | BookingCreateOrConnectWithoutPropertyInput[]
    createMany?: BookingCreateManyPropertyInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PropertyCollaboratorUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyCollaboratorCreateWithoutPropertyInput, PropertyCollaboratorUncheckedCreateWithoutPropertyInput> | PropertyCollaboratorCreateWithoutPropertyInput[] | PropertyCollaboratorUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyCollaboratorCreateOrConnectWithoutPropertyInput | PropertyCollaboratorCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyCollaboratorCreateManyPropertyInputEnvelope
    connect?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
  }

  export type RoomUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPropertyInput | RoomUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPropertyInput | RoomUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPropertyInput | RoomUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput> | BookingCreateWithoutPropertyInput[] | BookingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput | BookingCreateOrConnectWithoutPropertyInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPropertyInput | BookingUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: BookingCreateManyPropertyInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPropertyInput | BookingUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPropertyInput | BookingUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PropertyCollaboratorUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyCollaboratorCreateWithoutPropertyInput, PropertyCollaboratorUncheckedCreateWithoutPropertyInput> | PropertyCollaboratorCreateWithoutPropertyInput[] | PropertyCollaboratorUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyCollaboratorCreateOrConnectWithoutPropertyInput | PropertyCollaboratorCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyCollaboratorUpsertWithWhereUniqueWithoutPropertyInput | PropertyCollaboratorUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyCollaboratorCreateManyPropertyInputEnvelope
    set?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    disconnect?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    delete?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    connect?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    update?: PropertyCollaboratorUpdateWithWhereUniqueWithoutPropertyInput | PropertyCollaboratorUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyCollaboratorUpdateManyWithWhereWithoutPropertyInput | PropertyCollaboratorUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyCollaboratorScalarWhereInput | PropertyCollaboratorScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPropertyInput | RoomUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPropertyInput | RoomUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPropertyInput | RoomUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput> | BookingCreateWithoutPropertyInput[] | BookingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput | BookingCreateOrConnectWithoutPropertyInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPropertyInput | BookingUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: BookingCreateManyPropertyInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPropertyInput | BookingUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPropertyInput | BookingUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PropertyCollaboratorUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyCollaboratorCreateWithoutPropertyInput, PropertyCollaboratorUncheckedCreateWithoutPropertyInput> | PropertyCollaboratorCreateWithoutPropertyInput[] | PropertyCollaboratorUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyCollaboratorCreateOrConnectWithoutPropertyInput | PropertyCollaboratorCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyCollaboratorUpsertWithWhereUniqueWithoutPropertyInput | PropertyCollaboratorUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyCollaboratorCreateManyPropertyInputEnvelope
    set?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    disconnect?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    delete?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    connect?: PropertyCollaboratorWhereUniqueInput | PropertyCollaboratorWhereUniqueInput[]
    update?: PropertyCollaboratorUpdateWithWhereUniqueWithoutPropertyInput | PropertyCollaboratorUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyCollaboratorUpdateManyWithWhereWithoutPropertyInput | PropertyCollaboratorUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyCollaboratorScalarWhereInput | PropertyCollaboratorScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutRoomsInput = {
    create?: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutRoomsInput
    connect?: PropertyWhereUniqueInput
  }

  export type MonthlyRateCreateNestedManyWithoutRoomInput = {
    create?: XOR<MonthlyRateCreateWithoutRoomInput, MonthlyRateUncheckedCreateWithoutRoomInput> | MonthlyRateCreateWithoutRoomInput[] | MonthlyRateUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MonthlyRateCreateOrConnectWithoutRoomInput | MonthlyRateCreateOrConnectWithoutRoomInput[]
    createMany?: MonthlyRateCreateManyRoomInputEnvelope
    connect?: MonthlyRateWhereUniqueInput | MonthlyRateWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type MonthlyRateUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<MonthlyRateCreateWithoutRoomInput, MonthlyRateUncheckedCreateWithoutRoomInput> | MonthlyRateCreateWithoutRoomInput[] | MonthlyRateUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MonthlyRateCreateOrConnectWithoutRoomInput | MonthlyRateCreateOrConnectWithoutRoomInput[]
    createMany?: MonthlyRateCreateManyRoomInputEnvelope
    connect?: MonthlyRateWhereUniqueInput | MonthlyRateWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutRoomsInput
    upsert?: PropertyUpsertWithoutRoomsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutRoomsInput, PropertyUpdateWithoutRoomsInput>, PropertyUncheckedUpdateWithoutRoomsInput>
  }

  export type MonthlyRateUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MonthlyRateCreateWithoutRoomInput, MonthlyRateUncheckedCreateWithoutRoomInput> | MonthlyRateCreateWithoutRoomInput[] | MonthlyRateUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MonthlyRateCreateOrConnectWithoutRoomInput | MonthlyRateCreateOrConnectWithoutRoomInput[]
    upsert?: MonthlyRateUpsertWithWhereUniqueWithoutRoomInput | MonthlyRateUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MonthlyRateCreateManyRoomInputEnvelope
    set?: MonthlyRateWhereUniqueInput | MonthlyRateWhereUniqueInput[]
    disconnect?: MonthlyRateWhereUniqueInput | MonthlyRateWhereUniqueInput[]
    delete?: MonthlyRateWhereUniqueInput | MonthlyRateWhereUniqueInput[]
    connect?: MonthlyRateWhereUniqueInput | MonthlyRateWhereUniqueInput[]
    update?: MonthlyRateUpdateWithWhereUniqueWithoutRoomInput | MonthlyRateUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MonthlyRateUpdateManyWithWhereWithoutRoomInput | MonthlyRateUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MonthlyRateScalarWhereInput | MonthlyRateScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoomInput | BookingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoomInput | BookingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoomInput | BookingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type MonthlyRateUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MonthlyRateCreateWithoutRoomInput, MonthlyRateUncheckedCreateWithoutRoomInput> | MonthlyRateCreateWithoutRoomInput[] | MonthlyRateUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MonthlyRateCreateOrConnectWithoutRoomInput | MonthlyRateCreateOrConnectWithoutRoomInput[]
    upsert?: MonthlyRateUpsertWithWhereUniqueWithoutRoomInput | MonthlyRateUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MonthlyRateCreateManyRoomInputEnvelope
    set?: MonthlyRateWhereUniqueInput | MonthlyRateWhereUniqueInput[]
    disconnect?: MonthlyRateWhereUniqueInput | MonthlyRateWhereUniqueInput[]
    delete?: MonthlyRateWhereUniqueInput | MonthlyRateWhereUniqueInput[]
    connect?: MonthlyRateWhereUniqueInput | MonthlyRateWhereUniqueInput[]
    update?: MonthlyRateUpdateWithWhereUniqueWithoutRoomInput | MonthlyRateUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MonthlyRateUpdateManyWithWhereWithoutRoomInput | MonthlyRateUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MonthlyRateScalarWhereInput | MonthlyRateScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoomInput | BookingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoomInput | BookingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoomInput | BookingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutMonthlyRatesInput = {
    create?: XOR<RoomCreateWithoutMonthlyRatesInput, RoomUncheckedCreateWithoutMonthlyRatesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMonthlyRatesInput
    connect?: RoomWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomUpdateOneRequiredWithoutMonthlyRatesNestedInput = {
    create?: XOR<RoomCreateWithoutMonthlyRatesInput, RoomUncheckedCreateWithoutMonthlyRatesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMonthlyRatesInput
    upsert?: RoomUpsertWithoutMonthlyRatesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMonthlyRatesInput, RoomUpdateWithoutMonthlyRatesInput>, RoomUncheckedUpdateWithoutMonthlyRatesInput>
  }

  export type PropertyCreateNestedOneWithoutBookingsInput = {
    create?: XOR<PropertyCreateWithoutBookingsInput, PropertyUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutBookingsInput
    connect?: PropertyWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutBookingsInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    connect?: RoomWhereUniqueInput
  }

  export type PaymentMethodCreateNestedOneWithoutBookingsInput = {
    create?: XOR<PaymentMethodCreateWithoutBookingsInput, PaymentMethodUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutBookingsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type PaymentMethodCreateNestedOneWithoutCollaboratorBookingsInput = {
    create?: XOR<PaymentMethodCreateWithoutCollaboratorBookingsInput, PaymentMethodUncheckedCreateWithoutCollaboratorBookingsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutCollaboratorBookingsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCollaboratorBookingsInput = {
    create?: XOR<UserCreateWithoutCollaboratorBookingsInput, UserUncheckedCreateWithoutCollaboratorBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaboratorBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type AccontoLogCreateNestedManyWithoutBookingInput = {
    create?: XOR<AccontoLogCreateWithoutBookingInput, AccontoLogUncheckedCreateWithoutBookingInput> | AccontoLogCreateWithoutBookingInput[] | AccontoLogUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: AccontoLogCreateOrConnectWithoutBookingInput | AccontoLogCreateOrConnectWithoutBookingInput[]
    createMany?: AccontoLogCreateManyBookingInputEnvelope
    connect?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
  }

  export type AccontoLogUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<AccontoLogCreateWithoutBookingInput, AccontoLogUncheckedCreateWithoutBookingInput> | AccontoLogCreateWithoutBookingInput[] | AccontoLogUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: AccontoLogCreateOrConnectWithoutBookingInput | AccontoLogCreateOrConnectWithoutBookingInput[]
    createMany?: AccontoLogCreateManyBookingInputEnvelope
    connect?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type PropertyUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<PropertyCreateWithoutBookingsInput, PropertyUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutBookingsInput
    upsert?: PropertyUpsertWithoutBookingsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutBookingsInput, PropertyUpdateWithoutBookingsInput>, PropertyUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    upsert?: RoomUpsertWithoutBookingsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutBookingsInput, RoomUpdateWithoutBookingsInput>, RoomUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentMethodUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutBookingsInput, PaymentMethodUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutBookingsInput
    upsert?: PaymentMethodUpsertWithoutBookingsInput
    disconnect?: PaymentMethodWhereInput | boolean
    delete?: PaymentMethodWhereInput | boolean
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutBookingsInput, PaymentMethodUpdateWithoutBookingsInput>, PaymentMethodUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentMethodUpdateOneWithoutCollaboratorBookingsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutCollaboratorBookingsInput, PaymentMethodUncheckedCreateWithoutCollaboratorBookingsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutCollaboratorBookingsInput
    upsert?: PaymentMethodUpsertWithoutCollaboratorBookingsInput
    disconnect?: PaymentMethodWhereInput | boolean
    delete?: PaymentMethodWhereInput | boolean
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutCollaboratorBookingsInput, PaymentMethodUpdateWithoutCollaboratorBookingsInput>, PaymentMethodUncheckedUpdateWithoutCollaboratorBookingsInput>
  }

  export type UserUpdateOneWithoutCollaboratorBookingsNestedInput = {
    create?: XOR<UserCreateWithoutCollaboratorBookingsInput, UserUncheckedCreateWithoutCollaboratorBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaboratorBookingsInput
    upsert?: UserUpsertWithoutCollaboratorBookingsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollaboratorBookingsInput, UserUpdateWithoutCollaboratorBookingsInput>, UserUncheckedUpdateWithoutCollaboratorBookingsInput>
  }

  export type AccontoLogUpdateManyWithoutBookingNestedInput = {
    create?: XOR<AccontoLogCreateWithoutBookingInput, AccontoLogUncheckedCreateWithoutBookingInput> | AccontoLogCreateWithoutBookingInput[] | AccontoLogUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: AccontoLogCreateOrConnectWithoutBookingInput | AccontoLogCreateOrConnectWithoutBookingInput[]
    upsert?: AccontoLogUpsertWithWhereUniqueWithoutBookingInput | AccontoLogUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: AccontoLogCreateManyBookingInputEnvelope
    set?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    disconnect?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    delete?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    connect?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    update?: AccontoLogUpdateWithWhereUniqueWithoutBookingInput | AccontoLogUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: AccontoLogUpdateManyWithWhereWithoutBookingInput | AccontoLogUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: AccontoLogScalarWhereInput | AccontoLogScalarWhereInput[]
  }

  export type AccontoLogUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<AccontoLogCreateWithoutBookingInput, AccontoLogUncheckedCreateWithoutBookingInput> | AccontoLogCreateWithoutBookingInput[] | AccontoLogUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: AccontoLogCreateOrConnectWithoutBookingInput | AccontoLogCreateOrConnectWithoutBookingInput[]
    upsert?: AccontoLogUpsertWithWhereUniqueWithoutBookingInput | AccontoLogUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: AccontoLogCreateManyBookingInputEnvelope
    set?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    disconnect?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    delete?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    connect?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    update?: AccontoLogUpdateWithWhereUniqueWithoutBookingInput | AccontoLogUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: AccontoLogUpdateManyWithWhereWithoutBookingInput | AccontoLogUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: AccontoLogScalarWhereInput | AccontoLogScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<BookingCreateWithoutPaymentMethodInput, BookingUncheckedCreateWithoutPaymentMethodInput> | BookingCreateWithoutPaymentMethodInput[] | BookingUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentMethodInput | BookingCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: BookingCreateManyPaymentMethodInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutCollaboratorPaymentMethodInput = {
    create?: XOR<BookingCreateWithoutCollaboratorPaymentMethodInput, BookingUncheckedCreateWithoutCollaboratorPaymentMethodInput> | BookingCreateWithoutCollaboratorPaymentMethodInput[] | BookingUncheckedCreateWithoutCollaboratorPaymentMethodInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCollaboratorPaymentMethodInput | BookingCreateOrConnectWithoutCollaboratorPaymentMethodInput[]
    createMany?: BookingCreateManyCollaboratorPaymentMethodInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type AccontoLogCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<AccontoLogCreateWithoutPaymentMethodInput, AccontoLogUncheckedCreateWithoutPaymentMethodInput> | AccontoLogCreateWithoutPaymentMethodInput[] | AccontoLogUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: AccontoLogCreateOrConnectWithoutPaymentMethodInput | AccontoLogCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: AccontoLogCreateManyPaymentMethodInputEnvelope
    connect?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<BookingCreateWithoutPaymentMethodInput, BookingUncheckedCreateWithoutPaymentMethodInput> | BookingCreateWithoutPaymentMethodInput[] | BookingUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentMethodInput | BookingCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: BookingCreateManyPaymentMethodInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutCollaboratorPaymentMethodInput = {
    create?: XOR<BookingCreateWithoutCollaboratorPaymentMethodInput, BookingUncheckedCreateWithoutCollaboratorPaymentMethodInput> | BookingCreateWithoutCollaboratorPaymentMethodInput[] | BookingUncheckedCreateWithoutCollaboratorPaymentMethodInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCollaboratorPaymentMethodInput | BookingCreateOrConnectWithoutCollaboratorPaymentMethodInput[]
    createMany?: BookingCreateManyCollaboratorPaymentMethodInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type AccontoLogUncheckedCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<AccontoLogCreateWithoutPaymentMethodInput, AccontoLogUncheckedCreateWithoutPaymentMethodInput> | AccontoLogCreateWithoutPaymentMethodInput[] | AccontoLogUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: AccontoLogCreateOrConnectWithoutPaymentMethodInput | AccontoLogCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: AccontoLogCreateManyPaymentMethodInputEnvelope
    connect?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
  }

  export type BookingUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentMethodInput, BookingUncheckedCreateWithoutPaymentMethodInput> | BookingCreateWithoutPaymentMethodInput[] | BookingUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentMethodInput | BookingCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPaymentMethodInput | BookingUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: BookingCreateManyPaymentMethodInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPaymentMethodInput | BookingUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPaymentMethodInput | BookingUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutCollaboratorPaymentMethodNestedInput = {
    create?: XOR<BookingCreateWithoutCollaboratorPaymentMethodInput, BookingUncheckedCreateWithoutCollaboratorPaymentMethodInput> | BookingCreateWithoutCollaboratorPaymentMethodInput[] | BookingUncheckedCreateWithoutCollaboratorPaymentMethodInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCollaboratorPaymentMethodInput | BookingCreateOrConnectWithoutCollaboratorPaymentMethodInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCollaboratorPaymentMethodInput | BookingUpsertWithWhereUniqueWithoutCollaboratorPaymentMethodInput[]
    createMany?: BookingCreateManyCollaboratorPaymentMethodInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCollaboratorPaymentMethodInput | BookingUpdateWithWhereUniqueWithoutCollaboratorPaymentMethodInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCollaboratorPaymentMethodInput | BookingUpdateManyWithWhereWithoutCollaboratorPaymentMethodInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type AccontoLogUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<AccontoLogCreateWithoutPaymentMethodInput, AccontoLogUncheckedCreateWithoutPaymentMethodInput> | AccontoLogCreateWithoutPaymentMethodInput[] | AccontoLogUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: AccontoLogCreateOrConnectWithoutPaymentMethodInput | AccontoLogCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: AccontoLogUpsertWithWhereUniqueWithoutPaymentMethodInput | AccontoLogUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: AccontoLogCreateManyPaymentMethodInputEnvelope
    set?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    disconnect?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    delete?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    connect?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    update?: AccontoLogUpdateWithWhereUniqueWithoutPaymentMethodInput | AccontoLogUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: AccontoLogUpdateManyWithWhereWithoutPaymentMethodInput | AccontoLogUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: AccontoLogScalarWhereInput | AccontoLogScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentMethodInput, BookingUncheckedCreateWithoutPaymentMethodInput> | BookingCreateWithoutPaymentMethodInput[] | BookingUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentMethodInput | BookingCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPaymentMethodInput | BookingUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: BookingCreateManyPaymentMethodInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPaymentMethodInput | BookingUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPaymentMethodInput | BookingUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutCollaboratorPaymentMethodNestedInput = {
    create?: XOR<BookingCreateWithoutCollaboratorPaymentMethodInput, BookingUncheckedCreateWithoutCollaboratorPaymentMethodInput> | BookingCreateWithoutCollaboratorPaymentMethodInput[] | BookingUncheckedCreateWithoutCollaboratorPaymentMethodInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCollaboratorPaymentMethodInput | BookingCreateOrConnectWithoutCollaboratorPaymentMethodInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCollaboratorPaymentMethodInput | BookingUpsertWithWhereUniqueWithoutCollaboratorPaymentMethodInput[]
    createMany?: BookingCreateManyCollaboratorPaymentMethodInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCollaboratorPaymentMethodInput | BookingUpdateWithWhereUniqueWithoutCollaboratorPaymentMethodInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCollaboratorPaymentMethodInput | BookingUpdateManyWithWhereWithoutCollaboratorPaymentMethodInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type AccontoLogUncheckedUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<AccontoLogCreateWithoutPaymentMethodInput, AccontoLogUncheckedCreateWithoutPaymentMethodInput> | AccontoLogCreateWithoutPaymentMethodInput[] | AccontoLogUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: AccontoLogCreateOrConnectWithoutPaymentMethodInput | AccontoLogCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: AccontoLogUpsertWithWhereUniqueWithoutPaymentMethodInput | AccontoLogUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: AccontoLogCreateManyPaymentMethodInputEnvelope
    set?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    disconnect?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    delete?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    connect?: AccontoLogWhereUniqueInput | AccontoLogWhereUniqueInput[]
    update?: AccontoLogUpdateWithWhereUniqueWithoutPaymentMethodInput | AccontoLogUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: AccontoLogUpdateManyWithWhereWithoutPaymentMethodInput | AccontoLogUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: AccontoLogScalarWhereInput | AccontoLogScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutAccontiLogsInput = {
    create?: XOR<BookingCreateWithoutAccontiLogsInput, BookingUncheckedCreateWithoutAccontiLogsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAccontiLogsInput
    connect?: BookingWhereUniqueInput
  }

  export type PaymentMethodCreateNestedOneWithoutAccontiLogsInput = {
    create?: XOR<PaymentMethodCreateWithoutAccontiLogsInput, PaymentMethodUncheckedCreateWithoutAccontiLogsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutAccontiLogsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutAccontiLogsNestedInput = {
    create?: XOR<BookingCreateWithoutAccontiLogsInput, BookingUncheckedCreateWithoutAccontiLogsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAccontiLogsInput
    upsert?: BookingUpsertWithoutAccontiLogsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutAccontiLogsInput, BookingUpdateWithoutAccontiLogsInput>, BookingUncheckedUpdateWithoutAccontiLogsInput>
  }

  export type PaymentMethodUpdateOneWithoutAccontiLogsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutAccontiLogsInput, PaymentMethodUncheckedCreateWithoutAccontiLogsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutAccontiLogsInput
    upsert?: PaymentMethodUpsertWithoutAccontiLogsInput
    disconnect?: PaymentMethodWhereInput | boolean
    delete?: PaymentMethodWhereInput | boolean
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutAccontiLogsInput, PaymentMethodUpdateWithoutAccontiLogsInput>, PaymentMethodUncheckedUpdateWithoutAccontiLogsInput>
  }

  export type PropertyCreateNestedOneWithoutCollaboratorsInput = {
    create?: XOR<PropertyCreateWithoutCollaboratorsInput, PropertyUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutCollaboratorsInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPropertyLinksInput = {
    create?: XOR<UserCreateWithoutPropertyLinksInput, UserUncheckedCreateWithoutPropertyLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertyLinksInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCollaboratorRoleFieldUpdateOperationsInput = {
    set?: $Enums.CollaboratorRole
  }

  export type PropertyUpdateOneRequiredWithoutCollaboratorsNestedInput = {
    create?: XOR<PropertyCreateWithoutCollaboratorsInput, PropertyUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutCollaboratorsInput
    upsert?: PropertyUpsertWithoutCollaboratorsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutCollaboratorsInput, PropertyUpdateWithoutCollaboratorsInput>, PropertyUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type UserUpdateOneRequiredWithoutPropertyLinksNestedInput = {
    create?: XOR<UserCreateWithoutPropertyLinksInput, UserUncheckedCreateWithoutPropertyLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertyLinksInput
    upsert?: UserUpsertWithoutPropertyLinksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPropertyLinksInput, UserUpdateWithoutPropertyLinksInput>, UserUncheckedUpdateWithoutPropertyLinksInput>
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
    search?: string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumCollaboratorRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorRole | EnumCollaboratorRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorRole[]
    notIn?: $Enums.CollaboratorRole[]
    not?: NestedEnumCollaboratorRoleFilter<$PrismaModel> | $Enums.CollaboratorRole
  }

  export type NestedEnumCollaboratorRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorRole | EnumCollaboratorRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorRole[]
    notIn?: $Enums.CollaboratorRole[]
    not?: NestedEnumCollaboratorRoleWithAggregatesFilter<$PrismaModel> | $Enums.CollaboratorRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaboratorRoleFilter<$PrismaModel>
    _max?: NestedEnumCollaboratorRoleFilter<$PrismaModel>
  }

  export type BookingCreateWithoutCollaboratorInput = {
    id?: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutBookingsInput
    collaboratorPaymentMethod?: PaymentMethodCreateNestedOneWithoutCollaboratorBookingsInput
    accontiLogs?: AccontoLogCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutCollaboratorInput = {
    id?: string
    propertyId: string
    roomId: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    paymentMethodId?: string | null
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    collaboratorPaymentMethodId?: string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accontiLogs?: AccontoLogUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutCollaboratorInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCollaboratorInput, BookingUncheckedCreateWithoutCollaboratorInput>
  }

  export type BookingCreateManyCollaboratorInputEnvelope = {
    data: BookingCreateManyCollaboratorInput | BookingCreateManyCollaboratorInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCollaboratorCreateWithoutUserInput = {
    id?: string
    roleOnProperty?: $Enums.CollaboratorRole
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutCollaboratorsInput
  }

  export type PropertyCollaboratorUncheckedCreateWithoutUserInput = {
    id?: string
    propertyId: string
    roleOnProperty?: $Enums.CollaboratorRole
    createdAt?: Date | string
  }

  export type PropertyCollaboratorCreateOrConnectWithoutUserInput = {
    where: PropertyCollaboratorWhereUniqueInput
    create: XOR<PropertyCollaboratorCreateWithoutUserInput, PropertyCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type PropertyCollaboratorCreateManyUserInputEnvelope = {
    data: PropertyCollaboratorCreateManyUserInput | PropertyCollaboratorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LicenseCreateWithoutUserInput = {
    id?: string
    type: string
    status?: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    status?: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseCreateOrConnectWithoutUserInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutUserInput, LicenseUncheckedCreateWithoutUserInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutCollaboratorInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCollaboratorInput, BookingUncheckedUpdateWithoutCollaboratorInput>
    create: XOR<BookingCreateWithoutCollaboratorInput, BookingUncheckedCreateWithoutCollaboratorInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCollaboratorInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCollaboratorInput, BookingUncheckedUpdateWithoutCollaboratorInput>
  }

  export type BookingUpdateManyWithWhereWithoutCollaboratorInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCollaboratorInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    propertyId?: StringFilter<"Booking"> | string
    roomId?: StringFilter<"Booking"> | string
    clientFirstName?: StringFilter<"Booking"> | string
    clientLastName?: StringNullableFilter<"Booking"> | string | null
    clientPhone?: StringNullableFilter<"Booking"> | string | null
    clientEmail?: StringNullableFilter<"Booking"> | string | null
    guests?: IntFilter<"Booking"> | number
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    nights?: IntFilter<"Booking"> | number
    stayAmount?: FloatFilter<"Booking"> | number
    cleaningAmount?: FloatFilter<"Booking"> | number
    ownerAmount?: FloatFilter<"Booking"> | number
    feeAmount?: FloatFilter<"Booking"> | number
    totalAmount?: FloatFilter<"Booking"> | number
    collectedAmount?: FloatFilter<"Booking"> | number
    paymentMethodId?: StringNullableFilter<"Booking"> | string | null
    bookingSource?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"Booking"> | string | null
    collaboratorId?: StringNullableFilter<"Booking"> | string | null
    collaboratorPaid?: BoolFilter<"Booking"> | boolean
    collaboratorPaidAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    collaboratorPaymentMethodId?: StringNullableFilter<"Booking"> | string | null
    quotePdfUrl?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type PropertyCollaboratorUpsertWithWhereUniqueWithoutUserInput = {
    where: PropertyCollaboratorWhereUniqueInput
    update: XOR<PropertyCollaboratorUpdateWithoutUserInput, PropertyCollaboratorUncheckedUpdateWithoutUserInput>
    create: XOR<PropertyCollaboratorCreateWithoutUserInput, PropertyCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type PropertyCollaboratorUpdateWithWhereUniqueWithoutUserInput = {
    where: PropertyCollaboratorWhereUniqueInput
    data: XOR<PropertyCollaboratorUpdateWithoutUserInput, PropertyCollaboratorUncheckedUpdateWithoutUserInput>
  }

  export type PropertyCollaboratorUpdateManyWithWhereWithoutUserInput = {
    where: PropertyCollaboratorScalarWhereInput
    data: XOR<PropertyCollaboratorUpdateManyMutationInput, PropertyCollaboratorUncheckedUpdateManyWithoutUserInput>
  }

  export type PropertyCollaboratorScalarWhereInput = {
    AND?: PropertyCollaboratorScalarWhereInput | PropertyCollaboratorScalarWhereInput[]
    OR?: PropertyCollaboratorScalarWhereInput[]
    NOT?: PropertyCollaboratorScalarWhereInput | PropertyCollaboratorScalarWhereInput[]
    id?: StringFilter<"PropertyCollaborator"> | string
    propertyId?: StringFilter<"PropertyCollaborator"> | string
    userId?: StringFilter<"PropertyCollaborator"> | string
    roleOnProperty?: EnumCollaboratorRoleFilter<"PropertyCollaborator"> | $Enums.CollaboratorRole
    createdAt?: DateTimeFilter<"PropertyCollaborator"> | Date | string
  }

  export type LicenseUpsertWithoutUserInput = {
    update: XOR<LicenseUpdateWithoutUserInput, LicenseUncheckedUpdateWithoutUserInput>
    create: XOR<LicenseCreateWithoutUserInput, LicenseUncheckedCreateWithoutUserInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutUserInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutUserInput, LicenseUncheckedUpdateWithoutUserInput>
  }

  export type LicenseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutLicenseInput = {
    id?: string
    nickname: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaboratorBookings?: BookingCreateNestedManyWithoutCollaboratorInput
    propertyLinks?: PropertyCollaboratorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLicenseInput = {
    id?: string
    nickname: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaboratorBookings?: BookingUncheckedCreateNestedManyWithoutCollaboratorInput
    propertyLinks?: PropertyCollaboratorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLicenseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLicenseInput, UserUncheckedCreateWithoutLicenseInput>
  }

  export type UserUpsertWithoutLicenseInput = {
    update: XOR<UserUpdateWithoutLicenseInput, UserUncheckedUpdateWithoutLicenseInput>
    create: XOR<UserCreateWithoutLicenseInput, UserUncheckedCreateWithoutLicenseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLicenseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLicenseInput, UserUncheckedUpdateWithoutLicenseInput>
  }

  export type UserUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaboratorBookings?: BookingUpdateManyWithoutCollaboratorNestedInput
    propertyLinks?: PropertyCollaboratorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaboratorBookings?: BookingUncheckedUpdateManyWithoutCollaboratorNestedInput
    propertyLinks?: PropertyCollaboratorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomCreateWithoutPropertyInput = {
    id?: string
    name: string
    capacity?: number
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyRates?: MonthlyRateCreateNestedManyWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutPropertyInput = {
    id?: string
    name: string
    capacity?: number
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyRates?: MonthlyRateUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput>
  }

  export type RoomCreateManyPropertyInputEnvelope = {
    data: RoomCreateManyPropertyInput | RoomCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutPropertyInput = {
    id?: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutBookingsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutBookingsInput
    collaboratorPaymentMethod?: PaymentMethodCreateNestedOneWithoutCollaboratorBookingsInput
    collaborator?: UserCreateNestedOneWithoutCollaboratorBookingsInput
    accontiLogs?: AccontoLogCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPropertyInput = {
    id?: string
    roomId: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    paymentMethodId?: string | null
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorId?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    collaboratorPaymentMethodId?: string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accontiLogs?: AccontoLogUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPropertyInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput>
  }

  export type BookingCreateManyPropertyInputEnvelope = {
    data: BookingCreateManyPropertyInput | BookingCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCollaboratorCreateWithoutPropertyInput = {
    id?: string
    roleOnProperty?: $Enums.CollaboratorRole
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPropertyLinksInput
  }

  export type PropertyCollaboratorUncheckedCreateWithoutPropertyInput = {
    id?: string
    userId: string
    roleOnProperty?: $Enums.CollaboratorRole
    createdAt?: Date | string
  }

  export type PropertyCollaboratorCreateOrConnectWithoutPropertyInput = {
    where: PropertyCollaboratorWhereUniqueInput
    create: XOR<PropertyCollaboratorCreateWithoutPropertyInput, PropertyCollaboratorUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyCollaboratorCreateManyPropertyInputEnvelope = {
    data: PropertyCollaboratorCreateManyPropertyInput | PropertyCollaboratorCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutPropertyInput, RoomUncheckedUpdateWithoutPropertyInput>
    create: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutPropertyInput, RoomUncheckedUpdateWithoutPropertyInput>
  }

  export type RoomUpdateManyWithWhereWithoutPropertyInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutPropertyInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    propertyId?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    description?: StringNullableFilter<"Room"> | string | null
    images?: JsonFilter<"Room">
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutPropertyInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutPropertyInput, BookingUncheckedUpdateWithoutPropertyInput>
    create: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutPropertyInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutPropertyInput, BookingUncheckedUpdateWithoutPropertyInput>
  }

  export type BookingUpdateManyWithWhereWithoutPropertyInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyCollaboratorUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyCollaboratorWhereUniqueInput
    update: XOR<PropertyCollaboratorUpdateWithoutPropertyInput, PropertyCollaboratorUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyCollaboratorCreateWithoutPropertyInput, PropertyCollaboratorUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyCollaboratorUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyCollaboratorWhereUniqueInput
    data: XOR<PropertyCollaboratorUpdateWithoutPropertyInput, PropertyCollaboratorUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyCollaboratorUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyCollaboratorScalarWhereInput
    data: XOR<PropertyCollaboratorUpdateManyMutationInput, PropertyCollaboratorUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyCreateWithoutRoomsInput = {
    id?: string
    name: string
    location: string
    address?: string | null
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutPropertyInput
    collaborators?: PropertyCollaboratorCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutRoomsInput = {
    id?: string
    name: string
    location: string
    address?: string | null
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
    collaborators?: PropertyCollaboratorUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutRoomsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
  }

  export type MonthlyRateCreateWithoutRoomInput = {
    id?: string
    year: number
    month: number
    price: number
    cleaningFee?: number
  }

  export type MonthlyRateUncheckedCreateWithoutRoomInput = {
    id?: string
    year: number
    month: number
    price: number
    cleaningFee?: number
  }

  export type MonthlyRateCreateOrConnectWithoutRoomInput = {
    where: MonthlyRateWhereUniqueInput
    create: XOR<MonthlyRateCreateWithoutRoomInput, MonthlyRateUncheckedCreateWithoutRoomInput>
  }

  export type MonthlyRateCreateManyRoomInputEnvelope = {
    data: MonthlyRateCreateManyRoomInput | MonthlyRateCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutRoomInput = {
    id?: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutBookingsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutBookingsInput
    collaboratorPaymentMethod?: PaymentMethodCreateNestedOneWithoutCollaboratorBookingsInput
    collaborator?: UserCreateNestedOneWithoutCollaboratorBookingsInput
    accontiLogs?: AccontoLogCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutRoomInput = {
    id?: string
    propertyId: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    paymentMethodId?: string | null
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorId?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    collaboratorPaymentMethodId?: string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accontiLogs?: AccontoLogUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutRoomInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput>
  }

  export type BookingCreateManyRoomInputEnvelope = {
    data: BookingCreateManyRoomInput | BookingCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutRoomsInput = {
    update: XOR<PropertyUpdateWithoutRoomsInput, PropertyUncheckedUpdateWithoutRoomsInput>
    create: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutRoomsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutRoomsInput, PropertyUncheckedUpdateWithoutRoomsInput>
  }

  export type PropertyUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
    collaborators?: PropertyCollaboratorUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
    collaborators?: PropertyCollaboratorUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type MonthlyRateUpsertWithWhereUniqueWithoutRoomInput = {
    where: MonthlyRateWhereUniqueInput
    update: XOR<MonthlyRateUpdateWithoutRoomInput, MonthlyRateUncheckedUpdateWithoutRoomInput>
    create: XOR<MonthlyRateCreateWithoutRoomInput, MonthlyRateUncheckedCreateWithoutRoomInput>
  }

  export type MonthlyRateUpdateWithWhereUniqueWithoutRoomInput = {
    where: MonthlyRateWhereUniqueInput
    data: XOR<MonthlyRateUpdateWithoutRoomInput, MonthlyRateUncheckedUpdateWithoutRoomInput>
  }

  export type MonthlyRateUpdateManyWithWhereWithoutRoomInput = {
    where: MonthlyRateScalarWhereInput
    data: XOR<MonthlyRateUpdateManyMutationInput, MonthlyRateUncheckedUpdateManyWithoutRoomInput>
  }

  export type MonthlyRateScalarWhereInput = {
    AND?: MonthlyRateScalarWhereInput | MonthlyRateScalarWhereInput[]
    OR?: MonthlyRateScalarWhereInput[]
    NOT?: MonthlyRateScalarWhereInput | MonthlyRateScalarWhereInput[]
    id?: StringFilter<"MonthlyRate"> | string
    roomId?: StringFilter<"MonthlyRate"> | string
    year?: IntFilter<"MonthlyRate"> | number
    month?: IntFilter<"MonthlyRate"> | number
    price?: FloatFilter<"MonthlyRate"> | number
    cleaningFee?: FloatFilter<"MonthlyRate"> | number
  }

  export type BookingUpsertWithWhereUniqueWithoutRoomInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutRoomInput, BookingUncheckedUpdateWithoutRoomInput>
    create: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutRoomInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutRoomInput, BookingUncheckedUpdateWithoutRoomInput>
  }

  export type BookingUpdateManyWithWhereWithoutRoomInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomCreateWithoutMonthlyRatesInput = {
    id?: string
    name: string
    capacity?: number
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutRoomsInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMonthlyRatesInput = {
    id?: string
    propertyId: string
    name: string
    capacity?: number
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMonthlyRatesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMonthlyRatesInput, RoomUncheckedCreateWithoutMonthlyRatesInput>
  }

  export type RoomUpsertWithoutMonthlyRatesInput = {
    update: XOR<RoomUpdateWithoutMonthlyRatesInput, RoomUncheckedUpdateWithoutMonthlyRatesInput>
    create: XOR<RoomCreateWithoutMonthlyRatesInput, RoomUncheckedCreateWithoutMonthlyRatesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMonthlyRatesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMonthlyRatesInput, RoomUncheckedUpdateWithoutMonthlyRatesInput>
  }

  export type RoomUpdateWithoutMonthlyRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMonthlyRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type PropertyCreateWithoutBookingsInput = {
    id?: string
    name: string
    location: string
    address?: string | null
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    collaborators?: PropertyCollaboratorCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    location: string
    address?: string | null
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    collaborators?: PropertyCollaboratorUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutBookingsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutBookingsInput, PropertyUncheckedCreateWithoutBookingsInput>
  }

  export type RoomCreateWithoutBookingsInput = {
    id?: string
    name: string
    capacity?: number
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutRoomsInput
    monthlyRates?: MonthlyRateCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBookingsInput = {
    id?: string
    propertyId: string
    name: string
    capacity?: number
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyRates?: MonthlyRateUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBookingsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentMethodCreateWithoutBookingsInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    collaboratorBookings?: BookingCreateNestedManyWithoutCollaboratorPaymentMethodInput
    accontiLogs?: AccontoLogCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    collaboratorBookings?: BookingUncheckedCreateNestedManyWithoutCollaboratorPaymentMethodInput
    accontiLogs?: AccontoLogUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutBookingsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutBookingsInput, PaymentMethodUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentMethodCreateWithoutCollaboratorBookingsInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutPaymentMethodInput
    accontiLogs?: AccontoLogCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutCollaboratorBookingsInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutPaymentMethodInput
    accontiLogs?: AccontoLogUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutCollaboratorBookingsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutCollaboratorBookingsInput, PaymentMethodUncheckedCreateWithoutCollaboratorBookingsInput>
  }

  export type UserCreateWithoutCollaboratorBookingsInput = {
    id?: string
    nickname: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyLinks?: PropertyCollaboratorCreateNestedManyWithoutUserInput
    license?: LicenseCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCollaboratorBookingsInput = {
    id?: string
    nickname: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyLinks?: PropertyCollaboratorUncheckedCreateNestedManyWithoutUserInput
    license?: LicenseUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCollaboratorBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollaboratorBookingsInput, UserUncheckedCreateWithoutCollaboratorBookingsInput>
  }

  export type AccontoLogCreateWithoutBookingInput = {
    id?: string
    amount: number
    type?: string
    savedAt?: Date | string
    paymentMethod?: PaymentMethodCreateNestedOneWithoutAccontiLogsInput
  }

  export type AccontoLogUncheckedCreateWithoutBookingInput = {
    id?: string
    amount: number
    paymentMethodId?: string | null
    type?: string
    savedAt?: Date | string
  }

  export type AccontoLogCreateOrConnectWithoutBookingInput = {
    where: AccontoLogWhereUniqueInput
    create: XOR<AccontoLogCreateWithoutBookingInput, AccontoLogUncheckedCreateWithoutBookingInput>
  }

  export type AccontoLogCreateManyBookingInputEnvelope = {
    data: AccontoLogCreateManyBookingInput | AccontoLogCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutBookingsInput = {
    update: XOR<PropertyUpdateWithoutBookingsInput, PropertyUncheckedUpdateWithoutBookingsInput>
    create: XOR<PropertyCreateWithoutBookingsInput, PropertyUncheckedCreateWithoutBookingsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutBookingsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutBookingsInput, PropertyUncheckedUpdateWithoutBookingsInput>
  }

  export type PropertyUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    collaborators?: PropertyCollaboratorUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    collaborators?: PropertyCollaboratorUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type RoomUpsertWithoutBookingsInput = {
    update: XOR<RoomUpdateWithoutBookingsInput, RoomUncheckedUpdateWithoutBookingsInput>
    create: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutBookingsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutBookingsInput, RoomUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
    monthlyRates?: MonthlyRateUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRates?: MonthlyRateUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type PaymentMethodUpsertWithoutBookingsInput = {
    update: XOR<PaymentMethodUpdateWithoutBookingsInput, PaymentMethodUncheckedUpdateWithoutBookingsInput>
    create: XOR<PaymentMethodCreateWithoutBookingsInput, PaymentMethodUncheckedCreateWithoutBookingsInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutBookingsInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutBookingsInput, PaymentMethodUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentMethodUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaboratorBookings?: BookingUpdateManyWithoutCollaboratorPaymentMethodNestedInput
    accontiLogs?: AccontoLogUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaboratorBookings?: BookingUncheckedUpdateManyWithoutCollaboratorPaymentMethodNestedInput
    accontiLogs?: AccontoLogUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUpsertWithoutCollaboratorBookingsInput = {
    update: XOR<PaymentMethodUpdateWithoutCollaboratorBookingsInput, PaymentMethodUncheckedUpdateWithoutCollaboratorBookingsInput>
    create: XOR<PaymentMethodCreateWithoutCollaboratorBookingsInput, PaymentMethodUncheckedCreateWithoutCollaboratorBookingsInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutCollaboratorBookingsInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutCollaboratorBookingsInput, PaymentMethodUncheckedUpdateWithoutCollaboratorBookingsInput>
  }

  export type PaymentMethodUpdateWithoutCollaboratorBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutPaymentMethodNestedInput
    accontiLogs?: AccontoLogUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutCollaboratorBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutPaymentMethodNestedInput
    accontiLogs?: AccontoLogUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type UserUpsertWithoutCollaboratorBookingsInput = {
    update: XOR<UserUpdateWithoutCollaboratorBookingsInput, UserUncheckedUpdateWithoutCollaboratorBookingsInput>
    create: XOR<UserCreateWithoutCollaboratorBookingsInput, UserUncheckedCreateWithoutCollaboratorBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollaboratorBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollaboratorBookingsInput, UserUncheckedUpdateWithoutCollaboratorBookingsInput>
  }

  export type UserUpdateWithoutCollaboratorBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyLinks?: PropertyCollaboratorUpdateManyWithoutUserNestedInput
    license?: LicenseUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollaboratorBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyLinks?: PropertyCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    license?: LicenseUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccontoLogUpsertWithWhereUniqueWithoutBookingInput = {
    where: AccontoLogWhereUniqueInput
    update: XOR<AccontoLogUpdateWithoutBookingInput, AccontoLogUncheckedUpdateWithoutBookingInput>
    create: XOR<AccontoLogCreateWithoutBookingInput, AccontoLogUncheckedCreateWithoutBookingInput>
  }

  export type AccontoLogUpdateWithWhereUniqueWithoutBookingInput = {
    where: AccontoLogWhereUniqueInput
    data: XOR<AccontoLogUpdateWithoutBookingInput, AccontoLogUncheckedUpdateWithoutBookingInput>
  }

  export type AccontoLogUpdateManyWithWhereWithoutBookingInput = {
    where: AccontoLogScalarWhereInput
    data: XOR<AccontoLogUpdateManyMutationInput, AccontoLogUncheckedUpdateManyWithoutBookingInput>
  }

  export type AccontoLogScalarWhereInput = {
    AND?: AccontoLogScalarWhereInput | AccontoLogScalarWhereInput[]
    OR?: AccontoLogScalarWhereInput[]
    NOT?: AccontoLogScalarWhereInput | AccontoLogScalarWhereInput[]
    id?: StringFilter<"AccontoLog"> | string
    bookingId?: StringFilter<"AccontoLog"> | string
    amount?: FloatFilter<"AccontoLog"> | number
    paymentMethodId?: StringNullableFilter<"AccontoLog"> | string | null
    type?: StringFilter<"AccontoLog"> | string
    savedAt?: DateTimeFilter<"AccontoLog"> | Date | string
  }

  export type BookingCreateWithoutPaymentMethodInput = {
    id?: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    collaboratorPaymentMethod?: PaymentMethodCreateNestedOneWithoutCollaboratorBookingsInput
    collaborator?: UserCreateNestedOneWithoutCollaboratorBookingsInput
    accontiLogs?: AccontoLogCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentMethodInput = {
    id?: string
    propertyId: string
    roomId: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorId?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    collaboratorPaymentMethodId?: string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accontiLogs?: AccontoLogUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPaymentMethodInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentMethodInput, BookingUncheckedCreateWithoutPaymentMethodInput>
  }

  export type BookingCreateManyPaymentMethodInputEnvelope = {
    data: BookingCreateManyPaymentMethodInput | BookingCreateManyPaymentMethodInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutCollaboratorPaymentMethodInput = {
    id?: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutBookingsInput
    collaborator?: UserCreateNestedOneWithoutCollaboratorBookingsInput
    accontiLogs?: AccontoLogCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutCollaboratorPaymentMethodInput = {
    id?: string
    propertyId: string
    roomId: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    paymentMethodId?: string | null
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorId?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accontiLogs?: AccontoLogUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutCollaboratorPaymentMethodInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCollaboratorPaymentMethodInput, BookingUncheckedCreateWithoutCollaboratorPaymentMethodInput>
  }

  export type BookingCreateManyCollaboratorPaymentMethodInputEnvelope = {
    data: BookingCreateManyCollaboratorPaymentMethodInput | BookingCreateManyCollaboratorPaymentMethodInput[]
    skipDuplicates?: boolean
  }

  export type AccontoLogCreateWithoutPaymentMethodInput = {
    id?: string
    amount: number
    type?: string
    savedAt?: Date | string
    booking: BookingCreateNestedOneWithoutAccontiLogsInput
  }

  export type AccontoLogUncheckedCreateWithoutPaymentMethodInput = {
    id?: string
    bookingId: string
    amount: number
    type?: string
    savedAt?: Date | string
  }

  export type AccontoLogCreateOrConnectWithoutPaymentMethodInput = {
    where: AccontoLogWhereUniqueInput
    create: XOR<AccontoLogCreateWithoutPaymentMethodInput, AccontoLogUncheckedCreateWithoutPaymentMethodInput>
  }

  export type AccontoLogCreateManyPaymentMethodInputEnvelope = {
    data: AccontoLogCreateManyPaymentMethodInput | AccontoLogCreateManyPaymentMethodInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutPaymentMethodInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutPaymentMethodInput, BookingUncheckedUpdateWithoutPaymentMethodInput>
    create: XOR<BookingCreateWithoutPaymentMethodInput, BookingUncheckedCreateWithoutPaymentMethodInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutPaymentMethodInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutPaymentMethodInput, BookingUncheckedUpdateWithoutPaymentMethodInput>
  }

  export type BookingUpdateManyWithWhereWithoutPaymentMethodInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutPaymentMethodInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutCollaboratorPaymentMethodInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCollaboratorPaymentMethodInput, BookingUncheckedUpdateWithoutCollaboratorPaymentMethodInput>
    create: XOR<BookingCreateWithoutCollaboratorPaymentMethodInput, BookingUncheckedCreateWithoutCollaboratorPaymentMethodInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCollaboratorPaymentMethodInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCollaboratorPaymentMethodInput, BookingUncheckedUpdateWithoutCollaboratorPaymentMethodInput>
  }

  export type BookingUpdateManyWithWhereWithoutCollaboratorPaymentMethodInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCollaboratorPaymentMethodInput>
  }

  export type AccontoLogUpsertWithWhereUniqueWithoutPaymentMethodInput = {
    where: AccontoLogWhereUniqueInput
    update: XOR<AccontoLogUpdateWithoutPaymentMethodInput, AccontoLogUncheckedUpdateWithoutPaymentMethodInput>
    create: XOR<AccontoLogCreateWithoutPaymentMethodInput, AccontoLogUncheckedCreateWithoutPaymentMethodInput>
  }

  export type AccontoLogUpdateWithWhereUniqueWithoutPaymentMethodInput = {
    where: AccontoLogWhereUniqueInput
    data: XOR<AccontoLogUpdateWithoutPaymentMethodInput, AccontoLogUncheckedUpdateWithoutPaymentMethodInput>
  }

  export type AccontoLogUpdateManyWithWhereWithoutPaymentMethodInput = {
    where: AccontoLogScalarWhereInput
    data: XOR<AccontoLogUpdateManyMutationInput, AccontoLogUncheckedUpdateManyWithoutPaymentMethodInput>
  }

  export type BookingCreateWithoutAccontiLogsInput = {
    id?: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutBookingsInput
    collaboratorPaymentMethod?: PaymentMethodCreateNestedOneWithoutCollaboratorBookingsInput
    collaborator?: UserCreateNestedOneWithoutCollaboratorBookingsInput
  }

  export type BookingUncheckedCreateWithoutAccontiLogsInput = {
    id?: string
    propertyId: string
    roomId: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    paymentMethodId?: string | null
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorId?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    collaboratorPaymentMethodId?: string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutAccontiLogsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutAccontiLogsInput, BookingUncheckedCreateWithoutAccontiLogsInput>
  }

  export type PaymentMethodCreateWithoutAccontiLogsInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutPaymentMethodInput
    collaboratorBookings?: BookingCreateNestedManyWithoutCollaboratorPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutAccontiLogsInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutPaymentMethodInput
    collaboratorBookings?: BookingUncheckedCreateNestedManyWithoutCollaboratorPaymentMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutAccontiLogsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutAccontiLogsInput, PaymentMethodUncheckedCreateWithoutAccontiLogsInput>
  }

  export type BookingUpsertWithoutAccontiLogsInput = {
    update: XOR<BookingUpdateWithoutAccontiLogsInput, BookingUncheckedUpdateWithoutAccontiLogsInput>
    create: XOR<BookingCreateWithoutAccontiLogsInput, BookingUncheckedCreateWithoutAccontiLogsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutAccontiLogsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutAccontiLogsInput, BookingUncheckedUpdateWithoutAccontiLogsInput>
  }

  export type BookingUpdateWithoutAccontiLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutBookingsNestedInput
    collaboratorPaymentMethod?: PaymentMethodUpdateOneWithoutCollaboratorBookingsNestedInput
    collaborator?: UserUpdateOneWithoutCollaboratorBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutAccontiLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorId?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaboratorPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUpsertWithoutAccontiLogsInput = {
    update: XOR<PaymentMethodUpdateWithoutAccontiLogsInput, PaymentMethodUncheckedUpdateWithoutAccontiLogsInput>
    create: XOR<PaymentMethodCreateWithoutAccontiLogsInput, PaymentMethodUncheckedCreateWithoutAccontiLogsInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutAccontiLogsInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutAccontiLogsInput, PaymentMethodUncheckedUpdateWithoutAccontiLogsInput>
  }

  export type PaymentMethodUpdateWithoutAccontiLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutPaymentMethodNestedInput
    collaboratorBookings?: BookingUpdateManyWithoutCollaboratorPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutAccontiLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutPaymentMethodNestedInput
    collaboratorBookings?: BookingUncheckedUpdateManyWithoutCollaboratorPaymentMethodNestedInput
  }

  export type PropertyCreateWithoutCollaboratorsInput = {
    id?: string
    name: string
    location: string
    address?: string | null
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutCollaboratorsInput = {
    id?: string
    name: string
    location: string
    address?: string | null
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutCollaboratorsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutCollaboratorsInput, PropertyUncheckedCreateWithoutCollaboratorsInput>
  }

  export type UserCreateWithoutPropertyLinksInput = {
    id?: string
    nickname: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaboratorBookings?: BookingCreateNestedManyWithoutCollaboratorInput
    license?: LicenseCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPropertyLinksInput = {
    id?: string
    nickname: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaboratorBookings?: BookingUncheckedCreateNestedManyWithoutCollaboratorInput
    license?: LicenseUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPropertyLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertyLinksInput, UserUncheckedCreateWithoutPropertyLinksInput>
  }

  export type PropertyUpsertWithoutCollaboratorsInput = {
    update: XOR<PropertyUpdateWithoutCollaboratorsInput, PropertyUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<PropertyCreateWithoutCollaboratorsInput, PropertyUncheckedCreateWithoutCollaboratorsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutCollaboratorsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutCollaboratorsInput, PropertyUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type PropertyUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserUpsertWithoutPropertyLinksInput = {
    update: XOR<UserUpdateWithoutPropertyLinksInput, UserUncheckedUpdateWithoutPropertyLinksInput>
    create: XOR<UserCreateWithoutPropertyLinksInput, UserUncheckedCreateWithoutPropertyLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPropertyLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPropertyLinksInput, UserUncheckedUpdateWithoutPropertyLinksInput>
  }

  export type UserUpdateWithoutPropertyLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaboratorBookings?: BookingUpdateManyWithoutCollaboratorNestedInput
    license?: LicenseUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPropertyLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaboratorBookings?: BookingUncheckedUpdateManyWithoutCollaboratorNestedInput
    license?: LicenseUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BookingCreateManyCollaboratorInput = {
    id?: string
    propertyId: string
    roomId: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    paymentMethodId?: string | null
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    collaboratorPaymentMethodId?: string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyCollaboratorCreateManyUserInput = {
    id?: string
    propertyId: string
    roleOnProperty?: $Enums.CollaboratorRole
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutCollaboratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutBookingsNestedInput
    collaboratorPaymentMethod?: PaymentMethodUpdateOneWithoutCollaboratorBookingsNestedInput
    accontiLogs?: AccontoLogUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCollaboratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaboratorPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accontiLogs?: AccontoLogUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutCollaboratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaboratorPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCollaboratorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleOnProperty?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type PropertyCollaboratorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    roleOnProperty?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCollaboratorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    roleOnProperty?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyPropertyInput = {
    id?: string
    name: string
    capacity?: number
    description?: string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyPropertyInput = {
    id?: string
    roomId: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    paymentMethodId?: string | null
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorId?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    collaboratorPaymentMethodId?: string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyCollaboratorCreateManyPropertyInput = {
    id?: string
    userId: string
    roleOnProperty?: $Enums.CollaboratorRole
    createdAt?: Date | string
  }

  export type RoomUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRates?: MonthlyRateUpdateManyWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRates?: MonthlyRateUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutBookingsNestedInput
    collaboratorPaymentMethod?: PaymentMethodUpdateOneWithoutCollaboratorBookingsNestedInput
    collaborator?: UserUpdateOneWithoutCollaboratorBookingsNestedInput
    accontiLogs?: AccontoLogUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorId?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaboratorPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accontiLogs?: AccontoLogUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorId?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaboratorPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCollaboratorUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleOnProperty?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPropertyLinksNestedInput
  }

  export type PropertyCollaboratorUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleOnProperty?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCollaboratorUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleOnProperty?: EnumCollaboratorRoleFieldUpdateOperationsInput | $Enums.CollaboratorRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyRateCreateManyRoomInput = {
    id?: string
    year: number
    month: number
    price: number
    cleaningFee?: number
  }

  export type BookingCreateManyRoomInput = {
    id?: string
    propertyId: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    paymentMethodId?: string | null
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorId?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    collaboratorPaymentMethodId?: string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyRateUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cleaningFee?: FloatFieldUpdateOperationsInput | number
  }

  export type MonthlyRateUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cleaningFee?: FloatFieldUpdateOperationsInput | number
  }

  export type MonthlyRateUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cleaningFee?: FloatFieldUpdateOperationsInput | number
  }

  export type BookingUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutBookingsNestedInput
    collaboratorPaymentMethod?: PaymentMethodUpdateOneWithoutCollaboratorBookingsNestedInput
    collaborator?: UserUpdateOneWithoutCollaboratorBookingsNestedInput
    accontiLogs?: AccontoLogUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorId?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaboratorPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accontiLogs?: AccontoLogUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorId?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaboratorPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccontoLogCreateManyBookingInput = {
    id?: string
    amount: number
    paymentMethodId?: string | null
    type?: string
    savedAt?: Date | string
  }

  export type AccontoLogUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: PaymentMethodUpdateOneWithoutAccontiLogsNestedInput
  }

  export type AccontoLogUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccontoLogUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyPaymentMethodInput = {
    id?: string
    propertyId: string
    roomId: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorId?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    collaboratorPaymentMethodId?: string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyCollaboratorPaymentMethodInput = {
    id?: string
    propertyId: string
    roomId: string
    clientFirstName: string
    clientLastName?: string | null
    clientPhone?: string | null
    clientEmail?: string | null
    guests?: number
    checkIn: Date | string
    checkOut: Date | string
    nights: number
    stayAmount: number
    cleaningAmount?: number
    ownerAmount: number
    feeAmount?: number
    totalAmount: number
    collectedAmount?: number
    paymentMethodId?: string | null
    bookingSource?: string | null
    status?: $Enums.BookingStatus
    notes?: string | null
    collaboratorId?: string | null
    collaboratorPaid?: boolean
    collaboratorPaidAt?: Date | string | null
    quotePdfUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccontoLogCreateManyPaymentMethodInput = {
    id?: string
    bookingId: string
    amount: number
    type?: string
    savedAt?: Date | string
  }

  export type BookingUpdateWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    collaboratorPaymentMethod?: PaymentMethodUpdateOneWithoutCollaboratorBookingsNestedInput
    collaborator?: UserUpdateOneWithoutCollaboratorBookingsNestedInput
    accontiLogs?: AccontoLogUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorId?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaboratorPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accontiLogs?: AccontoLogUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorId?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaboratorPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutCollaboratorPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutBookingsNestedInput
    collaborator?: UserUpdateOneWithoutCollaboratorBookingsNestedInput
    accontiLogs?: AccontoLogUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCollaboratorPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorId?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accontiLogs?: AccontoLogUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutCollaboratorPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    clientFirstName?: StringFieldUpdateOperationsInput | string
    clientLastName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nights?: IntFieldUpdateOperationsInput | number
    stayAmount?: FloatFieldUpdateOperationsInput | number
    cleaningAmount?: FloatFieldUpdateOperationsInput | number
    ownerAmount?: FloatFieldUpdateOperationsInput | number
    feeAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    collectedAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingSource?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorId?: NullableStringFieldUpdateOperationsInput | string | null
    collaboratorPaid?: BoolFieldUpdateOperationsInput | boolean
    collaboratorPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotePdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccontoLogUpdateWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutAccontiLogsNestedInput
  }

  export type AccontoLogUncheckedUpdateWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccontoLogUncheckedUpdateManyWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
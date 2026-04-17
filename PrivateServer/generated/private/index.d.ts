
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
 * Model adm
 * 
 */
export type adm = $Result.DefaultSelection<Prisma.$admPayload>
/**
 * Model atendimento
 * 
 */
export type atendimento = $Result.DefaultSelection<Prisma.$atendimentoPayload>
/**
 * Model funcionario
 * 
 */
export type funcionario = $Result.DefaultSelection<Prisma.$funcionarioPayload>
/**
 * Model pagamento
 * 
 */
export type pagamento = $Result.DefaultSelection<Prisma.$pagamentoPayload>
/**
 * Model pedido
 * 
 */
export type pedido = $Result.DefaultSelection<Prisma.$pedidoPayload>
/**
 * Model prato
 * 
 */
export type prato = $Result.DefaultSelection<Prisma.$pratoPayload>
/**
 * Model pratos_do_dia
 * 
 */
export type pratos_do_dia = $Result.DefaultSelection<Prisma.$pratos_do_diaPayload>
/**
 * Model tempo
 * 
 */
export type tempo = $Result.DefaultSelection<Prisma.$tempoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Adms
 * const adms = await prisma.adm.findMany()
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
   * // Fetch zero or more Adms
   * const adms = await prisma.adm.findMany()
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
   * `prisma.adm`: Exposes CRUD operations for the **adm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adms
    * const adms = await prisma.adm.findMany()
    * ```
    */
  get adm(): Prisma.admDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atendimento`: Exposes CRUD operations for the **atendimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atendimentos
    * const atendimentos = await prisma.atendimento.findMany()
    * ```
    */
  get atendimento(): Prisma.atendimentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.funcionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagamento`: Exposes CRUD operations for the **pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamento.findMany()
    * ```
    */
  get pagamento(): Prisma.pagamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prato`: Exposes CRUD operations for the **prato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pratoes
    * const pratoes = await prisma.prato.findMany()
    * ```
    */
  get prato(): Prisma.pratoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pratos_do_dia`: Exposes CRUD operations for the **pratos_do_dia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pratos_do_dias
    * const pratos_do_dias = await prisma.pratos_do_dia.findMany()
    * ```
    */
  get pratos_do_dia(): Prisma.pratos_do_diaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tempo`: Exposes CRUD operations for the **tempo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tempos
    * const tempos = await prisma.tempo.findMany()
    * ```
    */
  get tempo(): Prisma.tempoDelegate<ExtArgs, ClientOptions>;
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
    adm: 'adm',
    atendimento: 'atendimento',
    funcionario: 'funcionario',
    pagamento: 'pagamento',
    pedido: 'pedido',
    prato: 'prato',
    pratos_do_dia: 'pratos_do_dia',
    tempo: 'tempo'
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
      modelProps: "adm" | "atendimento" | "funcionario" | "pagamento" | "pedido" | "prato" | "pratos_do_dia" | "tempo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      adm: {
        payload: Prisma.$admPayload<ExtArgs>
        fields: Prisma.admFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admPayload>
          }
          findFirst: {
            args: Prisma.admFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admPayload>
          }
          findMany: {
            args: Prisma.admFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admPayload>[]
          }
          create: {
            args: Prisma.admCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admPayload>
          }
          createMany: {
            args: Prisma.admCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.admCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admPayload>[]
          }
          delete: {
            args: Prisma.admDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admPayload>
          }
          update: {
            args: Prisma.admUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admPayload>
          }
          deleteMany: {
            args: Prisma.admDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.admUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admPayload>[]
          }
          upsert: {
            args: Prisma.admUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admPayload>
          }
          aggregate: {
            args: Prisma.AdmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdm>
          }
          groupBy: {
            args: Prisma.admGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmGroupByOutputType>[]
          }
          count: {
            args: Prisma.admCountArgs<ExtArgs>
            result: $Utils.Optional<AdmCountAggregateOutputType> | number
          }
        }
      }
      atendimento: {
        payload: Prisma.$atendimentoPayload<ExtArgs>
        fields: Prisma.atendimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.atendimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atendimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.atendimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atendimentoPayload>
          }
          findFirst: {
            args: Prisma.atendimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atendimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.atendimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atendimentoPayload>
          }
          findMany: {
            args: Prisma.atendimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atendimentoPayload>[]
          }
          create: {
            args: Prisma.atendimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atendimentoPayload>
          }
          createMany: {
            args: Prisma.atendimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.atendimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atendimentoPayload>[]
          }
          delete: {
            args: Prisma.atendimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atendimentoPayload>
          }
          update: {
            args: Prisma.atendimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atendimentoPayload>
          }
          deleteMany: {
            args: Prisma.atendimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.atendimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.atendimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atendimentoPayload>[]
          }
          upsert: {
            args: Prisma.atendimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atendimentoPayload>
          }
          aggregate: {
            args: Prisma.AtendimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtendimento>
          }
          groupBy: {
            args: Prisma.atendimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.atendimentoCountArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoCountAggregateOutputType> | number
          }
        }
      }
      funcionario: {
        payload: Prisma.$funcionarioPayload<ExtArgs>
        fields: Prisma.funcionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.funcionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.funcionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          findFirst: {
            args: Prisma.funcionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.funcionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          findMany: {
            args: Prisma.funcionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>[]
          }
          create: {
            args: Prisma.funcionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          createMany: {
            args: Prisma.funcionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.funcionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>[]
          }
          delete: {
            args: Prisma.funcionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          update: {
            args: Prisma.funcionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          deleteMany: {
            args: Prisma.funcionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.funcionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.funcionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>[]
          }
          upsert: {
            args: Prisma.funcionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.funcionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.funcionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      pagamento: {
        payload: Prisma.$pagamentoPayload<ExtArgs>
        fields: Prisma.pagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          findFirst: {
            args: Prisma.pagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          findMany: {
            args: Prisma.pagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>[]
          }
          create: {
            args: Prisma.pagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          createMany: {
            args: Prisma.pagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pagamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>[]
          }
          delete: {
            args: Prisma.pagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          update: {
            args: Prisma.pagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          deleteMany: {
            args: Prisma.pagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pagamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>[]
          }
          upsert: {
            args: Prisma.pagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento>
          }
          groupBy: {
            args: Prisma.pagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoCountAggregateOutputType> | number
          }
        }
      }
      pedido: {
        payload: Prisma.$pedidoPayload<ExtArgs>
        fields: Prisma.pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findFirst: {
            args: Prisma.pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findMany: {
            args: Prisma.pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          create: {
            args: Prisma.pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          createMany: {
            args: Prisma.pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          delete: {
            args: Prisma.pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          update: {
            args: Prisma.pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          deleteMany: {
            args: Prisma.pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          upsert: {
            args: Prisma.pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      prato: {
        payload: Prisma.$pratoPayload<ExtArgs>
        fields: Prisma.pratoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pratoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pratoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratoPayload>
          }
          findFirst: {
            args: Prisma.pratoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pratoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratoPayload>
          }
          findMany: {
            args: Prisma.pratoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratoPayload>[]
          }
          create: {
            args: Prisma.pratoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratoPayload>
          }
          createMany: {
            args: Prisma.pratoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pratoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratoPayload>[]
          }
          delete: {
            args: Prisma.pratoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratoPayload>
          }
          update: {
            args: Prisma.pratoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratoPayload>
          }
          deleteMany: {
            args: Prisma.pratoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pratoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pratoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratoPayload>[]
          }
          upsert: {
            args: Prisma.pratoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratoPayload>
          }
          aggregate: {
            args: Prisma.PratoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrato>
          }
          groupBy: {
            args: Prisma.pratoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PratoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pratoCountArgs<ExtArgs>
            result: $Utils.Optional<PratoCountAggregateOutputType> | number
          }
        }
      }
      pratos_do_dia: {
        payload: Prisma.$pratos_do_diaPayload<ExtArgs>
        fields: Prisma.pratos_do_diaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pratos_do_diaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratos_do_diaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pratos_do_diaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratos_do_diaPayload>
          }
          findFirst: {
            args: Prisma.pratos_do_diaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratos_do_diaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pratos_do_diaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratos_do_diaPayload>
          }
          findMany: {
            args: Prisma.pratos_do_diaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratos_do_diaPayload>[]
          }
          create: {
            args: Prisma.pratos_do_diaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratos_do_diaPayload>
          }
          createMany: {
            args: Prisma.pratos_do_diaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pratos_do_diaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratos_do_diaPayload>[]
          }
          delete: {
            args: Prisma.pratos_do_diaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratos_do_diaPayload>
          }
          update: {
            args: Prisma.pratos_do_diaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratos_do_diaPayload>
          }
          deleteMany: {
            args: Prisma.pratos_do_diaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pratos_do_diaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pratos_do_diaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratos_do_diaPayload>[]
          }
          upsert: {
            args: Prisma.pratos_do_diaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pratos_do_diaPayload>
          }
          aggregate: {
            args: Prisma.Pratos_do_diaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePratos_do_dia>
          }
          groupBy: {
            args: Prisma.pratos_do_diaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pratos_do_diaGroupByOutputType>[]
          }
          count: {
            args: Prisma.pratos_do_diaCountArgs<ExtArgs>
            result: $Utils.Optional<Pratos_do_diaCountAggregateOutputType> | number
          }
        }
      }
      tempo: {
        payload: Prisma.$tempoPayload<ExtArgs>
        fields: Prisma.tempoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tempoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tempoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tempoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tempoPayload>
          }
          findFirst: {
            args: Prisma.tempoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tempoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tempoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tempoPayload>
          }
          findMany: {
            args: Prisma.tempoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tempoPayload>[]
          }
          create: {
            args: Prisma.tempoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tempoPayload>
          }
          createMany: {
            args: Prisma.tempoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tempoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tempoPayload>[]
          }
          delete: {
            args: Prisma.tempoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tempoPayload>
          }
          update: {
            args: Prisma.tempoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tempoPayload>
          }
          deleteMany: {
            args: Prisma.tempoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tempoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tempoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tempoPayload>[]
          }
          upsert: {
            args: Prisma.tempoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tempoPayload>
          }
          aggregate: {
            args: Prisma.TempoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTempo>
          }
          groupBy: {
            args: Prisma.tempoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TempoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tempoCountArgs<ExtArgs>
            result: $Utils.Optional<TempoCountAggregateOutputType> | number
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
    adm?: admOmit
    atendimento?: atendimentoOmit
    funcionario?: funcionarioOmit
    pagamento?: pagamentoOmit
    pedido?: pedidoOmit
    prato?: pratoOmit
    pratos_do_dia?: pratos_do_diaOmit
    tempo?: tempoOmit
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
   * Count Type AdmCountOutputType
   */

  export type AdmCountOutputType = {
    funcionario: number
  }

  export type AdmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionario?: boolean | AdmCountOutputTypeCountFuncionarioArgs
  }

  // Custom InputTypes
  /**
   * AdmCountOutputType without action
   */
  export type AdmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmCountOutputType
     */
    select?: AdmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdmCountOutputType without action
   */
  export type AdmCountOutputTypeCountFuncionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funcionarioWhereInput
  }


  /**
   * Count Type AtendimentoCountOutputType
   */

  export type AtendimentoCountOutputType = {
    pagamento: number
    pedido: number
  }

  export type AtendimentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento?: boolean | AtendimentoCountOutputTypeCountPagamentoArgs
    pedido?: boolean | AtendimentoCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * AtendimentoCountOutputType without action
   */
  export type AtendimentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtendimentoCountOutputType
     */
    select?: AtendimentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AtendimentoCountOutputType without action
   */
  export type AtendimentoCountOutputTypeCountPagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentoWhereInput
  }

  /**
   * AtendimentoCountOutputType without action
   */
  export type AtendimentoCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }


  /**
   * Count Type FuncionarioCountOutputType
   */

  export type FuncionarioCountOutputType = {
    atendimento: number
  }

  export type FuncionarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | FuncionarioCountOutputTypeCountAtendimentoArgs
  }

  // Custom InputTypes
  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionarioCountOutputType
     */
    select?: FuncionarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeCountAtendimentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: atendimentoWhereInput
  }


  /**
   * Count Type PratoCountOutputType
   */

  export type PratoCountOutputType = {
    pedido: number
    pratos_do_dia: number
  }

  export type PratoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PratoCountOutputTypeCountPedidoArgs
    pratos_do_dia?: boolean | PratoCountOutputTypeCountPratos_do_diaArgs
  }

  // Custom InputTypes
  /**
   * PratoCountOutputType without action
   */
  export type PratoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoCountOutputType
     */
    select?: PratoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PratoCountOutputType without action
   */
  export type PratoCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }

  /**
   * PratoCountOutputType without action
   */
  export type PratoCountOutputTypeCountPratos_do_diaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pratos_do_diaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model adm
   */

  export type AggregateAdm = {
    _count: AdmCountAggregateOutputType | null
    _avg: AdmAvgAggregateOutputType | null
    _sum: AdmSumAggregateOutputType | null
    _min: AdmMinAggregateOutputType | null
    _max: AdmMaxAggregateOutputType | null
  }

  export type AdmAvgAggregateOutputType = {
    adm_id: number | null
  }

  export type AdmSumAggregateOutputType = {
    adm_id: number | null
  }

  export type AdmMinAggregateOutputType = {
    adm_id: number | null
    nome: string | null
    email: string | null
    senha: string | null
  }

  export type AdmMaxAggregateOutputType = {
    adm_id: number | null
    nome: string | null
    email: string | null
    senha: string | null
  }

  export type AdmCountAggregateOutputType = {
    adm_id: number
    nome: number
    email: number
    senha: number
    _all: number
  }


  export type AdmAvgAggregateInputType = {
    adm_id?: true
  }

  export type AdmSumAggregateInputType = {
    adm_id?: true
  }

  export type AdmMinAggregateInputType = {
    adm_id?: true
    nome?: true
    email?: true
    senha?: true
  }

  export type AdmMaxAggregateInputType = {
    adm_id?: true
    nome?: true
    email?: true
    senha?: true
  }

  export type AdmCountAggregateInputType = {
    adm_id?: true
    nome?: true
    email?: true
    senha?: true
    _all?: true
  }

  export type AdmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adm to aggregate.
     */
    where?: admWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adms to fetch.
     */
    orderBy?: admOrderByWithRelationInput | admOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned adms
    **/
    _count?: true | AdmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmMaxAggregateInputType
  }

  export type GetAdmAggregateType<T extends AdmAggregateArgs> = {
        [P in keyof T & keyof AggregateAdm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdm[P]>
      : GetScalarType<T[P], AggregateAdm[P]>
  }




  export type admGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admWhereInput
    orderBy?: admOrderByWithAggregationInput | admOrderByWithAggregationInput[]
    by: AdmScalarFieldEnum[] | AdmScalarFieldEnum
    having?: admScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmCountAggregateInputType | true
    _avg?: AdmAvgAggregateInputType
    _sum?: AdmSumAggregateInputType
    _min?: AdmMinAggregateInputType
    _max?: AdmMaxAggregateInputType
  }

  export type AdmGroupByOutputType = {
    adm_id: number
    nome: string
    email: string
    senha: string
    _count: AdmCountAggregateOutputType | null
    _avg: AdmAvgAggregateOutputType | null
    _sum: AdmSumAggregateOutputType | null
    _min: AdmMinAggregateOutputType | null
    _max: AdmMaxAggregateOutputType | null
  }

  type GetAdmGroupByPayload<T extends admGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmGroupByOutputType[P]>
            : GetScalarType<T[P], AdmGroupByOutputType[P]>
        }
      >
    >


  export type admSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adm_id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    funcionario?: boolean | adm$funcionarioArgs<ExtArgs>
    _count?: boolean | AdmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adm"]>

  export type admSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adm_id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["adm"]>

  export type admSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adm_id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["adm"]>

  export type admSelectScalar = {
    adm_id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
  }

  export type admOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"adm_id" | "nome" | "email" | "senha", ExtArgs["result"]["adm"]>
  export type admInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionario?: boolean | adm$funcionarioArgs<ExtArgs>
    _count?: boolean | AdmCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type admIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type admIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $admPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "adm"
    objects: {
      funcionario: Prisma.$funcionarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      adm_id: number
      nome: string
      email: string
      senha: string
    }, ExtArgs["result"]["adm"]>
    composites: {}
  }

  type admGetPayload<S extends boolean | null | undefined | admDefaultArgs> = $Result.GetResult<Prisma.$admPayload, S>

  type admCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdmCountAggregateInputType | true
    }

  export interface admDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['adm'], meta: { name: 'adm' } }
    /**
     * Find zero or one Adm that matches the filter.
     * @param {admFindUniqueArgs} args - Arguments to find a Adm
     * @example
     * // Get one Adm
     * const adm = await prisma.adm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admFindUniqueArgs>(args: SelectSubset<T, admFindUniqueArgs<ExtArgs>>): Prisma__admClient<$Result.GetResult<Prisma.$admPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admFindUniqueOrThrowArgs} args - Arguments to find a Adm
     * @example
     * // Get one Adm
     * const adm = await prisma.adm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admFindUniqueOrThrowArgs>(args: SelectSubset<T, admFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admClient<$Result.GetResult<Prisma.$admPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admFindFirstArgs} args - Arguments to find a Adm
     * @example
     * // Get one Adm
     * const adm = await prisma.adm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admFindFirstArgs>(args?: SelectSubset<T, admFindFirstArgs<ExtArgs>>): Prisma__admClient<$Result.GetResult<Prisma.$admPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admFindFirstOrThrowArgs} args - Arguments to find a Adm
     * @example
     * // Get one Adm
     * const adm = await prisma.adm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admFindFirstOrThrowArgs>(args?: SelectSubset<T, admFindFirstOrThrowArgs<ExtArgs>>): Prisma__admClient<$Result.GetResult<Prisma.$admPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adms
     * const adms = await prisma.adm.findMany()
     * 
     * // Get first 10 Adms
     * const adms = await prisma.adm.findMany({ take: 10 })
     * 
     * // Only select the `adm_id`
     * const admWithAdm_idOnly = await prisma.adm.findMany({ select: { adm_id: true } })
     * 
     */
    findMany<T extends admFindManyArgs>(args?: SelectSubset<T, admFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adm.
     * @param {admCreateArgs} args - Arguments to create a Adm.
     * @example
     * // Create one Adm
     * const Adm = await prisma.adm.create({
     *   data: {
     *     // ... data to create a Adm
     *   }
     * })
     * 
     */
    create<T extends admCreateArgs>(args: SelectSubset<T, admCreateArgs<ExtArgs>>): Prisma__admClient<$Result.GetResult<Prisma.$admPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adms.
     * @param {admCreateManyArgs} args - Arguments to create many Adms.
     * @example
     * // Create many Adms
     * const adm = await prisma.adm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admCreateManyArgs>(args?: SelectSubset<T, admCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adms and returns the data saved in the database.
     * @param {admCreateManyAndReturnArgs} args - Arguments to create many Adms.
     * @example
     * // Create many Adms
     * const adm = await prisma.adm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adms and only return the `adm_id`
     * const admWithAdm_idOnly = await prisma.adm.createManyAndReturn({
     *   select: { adm_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends admCreateManyAndReturnArgs>(args?: SelectSubset<T, admCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adm.
     * @param {admDeleteArgs} args - Arguments to delete one Adm.
     * @example
     * // Delete one Adm
     * const Adm = await prisma.adm.delete({
     *   where: {
     *     // ... filter to delete one Adm
     *   }
     * })
     * 
     */
    delete<T extends admDeleteArgs>(args: SelectSubset<T, admDeleteArgs<ExtArgs>>): Prisma__admClient<$Result.GetResult<Prisma.$admPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adm.
     * @param {admUpdateArgs} args - Arguments to update one Adm.
     * @example
     * // Update one Adm
     * const adm = await prisma.adm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admUpdateArgs>(args: SelectSubset<T, admUpdateArgs<ExtArgs>>): Prisma__admClient<$Result.GetResult<Prisma.$admPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adms.
     * @param {admDeleteManyArgs} args - Arguments to filter Adms to delete.
     * @example
     * // Delete a few Adms
     * const { count } = await prisma.adm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admDeleteManyArgs>(args?: SelectSubset<T, admDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adms
     * const adm = await prisma.adm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admUpdateManyArgs>(args: SelectSubset<T, admUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adms and returns the data updated in the database.
     * @param {admUpdateManyAndReturnArgs} args - Arguments to update many Adms.
     * @example
     * // Update many Adms
     * const adm = await prisma.adm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adms and only return the `adm_id`
     * const admWithAdm_idOnly = await prisma.adm.updateManyAndReturn({
     *   select: { adm_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends admUpdateManyAndReturnArgs>(args: SelectSubset<T, admUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adm.
     * @param {admUpsertArgs} args - Arguments to update or create a Adm.
     * @example
     * // Update or create a Adm
     * const adm = await prisma.adm.upsert({
     *   create: {
     *     // ... data to create a Adm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adm we want to update
     *   }
     * })
     */
    upsert<T extends admUpsertArgs>(args: SelectSubset<T, admUpsertArgs<ExtArgs>>): Prisma__admClient<$Result.GetResult<Prisma.$admPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admCountArgs} args - Arguments to filter Adms to count.
     * @example
     * // Count the number of Adms
     * const count = await prisma.adm.count({
     *   where: {
     *     // ... the filter for the Adms we want to count
     *   }
     * })
    **/
    count<T extends admCountArgs>(
      args?: Subset<T, admCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdmAggregateArgs>(args: Subset<T, AdmAggregateArgs>): Prisma.PrismaPromise<GetAdmAggregateType<T>>

    /**
     * Group by Adm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admGroupByArgs} args - Group by arguments.
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
      T extends admGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admGroupByArgs['orderBy'] }
        : { orderBy?: admGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, admGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the adm model
   */
  readonly fields: admFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for adm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionario<T extends adm$funcionarioArgs<ExtArgs> = {}>(args?: Subset<T, adm$funcionarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the adm model
   */
  interface admFieldRefs {
    readonly adm_id: FieldRef<"adm", 'Int'>
    readonly nome: FieldRef<"adm", 'String'>
    readonly email: FieldRef<"adm", 'String'>
    readonly senha: FieldRef<"adm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * adm findUnique
   */
  export type admFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adm
     */
    select?: admSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adm
     */
    omit?: admOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admInclude<ExtArgs> | null
    /**
     * Filter, which adm to fetch.
     */
    where: admWhereUniqueInput
  }

  /**
   * adm findUniqueOrThrow
   */
  export type admFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adm
     */
    select?: admSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adm
     */
    omit?: admOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admInclude<ExtArgs> | null
    /**
     * Filter, which adm to fetch.
     */
    where: admWhereUniqueInput
  }

  /**
   * adm findFirst
   */
  export type admFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adm
     */
    select?: admSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adm
     */
    omit?: admOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admInclude<ExtArgs> | null
    /**
     * Filter, which adm to fetch.
     */
    where?: admWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adms to fetch.
     */
    orderBy?: admOrderByWithRelationInput | admOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adms.
     */
    cursor?: admWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adms.
     */
    distinct?: AdmScalarFieldEnum | AdmScalarFieldEnum[]
  }

  /**
   * adm findFirstOrThrow
   */
  export type admFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adm
     */
    select?: admSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adm
     */
    omit?: admOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admInclude<ExtArgs> | null
    /**
     * Filter, which adm to fetch.
     */
    where?: admWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adms to fetch.
     */
    orderBy?: admOrderByWithRelationInput | admOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adms.
     */
    cursor?: admWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adms.
     */
    distinct?: AdmScalarFieldEnum | AdmScalarFieldEnum[]
  }

  /**
   * adm findMany
   */
  export type admFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adm
     */
    select?: admSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adm
     */
    omit?: admOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admInclude<ExtArgs> | null
    /**
     * Filter, which adms to fetch.
     */
    where?: admWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adms to fetch.
     */
    orderBy?: admOrderByWithRelationInput | admOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing adms.
     */
    cursor?: admWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adms.
     */
    skip?: number
    distinct?: AdmScalarFieldEnum | AdmScalarFieldEnum[]
  }

  /**
   * adm create
   */
  export type admCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adm
     */
    select?: admSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adm
     */
    omit?: admOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admInclude<ExtArgs> | null
    /**
     * The data needed to create a adm.
     */
    data: XOR<admCreateInput, admUncheckedCreateInput>
  }

  /**
   * adm createMany
   */
  export type admCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many adms.
     */
    data: admCreateManyInput | admCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * adm createManyAndReturn
   */
  export type admCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adm
     */
    select?: admSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adm
     */
    omit?: admOmit<ExtArgs> | null
    /**
     * The data used to create many adms.
     */
    data: admCreateManyInput | admCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * adm update
   */
  export type admUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adm
     */
    select?: admSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adm
     */
    omit?: admOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admInclude<ExtArgs> | null
    /**
     * The data needed to update a adm.
     */
    data: XOR<admUpdateInput, admUncheckedUpdateInput>
    /**
     * Choose, which adm to update.
     */
    where: admWhereUniqueInput
  }

  /**
   * adm updateMany
   */
  export type admUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update adms.
     */
    data: XOR<admUpdateManyMutationInput, admUncheckedUpdateManyInput>
    /**
     * Filter which adms to update
     */
    where?: admWhereInput
    /**
     * Limit how many adms to update.
     */
    limit?: number
  }

  /**
   * adm updateManyAndReturn
   */
  export type admUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adm
     */
    select?: admSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adm
     */
    omit?: admOmit<ExtArgs> | null
    /**
     * The data used to update adms.
     */
    data: XOR<admUpdateManyMutationInput, admUncheckedUpdateManyInput>
    /**
     * Filter which adms to update
     */
    where?: admWhereInput
    /**
     * Limit how many adms to update.
     */
    limit?: number
  }

  /**
   * adm upsert
   */
  export type admUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adm
     */
    select?: admSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adm
     */
    omit?: admOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admInclude<ExtArgs> | null
    /**
     * The filter to search for the adm to update in case it exists.
     */
    where: admWhereUniqueInput
    /**
     * In case the adm found by the `where` argument doesn't exist, create a new adm with this data.
     */
    create: XOR<admCreateInput, admUncheckedCreateInput>
    /**
     * In case the adm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admUpdateInput, admUncheckedUpdateInput>
  }

  /**
   * adm delete
   */
  export type admDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adm
     */
    select?: admSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adm
     */
    omit?: admOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admInclude<ExtArgs> | null
    /**
     * Filter which adm to delete.
     */
    where: admWhereUniqueInput
  }

  /**
   * adm deleteMany
   */
  export type admDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adms to delete
     */
    where?: admWhereInput
    /**
     * Limit how many adms to delete.
     */
    limit?: number
  }

  /**
   * adm.funcionario
   */
  export type adm$funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    where?: funcionarioWhereInput
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    cursor?: funcionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * adm without action
   */
  export type admDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adm
     */
    select?: admSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adm
     */
    omit?: admOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admInclude<ExtArgs> | null
  }


  /**
   * Model atendimento
   */

  export type AggregateAtendimento = {
    _count: AtendimentoCountAggregateOutputType | null
    _avg: AtendimentoAvgAggregateOutputType | null
    _sum: AtendimentoSumAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  export type AtendimentoAvgAggregateOutputType = {
    atendimento_id: number | null
    n_pessoas: number | null
    duracao: number | null
    funcionario_id: number | null
  }

  export type AtendimentoSumAggregateOutputType = {
    atendimento_id: number | null
    n_pessoas: number | null
    duracao: number | null
    funcionario_id: number | null
  }

  export type AtendimentoMinAggregateOutputType = {
    atendimento_id: number | null
    n_pessoas: number | null
    duracao: number | null
    checkin: Date | null
    checkout: Date | null
    funcionario_id: number | null
  }

  export type AtendimentoMaxAggregateOutputType = {
    atendimento_id: number | null
    n_pessoas: number | null
    duracao: number | null
    checkin: Date | null
    checkout: Date | null
    funcionario_id: number | null
  }

  export type AtendimentoCountAggregateOutputType = {
    atendimento_id: number
    n_pessoas: number
    duracao: number
    checkin: number
    checkout: number
    funcionario_id: number
    _all: number
  }


  export type AtendimentoAvgAggregateInputType = {
    atendimento_id?: true
    n_pessoas?: true
    duracao?: true
    funcionario_id?: true
  }

  export type AtendimentoSumAggregateInputType = {
    atendimento_id?: true
    n_pessoas?: true
    duracao?: true
    funcionario_id?: true
  }

  export type AtendimentoMinAggregateInputType = {
    atendimento_id?: true
    n_pessoas?: true
    duracao?: true
    checkin?: true
    checkout?: true
    funcionario_id?: true
  }

  export type AtendimentoMaxAggregateInputType = {
    atendimento_id?: true
    n_pessoas?: true
    duracao?: true
    checkin?: true
    checkout?: true
    funcionario_id?: true
  }

  export type AtendimentoCountAggregateInputType = {
    atendimento_id?: true
    n_pessoas?: true
    duracao?: true
    checkin?: true
    checkout?: true
    funcionario_id?: true
    _all?: true
  }

  export type AtendimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which atendimento to aggregate.
     */
    where?: atendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atendimentos to fetch.
     */
    orderBy?: atendimentoOrderByWithRelationInput | atendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: atendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned atendimentos
    **/
    _count?: true | AtendimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtendimentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtendimentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtendimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtendimentoMaxAggregateInputType
  }

  export type GetAtendimentoAggregateType<T extends AtendimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtendimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtendimento[P]>
      : GetScalarType<T[P], AggregateAtendimento[P]>
  }




  export type atendimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: atendimentoWhereInput
    orderBy?: atendimentoOrderByWithAggregationInput | atendimentoOrderByWithAggregationInput[]
    by: AtendimentoScalarFieldEnum[] | AtendimentoScalarFieldEnum
    having?: atendimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtendimentoCountAggregateInputType | true
    _avg?: AtendimentoAvgAggregateInputType
    _sum?: AtendimentoSumAggregateInputType
    _min?: AtendimentoMinAggregateInputType
    _max?: AtendimentoMaxAggregateInputType
  }

  export type AtendimentoGroupByOutputType = {
    atendimento_id: number
    n_pessoas: number
    duracao: number | null
    checkin: Date
    checkout: Date | null
    funcionario_id: number
    _count: AtendimentoCountAggregateOutputType | null
    _avg: AtendimentoAvgAggregateOutputType | null
    _sum: AtendimentoSumAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  type GetAtendimentoGroupByPayload<T extends atendimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtendimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtendimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
            : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
        }
      >
    >


  export type atendimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    atendimento_id?: boolean
    n_pessoas?: boolean
    duracao?: boolean
    checkin?: boolean
    checkout?: boolean
    funcionario_id?: boolean
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
    pagamento?: boolean | atendimento$pagamentoArgs<ExtArgs>
    pedido?: boolean | atendimento$pedidoArgs<ExtArgs>
    _count?: boolean | AtendimentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type atendimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    atendimento_id?: boolean
    n_pessoas?: boolean
    duracao?: boolean
    checkin?: boolean
    checkout?: boolean
    funcionario_id?: boolean
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type atendimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    atendimento_id?: boolean
    n_pessoas?: boolean
    duracao?: boolean
    checkin?: boolean
    checkout?: boolean
    funcionario_id?: boolean
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type atendimentoSelectScalar = {
    atendimento_id?: boolean
    n_pessoas?: boolean
    duracao?: boolean
    checkin?: boolean
    checkout?: boolean
    funcionario_id?: boolean
  }

  export type atendimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"atendimento_id" | "n_pessoas" | "duracao" | "checkin" | "checkout" | "funcionario_id", ExtArgs["result"]["atendimento"]>
  export type atendimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
    pagamento?: boolean | atendimento$pagamentoArgs<ExtArgs>
    pedido?: boolean | atendimento$pedidoArgs<ExtArgs>
    _count?: boolean | AtendimentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type atendimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
  }
  export type atendimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
  }

  export type $atendimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "atendimento"
    objects: {
      funcionario: Prisma.$funcionarioPayload<ExtArgs>
      pagamento: Prisma.$pagamentoPayload<ExtArgs>[]
      pedido: Prisma.$pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      atendimento_id: number
      n_pessoas: number
      duracao: number | null
      checkin: Date
      checkout: Date | null
      funcionario_id: number
    }, ExtArgs["result"]["atendimento"]>
    composites: {}
  }

  type atendimentoGetPayload<S extends boolean | null | undefined | atendimentoDefaultArgs> = $Result.GetResult<Prisma.$atendimentoPayload, S>

  type atendimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<atendimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtendimentoCountAggregateInputType | true
    }

  export interface atendimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['atendimento'], meta: { name: 'atendimento' } }
    /**
     * Find zero or one Atendimento that matches the filter.
     * @param {atendimentoFindUniqueArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends atendimentoFindUniqueArgs>(args: SelectSubset<T, atendimentoFindUniqueArgs<ExtArgs>>): Prisma__atendimentoClient<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atendimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {atendimentoFindUniqueOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends atendimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, atendimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__atendimentoClient<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atendimentoFindFirstArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends atendimentoFindFirstArgs>(args?: SelectSubset<T, atendimentoFindFirstArgs<ExtArgs>>): Prisma__atendimentoClient<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atendimentoFindFirstOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends atendimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, atendimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__atendimentoClient<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atendimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atendimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atendimentos
     * const atendimentos = await prisma.atendimento.findMany()
     * 
     * // Get first 10 Atendimentos
     * const atendimentos = await prisma.atendimento.findMany({ take: 10 })
     * 
     * // Only select the `atendimento_id`
     * const atendimentoWithAtendimento_idOnly = await prisma.atendimento.findMany({ select: { atendimento_id: true } })
     * 
     */
    findMany<T extends atendimentoFindManyArgs>(args?: SelectSubset<T, atendimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atendimento.
     * @param {atendimentoCreateArgs} args - Arguments to create a Atendimento.
     * @example
     * // Create one Atendimento
     * const Atendimento = await prisma.atendimento.create({
     *   data: {
     *     // ... data to create a Atendimento
     *   }
     * })
     * 
     */
    create<T extends atendimentoCreateArgs>(args: SelectSubset<T, atendimentoCreateArgs<ExtArgs>>): Prisma__atendimentoClient<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atendimentos.
     * @param {atendimentoCreateManyArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends atendimentoCreateManyArgs>(args?: SelectSubset<T, atendimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atendimentos and returns the data saved in the database.
     * @param {atendimentoCreateManyAndReturnArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atendimentos and only return the `atendimento_id`
     * const atendimentoWithAtendimento_idOnly = await prisma.atendimento.createManyAndReturn({
     *   select: { atendimento_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends atendimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, atendimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atendimento.
     * @param {atendimentoDeleteArgs} args - Arguments to delete one Atendimento.
     * @example
     * // Delete one Atendimento
     * const Atendimento = await prisma.atendimento.delete({
     *   where: {
     *     // ... filter to delete one Atendimento
     *   }
     * })
     * 
     */
    delete<T extends atendimentoDeleteArgs>(args: SelectSubset<T, atendimentoDeleteArgs<ExtArgs>>): Prisma__atendimentoClient<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atendimento.
     * @param {atendimentoUpdateArgs} args - Arguments to update one Atendimento.
     * @example
     * // Update one Atendimento
     * const atendimento = await prisma.atendimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends atendimentoUpdateArgs>(args: SelectSubset<T, atendimentoUpdateArgs<ExtArgs>>): Prisma__atendimentoClient<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atendimentos.
     * @param {atendimentoDeleteManyArgs} args - Arguments to filter Atendimentos to delete.
     * @example
     * // Delete a few Atendimentos
     * const { count } = await prisma.atendimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends atendimentoDeleteManyArgs>(args?: SelectSubset<T, atendimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atendimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends atendimentoUpdateManyArgs>(args: SelectSubset<T, atendimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos and returns the data updated in the database.
     * @param {atendimentoUpdateManyAndReturnArgs} args - Arguments to update many Atendimentos.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atendimentos and only return the `atendimento_id`
     * const atendimentoWithAtendimento_idOnly = await prisma.atendimento.updateManyAndReturn({
     *   select: { atendimento_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends atendimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, atendimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atendimento.
     * @param {atendimentoUpsertArgs} args - Arguments to update or create a Atendimento.
     * @example
     * // Update or create a Atendimento
     * const atendimento = await prisma.atendimento.upsert({
     *   create: {
     *     // ... data to create a Atendimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atendimento we want to update
     *   }
     * })
     */
    upsert<T extends atendimentoUpsertArgs>(args: SelectSubset<T, atendimentoUpsertArgs<ExtArgs>>): Prisma__atendimentoClient<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atendimentoCountArgs} args - Arguments to filter Atendimentos to count.
     * @example
     * // Count the number of Atendimentos
     * const count = await prisma.atendimento.count({
     *   where: {
     *     // ... the filter for the Atendimentos we want to count
     *   }
     * })
    **/
    count<T extends atendimentoCountArgs>(
      args?: Subset<T, atendimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtendimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtendimentoAggregateArgs>(args: Subset<T, AtendimentoAggregateArgs>): Prisma.PrismaPromise<GetAtendimentoAggregateType<T>>

    /**
     * Group by Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atendimentoGroupByArgs} args - Group by arguments.
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
      T extends atendimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: atendimentoGroupByArgs['orderBy'] }
        : { orderBy?: atendimentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, atendimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtendimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the atendimento model
   */
  readonly fields: atendimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for atendimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__atendimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionario<T extends funcionarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, funcionarioDefaultArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pagamento<T extends atendimento$pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, atendimento$pagamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedido<T extends atendimento$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, atendimento$pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the atendimento model
   */
  interface atendimentoFieldRefs {
    readonly atendimento_id: FieldRef<"atendimento", 'Int'>
    readonly n_pessoas: FieldRef<"atendimento", 'Int'>
    readonly duracao: FieldRef<"atendimento", 'Int'>
    readonly checkin: FieldRef<"atendimento", 'DateTime'>
    readonly checkout: FieldRef<"atendimento", 'DateTime'>
    readonly funcionario_id: FieldRef<"atendimento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * atendimento findUnique
   */
  export type atendimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atendimento
     */
    select?: atendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atendimento
     */
    omit?: atendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atendimentoInclude<ExtArgs> | null
    /**
     * Filter, which atendimento to fetch.
     */
    where: atendimentoWhereUniqueInput
  }

  /**
   * atendimento findUniqueOrThrow
   */
  export type atendimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atendimento
     */
    select?: atendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atendimento
     */
    omit?: atendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atendimentoInclude<ExtArgs> | null
    /**
     * Filter, which atendimento to fetch.
     */
    where: atendimentoWhereUniqueInput
  }

  /**
   * atendimento findFirst
   */
  export type atendimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atendimento
     */
    select?: atendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atendimento
     */
    omit?: atendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atendimentoInclude<ExtArgs> | null
    /**
     * Filter, which atendimento to fetch.
     */
    where?: atendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atendimentos to fetch.
     */
    orderBy?: atendimentoOrderByWithRelationInput | atendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atendimentos.
     */
    cursor?: atendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * atendimento findFirstOrThrow
   */
  export type atendimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atendimento
     */
    select?: atendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atendimento
     */
    omit?: atendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atendimentoInclude<ExtArgs> | null
    /**
     * Filter, which atendimento to fetch.
     */
    where?: atendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atendimentos to fetch.
     */
    orderBy?: atendimentoOrderByWithRelationInput | atendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atendimentos.
     */
    cursor?: atendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * atendimento findMany
   */
  export type atendimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atendimento
     */
    select?: atendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atendimento
     */
    omit?: atendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atendimentoInclude<ExtArgs> | null
    /**
     * Filter, which atendimentos to fetch.
     */
    where?: atendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atendimentos to fetch.
     */
    orderBy?: atendimentoOrderByWithRelationInput | atendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing atendimentos.
     */
    cursor?: atendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atendimentos.
     */
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * atendimento create
   */
  export type atendimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atendimento
     */
    select?: atendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atendimento
     */
    omit?: atendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atendimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a atendimento.
     */
    data: XOR<atendimentoCreateInput, atendimentoUncheckedCreateInput>
  }

  /**
   * atendimento createMany
   */
  export type atendimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many atendimentos.
     */
    data: atendimentoCreateManyInput | atendimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * atendimento createManyAndReturn
   */
  export type atendimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atendimento
     */
    select?: atendimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the atendimento
     */
    omit?: atendimentoOmit<ExtArgs> | null
    /**
     * The data used to create many atendimentos.
     */
    data: atendimentoCreateManyInput | atendimentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atendimentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * atendimento update
   */
  export type atendimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atendimento
     */
    select?: atendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atendimento
     */
    omit?: atendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atendimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a atendimento.
     */
    data: XOR<atendimentoUpdateInput, atendimentoUncheckedUpdateInput>
    /**
     * Choose, which atendimento to update.
     */
    where: atendimentoWhereUniqueInput
  }

  /**
   * atendimento updateMany
   */
  export type atendimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update atendimentos.
     */
    data: XOR<atendimentoUpdateManyMutationInput, atendimentoUncheckedUpdateManyInput>
    /**
     * Filter which atendimentos to update
     */
    where?: atendimentoWhereInput
    /**
     * Limit how many atendimentos to update.
     */
    limit?: number
  }

  /**
   * atendimento updateManyAndReturn
   */
  export type atendimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atendimento
     */
    select?: atendimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the atendimento
     */
    omit?: atendimentoOmit<ExtArgs> | null
    /**
     * The data used to update atendimentos.
     */
    data: XOR<atendimentoUpdateManyMutationInput, atendimentoUncheckedUpdateManyInput>
    /**
     * Filter which atendimentos to update
     */
    where?: atendimentoWhereInput
    /**
     * Limit how many atendimentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atendimentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * atendimento upsert
   */
  export type atendimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atendimento
     */
    select?: atendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atendimento
     */
    omit?: atendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atendimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the atendimento to update in case it exists.
     */
    where: atendimentoWhereUniqueInput
    /**
     * In case the atendimento found by the `where` argument doesn't exist, create a new atendimento with this data.
     */
    create: XOR<atendimentoCreateInput, atendimentoUncheckedCreateInput>
    /**
     * In case the atendimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<atendimentoUpdateInput, atendimentoUncheckedUpdateInput>
  }

  /**
   * atendimento delete
   */
  export type atendimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atendimento
     */
    select?: atendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atendimento
     */
    omit?: atendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atendimentoInclude<ExtArgs> | null
    /**
     * Filter which atendimento to delete.
     */
    where: atendimentoWhereUniqueInput
  }

  /**
   * atendimento deleteMany
   */
  export type atendimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which atendimentos to delete
     */
    where?: atendimentoWhereInput
    /**
     * Limit how many atendimentos to delete.
     */
    limit?: number
  }

  /**
   * atendimento.pagamento
   */
  export type atendimento$pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    where?: pagamentoWhereInput
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    cursor?: pagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * atendimento.pedido
   */
  export type atendimento$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * atendimento without action
   */
  export type atendimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atendimento
     */
    select?: atendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atendimento
     */
    omit?: atendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atendimentoInclude<ExtArgs> | null
  }


  /**
   * Model funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    funcionario_id: number | null
    adm_id: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    funcionario_id: number | null
    adm_id: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    funcionario_id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    adm_id: number | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    funcionario_id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    adm_id: number | null
  }

  export type FuncionarioCountAggregateOutputType = {
    funcionario_id: number
    nome: number
    email: number
    senha: number
    adm_id: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    funcionario_id?: true
    adm_id?: true
  }

  export type FuncionarioSumAggregateInputType = {
    funcionario_id?: true
    adm_id?: true
  }

  export type FuncionarioMinAggregateInputType = {
    funcionario_id?: true
    nome?: true
    email?: true
    senha?: true
    adm_id?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    funcionario_id?: true
    nome?: true
    email?: true
    senha?: true
    adm_id?: true
  }

  export type FuncionarioCountAggregateInputType = {
    funcionario_id?: true
    nome?: true
    email?: true
    senha?: true
    adm_id?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionario to aggregate.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type funcionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funcionarioWhereInput
    orderBy?: funcionarioOrderByWithAggregationInput | funcionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: funcionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    funcionario_id: number
    nome: string
    email: string
    senha: string
    adm_id: number
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends funcionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type funcionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    funcionario_id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    adm_id?: boolean
    atendimento?: boolean | funcionario$atendimentoArgs<ExtArgs>
    adm?: boolean | admDefaultArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type funcionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    funcionario_id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    adm_id?: boolean
    adm?: boolean | admDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type funcionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    funcionario_id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    adm_id?: boolean
    adm?: boolean | admDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type funcionarioSelectScalar = {
    funcionario_id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    adm_id?: boolean
  }

  export type funcionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"funcionario_id" | "nome" | "email" | "senha" | "adm_id", ExtArgs["result"]["funcionario"]>
  export type funcionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | funcionario$atendimentoArgs<ExtArgs>
    adm?: boolean | admDefaultArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type funcionarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adm?: boolean | admDefaultArgs<ExtArgs>
  }
  export type funcionarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adm?: boolean | admDefaultArgs<ExtArgs>
  }

  export type $funcionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "funcionario"
    objects: {
      atendimento: Prisma.$atendimentoPayload<ExtArgs>[]
      adm: Prisma.$admPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      funcionario_id: number
      nome: string
      email: string
      senha: string
      adm_id: number
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type funcionarioGetPayload<S extends boolean | null | undefined | funcionarioDefaultArgs> = $Result.GetResult<Prisma.$funcionarioPayload, S>

  type funcionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<funcionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface funcionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['funcionario'], meta: { name: 'funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {funcionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends funcionarioFindUniqueArgs>(args: SelectSubset<T, funcionarioFindUniqueArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {funcionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends funcionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, funcionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends funcionarioFindFirstArgs>(args?: SelectSubset<T, funcionarioFindFirstArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends funcionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, funcionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `funcionario_id`
     * const funcionarioWithFuncionario_idOnly = await prisma.funcionario.findMany({ select: { funcionario_id: true } })
     * 
     */
    findMany<T extends funcionarioFindManyArgs>(args?: SelectSubset<T, funcionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {funcionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends funcionarioCreateArgs>(args: SelectSubset<T, funcionarioCreateArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {funcionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends funcionarioCreateManyArgs>(args?: SelectSubset<T, funcionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {funcionarioCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `funcionario_id`
     * const funcionarioWithFuncionario_idOnly = await prisma.funcionario.createManyAndReturn({
     *   select: { funcionario_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends funcionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, funcionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionario.
     * @param {funcionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends funcionarioDeleteArgs>(args: SelectSubset<T, funcionarioDeleteArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {funcionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends funcionarioUpdateArgs>(args: SelectSubset<T, funcionarioUpdateArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {funcionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends funcionarioDeleteManyArgs>(args?: SelectSubset<T, funcionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends funcionarioUpdateManyArgs>(args: SelectSubset<T, funcionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {funcionarioUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `funcionario_id`
     * const funcionarioWithFuncionario_idOnly = await prisma.funcionario.updateManyAndReturn({
     *   select: { funcionario_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends funcionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, funcionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionario.
     * @param {funcionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends funcionarioUpsertArgs>(args: SelectSubset<T, funcionarioUpsertArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends funcionarioCountArgs>(
      args?: Subset<T, funcionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioGroupByArgs} args - Group by arguments.
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
      T extends funcionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: funcionarioGroupByArgs['orderBy'] }
        : { orderBy?: funcionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, funcionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the funcionario model
   */
  readonly fields: funcionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__funcionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atendimento<T extends funcionario$atendimentoArgs<ExtArgs> = {}>(args?: Subset<T, funcionario$atendimentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adm<T extends admDefaultArgs<ExtArgs> = {}>(args?: Subset<T, admDefaultArgs<ExtArgs>>): Prisma__admClient<$Result.GetResult<Prisma.$admPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the funcionario model
   */
  interface funcionarioFieldRefs {
    readonly funcionario_id: FieldRef<"funcionario", 'Int'>
    readonly nome: FieldRef<"funcionario", 'String'>
    readonly email: FieldRef<"funcionario", 'String'>
    readonly senha: FieldRef<"funcionario", 'String'>
    readonly adm_id: FieldRef<"funcionario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * funcionario findUnique
   */
  export type funcionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario findUniqueOrThrow
   */
  export type funcionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario findFirst
   */
  export type funcionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario findFirstOrThrow
   */
  export type funcionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario findMany
   */
  export type funcionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario create
   */
  export type funcionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a funcionario.
     */
    data: XOR<funcionarioCreateInput, funcionarioUncheckedCreateInput>
  }

  /**
   * funcionario createMany
   */
  export type funcionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many funcionarios.
     */
    data: funcionarioCreateManyInput | funcionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * funcionario createManyAndReturn
   */
  export type funcionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * The data used to create many funcionarios.
     */
    data: funcionarioCreateManyInput | funcionarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * funcionario update
   */
  export type funcionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a funcionario.
     */
    data: XOR<funcionarioUpdateInput, funcionarioUncheckedUpdateInput>
    /**
     * Choose, which funcionario to update.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario updateMany
   */
  export type funcionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update funcionarios.
     */
    data: XOR<funcionarioUpdateManyMutationInput, funcionarioUncheckedUpdateManyInput>
    /**
     * Filter which funcionarios to update
     */
    where?: funcionarioWhereInput
    /**
     * Limit how many funcionarios to update.
     */
    limit?: number
  }

  /**
   * funcionario updateManyAndReturn
   */
  export type funcionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * The data used to update funcionarios.
     */
    data: XOR<funcionarioUpdateManyMutationInput, funcionarioUncheckedUpdateManyInput>
    /**
     * Filter which funcionarios to update
     */
    where?: funcionarioWhereInput
    /**
     * Limit how many funcionarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * funcionario upsert
   */
  export type funcionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the funcionario to update in case it exists.
     */
    where: funcionarioWhereUniqueInput
    /**
     * In case the funcionario found by the `where` argument doesn't exist, create a new funcionario with this data.
     */
    create: XOR<funcionarioCreateInput, funcionarioUncheckedCreateInput>
    /**
     * In case the funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<funcionarioUpdateInput, funcionarioUncheckedUpdateInput>
  }

  /**
   * funcionario delete
   */
  export type funcionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter which funcionario to delete.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario deleteMany
   */
  export type funcionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionarios to delete
     */
    where?: funcionarioWhereInput
    /**
     * Limit how many funcionarios to delete.
     */
    limit?: number
  }

  /**
   * funcionario.atendimento
   */
  export type funcionario$atendimentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atendimento
     */
    select?: atendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atendimento
     */
    omit?: atendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atendimentoInclude<ExtArgs> | null
    where?: atendimentoWhereInput
    orderBy?: atendimentoOrderByWithRelationInput | atendimentoOrderByWithRelationInput[]
    cursor?: atendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * funcionario without action
   */
  export type funcionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
  }


  /**
   * Model pagamento
   */

  export type AggregatePagamento = {
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  export type PagamentoAvgAggregateOutputType = {
    pagamento_id: number | null
    valor: Decimal | null
    atendimento_id: number | null
  }

  export type PagamentoSumAggregateOutputType = {
    pagamento_id: number | null
    valor: Decimal | null
    atendimento_id: number | null
  }

  export type PagamentoMinAggregateOutputType = {
    pagamento_id: number | null
    forma: string | null
    valor: Decimal | null
    data_pagamento: Date | null
    atendimento_id: number | null
  }

  export type PagamentoMaxAggregateOutputType = {
    pagamento_id: number | null
    forma: string | null
    valor: Decimal | null
    data_pagamento: Date | null
    atendimento_id: number | null
  }

  export type PagamentoCountAggregateOutputType = {
    pagamento_id: number
    forma: number
    valor: number
    data_pagamento: number
    atendimento_id: number
    _all: number
  }


  export type PagamentoAvgAggregateInputType = {
    pagamento_id?: true
    valor?: true
    atendimento_id?: true
  }

  export type PagamentoSumAggregateInputType = {
    pagamento_id?: true
    valor?: true
    atendimento_id?: true
  }

  export type PagamentoMinAggregateInputType = {
    pagamento_id?: true
    forma?: true
    valor?: true
    data_pagamento?: true
    atendimento_id?: true
  }

  export type PagamentoMaxAggregateInputType = {
    pagamento_id?: true
    forma?: true
    valor?: true
    data_pagamento?: true
    atendimento_id?: true
  }

  export type PagamentoCountAggregateInputType = {
    pagamento_id?: true
    forma?: true
    valor?: true
    data_pagamento?: true
    atendimento_id?: true
    _all?: true
  }

  export type PagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamento to aggregate.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagamentos
    **/
    _count?: true | PagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoMaxAggregateInputType
  }

  export type GetPagamentoAggregateType<T extends PagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento[P]>
      : GetScalarType<T[P], AggregatePagamento[P]>
  }




  export type pagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentoWhereInput
    orderBy?: pagamentoOrderByWithAggregationInput | pagamentoOrderByWithAggregationInput[]
    by: PagamentoScalarFieldEnum[] | PagamentoScalarFieldEnum
    having?: pagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoCountAggregateInputType | true
    _avg?: PagamentoAvgAggregateInputType
    _sum?: PagamentoSumAggregateInputType
    _min?: PagamentoMinAggregateInputType
    _max?: PagamentoMaxAggregateInputType
  }

  export type PagamentoGroupByOutputType = {
    pagamento_id: number
    forma: string
    valor: Decimal
    data_pagamento: Date
    atendimento_id: number
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  type GetPagamentoGroupByPayload<T extends pagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
        }
      >
    >


  export type pagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pagamento_id?: boolean
    forma?: boolean
    valor?: boolean
    data_pagamento?: boolean
    atendimento_id?: boolean
    atendimento?: boolean | atendimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type pagamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pagamento_id?: boolean
    forma?: boolean
    valor?: boolean
    data_pagamento?: boolean
    atendimento_id?: boolean
    atendimento?: boolean | atendimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type pagamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pagamento_id?: boolean
    forma?: boolean
    valor?: boolean
    data_pagamento?: boolean
    atendimento_id?: boolean
    atendimento?: boolean | atendimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type pagamentoSelectScalar = {
    pagamento_id?: boolean
    forma?: boolean
    valor?: boolean
    data_pagamento?: boolean
    atendimento_id?: boolean
  }

  export type pagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pagamento_id" | "forma" | "valor" | "data_pagamento" | "atendimento_id", ExtArgs["result"]["pagamento"]>
  export type pagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | atendimentoDefaultArgs<ExtArgs>
  }
  export type pagamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | atendimentoDefaultArgs<ExtArgs>
  }
  export type pagamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | atendimentoDefaultArgs<ExtArgs>
  }

  export type $pagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pagamento"
    objects: {
      atendimento: Prisma.$atendimentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pagamento_id: number
      forma: string
      valor: Prisma.Decimal
      data_pagamento: Date
      atendimento_id: number
    }, ExtArgs["result"]["pagamento"]>
    composites: {}
  }

  type pagamentoGetPayload<S extends boolean | null | undefined | pagamentoDefaultArgs> = $Result.GetResult<Prisma.$pagamentoPayload, S>

  type pagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagamentoCountAggregateInputType | true
    }

  export interface pagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pagamento'], meta: { name: 'pagamento' } }
    /**
     * Find zero or one Pagamento that matches the filter.
     * @param {pagamentoFindUniqueArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagamentoFindUniqueArgs>(args: SelectSubset<T, pagamentoFindUniqueArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pagamentoFindUniqueOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, pagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoFindFirstArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagamentoFindFirstArgs>(args?: SelectSubset<T, pagamentoFindFirstArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoFindFirstOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, pagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamento.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamento.findMany({ take: 10 })
     * 
     * // Only select the `pagamento_id`
     * const pagamentoWithPagamento_idOnly = await prisma.pagamento.findMany({ select: { pagamento_id: true } })
     * 
     */
    findMany<T extends pagamentoFindManyArgs>(args?: SelectSubset<T, pagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagamento.
     * @param {pagamentoCreateArgs} args - Arguments to create a Pagamento.
     * @example
     * // Create one Pagamento
     * const Pagamento = await prisma.pagamento.create({
     *   data: {
     *     // ... data to create a Pagamento
     *   }
     * })
     * 
     */
    create<T extends pagamentoCreateArgs>(args: SelectSubset<T, pagamentoCreateArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagamentos.
     * @param {pagamentoCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagamentoCreateManyArgs>(args?: SelectSubset<T, pagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagamentos and returns the data saved in the database.
     * @param {pagamentoCreateManyAndReturnArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagamentos and only return the `pagamento_id`
     * const pagamentoWithPagamento_idOnly = await prisma.pagamento.createManyAndReturn({
     *   select: { pagamento_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pagamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, pagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagamento.
     * @param {pagamentoDeleteArgs} args - Arguments to delete one Pagamento.
     * @example
     * // Delete one Pagamento
     * const Pagamento = await prisma.pagamento.delete({
     *   where: {
     *     // ... filter to delete one Pagamento
     *   }
     * })
     * 
     */
    delete<T extends pagamentoDeleteArgs>(args: SelectSubset<T, pagamentoDeleteArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagamento.
     * @param {pagamentoUpdateArgs} args - Arguments to update one Pagamento.
     * @example
     * // Update one Pagamento
     * const pagamento = await prisma.pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagamentoUpdateArgs>(args: SelectSubset<T, pagamentoUpdateArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagamentos.
     * @param {pagamentoDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagamentoDeleteManyArgs>(args?: SelectSubset<T, pagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagamentoUpdateManyArgs>(args: SelectSubset<T, pagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos and returns the data updated in the database.
     * @param {pagamentoUpdateManyAndReturnArgs} args - Arguments to update many Pagamentos.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagamentos and only return the `pagamento_id`
     * const pagamentoWithPagamento_idOnly = await prisma.pagamento.updateManyAndReturn({
     *   select: { pagamento_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pagamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, pagamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagamento.
     * @param {pagamentoUpsertArgs} args - Arguments to update or create a Pagamento.
     * @example
     * // Update or create a Pagamento
     * const pagamento = await prisma.pagamento.upsert({
     *   create: {
     *     // ... data to create a Pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento we want to update
     *   }
     * })
     */
    upsert<T extends pagamentoUpsertArgs>(args: SelectSubset<T, pagamentoUpsertArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamento.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends pagamentoCountArgs>(
      args?: Subset<T, pagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentoAggregateArgs>(args: Subset<T, PagamentoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoAggregateType<T>>

    /**
     * Group by Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoGroupByArgs} args - Group by arguments.
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
      T extends pagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagamentoGroupByArgs['orderBy'] }
        : { orderBy?: pagamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pagamento model
   */
  readonly fields: pagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atendimento<T extends atendimentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, atendimentoDefaultArgs<ExtArgs>>): Prisma__atendimentoClient<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pagamento model
   */
  interface pagamentoFieldRefs {
    readonly pagamento_id: FieldRef<"pagamento", 'Int'>
    readonly forma: FieldRef<"pagamento", 'String'>
    readonly valor: FieldRef<"pagamento", 'Decimal'>
    readonly data_pagamento: FieldRef<"pagamento", 'DateTime'>
    readonly atendimento_id: FieldRef<"pagamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pagamento findUnique
   */
  export type pagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento findUniqueOrThrow
   */
  export type pagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento findFirst
   */
  export type pagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamentos.
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * pagamento findFirstOrThrow
   */
  export type pagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamentos.
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * pagamento findMany
   */
  export type pagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagamentos.
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * pagamento create
   */
  export type pagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a pagamento.
     */
    data: XOR<pagamentoCreateInput, pagamentoUncheckedCreateInput>
  }

  /**
   * pagamento createMany
   */
  export type pagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagamentos.
     */
    data: pagamentoCreateManyInput | pagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pagamento createManyAndReturn
   */
  export type pagamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * The data used to create many pagamentos.
     */
    data: pagamentoCreateManyInput | pagamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pagamento update
   */
  export type pagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a pagamento.
     */
    data: XOR<pagamentoUpdateInput, pagamentoUncheckedUpdateInput>
    /**
     * Choose, which pagamento to update.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento updateMany
   */
  export type pagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagamentos.
     */
    data: XOR<pagamentoUpdateManyMutationInput, pagamentoUncheckedUpdateManyInput>
    /**
     * Filter which pagamentos to update
     */
    where?: pagamentoWhereInput
    /**
     * Limit how many pagamentos to update.
     */
    limit?: number
  }

  /**
   * pagamento updateManyAndReturn
   */
  export type pagamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * The data used to update pagamentos.
     */
    data: XOR<pagamentoUpdateManyMutationInput, pagamentoUncheckedUpdateManyInput>
    /**
     * Filter which pagamentos to update
     */
    where?: pagamentoWhereInput
    /**
     * Limit how many pagamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pagamento upsert
   */
  export type pagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the pagamento to update in case it exists.
     */
    where: pagamentoWhereUniqueInput
    /**
     * In case the pagamento found by the `where` argument doesn't exist, create a new pagamento with this data.
     */
    create: XOR<pagamentoCreateInput, pagamentoUncheckedCreateInput>
    /**
     * In case the pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagamentoUpdateInput, pagamentoUncheckedUpdateInput>
  }

  /**
   * pagamento delete
   */
  export type pagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter which pagamento to delete.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento deleteMany
   */
  export type pagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamentos to delete
     */
    where?: pagamentoWhereInput
    /**
     * Limit how many pagamentos to delete.
     */
    limit?: number
  }

  /**
   * pagamento without action
   */
  export type pagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
  }


  /**
   * Model pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    pedido_id: number | null
    prato_id: number | null
    atendimento_id: number | null
    quantidade: number | null
  }

  export type PedidoSumAggregateOutputType = {
    pedido_id: number | null
    prato_id: number | null
    atendimento_id: number | null
    quantidade: number | null
  }

  export type PedidoMinAggregateOutputType = {
    pedido_id: number | null
    prato_id: number | null
    atendimento_id: number | null
    quantidade: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    pedido_id: number | null
    prato_id: number | null
    atendimento_id: number | null
    quantidade: number | null
  }

  export type PedidoCountAggregateOutputType = {
    pedido_id: number
    prato_id: number
    atendimento_id: number
    quantidade: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    pedido_id?: true
    prato_id?: true
    atendimento_id?: true
    quantidade?: true
  }

  export type PedidoSumAggregateInputType = {
    pedido_id?: true
    prato_id?: true
    atendimento_id?: true
    quantidade?: true
  }

  export type PedidoMinAggregateInputType = {
    pedido_id?: true
    prato_id?: true
    atendimento_id?: true
    quantidade?: true
  }

  export type PedidoMaxAggregateInputType = {
    pedido_id?: true
    prato_id?: true
    atendimento_id?: true
    quantidade?: true
  }

  export type PedidoCountAggregateInputType = {
    pedido_id?: true
    prato_id?: true
    atendimento_id?: true
    quantidade?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido to aggregate.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithAggregationInput | pedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    pedido_id: number
    prato_id: number
    atendimento_id: number
    quantidade: number
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    prato_id?: boolean
    atendimento_id?: boolean
    quantidade?: boolean
    atendimento?: boolean | atendimentoDefaultArgs<ExtArgs>
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    prato_id?: boolean
    atendimento_id?: boolean
    quantidade?: boolean
    atendimento?: boolean | atendimentoDefaultArgs<ExtArgs>
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    prato_id?: boolean
    atendimento_id?: boolean
    quantidade?: boolean
    atendimento?: boolean | atendimentoDefaultArgs<ExtArgs>
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectScalar = {
    pedido_id?: boolean
    prato_id?: boolean
    atendimento_id?: boolean
    quantidade?: boolean
  }

  export type pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pedido_id" | "prato_id" | "atendimento_id" | "quantidade", ExtArgs["result"]["pedido"]>
  export type pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | atendimentoDefaultArgs<ExtArgs>
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }
  export type pedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | atendimentoDefaultArgs<ExtArgs>
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }
  export type pedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | atendimentoDefaultArgs<ExtArgs>
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }

  export type $pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido"
    objects: {
      atendimento: Prisma.$atendimentoPayload<ExtArgs>
      prato: Prisma.$pratoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pedido_id: number
      prato_id: number
      atendimento_id: number
      quantidade: number
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = $Result.GetResult<Prisma.$pedidoPayload, S>

  type pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido'], meta: { name: 'pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {pedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidoFindUniqueArgs>(args: SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidoFindFirstArgs>(args?: SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `pedido_id`
     * const pedidoWithPedido_idOnly = await prisma.pedido.findMany({ select: { pedido_id: true } })
     * 
     */
    findMany<T extends pedidoFindManyArgs>(args?: SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {pedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends pedidoCreateArgs>(args: SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {pedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedidoCreateManyArgs>(args?: SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {pedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `pedido_id`
     * const pedidoWithPedido_idOnly = await prisma.pedido.createManyAndReturn({
     *   select: { pedido_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, pedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {pedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends pedidoDeleteArgs>(args: SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {pedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedidoUpdateArgs>(args: SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedidoDeleteManyArgs>(args?: SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedidoUpdateManyArgs>(args: SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {pedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `pedido_id`
     * const pedidoWithPedido_idOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { pedido_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, pedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {pedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends pedidoUpsertArgs>(args: SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidoCountArgs>(
      args?: Subset<T, pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoGroupByArgs} args - Group by arguments.
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
      T extends pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidoGroupByArgs['orderBy'] }
        : { orderBy?: pedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido model
   */
  readonly fields: pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atendimento<T extends atendimentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, atendimentoDefaultArgs<ExtArgs>>): Prisma__atendimentoClient<$Result.GetResult<Prisma.$atendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prato<T extends pratoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pratoDefaultArgs<ExtArgs>>): Prisma__pratoClient<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pedido model
   */
  interface pedidoFieldRefs {
    readonly pedido_id: FieldRef<"pedido", 'Int'>
    readonly prato_id: FieldRef<"pedido", 'Int'>
    readonly atendimento_id: FieldRef<"pedido", 'Int'>
    readonly quantidade: FieldRef<"pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pedido findUnique
   */
  export type pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findUniqueOrThrow
   */
  export type pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findFirst
   */
  export type pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findFirstOrThrow
   */
  export type pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findMany
   */
  export type pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido create
   */
  export type pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido.
     */
    data: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
  }

  /**
   * pedido createMany
   */
  export type pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido createManyAndReturn
   */
  export type pedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido update
   */
  export type pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido.
     */
    data: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
    /**
     * Choose, which pedido to update.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido updateMany
   */
  export type pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedido updateManyAndReturn
   */
  export type pedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido upsert
   */
  export type pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido to update in case it exists.
     */
    where: pedidoWhereUniqueInput
    /**
     * In case the pedido found by the `where` argument doesn't exist, create a new pedido with this data.
     */
    create: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
    /**
     * In case the pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
  }

  /**
   * pedido delete
   */
  export type pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter which pedido to delete.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido deleteMany
   */
  export type pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to delete.
     */
    limit?: number
  }

  /**
   * pedido without action
   */
  export type pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
  }


  /**
   * Model prato
   */

  export type AggregatePrato = {
    _count: PratoCountAggregateOutputType | null
    _avg: PratoAvgAggregateOutputType | null
    _sum: PratoSumAggregateOutputType | null
    _min: PratoMinAggregateOutputType | null
    _max: PratoMaxAggregateOutputType | null
  }

  export type PratoAvgAggregateOutputType = {
    prato_id: number | null
    preco: Decimal | null
    custo: Decimal | null
  }

  export type PratoSumAggregateOutputType = {
    prato_id: number | null
    preco: Decimal | null
    custo: Decimal | null
  }

  export type PratoMinAggregateOutputType = {
    prato_id: number | null
    nome: string | null
    preco: Decimal | null
    custo: Decimal | null
  }

  export type PratoMaxAggregateOutputType = {
    prato_id: number | null
    nome: string | null
    preco: Decimal | null
    custo: Decimal | null
  }

  export type PratoCountAggregateOutputType = {
    prato_id: number
    nome: number
    preco: number
    custo: number
    _all: number
  }


  export type PratoAvgAggregateInputType = {
    prato_id?: true
    preco?: true
    custo?: true
  }

  export type PratoSumAggregateInputType = {
    prato_id?: true
    preco?: true
    custo?: true
  }

  export type PratoMinAggregateInputType = {
    prato_id?: true
    nome?: true
    preco?: true
    custo?: true
  }

  export type PratoMaxAggregateInputType = {
    prato_id?: true
    nome?: true
    preco?: true
    custo?: true
  }

  export type PratoCountAggregateInputType = {
    prato_id?: true
    nome?: true
    preco?: true
    custo?: true
    _all?: true
  }

  export type PratoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prato to aggregate.
     */
    where?: pratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pratoes to fetch.
     */
    orderBy?: pratoOrderByWithRelationInput | pratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pratoes
    **/
    _count?: true | PratoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PratoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PratoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PratoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PratoMaxAggregateInputType
  }

  export type GetPratoAggregateType<T extends PratoAggregateArgs> = {
        [P in keyof T & keyof AggregatePrato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrato[P]>
      : GetScalarType<T[P], AggregatePrato[P]>
  }




  export type pratoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pratoWhereInput
    orderBy?: pratoOrderByWithAggregationInput | pratoOrderByWithAggregationInput[]
    by: PratoScalarFieldEnum[] | PratoScalarFieldEnum
    having?: pratoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PratoCountAggregateInputType | true
    _avg?: PratoAvgAggregateInputType
    _sum?: PratoSumAggregateInputType
    _min?: PratoMinAggregateInputType
    _max?: PratoMaxAggregateInputType
  }

  export type PratoGroupByOutputType = {
    prato_id: number
    nome: string
    preco: Decimal
    custo: Decimal
    _count: PratoCountAggregateOutputType | null
    _avg: PratoAvgAggregateOutputType | null
    _sum: PratoSumAggregateOutputType | null
    _min: PratoMinAggregateOutputType | null
    _max: PratoMaxAggregateOutputType | null
  }

  type GetPratoGroupByPayload<T extends pratoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PratoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PratoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PratoGroupByOutputType[P]>
            : GetScalarType<T[P], PratoGroupByOutputType[P]>
        }
      >
    >


  export type pratoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prato_id?: boolean
    nome?: boolean
    preco?: boolean
    custo?: boolean
    pedido?: boolean | prato$pedidoArgs<ExtArgs>
    pratos_do_dia?: boolean | prato$pratos_do_diaArgs<ExtArgs>
    tempo?: boolean | prato$tempoArgs<ExtArgs>
    _count?: boolean | PratoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prato"]>

  export type pratoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prato_id?: boolean
    nome?: boolean
    preco?: boolean
    custo?: boolean
  }, ExtArgs["result"]["prato"]>

  export type pratoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prato_id?: boolean
    nome?: boolean
    preco?: boolean
    custo?: boolean
  }, ExtArgs["result"]["prato"]>

  export type pratoSelectScalar = {
    prato_id?: boolean
    nome?: boolean
    preco?: boolean
    custo?: boolean
  }

  export type pratoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prato_id" | "nome" | "preco" | "custo", ExtArgs["result"]["prato"]>
  export type pratoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | prato$pedidoArgs<ExtArgs>
    pratos_do_dia?: boolean | prato$pratos_do_diaArgs<ExtArgs>
    tempo?: boolean | prato$tempoArgs<ExtArgs>
    _count?: boolean | PratoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pratoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type pratoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $pratoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prato"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>[]
      pratos_do_dia: Prisma.$pratos_do_diaPayload<ExtArgs>[]
      tempo: Prisma.$tempoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      prato_id: number
      nome: string
      preco: Prisma.Decimal
      custo: Prisma.Decimal
    }, ExtArgs["result"]["prato"]>
    composites: {}
  }

  type pratoGetPayload<S extends boolean | null | undefined | pratoDefaultArgs> = $Result.GetResult<Prisma.$pratoPayload, S>

  type pratoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pratoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PratoCountAggregateInputType | true
    }

  export interface pratoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prato'], meta: { name: 'prato' } }
    /**
     * Find zero or one Prato that matches the filter.
     * @param {pratoFindUniqueArgs} args - Arguments to find a Prato
     * @example
     * // Get one Prato
     * const prato = await prisma.prato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pratoFindUniqueArgs>(args: SelectSubset<T, pratoFindUniqueArgs<ExtArgs>>): Prisma__pratoClient<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pratoFindUniqueOrThrowArgs} args - Arguments to find a Prato
     * @example
     * // Get one Prato
     * const prato = await prisma.prato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pratoFindUniqueOrThrowArgs>(args: SelectSubset<T, pratoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pratoClient<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pratoFindFirstArgs} args - Arguments to find a Prato
     * @example
     * // Get one Prato
     * const prato = await prisma.prato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pratoFindFirstArgs>(args?: SelectSubset<T, pratoFindFirstArgs<ExtArgs>>): Prisma__pratoClient<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pratoFindFirstOrThrowArgs} args - Arguments to find a Prato
     * @example
     * // Get one Prato
     * const prato = await prisma.prato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pratoFindFirstOrThrowArgs>(args?: SelectSubset<T, pratoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pratoClient<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pratoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pratoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pratoes
     * const pratoes = await prisma.prato.findMany()
     * 
     * // Get first 10 Pratoes
     * const pratoes = await prisma.prato.findMany({ take: 10 })
     * 
     * // Only select the `prato_id`
     * const pratoWithPrato_idOnly = await prisma.prato.findMany({ select: { prato_id: true } })
     * 
     */
    findMany<T extends pratoFindManyArgs>(args?: SelectSubset<T, pratoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prato.
     * @param {pratoCreateArgs} args - Arguments to create a Prato.
     * @example
     * // Create one Prato
     * const Prato = await prisma.prato.create({
     *   data: {
     *     // ... data to create a Prato
     *   }
     * })
     * 
     */
    create<T extends pratoCreateArgs>(args: SelectSubset<T, pratoCreateArgs<ExtArgs>>): Prisma__pratoClient<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pratoes.
     * @param {pratoCreateManyArgs} args - Arguments to create many Pratoes.
     * @example
     * // Create many Pratoes
     * const prato = await prisma.prato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pratoCreateManyArgs>(args?: SelectSubset<T, pratoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pratoes and returns the data saved in the database.
     * @param {pratoCreateManyAndReturnArgs} args - Arguments to create many Pratoes.
     * @example
     * // Create many Pratoes
     * const prato = await prisma.prato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pratoes and only return the `prato_id`
     * const pratoWithPrato_idOnly = await prisma.prato.createManyAndReturn({
     *   select: { prato_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pratoCreateManyAndReturnArgs>(args?: SelectSubset<T, pratoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prato.
     * @param {pratoDeleteArgs} args - Arguments to delete one Prato.
     * @example
     * // Delete one Prato
     * const Prato = await prisma.prato.delete({
     *   where: {
     *     // ... filter to delete one Prato
     *   }
     * })
     * 
     */
    delete<T extends pratoDeleteArgs>(args: SelectSubset<T, pratoDeleteArgs<ExtArgs>>): Prisma__pratoClient<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prato.
     * @param {pratoUpdateArgs} args - Arguments to update one Prato.
     * @example
     * // Update one Prato
     * const prato = await prisma.prato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pratoUpdateArgs>(args: SelectSubset<T, pratoUpdateArgs<ExtArgs>>): Prisma__pratoClient<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pratoes.
     * @param {pratoDeleteManyArgs} args - Arguments to filter Pratoes to delete.
     * @example
     * // Delete a few Pratoes
     * const { count } = await prisma.prato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pratoDeleteManyArgs>(args?: SelectSubset<T, pratoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pratoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pratoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pratoes
     * const prato = await prisma.prato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pratoUpdateManyArgs>(args: SelectSubset<T, pratoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pratoes and returns the data updated in the database.
     * @param {pratoUpdateManyAndReturnArgs} args - Arguments to update many Pratoes.
     * @example
     * // Update many Pratoes
     * const prato = await prisma.prato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pratoes and only return the `prato_id`
     * const pratoWithPrato_idOnly = await prisma.prato.updateManyAndReturn({
     *   select: { prato_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pratoUpdateManyAndReturnArgs>(args: SelectSubset<T, pratoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prato.
     * @param {pratoUpsertArgs} args - Arguments to update or create a Prato.
     * @example
     * // Update or create a Prato
     * const prato = await prisma.prato.upsert({
     *   create: {
     *     // ... data to create a Prato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prato we want to update
     *   }
     * })
     */
    upsert<T extends pratoUpsertArgs>(args: SelectSubset<T, pratoUpsertArgs<ExtArgs>>): Prisma__pratoClient<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pratoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pratoCountArgs} args - Arguments to filter Pratoes to count.
     * @example
     * // Count the number of Pratoes
     * const count = await prisma.prato.count({
     *   where: {
     *     // ... the filter for the Pratoes we want to count
     *   }
     * })
    **/
    count<T extends pratoCountArgs>(
      args?: Subset<T, pratoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PratoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PratoAggregateArgs>(args: Subset<T, PratoAggregateArgs>): Prisma.PrismaPromise<GetPratoAggregateType<T>>

    /**
     * Group by Prato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pratoGroupByArgs} args - Group by arguments.
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
      T extends pratoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pratoGroupByArgs['orderBy'] }
        : { orderBy?: pratoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pratoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPratoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prato model
   */
  readonly fields: pratoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pratoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends prato$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, prato$pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pratos_do_dia<T extends prato$pratos_do_diaArgs<ExtArgs> = {}>(args?: Subset<T, prato$pratos_do_diaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pratos_do_diaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tempo<T extends prato$tempoArgs<ExtArgs> = {}>(args?: Subset<T, prato$tempoArgs<ExtArgs>>): Prisma__tempoClient<$Result.GetResult<Prisma.$tempoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the prato model
   */
  interface pratoFieldRefs {
    readonly prato_id: FieldRef<"prato", 'Int'>
    readonly nome: FieldRef<"prato", 'String'>
    readonly preco: FieldRef<"prato", 'Decimal'>
    readonly custo: FieldRef<"prato", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * prato findUnique
   */
  export type pratoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prato
     */
    select?: pratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prato
     */
    omit?: pratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratoInclude<ExtArgs> | null
    /**
     * Filter, which prato to fetch.
     */
    where: pratoWhereUniqueInput
  }

  /**
   * prato findUniqueOrThrow
   */
  export type pratoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prato
     */
    select?: pratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prato
     */
    omit?: pratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratoInclude<ExtArgs> | null
    /**
     * Filter, which prato to fetch.
     */
    where: pratoWhereUniqueInput
  }

  /**
   * prato findFirst
   */
  export type pratoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prato
     */
    select?: pratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prato
     */
    omit?: pratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratoInclude<ExtArgs> | null
    /**
     * Filter, which prato to fetch.
     */
    where?: pratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pratoes to fetch.
     */
    orderBy?: pratoOrderByWithRelationInput | pratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pratoes.
     */
    cursor?: pratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pratoes.
     */
    distinct?: PratoScalarFieldEnum | PratoScalarFieldEnum[]
  }

  /**
   * prato findFirstOrThrow
   */
  export type pratoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prato
     */
    select?: pratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prato
     */
    omit?: pratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratoInclude<ExtArgs> | null
    /**
     * Filter, which prato to fetch.
     */
    where?: pratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pratoes to fetch.
     */
    orderBy?: pratoOrderByWithRelationInput | pratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pratoes.
     */
    cursor?: pratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pratoes.
     */
    distinct?: PratoScalarFieldEnum | PratoScalarFieldEnum[]
  }

  /**
   * prato findMany
   */
  export type pratoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prato
     */
    select?: pratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prato
     */
    omit?: pratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratoInclude<ExtArgs> | null
    /**
     * Filter, which pratoes to fetch.
     */
    where?: pratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pratoes to fetch.
     */
    orderBy?: pratoOrderByWithRelationInput | pratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pratoes.
     */
    cursor?: pratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pratoes.
     */
    skip?: number
    distinct?: PratoScalarFieldEnum | PratoScalarFieldEnum[]
  }

  /**
   * prato create
   */
  export type pratoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prato
     */
    select?: pratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prato
     */
    omit?: pratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratoInclude<ExtArgs> | null
    /**
     * The data needed to create a prato.
     */
    data: XOR<pratoCreateInput, pratoUncheckedCreateInput>
  }

  /**
   * prato createMany
   */
  export type pratoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pratoes.
     */
    data: pratoCreateManyInput | pratoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prato createManyAndReturn
   */
  export type pratoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prato
     */
    select?: pratoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prato
     */
    omit?: pratoOmit<ExtArgs> | null
    /**
     * The data used to create many pratoes.
     */
    data: pratoCreateManyInput | pratoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prato update
   */
  export type pratoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prato
     */
    select?: pratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prato
     */
    omit?: pratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratoInclude<ExtArgs> | null
    /**
     * The data needed to update a prato.
     */
    data: XOR<pratoUpdateInput, pratoUncheckedUpdateInput>
    /**
     * Choose, which prato to update.
     */
    where: pratoWhereUniqueInput
  }

  /**
   * prato updateMany
   */
  export type pratoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pratoes.
     */
    data: XOR<pratoUpdateManyMutationInput, pratoUncheckedUpdateManyInput>
    /**
     * Filter which pratoes to update
     */
    where?: pratoWhereInput
    /**
     * Limit how many pratoes to update.
     */
    limit?: number
  }

  /**
   * prato updateManyAndReturn
   */
  export type pratoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prato
     */
    select?: pratoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prato
     */
    omit?: pratoOmit<ExtArgs> | null
    /**
     * The data used to update pratoes.
     */
    data: XOR<pratoUpdateManyMutationInput, pratoUncheckedUpdateManyInput>
    /**
     * Filter which pratoes to update
     */
    where?: pratoWhereInput
    /**
     * Limit how many pratoes to update.
     */
    limit?: number
  }

  /**
   * prato upsert
   */
  export type pratoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prato
     */
    select?: pratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prato
     */
    omit?: pratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratoInclude<ExtArgs> | null
    /**
     * The filter to search for the prato to update in case it exists.
     */
    where: pratoWhereUniqueInput
    /**
     * In case the prato found by the `where` argument doesn't exist, create a new prato with this data.
     */
    create: XOR<pratoCreateInput, pratoUncheckedCreateInput>
    /**
     * In case the prato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pratoUpdateInput, pratoUncheckedUpdateInput>
  }

  /**
   * prato delete
   */
  export type pratoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prato
     */
    select?: pratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prato
     */
    omit?: pratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratoInclude<ExtArgs> | null
    /**
     * Filter which prato to delete.
     */
    where: pratoWhereUniqueInput
  }

  /**
   * prato deleteMany
   */
  export type pratoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pratoes to delete
     */
    where?: pratoWhereInput
    /**
     * Limit how many pratoes to delete.
     */
    limit?: number
  }

  /**
   * prato.pedido
   */
  export type prato$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * prato.pratos_do_dia
   */
  export type prato$pratos_do_diaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratos_do_dia
     */
    select?: pratos_do_diaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratos_do_dia
     */
    omit?: pratos_do_diaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratos_do_diaInclude<ExtArgs> | null
    where?: pratos_do_diaWhereInput
    orderBy?: pratos_do_diaOrderByWithRelationInput | pratos_do_diaOrderByWithRelationInput[]
    cursor?: pratos_do_diaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pratos_do_diaScalarFieldEnum | Pratos_do_diaScalarFieldEnum[]
  }

  /**
   * prato.tempo
   */
  export type prato$tempoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempo
     */
    select?: tempoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tempo
     */
    omit?: tempoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tempoInclude<ExtArgs> | null
    where?: tempoWhereInput
  }

  /**
   * prato without action
   */
  export type pratoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prato
     */
    select?: pratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prato
     */
    omit?: pratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratoInclude<ExtArgs> | null
  }


  /**
   * Model pratos_do_dia
   */

  export type AggregatePratos_do_dia = {
    _count: Pratos_do_diaCountAggregateOutputType | null
    _avg: Pratos_do_diaAvgAggregateOutputType | null
    _sum: Pratos_do_diaSumAggregateOutputType | null
    _min: Pratos_do_diaMinAggregateOutputType | null
    _max: Pratos_do_diaMaxAggregateOutputType | null
  }

  export type Pratos_do_diaAvgAggregateOutputType = {
    prato_id: number | null
    quantidade: number | null
  }

  export type Pratos_do_diaSumAggregateOutputType = {
    prato_id: number | null
    quantidade: number | null
  }

  export type Pratos_do_diaMinAggregateOutputType = {
    prato_id: number | null
    quantidade: number | null
    dia: Date | null
  }

  export type Pratos_do_diaMaxAggregateOutputType = {
    prato_id: number | null
    quantidade: number | null
    dia: Date | null
  }

  export type Pratos_do_diaCountAggregateOutputType = {
    prato_id: number
    quantidade: number
    dia: number
    _all: number
  }


  export type Pratos_do_diaAvgAggregateInputType = {
    prato_id?: true
    quantidade?: true
  }

  export type Pratos_do_diaSumAggregateInputType = {
    prato_id?: true
    quantidade?: true
  }

  export type Pratos_do_diaMinAggregateInputType = {
    prato_id?: true
    quantidade?: true
    dia?: true
  }

  export type Pratos_do_diaMaxAggregateInputType = {
    prato_id?: true
    quantidade?: true
    dia?: true
  }

  export type Pratos_do_diaCountAggregateInputType = {
    prato_id?: true
    quantidade?: true
    dia?: true
    _all?: true
  }

  export type Pratos_do_diaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pratos_do_dia to aggregate.
     */
    where?: pratos_do_diaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pratos_do_dias to fetch.
     */
    orderBy?: pratos_do_diaOrderByWithRelationInput | pratos_do_diaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pratos_do_diaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pratos_do_dias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pratos_do_dias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pratos_do_dias
    **/
    _count?: true | Pratos_do_diaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pratos_do_diaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pratos_do_diaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pratos_do_diaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pratos_do_diaMaxAggregateInputType
  }

  export type GetPratos_do_diaAggregateType<T extends Pratos_do_diaAggregateArgs> = {
        [P in keyof T & keyof AggregatePratos_do_dia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePratos_do_dia[P]>
      : GetScalarType<T[P], AggregatePratos_do_dia[P]>
  }




  export type pratos_do_diaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pratos_do_diaWhereInput
    orderBy?: pratos_do_diaOrderByWithAggregationInput | pratos_do_diaOrderByWithAggregationInput[]
    by: Pratos_do_diaScalarFieldEnum[] | Pratos_do_diaScalarFieldEnum
    having?: pratos_do_diaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pratos_do_diaCountAggregateInputType | true
    _avg?: Pratos_do_diaAvgAggregateInputType
    _sum?: Pratos_do_diaSumAggregateInputType
    _min?: Pratos_do_diaMinAggregateInputType
    _max?: Pratos_do_diaMaxAggregateInputType
  }

  export type Pratos_do_diaGroupByOutputType = {
    prato_id: number
    quantidade: number
    dia: Date
    _count: Pratos_do_diaCountAggregateOutputType | null
    _avg: Pratos_do_diaAvgAggregateOutputType | null
    _sum: Pratos_do_diaSumAggregateOutputType | null
    _min: Pratos_do_diaMinAggregateOutputType | null
    _max: Pratos_do_diaMaxAggregateOutputType | null
  }

  type GetPratos_do_diaGroupByPayload<T extends pratos_do_diaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pratos_do_diaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pratos_do_diaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pratos_do_diaGroupByOutputType[P]>
            : GetScalarType<T[P], Pratos_do_diaGroupByOutputType[P]>
        }
      >
    >


  export type pratos_do_diaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prato_id?: boolean
    quantidade?: boolean
    dia?: boolean
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pratos_do_dia"]>

  export type pratos_do_diaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prato_id?: boolean
    quantidade?: boolean
    dia?: boolean
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pratos_do_dia"]>

  export type pratos_do_diaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prato_id?: boolean
    quantidade?: boolean
    dia?: boolean
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pratos_do_dia"]>

  export type pratos_do_diaSelectScalar = {
    prato_id?: boolean
    quantidade?: boolean
    dia?: boolean
  }

  export type pratos_do_diaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prato_id" | "quantidade" | "dia", ExtArgs["result"]["pratos_do_dia"]>
  export type pratos_do_diaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }
  export type pratos_do_diaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }
  export type pratos_do_diaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }

  export type $pratos_do_diaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pratos_do_dia"
    objects: {
      prato: Prisma.$pratoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      prato_id: number
      quantidade: number
      dia: Date
    }, ExtArgs["result"]["pratos_do_dia"]>
    composites: {}
  }

  type pratos_do_diaGetPayload<S extends boolean | null | undefined | pratos_do_diaDefaultArgs> = $Result.GetResult<Prisma.$pratos_do_diaPayload, S>

  type pratos_do_diaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pratos_do_diaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pratos_do_diaCountAggregateInputType | true
    }

  export interface pratos_do_diaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pratos_do_dia'], meta: { name: 'pratos_do_dia' } }
    /**
     * Find zero or one Pratos_do_dia that matches the filter.
     * @param {pratos_do_diaFindUniqueArgs} args - Arguments to find a Pratos_do_dia
     * @example
     * // Get one Pratos_do_dia
     * const pratos_do_dia = await prisma.pratos_do_dia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pratos_do_diaFindUniqueArgs>(args: SelectSubset<T, pratos_do_diaFindUniqueArgs<ExtArgs>>): Prisma__pratos_do_diaClient<$Result.GetResult<Prisma.$pratos_do_diaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pratos_do_dia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pratos_do_diaFindUniqueOrThrowArgs} args - Arguments to find a Pratos_do_dia
     * @example
     * // Get one Pratos_do_dia
     * const pratos_do_dia = await prisma.pratos_do_dia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pratos_do_diaFindUniqueOrThrowArgs>(args: SelectSubset<T, pratos_do_diaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pratos_do_diaClient<$Result.GetResult<Prisma.$pratos_do_diaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pratos_do_dia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pratos_do_diaFindFirstArgs} args - Arguments to find a Pratos_do_dia
     * @example
     * // Get one Pratos_do_dia
     * const pratos_do_dia = await prisma.pratos_do_dia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pratos_do_diaFindFirstArgs>(args?: SelectSubset<T, pratos_do_diaFindFirstArgs<ExtArgs>>): Prisma__pratos_do_diaClient<$Result.GetResult<Prisma.$pratos_do_diaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pratos_do_dia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pratos_do_diaFindFirstOrThrowArgs} args - Arguments to find a Pratos_do_dia
     * @example
     * // Get one Pratos_do_dia
     * const pratos_do_dia = await prisma.pratos_do_dia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pratos_do_diaFindFirstOrThrowArgs>(args?: SelectSubset<T, pratos_do_diaFindFirstOrThrowArgs<ExtArgs>>): Prisma__pratos_do_diaClient<$Result.GetResult<Prisma.$pratos_do_diaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pratos_do_dias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pratos_do_diaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pratos_do_dias
     * const pratos_do_dias = await prisma.pratos_do_dia.findMany()
     * 
     * // Get first 10 Pratos_do_dias
     * const pratos_do_dias = await prisma.pratos_do_dia.findMany({ take: 10 })
     * 
     * // Only select the `prato_id`
     * const pratos_do_diaWithPrato_idOnly = await prisma.pratos_do_dia.findMany({ select: { prato_id: true } })
     * 
     */
    findMany<T extends pratos_do_diaFindManyArgs>(args?: SelectSubset<T, pratos_do_diaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pratos_do_diaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pratos_do_dia.
     * @param {pratos_do_diaCreateArgs} args - Arguments to create a Pratos_do_dia.
     * @example
     * // Create one Pratos_do_dia
     * const Pratos_do_dia = await prisma.pratos_do_dia.create({
     *   data: {
     *     // ... data to create a Pratos_do_dia
     *   }
     * })
     * 
     */
    create<T extends pratos_do_diaCreateArgs>(args: SelectSubset<T, pratos_do_diaCreateArgs<ExtArgs>>): Prisma__pratos_do_diaClient<$Result.GetResult<Prisma.$pratos_do_diaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pratos_do_dias.
     * @param {pratos_do_diaCreateManyArgs} args - Arguments to create many Pratos_do_dias.
     * @example
     * // Create many Pratos_do_dias
     * const pratos_do_dia = await prisma.pratos_do_dia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pratos_do_diaCreateManyArgs>(args?: SelectSubset<T, pratos_do_diaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pratos_do_dias and returns the data saved in the database.
     * @param {pratos_do_diaCreateManyAndReturnArgs} args - Arguments to create many Pratos_do_dias.
     * @example
     * // Create many Pratos_do_dias
     * const pratos_do_dia = await prisma.pratos_do_dia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pratos_do_dias and only return the `prato_id`
     * const pratos_do_diaWithPrato_idOnly = await prisma.pratos_do_dia.createManyAndReturn({
     *   select: { prato_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pratos_do_diaCreateManyAndReturnArgs>(args?: SelectSubset<T, pratos_do_diaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pratos_do_diaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pratos_do_dia.
     * @param {pratos_do_diaDeleteArgs} args - Arguments to delete one Pratos_do_dia.
     * @example
     * // Delete one Pratos_do_dia
     * const Pratos_do_dia = await prisma.pratos_do_dia.delete({
     *   where: {
     *     // ... filter to delete one Pratos_do_dia
     *   }
     * })
     * 
     */
    delete<T extends pratos_do_diaDeleteArgs>(args: SelectSubset<T, pratos_do_diaDeleteArgs<ExtArgs>>): Prisma__pratos_do_diaClient<$Result.GetResult<Prisma.$pratos_do_diaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pratos_do_dia.
     * @param {pratos_do_diaUpdateArgs} args - Arguments to update one Pratos_do_dia.
     * @example
     * // Update one Pratos_do_dia
     * const pratos_do_dia = await prisma.pratos_do_dia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pratos_do_diaUpdateArgs>(args: SelectSubset<T, pratos_do_diaUpdateArgs<ExtArgs>>): Prisma__pratos_do_diaClient<$Result.GetResult<Prisma.$pratos_do_diaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pratos_do_dias.
     * @param {pratos_do_diaDeleteManyArgs} args - Arguments to filter Pratos_do_dias to delete.
     * @example
     * // Delete a few Pratos_do_dias
     * const { count } = await prisma.pratos_do_dia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pratos_do_diaDeleteManyArgs>(args?: SelectSubset<T, pratos_do_diaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pratos_do_dias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pratos_do_diaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pratos_do_dias
     * const pratos_do_dia = await prisma.pratos_do_dia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pratos_do_diaUpdateManyArgs>(args: SelectSubset<T, pratos_do_diaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pratos_do_dias and returns the data updated in the database.
     * @param {pratos_do_diaUpdateManyAndReturnArgs} args - Arguments to update many Pratos_do_dias.
     * @example
     * // Update many Pratos_do_dias
     * const pratos_do_dia = await prisma.pratos_do_dia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pratos_do_dias and only return the `prato_id`
     * const pratos_do_diaWithPrato_idOnly = await prisma.pratos_do_dia.updateManyAndReturn({
     *   select: { prato_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pratos_do_diaUpdateManyAndReturnArgs>(args: SelectSubset<T, pratos_do_diaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pratos_do_diaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pratos_do_dia.
     * @param {pratos_do_diaUpsertArgs} args - Arguments to update or create a Pratos_do_dia.
     * @example
     * // Update or create a Pratos_do_dia
     * const pratos_do_dia = await prisma.pratos_do_dia.upsert({
     *   create: {
     *     // ... data to create a Pratos_do_dia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pratos_do_dia we want to update
     *   }
     * })
     */
    upsert<T extends pratos_do_diaUpsertArgs>(args: SelectSubset<T, pratos_do_diaUpsertArgs<ExtArgs>>): Prisma__pratos_do_diaClient<$Result.GetResult<Prisma.$pratos_do_diaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pratos_do_dias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pratos_do_diaCountArgs} args - Arguments to filter Pratos_do_dias to count.
     * @example
     * // Count the number of Pratos_do_dias
     * const count = await prisma.pratos_do_dia.count({
     *   where: {
     *     // ... the filter for the Pratos_do_dias we want to count
     *   }
     * })
    **/
    count<T extends pratos_do_diaCountArgs>(
      args?: Subset<T, pratos_do_diaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pratos_do_diaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pratos_do_dia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pratos_do_diaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pratos_do_diaAggregateArgs>(args: Subset<T, Pratos_do_diaAggregateArgs>): Prisma.PrismaPromise<GetPratos_do_diaAggregateType<T>>

    /**
     * Group by Pratos_do_dia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pratos_do_diaGroupByArgs} args - Group by arguments.
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
      T extends pratos_do_diaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pratos_do_diaGroupByArgs['orderBy'] }
        : { orderBy?: pratos_do_diaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pratos_do_diaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPratos_do_diaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pratos_do_dia model
   */
  readonly fields: pratos_do_diaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pratos_do_dia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pratos_do_diaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prato<T extends pratoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pratoDefaultArgs<ExtArgs>>): Prisma__pratoClient<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pratos_do_dia model
   */
  interface pratos_do_diaFieldRefs {
    readonly prato_id: FieldRef<"pratos_do_dia", 'Int'>
    readonly quantidade: FieldRef<"pratos_do_dia", 'Int'>
    readonly dia: FieldRef<"pratos_do_dia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pratos_do_dia findUnique
   */
  export type pratos_do_diaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratos_do_dia
     */
    select?: pratos_do_diaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratos_do_dia
     */
    omit?: pratos_do_diaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratos_do_diaInclude<ExtArgs> | null
    /**
     * Filter, which pratos_do_dia to fetch.
     */
    where: pratos_do_diaWhereUniqueInput
  }

  /**
   * pratos_do_dia findUniqueOrThrow
   */
  export type pratos_do_diaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratos_do_dia
     */
    select?: pratos_do_diaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratos_do_dia
     */
    omit?: pratos_do_diaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratos_do_diaInclude<ExtArgs> | null
    /**
     * Filter, which pratos_do_dia to fetch.
     */
    where: pratos_do_diaWhereUniqueInput
  }

  /**
   * pratos_do_dia findFirst
   */
  export type pratos_do_diaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratos_do_dia
     */
    select?: pratos_do_diaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratos_do_dia
     */
    omit?: pratos_do_diaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratos_do_diaInclude<ExtArgs> | null
    /**
     * Filter, which pratos_do_dia to fetch.
     */
    where?: pratos_do_diaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pratos_do_dias to fetch.
     */
    orderBy?: pratos_do_diaOrderByWithRelationInput | pratos_do_diaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pratos_do_dias.
     */
    cursor?: pratos_do_diaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pratos_do_dias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pratos_do_dias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pratos_do_dias.
     */
    distinct?: Pratos_do_diaScalarFieldEnum | Pratos_do_diaScalarFieldEnum[]
  }

  /**
   * pratos_do_dia findFirstOrThrow
   */
  export type pratos_do_diaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratos_do_dia
     */
    select?: pratos_do_diaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratos_do_dia
     */
    omit?: pratos_do_diaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratos_do_diaInclude<ExtArgs> | null
    /**
     * Filter, which pratos_do_dia to fetch.
     */
    where?: pratos_do_diaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pratos_do_dias to fetch.
     */
    orderBy?: pratos_do_diaOrderByWithRelationInput | pratos_do_diaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pratos_do_dias.
     */
    cursor?: pratos_do_diaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pratos_do_dias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pratos_do_dias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pratos_do_dias.
     */
    distinct?: Pratos_do_diaScalarFieldEnum | Pratos_do_diaScalarFieldEnum[]
  }

  /**
   * pratos_do_dia findMany
   */
  export type pratos_do_diaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratos_do_dia
     */
    select?: pratos_do_diaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratos_do_dia
     */
    omit?: pratos_do_diaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratos_do_diaInclude<ExtArgs> | null
    /**
     * Filter, which pratos_do_dias to fetch.
     */
    where?: pratos_do_diaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pratos_do_dias to fetch.
     */
    orderBy?: pratos_do_diaOrderByWithRelationInput | pratos_do_diaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pratos_do_dias.
     */
    cursor?: pratos_do_diaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pratos_do_dias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pratos_do_dias.
     */
    skip?: number
    distinct?: Pratos_do_diaScalarFieldEnum | Pratos_do_diaScalarFieldEnum[]
  }

  /**
   * pratos_do_dia create
   */
  export type pratos_do_diaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratos_do_dia
     */
    select?: pratos_do_diaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratos_do_dia
     */
    omit?: pratos_do_diaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratos_do_diaInclude<ExtArgs> | null
    /**
     * The data needed to create a pratos_do_dia.
     */
    data: XOR<pratos_do_diaCreateInput, pratos_do_diaUncheckedCreateInput>
  }

  /**
   * pratos_do_dia createMany
   */
  export type pratos_do_diaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pratos_do_dias.
     */
    data: pratos_do_diaCreateManyInput | pratos_do_diaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pratos_do_dia createManyAndReturn
   */
  export type pratos_do_diaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratos_do_dia
     */
    select?: pratos_do_diaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pratos_do_dia
     */
    omit?: pratos_do_diaOmit<ExtArgs> | null
    /**
     * The data used to create many pratos_do_dias.
     */
    data: pratos_do_diaCreateManyInput | pratos_do_diaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratos_do_diaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pratos_do_dia update
   */
  export type pratos_do_diaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratos_do_dia
     */
    select?: pratos_do_diaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratos_do_dia
     */
    omit?: pratos_do_diaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratos_do_diaInclude<ExtArgs> | null
    /**
     * The data needed to update a pratos_do_dia.
     */
    data: XOR<pratos_do_diaUpdateInput, pratos_do_diaUncheckedUpdateInput>
    /**
     * Choose, which pratos_do_dia to update.
     */
    where: pratos_do_diaWhereUniqueInput
  }

  /**
   * pratos_do_dia updateMany
   */
  export type pratos_do_diaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pratos_do_dias.
     */
    data: XOR<pratos_do_diaUpdateManyMutationInput, pratos_do_diaUncheckedUpdateManyInput>
    /**
     * Filter which pratos_do_dias to update
     */
    where?: pratos_do_diaWhereInput
    /**
     * Limit how many pratos_do_dias to update.
     */
    limit?: number
  }

  /**
   * pratos_do_dia updateManyAndReturn
   */
  export type pratos_do_diaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratos_do_dia
     */
    select?: pratos_do_diaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pratos_do_dia
     */
    omit?: pratos_do_diaOmit<ExtArgs> | null
    /**
     * The data used to update pratos_do_dias.
     */
    data: XOR<pratos_do_diaUpdateManyMutationInput, pratos_do_diaUncheckedUpdateManyInput>
    /**
     * Filter which pratos_do_dias to update
     */
    where?: pratos_do_diaWhereInput
    /**
     * Limit how many pratos_do_dias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratos_do_diaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pratos_do_dia upsert
   */
  export type pratos_do_diaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratos_do_dia
     */
    select?: pratos_do_diaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratos_do_dia
     */
    omit?: pratos_do_diaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratos_do_diaInclude<ExtArgs> | null
    /**
     * The filter to search for the pratos_do_dia to update in case it exists.
     */
    where: pratos_do_diaWhereUniqueInput
    /**
     * In case the pratos_do_dia found by the `where` argument doesn't exist, create a new pratos_do_dia with this data.
     */
    create: XOR<pratos_do_diaCreateInput, pratos_do_diaUncheckedCreateInput>
    /**
     * In case the pratos_do_dia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pratos_do_diaUpdateInput, pratos_do_diaUncheckedUpdateInput>
  }

  /**
   * pratos_do_dia delete
   */
  export type pratos_do_diaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratos_do_dia
     */
    select?: pratos_do_diaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratos_do_dia
     */
    omit?: pratos_do_diaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratos_do_diaInclude<ExtArgs> | null
    /**
     * Filter which pratos_do_dia to delete.
     */
    where: pratos_do_diaWhereUniqueInput
  }

  /**
   * pratos_do_dia deleteMany
   */
  export type pratos_do_diaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pratos_do_dias to delete
     */
    where?: pratos_do_diaWhereInput
    /**
     * Limit how many pratos_do_dias to delete.
     */
    limit?: number
  }

  /**
   * pratos_do_dia without action
   */
  export type pratos_do_diaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratos_do_dia
     */
    select?: pratos_do_diaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratos_do_dia
     */
    omit?: pratos_do_diaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pratos_do_diaInclude<ExtArgs> | null
  }


  /**
   * Model tempo
   */

  export type AggregateTempo = {
    _count: TempoCountAggregateOutputType | null
    _avg: TempoAvgAggregateOutputType | null
    _sum: TempoSumAggregateOutputType | null
    _min: TempoMinAggregateOutputType | null
    _max: TempoMaxAggregateOutputType | null
  }

  export type TempoAvgAggregateOutputType = {
    prato_id: number | null
    tempo_preparo: number | null
  }

  export type TempoSumAggregateOutputType = {
    prato_id: number | null
    tempo_preparo: number | null
  }

  export type TempoMinAggregateOutputType = {
    prato_id: number | null
    tempo_preparo: number | null
  }

  export type TempoMaxAggregateOutputType = {
    prato_id: number | null
    tempo_preparo: number | null
  }

  export type TempoCountAggregateOutputType = {
    prato_id: number
    tempo_preparo: number
    _all: number
  }


  export type TempoAvgAggregateInputType = {
    prato_id?: true
    tempo_preparo?: true
  }

  export type TempoSumAggregateInputType = {
    prato_id?: true
    tempo_preparo?: true
  }

  export type TempoMinAggregateInputType = {
    prato_id?: true
    tempo_preparo?: true
  }

  export type TempoMaxAggregateInputType = {
    prato_id?: true
    tempo_preparo?: true
  }

  export type TempoCountAggregateInputType = {
    prato_id?: true
    tempo_preparo?: true
    _all?: true
  }

  export type TempoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tempo to aggregate.
     */
    where?: tempoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tempos to fetch.
     */
    orderBy?: tempoOrderByWithRelationInput | tempoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tempoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tempos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tempos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tempos
    **/
    _count?: true | TempoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TempoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TempoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempoMaxAggregateInputType
  }

  export type GetTempoAggregateType<T extends TempoAggregateArgs> = {
        [P in keyof T & keyof AggregateTempo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempo[P]>
      : GetScalarType<T[P], AggregateTempo[P]>
  }




  export type tempoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tempoWhereInput
    orderBy?: tempoOrderByWithAggregationInput | tempoOrderByWithAggregationInput[]
    by: TempoScalarFieldEnum[] | TempoScalarFieldEnum
    having?: tempoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempoCountAggregateInputType | true
    _avg?: TempoAvgAggregateInputType
    _sum?: TempoSumAggregateInputType
    _min?: TempoMinAggregateInputType
    _max?: TempoMaxAggregateInputType
  }

  export type TempoGroupByOutputType = {
    prato_id: number
    tempo_preparo: number
    _count: TempoCountAggregateOutputType | null
    _avg: TempoAvgAggregateOutputType | null
    _sum: TempoSumAggregateOutputType | null
    _min: TempoMinAggregateOutputType | null
    _max: TempoMaxAggregateOutputType | null
  }

  type GetTempoGroupByPayload<T extends tempoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TempoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempoGroupByOutputType[P]>
            : GetScalarType<T[P], TempoGroupByOutputType[P]>
        }
      >
    >


  export type tempoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prato_id?: boolean
    tempo_preparo?: boolean
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempo"]>

  export type tempoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prato_id?: boolean
    tempo_preparo?: boolean
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempo"]>

  export type tempoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prato_id?: boolean
    tempo_preparo?: boolean
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempo"]>

  export type tempoSelectScalar = {
    prato_id?: boolean
    tempo_preparo?: boolean
  }

  export type tempoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prato_id" | "tempo_preparo", ExtArgs["result"]["tempo"]>
  export type tempoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }
  export type tempoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }
  export type tempoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prato?: boolean | pratoDefaultArgs<ExtArgs>
  }

  export type $tempoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tempo"
    objects: {
      prato: Prisma.$pratoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      prato_id: number
      tempo_preparo: number
    }, ExtArgs["result"]["tempo"]>
    composites: {}
  }

  type tempoGetPayload<S extends boolean | null | undefined | tempoDefaultArgs> = $Result.GetResult<Prisma.$tempoPayload, S>

  type tempoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tempoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TempoCountAggregateInputType | true
    }

  export interface tempoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tempo'], meta: { name: 'tempo' } }
    /**
     * Find zero or one Tempo that matches the filter.
     * @param {tempoFindUniqueArgs} args - Arguments to find a Tempo
     * @example
     * // Get one Tempo
     * const tempo = await prisma.tempo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tempoFindUniqueArgs>(args: SelectSubset<T, tempoFindUniqueArgs<ExtArgs>>): Prisma__tempoClient<$Result.GetResult<Prisma.$tempoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tempo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tempoFindUniqueOrThrowArgs} args - Arguments to find a Tempo
     * @example
     * // Get one Tempo
     * const tempo = await prisma.tempo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tempoFindUniqueOrThrowArgs>(args: SelectSubset<T, tempoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tempoClient<$Result.GetResult<Prisma.$tempoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tempo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tempoFindFirstArgs} args - Arguments to find a Tempo
     * @example
     * // Get one Tempo
     * const tempo = await prisma.tempo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tempoFindFirstArgs>(args?: SelectSubset<T, tempoFindFirstArgs<ExtArgs>>): Prisma__tempoClient<$Result.GetResult<Prisma.$tempoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tempo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tempoFindFirstOrThrowArgs} args - Arguments to find a Tempo
     * @example
     * // Get one Tempo
     * const tempo = await prisma.tempo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tempoFindFirstOrThrowArgs>(args?: SelectSubset<T, tempoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tempoClient<$Result.GetResult<Prisma.$tempoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tempos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tempoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tempos
     * const tempos = await prisma.tempo.findMany()
     * 
     * // Get first 10 Tempos
     * const tempos = await prisma.tempo.findMany({ take: 10 })
     * 
     * // Only select the `prato_id`
     * const tempoWithPrato_idOnly = await prisma.tempo.findMany({ select: { prato_id: true } })
     * 
     */
    findMany<T extends tempoFindManyArgs>(args?: SelectSubset<T, tempoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tempoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tempo.
     * @param {tempoCreateArgs} args - Arguments to create a Tempo.
     * @example
     * // Create one Tempo
     * const Tempo = await prisma.tempo.create({
     *   data: {
     *     // ... data to create a Tempo
     *   }
     * })
     * 
     */
    create<T extends tempoCreateArgs>(args: SelectSubset<T, tempoCreateArgs<ExtArgs>>): Prisma__tempoClient<$Result.GetResult<Prisma.$tempoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tempos.
     * @param {tempoCreateManyArgs} args - Arguments to create many Tempos.
     * @example
     * // Create many Tempos
     * const tempo = await prisma.tempo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tempoCreateManyArgs>(args?: SelectSubset<T, tempoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tempos and returns the data saved in the database.
     * @param {tempoCreateManyAndReturnArgs} args - Arguments to create many Tempos.
     * @example
     * // Create many Tempos
     * const tempo = await prisma.tempo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tempos and only return the `prato_id`
     * const tempoWithPrato_idOnly = await prisma.tempo.createManyAndReturn({
     *   select: { prato_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tempoCreateManyAndReturnArgs>(args?: SelectSubset<T, tempoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tempoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tempo.
     * @param {tempoDeleteArgs} args - Arguments to delete one Tempo.
     * @example
     * // Delete one Tempo
     * const Tempo = await prisma.tempo.delete({
     *   where: {
     *     // ... filter to delete one Tempo
     *   }
     * })
     * 
     */
    delete<T extends tempoDeleteArgs>(args: SelectSubset<T, tempoDeleteArgs<ExtArgs>>): Prisma__tempoClient<$Result.GetResult<Prisma.$tempoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tempo.
     * @param {tempoUpdateArgs} args - Arguments to update one Tempo.
     * @example
     * // Update one Tempo
     * const tempo = await prisma.tempo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tempoUpdateArgs>(args: SelectSubset<T, tempoUpdateArgs<ExtArgs>>): Prisma__tempoClient<$Result.GetResult<Prisma.$tempoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tempos.
     * @param {tempoDeleteManyArgs} args - Arguments to filter Tempos to delete.
     * @example
     * // Delete a few Tempos
     * const { count } = await prisma.tempo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tempoDeleteManyArgs>(args?: SelectSubset<T, tempoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tempos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tempoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tempos
     * const tempo = await prisma.tempo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tempoUpdateManyArgs>(args: SelectSubset<T, tempoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tempos and returns the data updated in the database.
     * @param {tempoUpdateManyAndReturnArgs} args - Arguments to update many Tempos.
     * @example
     * // Update many Tempos
     * const tempo = await prisma.tempo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tempos and only return the `prato_id`
     * const tempoWithPrato_idOnly = await prisma.tempo.updateManyAndReturn({
     *   select: { prato_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tempoUpdateManyAndReturnArgs>(args: SelectSubset<T, tempoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tempoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tempo.
     * @param {tempoUpsertArgs} args - Arguments to update or create a Tempo.
     * @example
     * // Update or create a Tempo
     * const tempo = await prisma.tempo.upsert({
     *   create: {
     *     // ... data to create a Tempo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tempo we want to update
     *   }
     * })
     */
    upsert<T extends tempoUpsertArgs>(args: SelectSubset<T, tempoUpsertArgs<ExtArgs>>): Prisma__tempoClient<$Result.GetResult<Prisma.$tempoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tempos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tempoCountArgs} args - Arguments to filter Tempos to count.
     * @example
     * // Count the number of Tempos
     * const count = await prisma.tempo.count({
     *   where: {
     *     // ... the filter for the Tempos we want to count
     *   }
     * })
    **/
    count<T extends tempoCountArgs>(
      args?: Subset<T, tempoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tempo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TempoAggregateArgs>(args: Subset<T, TempoAggregateArgs>): Prisma.PrismaPromise<GetTempoAggregateType<T>>

    /**
     * Group by Tempo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tempoGroupByArgs} args - Group by arguments.
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
      T extends tempoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tempoGroupByArgs['orderBy'] }
        : { orderBy?: tempoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tempoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tempo model
   */
  readonly fields: tempoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tempo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tempoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prato<T extends pratoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pratoDefaultArgs<ExtArgs>>): Prisma__pratoClient<$Result.GetResult<Prisma.$pratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tempo model
   */
  interface tempoFieldRefs {
    readonly prato_id: FieldRef<"tempo", 'Int'>
    readonly tempo_preparo: FieldRef<"tempo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tempo findUnique
   */
  export type tempoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempo
     */
    select?: tempoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tempo
     */
    omit?: tempoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tempoInclude<ExtArgs> | null
    /**
     * Filter, which tempo to fetch.
     */
    where: tempoWhereUniqueInput
  }

  /**
   * tempo findUniqueOrThrow
   */
  export type tempoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempo
     */
    select?: tempoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tempo
     */
    omit?: tempoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tempoInclude<ExtArgs> | null
    /**
     * Filter, which tempo to fetch.
     */
    where: tempoWhereUniqueInput
  }

  /**
   * tempo findFirst
   */
  export type tempoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempo
     */
    select?: tempoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tempo
     */
    omit?: tempoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tempoInclude<ExtArgs> | null
    /**
     * Filter, which tempo to fetch.
     */
    where?: tempoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tempos to fetch.
     */
    orderBy?: tempoOrderByWithRelationInput | tempoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tempos.
     */
    cursor?: tempoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tempos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tempos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tempos.
     */
    distinct?: TempoScalarFieldEnum | TempoScalarFieldEnum[]
  }

  /**
   * tempo findFirstOrThrow
   */
  export type tempoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempo
     */
    select?: tempoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tempo
     */
    omit?: tempoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tempoInclude<ExtArgs> | null
    /**
     * Filter, which tempo to fetch.
     */
    where?: tempoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tempos to fetch.
     */
    orderBy?: tempoOrderByWithRelationInput | tempoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tempos.
     */
    cursor?: tempoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tempos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tempos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tempos.
     */
    distinct?: TempoScalarFieldEnum | TempoScalarFieldEnum[]
  }

  /**
   * tempo findMany
   */
  export type tempoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempo
     */
    select?: tempoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tempo
     */
    omit?: tempoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tempoInclude<ExtArgs> | null
    /**
     * Filter, which tempos to fetch.
     */
    where?: tempoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tempos to fetch.
     */
    orderBy?: tempoOrderByWithRelationInput | tempoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tempos.
     */
    cursor?: tempoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tempos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tempos.
     */
    skip?: number
    distinct?: TempoScalarFieldEnum | TempoScalarFieldEnum[]
  }

  /**
   * tempo create
   */
  export type tempoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempo
     */
    select?: tempoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tempo
     */
    omit?: tempoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tempoInclude<ExtArgs> | null
    /**
     * The data needed to create a tempo.
     */
    data: XOR<tempoCreateInput, tempoUncheckedCreateInput>
  }

  /**
   * tempo createMany
   */
  export type tempoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tempos.
     */
    data: tempoCreateManyInput | tempoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tempo createManyAndReturn
   */
  export type tempoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempo
     */
    select?: tempoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tempo
     */
    omit?: tempoOmit<ExtArgs> | null
    /**
     * The data used to create many tempos.
     */
    data: tempoCreateManyInput | tempoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tempoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tempo update
   */
  export type tempoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempo
     */
    select?: tempoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tempo
     */
    omit?: tempoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tempoInclude<ExtArgs> | null
    /**
     * The data needed to update a tempo.
     */
    data: XOR<tempoUpdateInput, tempoUncheckedUpdateInput>
    /**
     * Choose, which tempo to update.
     */
    where: tempoWhereUniqueInput
  }

  /**
   * tempo updateMany
   */
  export type tempoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tempos.
     */
    data: XOR<tempoUpdateManyMutationInput, tempoUncheckedUpdateManyInput>
    /**
     * Filter which tempos to update
     */
    where?: tempoWhereInput
    /**
     * Limit how many tempos to update.
     */
    limit?: number
  }

  /**
   * tempo updateManyAndReturn
   */
  export type tempoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempo
     */
    select?: tempoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tempo
     */
    omit?: tempoOmit<ExtArgs> | null
    /**
     * The data used to update tempos.
     */
    data: XOR<tempoUpdateManyMutationInput, tempoUncheckedUpdateManyInput>
    /**
     * Filter which tempos to update
     */
    where?: tempoWhereInput
    /**
     * Limit how many tempos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tempoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tempo upsert
   */
  export type tempoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempo
     */
    select?: tempoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tempo
     */
    omit?: tempoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tempoInclude<ExtArgs> | null
    /**
     * The filter to search for the tempo to update in case it exists.
     */
    where: tempoWhereUniqueInput
    /**
     * In case the tempo found by the `where` argument doesn't exist, create a new tempo with this data.
     */
    create: XOR<tempoCreateInput, tempoUncheckedCreateInput>
    /**
     * In case the tempo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tempoUpdateInput, tempoUncheckedUpdateInput>
  }

  /**
   * tempo delete
   */
  export type tempoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempo
     */
    select?: tempoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tempo
     */
    omit?: tempoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tempoInclude<ExtArgs> | null
    /**
     * Filter which tempo to delete.
     */
    where: tempoWhereUniqueInput
  }

  /**
   * tempo deleteMany
   */
  export type tempoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tempos to delete
     */
    where?: tempoWhereInput
    /**
     * Limit how many tempos to delete.
     */
    limit?: number
  }

  /**
   * tempo without action
   */
  export type tempoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tempo
     */
    select?: tempoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tempo
     */
    omit?: tempoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tempoInclude<ExtArgs> | null
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


  export const AdmScalarFieldEnum: {
    adm_id: 'adm_id',
    nome: 'nome',
    email: 'email',
    senha: 'senha'
  };

  export type AdmScalarFieldEnum = (typeof AdmScalarFieldEnum)[keyof typeof AdmScalarFieldEnum]


  export const AtendimentoScalarFieldEnum: {
    atendimento_id: 'atendimento_id',
    n_pessoas: 'n_pessoas',
    duracao: 'duracao',
    checkin: 'checkin',
    checkout: 'checkout',
    funcionario_id: 'funcionario_id'
  };

  export type AtendimentoScalarFieldEnum = (typeof AtendimentoScalarFieldEnum)[keyof typeof AtendimentoScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    funcionario_id: 'funcionario_id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    adm_id: 'adm_id'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const PagamentoScalarFieldEnum: {
    pagamento_id: 'pagamento_id',
    forma: 'forma',
    valor: 'valor',
    data_pagamento: 'data_pagamento',
    atendimento_id: 'atendimento_id'
  };

  export type PagamentoScalarFieldEnum = (typeof PagamentoScalarFieldEnum)[keyof typeof PagamentoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    pedido_id: 'pedido_id',
    prato_id: 'prato_id',
    atendimento_id: 'atendimento_id',
    quantidade: 'quantidade'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const PratoScalarFieldEnum: {
    prato_id: 'prato_id',
    nome: 'nome',
    preco: 'preco',
    custo: 'custo'
  };

  export type PratoScalarFieldEnum = (typeof PratoScalarFieldEnum)[keyof typeof PratoScalarFieldEnum]


  export const Pratos_do_diaScalarFieldEnum: {
    prato_id: 'prato_id',
    quantidade: 'quantidade',
    dia: 'dia'
  };

  export type Pratos_do_diaScalarFieldEnum = (typeof Pratos_do_diaScalarFieldEnum)[keyof typeof Pratos_do_diaScalarFieldEnum]


  export const TempoScalarFieldEnum: {
    prato_id: 'prato_id',
    tempo_preparo: 'tempo_preparo'
  };

  export type TempoScalarFieldEnum = (typeof TempoScalarFieldEnum)[keyof typeof TempoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type admWhereInput = {
    AND?: admWhereInput | admWhereInput[]
    OR?: admWhereInput[]
    NOT?: admWhereInput | admWhereInput[]
    adm_id?: IntFilter<"adm"> | number
    nome?: StringFilter<"adm"> | string
    email?: StringFilter<"adm"> | string
    senha?: StringFilter<"adm"> | string
    funcionario?: FuncionarioListRelationFilter
  }

  export type admOrderByWithRelationInput = {
    adm_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    funcionario?: funcionarioOrderByRelationAggregateInput
  }

  export type admWhereUniqueInput = Prisma.AtLeast<{
    adm_id?: number
    email?: string
    AND?: admWhereInput | admWhereInput[]
    OR?: admWhereInput[]
    NOT?: admWhereInput | admWhereInput[]
    nome?: StringFilter<"adm"> | string
    senha?: StringFilter<"adm"> | string
    funcionario?: FuncionarioListRelationFilter
  }, "adm_id" | "email">

  export type admOrderByWithAggregationInput = {
    adm_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    _count?: admCountOrderByAggregateInput
    _avg?: admAvgOrderByAggregateInput
    _max?: admMaxOrderByAggregateInput
    _min?: admMinOrderByAggregateInput
    _sum?: admSumOrderByAggregateInput
  }

  export type admScalarWhereWithAggregatesInput = {
    AND?: admScalarWhereWithAggregatesInput | admScalarWhereWithAggregatesInput[]
    OR?: admScalarWhereWithAggregatesInput[]
    NOT?: admScalarWhereWithAggregatesInput | admScalarWhereWithAggregatesInput[]
    adm_id?: IntWithAggregatesFilter<"adm"> | number
    nome?: StringWithAggregatesFilter<"adm"> | string
    email?: StringWithAggregatesFilter<"adm"> | string
    senha?: StringWithAggregatesFilter<"adm"> | string
  }

  export type atendimentoWhereInput = {
    AND?: atendimentoWhereInput | atendimentoWhereInput[]
    OR?: atendimentoWhereInput[]
    NOT?: atendimentoWhereInput | atendimentoWhereInput[]
    atendimento_id?: IntFilter<"atendimento"> | number
    n_pessoas?: IntFilter<"atendimento"> | number
    duracao?: IntNullableFilter<"atendimento"> | number | null
    checkin?: DateTimeFilter<"atendimento"> | Date | string
    checkout?: DateTimeNullableFilter<"atendimento"> | Date | string | null
    funcionario_id?: IntFilter<"atendimento"> | number
    funcionario?: XOR<FuncionarioScalarRelationFilter, funcionarioWhereInput>
    pagamento?: PagamentoListRelationFilter
    pedido?: PedidoListRelationFilter
  }

  export type atendimentoOrderByWithRelationInput = {
    atendimento_id?: SortOrder
    n_pessoas?: SortOrder
    duracao?: SortOrderInput | SortOrder
    checkin?: SortOrder
    checkout?: SortOrderInput | SortOrder
    funcionario_id?: SortOrder
    funcionario?: funcionarioOrderByWithRelationInput
    pagamento?: pagamentoOrderByRelationAggregateInput
    pedido?: pedidoOrderByRelationAggregateInput
  }

  export type atendimentoWhereUniqueInput = Prisma.AtLeast<{
    atendimento_id?: number
    AND?: atendimentoWhereInput | atendimentoWhereInput[]
    OR?: atendimentoWhereInput[]
    NOT?: atendimentoWhereInput | atendimentoWhereInput[]
    n_pessoas?: IntFilter<"atendimento"> | number
    duracao?: IntNullableFilter<"atendimento"> | number | null
    checkin?: DateTimeFilter<"atendimento"> | Date | string
    checkout?: DateTimeNullableFilter<"atendimento"> | Date | string | null
    funcionario_id?: IntFilter<"atendimento"> | number
    funcionario?: XOR<FuncionarioScalarRelationFilter, funcionarioWhereInput>
    pagamento?: PagamentoListRelationFilter
    pedido?: PedidoListRelationFilter
  }, "atendimento_id">

  export type atendimentoOrderByWithAggregationInput = {
    atendimento_id?: SortOrder
    n_pessoas?: SortOrder
    duracao?: SortOrderInput | SortOrder
    checkin?: SortOrder
    checkout?: SortOrderInput | SortOrder
    funcionario_id?: SortOrder
    _count?: atendimentoCountOrderByAggregateInput
    _avg?: atendimentoAvgOrderByAggregateInput
    _max?: atendimentoMaxOrderByAggregateInput
    _min?: atendimentoMinOrderByAggregateInput
    _sum?: atendimentoSumOrderByAggregateInput
  }

  export type atendimentoScalarWhereWithAggregatesInput = {
    AND?: atendimentoScalarWhereWithAggregatesInput | atendimentoScalarWhereWithAggregatesInput[]
    OR?: atendimentoScalarWhereWithAggregatesInput[]
    NOT?: atendimentoScalarWhereWithAggregatesInput | atendimentoScalarWhereWithAggregatesInput[]
    atendimento_id?: IntWithAggregatesFilter<"atendimento"> | number
    n_pessoas?: IntWithAggregatesFilter<"atendimento"> | number
    duracao?: IntNullableWithAggregatesFilter<"atendimento"> | number | null
    checkin?: DateTimeWithAggregatesFilter<"atendimento"> | Date | string
    checkout?: DateTimeNullableWithAggregatesFilter<"atendimento"> | Date | string | null
    funcionario_id?: IntWithAggregatesFilter<"atendimento"> | number
  }

  export type funcionarioWhereInput = {
    AND?: funcionarioWhereInput | funcionarioWhereInput[]
    OR?: funcionarioWhereInput[]
    NOT?: funcionarioWhereInput | funcionarioWhereInput[]
    funcionario_id?: IntFilter<"funcionario"> | number
    nome?: StringFilter<"funcionario"> | string
    email?: StringFilter<"funcionario"> | string
    senha?: StringFilter<"funcionario"> | string
    adm_id?: IntFilter<"funcionario"> | number
    atendimento?: AtendimentoListRelationFilter
    adm?: XOR<AdmScalarRelationFilter, admWhereInput>
  }

  export type funcionarioOrderByWithRelationInput = {
    funcionario_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    adm_id?: SortOrder
    atendimento?: atendimentoOrderByRelationAggregateInput
    adm?: admOrderByWithRelationInput
  }

  export type funcionarioWhereUniqueInput = Prisma.AtLeast<{
    funcionario_id?: number
    email?: string
    AND?: funcionarioWhereInput | funcionarioWhereInput[]
    OR?: funcionarioWhereInput[]
    NOT?: funcionarioWhereInput | funcionarioWhereInput[]
    nome?: StringFilter<"funcionario"> | string
    senha?: StringFilter<"funcionario"> | string
    adm_id?: IntFilter<"funcionario"> | number
    atendimento?: AtendimentoListRelationFilter
    adm?: XOR<AdmScalarRelationFilter, admWhereInput>
  }, "funcionario_id" | "email">

  export type funcionarioOrderByWithAggregationInput = {
    funcionario_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    adm_id?: SortOrder
    _count?: funcionarioCountOrderByAggregateInput
    _avg?: funcionarioAvgOrderByAggregateInput
    _max?: funcionarioMaxOrderByAggregateInput
    _min?: funcionarioMinOrderByAggregateInput
    _sum?: funcionarioSumOrderByAggregateInput
  }

  export type funcionarioScalarWhereWithAggregatesInput = {
    AND?: funcionarioScalarWhereWithAggregatesInput | funcionarioScalarWhereWithAggregatesInput[]
    OR?: funcionarioScalarWhereWithAggregatesInput[]
    NOT?: funcionarioScalarWhereWithAggregatesInput | funcionarioScalarWhereWithAggregatesInput[]
    funcionario_id?: IntWithAggregatesFilter<"funcionario"> | number
    nome?: StringWithAggregatesFilter<"funcionario"> | string
    email?: StringWithAggregatesFilter<"funcionario"> | string
    senha?: StringWithAggregatesFilter<"funcionario"> | string
    adm_id?: IntWithAggregatesFilter<"funcionario"> | number
  }

  export type pagamentoWhereInput = {
    AND?: pagamentoWhereInput | pagamentoWhereInput[]
    OR?: pagamentoWhereInput[]
    NOT?: pagamentoWhereInput | pagamentoWhereInput[]
    pagamento_id?: IntFilter<"pagamento"> | number
    forma?: StringFilter<"pagamento"> | string
    valor?: DecimalFilter<"pagamento"> | Decimal | DecimalJsLike | number | string
    data_pagamento?: DateTimeFilter<"pagamento"> | Date | string
    atendimento_id?: IntFilter<"pagamento"> | number
    atendimento?: XOR<AtendimentoScalarRelationFilter, atendimentoWhereInput>
  }

  export type pagamentoOrderByWithRelationInput = {
    pagamento_id?: SortOrder
    forma?: SortOrder
    valor?: SortOrder
    data_pagamento?: SortOrder
    atendimento_id?: SortOrder
    atendimento?: atendimentoOrderByWithRelationInput
  }

  export type pagamentoWhereUniqueInput = Prisma.AtLeast<{
    pagamento_id?: number
    AND?: pagamentoWhereInput | pagamentoWhereInput[]
    OR?: pagamentoWhereInput[]
    NOT?: pagamentoWhereInput | pagamentoWhereInput[]
    forma?: StringFilter<"pagamento"> | string
    valor?: DecimalFilter<"pagamento"> | Decimal | DecimalJsLike | number | string
    data_pagamento?: DateTimeFilter<"pagamento"> | Date | string
    atendimento_id?: IntFilter<"pagamento"> | number
    atendimento?: XOR<AtendimentoScalarRelationFilter, atendimentoWhereInput>
  }, "pagamento_id">

  export type pagamentoOrderByWithAggregationInput = {
    pagamento_id?: SortOrder
    forma?: SortOrder
    valor?: SortOrder
    data_pagamento?: SortOrder
    atendimento_id?: SortOrder
    _count?: pagamentoCountOrderByAggregateInput
    _avg?: pagamentoAvgOrderByAggregateInput
    _max?: pagamentoMaxOrderByAggregateInput
    _min?: pagamentoMinOrderByAggregateInput
    _sum?: pagamentoSumOrderByAggregateInput
  }

  export type pagamentoScalarWhereWithAggregatesInput = {
    AND?: pagamentoScalarWhereWithAggregatesInput | pagamentoScalarWhereWithAggregatesInput[]
    OR?: pagamentoScalarWhereWithAggregatesInput[]
    NOT?: pagamentoScalarWhereWithAggregatesInput | pagamentoScalarWhereWithAggregatesInput[]
    pagamento_id?: IntWithAggregatesFilter<"pagamento"> | number
    forma?: StringWithAggregatesFilter<"pagamento"> | string
    valor?: DecimalWithAggregatesFilter<"pagamento"> | Decimal | DecimalJsLike | number | string
    data_pagamento?: DateTimeWithAggregatesFilter<"pagamento"> | Date | string
    atendimento_id?: IntWithAggregatesFilter<"pagamento"> | number
  }

  export type pedidoWhereInput = {
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    pedido_id?: IntFilter<"pedido"> | number
    prato_id?: IntFilter<"pedido"> | number
    atendimento_id?: IntFilter<"pedido"> | number
    quantidade?: IntFilter<"pedido"> | number
    atendimento?: XOR<AtendimentoScalarRelationFilter, atendimentoWhereInput>
    prato?: XOR<PratoScalarRelationFilter, pratoWhereInput>
  }

  export type pedidoOrderByWithRelationInput = {
    pedido_id?: SortOrder
    prato_id?: SortOrder
    atendimento_id?: SortOrder
    quantidade?: SortOrder
    atendimento?: atendimentoOrderByWithRelationInput
    prato?: pratoOrderByWithRelationInput
  }

  export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    pedido_id?: number
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    prato_id?: IntFilter<"pedido"> | number
    atendimento_id?: IntFilter<"pedido"> | number
    quantidade?: IntFilter<"pedido"> | number
    atendimento?: XOR<AtendimentoScalarRelationFilter, atendimentoWhereInput>
    prato?: XOR<PratoScalarRelationFilter, pratoWhereInput>
  }, "pedido_id">

  export type pedidoOrderByWithAggregationInput = {
    pedido_id?: SortOrder
    prato_id?: SortOrder
    atendimento_id?: SortOrder
    quantidade?: SortOrder
    _count?: pedidoCountOrderByAggregateInput
    _avg?: pedidoAvgOrderByAggregateInput
    _max?: pedidoMaxOrderByAggregateInput
    _min?: pedidoMinOrderByAggregateInput
    _sum?: pedidoSumOrderByAggregateInput
  }

  export type pedidoScalarWhereWithAggregatesInput = {
    AND?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    OR?: pedidoScalarWhereWithAggregatesInput[]
    NOT?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    pedido_id?: IntWithAggregatesFilter<"pedido"> | number
    prato_id?: IntWithAggregatesFilter<"pedido"> | number
    atendimento_id?: IntWithAggregatesFilter<"pedido"> | number
    quantidade?: IntWithAggregatesFilter<"pedido"> | number
  }

  export type pratoWhereInput = {
    AND?: pratoWhereInput | pratoWhereInput[]
    OR?: pratoWhereInput[]
    NOT?: pratoWhereInput | pratoWhereInput[]
    prato_id?: IntFilter<"prato"> | number
    nome?: StringFilter<"prato"> | string
    preco?: DecimalFilter<"prato"> | Decimal | DecimalJsLike | number | string
    custo?: DecimalFilter<"prato"> | Decimal | DecimalJsLike | number | string
    pedido?: PedidoListRelationFilter
    pratos_do_dia?: Pratos_do_diaListRelationFilter
    tempo?: XOR<TempoNullableScalarRelationFilter, tempoWhereInput> | null
  }

  export type pratoOrderByWithRelationInput = {
    prato_id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    custo?: SortOrder
    pedido?: pedidoOrderByRelationAggregateInput
    pratos_do_dia?: pratos_do_diaOrderByRelationAggregateInput
    tempo?: tempoOrderByWithRelationInput
  }

  export type pratoWhereUniqueInput = Prisma.AtLeast<{
    prato_id?: number
    AND?: pratoWhereInput | pratoWhereInput[]
    OR?: pratoWhereInput[]
    NOT?: pratoWhereInput | pratoWhereInput[]
    nome?: StringFilter<"prato"> | string
    preco?: DecimalFilter<"prato"> | Decimal | DecimalJsLike | number | string
    custo?: DecimalFilter<"prato"> | Decimal | DecimalJsLike | number | string
    pedido?: PedidoListRelationFilter
    pratos_do_dia?: Pratos_do_diaListRelationFilter
    tempo?: XOR<TempoNullableScalarRelationFilter, tempoWhereInput> | null
  }, "prato_id">

  export type pratoOrderByWithAggregationInput = {
    prato_id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    custo?: SortOrder
    _count?: pratoCountOrderByAggregateInput
    _avg?: pratoAvgOrderByAggregateInput
    _max?: pratoMaxOrderByAggregateInput
    _min?: pratoMinOrderByAggregateInput
    _sum?: pratoSumOrderByAggregateInput
  }

  export type pratoScalarWhereWithAggregatesInput = {
    AND?: pratoScalarWhereWithAggregatesInput | pratoScalarWhereWithAggregatesInput[]
    OR?: pratoScalarWhereWithAggregatesInput[]
    NOT?: pratoScalarWhereWithAggregatesInput | pratoScalarWhereWithAggregatesInput[]
    prato_id?: IntWithAggregatesFilter<"prato"> | number
    nome?: StringWithAggregatesFilter<"prato"> | string
    preco?: DecimalWithAggregatesFilter<"prato"> | Decimal | DecimalJsLike | number | string
    custo?: DecimalWithAggregatesFilter<"prato"> | Decimal | DecimalJsLike | number | string
  }

  export type pratos_do_diaWhereInput = {
    AND?: pratos_do_diaWhereInput | pratos_do_diaWhereInput[]
    OR?: pratos_do_diaWhereInput[]
    NOT?: pratos_do_diaWhereInput | pratos_do_diaWhereInput[]
    prato_id?: IntFilter<"pratos_do_dia"> | number
    quantidade?: IntFilter<"pratos_do_dia"> | number
    dia?: DateTimeFilter<"pratos_do_dia"> | Date | string
    prato?: XOR<PratoScalarRelationFilter, pratoWhereInput>
  }

  export type pratos_do_diaOrderByWithRelationInput = {
    prato_id?: SortOrder
    quantidade?: SortOrder
    dia?: SortOrder
    prato?: pratoOrderByWithRelationInput
  }

  export type pratos_do_diaWhereUniqueInput = Prisma.AtLeast<{
    prato_id_dia?: pratos_do_diaPrato_idDiaCompoundUniqueInput
    AND?: pratos_do_diaWhereInput | pratos_do_diaWhereInput[]
    OR?: pratos_do_diaWhereInput[]
    NOT?: pratos_do_diaWhereInput | pratos_do_diaWhereInput[]
    prato_id?: IntFilter<"pratos_do_dia"> | number
    quantidade?: IntFilter<"pratos_do_dia"> | number
    dia?: DateTimeFilter<"pratos_do_dia"> | Date | string
    prato?: XOR<PratoScalarRelationFilter, pratoWhereInput>
  }, "prato_id_dia">

  export type pratos_do_diaOrderByWithAggregationInput = {
    prato_id?: SortOrder
    quantidade?: SortOrder
    dia?: SortOrder
    _count?: pratos_do_diaCountOrderByAggregateInput
    _avg?: pratos_do_diaAvgOrderByAggregateInput
    _max?: pratos_do_diaMaxOrderByAggregateInput
    _min?: pratos_do_diaMinOrderByAggregateInput
    _sum?: pratos_do_diaSumOrderByAggregateInput
  }

  export type pratos_do_diaScalarWhereWithAggregatesInput = {
    AND?: pratos_do_diaScalarWhereWithAggregatesInput | pratos_do_diaScalarWhereWithAggregatesInput[]
    OR?: pratos_do_diaScalarWhereWithAggregatesInput[]
    NOT?: pratos_do_diaScalarWhereWithAggregatesInput | pratos_do_diaScalarWhereWithAggregatesInput[]
    prato_id?: IntWithAggregatesFilter<"pratos_do_dia"> | number
    quantidade?: IntWithAggregatesFilter<"pratos_do_dia"> | number
    dia?: DateTimeWithAggregatesFilter<"pratos_do_dia"> | Date | string
  }

  export type tempoWhereInput = {
    AND?: tempoWhereInput | tempoWhereInput[]
    OR?: tempoWhereInput[]
    NOT?: tempoWhereInput | tempoWhereInput[]
    prato_id?: IntFilter<"tempo"> | number
    tempo_preparo?: IntFilter<"tempo"> | number
    prato?: XOR<PratoScalarRelationFilter, pratoWhereInput>
  }

  export type tempoOrderByWithRelationInput = {
    prato_id?: SortOrder
    tempo_preparo?: SortOrder
    prato?: pratoOrderByWithRelationInput
  }

  export type tempoWhereUniqueInput = Prisma.AtLeast<{
    prato_id?: number
    AND?: tempoWhereInput | tempoWhereInput[]
    OR?: tempoWhereInput[]
    NOT?: tempoWhereInput | tempoWhereInput[]
    tempo_preparo?: IntFilter<"tempo"> | number
    prato?: XOR<PratoScalarRelationFilter, pratoWhereInput>
  }, "prato_id">

  export type tempoOrderByWithAggregationInput = {
    prato_id?: SortOrder
    tempo_preparo?: SortOrder
    _count?: tempoCountOrderByAggregateInput
    _avg?: tempoAvgOrderByAggregateInput
    _max?: tempoMaxOrderByAggregateInput
    _min?: tempoMinOrderByAggregateInput
    _sum?: tempoSumOrderByAggregateInput
  }

  export type tempoScalarWhereWithAggregatesInput = {
    AND?: tempoScalarWhereWithAggregatesInput | tempoScalarWhereWithAggregatesInput[]
    OR?: tempoScalarWhereWithAggregatesInput[]
    NOT?: tempoScalarWhereWithAggregatesInput | tempoScalarWhereWithAggregatesInput[]
    prato_id?: IntWithAggregatesFilter<"tempo"> | number
    tempo_preparo?: IntWithAggregatesFilter<"tempo"> | number
  }

  export type admCreateInput = {
    nome: string
    email: string
    senha: string
    funcionario?: funcionarioCreateNestedManyWithoutAdmInput
  }

  export type admUncheckedCreateInput = {
    adm_id?: number
    nome: string
    email: string
    senha: string
    funcionario?: funcionarioUncheckedCreateNestedManyWithoutAdmInput
  }

  export type admUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    funcionario?: funcionarioUpdateManyWithoutAdmNestedInput
  }

  export type admUncheckedUpdateInput = {
    adm_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    funcionario?: funcionarioUncheckedUpdateManyWithoutAdmNestedInput
  }

  export type admCreateManyInput = {
    adm_id?: number
    nome: string
    email: string
    senha: string
  }

  export type admUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type admUncheckedUpdateManyInput = {
    adm_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type atendimentoCreateInput = {
    n_pessoas: number
    duracao?: number | null
    checkin: Date | string
    checkout?: Date | string | null
    funcionario: funcionarioCreateNestedOneWithoutAtendimentoInput
    pagamento?: pagamentoCreateNestedManyWithoutAtendimentoInput
    pedido?: pedidoCreateNestedManyWithoutAtendimentoInput
  }

  export type atendimentoUncheckedCreateInput = {
    atendimento_id?: number
    n_pessoas: number
    duracao?: number | null
    checkin: Date | string
    checkout?: Date | string | null
    funcionario_id: number
    pagamento?: pagamentoUncheckedCreateNestedManyWithoutAtendimentoInput
    pedido?: pedidoUncheckedCreateNestedManyWithoutAtendimentoInput
  }

  export type atendimentoUpdateInput = {
    n_pessoas?: IntFieldUpdateOperationsInput | number
    duracao?: NullableIntFieldUpdateOperationsInput | number | null
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    funcionario?: funcionarioUpdateOneRequiredWithoutAtendimentoNestedInput
    pagamento?: pagamentoUpdateManyWithoutAtendimentoNestedInput
    pedido?: pedidoUpdateManyWithoutAtendimentoNestedInput
  }

  export type atendimentoUncheckedUpdateInput = {
    atendimento_id?: IntFieldUpdateOperationsInput | number
    n_pessoas?: IntFieldUpdateOperationsInput | number
    duracao?: NullableIntFieldUpdateOperationsInput | number | null
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    funcionario_id?: IntFieldUpdateOperationsInput | number
    pagamento?: pagamentoUncheckedUpdateManyWithoutAtendimentoNestedInput
    pedido?: pedidoUncheckedUpdateManyWithoutAtendimentoNestedInput
  }

  export type atendimentoCreateManyInput = {
    atendimento_id?: number
    n_pessoas: number
    duracao?: number | null
    checkin: Date | string
    checkout?: Date | string | null
    funcionario_id: number
  }

  export type atendimentoUpdateManyMutationInput = {
    n_pessoas?: IntFieldUpdateOperationsInput | number
    duracao?: NullableIntFieldUpdateOperationsInput | number | null
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type atendimentoUncheckedUpdateManyInput = {
    atendimento_id?: IntFieldUpdateOperationsInput | number
    n_pessoas?: IntFieldUpdateOperationsInput | number
    duracao?: NullableIntFieldUpdateOperationsInput | number | null
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    funcionario_id?: IntFieldUpdateOperationsInput | number
  }

  export type funcionarioCreateInput = {
    nome: string
    email: string
    senha: string
    atendimento?: atendimentoCreateNestedManyWithoutFuncionarioInput
    adm: admCreateNestedOneWithoutFuncionarioInput
  }

  export type funcionarioUncheckedCreateInput = {
    funcionario_id?: number
    nome: string
    email: string
    senha: string
    adm_id: number
    atendimento?: atendimentoUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type funcionarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    atendimento?: atendimentoUpdateManyWithoutFuncionarioNestedInput
    adm?: admUpdateOneRequiredWithoutFuncionarioNestedInput
  }

  export type funcionarioUncheckedUpdateInput = {
    funcionario_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    adm_id?: IntFieldUpdateOperationsInput | number
    atendimento?: atendimentoUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type funcionarioCreateManyInput = {
    funcionario_id?: number
    nome: string
    email: string
    senha: string
    adm_id: number
  }

  export type funcionarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type funcionarioUncheckedUpdateManyInput = {
    funcionario_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    adm_id?: IntFieldUpdateOperationsInput | number
  }

  export type pagamentoCreateInput = {
    forma: string
    valor: Decimal | DecimalJsLike | number | string
    data_pagamento: Date | string
    atendimento: atendimentoCreateNestedOneWithoutPagamentoInput
  }

  export type pagamentoUncheckedCreateInput = {
    pagamento_id?: number
    forma: string
    valor: Decimal | DecimalJsLike | number | string
    data_pagamento: Date | string
    atendimento_id: number
  }

  export type pagamentoUpdateInput = {
    forma?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: atendimentoUpdateOneRequiredWithoutPagamentoNestedInput
  }

  export type pagamentoUncheckedUpdateInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    forma?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento_id?: IntFieldUpdateOperationsInput | number
  }

  export type pagamentoCreateManyInput = {
    pagamento_id?: number
    forma: string
    valor: Decimal | DecimalJsLike | number | string
    data_pagamento: Date | string
    atendimento_id: number
  }

  export type pagamentoUpdateManyMutationInput = {
    forma?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagamentoUncheckedUpdateManyInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    forma?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento_id?: IntFieldUpdateOperationsInput | number
  }

  export type pedidoCreateInput = {
    quantidade: number
    atendimento: atendimentoCreateNestedOneWithoutPedidoInput
    prato: pratoCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateInput = {
    pedido_id?: number
    prato_id: number
    atendimento_id: number
    quantidade: number
  }

  export type pedidoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    atendimento?: atendimentoUpdateOneRequiredWithoutPedidoNestedInput
    prato?: pratoUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    prato_id?: IntFieldUpdateOperationsInput | number
    atendimento_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type pedidoCreateManyInput = {
    pedido_id?: number
    prato_id: number
    atendimento_id: number
    quantidade: number
  }

  export type pedidoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type pedidoUncheckedUpdateManyInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    prato_id?: IntFieldUpdateOperationsInput | number
    atendimento_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type pratoCreateInput = {
    nome: string
    preco: Decimal | DecimalJsLike | number | string
    custo: Decimal | DecimalJsLike | number | string
    pedido?: pedidoCreateNestedManyWithoutPratoInput
    pratos_do_dia?: pratos_do_diaCreateNestedManyWithoutPratoInput
    tempo?: tempoCreateNestedOneWithoutPratoInput
  }

  export type pratoUncheckedCreateInput = {
    prato_id?: number
    nome: string
    preco: Decimal | DecimalJsLike | number | string
    custo: Decimal | DecimalJsLike | number | string
    pedido?: pedidoUncheckedCreateNestedManyWithoutPratoInput
    pratos_do_dia?: pratos_do_diaUncheckedCreateNestedManyWithoutPratoInput
    tempo?: tempoUncheckedCreateNestedOneWithoutPratoInput
  }

  export type pratoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: pedidoUpdateManyWithoutPratoNestedInput
    pratos_do_dia?: pratos_do_diaUpdateManyWithoutPratoNestedInput
    tempo?: tempoUpdateOneWithoutPratoNestedInput
  }

  export type pratoUncheckedUpdateInput = {
    prato_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: pedidoUncheckedUpdateManyWithoutPratoNestedInput
    pratos_do_dia?: pratos_do_diaUncheckedUpdateManyWithoutPratoNestedInput
    tempo?: tempoUncheckedUpdateOneWithoutPratoNestedInput
  }

  export type pratoCreateManyInput = {
    prato_id?: number
    nome: string
    preco: Decimal | DecimalJsLike | number | string
    custo: Decimal | DecimalJsLike | number | string
  }

  export type pratoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type pratoUncheckedUpdateManyInput = {
    prato_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type pratos_do_diaCreateInput = {
    quantidade: number
    dia: Date | string
    prato: pratoCreateNestedOneWithoutPratos_do_diaInput
  }

  export type pratos_do_diaUncheckedCreateInput = {
    prato_id: number
    quantidade: number
    dia: Date | string
  }

  export type pratos_do_diaUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    dia?: DateTimeFieldUpdateOperationsInput | Date | string
    prato?: pratoUpdateOneRequiredWithoutPratos_do_diaNestedInput
  }

  export type pratos_do_diaUncheckedUpdateInput = {
    prato_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    dia?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pratos_do_diaCreateManyInput = {
    prato_id: number
    quantidade: number
    dia: Date | string
  }

  export type pratos_do_diaUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    dia?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pratos_do_diaUncheckedUpdateManyInput = {
    prato_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    dia?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tempoCreateInput = {
    tempo_preparo: number
    prato: pratoCreateNestedOneWithoutTempoInput
  }

  export type tempoUncheckedCreateInput = {
    prato_id: number
    tempo_preparo: number
  }

  export type tempoUpdateInput = {
    tempo_preparo?: IntFieldUpdateOperationsInput | number
    prato?: pratoUpdateOneRequiredWithoutTempoNestedInput
  }

  export type tempoUncheckedUpdateInput = {
    prato_id?: IntFieldUpdateOperationsInput | number
    tempo_preparo?: IntFieldUpdateOperationsInput | number
  }

  export type tempoCreateManyInput = {
    prato_id: number
    tempo_preparo: number
  }

  export type tempoUpdateManyMutationInput = {
    tempo_preparo?: IntFieldUpdateOperationsInput | number
  }

  export type tempoUncheckedUpdateManyInput = {
    prato_id?: IntFieldUpdateOperationsInput | number
    tempo_preparo?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FuncionarioListRelationFilter = {
    every?: funcionarioWhereInput
    some?: funcionarioWhereInput
    none?: funcionarioWhereInput
  }

  export type funcionarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type admCountOrderByAggregateInput = {
    adm_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type admAvgOrderByAggregateInput = {
    adm_id?: SortOrder
  }

  export type admMaxOrderByAggregateInput = {
    adm_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type admMinOrderByAggregateInput = {
    adm_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type admSumOrderByAggregateInput = {
    adm_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FuncionarioScalarRelationFilter = {
    is?: funcionarioWhereInput
    isNot?: funcionarioWhereInput
  }

  export type PagamentoListRelationFilter = {
    every?: pagamentoWhereInput
    some?: pagamentoWhereInput
    none?: pagamentoWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: pedidoWhereInput
    some?: pedidoWhereInput
    none?: pedidoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type pagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type atendimentoCountOrderByAggregateInput = {
    atendimento_id?: SortOrder
    n_pessoas?: SortOrder
    duracao?: SortOrder
    checkin?: SortOrder
    checkout?: SortOrder
    funcionario_id?: SortOrder
  }

  export type atendimentoAvgOrderByAggregateInput = {
    atendimento_id?: SortOrder
    n_pessoas?: SortOrder
    duracao?: SortOrder
    funcionario_id?: SortOrder
  }

  export type atendimentoMaxOrderByAggregateInput = {
    atendimento_id?: SortOrder
    n_pessoas?: SortOrder
    duracao?: SortOrder
    checkin?: SortOrder
    checkout?: SortOrder
    funcionario_id?: SortOrder
  }

  export type atendimentoMinOrderByAggregateInput = {
    atendimento_id?: SortOrder
    n_pessoas?: SortOrder
    duracao?: SortOrder
    checkin?: SortOrder
    checkout?: SortOrder
    funcionario_id?: SortOrder
  }

  export type atendimentoSumOrderByAggregateInput = {
    atendimento_id?: SortOrder
    n_pessoas?: SortOrder
    duracao?: SortOrder
    funcionario_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AtendimentoListRelationFilter = {
    every?: atendimentoWhereInput
    some?: atendimentoWhereInput
    none?: atendimentoWhereInput
  }

  export type AdmScalarRelationFilter = {
    is?: admWhereInput
    isNot?: admWhereInput
  }

  export type atendimentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type funcionarioCountOrderByAggregateInput = {
    funcionario_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    adm_id?: SortOrder
  }

  export type funcionarioAvgOrderByAggregateInput = {
    funcionario_id?: SortOrder
    adm_id?: SortOrder
  }

  export type funcionarioMaxOrderByAggregateInput = {
    funcionario_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    adm_id?: SortOrder
  }

  export type funcionarioMinOrderByAggregateInput = {
    funcionario_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    adm_id?: SortOrder
  }

  export type funcionarioSumOrderByAggregateInput = {
    funcionario_id?: SortOrder
    adm_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type AtendimentoScalarRelationFilter = {
    is?: atendimentoWhereInput
    isNot?: atendimentoWhereInput
  }

  export type pagamentoCountOrderByAggregateInput = {
    pagamento_id?: SortOrder
    forma?: SortOrder
    valor?: SortOrder
    data_pagamento?: SortOrder
    atendimento_id?: SortOrder
  }

  export type pagamentoAvgOrderByAggregateInput = {
    pagamento_id?: SortOrder
    valor?: SortOrder
    atendimento_id?: SortOrder
  }

  export type pagamentoMaxOrderByAggregateInput = {
    pagamento_id?: SortOrder
    forma?: SortOrder
    valor?: SortOrder
    data_pagamento?: SortOrder
    atendimento_id?: SortOrder
  }

  export type pagamentoMinOrderByAggregateInput = {
    pagamento_id?: SortOrder
    forma?: SortOrder
    valor?: SortOrder
    data_pagamento?: SortOrder
    atendimento_id?: SortOrder
  }

  export type pagamentoSumOrderByAggregateInput = {
    pagamento_id?: SortOrder
    valor?: SortOrder
    atendimento_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PratoScalarRelationFilter = {
    is?: pratoWhereInput
    isNot?: pratoWhereInput
  }

  export type pedidoCountOrderByAggregateInput = {
    pedido_id?: SortOrder
    prato_id?: SortOrder
    atendimento_id?: SortOrder
    quantidade?: SortOrder
  }

  export type pedidoAvgOrderByAggregateInput = {
    pedido_id?: SortOrder
    prato_id?: SortOrder
    atendimento_id?: SortOrder
    quantidade?: SortOrder
  }

  export type pedidoMaxOrderByAggregateInput = {
    pedido_id?: SortOrder
    prato_id?: SortOrder
    atendimento_id?: SortOrder
    quantidade?: SortOrder
  }

  export type pedidoMinOrderByAggregateInput = {
    pedido_id?: SortOrder
    prato_id?: SortOrder
    atendimento_id?: SortOrder
    quantidade?: SortOrder
  }

  export type pedidoSumOrderByAggregateInput = {
    pedido_id?: SortOrder
    prato_id?: SortOrder
    atendimento_id?: SortOrder
    quantidade?: SortOrder
  }

  export type Pratos_do_diaListRelationFilter = {
    every?: pratos_do_diaWhereInput
    some?: pratos_do_diaWhereInput
    none?: pratos_do_diaWhereInput
  }

  export type TempoNullableScalarRelationFilter = {
    is?: tempoWhereInput | null
    isNot?: tempoWhereInput | null
  }

  export type pratos_do_diaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pratoCountOrderByAggregateInput = {
    prato_id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    custo?: SortOrder
  }

  export type pratoAvgOrderByAggregateInput = {
    prato_id?: SortOrder
    preco?: SortOrder
    custo?: SortOrder
  }

  export type pratoMaxOrderByAggregateInput = {
    prato_id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    custo?: SortOrder
  }

  export type pratoMinOrderByAggregateInput = {
    prato_id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    custo?: SortOrder
  }

  export type pratoSumOrderByAggregateInput = {
    prato_id?: SortOrder
    preco?: SortOrder
    custo?: SortOrder
  }

  export type pratos_do_diaPrato_idDiaCompoundUniqueInput = {
    prato_id: number
    dia: Date | string
  }

  export type pratos_do_diaCountOrderByAggregateInput = {
    prato_id?: SortOrder
    quantidade?: SortOrder
    dia?: SortOrder
  }

  export type pratos_do_diaAvgOrderByAggregateInput = {
    prato_id?: SortOrder
    quantidade?: SortOrder
  }

  export type pratos_do_diaMaxOrderByAggregateInput = {
    prato_id?: SortOrder
    quantidade?: SortOrder
    dia?: SortOrder
  }

  export type pratos_do_diaMinOrderByAggregateInput = {
    prato_id?: SortOrder
    quantidade?: SortOrder
    dia?: SortOrder
  }

  export type pratos_do_diaSumOrderByAggregateInput = {
    prato_id?: SortOrder
    quantidade?: SortOrder
  }

  export type tempoCountOrderByAggregateInput = {
    prato_id?: SortOrder
    tempo_preparo?: SortOrder
  }

  export type tempoAvgOrderByAggregateInput = {
    prato_id?: SortOrder
    tempo_preparo?: SortOrder
  }

  export type tempoMaxOrderByAggregateInput = {
    prato_id?: SortOrder
    tempo_preparo?: SortOrder
  }

  export type tempoMinOrderByAggregateInput = {
    prato_id?: SortOrder
    tempo_preparo?: SortOrder
  }

  export type tempoSumOrderByAggregateInput = {
    prato_id?: SortOrder
    tempo_preparo?: SortOrder
  }

  export type funcionarioCreateNestedManyWithoutAdmInput = {
    create?: XOR<funcionarioCreateWithoutAdmInput, funcionarioUncheckedCreateWithoutAdmInput> | funcionarioCreateWithoutAdmInput[] | funcionarioUncheckedCreateWithoutAdmInput[]
    connectOrCreate?: funcionarioCreateOrConnectWithoutAdmInput | funcionarioCreateOrConnectWithoutAdmInput[]
    createMany?: funcionarioCreateManyAdmInputEnvelope
    connect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
  }

  export type funcionarioUncheckedCreateNestedManyWithoutAdmInput = {
    create?: XOR<funcionarioCreateWithoutAdmInput, funcionarioUncheckedCreateWithoutAdmInput> | funcionarioCreateWithoutAdmInput[] | funcionarioUncheckedCreateWithoutAdmInput[]
    connectOrCreate?: funcionarioCreateOrConnectWithoutAdmInput | funcionarioCreateOrConnectWithoutAdmInput[]
    createMany?: funcionarioCreateManyAdmInputEnvelope
    connect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type funcionarioUpdateManyWithoutAdmNestedInput = {
    create?: XOR<funcionarioCreateWithoutAdmInput, funcionarioUncheckedCreateWithoutAdmInput> | funcionarioCreateWithoutAdmInput[] | funcionarioUncheckedCreateWithoutAdmInput[]
    connectOrCreate?: funcionarioCreateOrConnectWithoutAdmInput | funcionarioCreateOrConnectWithoutAdmInput[]
    upsert?: funcionarioUpsertWithWhereUniqueWithoutAdmInput | funcionarioUpsertWithWhereUniqueWithoutAdmInput[]
    createMany?: funcionarioCreateManyAdmInputEnvelope
    set?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    disconnect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    delete?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    connect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    update?: funcionarioUpdateWithWhereUniqueWithoutAdmInput | funcionarioUpdateWithWhereUniqueWithoutAdmInput[]
    updateMany?: funcionarioUpdateManyWithWhereWithoutAdmInput | funcionarioUpdateManyWithWhereWithoutAdmInput[]
    deleteMany?: funcionarioScalarWhereInput | funcionarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type funcionarioUncheckedUpdateManyWithoutAdmNestedInput = {
    create?: XOR<funcionarioCreateWithoutAdmInput, funcionarioUncheckedCreateWithoutAdmInput> | funcionarioCreateWithoutAdmInput[] | funcionarioUncheckedCreateWithoutAdmInput[]
    connectOrCreate?: funcionarioCreateOrConnectWithoutAdmInput | funcionarioCreateOrConnectWithoutAdmInput[]
    upsert?: funcionarioUpsertWithWhereUniqueWithoutAdmInput | funcionarioUpsertWithWhereUniqueWithoutAdmInput[]
    createMany?: funcionarioCreateManyAdmInputEnvelope
    set?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    disconnect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    delete?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    connect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    update?: funcionarioUpdateWithWhereUniqueWithoutAdmInput | funcionarioUpdateWithWhereUniqueWithoutAdmInput[]
    updateMany?: funcionarioUpdateManyWithWhereWithoutAdmInput | funcionarioUpdateManyWithWhereWithoutAdmInput[]
    deleteMany?: funcionarioScalarWhereInput | funcionarioScalarWhereInput[]
  }

  export type funcionarioCreateNestedOneWithoutAtendimentoInput = {
    create?: XOR<funcionarioCreateWithoutAtendimentoInput, funcionarioUncheckedCreateWithoutAtendimentoInput>
    connectOrCreate?: funcionarioCreateOrConnectWithoutAtendimentoInput
    connect?: funcionarioWhereUniqueInput
  }

  export type pagamentoCreateNestedManyWithoutAtendimentoInput = {
    create?: XOR<pagamentoCreateWithoutAtendimentoInput, pagamentoUncheckedCreateWithoutAtendimentoInput> | pagamentoCreateWithoutAtendimentoInput[] | pagamentoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutAtendimentoInput | pagamentoCreateOrConnectWithoutAtendimentoInput[]
    createMany?: pagamentoCreateManyAtendimentoInputEnvelope
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
  }

  export type pedidoCreateNestedManyWithoutAtendimentoInput = {
    create?: XOR<pedidoCreateWithoutAtendimentoInput, pedidoUncheckedCreateWithoutAtendimentoInput> | pedidoCreateWithoutAtendimentoInput[] | pedidoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutAtendimentoInput | pedidoCreateOrConnectWithoutAtendimentoInput[]
    createMany?: pedidoCreateManyAtendimentoInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type pagamentoUncheckedCreateNestedManyWithoutAtendimentoInput = {
    create?: XOR<pagamentoCreateWithoutAtendimentoInput, pagamentoUncheckedCreateWithoutAtendimentoInput> | pagamentoCreateWithoutAtendimentoInput[] | pagamentoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutAtendimentoInput | pagamentoCreateOrConnectWithoutAtendimentoInput[]
    createMany?: pagamentoCreateManyAtendimentoInputEnvelope
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
  }

  export type pedidoUncheckedCreateNestedManyWithoutAtendimentoInput = {
    create?: XOR<pedidoCreateWithoutAtendimentoInput, pedidoUncheckedCreateWithoutAtendimentoInput> | pedidoCreateWithoutAtendimentoInput[] | pedidoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutAtendimentoInput | pedidoCreateOrConnectWithoutAtendimentoInput[]
    createMany?: pedidoCreateManyAtendimentoInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
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

  export type funcionarioUpdateOneRequiredWithoutAtendimentoNestedInput = {
    create?: XOR<funcionarioCreateWithoutAtendimentoInput, funcionarioUncheckedCreateWithoutAtendimentoInput>
    connectOrCreate?: funcionarioCreateOrConnectWithoutAtendimentoInput
    upsert?: funcionarioUpsertWithoutAtendimentoInput
    connect?: funcionarioWhereUniqueInput
    update?: XOR<XOR<funcionarioUpdateToOneWithWhereWithoutAtendimentoInput, funcionarioUpdateWithoutAtendimentoInput>, funcionarioUncheckedUpdateWithoutAtendimentoInput>
  }

  export type pagamentoUpdateManyWithoutAtendimentoNestedInput = {
    create?: XOR<pagamentoCreateWithoutAtendimentoInput, pagamentoUncheckedCreateWithoutAtendimentoInput> | pagamentoCreateWithoutAtendimentoInput[] | pagamentoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutAtendimentoInput | pagamentoCreateOrConnectWithoutAtendimentoInput[]
    upsert?: pagamentoUpsertWithWhereUniqueWithoutAtendimentoInput | pagamentoUpsertWithWhereUniqueWithoutAtendimentoInput[]
    createMany?: pagamentoCreateManyAtendimentoInputEnvelope
    set?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    disconnect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    delete?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    update?: pagamentoUpdateWithWhereUniqueWithoutAtendimentoInput | pagamentoUpdateWithWhereUniqueWithoutAtendimentoInput[]
    updateMany?: pagamentoUpdateManyWithWhereWithoutAtendimentoInput | pagamentoUpdateManyWithWhereWithoutAtendimentoInput[]
    deleteMany?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
  }

  export type pedidoUpdateManyWithoutAtendimentoNestedInput = {
    create?: XOR<pedidoCreateWithoutAtendimentoInput, pedidoUncheckedCreateWithoutAtendimentoInput> | pedidoCreateWithoutAtendimentoInput[] | pedidoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutAtendimentoInput | pedidoCreateOrConnectWithoutAtendimentoInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutAtendimentoInput | pedidoUpsertWithWhereUniqueWithoutAtendimentoInput[]
    createMany?: pedidoCreateManyAtendimentoInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutAtendimentoInput | pedidoUpdateWithWhereUniqueWithoutAtendimentoInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutAtendimentoInput | pedidoUpdateManyWithWhereWithoutAtendimentoInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type pagamentoUncheckedUpdateManyWithoutAtendimentoNestedInput = {
    create?: XOR<pagamentoCreateWithoutAtendimentoInput, pagamentoUncheckedCreateWithoutAtendimentoInput> | pagamentoCreateWithoutAtendimentoInput[] | pagamentoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutAtendimentoInput | pagamentoCreateOrConnectWithoutAtendimentoInput[]
    upsert?: pagamentoUpsertWithWhereUniqueWithoutAtendimentoInput | pagamentoUpsertWithWhereUniqueWithoutAtendimentoInput[]
    createMany?: pagamentoCreateManyAtendimentoInputEnvelope
    set?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    disconnect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    delete?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    update?: pagamentoUpdateWithWhereUniqueWithoutAtendimentoInput | pagamentoUpdateWithWhereUniqueWithoutAtendimentoInput[]
    updateMany?: pagamentoUpdateManyWithWhereWithoutAtendimentoInput | pagamentoUpdateManyWithWhereWithoutAtendimentoInput[]
    deleteMany?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
  }

  export type pedidoUncheckedUpdateManyWithoutAtendimentoNestedInput = {
    create?: XOR<pedidoCreateWithoutAtendimentoInput, pedidoUncheckedCreateWithoutAtendimentoInput> | pedidoCreateWithoutAtendimentoInput[] | pedidoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutAtendimentoInput | pedidoCreateOrConnectWithoutAtendimentoInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutAtendimentoInput | pedidoUpsertWithWhereUniqueWithoutAtendimentoInput[]
    createMany?: pedidoCreateManyAtendimentoInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutAtendimentoInput | pedidoUpdateWithWhereUniqueWithoutAtendimentoInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutAtendimentoInput | pedidoUpdateManyWithWhereWithoutAtendimentoInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type atendimentoCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<atendimentoCreateWithoutFuncionarioInput, atendimentoUncheckedCreateWithoutFuncionarioInput> | atendimentoCreateWithoutFuncionarioInput[] | atendimentoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: atendimentoCreateOrConnectWithoutFuncionarioInput | atendimentoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: atendimentoCreateManyFuncionarioInputEnvelope
    connect?: atendimentoWhereUniqueInput | atendimentoWhereUniqueInput[]
  }

  export type admCreateNestedOneWithoutFuncionarioInput = {
    create?: XOR<admCreateWithoutFuncionarioInput, admUncheckedCreateWithoutFuncionarioInput>
    connectOrCreate?: admCreateOrConnectWithoutFuncionarioInput
    connect?: admWhereUniqueInput
  }

  export type atendimentoUncheckedCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<atendimentoCreateWithoutFuncionarioInput, atendimentoUncheckedCreateWithoutFuncionarioInput> | atendimentoCreateWithoutFuncionarioInput[] | atendimentoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: atendimentoCreateOrConnectWithoutFuncionarioInput | atendimentoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: atendimentoCreateManyFuncionarioInputEnvelope
    connect?: atendimentoWhereUniqueInput | atendimentoWhereUniqueInput[]
  }

  export type atendimentoUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<atendimentoCreateWithoutFuncionarioInput, atendimentoUncheckedCreateWithoutFuncionarioInput> | atendimentoCreateWithoutFuncionarioInput[] | atendimentoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: atendimentoCreateOrConnectWithoutFuncionarioInput | atendimentoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: atendimentoUpsertWithWhereUniqueWithoutFuncionarioInput | atendimentoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: atendimentoCreateManyFuncionarioInputEnvelope
    set?: atendimentoWhereUniqueInput | atendimentoWhereUniqueInput[]
    disconnect?: atendimentoWhereUniqueInput | atendimentoWhereUniqueInput[]
    delete?: atendimentoWhereUniqueInput | atendimentoWhereUniqueInput[]
    connect?: atendimentoWhereUniqueInput | atendimentoWhereUniqueInput[]
    update?: atendimentoUpdateWithWhereUniqueWithoutFuncionarioInput | atendimentoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: atendimentoUpdateManyWithWhereWithoutFuncionarioInput | atendimentoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: atendimentoScalarWhereInput | atendimentoScalarWhereInput[]
  }

  export type admUpdateOneRequiredWithoutFuncionarioNestedInput = {
    create?: XOR<admCreateWithoutFuncionarioInput, admUncheckedCreateWithoutFuncionarioInput>
    connectOrCreate?: admCreateOrConnectWithoutFuncionarioInput
    upsert?: admUpsertWithoutFuncionarioInput
    connect?: admWhereUniqueInput
    update?: XOR<XOR<admUpdateToOneWithWhereWithoutFuncionarioInput, admUpdateWithoutFuncionarioInput>, admUncheckedUpdateWithoutFuncionarioInput>
  }

  export type atendimentoUncheckedUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<atendimentoCreateWithoutFuncionarioInput, atendimentoUncheckedCreateWithoutFuncionarioInput> | atendimentoCreateWithoutFuncionarioInput[] | atendimentoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: atendimentoCreateOrConnectWithoutFuncionarioInput | atendimentoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: atendimentoUpsertWithWhereUniqueWithoutFuncionarioInput | atendimentoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: atendimentoCreateManyFuncionarioInputEnvelope
    set?: atendimentoWhereUniqueInput | atendimentoWhereUniqueInput[]
    disconnect?: atendimentoWhereUniqueInput | atendimentoWhereUniqueInput[]
    delete?: atendimentoWhereUniqueInput | atendimentoWhereUniqueInput[]
    connect?: atendimentoWhereUniqueInput | atendimentoWhereUniqueInput[]
    update?: atendimentoUpdateWithWhereUniqueWithoutFuncionarioInput | atendimentoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: atendimentoUpdateManyWithWhereWithoutFuncionarioInput | atendimentoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: atendimentoScalarWhereInput | atendimentoScalarWhereInput[]
  }

  export type atendimentoCreateNestedOneWithoutPagamentoInput = {
    create?: XOR<atendimentoCreateWithoutPagamentoInput, atendimentoUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: atendimentoCreateOrConnectWithoutPagamentoInput
    connect?: atendimentoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type atendimentoUpdateOneRequiredWithoutPagamentoNestedInput = {
    create?: XOR<atendimentoCreateWithoutPagamentoInput, atendimentoUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: atendimentoCreateOrConnectWithoutPagamentoInput
    upsert?: atendimentoUpsertWithoutPagamentoInput
    connect?: atendimentoWhereUniqueInput
    update?: XOR<XOR<atendimentoUpdateToOneWithWhereWithoutPagamentoInput, atendimentoUpdateWithoutPagamentoInput>, atendimentoUncheckedUpdateWithoutPagamentoInput>
  }

  export type atendimentoCreateNestedOneWithoutPedidoInput = {
    create?: XOR<atendimentoCreateWithoutPedidoInput, atendimentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: atendimentoCreateOrConnectWithoutPedidoInput
    connect?: atendimentoWhereUniqueInput
  }

  export type pratoCreateNestedOneWithoutPedidoInput = {
    create?: XOR<pratoCreateWithoutPedidoInput, pratoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: pratoCreateOrConnectWithoutPedidoInput
    connect?: pratoWhereUniqueInput
  }

  export type atendimentoUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<atendimentoCreateWithoutPedidoInput, atendimentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: atendimentoCreateOrConnectWithoutPedidoInput
    upsert?: atendimentoUpsertWithoutPedidoInput
    connect?: atendimentoWhereUniqueInput
    update?: XOR<XOR<atendimentoUpdateToOneWithWhereWithoutPedidoInput, atendimentoUpdateWithoutPedidoInput>, atendimentoUncheckedUpdateWithoutPedidoInput>
  }

  export type pratoUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<pratoCreateWithoutPedidoInput, pratoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: pratoCreateOrConnectWithoutPedidoInput
    upsert?: pratoUpsertWithoutPedidoInput
    connect?: pratoWhereUniqueInput
    update?: XOR<XOR<pratoUpdateToOneWithWhereWithoutPedidoInput, pratoUpdateWithoutPedidoInput>, pratoUncheckedUpdateWithoutPedidoInput>
  }

  export type pedidoCreateNestedManyWithoutPratoInput = {
    create?: XOR<pedidoCreateWithoutPratoInput, pedidoUncheckedCreateWithoutPratoInput> | pedidoCreateWithoutPratoInput[] | pedidoUncheckedCreateWithoutPratoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutPratoInput | pedidoCreateOrConnectWithoutPratoInput[]
    createMany?: pedidoCreateManyPratoInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type pratos_do_diaCreateNestedManyWithoutPratoInput = {
    create?: XOR<pratos_do_diaCreateWithoutPratoInput, pratos_do_diaUncheckedCreateWithoutPratoInput> | pratos_do_diaCreateWithoutPratoInput[] | pratos_do_diaUncheckedCreateWithoutPratoInput[]
    connectOrCreate?: pratos_do_diaCreateOrConnectWithoutPratoInput | pratos_do_diaCreateOrConnectWithoutPratoInput[]
    createMany?: pratos_do_diaCreateManyPratoInputEnvelope
    connect?: pratos_do_diaWhereUniqueInput | pratos_do_diaWhereUniqueInput[]
  }

  export type tempoCreateNestedOneWithoutPratoInput = {
    create?: XOR<tempoCreateWithoutPratoInput, tempoUncheckedCreateWithoutPratoInput>
    connectOrCreate?: tempoCreateOrConnectWithoutPratoInput
    connect?: tempoWhereUniqueInput
  }

  export type pedidoUncheckedCreateNestedManyWithoutPratoInput = {
    create?: XOR<pedidoCreateWithoutPratoInput, pedidoUncheckedCreateWithoutPratoInput> | pedidoCreateWithoutPratoInput[] | pedidoUncheckedCreateWithoutPratoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutPratoInput | pedidoCreateOrConnectWithoutPratoInput[]
    createMany?: pedidoCreateManyPratoInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type pratos_do_diaUncheckedCreateNestedManyWithoutPratoInput = {
    create?: XOR<pratos_do_diaCreateWithoutPratoInput, pratos_do_diaUncheckedCreateWithoutPratoInput> | pratos_do_diaCreateWithoutPratoInput[] | pratos_do_diaUncheckedCreateWithoutPratoInput[]
    connectOrCreate?: pratos_do_diaCreateOrConnectWithoutPratoInput | pratos_do_diaCreateOrConnectWithoutPratoInput[]
    createMany?: pratos_do_diaCreateManyPratoInputEnvelope
    connect?: pratos_do_diaWhereUniqueInput | pratos_do_diaWhereUniqueInput[]
  }

  export type tempoUncheckedCreateNestedOneWithoutPratoInput = {
    create?: XOR<tempoCreateWithoutPratoInput, tempoUncheckedCreateWithoutPratoInput>
    connectOrCreate?: tempoCreateOrConnectWithoutPratoInput
    connect?: tempoWhereUniqueInput
  }

  export type pedidoUpdateManyWithoutPratoNestedInput = {
    create?: XOR<pedidoCreateWithoutPratoInput, pedidoUncheckedCreateWithoutPratoInput> | pedidoCreateWithoutPratoInput[] | pedidoUncheckedCreateWithoutPratoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutPratoInput | pedidoCreateOrConnectWithoutPratoInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutPratoInput | pedidoUpsertWithWhereUniqueWithoutPratoInput[]
    createMany?: pedidoCreateManyPratoInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutPratoInput | pedidoUpdateWithWhereUniqueWithoutPratoInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutPratoInput | pedidoUpdateManyWithWhereWithoutPratoInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type pratos_do_diaUpdateManyWithoutPratoNestedInput = {
    create?: XOR<pratos_do_diaCreateWithoutPratoInput, pratos_do_diaUncheckedCreateWithoutPratoInput> | pratos_do_diaCreateWithoutPratoInput[] | pratos_do_diaUncheckedCreateWithoutPratoInput[]
    connectOrCreate?: pratos_do_diaCreateOrConnectWithoutPratoInput | pratos_do_diaCreateOrConnectWithoutPratoInput[]
    upsert?: pratos_do_diaUpsertWithWhereUniqueWithoutPratoInput | pratos_do_diaUpsertWithWhereUniqueWithoutPratoInput[]
    createMany?: pratos_do_diaCreateManyPratoInputEnvelope
    set?: pratos_do_diaWhereUniqueInput | pratos_do_diaWhereUniqueInput[]
    disconnect?: pratos_do_diaWhereUniqueInput | pratos_do_diaWhereUniqueInput[]
    delete?: pratos_do_diaWhereUniqueInput | pratos_do_diaWhereUniqueInput[]
    connect?: pratos_do_diaWhereUniqueInput | pratos_do_diaWhereUniqueInput[]
    update?: pratos_do_diaUpdateWithWhereUniqueWithoutPratoInput | pratos_do_diaUpdateWithWhereUniqueWithoutPratoInput[]
    updateMany?: pratos_do_diaUpdateManyWithWhereWithoutPratoInput | pratos_do_diaUpdateManyWithWhereWithoutPratoInput[]
    deleteMany?: pratos_do_diaScalarWhereInput | pratos_do_diaScalarWhereInput[]
  }

  export type tempoUpdateOneWithoutPratoNestedInput = {
    create?: XOR<tempoCreateWithoutPratoInput, tempoUncheckedCreateWithoutPratoInput>
    connectOrCreate?: tempoCreateOrConnectWithoutPratoInput
    upsert?: tempoUpsertWithoutPratoInput
    disconnect?: tempoWhereInput | boolean
    delete?: tempoWhereInput | boolean
    connect?: tempoWhereUniqueInput
    update?: XOR<XOR<tempoUpdateToOneWithWhereWithoutPratoInput, tempoUpdateWithoutPratoInput>, tempoUncheckedUpdateWithoutPratoInput>
  }

  export type pedidoUncheckedUpdateManyWithoutPratoNestedInput = {
    create?: XOR<pedidoCreateWithoutPratoInput, pedidoUncheckedCreateWithoutPratoInput> | pedidoCreateWithoutPratoInput[] | pedidoUncheckedCreateWithoutPratoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutPratoInput | pedidoCreateOrConnectWithoutPratoInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutPratoInput | pedidoUpsertWithWhereUniqueWithoutPratoInput[]
    createMany?: pedidoCreateManyPratoInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutPratoInput | pedidoUpdateWithWhereUniqueWithoutPratoInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutPratoInput | pedidoUpdateManyWithWhereWithoutPratoInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type pratos_do_diaUncheckedUpdateManyWithoutPratoNestedInput = {
    create?: XOR<pratos_do_diaCreateWithoutPratoInput, pratos_do_diaUncheckedCreateWithoutPratoInput> | pratos_do_diaCreateWithoutPratoInput[] | pratos_do_diaUncheckedCreateWithoutPratoInput[]
    connectOrCreate?: pratos_do_diaCreateOrConnectWithoutPratoInput | pratos_do_diaCreateOrConnectWithoutPratoInput[]
    upsert?: pratos_do_diaUpsertWithWhereUniqueWithoutPratoInput | pratos_do_diaUpsertWithWhereUniqueWithoutPratoInput[]
    createMany?: pratos_do_diaCreateManyPratoInputEnvelope
    set?: pratos_do_diaWhereUniqueInput | pratos_do_diaWhereUniqueInput[]
    disconnect?: pratos_do_diaWhereUniqueInput | pratos_do_diaWhereUniqueInput[]
    delete?: pratos_do_diaWhereUniqueInput | pratos_do_diaWhereUniqueInput[]
    connect?: pratos_do_diaWhereUniqueInput | pratos_do_diaWhereUniqueInput[]
    update?: pratos_do_diaUpdateWithWhereUniqueWithoutPratoInput | pratos_do_diaUpdateWithWhereUniqueWithoutPratoInput[]
    updateMany?: pratos_do_diaUpdateManyWithWhereWithoutPratoInput | pratos_do_diaUpdateManyWithWhereWithoutPratoInput[]
    deleteMany?: pratos_do_diaScalarWhereInput | pratos_do_diaScalarWhereInput[]
  }

  export type tempoUncheckedUpdateOneWithoutPratoNestedInput = {
    create?: XOR<tempoCreateWithoutPratoInput, tempoUncheckedCreateWithoutPratoInput>
    connectOrCreate?: tempoCreateOrConnectWithoutPratoInput
    upsert?: tempoUpsertWithoutPratoInput
    disconnect?: tempoWhereInput | boolean
    delete?: tempoWhereInput | boolean
    connect?: tempoWhereUniqueInput
    update?: XOR<XOR<tempoUpdateToOneWithWhereWithoutPratoInput, tempoUpdateWithoutPratoInput>, tempoUncheckedUpdateWithoutPratoInput>
  }

  export type pratoCreateNestedOneWithoutPratos_do_diaInput = {
    create?: XOR<pratoCreateWithoutPratos_do_diaInput, pratoUncheckedCreateWithoutPratos_do_diaInput>
    connectOrCreate?: pratoCreateOrConnectWithoutPratos_do_diaInput
    connect?: pratoWhereUniqueInput
  }

  export type pratoUpdateOneRequiredWithoutPratos_do_diaNestedInput = {
    create?: XOR<pratoCreateWithoutPratos_do_diaInput, pratoUncheckedCreateWithoutPratos_do_diaInput>
    connectOrCreate?: pratoCreateOrConnectWithoutPratos_do_diaInput
    upsert?: pratoUpsertWithoutPratos_do_diaInput
    connect?: pratoWhereUniqueInput
    update?: XOR<XOR<pratoUpdateToOneWithWhereWithoutPratos_do_diaInput, pratoUpdateWithoutPratos_do_diaInput>, pratoUncheckedUpdateWithoutPratos_do_diaInput>
  }

  export type pratoCreateNestedOneWithoutTempoInput = {
    create?: XOR<pratoCreateWithoutTempoInput, pratoUncheckedCreateWithoutTempoInput>
    connectOrCreate?: pratoCreateOrConnectWithoutTempoInput
    connect?: pratoWhereUniqueInput
  }

  export type pratoUpdateOneRequiredWithoutTempoNestedInput = {
    create?: XOR<pratoCreateWithoutTempoInput, pratoUncheckedCreateWithoutTempoInput>
    connectOrCreate?: pratoCreateOrConnectWithoutTempoInput
    upsert?: pratoUpsertWithoutTempoInput
    connect?: pratoWhereUniqueInput
    update?: XOR<XOR<pratoUpdateToOneWithWhereWithoutTempoInput, pratoUpdateWithoutTempoInput>, pratoUncheckedUpdateWithoutTempoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type funcionarioCreateWithoutAdmInput = {
    nome: string
    email: string
    senha: string
    atendimento?: atendimentoCreateNestedManyWithoutFuncionarioInput
  }

  export type funcionarioUncheckedCreateWithoutAdmInput = {
    funcionario_id?: number
    nome: string
    email: string
    senha: string
    atendimento?: atendimentoUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type funcionarioCreateOrConnectWithoutAdmInput = {
    where: funcionarioWhereUniqueInput
    create: XOR<funcionarioCreateWithoutAdmInput, funcionarioUncheckedCreateWithoutAdmInput>
  }

  export type funcionarioCreateManyAdmInputEnvelope = {
    data: funcionarioCreateManyAdmInput | funcionarioCreateManyAdmInput[]
    skipDuplicates?: boolean
  }

  export type funcionarioUpsertWithWhereUniqueWithoutAdmInput = {
    where: funcionarioWhereUniqueInput
    update: XOR<funcionarioUpdateWithoutAdmInput, funcionarioUncheckedUpdateWithoutAdmInput>
    create: XOR<funcionarioCreateWithoutAdmInput, funcionarioUncheckedCreateWithoutAdmInput>
  }

  export type funcionarioUpdateWithWhereUniqueWithoutAdmInput = {
    where: funcionarioWhereUniqueInput
    data: XOR<funcionarioUpdateWithoutAdmInput, funcionarioUncheckedUpdateWithoutAdmInput>
  }

  export type funcionarioUpdateManyWithWhereWithoutAdmInput = {
    where: funcionarioScalarWhereInput
    data: XOR<funcionarioUpdateManyMutationInput, funcionarioUncheckedUpdateManyWithoutAdmInput>
  }

  export type funcionarioScalarWhereInput = {
    AND?: funcionarioScalarWhereInput | funcionarioScalarWhereInput[]
    OR?: funcionarioScalarWhereInput[]
    NOT?: funcionarioScalarWhereInput | funcionarioScalarWhereInput[]
    funcionario_id?: IntFilter<"funcionario"> | number
    nome?: StringFilter<"funcionario"> | string
    email?: StringFilter<"funcionario"> | string
    senha?: StringFilter<"funcionario"> | string
    adm_id?: IntFilter<"funcionario"> | number
  }

  export type funcionarioCreateWithoutAtendimentoInput = {
    nome: string
    email: string
    senha: string
    adm: admCreateNestedOneWithoutFuncionarioInput
  }

  export type funcionarioUncheckedCreateWithoutAtendimentoInput = {
    funcionario_id?: number
    nome: string
    email: string
    senha: string
    adm_id: number
  }

  export type funcionarioCreateOrConnectWithoutAtendimentoInput = {
    where: funcionarioWhereUniqueInput
    create: XOR<funcionarioCreateWithoutAtendimentoInput, funcionarioUncheckedCreateWithoutAtendimentoInput>
  }

  export type pagamentoCreateWithoutAtendimentoInput = {
    forma: string
    valor: Decimal | DecimalJsLike | number | string
    data_pagamento: Date | string
  }

  export type pagamentoUncheckedCreateWithoutAtendimentoInput = {
    pagamento_id?: number
    forma: string
    valor: Decimal | DecimalJsLike | number | string
    data_pagamento: Date | string
  }

  export type pagamentoCreateOrConnectWithoutAtendimentoInput = {
    where: pagamentoWhereUniqueInput
    create: XOR<pagamentoCreateWithoutAtendimentoInput, pagamentoUncheckedCreateWithoutAtendimentoInput>
  }

  export type pagamentoCreateManyAtendimentoInputEnvelope = {
    data: pagamentoCreateManyAtendimentoInput | pagamentoCreateManyAtendimentoInput[]
    skipDuplicates?: boolean
  }

  export type pedidoCreateWithoutAtendimentoInput = {
    quantidade: number
    prato: pratoCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutAtendimentoInput = {
    pedido_id?: number
    prato_id: number
    quantidade: number
  }

  export type pedidoCreateOrConnectWithoutAtendimentoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutAtendimentoInput, pedidoUncheckedCreateWithoutAtendimentoInput>
  }

  export type pedidoCreateManyAtendimentoInputEnvelope = {
    data: pedidoCreateManyAtendimentoInput | pedidoCreateManyAtendimentoInput[]
    skipDuplicates?: boolean
  }

  export type funcionarioUpsertWithoutAtendimentoInput = {
    update: XOR<funcionarioUpdateWithoutAtendimentoInput, funcionarioUncheckedUpdateWithoutAtendimentoInput>
    create: XOR<funcionarioCreateWithoutAtendimentoInput, funcionarioUncheckedCreateWithoutAtendimentoInput>
    where?: funcionarioWhereInput
  }

  export type funcionarioUpdateToOneWithWhereWithoutAtendimentoInput = {
    where?: funcionarioWhereInput
    data: XOR<funcionarioUpdateWithoutAtendimentoInput, funcionarioUncheckedUpdateWithoutAtendimentoInput>
  }

  export type funcionarioUpdateWithoutAtendimentoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    adm?: admUpdateOneRequiredWithoutFuncionarioNestedInput
  }

  export type funcionarioUncheckedUpdateWithoutAtendimentoInput = {
    funcionario_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    adm_id?: IntFieldUpdateOperationsInput | number
  }

  export type pagamentoUpsertWithWhereUniqueWithoutAtendimentoInput = {
    where: pagamentoWhereUniqueInput
    update: XOR<pagamentoUpdateWithoutAtendimentoInput, pagamentoUncheckedUpdateWithoutAtendimentoInput>
    create: XOR<pagamentoCreateWithoutAtendimentoInput, pagamentoUncheckedCreateWithoutAtendimentoInput>
  }

  export type pagamentoUpdateWithWhereUniqueWithoutAtendimentoInput = {
    where: pagamentoWhereUniqueInput
    data: XOR<pagamentoUpdateWithoutAtendimentoInput, pagamentoUncheckedUpdateWithoutAtendimentoInput>
  }

  export type pagamentoUpdateManyWithWhereWithoutAtendimentoInput = {
    where: pagamentoScalarWhereInput
    data: XOR<pagamentoUpdateManyMutationInput, pagamentoUncheckedUpdateManyWithoutAtendimentoInput>
  }

  export type pagamentoScalarWhereInput = {
    AND?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
    OR?: pagamentoScalarWhereInput[]
    NOT?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
    pagamento_id?: IntFilter<"pagamento"> | number
    forma?: StringFilter<"pagamento"> | string
    valor?: DecimalFilter<"pagamento"> | Decimal | DecimalJsLike | number | string
    data_pagamento?: DateTimeFilter<"pagamento"> | Date | string
    atendimento_id?: IntFilter<"pagamento"> | number
  }

  export type pedidoUpsertWithWhereUniqueWithoutAtendimentoInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutAtendimentoInput, pedidoUncheckedUpdateWithoutAtendimentoInput>
    create: XOR<pedidoCreateWithoutAtendimentoInput, pedidoUncheckedCreateWithoutAtendimentoInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutAtendimentoInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutAtendimentoInput, pedidoUncheckedUpdateWithoutAtendimentoInput>
  }

  export type pedidoUpdateManyWithWhereWithoutAtendimentoInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutAtendimentoInput>
  }

  export type pedidoScalarWhereInput = {
    AND?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    OR?: pedidoScalarWhereInput[]
    NOT?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    pedido_id?: IntFilter<"pedido"> | number
    prato_id?: IntFilter<"pedido"> | number
    atendimento_id?: IntFilter<"pedido"> | number
    quantidade?: IntFilter<"pedido"> | number
  }

  export type atendimentoCreateWithoutFuncionarioInput = {
    n_pessoas: number
    duracao?: number | null
    checkin: Date | string
    checkout?: Date | string | null
    pagamento?: pagamentoCreateNestedManyWithoutAtendimentoInput
    pedido?: pedidoCreateNestedManyWithoutAtendimentoInput
  }

  export type atendimentoUncheckedCreateWithoutFuncionarioInput = {
    atendimento_id?: number
    n_pessoas: number
    duracao?: number | null
    checkin: Date | string
    checkout?: Date | string | null
    pagamento?: pagamentoUncheckedCreateNestedManyWithoutAtendimentoInput
    pedido?: pedidoUncheckedCreateNestedManyWithoutAtendimentoInput
  }

  export type atendimentoCreateOrConnectWithoutFuncionarioInput = {
    where: atendimentoWhereUniqueInput
    create: XOR<atendimentoCreateWithoutFuncionarioInput, atendimentoUncheckedCreateWithoutFuncionarioInput>
  }

  export type atendimentoCreateManyFuncionarioInputEnvelope = {
    data: atendimentoCreateManyFuncionarioInput | atendimentoCreateManyFuncionarioInput[]
    skipDuplicates?: boolean
  }

  export type admCreateWithoutFuncionarioInput = {
    nome: string
    email: string
    senha: string
  }

  export type admUncheckedCreateWithoutFuncionarioInput = {
    adm_id?: number
    nome: string
    email: string
    senha: string
  }

  export type admCreateOrConnectWithoutFuncionarioInput = {
    where: admWhereUniqueInput
    create: XOR<admCreateWithoutFuncionarioInput, admUncheckedCreateWithoutFuncionarioInput>
  }

  export type atendimentoUpsertWithWhereUniqueWithoutFuncionarioInput = {
    where: atendimentoWhereUniqueInput
    update: XOR<atendimentoUpdateWithoutFuncionarioInput, atendimentoUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<atendimentoCreateWithoutFuncionarioInput, atendimentoUncheckedCreateWithoutFuncionarioInput>
  }

  export type atendimentoUpdateWithWhereUniqueWithoutFuncionarioInput = {
    where: atendimentoWhereUniqueInput
    data: XOR<atendimentoUpdateWithoutFuncionarioInput, atendimentoUncheckedUpdateWithoutFuncionarioInput>
  }

  export type atendimentoUpdateManyWithWhereWithoutFuncionarioInput = {
    where: atendimentoScalarWhereInput
    data: XOR<atendimentoUpdateManyMutationInput, atendimentoUncheckedUpdateManyWithoutFuncionarioInput>
  }

  export type atendimentoScalarWhereInput = {
    AND?: atendimentoScalarWhereInput | atendimentoScalarWhereInput[]
    OR?: atendimentoScalarWhereInput[]
    NOT?: atendimentoScalarWhereInput | atendimentoScalarWhereInput[]
    atendimento_id?: IntFilter<"atendimento"> | number
    n_pessoas?: IntFilter<"atendimento"> | number
    duracao?: IntNullableFilter<"atendimento"> | number | null
    checkin?: DateTimeFilter<"atendimento"> | Date | string
    checkout?: DateTimeNullableFilter<"atendimento"> | Date | string | null
    funcionario_id?: IntFilter<"atendimento"> | number
  }

  export type admUpsertWithoutFuncionarioInput = {
    update: XOR<admUpdateWithoutFuncionarioInput, admUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<admCreateWithoutFuncionarioInput, admUncheckedCreateWithoutFuncionarioInput>
    where?: admWhereInput
  }

  export type admUpdateToOneWithWhereWithoutFuncionarioInput = {
    where?: admWhereInput
    data: XOR<admUpdateWithoutFuncionarioInput, admUncheckedUpdateWithoutFuncionarioInput>
  }

  export type admUpdateWithoutFuncionarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type admUncheckedUpdateWithoutFuncionarioInput = {
    adm_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type atendimentoCreateWithoutPagamentoInput = {
    n_pessoas: number
    duracao?: number | null
    checkin: Date | string
    checkout?: Date | string | null
    funcionario: funcionarioCreateNestedOneWithoutAtendimentoInput
    pedido?: pedidoCreateNestedManyWithoutAtendimentoInput
  }

  export type atendimentoUncheckedCreateWithoutPagamentoInput = {
    atendimento_id?: number
    n_pessoas: number
    duracao?: number | null
    checkin: Date | string
    checkout?: Date | string | null
    funcionario_id: number
    pedido?: pedidoUncheckedCreateNestedManyWithoutAtendimentoInput
  }

  export type atendimentoCreateOrConnectWithoutPagamentoInput = {
    where: atendimentoWhereUniqueInput
    create: XOR<atendimentoCreateWithoutPagamentoInput, atendimentoUncheckedCreateWithoutPagamentoInput>
  }

  export type atendimentoUpsertWithoutPagamentoInput = {
    update: XOR<atendimentoUpdateWithoutPagamentoInput, atendimentoUncheckedUpdateWithoutPagamentoInput>
    create: XOR<atendimentoCreateWithoutPagamentoInput, atendimentoUncheckedCreateWithoutPagamentoInput>
    where?: atendimentoWhereInput
  }

  export type atendimentoUpdateToOneWithWhereWithoutPagamentoInput = {
    where?: atendimentoWhereInput
    data: XOR<atendimentoUpdateWithoutPagamentoInput, atendimentoUncheckedUpdateWithoutPagamentoInput>
  }

  export type atendimentoUpdateWithoutPagamentoInput = {
    n_pessoas?: IntFieldUpdateOperationsInput | number
    duracao?: NullableIntFieldUpdateOperationsInput | number | null
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    funcionario?: funcionarioUpdateOneRequiredWithoutAtendimentoNestedInput
    pedido?: pedidoUpdateManyWithoutAtendimentoNestedInput
  }

  export type atendimentoUncheckedUpdateWithoutPagamentoInput = {
    atendimento_id?: IntFieldUpdateOperationsInput | number
    n_pessoas?: IntFieldUpdateOperationsInput | number
    duracao?: NullableIntFieldUpdateOperationsInput | number | null
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    funcionario_id?: IntFieldUpdateOperationsInput | number
    pedido?: pedidoUncheckedUpdateManyWithoutAtendimentoNestedInput
  }

  export type atendimentoCreateWithoutPedidoInput = {
    n_pessoas: number
    duracao?: number | null
    checkin: Date | string
    checkout?: Date | string | null
    funcionario: funcionarioCreateNestedOneWithoutAtendimentoInput
    pagamento?: pagamentoCreateNestedManyWithoutAtendimentoInput
  }

  export type atendimentoUncheckedCreateWithoutPedidoInput = {
    atendimento_id?: number
    n_pessoas: number
    duracao?: number | null
    checkin: Date | string
    checkout?: Date | string | null
    funcionario_id: number
    pagamento?: pagamentoUncheckedCreateNestedManyWithoutAtendimentoInput
  }

  export type atendimentoCreateOrConnectWithoutPedidoInput = {
    where: atendimentoWhereUniqueInput
    create: XOR<atendimentoCreateWithoutPedidoInput, atendimentoUncheckedCreateWithoutPedidoInput>
  }

  export type pratoCreateWithoutPedidoInput = {
    nome: string
    preco: Decimal | DecimalJsLike | number | string
    custo: Decimal | DecimalJsLike | number | string
    pratos_do_dia?: pratos_do_diaCreateNestedManyWithoutPratoInput
    tempo?: tempoCreateNestedOneWithoutPratoInput
  }

  export type pratoUncheckedCreateWithoutPedidoInput = {
    prato_id?: number
    nome: string
    preco: Decimal | DecimalJsLike | number | string
    custo: Decimal | DecimalJsLike | number | string
    pratos_do_dia?: pratos_do_diaUncheckedCreateNestedManyWithoutPratoInput
    tempo?: tempoUncheckedCreateNestedOneWithoutPratoInput
  }

  export type pratoCreateOrConnectWithoutPedidoInput = {
    where: pratoWhereUniqueInput
    create: XOR<pratoCreateWithoutPedidoInput, pratoUncheckedCreateWithoutPedidoInput>
  }

  export type atendimentoUpsertWithoutPedidoInput = {
    update: XOR<atendimentoUpdateWithoutPedidoInput, atendimentoUncheckedUpdateWithoutPedidoInput>
    create: XOR<atendimentoCreateWithoutPedidoInput, atendimentoUncheckedCreateWithoutPedidoInput>
    where?: atendimentoWhereInput
  }

  export type atendimentoUpdateToOneWithWhereWithoutPedidoInput = {
    where?: atendimentoWhereInput
    data: XOR<atendimentoUpdateWithoutPedidoInput, atendimentoUncheckedUpdateWithoutPedidoInput>
  }

  export type atendimentoUpdateWithoutPedidoInput = {
    n_pessoas?: IntFieldUpdateOperationsInput | number
    duracao?: NullableIntFieldUpdateOperationsInput | number | null
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    funcionario?: funcionarioUpdateOneRequiredWithoutAtendimentoNestedInput
    pagamento?: pagamentoUpdateManyWithoutAtendimentoNestedInput
  }

  export type atendimentoUncheckedUpdateWithoutPedidoInput = {
    atendimento_id?: IntFieldUpdateOperationsInput | number
    n_pessoas?: IntFieldUpdateOperationsInput | number
    duracao?: NullableIntFieldUpdateOperationsInput | number | null
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    funcionario_id?: IntFieldUpdateOperationsInput | number
    pagamento?: pagamentoUncheckedUpdateManyWithoutAtendimentoNestedInput
  }

  export type pratoUpsertWithoutPedidoInput = {
    update: XOR<pratoUpdateWithoutPedidoInput, pratoUncheckedUpdateWithoutPedidoInput>
    create: XOR<pratoCreateWithoutPedidoInput, pratoUncheckedCreateWithoutPedidoInput>
    where?: pratoWhereInput
  }

  export type pratoUpdateToOneWithWhereWithoutPedidoInput = {
    where?: pratoWhereInput
    data: XOR<pratoUpdateWithoutPedidoInput, pratoUncheckedUpdateWithoutPedidoInput>
  }

  export type pratoUpdateWithoutPedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pratos_do_dia?: pratos_do_diaUpdateManyWithoutPratoNestedInput
    tempo?: tempoUpdateOneWithoutPratoNestedInput
  }

  export type pratoUncheckedUpdateWithoutPedidoInput = {
    prato_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pratos_do_dia?: pratos_do_diaUncheckedUpdateManyWithoutPratoNestedInput
    tempo?: tempoUncheckedUpdateOneWithoutPratoNestedInput
  }

  export type pedidoCreateWithoutPratoInput = {
    quantidade: number
    atendimento: atendimentoCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutPratoInput = {
    pedido_id?: number
    atendimento_id: number
    quantidade: number
  }

  export type pedidoCreateOrConnectWithoutPratoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutPratoInput, pedidoUncheckedCreateWithoutPratoInput>
  }

  export type pedidoCreateManyPratoInputEnvelope = {
    data: pedidoCreateManyPratoInput | pedidoCreateManyPratoInput[]
    skipDuplicates?: boolean
  }

  export type pratos_do_diaCreateWithoutPratoInput = {
    quantidade: number
    dia: Date | string
  }

  export type pratos_do_diaUncheckedCreateWithoutPratoInput = {
    quantidade: number
    dia: Date | string
  }

  export type pratos_do_diaCreateOrConnectWithoutPratoInput = {
    where: pratos_do_diaWhereUniqueInput
    create: XOR<pratos_do_diaCreateWithoutPratoInput, pratos_do_diaUncheckedCreateWithoutPratoInput>
  }

  export type pratos_do_diaCreateManyPratoInputEnvelope = {
    data: pratos_do_diaCreateManyPratoInput | pratos_do_diaCreateManyPratoInput[]
    skipDuplicates?: boolean
  }

  export type tempoCreateWithoutPratoInput = {
    tempo_preparo: number
  }

  export type tempoUncheckedCreateWithoutPratoInput = {
    tempo_preparo: number
  }

  export type tempoCreateOrConnectWithoutPratoInput = {
    where: tempoWhereUniqueInput
    create: XOR<tempoCreateWithoutPratoInput, tempoUncheckedCreateWithoutPratoInput>
  }

  export type pedidoUpsertWithWhereUniqueWithoutPratoInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutPratoInput, pedidoUncheckedUpdateWithoutPratoInput>
    create: XOR<pedidoCreateWithoutPratoInput, pedidoUncheckedCreateWithoutPratoInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutPratoInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutPratoInput, pedidoUncheckedUpdateWithoutPratoInput>
  }

  export type pedidoUpdateManyWithWhereWithoutPratoInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutPratoInput>
  }

  export type pratos_do_diaUpsertWithWhereUniqueWithoutPratoInput = {
    where: pratos_do_diaWhereUniqueInput
    update: XOR<pratos_do_diaUpdateWithoutPratoInput, pratos_do_diaUncheckedUpdateWithoutPratoInput>
    create: XOR<pratos_do_diaCreateWithoutPratoInput, pratos_do_diaUncheckedCreateWithoutPratoInput>
  }

  export type pratos_do_diaUpdateWithWhereUniqueWithoutPratoInput = {
    where: pratos_do_diaWhereUniqueInput
    data: XOR<pratos_do_diaUpdateWithoutPratoInput, pratos_do_diaUncheckedUpdateWithoutPratoInput>
  }

  export type pratos_do_diaUpdateManyWithWhereWithoutPratoInput = {
    where: pratos_do_diaScalarWhereInput
    data: XOR<pratos_do_diaUpdateManyMutationInput, pratos_do_diaUncheckedUpdateManyWithoutPratoInput>
  }

  export type pratos_do_diaScalarWhereInput = {
    AND?: pratos_do_diaScalarWhereInput | pratos_do_diaScalarWhereInput[]
    OR?: pratos_do_diaScalarWhereInput[]
    NOT?: pratos_do_diaScalarWhereInput | pratos_do_diaScalarWhereInput[]
    prato_id?: IntFilter<"pratos_do_dia"> | number
    quantidade?: IntFilter<"pratos_do_dia"> | number
    dia?: DateTimeFilter<"pratos_do_dia"> | Date | string
  }

  export type tempoUpsertWithoutPratoInput = {
    update: XOR<tempoUpdateWithoutPratoInput, tempoUncheckedUpdateWithoutPratoInput>
    create: XOR<tempoCreateWithoutPratoInput, tempoUncheckedCreateWithoutPratoInput>
    where?: tempoWhereInput
  }

  export type tempoUpdateToOneWithWhereWithoutPratoInput = {
    where?: tempoWhereInput
    data: XOR<tempoUpdateWithoutPratoInput, tempoUncheckedUpdateWithoutPratoInput>
  }

  export type tempoUpdateWithoutPratoInput = {
    tempo_preparo?: IntFieldUpdateOperationsInput | number
  }

  export type tempoUncheckedUpdateWithoutPratoInput = {
    tempo_preparo?: IntFieldUpdateOperationsInput | number
  }

  export type pratoCreateWithoutPratos_do_diaInput = {
    nome: string
    preco: Decimal | DecimalJsLike | number | string
    custo: Decimal | DecimalJsLike | number | string
    pedido?: pedidoCreateNestedManyWithoutPratoInput
    tempo?: tempoCreateNestedOneWithoutPratoInput
  }

  export type pratoUncheckedCreateWithoutPratos_do_diaInput = {
    prato_id?: number
    nome: string
    preco: Decimal | DecimalJsLike | number | string
    custo: Decimal | DecimalJsLike | number | string
    pedido?: pedidoUncheckedCreateNestedManyWithoutPratoInput
    tempo?: tempoUncheckedCreateNestedOneWithoutPratoInput
  }

  export type pratoCreateOrConnectWithoutPratos_do_diaInput = {
    where: pratoWhereUniqueInput
    create: XOR<pratoCreateWithoutPratos_do_diaInput, pratoUncheckedCreateWithoutPratos_do_diaInput>
  }

  export type pratoUpsertWithoutPratos_do_diaInput = {
    update: XOR<pratoUpdateWithoutPratos_do_diaInput, pratoUncheckedUpdateWithoutPratos_do_diaInput>
    create: XOR<pratoCreateWithoutPratos_do_diaInput, pratoUncheckedCreateWithoutPratos_do_diaInput>
    where?: pratoWhereInput
  }

  export type pratoUpdateToOneWithWhereWithoutPratos_do_diaInput = {
    where?: pratoWhereInput
    data: XOR<pratoUpdateWithoutPratos_do_diaInput, pratoUncheckedUpdateWithoutPratos_do_diaInput>
  }

  export type pratoUpdateWithoutPratos_do_diaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: pedidoUpdateManyWithoutPratoNestedInput
    tempo?: tempoUpdateOneWithoutPratoNestedInput
  }

  export type pratoUncheckedUpdateWithoutPratos_do_diaInput = {
    prato_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: pedidoUncheckedUpdateManyWithoutPratoNestedInput
    tempo?: tempoUncheckedUpdateOneWithoutPratoNestedInput
  }

  export type pratoCreateWithoutTempoInput = {
    nome: string
    preco: Decimal | DecimalJsLike | number | string
    custo: Decimal | DecimalJsLike | number | string
    pedido?: pedidoCreateNestedManyWithoutPratoInput
    pratos_do_dia?: pratos_do_diaCreateNestedManyWithoutPratoInput
  }

  export type pratoUncheckedCreateWithoutTempoInput = {
    prato_id?: number
    nome: string
    preco: Decimal | DecimalJsLike | number | string
    custo: Decimal | DecimalJsLike | number | string
    pedido?: pedidoUncheckedCreateNestedManyWithoutPratoInput
    pratos_do_dia?: pratos_do_diaUncheckedCreateNestedManyWithoutPratoInput
  }

  export type pratoCreateOrConnectWithoutTempoInput = {
    where: pratoWhereUniqueInput
    create: XOR<pratoCreateWithoutTempoInput, pratoUncheckedCreateWithoutTempoInput>
  }

  export type pratoUpsertWithoutTempoInput = {
    update: XOR<pratoUpdateWithoutTempoInput, pratoUncheckedUpdateWithoutTempoInput>
    create: XOR<pratoCreateWithoutTempoInput, pratoUncheckedCreateWithoutTempoInput>
    where?: pratoWhereInput
  }

  export type pratoUpdateToOneWithWhereWithoutTempoInput = {
    where?: pratoWhereInput
    data: XOR<pratoUpdateWithoutTempoInput, pratoUncheckedUpdateWithoutTempoInput>
  }

  export type pratoUpdateWithoutTempoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: pedidoUpdateManyWithoutPratoNestedInput
    pratos_do_dia?: pratos_do_diaUpdateManyWithoutPratoNestedInput
  }

  export type pratoUncheckedUpdateWithoutTempoInput = {
    prato_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: pedidoUncheckedUpdateManyWithoutPratoNestedInput
    pratos_do_dia?: pratos_do_diaUncheckedUpdateManyWithoutPratoNestedInput
  }

  export type funcionarioCreateManyAdmInput = {
    funcionario_id?: number
    nome: string
    email: string
    senha: string
  }

  export type funcionarioUpdateWithoutAdmInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    atendimento?: atendimentoUpdateManyWithoutFuncionarioNestedInput
  }

  export type funcionarioUncheckedUpdateWithoutAdmInput = {
    funcionario_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    atendimento?: atendimentoUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type funcionarioUncheckedUpdateManyWithoutAdmInput = {
    funcionario_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type pagamentoCreateManyAtendimentoInput = {
    pagamento_id?: number
    forma: string
    valor: Decimal | DecimalJsLike | number | string
    data_pagamento: Date | string
  }

  export type pedidoCreateManyAtendimentoInput = {
    pedido_id?: number
    prato_id: number
    quantidade: number
  }

  export type pagamentoUpdateWithoutAtendimentoInput = {
    forma?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagamentoUncheckedUpdateWithoutAtendimentoInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    forma?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagamentoUncheckedUpdateManyWithoutAtendimentoInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    forma?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_pagamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoUpdateWithoutAtendimentoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    prato?: pratoUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutAtendimentoInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    prato_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type pedidoUncheckedUpdateManyWithoutAtendimentoInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    prato_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type atendimentoCreateManyFuncionarioInput = {
    atendimento_id?: number
    n_pessoas: number
    duracao?: number | null
    checkin: Date | string
    checkout?: Date | string | null
  }

  export type atendimentoUpdateWithoutFuncionarioInput = {
    n_pessoas?: IntFieldUpdateOperationsInput | number
    duracao?: NullableIntFieldUpdateOperationsInput | number | null
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagamento?: pagamentoUpdateManyWithoutAtendimentoNestedInput
    pedido?: pedidoUpdateManyWithoutAtendimentoNestedInput
  }

  export type atendimentoUncheckedUpdateWithoutFuncionarioInput = {
    atendimento_id?: IntFieldUpdateOperationsInput | number
    n_pessoas?: IntFieldUpdateOperationsInput | number
    duracao?: NullableIntFieldUpdateOperationsInput | number | null
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagamento?: pagamentoUncheckedUpdateManyWithoutAtendimentoNestedInput
    pedido?: pedidoUncheckedUpdateManyWithoutAtendimentoNestedInput
  }

  export type atendimentoUncheckedUpdateManyWithoutFuncionarioInput = {
    atendimento_id?: IntFieldUpdateOperationsInput | number
    n_pessoas?: IntFieldUpdateOperationsInput | number
    duracao?: NullableIntFieldUpdateOperationsInput | number | null
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pedidoCreateManyPratoInput = {
    pedido_id?: number
    atendimento_id: number
    quantidade: number
  }

  export type pratos_do_diaCreateManyPratoInput = {
    quantidade: number
    dia: Date | string
  }

  export type pedidoUpdateWithoutPratoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    atendimento?: atendimentoUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutPratoInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    atendimento_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type pedidoUncheckedUpdateManyWithoutPratoInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    atendimento_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type pratos_do_diaUpdateWithoutPratoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    dia?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pratos_do_diaUncheckedUpdateWithoutPratoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    dia?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pratos_do_diaUncheckedUpdateManyWithoutPratoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    dia?: DateTimeFieldUpdateOperationsInput | Date | string
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
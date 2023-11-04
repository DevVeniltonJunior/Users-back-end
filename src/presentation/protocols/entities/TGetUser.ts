export namespace TGetUser {
  export namespace Request {
    export type params = object
    export type body = object
    export type query = {
      name?: string
      createdAt?: string
      lte?: string
      gte?: string
    }
  }
  export type Response = any
}
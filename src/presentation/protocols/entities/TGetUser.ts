export namespace TGetUser {
  export namespace Request {
    export type params = object
    export type body = object
    export type query = {
      id?: string
      createdAt?: string
      lte?: string
      gte?: string
    }
  }
  export type Response = any
}
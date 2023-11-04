export namespace TUser {
  export type Entity = {
    id: number,
    name: string,
    email: string,
    phone: string,
    created_at?: Date | string,
    updated_at?: Date | string
  }

  export type Model = {
    id: number,
    name: string,
    email: string,
    phone: string,
    createdAt?: Date | string,
    updatedAt?: Date | string
  }

  export type DTO = {
    id: number,
    name?: string,
    email?: string,
    phone?: string,
  }
}

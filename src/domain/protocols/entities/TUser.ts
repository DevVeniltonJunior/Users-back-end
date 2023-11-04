export namespace TUser {
  export type Entity = {
    id: number,
    name: string,
    email: string,
    phone: string,
    created_at?: Date | string | number,
    updated_at?: Date | string | number
  }

  export type Model = {
    id: number,
    name: string,
    email: string,
    phone: string,
    createdAt?: Date | string | number,
    updatedAt?: Date | string | number
  }

  export type DTO = {
    id: number,
    name?: string,
    email?: string,
    phone?: string,
  }
}

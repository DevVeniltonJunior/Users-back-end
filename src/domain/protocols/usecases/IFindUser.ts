import { User } from '@/domain/entities'

export interface IFindUser {
  execute: (filter?: any) => Promise<User[]>
}

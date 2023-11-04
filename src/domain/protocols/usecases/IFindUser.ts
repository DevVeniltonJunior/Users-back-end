import { User } from '@/domain/entities'

export interface IFindUser {
  exceute: (filter?: any) => Promise<User[]>
}

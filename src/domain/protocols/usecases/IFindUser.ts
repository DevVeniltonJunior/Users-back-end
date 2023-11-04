import { User } from '@/domain/entities'
import { TFilter } from './TFilter'

export interface IFindUser {
  execute: (filter?: TFilter) => Promise<User[]>
}

import { User } from '@/domain/entities/User'
import { Id } from '@/domain/valueObjects'

export interface IUserQueryRepository {
  findOne: (id: Id) => Promise<User>
  findMany: (filter: any) => Promise<User>
}

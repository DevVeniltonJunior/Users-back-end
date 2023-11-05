import { User } from '@/domain/entities'
import { IUserQueryRepository } from '@/domain/protocols'
import { Id } from '@/domain/valueObjects'
import { DatabaseAdapter, UserAdapter } from '@/infra/adapter'
import { InfraException } from '@/infra/exceptions'

export class UserQueryRepository implements IUserQueryRepository {
  private readonly databaseAdapter = new DatabaseAdapter()

  async findOne(id: Id): Promise<User> {
    const user = await this.databaseAdapter.findOne(id.toNumber())

    if(!user) throw new InfraException('User not found')

    return UserAdapter.toEntity(user)
  }

  async findMany(filter?: any): Promise<User[]> {
    const users = await this.databaseAdapter.findMany(filter)

    if(!users) throw new InfraException('User not found')

    return users.map(user => UserAdapter.toEntity(user))
  }

}

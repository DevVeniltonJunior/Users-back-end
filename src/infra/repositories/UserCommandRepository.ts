import { UserDTO } from '@/domain/dtos'
import { User } from '@/domain/entities'
import { IUserCommandRepository } from '@/domain/protocols'
import { Id } from '@/domain/valueObjects'
import { DatabaseAdapter, UserAdapter } from '@/infra/adapter'

export class UserCommandRepository implements IUserCommandRepository {
  private readonly databaseAdapter = new DatabaseAdapter()

  async create (entity: User): Promise<User> {
    const model = UserAdapter.toModel(entity)

    delete (<any>model).id

    const user = await this.databaseAdapter.create(model)
    console.log(user)

    return UserAdapter.toEntity(user)
  }

  async update (dto: UserDTO): Promise<void> {
    const id = dto.getId()
    const partialModel = UserAdapter.toPartialModel(dto)

    delete (<any>partialModel).id

    await this.databaseAdapter.update(id.toNumber(), partialModel)
  }

  async softDelete (id: Id): Promise<void> {
    await this.databaseAdapter.softDelete(id.toNumber())
  }

  async hardDelete (id: Id): Promise<void> {
    await this.databaseAdapter.hardDelete(id.toNumber())
  }
}
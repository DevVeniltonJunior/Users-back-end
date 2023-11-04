import { IDeleteUser, IUserCommandRepository } from'@/domain/protocols'
import { Id } from '@/domain/valueObjects'

export class DeleteUser implements IDeleteUser {
  constructor(private readonly _repository: IUserCommandRepository) {}
  async execute (id: Id): Promise<void> {
    await this._repository.softDelete(id)
  }
}

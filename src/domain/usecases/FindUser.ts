import { IFindUser, IUserQueryRepository } from'@/domain/protocols'
import { User } from '@/domain/entities'

export class FindUser implements IFindUser {
  constructor(private readonly _repository: IUserQueryRepository) {}
  async execute (filter?: any): Promise<User[]> {
    return await this._repository.findMany(filter)
  }
}

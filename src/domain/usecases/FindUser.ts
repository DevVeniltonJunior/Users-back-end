import { IFindUser, IUserQueryRepository, TFilter } from'@/domain/protocols'
import { User } from '@/domain/entities'

export class FindUser implements IFindUser {
  constructor(private readonly _repository: IUserQueryRepository) {}
  async execute (filter?: TFilter): Promise<User[]> {
    if(!filter) return await this._repository.findMany()

    const _filter: Record<string, any> = { deleted_at: null }

    if(filter.name) _filter['name'] = { contains: filter.name}
    if(filter.lte && filter.gte) _filter['created_at'] = { lte: filter.lte, gte: filter.gte }

    return await this._repository.findMany({ where: _filter })
  }
}

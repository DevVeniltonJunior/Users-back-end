import { FindUser } from '@/domain/usecases'
import { UserQueryRepository } from '@/infra/repositories'
import { TGetUser, TRoute, Response } from '@/presentation/protocols'

export class GetUserController {
  public static async handle(req: TRoute.handleParams<TGetUser.Request.body, TGetUser.Request.params, TGetUser.Request.query>): Promise<Response<TGetUser.Response>> {

    const repository = new UserQueryRepository()
    const findUser = new FindUser(repository)

    try {
      if(!req.query.name || !req.query.createdAt || !req.query.lte || !req.query.gte) {
        const entities = await findUser.execute()
  
        return {
          statusCode: 200,
          data: entities.map(entity => entity.toJson())
        }
      }
      const entities = await findUser.execute(req.query)
  
      return {
        statusCode: 200,
        data: entities.map(entity => entity.toJson())
      }
    } catch(err) {
      return {
        statusCode: 500,
        data: err
      }
    }
  }
}
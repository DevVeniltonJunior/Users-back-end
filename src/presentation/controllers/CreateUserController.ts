import { User } from '@/domain/entities'
import { CreateUser } from '@/domain/usecases'
import { Id, Name, Email, Phone} from '@/domain/valueObjects'
import { UserCommandRepository } from '@/infra/repositories'
import { TCreateUser, TRoute, Response } from '@/presentation/protocols'

export class CreateUserController {
  public static async handle(req: TRoute.handleParams<TCreateUser.Request.body, TCreateUser.Request.params, TCreateUser.Request.query>): Promise<Response<TCreateUser.Response>> {
    const userParam = req.body

    console.log(userParam)

    const repository = new UserCommandRepository()
    const createUser = new CreateUser(repository)

    try {
      if(!userParam.id || !userParam.name || !userParam.email || !userParam.phone) return {
        statusCode: 400,
        data: { message: 'Bad Request'}
      }

      const entity = await createUser.execute(new User(
        new Id(userParam.id),
        new Name(userParam.name),
        new Email(userParam.email),
        new Phone(userParam.phone)
      ))
  
      return {
        statusCode: 201,
        data: entity.toJson()
      }
    } catch(err: any) {
      return {
        statusCode: 500,
        data: err
      }
    }
  }
}
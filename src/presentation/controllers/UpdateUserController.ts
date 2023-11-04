import { UserDTO } from '@/domain/dtos'
import { UpdateUser } from '@/domain/usecases'
import { Id, Name, Email, Phone} from '@/domain/valueObjects'
import { UserCommandRepository } from '@/infra/repositories'
import { TUpdateUser, TRoute, Response } from '@/presentation/protocols'

export class UpdateUserController {
  public static async handle(req: TRoute.handleParams<TUpdateUser.Request.body, TUpdateUser.Request.params, TUpdateUser.Request.query>): Promise<Response<TUpdateUser.Response>> {
    const userParam = req.body

    const repository = new UserCommandRepository()
    const updateUser = new UpdateUser(repository)

    try {
      await updateUser.execute(new UserDTO(
        new Id(userParam.id),
        userParam.name ? new Name(userParam.name) : undefined,
        userParam.email ? new Email(userParam.email) : undefined,
        userParam.phone ? new Phone(userParam.phone) : undefined
      ))
  
      return {
        statusCode: 200,
        data: { message: 'Updated' }
      }
    } catch(err) {
      return {
        statusCode: 500,
        data: err
      }
    }
  }
}
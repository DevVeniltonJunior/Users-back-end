import { UserDTO } from '@/domain/dtos'
import { User } from '@/domain/entities'
import { TUser } from '@/domain/protocols'
import { Id, Name, Email, Phone, DateEpoch } from '@/domain/valueObjects'

export class UserAdapter {
  public static toEntity(model: TUser.Model): User {
    return new User(
      new Id(model.id),
      new Name(model.name),
      new Email(model.email),
      new Phone(model.phone),
      model.created_at ? new DateEpoch(model.created_at) : undefined,
      model.created_at ? new DateEpoch(model.created_at) : undefined
    )
  }

  public static toModel(entity: User): TUser.Model {
    return entity.toJson()
  }

  public static toPartialModel(dto: UserDTO): Partial<TUser.Model> {
    console.log(dto)
    return dto.toJson()
  }

  public static toDTO(data: TUser.DTO): UserDTO {
    return new UserDTO(
      new Id(data.id),
      data.name ? new Name(data.name) : undefined,
      data.email ? new Email(data.email) : undefined,
      data.phone ? new Phone(data.phone) : undefined
    )
  }
}
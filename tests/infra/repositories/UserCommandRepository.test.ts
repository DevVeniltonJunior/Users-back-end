import { UserDTO } from '@/domain/dtos'
import { User } from '@/domain/entities'
import { Id, Name, Email, Phone } from '@/domain/valueObjects'
import { UserCommandRepository } from '@/infra/repositories'

describe('[Repository] UserCommand', () => {
  const repository = new UserCommandRepository()

  let userId: Id

  const fixture = new User(
    new Id(10),
    new Name('Renato'),
    new Email('email@email.com'),
    new Phone('12345678910')
  )

  it('Should be able to create a new User without throw any error', async () => {
    console.log(fixture)

    const user = await repository.create(fixture)

    console.log(user)

    expect(() => user).not.toThrow()

    userId = user.getId()
  })

  it('Should be able to update a new User without throw any error', async () => {
    const dto = new UserDTO(
      userId,
      undefined,
      new Email('teste@teste.com'),
    )

    expect(async () => await repository.update(dto)).not.toThrow()
  })

  it('Should be able to soft delete a new User without throw any error', async () => {
    expect(async () => await repository.softDelete(userId)).not.toThrow()
  })

  it('Should be able to hard delete a new User without throw any error', async () => {
    expect(async () => await repository.hardDelete(userId)).not.toThrow()
  })
})

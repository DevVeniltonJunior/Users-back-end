import { UserDTO } from '@/domain/dtos'
import { User } from '@/domain/entities'
import { Id, Name, Email, Phone } from '@/domain/valueObjects'
import { UserQueryRepository, UserCommandRepository } from '@/infra/repositories'

describe('[Repository] UserQuery', () => {
  const repository = new UserQueryRepository()
  const commandRepository = new UserCommandRepository()

  let userId: Id

  const fixture = new User(
    new Id(10),
    new Name('Renato Testes'),
    new Email('email@email.com'),
    new Phone('12345678910')
  )

  beforeAll(async () => {
    const user = await commandRepository.create(fixture)

    userId = user.getId()
  })

  it('Should be able to find a User by id without throw any error', async () => {
    const user = await repository.findOne(userId)

    expect(() => user).not.toThrow()
  })

  it('Should be able to find a all User without throw any error', async () => {
    expect(async () => await repository.findMany()).not.toThrow()
  })
})

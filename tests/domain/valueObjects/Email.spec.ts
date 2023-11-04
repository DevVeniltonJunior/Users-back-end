import { Email } from "@/domain/valueObjects"

describe('[ValueObjects] Email', () => {
  
  const validValue = ['bob@email.com', 'renato@email.com.br', 'rogerio@email.com']
  const invalidValue = ['@email.com', 'a@email', 'bob@email']

  validValue.map(value => {
    it(`Should be able to create an Email with value ${value}`, () => {
      const email = new Email(value)
      expect(email.toString()).toBe(value)
    })
  })

  invalidValue.map(value => {
    it(`Should not be able to create an Email with value ${value}`, () => {
      expect(() => new Email(value)).toThrow()
    })
  })
})
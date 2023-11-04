import { Phone } from "@/domain/valueObjects"

describe('[ValueObjects] Phone', () => {
  
  const validValue = ['12345678910', '01987654321', '12945896894']
  const invalidValue = ['úhsdhaudhasuhdhuasdhuuasdhuhasuhdushd', '12435', '-100']

  validValue.map(value => {
    it(`Should be able to create an Phone with value ${value}`, () => {
      const userId = new Phone(value)
      expect(userId.toString()).toBe(value)
    })
  })

  invalidValue.map(value => {
    it(`Should not be able to create an Phone with value ${value}`, () => {
      expect(() => new Phone(value)).toThrow()
    })
  })
})
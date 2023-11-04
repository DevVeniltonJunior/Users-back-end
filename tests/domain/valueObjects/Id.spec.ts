import { Id } from "@/domain/valueObjects"

describe('[ValueObjects] Id', () => {
  
  const validValue = [1, 50, 1000]
  const invalidValue = [0, -1, -100]

  validValue.map(value => {
    it(`Should be able to create an Id with value ${value}`, () => {
      const id = new Id(value)
      expect(id.toNumber()).toBe(value)
    })
  })

  invalidValue.map(value => {
    it(`Should not be able to create an Id with value ${value}`, () => {
      expect(() => new Id(value)).toThrow()
    })
  })
})
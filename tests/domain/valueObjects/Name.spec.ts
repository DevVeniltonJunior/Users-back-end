import { Name } from "@/domain/valueObjects"

describe('[ValueObjects] Name', () => {
  
  const validValue = ['bob', 'renato', 'rogerio']
  const invalidValue = ['úhsdhaudhasuhdhuasdhuuasdhuhasuhdushdhjsdudhushudsuhdhusdhusuhdhsudhshdu', '', '-100']

  validValue.map(value => {
    it(`Should be able to create an Name with value ${value}`, () => {
      const name = new Name(value)
      expect(name.toString()).toBe(value)
    })
  })

  invalidValue.map(value => {
    it(`Should not be able to create an Name with value ${value}`, () => {
      expect(() => new Name(value)).toThrow()
    })
  })
})
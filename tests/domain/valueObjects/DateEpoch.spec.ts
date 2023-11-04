import { DateEpoch } from "@/domain/valueObjects"

describe('[Value Object] DateEpoch', () => {
  it('Should be able to throw if the value is not provided', () => {
    expect(() => new DateEpoch('')).toThrow()
  })

  it('Should be able to create new DateEpoch when a valid value is provided', () => {
    const dateEpoch = new DateEpoch('2023-10-15T12:00:00.000Z')
    expect(dateEpoch).toBeInstanceOf(DateEpoch)
  })

  it('Should be able to throw if the provided value is not valid', () => {
    expect(() => new DateEpoch('invalid-date')).toThrow()
  })

  it('Should be able to return the epoch value as a number', () => {
    const dateEpoch = new DateEpoch('2023-10-15T12:00:00.000Z')
    expect(dateEpoch.toNumber()).toBeGreaterThan(0)
  })

  it('Should be able to return a Date object', () => {
    const dateEpoch = new DateEpoch('2023-10-15T12:00:00.000Z')
    expect(dateEpoch.toDate()).toBeInstanceOf(Date)
  })

  it('Should be able to return a valid ISO string', () => {
    const dateEpoch = new DateEpoch('2023-10-15T12:00:00.000Z')
    expect(() => new Date(dateEpoch.toISO())).not.toThrow()
  })
})
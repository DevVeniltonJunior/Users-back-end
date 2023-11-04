import { InvalidParam } from "../exceptions"

export class Id {
  constructor(private readonly value: number) {
    if(!value || !this.isValid(value)) throw new InvalidParam(`${value} is invalid`)
  }

  private isValid(value: number): boolean {
    if(value <= 0 || value >= 9999999999) return false
    return true
  }

  public toNumber(): number {
    return this.value
  }
}
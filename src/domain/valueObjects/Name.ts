import { InvalidParam } from "@/domain/exceptions"

export class Name {
  constructor(private readonly value: string) {
    if(!this.value || !this.isValid(this.value)) throw new InvalidParam(`${value} is invalid`)
  }

  private isValid(value: string): boolean {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{1,60}$/
    return regex.test(value)
  }

  public toString(): string {
    return this.value
  }
}
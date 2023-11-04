import { InvalidParam } from "@/domain/exceptions"

export class Phone {
  constructor(private readonly value: string) {
    if(!this.value || !this.isValid(this.value)) throw new InvalidParam(`${value} is invalid`)
  }

  private isValid(value: string): boolean {
    const regex = /^[0-9]{2}([0-9]{8}|[0-9]{9})/
    return regex.test(value)
  }

  public toString(): string {
    return this.value
  }
}
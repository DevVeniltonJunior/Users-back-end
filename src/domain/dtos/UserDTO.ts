import { Id, Name, Email, Phone } from '@/domain/valueObjects'
import { TUser } from '@/domain/protocols'

export class UserDTO {
  constructor (
    private readonly _userId: Id,
    private readonly _userName?: Name,
    private readonly _userEmail?: Email,
    private readonly _userPhone?: Phone
  ) {}

  public getId(): Id {
    return this._userId
  }

  public getName(): Name | undefined  {
    return this._userName
  }

  public getEmail(): Email | undefined  {
    return this._userEmail
  }

  public getPhone(): Phone | undefined  {
    return this._userPhone
  }

  public toJson(): TUser.DTO  {
    return {
      id: this._userId.toNumber(),
      name: this._userName ? this._userName.toString() : undefined,
      email: this._userEmail ? this._userEmail.toString() : undefined,
      phone: this._userPhone ? this._userPhone.toString() : undefined,
    }
  }
}
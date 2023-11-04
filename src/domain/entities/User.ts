import { Id, Name, Email, Phone, DateEpoch } from '@/domain/valueObjects'
import { TUser } from '@/domain/protocols'

export class User {
  constructor (
    private readonly _userId: Id,
    private readonly _userName: Name,
    private readonly _userEmail: Email,
    private readonly _userPhone: Phone,
    private readonly _createdAt?: DateEpoch,
    private readonly _updatedAt?: DateEpoch
  ) {}

  public getId(): Id {
    return this._userId
  }

  public getName(): Name {
    return this._userName
  }
  
  public getEmail(): Email {
    return this._userEmail
  }

  public getPhone(): Phone {
    return this._userPhone
  }

  public getCreatedAt(): DateEpoch | undefined {
    return this._createdAt
  }

  public getUpdatedAt(): DateEpoch | undefined {
    return this._updatedAt
  }

  public toJson(): TUser.Entity {
    return {
      id: this._userId.toNumber(),
      name: this._userName.toString(),
      email: this._userEmail.toString(),
      phone: this._userPhone.toString(),
      created_at: this._createdAt?.toISO(),
      updated_at: this._createdAt?.toISO(),
    }
  }
}
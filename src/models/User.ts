import { UserProps } from '../interfaces/UserProps'
import { Attributes } from './Attributes'
import { Eventing } from './Eventing'
import { ApiSync } from './ApiSync'
import { Model } from './Model'

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
  static buildUSer(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }
}

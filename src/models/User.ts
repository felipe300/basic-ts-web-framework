import { UserProps } from '../interfaces/UserProps'
import { Attributes } from './Attributes'
import { Eventing } from './Eventing'
import { Sync } from './Sync'

const url = 'http://localhost:3000/users'

export class User {
  public events: Eventing = new Eventing()
  public sinc: Sync<UserProps> = new Sync<UserProps>(url)
  public attributes: Attributes<UserProps>

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs)
  }
}

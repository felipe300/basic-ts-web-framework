import { UserProps } from '../interfaces/UserProps'
import { Eventing } from './Eventing'
import { Sync } from './Sync'

const url = 'http://localhost:3000/users'

export class User {
  public events: Eventing = new Eventing()
  public sinc: Sync<UserProps> = new Sync<UserProps>(url)

  constructor(private data: UserProps) {}

  get = (propName: string): string | number => {
    return this.data[propName]
  }

  set = (update: UserProps): void => {
    this.data = { ...this.data, ...update }
  }
}

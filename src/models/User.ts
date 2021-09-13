import axios, { AxiosResponse } from 'axios'
import { UserProps } from '../interfaces/UserProps'
import { Eventing } from './Eventing'

const url = 'http://localhost:3000/users'

export class User {
  public events: Eventing = new Eventing()

  constructor(private data: UserProps) {}

  get = (propName: string): string | number => {
    return this.data[propName]
  }

  set = (update: UserProps): void => {
    this.data = { ...this.data, ...update }
  }

  fetch = (): void => {
    // fetch user data
    const getData = axios.get(`${url}/${this.get('id')}`)
    getData.then((response: AxiosResponse): void => {
      this.set(response.data)
    })
  }

  save = (): void => {
    const userId = this.get('id')
    userId ? axios.put(`${url}/${userId}`, this.data) : axios.post(url, this.data)
  }
}

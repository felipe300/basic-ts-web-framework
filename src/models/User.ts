import { Event } from '../types/Event'
import { Callback } from '../types/Callback'
import { UserProps } from '../interfaces/UserProps'
import axios, { AxiosResponse } from 'axios'

const url = 'http://localhost:3000/users'

export class User {
  events: { [key: string]: Callback[] } = {}

  constructor(private data: UserProps) {}

  get = (propName: string): string | number => {
    return this.data[propName]
  }

  set = (update: UserProps): void => {
    this.data = { ...this.data, ...update }
  }

  on = (eventName: Event, callback: Callback): void => {
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger = (eventName: Event): void => {
    const handlers = this.events[eventName]

    if (!handlers || handlers.length === 0) return

    handlers.forEach((callback) => callback())
  }

  fetch = (): void => {
    // fetch user data
    const getData = axios.get(`${url}/${this.get('id')}`)
    getData.then((response: AxiosResponse): void => {
      this.set(response.data)
    })
  }

}

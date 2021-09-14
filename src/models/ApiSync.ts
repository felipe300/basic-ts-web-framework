import axios, { AxiosPromise } from 'axios'
import { HasId } from '../interfaces/HasId'

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch = (id: number): AxiosPromise => {
    return axios.get(`${this.rootUrl}/${id}`)
  }

  save = (data: HasId): AxiosPromise => {
    const { id } = data
    return id
      ? axios.put(`${this.rootUrl}/${id}`, data)
      : axios.post(this.rootUrl, data)
  }
}

import axios, { AxiosPromise } from 'axios'

interface HasId {
  id?: number
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch = (id: number): AxiosPromise => {
    return axios.get(`${this.rootUrl}/${id}`)
  }

  //   getData.then((response: AxiosResponse): void => {
  //     this.set(response.data)
  //   })

  save = (data: HasId): AxiosPromise => {
    const { id } = data
    return id
      ? axios.put(`${this.rootUrl}/${id}`, data)
      : axios.post(this.rootUrl, data)
  }
}

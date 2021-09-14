import { ModelAttributes } from '../interfaces/ModelAttributes'
import { Events } from '../interfaces/Events'
import { HasId } from '../interfaces/HasId'
import { Sync } from '../interfaces/Sync'
import { AxiosResponse } from 'axios'

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  on = this.events.on

  trigger = this.events.trigger

  get = this.attributes.get

  set(update: T): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  fetch(): void {
    const id = this.get('id')

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id, id is undefined')
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data)
    })
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse): void => {
        this.trigger('save')
      })
      .catch(() => {
        this.trigger('error')
      })
  }
}

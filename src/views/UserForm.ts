import { UserProps } from '../interfaces/UserProps'
import { User } from '../models/User'
import { View } from './View'

export class UserForm extends View<User, UserProps> {
  eventsMap = (): { [key: string]: () => void } => {
    return {
      'click:#set-age': this.setRandomAge,
      'click:#set-name': this.setName,
      'click:#save-model': this.saveUser,
    }
  }

  saveUser = (): void => {
    this.model.save()
  }

  setName = (): void => {
    // type guard
    // if (input) {
    //   const name = input.value
    //   this.model.set({ name })
    // }
    const input = this.parent.querySelector('input') as HTMLInputElement
    const name = input.value
    this.model.set({ name })
  }

  setRandomAge = (): void => {
    this.model.setRandomAge()
  }

  template(): string {
    return `
            <div>
                <div>
                    <input type="text" id="user-name" placeholder=${this.model.get(
                      'name'
                    )} />
                    <button id="set-name">change name</button>
                    <button id="set-age">Set Random Age</button>
                    <button id="save-model">Save User</button>
                </div>
            </div>
        `
  }
}

import { User } from '../models/User'

export class UserForm {
  constructor(public parent: HTMLElement, public model: User) {
    this.bindModel()
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
  }

  eventsMap = (): { [key: string]: (event: Event) => void } => {
    return {
      'click:#set-age': this.setRandomAge,
      'click:#set-name': this.setName,
    }
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
                    <h2>User Form</h2>
                    input: <input type="text" id="user-name" />
                    <button id="set-name">change name</button>
                    <button id="set-age">Set Random Age</button>
                </div>
                <div>
                    <h2>User Info</h2>
                    <div>Name: ${this.model.get('name')}</div>
                    <div>Age: ${this.model.get('age')}</div>
                </div>
            </div>
        `
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':')
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  render(): void {
    this.parent.innerHTML = ''

    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()
    this.bindEvents(templateElement.content)
    this.parent.appendChild(templateElement.content)
  }
}

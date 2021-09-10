import { User } from './models/User'

const user = new User({ name: 'bob', age: 20 })

user.set({ name: 'dragon' })
user.set({ age: 300 })

const getName = user.get('name')
const getAge = user.get('age')
console.log({ getName, getAge })
import { User } from './models/User'

const user = new User({ id: 4, name: 'Andy Bogart' })

user.on('save', () => {
  console.log(user)
})

user.save()

// user.set({ name: 'andy', age: 20 })
// user.save()

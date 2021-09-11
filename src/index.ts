import { User } from './models/User'

const user = new User({ name: 'bob', age: 20 })

user.on('change', () => {
    console.log('change 1')
})
user.on('wheel', () => {
    console.log('wheel 2')
})
user.on('click', () => {
    console.log('click 1')
})

user.trigger('click')
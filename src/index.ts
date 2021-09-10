import { User } from './models/User'

const user = new User({ name: 'felipe', age: 20 })

const getData = user.get('age')
console.log(getData)
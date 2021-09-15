import { UserForm } from './views/UserForm'
import { User } from './models/User'

const user = User.buildUser({ name: 'John', age: 30 })

const root = document.getElementById('root') as HTMLElement

const userForm = new UserForm(root, user)
userForm.render()

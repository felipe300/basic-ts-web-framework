import { UserProps } from '../interfaces/UserProps'
import { CollectionView } from './CollectionView'
import { UserShow } from './UserShow'
import { User } from '../models/User'

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render()
  }
}

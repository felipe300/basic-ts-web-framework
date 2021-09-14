import { Callback } from '../types/Callback'

export interface Events {
  on(event: string, callback: Callback): void
  trigger(event: string): void
}

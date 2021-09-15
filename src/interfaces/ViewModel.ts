export interface ViewModel {
  on: (event: string, callback: () => void) => void
}

export type ModalType = 'addBook' | 'editBook' | 'deleteBook'

export interface ModalStore<T = null> {
  type: ModalType | null
  data: T
  isOpen: boolean
  onOpen: (type: ModalType, data?: T) => void
  onClose: () => void
}

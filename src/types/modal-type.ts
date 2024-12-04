/* eslint-disable @typescript-eslint/no-explicit-any */

export type ModalType = 'addBook' | 'editBook' | 'deleteBook'

export interface ModalStore {
  type: ModalType | null
  data: any
  isOpen: boolean
  onOpen: (type: ModalType, data?: any) => void
  onClose: () => void
}

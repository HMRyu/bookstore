import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '../ui/button'
import useModal from '@/store/use-modal-store'
import { deleteBook } from '@/actions/delete-book'

export default function DeleteBookModal() {
  const { isOpen, onClose, type, data } = useModal()
  const isModalOpen = isOpen && type === 'deleteBook'

  const handleDeleteClick = async (id: string) => {
    await deleteBook(id)

    onClose()
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data.title} 정보를 정말 삭제하시겠습니까?</DialogTitle>
        </DialogHeader>
        <DialogDescription />
        <DialogFooter>
          <Button type="submit" variant={'destructive'} onClick={onClose}>
            취소하기
          </Button>
          <Button
            type="submit"
            variant={'outline'}
            onClick={() => handleDeleteClick(data.id)}
          >
            삭제하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

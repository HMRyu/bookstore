import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import useModal from '@/store/use-modal-store'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { AddBookForm, addBookFormSchema } from '@/schemas/book'
import { zodResolver } from '@hookform/resolvers/zod'
import { addBook } from '@/actions/add-book'

export default function AddBookModal() {
  const { isOpen, onClose, type } = useModal()
  const isModalOpen = isOpen && type === 'addBook'

  const form = useForm<AddBookForm>({
    resolver: zodResolver(addBookFormSchema),
    defaultValues: {
      title: '',
      author: '',
      subject: '',
      quantity: 0,
    },
  })

  const onSubmit = async (data: AddBookForm) => {
    const result = await addBook(data)

    if (result.status === 'success') {
      onClose()
      form.reset()
    } else {
      alert(result.error || '책 추가 중 문제가 발생했습니다.')
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>책 추가하기</DialogTitle>
          <DialogDescription>새로운 책을 추가합니다.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>책 제목</FormLabel>
                  <FormControl>
                    <Input placeholder="책의 제목을 입력해주세요" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>저자</FormLabel>
                  <FormControl>
                    <Input placeholder="책의 저자를 입력해주세요" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>분야</FormLabel>
                  <FormControl>
                    <Input placeholder="책의 분야를 입력해주세요" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>수량</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="책의 수량을 입력해주세요"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="button" variant="destructive" onClick={onClose}>
                취소하기
              </Button>
              <Button type="submit" variant="outline">
                추가하기
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

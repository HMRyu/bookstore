'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
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

import { BookInputForm, bookInputFormSchema } from '@/schemas/book'
import useModal from '@/store/use-modal-store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { editBook } from '@/actions/edit-book'
import { useEffect } from 'react'

export default function EditBookModal() {
  const { isOpen, onClose, type, data } = useModal()
  const isModalOpen = isOpen && type === 'editBook'

  const form = useForm<BookInputForm>({
    resolver: zodResolver(bookInputFormSchema),
    defaultValues: {
      title: '',
      author: '',
      subject: '',
      quantity: 0,
    },
  })

  useEffect(() => {
    if (isModalOpen && data) {
      form.reset({
        title: data.title || '',
        author: data.author || '',
        subject: data.subject || '',
        quantity: data.quantity || 0,
      })
    }
  }, [isModalOpen, data, form])

  const onSubmit = async (editData: BookInputForm) => {
    const result = await editBook(data.id, editData)

    if (result.status === 'success') {
      onClose()
      form.reset()
    } else {
      alert(result.error || '책 수정 중 문제가 발생했습니다.')
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>책 수정하기</DialogTitle>
          <DialogDescription>책 정보를 수정합니다.</DialogDescription>
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
                    <Input placeholder="title" {...field} />
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
                    <Input placeholder="title" {...field} />
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
                    <Input placeholder="title" {...field} />
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
                수정하기
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

import { z } from 'zod'

export const bookListItemSchema = z.object({
  id: z.string(),
  title: z.string().min(1, '제목은 필수 입력 사항입니다.'),
  author: z.string().min(1, '저자는 필수 입력 사항입니다.'),
  subject: z.string().min(1, '주제는 필수 입력 사항입니다.'),
  quantity: z.number().int().min(0, '올바른 숫자를 입력해주세요.'),
  salesVolume: z
    .number()
    .int()
    .min(0, 'Sales volume cannot be negative')
    .default(0),
})

export type BookListItem = z.infer<typeof bookListItemSchema>

export const getBooksResponseSchema = z.object({
  books: z.array(bookListItemSchema),
})

export type GetBooksResponse = z.infer<typeof getBooksResponseSchema>

export const bookInputFormSchema = z.object({
  title: z.string().min(1, '제목은 필수 입력 사항입니다.'),
  author: z.string().min(1, '저자는 필수 입력 사항입니다.'),
  subject: z.string().min(1, 'Subject is 주제는 필수 입력 사항입니다.'),
  quantity: z.number().int().min(0, '올바른 숫자를 입력해주세요.'),
})

export type BookInputForm = z.infer<typeof bookInputFormSchema>

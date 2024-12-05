import { z } from 'zod'

export const bookListItemSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  subject: z.string().min(1, 'Subject is required'),
  quantity: z.number().int().min(0, 'Quantity cannot be negative'),
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

export const addBookFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  subject: z.string().min(1, 'Subject is required'),
  quantity: z.number().int().min(0, 'Quantity cannot be negative'),
})

export type AddBookForm = z.infer<typeof addBookFormSchema>

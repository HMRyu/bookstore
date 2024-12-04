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

export const paginationSchema = z.object({
  currentPage: z
    .number()
    .int()
    .min(1, 'Current page must be greater than or equal to 1'),
  pageSize: z
    .number()
    .int()
    .min(1, 'Page size must be greater than or equal to 1'),
  totalPages: z
    .number()
    .int()
    .min(1, 'Total pages must be greater than or equal to 1'),
  totalBooks: z
    .number()
    .int()
    .min(0, 'Total books must be greater than or equal to 0'),
})

export const getBooksResponseSchema = z.object({
  books: z.array(bookListItemSchema),
  pagination: paginationSchema,
})

export type GetBooksResponse = z.infer<typeof getBooksResponseSchema>

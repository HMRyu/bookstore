import { BookListItem } from '@/schemas/book'

export function BookDetail({ book }: { book: BookListItem }) {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">{book.title}</h1>
      <p className="text-lg">
        <span className="font-semibold">저자:</span> {book.author}
      </p>
      <p className="text-lg">
        <span className="font-semibold">분야:</span> {book.subject}
      </p>
      <p className="text-lg">
        <span className="font-semibold">수량:</span> {book.quantity}
      </p>
    </div>
  )
}

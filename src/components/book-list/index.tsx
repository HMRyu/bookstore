import { GetBooksResponse } from '@/schemas/book'

export default function BookList({ books, pagination }: GetBooksResponse) {
  return (
    <div>
      <h2>Books</h2>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.subject}</p>
          <p>Quantity: {book.quantity}</p>
          <p>Sales Volume: {book.salesVolume}</p>
        </div>
      ))}
      <div>
        <p>
          Page {pagination.currentPage} of {pagination.totalPages}
        </p>
        <p>Total Books: {pagination.totalBooks}</p>
      </div>
    </div>
  )
}

import { getBooks } from '@/actions/get-books'
import BookList from '@/components/book-list'

export default async function Home() {
  const result = await getBooks()

  if (result.status === 'success') {
    const { books, pagination } = result.data
    return (
      <div>
        <h1>Book List</h1>
        <BookList books={books} pagination={pagination} />
      </div>
    )
  } else {
    throw new Error(result.error)
  }
}

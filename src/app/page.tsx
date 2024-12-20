import { getBooks } from '@/actions/get-books'
import BookList from '@/components/book-list'

export default async function Home() {
  const result = await getBooks()

  if (result.status === 'success') {
    const { books } = result.data

    return <BookList books={books} />
  } else {
    throw new Error(result.error)
  }
}

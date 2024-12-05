import { getBook } from '@/actions/get-book'
import { BookDetail } from '@/components/book-detail'

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id: bookId } = await params

  const result = await getBook(bookId)

  if (result.status === 'success') {
    const book = result.data

    return <BookDetail book={book} />
  } else {
    throw new Error(result.error)
  }
}

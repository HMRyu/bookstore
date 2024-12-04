import { getBooks } from '@/actions/get-books'

export default async function Home() {
  const result = await getBooks()

  if (result.status === 'success') {
    const { books } = result.data
    console.log(books)
  } else {
    throw new Error(result.error)
  }

  return <div>Home</div>
}

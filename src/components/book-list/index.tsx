import { GetBooksResponse } from '@/schemas/book'
import { DataTable } from '../data-table'
import { columns } from '../columns'

export default function BookList({ books }: GetBooksResponse) {
  return <DataTable columns={columns} data={books} />
}

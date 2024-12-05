'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { BookListItem } from '@/schemas/book'
import useModal from '@/store/use-modal-store'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

export const columns: ColumnDef<BookListItem>[] = [
  {
    accessorKey: 'title',
    header: '제목',
  },
  {
    accessorKey: 'author',
    header: '저자',
  },
  {
    accessorKey: 'quantity',
    header: '수량',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { onOpen } = useModal()

      const bookData = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onOpen('editBook', bookData)}>
              수정하기
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                onOpen('deleteBook', bookData)
              }}
            >
              삭제하기
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

'use server'

import { BookListItem } from '@/schemas/book'
import { ActionResult } from '../action-result'

export const getBook = async (
  bookId: string
): Promise<ActionResult<BookListItem>> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    if (!baseUrl) {
      throw new Error('API base URL is not defined.')
    }

    const response = await fetch(`${baseUrl}/api/books/${bookId}`)

    if (!response.ok) {
      throw new Error('Failed to fetch books')
    }

    const { success, data } = await response.json()

    if (success) {
      return {
        status: 'success',
        data: data,
      }
    } else {
      return {
        status: 'error',
        error: '데이터의 형식이 올바르지 않습니다.',
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 'error',
        error: error.message,
      }
    }

    return {
      status: 'error',
      error: '알 수 없는 에러가 발생했습니다. 다시 시도해주세요',
    }
  }
}

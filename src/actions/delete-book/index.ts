'use server'

import { revalidatePath } from 'next/cache'
import { ActionResult } from '../action-result'

export const deleteBook = async (id: string): Promise<ActionResult<null>> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    if (!baseUrl) {
      throw new Error('API base URL is not defined.')
    }

    const response = await fetch(`${baseUrl}/api/books/${id}`, {
      method: 'DELETE',
    })

    revalidatePath('/', 'layout')

    if (!response.ok) {
      throw new Error('Failed to fetch books')
    }

    const { success } = await response.json()

    if (success) {
      return {
        status: 'success',
        data: null,
      }
    } else {
      return {
        status: 'error',
        error: '책 정보를 삭제하는데 실패했습니다.',
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

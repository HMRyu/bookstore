'use client'

import { useEffect, useState } from 'react'

import AddBookModal from '@/components/add-book-modal'
import DeleteBookModal from '@/components/delete-book-modal'
import EditBookModal from '@/components/edit-book-modal'

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <AddBookModal />
      <EditBookModal />
      <DeleteBookModal />
    </>
  )
}

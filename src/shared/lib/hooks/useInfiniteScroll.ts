import { useCallback, useEffect, useRef, useState } from 'react'
import axios from 'axios'

const PAGE_SIZE = 20

export const useInfiniteScroll = <T, E extends HTMLElement = HTMLDivElement>(
  url: string
) => {
  const flagRef = useRef<E>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [data, setData] = useState<T[]>([])
  const [page, setPage] = useState<number>(1)

  const getNewData = async () => {
    if (isLoading || !hasMore) return

    setIsLoading(true)

    try {
      const response = await axios.get(`${url}?page=${page}&size=${PAGE_SIZE}`)
      const newItems: T[] = response.data.results
      if (newItems.length < PAGE_SIZE) {
        setHasMore(false)
      }
      setData((prev) => [...prev, ...newItems])
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getNewData()
  }, [page])

  const lastNodeRef = useCallback((node: E) => {
    if (isLoading) return;

    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1)
      }
    })

    if(node){
      observerRef.current.observe(node)
    }

  }, [isLoading, hasMore])

  return { isLoading, data, lastNodeRef }
}

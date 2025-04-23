import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from 'react'

interface WishlistContextValue {
  ids: Set<string>
  toggle: (id: string) => void
}

import productApi from '@/app/api/products'

//initialize the context
const WishlistContext = createContext<WishlistContextValue | null>(null)

// Provider
export function WishlistProvider({ children }: PropsWithChildren) {
  const [ids, setIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    // fetch once
    const fetchWishlist = async () => {
      const { data } = await productApi.getUserWishlist()
      setIds(new Set(data.map((p: any) => p._id)))
    }
    fetchWishlist()
  }, [])

  const toggle = (id: string) =>
    setIds((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  return (
    <WishlistContext.Provider value={{ ids, toggle }}>
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContext

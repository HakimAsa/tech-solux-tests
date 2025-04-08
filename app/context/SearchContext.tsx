import { createContext, ReactNode, useContext, useState } from 'react'

interface SearchContextType {
  searchTerm: string
  setSearchTerm: (text: string) => void
  searchResults: any[]
  searchProducts: (text: string, products: any[]) => void
  allProducts: any[]
  setAllProducts: (products: any[]) => void // setter for allProducts
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export default function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<{ name: string }[]>([])
  const [allProducts, setAllProducts] = useState<{ name: string }[]>([]) // 💡 this is the key

  const searchProducts = (text: string) => {
    setSearchTerm(text)
    if (text.trim() === '') {
      setSearchResults([])
      return
    }
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    )
    setSearchResults(results)
    // setSearchResults(results as never[])
  }

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchResults,
        searchProducts,
        allProducts,
        setAllProducts,
      }} // expose setter
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error('SearchContext not properly initialized')
  }
  return context
}

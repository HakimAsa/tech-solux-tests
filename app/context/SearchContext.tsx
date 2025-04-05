import { createContext, ReactNode, useContext, useState } from 'react'

interface SearchContextType {
  searchTerm: string
  setSearchTerm: (text: string) => void
  searchResults: any[]
  searchProducts: (text: string, products: any[]) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export default function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const searchProducts = (text: string, products: any[]) => {
    setSearchTerm(text)
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    )
    setSearchResults(results as never[])
  }

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, searchResults, searchProducts }}
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

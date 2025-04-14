import TsProps from '@/TsProps'
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import Storage from '../utils/Storage'

interface CartContextType {
  cart: any[]
  addToCart: (item: { _id: string; [key: string]: any }) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  selectedQuantities: { [key: string]: number }
  updateQuantity: (itemId: string, quantity: number) => void
  setQuantity: (id: string, quantity: number) => void
}

const CartContext = createContext<CartContextType | null>(null)

const STORAGE_KEY = '@cart_items'

const cartReducer = (state: any[], action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'LOAD_CART':
      return action.payload || []
    case 'ADD_TO_CART':
      //   const existingItem = state.find((i) => i._id === action.payload._id)
      //   if (existingItem) return state // Skip duplicates for now
      //   return [...state, action.payload]
      const itemIndex = state.findIndex((i) => i._id === action.payload._id)
      if (itemIndex >= 0) {
        const updatedState = [...state]
        updatedState[itemIndex].quantity += 1
        return updatedState
      }
      return [...state, { ...action.payload, quantity: 1 }]
    case 'INCREASE_QUANTITY': {
      const updatedState = state.map((item) =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      return updatedState
    }
    case 'SET_QUANTITY': {
      const updatedState = state.map((item) =>
        item._id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      return updatedState
    }
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item._id !== action.payload)
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export const CartProvider = ({ children }: TsProps) => {
  const [selectedQuantities, setSelectedQuantities] = useState({}) // Store quantities globally

  const [cart, dispatch] = useReducer(cartReducer, [])

  const updateQuantity = (itemId: string, quantity: number) => {
    setSelectedQuantities((prev) => ({
      ...prev,
      [itemId]: quantity, // Update the quantity for the specific item
    }))
  }

  // Load cart on startup
  useEffect(() => {
    const loadCart = async () => {
      try {
        const savedCart = await Storage.getData(STORAGE_KEY)
        if (savedCart) {
          dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) })
        }
      } catch (e) {
        console.error('Failed to load cart', e)
      }
    }
    loadCart()
  }, [])

  // Save cart to AsyncStorage every time it changes
  useEffect(() => {
    const saveCart = async () => {
      try {
        await Storage.storeData(STORAGE_KEY, JSON.stringify(cart))
      } catch (e) {
        console.error('Failed to save cart', e)
      }
    }
    saveCart()
  }, [cart])

  const addToCart = (item: { _id: string; [key: string]: any }) =>
    dispatch({ type: 'ADD_TO_CART', payload: item })
  const removeFromCart = (id: string) =>
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const setQuantity = (id: string, quantity: number | string) =>
    dispatch({ type: 'SET_QUANTITY', payload: { id, quantity } })

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        selectedQuantities,
        updateQuantity,
        setQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

export default CartContext

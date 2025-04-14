import TsProps from '@/TsProps'
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import Storage from '../utils/Storage'

interface CartContextType {
  cart: any[]
  addToCart: (item: { _id: string; [key: string]: any }) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
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
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item._id !== action.payload)
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export const CartProvider = ({ children }: TsProps) => {
  const [cart, dispatch] = useReducer(cartReducer, [])

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

  return (
    <CartContext.Provider
      value={{ cart, clearCart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

export default CartContext

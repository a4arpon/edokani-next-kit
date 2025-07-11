import { createContext, useState } from "react"
import type { CartItem, SessionContextType } from "#/types/sessionContext.types"

export const SessionContext = createContext<SessionContextType | null>(null)

export const SessionContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const pushItem = (item: CartItem) => {
    const cartItems = [...cart]
    cartItems.push(item)

    setCart(cartItems)
  }

  const contextValue: SessionContextType = {
    cart: cart,
    pushItem: pushItem,
  }

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  )
}

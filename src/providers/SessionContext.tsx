import { createContext, useState } from "react"
import type { CartItem, SessionContextType } from "#/types/sessionContext.types"

export const SessionContext = createContext<SessionContextType | null>(null)

/**
 * Provides session context for the application, including cart functionality.
 *
 * @param children - React nodes to be wrapped by the session context provider
 * @returns A SessionContext provider with cart state and pushItem method
 *
 * @remarks
 * The provider maintains cart state and exposes methods to manipulate it.
 * pushItem adds a new item to the cart while preserving existing items.
 */
export const SessionContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const pushItem = (item: CartItem) => {
    const cartItems = [...cart]
    const existingItemIndex = cartItems.findIndex(
      (ci) => ci.variationID === item.variationID
    )

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantityAdded += 1
    } else {
      cartItems.push(item)
    }

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

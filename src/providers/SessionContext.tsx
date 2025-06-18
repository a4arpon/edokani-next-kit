import { createContext } from "react"
import type { SessionContextType } from "#/types/sessionContext.types"

export const SessionContext = createContext<SessionContextType>({
  cart: [],
})

export const SessionContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const contextValue: SessionContextType = {
    cart: [],
  }

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  )
}

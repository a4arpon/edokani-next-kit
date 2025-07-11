import { use } from "react"
import { SessionContext } from "#/providers/SessionContext"
import type { SessionContextType } from "#/types/sessionContext.types"

export const useSession = () => {
  const { cart, pushItem } = use(SessionContext) as SessionContextType

  return {
    cart,
    pushItem,
  }
}

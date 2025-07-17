import { toast } from "sonner"
import type z from "zod"
import { httpClient } from "#/libs/http.client.lib"
import { createGuestOrderValidation } from "#/zod/order.zod"

class GuestOrderServices {
  public async createGuestOrder(
    payload: z.infer<typeof createGuestOrderValidation>
  ) {
    if (!createGuestOrderValidation.safeParse(payload)?.success) {
      const err =
        createGuestOrderValidation.safeParse(payload)?.error?.issues[0]
      console.log(err)
      toast.error(`${err?.path}: ${err?.message}`)
      return false
    }

    const response = await httpClient({
      method: "POST",
      url: "orders/manual/guest-order",
      payload: payload,
    })

    if (response?.message) {
      toast.success(response?.message)
      return true
    }
  }
}

export const guestOrderServices = new GuestOrderServices()

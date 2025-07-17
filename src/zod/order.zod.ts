import z from "zod"

export const createGuestOrderValidation = z.object({
  customer: z.object({
    phone: z.string().min(11).max(13),
    name: z.string(),
    email: z.email(),
  }),

  shippingAddress: z.object({
    areaDescription: z.string(),
    city: z.string(),
    state: z.string(),
    googleMapURL: z.string(),
  }),

  purchasedItems: z.array(
    z.object({
      itemID: z.string(),
      isOnOffer: z.boolean(),
      quantity: z.number(),
      variantID: z.string(),
    })
  ),
})

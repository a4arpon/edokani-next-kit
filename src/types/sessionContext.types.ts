export type SessionContextType = {
  cart: CartItem[]
}

export type CartItem = {
  productName: string
  productID: string
  variationID: string
  productSKU: string
  productSlug: string
  productImage: string
  quantityAdded: number
}

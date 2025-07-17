export type SessionContextType = {
  cart: CartItem[]
  pushItem: (item: CartItem) => void
  clearCartItemsAll: () => void
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

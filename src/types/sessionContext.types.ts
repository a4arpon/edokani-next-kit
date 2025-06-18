export type SessionContextType = {
  cart: CartItem[]
}

export type CartItem = {
  productID: string
  productImage: string
  productName: string
  productSKU: string
  price: number
  quantity: number
}

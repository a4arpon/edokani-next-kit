export type CategoryType = {
  readonly id: string
  readonly slug: string
  readonly name: string
  readonly tags: readonly string[]
  readonly info: string
  readonly summary: string
  readonly description: string
  readonly thumbnail: string
  readonly images: readonly string[]
  readonly createdAt: string
  readonly updatedAt: string
}

export type SubCategoryType = {
  readonly category: string
} & CategoryType

export type ProductType = {
  readonly id: string
  readonly slug: string
  readonly category: Readonly<CategoryType>
  readonly subCategory: Readonly<SubCategoryType>
  readonly brand: Readonly<BrandSummary>
  readonly name: string
  readonly tags: readonly string[]
  readonly subTitle: string
  readonly summary: string
  readonly description: string
  readonly thumbnail: string
  readonly images: string[]
  readonly rating: number
  readonly price: number
  readonly offerPrice: number
  readonly sold: number
  readonly nowAvailable: number
  readonly createdAt: string
  readonly updatedAt: string
  readonly extra: {
    isOnStock: boolean
    isOnSale: boolean
    upcomingStock: boolean
  }
}

type BrandSummary = {
  readonly id: string
  readonly name: string
  readonly slug: string
}

export type ProductVariant = {
  readonly id: string
  readonly sku: string
  readonly product: string
  readonly price: number
  readonly stock: number
  readonly image: string
  readonly variant: {
    key: string
    val: string
  }[]
  readonly createdAt: string
  readonly updatedAt: string
}

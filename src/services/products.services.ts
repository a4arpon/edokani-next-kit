import { httpClient } from "#/libs/http.client.lib"
import type { ProductType, ProductVariant } from "#/types/catalogs.types"

class ProductsServices {
  /**
   * Queries products from the catalog with pagination and optional category filtering.
   * @param currentPage - The current page number (default: "1")
   * @param limit - The number of items per page (default: "50")
   * @param params - Optional parameters including category filter
   * @returns Promise resolving to an array of ProductType or undefined
   */
  public async queryProducts(
    currentPage = "1",
    limit = "50",
    params?: {
      category?: string
    }
  ) {
    const response = await httpClient<ProductType[]>({
      method: "GET",
      url: "catalogs/products",
      params: {
        page: currentPage,
        limit: limit,
        category: params?.category,
      },
    })

    return response?.data
  }

  public async getProduct(productSlug: string, includeRecommended = "true") {
    const response = await httpClient<ProductType>({
      method: "GET",
      url: `catalogs/products/${productSlug}?includeRecommended=${includeRecommended}`,
    })

    return response?.data
  }

  /**
   * Fetches variants for a specific product by its ID.
   * @param productID - The ID of the product to fetch variants for
   * @returns Promise containing the product variants data or undefined
   */
  public async getProductVariants(productID: string) {
    const response = await httpClient<ProductVariant[]>({
      method: "GET",
      url: `catalogs/products/${productID}/variants`,
    })

    return response?.data
  }
}

export const productsServices = new ProductsServices()

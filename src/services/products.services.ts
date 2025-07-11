import { httpClient } from "#/libs/http.client.lib"
import type { ProductType } from "#/types/catalogs.types"

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
}

export const productsServices = new ProductsServices()

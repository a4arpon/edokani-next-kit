import { httpClient } from "#/libs/http.client.lib"
import type { ProductType } from "#/types/catalogs.types"

class ProductsServices {
  public async queryProducts(
    currentPage = "1",
    limit = "50",
    category?: string
  ) {
    const response = await httpClient<ProductType[]>({
      method: "GET",
      url: "catalogs/products",
      params: {
        page: currentPage,
        limit: limit,
        category: category,
      },
    })

    return response?.data
  }
}

export const productsServices = new ProductsServices()

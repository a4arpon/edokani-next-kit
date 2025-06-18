import { httpClient } from "#/libs/http.client.lib"

class ProductsServices {
  public async queryProducts(currentPage: string, limit = "20") {
    const response = await httpClient({
      method: "GET",
      url: "products",
      params: {
        page: currentPage,
        limit: limit,
      },
    })

    return response?.data
  }
}

export const productsServices = new ProductsServices()

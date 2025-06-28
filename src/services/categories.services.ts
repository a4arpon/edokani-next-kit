import { httpClient } from "#/libs/http.client.lib"
import type { CategoryType } from "#/types/catalogs.types"

class CategoriesServices {
  public async queryCategories() {
    const response = await httpClient<CategoryType[]>({
      method: "GET",
      url: "catalogs/categories",
    })

    return response?.data
  }
}

export const categoriesServices = new CategoriesServices()

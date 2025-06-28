import { httpClient } from "#/libs/http.client.lib"
import type { SubCategoryType } from "#/types/catalogs.types"

class SubCategoriesServices {
  public async querySubCategories() {
    const response = await httpClient<SubCategoryType[]>({
      method: "GET",
      url: "catalogs/subcategories?includeAll=true",
    })

    return response?.data
  }
}

export const subCategoriesServices = new SubCategoriesServices()

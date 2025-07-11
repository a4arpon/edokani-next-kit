import { httpClient } from "#/libs/http.client.lib"
import type { CategoryType, SubCategoryType } from "#/types/catalogs.types"

class CategoriesServices {
  public async queryCategories() {
    const response = await httpClient<CategoryType[]>({
      method: "GET",
      url: "catalogs/categories",
    })

    return response?.data
  }

  public async querySubCategoriesByCategorySlug(categorySlug: string) {
    const response = await httpClient<SubCategoryType[]>({
      method: "GET",
      url: `catalogs/categories/${categorySlug}/subcategories`,
    })

    return response?.data
  }
}

export const categoriesServices = new CategoriesServices()

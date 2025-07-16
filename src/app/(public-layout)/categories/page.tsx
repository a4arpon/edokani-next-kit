import { CategoryCard } from "#/components/pages/categories-page/CategoryCard"
import { categoriesServices } from "#/services/categories.services"

const CategoriesPage = async () => {
  const [categories] = await Promise.all([categoriesServices.queryCategories()])

  return (
    <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
      {categories?.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          defaultHeight="auto"
        />
      ))}
    </div>
  )
}

export default CategoriesPage

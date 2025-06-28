import { CategoryCard } from "#/components/pages/categories-page/CategoryCard"
import { SubCategoryCard } from "#/components/pages/categories-page/SubCategoryCard"
import { ProductsCard } from "#/components/pages/products-page/ProductsCard"
import { categoriesServices } from "#/services/categories.services"
import { productsServices } from "#/services/products.services"
import { subCategoriesServices } from "#/services/subcategories.services"

const HomePage = async () => {
  const [categories, subcategories, products] = await Promise.all([
    categoriesServices.queryCategories(),
    subCategoriesServices.querySubCategories(),
    productsServices.queryProducts(),
  ])

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-3.5">
        {categories?.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <div className="grid  grid-cols-2 lg:grid-cols-6 gap-3.5">
        {subcategories?.map((subCategory) => (
          <SubCategoryCard key={subCategory.id} subCategory={subCategory} />
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-3.5">
        <div className="col-span-2 lg:row-span-2">
          {categories && categories?.length > 0 && (
            <CategoryCard category={categories?.[0]} defaultHeight="auto" />
          )}
        </div>
        {subcategories?.map((subCategory) => (
          <SubCategoryCard key={subCategory.id} subCategory={subCategory} />
        ))}
      </div>
      <div className="grid  grid-cols-2 lg:grid-cols-6 gap-3.5">
        {products?.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default HomePage

import { SubCategoryCard } from "#/components/pages/categories-page/SubCategoryCard"
import { categoriesServices } from "#/services/categories.services"

type Params = { categorySlug: string }

const CategorySlug = async ({ params }: { params: Params }) => {
  const [subCategories] = await Promise.all([
    categoriesServices.querySubCategoriesByCategorySlug(params?.categorySlug),
  ])

  return (
    <div className="grid grid-cols-4 gap-3.5">
      {subCategories?.map((item) => (
        <SubCategoryCard subCategory={item} key={item?.id} />
      ))}
    </div>
  )
}

export default CategorySlug

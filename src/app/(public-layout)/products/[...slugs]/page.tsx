import Image from "next/image"
import { ProductVariations } from "#/components/pages/products-page/ProductVariations"
import { AppConstants } from "#/consts/app.const"
import { productsServices } from "#/services/products.services"

type Params = {
  slugs: [string, string, string]
}

const ProductPage = async ({ params }: { params: Promise<Params> }) => {
  const {
    slugs: [categorySlug, subCategorySlug, productSlug],
  } = await params

  const [product] = await Promise.all([
    productsServices.getProduct(productSlug),
  ])

  if (!product) {
    return <h2>Product not found...</h2>
  }

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-3.5">
        <div className="space-y-3.5">
          <Image
            src={product?.thumbnail}
            height={1024}
            width={1024}
            alt={product?.name}
            className="object-cover object-center lg:h-[680px] lg:w-[680px]"
          />
          <div className="flex flex-wrap gap-3.5">
            <Image
              src={product?.thumbnail}
              height={248}
              width={248}
              alt={product?.name}
              className="object-cover h-[120px] w-[120px]"
            />
          </div>
        </div>
        <div className="space-y-3.5">
          <h2 className="text-3xl font-semibold leading-relaxed">
            {product?.name}
          </h2>
          <hr />
          <p className="text-xl font-bold">
            Regular Price - {AppConstants.APP_CURRENCY} {product?.price}
          </p>
          <p className="text-lg font-semibold">
            Stocks Available - {product?.nowAvailable}
          </p>
          <ProductVariations productID={product?.id} />
          <hr />
          <details>
            <summary>{product?.subTitle}</summary>
            <p>{product?.summary}</p>
          </details>
        </div>
      </div>
      <div>
        <details>
          <summary>Description</summary>
          <div
            // biome-ignore lint/security/noDangerouslySetInnerHtml:true
            dangerouslySetInnerHTML={{
              __html: product?.description,
            }}
          />
        </details>
      </div>
    </>
  )
}

export default ProductPage

"use client"

import { CheckIcon, MinusIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "#/components/ui/button"
import { AppConstants } from "#/consts/app.const"
import { useProductVariants } from "#/hooks/useProducts"

export const ProductVariations = ({ productID }: { productID: string }) => {
  const [selectedVariant, setSelectedVariant] = useState<{
    variationID: string
    productID: string
    productSKU: string
    quantityAdded: number
  } | null>(null)
  const { isProductVariantsLoading, productVariants } =
    useProductVariants(productID)

  useEffect(() => {
    if (!isProductVariantsLoading) {
      if (productVariants && productVariants?.length > 0) {
        setSelectedVariant({
          productID: productID,
          productSKU: productVariants[0]?.sku,
          variationID: productVariants[0]?.id,
          quantityAdded: 1,
        })
      }
    }

    return () => {
      setSelectedVariant(null)
    }
  }, [isProductVariantsLoading, productVariants, productID])

  return (
    <div className="space-y-3.5">
      <div>
        {productVariants?.map((item) => (
          <div
            key={item?.id}
            className="flex flex-row gap-3.5 bg-secondary p-3.5 rounded items-center"
          >
            <Image
              src={item?.image ?? "N/A"}
              alt={`${AppConstants.APP_NAME} Product - ${item?.image}`}
              width={128}
              height={128}
              className="h-[72px] w-[72px] rounded object-cover object-center"
            />
            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-row justify-between items-center gap-3.5 flex-wrap">
                <h3 className="uppercase">SKU: {item?.sku}</h3>
                {selectedVariant?.variationID === item?.id ? (
                  <Button
                    className="rounded-full"
                    size="icon"
                    variant="default"
                  >
                    <CheckIcon />
                  </Button>
                ) : (
                  <Button
                    className="rounded-full"
                    size="icon"
                    variant="outline"
                  >
                    <MinusIcon />
                  </Button>
                )}
              </div>
              <p>Stock Available: {item?.stock}</p>
              <p>
                Price:{" "}
                <strong>
                  {AppConstants.APP_CURRENCY} {item?.price}
                </strong>
              </p>
            </div>
          </div>
        ))}
      </div>
      {!isProductVariantsLoading && (
        <div className="grid lg:grid-cols-2 gap-3.5">
          <Button className="w-full" variant="secondary">
            Add To Wishlist
          </Button>
          <Button className="w-full">Add To Cart</Button>
        </div>
      )}
    </div>
  )
}

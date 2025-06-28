import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader } from "#/components/ui/card"
import type { ProductType } from "#/types/catalogs.types"

export const ProductsCard = ({
  product,
  defaultImageHeight = "224ox",
}: {
  product: ProductType
  defaultImageHeight?: string
}) => {
  return (
    <Card className="py-3 gap-3 rounded-xl h-full justify-between">
      <CardHeader className="px-3">
        <Image
          src={product?.thumbnail ?? "https://picsum.photos/id/1005/400/200"}
          alt="Card"
          height={360}
          width={480}
          className={`rounded-lg w-full h-auto lg:h-[${defaultImageHeight}] object-cover`}
        />
        <CardDescription>{product?.sold} Sold</CardDescription> 
      </CardHeader>
      <CardContent className="p-0 px-3">
        <h3>{product?.name?.substring(0, 20)}...</h3>
      </CardContent>
    </Card>
  )
}

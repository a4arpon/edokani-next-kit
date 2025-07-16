import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "#/components/ui/card"
import type { SubCategoryType } from "#/types/catalogs.types"

export const SubCategoryCard = ({
  subCategory,
}: {
  subCategory: SubCategoryType
}) => {
  return (
    <Card className="py-3 gap-3 rounded-xl">
      <CardHeader className="px-3">
        <Image
          src={
            subCategory?.thumbnail ?? "https://picsum.photos/id/1005/400/200"
          }
          alt="Card"
          height={360}
          width={480}
          className="rounded-lg w-full h-auto lg:h-[224px] object-cover"
        />
      </CardHeader>
      <CardContent className="p-0 px-3">
        <h3 className="text-lg flex flex-row flex-wrap gap-3.5 justify-between items-center">
          <span>{subCategory?.name}</span>
          <ArrowUpRightIcon className="hidden lg:inline" />
        </h3>
      </CardContent>
    </Card>
  )
}

import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "#/components/ui/card"
import type { CategoryType } from "#/types/catalogs.types"

export const CategoryCard = ({
  category,
  defaultHeight = "420px",
}: {
  category: CategoryType
  defaultHeight?: string
}) => {
  return (
    <Link href={`/categories/${category?.slug}`}>
      <Card className="py-3 gap-3 rounded-xl h-full justify-between">
        <CardHeader className="px-3">
          <Image
            src={category?.thumbnail ?? "https://picsum.photos/id/1005/400/200"}
            alt="Card"
            height={360}
            width={480}
            className={`rounded-lg w-full h-auto lg:h-[${defaultHeight}] object-cover`}
          />
        </CardHeader>
        <CardContent className="p-0 px-3">
          <h3 className="text-lg flex flex-row flex-wrap gap-3.5 justify-between items-center">
            <span>{category?.name}</span>
            <ArrowUpRightIcon />
          </h3>
        </CardContent>
      </Card>
    </Link>
  )
}

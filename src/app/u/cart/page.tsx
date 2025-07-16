"use client"

import { ArrowRightIcon, TrashIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "#/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#/components/ui/table"
import { useSession } from "#/hooks/useSession"

const CartPage = () => {
  const { cart } = useSession()
  const router = useRouter()

  return (
    <>
      <div>
        <h2 className="text-3xl font-semibold text-center">Your Cart</h2>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart?.map((item) => (
              <TableRow key={item?.variationID}>
                <TableCell className="w-[120px]">
                  <Image
                    src={item?.productImage}
                    height={128}
                    width={128}
                    className="h-[98px] w-[98px] rounded-lg"
                    alt={item?.productName}
                  />
                </TableCell>
                <TableCell>{item?.productName?.substring(0, 60)}...</TableCell>
                <TableCell>{item?.quantityAdded}</TableCell>
                <TableCell>
                  <Button variant="destructive">
                    <TrashIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end">
        <Button onClick={() => router.push("/u/checkout")}>
          <ArrowRightIcon />
          <span>Checkout Now</span>
        </Button>
      </div>
    </>
  )
}

export default CartPage

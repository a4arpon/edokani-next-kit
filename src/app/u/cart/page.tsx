"use client"

import { TrashIcon } from "lucide-react"
import Image from "next/image"
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

  return (
    <>
      <div>
        <h2 className="text-3xl font-semibold text-center">Your Cart</h2>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead></TableHead>
              <TableHead>Variant</TableHead>
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
                <TableCell>{item?.productName}</TableCell>
                <TableCell>Paid</TableCell>
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
    </>
  )
}

export default CartPage

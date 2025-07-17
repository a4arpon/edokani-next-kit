"use client"

import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import type z from "zod"
import { Button } from "#/components/ui/button"
import { Input } from "#/components/ui/input"
import { Label } from "#/components/ui/label"
import { RadioGroup, RadioGroupItem } from "#/components/ui/radio-group"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#/components/ui/table"
import { useSession } from "#/hooks/useSession"
import type { createGuestOrderValidation } from "#/zod/order.zod"

const CheckoutPage = () => {
  const { cart } = useSession()
  const router = useRouter()

  const { register, handleSubmit } =
    useForm<z.infer<typeof createGuestOrderValidation>>()

  const handleFormSubmit = handleSubmit((data) => {
    const payload: z.infer<typeof createGuestOrderValidation> = {
      ...data,
      purchasedItems: cart?.map((item) => ({
        isOnOffer: false,
        itemID: item?.productID,
        variantID: item?.variationID,
        quantity: item?.quantityAdded,
      })),
    }
  })

  return (
    <div className="grid lg:grid-cols-7 gap-3.5">
      <form className="lg:col-span-3 space-y-5" onSubmit={handleFormSubmit}>
        <h2 className="w-full text-xl">Checkout Info</h2>
        <div className="space-y-3.5">
          <div className="flex flex-col gap-2.5">
            <Label>Full Name</Label>
            <Input
              {...register("customer.name", {
                required: true,
              })}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-2.5">
              <Label>Phone</Label>
              <Input
                {...register("customer.phone", {
                  required: true,
                })}
                required
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <Label>Email</Label>
              <Input
                {...register("customer.email", {
                  required: false,
                })}
              />
            </div>
          </div>
        </div>
        <div className="space-y-3.5">
          <h3>Shipping Info</h3>
          <div className="flex flex-col gap-2.5">
            <Label>Area</Label>
            <Input
              {...register("shippingAddress.areaDescription", {
                required: true,
              })}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-2.5">
              <Label>City</Label>
              <Input
                {...register("shippingAddress.city", {
                  required: true,
                })}
                required
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <Label>State</Label>
              <Input
                {...register("shippingAddress.state", {
                  required: true,
                })}
                required
              />
            </div>
          </div>
        </div>
        <div className="space-y-3.5">
          <h3>Payment Method</h3>
          <RadioGroup defaultValue="cash-On-delivery">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="cash-On-delivery" id="r1" />
              <Label htmlFor="r1">Cash On Delivery</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="comfortable" id="r2" disabled />
              <Label htmlFor="r2">Card Payment</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="compact" id="r3" disabled />
              <Label htmlFor="r3">Mobile Banking</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex justify-end">
          <Button>
            <ShoppingCart />
            <span>Confirm Order</span>
          </Button>
        </div>
      </form>
      <div />
      <div className="lg:col-span-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
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
                    className="h-[64px] w-[64px] rounded-lg"
                    alt={item?.productName}
                  />
                </TableCell>
                <TableCell>{item?.productName?.substring(0, 60)}...</TableCell>
                <TableCell>{item?.quantityAdded}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default CheckoutPage

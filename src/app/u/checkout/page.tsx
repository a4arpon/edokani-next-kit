import { Input } from "#/components/ui/input"
import { Label } from "#/components/ui/label"

const CheckoutPage = () => {
  return (
    <div className="grid lg:grid-cols-7 gap-3.5">
      <div className="lg:col-span-3">
        <h2 className="w-full text-center text-3xl">Checkout Info</h2>
        <div className="space-y-3.5">
          <div className="flex flex-col gap-2.5">
            <Label>Full Name</Label>
            <Input />
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-2.5">
              <Label>Phone</Label>
              <Input />
            </div>
            <div className="flex flex-col gap-2.5">
              <Label>Email</Label>
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage

import { MenuIcon, ShoppingCartIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AppConstants } from "#/consts/app.const"
import { useSession } from "#/hooks/useSession"
import { Button } from "../ui/button"

export const UserNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const { cart } = useSession()

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    handleResize() // Set initial value
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="w-full bg-foreground text-background">
      <nav
        className={`hidden md:flex items-center justify-between w-full transition-all duration-300 ${
          isDesktop ? "sticky top-0 z-50 container mx-auto py-6" : ""
        }`}
      >
        <div className="text-2xl font-bold">{AppConstants.SHORT_APP_NAME}</div>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          {cart?.length > 0 && (
            <Button variant="secondary">
              <ShoppingCartIcon />
              <span>Cart</span>
            </Button>
          )}
        </ul>
      </nav>

      {/* Mobile Menu Bar */}
      <nav className="md:hidden flex justify-between items-center px-4 py-3 bg-foreground text-background border-b">
        <div className="text-lg font-bold">MyBrand</div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-foreground text-background border-b py-2 px-4 space-y-2 animate-in fade-in slide-in-from-top-2">
          <Link
            href="/"
            className="block py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/"
            className="block py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          {cart?.length > 0 && (
            <Button>
              <ShoppingCartIcon />
              <span>Cart</span>
            </Button>
          )}
        </div>
      )}
    </header>
  )
}

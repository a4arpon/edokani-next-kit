import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "#/assets/css/globals.css"
import { AppConstants } from "#/consts/app.const"
import { AppProvider } from "#/providers/App.Provider"

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: AppConstants.APP_NAME,
  description: AppConstants.APP_DESCRIPTION,
  openGraph: {
    images: [
      {
        url: `${AppConstants.APP_DOMAIN}/assets/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: AppConstants.APP_NAME,
      },
    ],
    type: "website",
    title: AppConstants.APP_NAME,
    description: AppConstants.APP_DESCRIPTION,
    url: AppConstants.APP_DOMAIN,
    siteName: AppConstants.SHORT_APP_NAME,
  },
  twitter: {
    site: "@site",
    creator: "@creator",
    title: AppConstants.APP_NAME,
    description: AppConstants.APP_DESCRIPTION,
  },
}

/**
 * RootLayout component serves as the base layout for the application.
 * It wraps the children with necessary providers and sets up the basic HTML structure.
 * @param {React.ReactNode} children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The root layout structure with providers and global styles applied.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}

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

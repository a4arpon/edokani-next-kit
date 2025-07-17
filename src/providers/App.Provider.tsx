"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "#/components/ui/sonner"
import { SessionContextProvider } from "./SessionContext"

const queryClient = new QueryClient()

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionContextProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster position="top-center" closeButton />
    </SessionContextProvider>
  )
}

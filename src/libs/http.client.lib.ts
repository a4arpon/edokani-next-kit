import { isAxiosError } from "axios"
import { toast } from "sonner"
import { axiosInstance } from "./http.server.lib"
import { isBrowser } from "./utils"

/**
 * ---------------------------------------------------
 * Async API Handler
 * ---------------------------------------------------
 * Handles HTTP requests using the httpClient instance
 * with full async/await support and error handling.
 * ---------------------------------------------------
 */

interface HttpAsyncParams {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  url: string
  payload?: any
  params?: Record<string, any>
}

export async function httpClient<T = any>({
  method,
  url,
  payload,
  params,
}: HttpAsyncParams): Promise<T | null> {
  try {
    const response = await axiosInstance.request<T>({
      method: method?.toLowerCase(),
      url: url,
      data: payload,
      params: params,
      headers: {
        Authorization: `Bearer ${isBrowser ? localStorage.getItem("auth-token") : null}`,
      },
    })

    const result = await response.data

    return result
  } catch (error) {
    if (isAxiosError(error)) {
      if (isBrowser) {
        toast.error(error?.response?.data?.message)
        return null
      }
      console.error(error?.response?.data?.message)
      return null
    }

    if (error instanceof Error) {
      if (isBrowser) {
        toast.error(error?.message)
        return null
      }
      console.error(error?.message)
      return null
    }

    if (isBrowser) {
      toast.error("Unknown error")
      return null
    }

    console.error("Unknown error")
    return null
  }
}

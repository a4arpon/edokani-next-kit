import { isAxiosError } from "axios"
import { toast } from "sonner"
import { httpApi } from "./http.server.lib"

/**
 * ---------------------------------------------------
 * Async API Handler
 * ---------------------------------------------------
 * Handles HTTP requests using the httpClient instance
 * with full async/await support and error handling.
 * ---------------------------------------------------
 */

interface HttpAsyncParams {
  method: "get" | "post" | "put" | "delete" | "patch"
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
    const response = await httpApi.request<T>({
      method: method,
      url: url,
      data: payload,
      params: params,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    })

    const result = await response.data

    return result
  } catch (error) {
    if (isAxiosError(error)) {
      toast.error(error?.response?.data?.message)
      return null
    }

    if (error instanceof Error) {
      toast.error(error?.message)
      return null
    }

    toast.error("Unknown error")
    return null
  }
}

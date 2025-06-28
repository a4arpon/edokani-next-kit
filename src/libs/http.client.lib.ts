import { isAxiosError } from "axios"
import Cookie from "js-cookie"
import { toast } from "sonner"
import { axiosInstance } from "./http.server.lib"
import { isBrowser } from "./utils"

interface HttpAsyncParams {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  url: string
  // biome-ignore lint/suspicious/noExplicitAny: false
  payload?: any
  // biome-ignore lint/suspicious/noExplicitAny: false
  params?: Record<string, any>
}

// biome-ignore lint/suspicious/noExplicitAny: false
interface ResponseType<T = any> {
  success: boolean
  message: string
  data: T
  extra: object
}

// biome-ignore lint/suspicious/noExplicitAny: false
export async function httpClient<T = any>({
  method,
  url,
  payload,
  params,
}: HttpAsyncParams): Promise<ResponseType<T> | null> {
  let toaster: string | number = "696969"
  if (method !== "GET") {
    toaster = toast.loading("Please wait...")
  }
  try {
    const response = await axiosInstance.request<T>({
      method: method?.toLowerCase(),
      url: url,
      data: payload,
      params: params,
      headers: {
        Authorization: `Bearer ${isBrowser ? Cookie.get("better-auth.session_token") : null}`,
      },
    })

    const result = await response?.data

    if (isBrowser && method !== "GET") {
      toast.dismiss(toaster)
    }

    return result as ResponseType
  } catch (error) {
    if (isAxiosError(error)) {
      if (isBrowser) {
        toast.error(`${error.status} : ${error?.response?.data?.message}`, {
          id: toaster,
        })
        return null
      }
      console.error(error?.response?.data?.message)
      return null
    }

    if (error instanceof Error) {
      if (isBrowser) {
        toast.error(error?.message, {
          id: toaster,
        })
        return null
      }
      console.error(error?.message)
      return null
    }

    if (isBrowser) {
      toast.error("Unknown error", {
        id: toaster,
      })
      return null
    }

    console.error("Unknown error")
    return null
  }
}

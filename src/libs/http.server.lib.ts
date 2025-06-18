/**
 * ---------------------------------------------------
 * HTTP Interceptor & Axios
 * ---------------------------------------------------
 * */

import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_ENV_API_SERVER,
})

// interface HttpAsyncParams {
//   method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
//   url: string
//   payload?: any
//   params?: Record<string, any>
// }

// export async function httpServer<T = any>({
//   method,
//   url,
//   payload,
//   params,
// }: HttpAsyncParams): Promise<T | null> {
//   try {
//     const response = await axiosInstance.request<T>({
//       method: method?.toLowerCase(),
//       url: url,
//       data: payload,
//       params: params,
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
//       },
//     })

//     const result = await response.data

//     return result
//   } catch (error) {
//     if (isAxiosError(error)) {
//       console.error(error?.response?.data?.message)
//       return null
//     }

//     if (error instanceof Error) {
//       console.error(error?.message)
//       return null
//     }

//     console.error("Unknown error")
//     return null
//   }
// }

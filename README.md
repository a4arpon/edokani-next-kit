# eDokani NextKit

## Snapshot: 18Jun2k25
## Stage: Initial Alpha


Welcome to **Edoknai’s official Next.js integration kit**—a turnkey solution for building custom storefronts powered by the Edoknai commerce engine, fully owned and managed by **xRush**.

---

## 🚀 Introduction

This kit enables your team to deliver performant, secure, and extensible e-commerce experiences. It ships with:

- **Next.js (App Router)**
- **TailwindCSS** (utility-first styling)
- **Radix UI primitives** (bare-bones, accessible components)
- **React Query** (data fetching & caching)
- **Zod** (schema validation)
- **Axios** HTTP client wrapped in an async handler
- **Composable UI**—override and rebrand all components

---

## 🏢 Ownership & Governance

- **Parent Company & Authority**: xRush & Sian
- **Founder & Core Developer**: Sian – core development & planing
- **Co-Founder & Operations Lead**: MH-Pranto – distribution, sales, T&C  

**Contacts**  
- Dev inquiries: Shahin Islam Arpon (`https://www.linkedin.com/in/a4arpon/` on [LinkedIn](https://www.linkedin.com/in/a4arpon/))  
- Sales & distribution: MH Pranto ([WhatsApp Business] / [Facebook])

---

## ⚙️ Architecture & Approval

1. **Mandatory**: Adhere to this Starter Kit’s architecture philosophy.  
2. **Custom Designs**: Extend/override Radix components—these are bare-bones.  
3. **Dependency Hygiene**: Update to latest dependencies; enforce security & feature upgrades.  
4. **Approval Workflow**: Non-compliant apps will be rejected. Contact MH Pranto or Sian for exceptions.  
5. **Revenue Share**: Proposed 80% of net sales per instance (T&C subject to final agreement).

---

## 📁 Project Structure

```bash
src/
├── app/           # Layout & page entrypoints
├── assets/        # CSS globals, images, SVGs
├── components/    # Pages, shared modules, UI primitives
├── consts/        # AppConstants (domain, names, descriptions)
├── hooks/         # React Query–driven hooks
├── libs/          # httpClient, server utilities, helpers
├── providers/     # Context providers
├── services/      # Business-logic & data-fetch services
├── types/         # TypeScript interfaces & types
└── zod/           # Zod schemas for form validation
````

---

## 🛠️ Validation Schemas

```ts
import { z } from "zod"

export const authValidations = {
  register: z.object({
    name:     z.string(),
    email:    z.string().email(),
    password: z.string().min(8).max(64),
  }),
  login: z.object({
    email:    z.string().email(),
    password: z.string().min(8).max(64),
  }),
}
```

> All form submissions **must** leverage Zod schemas. Filename convention: `<feature>.zod.ts`.

---

## 🔌 HTTP Client Library

```ts
import { isAxiosError } from "axios"
import { toast }         from "sonner"
import { axiosInstance } from "./http.server.lib"
import { isBrowser }     from "./utils"

interface HttpAsyncParams {
  method:  "GET"|"POST"|"PUT"|"DELETE"|"PATCH"
  url:     string
  payload?: any
  params?:  Record<string, any>
}

export async function httpClient<T>({
  method, url, payload, params
}: HttpAsyncParams): Promise<T|null> {
  try {
    const response = await axiosInstance.request<T>({
      method:  method.toLowerCase(),
      url, data: payload, params,
      headers: { Authorization: `Bearer ${isBrowser ? localStorage.getItem("auth-token") : ""}` }
    })
    return response.data
  } catch (error) {
    const msg = isAxiosError(error)
      ? error.response?.data?.message
      : error instanceof Error
        ? error.message
        : "Unknown error"
    if (isBrowser) toast.error(msg)  
    else console.error(msg)
    return null
  }
}
```

> **Note**: All data fetching, mutations, and error handling **must** go through `httpClient`. It auto-resolves SSR vs. CSR contexts.

---

## 🔄 Service Layer

```ts
import { httpClient } from "#/libs/http.client.lib"

class ProductsServices {
  public async queryProducts(page = "1", limit = "20") {
    return await httpClient({
      method: "GET",
      url:    "products",
      params: { page, limit }
    })
  }
}

export const productsServices = new ProductsServices()
```

> Business logic & API interface separation prevents component complexity. Filename: `*.services.ts`.

---

## ⚛️ Hooks for Client-Side Data

```ts
import { useQuery }          from "@tanstack/react-query"
import { productsServices }  from "#/services/products.services"

/**
 * useProducts
 * Encapsulates product fetching with React Query.
 */
export const useProducts = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey:   ["products"],
    queryFn:    () => productsServices.queryProducts("1", "30"),
    keepPreviousData: true,
  })
  return {
    products:        data,
    isLoading,
    refetchProducts: refetch,
  }
}
```

> **Client-only** fetching must use hooks. Avoid `useEffect` for API calls—noncompliance triggers rejection.

---

## 📜 App Constants

```ts
export const AppConstants = {
  APP_NAME:        "eDokani - Starter Kit",
  SHORT_APP_NAME:  "eDokani",
  APP_DOMAIN:      "http://localhost:3000",
  APP_DESCRIPTION: "Simplifying your business with affordable solutions"
}
```

> All magic strings & URLs centralised under `consts/app.const.ts`.

---

## 🤝 Contribution & Extensions

* This kit is extensible: add new “recipes,” CI/CD guidelines, badge kits, etc., in future sections.
* Submit PRs or issues to the `develop` branch.
* For API reference, auth flows, deployment pipelines, see [Developer Portal](#).

---

## 🔐 Licensing & Terms

Licensed under the **Edoknai Platform Agreement**. Redistribution outside xRush’s ecosystem is prohibited.
For detailed T\&C and revenue-share finalization, contact MH Pranto or Sian.

---

> **Your storefront, your rules. Backed by xRush.**

```
```

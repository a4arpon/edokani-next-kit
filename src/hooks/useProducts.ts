import { useQuery } from "@tanstack/react-query"
import { productsServices } from "#/services/products.services"

/**
 * ------------------------------------------------
 * useProducts
 * ------------------------------------------------
 * */

export const useProducts = () => {
  const { data, isLoading, refetch } = useQuery({
    enabled: true,
    queryKey: ["products"],
    queryFn: () => productsServices.queryProducts("1", "30"),
  })

  return {
    products: data,
    isProductsLoading: isLoading,
    refetchProducts: refetch,
  }
}

export const useProductVariants = (productID: string) => {
  const { data, isLoading, refetch } = useQuery({
    enabled: true,
    queryKey: ["products", productID, "variants"],
    queryFn: () => productsServices.getProductVariants(productID),
  })

  return {
    productVariants: data,
    isProductVariantsLoading: isLoading,
    refetchProductVariants: refetch,
  }
}

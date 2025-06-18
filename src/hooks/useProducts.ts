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

import { useQuery } from "@tanstack/react-query"

/**
 * ------------------------------------------------
 * useProducts
 * ------------------------------------------------
 * */

export const useProducts = () => {
  const { data, isLoading, refetch } = useQuery({
    enabled: true,
    queryKey: ["products"],
    queryFn: () => {},
  })

  return {
    products: data,
    isProductsLoading: isLoading,
    refetchProducts: refetch,
  }
}

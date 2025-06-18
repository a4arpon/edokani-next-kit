import { useQuery } from "@tanstack/react-query"

/**
 * ------------------------------------------------
 * useProducts
 * ------------------------------------------------
 * */

export const useProducts = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () => {},
  })

  return {
    products: data,
    isProductsLoading: isLoading,
    refetchProducts: refetch,
  }
}

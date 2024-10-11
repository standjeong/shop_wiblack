import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { getProducts, addNewProduct } from '../api/firebase';

export default function useProducts() {
  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });

  const queryClient = useQueryClient();

  const addProductMutation = useMutation({
    mutationFn: ({ product, imgUrl }) => addNewProduct(product, imgUrl),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  return { productsQuery, addProductMutation };
}

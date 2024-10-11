import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import { addOrUpdateToCart, deleteFromCart, getCart } from '../api/firebase';

export default function useCart() {
  const { uid } = useAuthContext();

  const cartQuery = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCart(uid),
  });

  const queryClient = useQueryClient();

  const addOrUpdateToCartMutation = useMutation({
    mutationFn: (product) => addOrUpdateToCart(product, uid),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  const deleteFromCartMutation = useMutation({
    mutationFn: (orderId) => deleteFromCart(uid, orderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  return { cartQuery, addOrUpdateToCartMutation, deleteFromCartMutation };
}

import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import {
  addToCart,
  updateCartQuantity,
  deleteFromCart,
  getCart,
} from '../api/firebase';
import { v4 as uuidv4 } from 'uuid';

export default function useCart() {
  const { user, uid } = useAuthContext();

  const tempId = user === false ? getTempId() : null;
  function getTempId() {
    if (!uid && !localStorage.getItem('userId')) {
      const newId = 'temp' + uuidv4();
      localStorage.setItem('userId', newId);
      return newId;
    }
    return localStorage.getItem('userId');
  }

  const cartQuery = useQuery({
    queryKey: ['cart', uid ?? tempId],
    queryFn: () => getCart(uid ?? tempId),
  });

  const queryClient = useQueryClient();

  const addToCartMutation = useMutation({
    mutationFn: (product) => addToCart(product, uid ?? tempId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart', uid ?? tempId] });
    },
  });

  const updateCartQuantityMutaion = useMutation({
    mutationFn: ({ orderId, newQuantity }) =>
      updateCartQuantity(uid ?? tempId, orderId, newQuantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart', uid ?? tempId] });
    },
  });

  const deleteFromCartMutation = useMutation({
    mutationFn: (orderId) => deleteFromCart(uid ?? tempId, orderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart', uid ?? tempId] });
    },
  });

  return {
    cartQuery,
    addToCartMutation,
    updateCartQuantityMutaion,
    deleteFromCartMutation,
  };
}

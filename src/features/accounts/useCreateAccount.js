import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAccount } from './api';

export function useCreateAccount() {
  const queryClient = useQueryClient(); // access React Query’s global cache
  return useMutation({
    mutationFn: createAccount,
    onSuccess: () => queryClient.invalidateQueries(['accounts']), // Refresh accounts list after creating a new account causing re-render
  });
}

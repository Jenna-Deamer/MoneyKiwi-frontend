import { useQuery } from '@tanstack/react-query';
import { fetchAccounts } from './api';

export function useAccounts() {
	return useQuery({
		queryKey: ['accounts'], // unique cache key
		queryFn: fetchAccounts,
	});
}

const API_URL = import.meta.env.VITE_BACKEND_API_URL;

export async function fetchAccounts() {
	const response = await fetch(`${API_URL}/accounts/`, {
		credentials: 'include',
	});
	if (!response.ok) throw new Error('Failed to fetch accounts');
	const data = await response.json();
    console.log(data.data)
	return data.data;
}

export async function createAccount(accountData) {
	const response = await fetch(`${API_URL}/accounts/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		body: JSON.stringify(accountData),
	});
	if (!response.ok) throw new Error('Failed to create account');
	const data = await response.json();
	return data;
}

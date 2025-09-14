import { useAccounts } from './useAccounts';

function AccountsPage() {
    const { data: accounts, isLoading, isError, error } = useAccounts(); 

    if (isLoading) return <div>Loading accounts...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Your Accounts</h1>
            <button>Add Account</button>

            <div className='mt-4'>
                {accounts && accounts.length > 0 ? (
                    accounts.map((account) => (
                        <p key={account.id}>{account.name}</p>
                    ))
                ) : (
                    <div>
                        <p>No accounts found.</p>
                        <button>Create Account</button>
                    </div>
                )}
            </div>

        </div>
    );
}

export default AccountsPage;
import { useAccountContext } from './useAccountContext';

function AccountsPage() {
    const { accounts, loading, error } = useAccountContext();

    if (loading) {
        return <div>Loading accounts...</div>;
    }

    if (error) {
        return <div>Error loading accounts: {error.message}</div>;
    }

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
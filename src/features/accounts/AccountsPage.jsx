import { useAccounts } from './useAccounts';
import { useState } from 'react';
import Modal from '../../components/Modal';
import CreateAccountForm from './CreateAccountForm';

function AccountsPage() {
    const { data: accounts, isLoading, isError, error } = useAccounts();
    const [isModalOpen, setModalOpen] = useState(false);

    if (isLoading) return <div>Loading accounts...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Your Accounts</h1>
            <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Account
            </button>

            <div className='mt-4'>
                {accounts && accounts.length > 0 ? (
                    accounts.map((account) => (
                        <p key={account.id}>{account.name}</p>
                    ))
                ) : (
                    <div>
                        <p>No accounts found.</p>
                        <button
                            onClick={() => setModalOpen(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Add Account
                        </button>
                    </div>
                )}
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <CreateAccountForm closeModal={() => setModalOpen(false)} />
            </Modal>
        </div>
    );
}

export default AccountsPage;
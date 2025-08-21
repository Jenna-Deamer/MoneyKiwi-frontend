import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './features/dashboard/DashboardPage';
import TransactionsPage from './features/transactions/TransactionsPage';
import CategoryManagementPage from './features/categories/CategoryMangementPage';
import AccountsPage from './features/accounts/AccountsPage';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<TransactionsPage />} />
                    <Route path="/transactions" element={<TransactionsPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/categories" element={<CategoryManagementPage />} />
                    <Route path="/accounts" element={<AccountsPage />} />

                </Routes>
            </Router>
        </>
    )
}

export default App

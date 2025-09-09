import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './features/dashboard/DashboardPage';
import TransactionsPage from './features/transactions/TransactionsPage';
import CategoryManagementPage from './features/categories/CategoryManagementPage';
import AccountsPage from './features/accounts/AccountsPage';
import NotFoundPage from './pages/NotFoundPage';

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

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App

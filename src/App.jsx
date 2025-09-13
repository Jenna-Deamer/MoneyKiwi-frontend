import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './features/dashboard/DashboardPage';
import TransactionsPage from './features/transactions/TransactionsPage';
import CategoryManagementPage from './features/categories/CategoryManagementPage';
import AccountsPage from './features/accounts/AccountsPage';
import RegisterPage from './features/auth/RegisterPage';
import LoginPage from './features/auth/LoginPage';
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
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './features/dashboard/DashboardPage';
import TransactionsPage from './features/transactions/TransactionsPage';
import CategoryManagementPage from './features/categories/CategoryManagementPage';
import AccountsPage from './features/accounts/AccountsPage';
import RegisterPage from './features/auth/RegisterPage';
import LoginPage from './features/auth/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

import MainLayout from './layout/MainLayout';

import AuthProvider from './features/auth/AuthProvider';
import PrivateRoute from './features/auth/PrivateRoute';
import PublicRoute from './features/auth/PublicRoute';

function App() {
    return (
        <>
            <Router>
                <AuthProvider>

                    <Routes>
                        <Route element={<PublicRoute />}>
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                        </Route>

                        <Route element={<PrivateRoute />}>
                            <Route element={<MainLayout />}>
                                <Route path="/" element={<TransactionsPage />} />
                                <Route path="/transactions" element={<TransactionsPage />} />
                                <Route path="/dashboard" element={<DashboardPage />} />
                                <Route path="/categories" element={<CategoryManagementPage />} />
                                <Route path="/accounts" element={<AccountsPage />} />
                            </Route>
                        </Route>
                        <Route path="*" element={<NotFoundPage />} />

                    </Routes>
                </AuthProvider>
            </Router>

        </>
    )
}

export default App

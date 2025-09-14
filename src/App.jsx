import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import DashboardPage from './features/dashboard/DashboardPage';
import TransactionsPage from './features/transactions/TransactionsPage';
import CategoryManagementPage from './features/categories/CategoryManagementPage';
import AccountsPage from './features/accounts/AccountsPage';
import RegisterForm from './features/auth/RegisterForm';
import LoginForm from './features/auth/LoginForm';
import NotFoundPage from './pages/NotFoundPage';

import MainLayout from './layout/MainLayout';

import AuthProvider from './features/auth/AuthProvider';
import PrivateRoute from './features/auth/PrivateRoute';
import PublicRoute from './features/auth/PublicRoute';

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <AuthProvider>
                        <Routes>
                            <Route element={<PublicRoute />}>
                                <Route path="/login" element={<LoginForm />} />
                                <Route path="/register" element={<RegisterForm />} />
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
            </QueryClientProvider>

        </>
    )
}

export default App

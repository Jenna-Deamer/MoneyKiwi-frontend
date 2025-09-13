import { ArrowLeft } from 'lucide-react';
import { useAuth } from "../features/auth/useAuth";

const Sidebar = () => {
    const { logOutAction } = useAuth();

    return (
        <nav className="h-full flex flex-col justify-between p-4">
            <div>
                <div className="text-xl font-bold mt-2 mb-6 flex items-center justify-between w-full">
                    <span>Money Kiwi</span>
                    <button><ArrowLeft className='cursor-pointer' /></button>
                </div>
            </div>


            <div className="flex flex-col space-y-2">
                <a href="#">Dashboard</a>
                <a href="#">Accounts</a>
                <a href="#">Transactions</a>
                <a href="#">Categories</a>
            </div>
            <div className="flex flex-col space-y-2 mt-auto mb-2">
                <a href="#" className="text-center m-0 mb-2">Settings</a>
                <button className="bg-red-600 cursor-pointer" onClick={logOutAction}>Logout</button>
            </div>
        </nav>
    )
};

export default Sidebar;
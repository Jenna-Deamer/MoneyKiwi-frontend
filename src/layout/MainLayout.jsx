import Sidebar from "./Sidebar";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-50 bg-gray-800 text-white">
        <Sidebar />
      </aside>

      <div className="flex flex-col flex-1">
        <main className="flex-1 p-4">
          <Outlet />
        </main>
        <footer className="bg-gray-200 p-4 text-center italic text-sm ">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
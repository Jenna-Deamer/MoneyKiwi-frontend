import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider.jsx";

const PublicRoute = () => {
  const { user } = useAuth(); 
  if (user) return <Navigate to="/dashboard" />;  
  return <Outlet />;  
};

export default PublicRoute;

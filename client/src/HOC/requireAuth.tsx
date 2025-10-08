
import { Navigate } from "react-router-dom"; 

const requireAuth = (Component : any) => {
  return function ProtectedRoute(props : any) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      return <Navigate to="/home" replace />
    }

    return <Component {...props} />;
  };
};

export default requireAuth;



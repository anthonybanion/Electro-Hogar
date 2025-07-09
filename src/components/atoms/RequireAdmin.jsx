import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const RequireAdmin = ({ children }) => {
  const { user, isAdmin } = useAuth();

  if (!user || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RequireAdmin;
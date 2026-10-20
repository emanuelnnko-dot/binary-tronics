import { useUserContext } from "@/context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute({allowedRoles}) {
    const {user} = useUserContext();
    const location = useLocation();

    // Not logged in - To be redirected to login Page and save the intended page he wished to go
    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace />;
    }

    // Logged in but not within allowed roles - Send to unauthorized page
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    // Meet all requirements - Rnder children layout
    return <Outlet />;
}

export default ProtectedRoute;
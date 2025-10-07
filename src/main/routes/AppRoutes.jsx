import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Landinglayout from "../Landing/Landinglayout.jsx";
// import RoleBasedRoute from "./RoleBasedRoute";
export default function AppRoutes() {
  return (
   <BrowserRouter
  future={{ 
    v7_startTransition: true,
    v7_relativeSplatPath: true 
  }}
>
      <Routes>
    <Route path="/" element={<Landinglayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />


        {/* <Route
          path="/dashboard"
          element={
            <RoleBasedRoute
              element={<h1>General Dashboard</h1>}
              allowedRoles={["user", "admin", "superadmin"]}
            />
          }
        />

        <Route
          path="/admin"
          element={
            <RoleBasedRoute
              element={<h1>Admin Panel</h1>}
              allowedRoles={["admin"]}
            />
          }
        />

        <Route
          path="/profile"
          element={
            <RoleBasedRoute
              element={<h1>User Profile</h1>}
              allowedRoles={["user"]}
            />
          }
        />

        <Route
          path="/superadmin/dashboard"
          element={
            <RoleBasedRoute
              element={<h1>Super Admin Dashboard</h1>}
              allowedRoles={["superadmin"]}
            />
          }
        /> */}

    
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

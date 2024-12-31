import { Route, Routes } from "react-router";
import { Login } from "./../Views/Login"; 
import { Dashboard } from "./../Views/Dashboard";
import { ProtectedRoutes } from "../Components/ProtectedRoutes";

export const RoutesComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route  element={<ProtectedRoutes />} >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>  
  )
}

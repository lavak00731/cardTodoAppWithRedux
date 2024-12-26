import { Route, Routes } from "react-router";
import { Login } from "./../Views/Login"; 
import { Dashboard } from "./../Views/Dashboard";

export const RoutesComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

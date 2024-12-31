import { Outlet, useNavigate } from "react-router"
export const ProtectedRoutes = () => {

  const authenticated = localStorage.getItem('user');
  const navigate = useNavigate();
  console.log(authenticated)
  if(!authenticated || (authenticated && !JSON.parse(authenticated).isLogged)) {
    navigate('/', {replace: true})
  }
  return (
    <Outlet />
  )
}

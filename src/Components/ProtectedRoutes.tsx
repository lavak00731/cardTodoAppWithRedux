import { Outlet, Navigate } from "react-router";
import { useDispatch} from 'react-redux';
import { LOGIN } from './../Constants/reducerConstans';
export const ProtectedRoutes = () => {

  const sessionData = sessionStorage.getItem('sessionData');
  const authenticated = sessionData ? JSON.parse(sessionData) : {};
  

  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: LOGIN, payload: authenticated.user});
  }

  if(!authenticated.user) {
    return <Navigate to="/" />
  } 
  login();
  return (
    <Outlet />
  )
}

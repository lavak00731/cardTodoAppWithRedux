import { Outlet, Navigate } from "react-router";
import { useDispatch} from 'react-redux';
import { LOGIN } from './../Constants/reducerConstans';
export const ProtectedRoutes = () => {

  const authenticated = JSON.stringify(sessionStorage.getItem('user'));

  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: LOGIN, payload: authenticated});
  }


  if(!authenticated) {
    return <Navigate to="/" />
  } 
  login();
  return (
    <Outlet />
  )
}

import { Outlet, Navigate } from "react-router";
import { useDispatch} from 'react-redux';
import { LOGIN } from './../Constants/reducerConstans';
export const ProtectedRoutes = () => {

  const authenticated = sessionStorage.getItem('user');
  console.log(authenticated)

  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: LOGIN, payload: authenticated});
  }

console.log(authenticated === null)
  if(!authenticated) {
    console.log('black')
    return <Navigate to="/" />
  } 
  login();
  return (
    <Outlet />
  )
}

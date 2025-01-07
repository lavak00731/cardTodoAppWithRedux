import { Outlet, Navigate } from "react-router";
import { useDispatch} from 'react-redux';
import { LOGIN } from './../../Constants/reducerConstans';
type authenticatedType = {
    user: string,
    isLogged: boolean
}
export const FakeProtectedRoutes = ({authenticated}:{authenticated:authenticatedType}) => {
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

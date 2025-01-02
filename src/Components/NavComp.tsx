import { Link } from 'react-router';
import { useDispatch } from 'react-redux';
import { LOGOUT } from './../Constants/reducerConstans';
interface NavCompProps {
  user: string;
}

export const NavComp = ({ user }: NavCompProps) => {
 
const dispatch = useDispatch();

  const logout = () => {
    dispatch({type: LOGOUT, payload: ""});
    sessionStorage.removeItem('user');
  }  
  return (
    <>
        <header className="container mx-auto flex justify-between p-2">
            <span className="font-semibold text-3xl text-white font-serif">Company Name</span>
            <nav className="bg-cyan-950 text-white flex justify-between max-w-xs">
                <span>Hello {user}</span>
                <Link to="/" className="border-2 border-black-100 bg-white text-cyan-950" onClick={() => logout()}>Logout</Link>
            </nav>
        </header>
    </>
  )
}

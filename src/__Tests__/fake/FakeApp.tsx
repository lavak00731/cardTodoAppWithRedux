import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "../../Views/Login";
import { Dashboard } from "../../Views/Dashboard";
import { FakeProtectedRoutes } from "./FakeProtectedRoutes"
import { Provider } from "react-redux";
import Store from "../../Store/Store"

type authenticatedType = {
    user: string,
    isLogged: boolean
}

export const FakeApp = ({ authenticated }: { authenticated: authenticatedType }) => {
  return (
    <BrowserRouter>
        <Provider store={Store}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route  element={<FakeProtectedRoutes authenticated={authenticated} />} >
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>
  )
}

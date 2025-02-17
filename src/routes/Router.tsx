import {BrowserRouter, Routes, Route} from "react-router-dom";
import {WebRoutes} from "./routes.ts";
import Login from "../pages/Login/Login.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";


const Router = ({}) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={WebRoutes.Login} element={<Login />} />
                <Route path={WebRoutes.Home} element={<ProtectedRoute/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
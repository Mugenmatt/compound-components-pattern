import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";

import logo from '../logo.svg';

import { RegisterPage, ShoppingPage, FormikBasicPage } from "../components-patterns/pages/index";

export const Navigation = () => {
    return (
    <Router>
        <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo"/>
            <ul>
                <li>
                    <NavLink to="/" end>Formik</NavLink>
                </li>
                <li>
                    <NavLink to="/register" end>Registro</NavLink>
                </li>
                <li>
                    <NavLink to="/shopping" end>Shopping</NavLink>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={ <FormikBasicPage /> } />
            <Route path="/register" element={ <RegisterPage /> } />
            <Route path="/shopping" element={ <ShoppingPage /> } />
        </Routes>
        </div>
    </Router>
    );
}
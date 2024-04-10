import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";

import logo from '../logo.svg';

import { RegisterPage, ShoppingPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstraction, RegisterFormikPage, DynamicForm } from "../components-patterns/pages/index";

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
                    <NavLink to="/formik-basic" end>Formik Basico</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-yup" end>Formik con YUP</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-components" end>Formik Components</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-abstraction" end>Formik Abstraction</NavLink>
                </li>
                <li>
                    <NavLink to="/register" end>Registro</NavLink>
                </li>
                <li>
                    <NavLink to="/register-formik" end>Registro Formik</NavLink>
                </li>
                <li>
                    <NavLink to="/shopping" end>Shopping</NavLink>
                </li>
                <li>
                    <NavLink to="/dynamic-form" end>Form Dinámico</NavLink>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={ <h1>Home</h1> } />
            <Route path="/formik-basic" element={ <FormikBasicPage /> } />
            <Route path="/formik-yup" element={ <FormikYupPage /> } />
            <Route path="/formik-components" element={ <FormikComponents /> } />
            <Route path="/formik-abstraction" element={ <FormikAbstraction /> } />
            <Route path="/register" element={ <RegisterPage /> } />
            <Route path="/register-formik" element={ <RegisterFormikPage /> } />
            <Route path="/shopping" element={ <ShoppingPage /> } />
            <Route path="/dynamic-form" element={ <DynamicForm /> } />
        </Routes>
        </div>
    </Router>
    );
}
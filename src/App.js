import * as React from 'react';
import {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {verifyUserAccess} from "./store/actions/auth";
import {Route, Routes} from "react-router-dom";

const HomePage = React.lazy(() => import("./components/Pages/HomePage"));
// const ProfilePage = React.lazy(() => import("./components/Pages/UserPages/ProfilePage"));
// const AdminOrdersPage = React.lazy(() => import("./components/Pages/AdminPages/AdminOrdersPage"));
// const AdminUsersPage = React.lazy(() => import("./components/Pages/AdminPages/AdminUsersPage"));
// const ErrorAccessAdminDeniedPage = React.lazy(() => import("./components/Pages/ErrorPages/ErrorAccessAdminDeniedPage"));
// const UserOrdersPage = React.lazy(() => import("./components/Pages/UserPages/UserOrdersPage"));
// const SignInPage = React.lazy(() => import("./components/Pages/AuthPages/SignInPage"));
// const SignUpPage = React.lazy(() => import("./components/Pages/AuthPages/SignUpPage"));


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(verifyUserAccess());
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route index element={<HomePage/>}/>
                {/*<Route path='/login' element={<SignInPage/>}/>*/}
                {/*<Route path='/signup' element={<SignUpPage/>}/>*/}
                {/*<Route path='/profile' element={<ProfilePage/>}/>*/}
                {/*<Route path='/admin/orders' element={<AdminOrdersPage/>}/>*/}
                {/*<Route path='/admin/users' element={<AdminUsersPage/>}/>*/}
                {/*<Route path='/admin/error' element={<ErrorAccessAdminDeniedPage/>}/>*/}
                {/*<Route path='/user/orders' element={<UserOrdersPage/>}/>*/}
            </Routes>
        </>
    );
}

export default App;

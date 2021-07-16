import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Dashboard from './component/dashboard';
import Signin from './pages/auth/Signin';
import AdminRoute from './api/AdminRoute';
import AddProduct from './pages/admin/AddProduct';
import Home from './pages/home'
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <AdminRoute path="/dashboard" exact component={Dashboard} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/addproduct" exact component={AddProduct} />
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;

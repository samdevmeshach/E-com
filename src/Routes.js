import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Dashboard from './component/dashboard';
import Signin from './pages/auth/Signin';
import AdminRoute from './api/AdminRoute';
import AdminProduct from './pages/admin/product';
import AdminCategory from './pages/admin/category';
import AddProduct from './pages/admin/addproduct'
import AddCategory from './pages/admin/addcategory'
import Product from './pages/product';
import Home from './pages/home'
import Signup from './pages/auth/Signup';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <AdminRoute path="/dashboard" exact component={Dashboard} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/addproduct" exact component={AddProduct} />
                <Route path="/addcategory" exact component={AddCategory} />
                <Route path="/products" exact component={AdminProduct} />
                <Route path="/categories" exact component={AdminCategory} />
                <Route path="/product/:productId" exact component={Product} />
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;

import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Users from "./pages/Users";
import Links from "./pages/Links";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RedirectToUsers from "./components/RedirectToUsers";
import Products from "./pages/products/Products";
import ProductForm from "./pages/products/ProductForm";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} caseSensitive element={<RedirectToUsers/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/users'} caseSensitive element={<Users/>}/>
                    <Route path={'/users/:id/links'} element={<Links/>}/>
                    <Route path={'/products'} element={<Products/>}/>
                    <Route path={'/products/create'} element={<ProductForm/>}/>
                    <Route path={'/products/:id/edit'} element={<ProductForm/>}/>
                    <Route path={'/orders'} element={<Orders/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

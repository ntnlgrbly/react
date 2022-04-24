import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './comps/home';
import LayoutClient from './comps/layoutClient'
import AddProduct from './comps_admin/addProduct';
import AddCategory from './comps_admin/addCategory';
import CategoriesList from './comps_admin/categoriesList';
import EditProduct from './comps_admin/editProduct';
import LayoutAdmin from './comps_admin/layoutAdmin';
import LoginAdmin from './comps_admin/loginAdmin';
import ProductAdminList from './comps_admin/productAdminList';
import EditCategory from './comps_admin/editCategory';
import UsersList from './comps_admin/usersList';
import LogoutAdmin from './comps_admin/logoutAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ArticelsUser from './comps/articelsUser';
import ProductListPage from './comps/productListPage';
import ProductInfo from './comps/productInfo';
function AppRoute(props) {
    return (
        <Router>
            <Routes>
                {/* for user admin */}
                <Route path='/admin' element={<LayoutAdmin />}>
                    <Route index element={<LoginAdmin />} />
                    <Route path="/admin/products" element={<ProductAdminList />} />
                    <Route path="/admin/addProduct" element={<AddProduct />} />
                    <Route path="/admin/editProduct/:id" element={<EditProduct />} />
                    <Route path="/admin/editCategory/:url_name" element={<EditCategory />} />
                    <Route path="/admin/categories" element={<CategoriesList />} />
                    <Route path="/admin/addCategory" element={<AddCategory />} />
                    <Route path="/admin/users" element={<UsersList />} />
                    <Route path="/admin/logout" element={<LogoutAdmin />} />

                </Route>
                {/* for user regular */}
                <Route path='/' element={< LayoutClient />}>
                    <Route index element={< Home />} />
                    <Route path='/articelsUser' element={< ArticelsUser />} />
                    <Route path="/products/:cat_url" element={< ProductListPage />} />
                    <Route path='/productInfo/:id' element={< ProductInfo />} />
                </Route>
            </Routes>
            <ToastContainer position='top-right' theme='colored' />
        </Router>

    )
}

export default AppRoute
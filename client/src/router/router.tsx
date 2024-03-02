import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Info from "../pages/Info";
import Contacts from "../pages/Contacts";
import ServicesCategories from "../pages/ServicesCategories";
import ProductsCategories from "../pages/ProductsCategories";
import Products from "../pages/Products";
import Services from "../pages/Services";
import { Product } from "../pages/Product";
import { ErrorPage } from "../pages/ErrorPage";
import { Service } from "../pages/Service";
import Profile from "../pages/Profile";
import Basket from "../pages/Basket";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'productsCategories',
                element: <ProductsCategories/>
            },
            {
                path: 'products/:categoryId',
                element: <Products/>   
            },
            {
                path: 'product/:productId',
                element: <Product/>   
            },

            {
                path: 'services/:categoryId',
                element: <Services/>   
            },
            {
                path: 'servicesCategories',
                element:  <ServicesCategories/>
            },
            {
                path: 'service/:serviceId',
                element: <Service/>   
            },
            {
                path: 'info',
                element:  <Info/>
            },
            {
                path: 'contacts',
                element:  <Contacts/>
            },
            {
                path: 'basket',
                element: <Basket/>
            },
            {
                path: 'profile',
                element: <Profile/>
            }
        ]
    }
])
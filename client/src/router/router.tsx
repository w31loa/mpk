import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Info from "../pages/Info";
import Contacts from "../pages/Contacts";
import ServicesCategories, { serviceCategoryLoader } from "../pages/ServicesCategories";
import ProductsCategories, { productCategoryLoader } from "../pages/ProductsCategories";
import Products, { productsLoader } from "../pages/Products";
import Services, { servicesLoader } from "../pages/Services";
import { Product, productLoader } from "../pages/Product";
import { ErrorPage } from "../pages/ErrorPage";
import { Service, serviceLoader } from "../pages/Service";
import Profile from "../pages/Profile";
import Basket, { basketLoader } from "../pages/Basket";

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
                element: <ProductsCategories/>,
                loader: productCategoryLoader
            },
            {
                path: 'products/:categoryId',
                element: <Products/>,
                loader: productsLoader
            },
            {
                path: 'product/:productId',
                element: <Product/>   ,
                loader: productLoader
            },

            {
                path: 'services/:categoryId',
                element: <Services/>   ,
                loader: servicesLoader
            },
            {
                path: 'servicesCategories',
                element:  <ServicesCategories/>,
                loader: serviceCategoryLoader
            },
            {
                path: 'service/:serviceId',
                element: <Service/>   ,
                loader: serviceLoader
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
                path: 'basket/:userId',
                element: <Basket/>,
                loader: basketLoader
            },
            {
                path: 'profile',
                element: <Profile/>
            }
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Info from "../pages/Info";
import Contacts from "../pages/Contacts";
import ServicesCategories, { serviceCategoryLoader } from "../pages/ServicesCategories";
import ProductsCategories, { productCategoryLoader } from "../pages/ProductsCategories";
import Products, { productsLoader } from "../pages/Products";
import Services, { servicesLoader } from "../pages/Services";
import { Product, productAction, productLoader } from "../pages/Product";
import { ErrorPage } from "../pages/ErrorPage";
import { Service, serviceLoader } from "../pages/Service";
import Profile from "../pages/Profile";
import Basket, { basketLoader } from "../pages/Basket";
import Requests, { requestsLoader } from "../pages/Requests";
import Edit from "../pages/Edit";
import Works, { worksLoader } from "../pages/Works";
import ServiceCategoryForm from "../components/admin/serviceCategory/ServiceCategoryForm";
import ServiceForm from "../components/admin/service/ServiceForm";
import ProductCategoryForm from "../components/admin/productCategory/ProductCategoryForm";
import ProductForm from "../components/admin/product/ProductForm";
import WorksForm from "../components/admin/works/WorksForm";

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
                loader: productLoader,
                action: productAction
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
                path: 'works',
                element:  <Works/>,
                loader: worksLoader
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
            },
            {
                path: 'requests',
                element: <Requests/>,
                loader: requestsLoader
            },
            {
                path: 'edit',
                element: <Edit/>,
                children:[
                    {
                        path: 'serviceCategoryForm',
                        element: <ServiceCategoryForm/>
                    },
                    {
                        path: 'serviceForm',
                        element: <ServiceForm/>
                    },
                    {
                        path: 'poductCategoryForm',
                        element: <ProductCategoryForm/>
                    },
                    {
                        path: 'productForm',
                        element: <ProductForm/>
                    },
                    {
                        path: 'worksForm',
                        element: <WorksForm/>
                    }
                ]
            }
        ]
    }
])
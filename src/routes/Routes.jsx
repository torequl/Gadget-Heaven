import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import ContactUs from "../pages/ContactUs";
import Error from "../pages/Error";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/categories.json')
            },
            {
                path: '/product-details/:id',
                element: <ProductDetails />,
                loader: () => fetch('/products.json')
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/contact-us',
                element: <ContactUs/>
            }
        ],
    },
])

export default routes;
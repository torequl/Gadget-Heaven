import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
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
        ],
    },
])

export default routes;
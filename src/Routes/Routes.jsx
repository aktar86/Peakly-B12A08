import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../components/AppDetails/AppDetails";


const router = createBrowserRouter([
    {
        path:'/',
        errorElement: <span>Loading...</span>,
        Component: Root,
        children: [
            {
                index: true, Component: Home
            },
            {
                path:'/apps', Component: Apps
            },
            {
                path: '/installation', Component: Installation
            },
            {
                path: '/app/:id',
                Component: AppDetails
            }
        ]
    }
])

export default router;
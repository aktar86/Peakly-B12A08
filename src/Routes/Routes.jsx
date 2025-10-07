import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";


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
            }
        ]
    }
])

export default router;
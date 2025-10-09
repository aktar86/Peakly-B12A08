import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../components/AppDetails/AppDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AppNotFound from "../components/AppNotFound/AppNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/app/:id",
        errorElement: <AppNotFound/>,
        Component: AppDetails,
      }
    ],
  }
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import ServiceDetails from "../components/ServiceDetails";
import Register from "../pages/home/SignInSignUp/Register";
import Login from "../pages/home/SignInSignUp/Login";
import PrivetRoute from "../privetRoute/PrivetRoute";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/error/ErrorPage";
import OurVenues from "../pages/venues/OurVenues";
import AboutePage from "../pages/about/AboutePage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/service/:id',
                element:<PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>
            },
            {
                path:'/about',
                element:<AboutePage></AboutePage>
            },
            {
                path:'/venues',
                element:<PrivetRoute><OurVenues></OurVenues></PrivetRoute>
            },
            {
                path:'/contact',
                element:<PrivetRoute><Contact></Contact></PrivetRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
           
            {
                path:'/register',
                element:<Register></Register>
            },

        ])
    }
])

export default router
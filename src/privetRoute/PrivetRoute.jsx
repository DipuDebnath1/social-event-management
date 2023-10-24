import { useContext } from "react";
import { Context } from "../authprovder/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const location = useLocation()
    // console.log(location.pathname);

    const {user,loader} = useContext(Context)

        if (loader) {
            return <div className="text-center">
                    <span className="loading loading-ball loading-xs"></span>
                    <span className="loading loading-ball loading-sm"></span>
                    <span className="loading loading-ball loading-md"></span>
                    <span className="loading loading-ball loading-lg"></span>
                </div>
        }
        if (user) {
            return children
        }
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivetRoute;
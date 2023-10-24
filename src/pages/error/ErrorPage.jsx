import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-11/12 mx-auto space-y-5 flex text-center my-20 justify-center flex-col">
       
                <h2 className="text-4xl font-semibold">This location Not Found </h2>
                <div><Link className="btn btn-primary" to={'/'}>Go Home</Link></div>           
        </div>
    );
};

export default ErrorPage;
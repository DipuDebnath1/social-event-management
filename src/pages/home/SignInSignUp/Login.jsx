import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../../authprovder/AuthProvider";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";


const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(navigate,location);

  const { login, googleLogin } = useContext(Context)

  const handleLoginFrom = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;



    login(email, password)
      .then(() => {
        // Signed up 
        toast.success(`Sign In success `)
        e.target.password.value = ''
        e.target.email.value = ''
        navigate(location.state ? location.state : '/')
        // ...
      })
      .catch(() => {
        toast.error(`invalid your email or password!! `)
        // ..
      })


    // console.log(email,password,login);
  }

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(location.state ? location.state : '/')
        // console.log(res.user);
      })
      .catch(() => {

      })
  }



  return (
    <div className="md:w-6/12 my-4 rounded-xl mx-auto p-3 bg-orange-100">

      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <form className="card-body" onSubmit={handleLoginFrom} >
          <h2 className="text-3xl font-semibold text-center">Sign In </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>

        <div className="form-control space-y-2 mt-6">
          <button className="btn btn-primary">Sign In</button>
          <p className="text-center">
            Don{`'`}t have a account? <Link to={'/register'} className="font-semibold text-blue-500">SignUp</Link>
          </p>
          <p className="text-center font-semibold">or Sign In with</p>
          <div className="text-center flex justify-center">
            <FcGoogle onClick={handleGoogleLogin} className="text-5xl"></FcGoogle>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
import { useContext } from "react";
import { Context } from "../../../authprovder/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { register,updateInfo } = useContext(Context)
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegisterFrom = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const img = e.target.img.value;
    console.log(name,img);


    // password validation 
    const condition = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!condition.test(password)) {
      return toast.error(`
            Please type strong password!
            minimum password length 6 
            Chose capital letter, spacial cherecter & number
          `)


    }


    register(email, password)
      .then(() => {
        updateInfo(name,img)
        .then(res=>{
          console.log(res.user)
        })
        .catch(error=>{
          console.log(error.message)
        })

        e.target.email.value = ''
        e.target.password.value = ''
        e.target.name.value = ''
        e.target.img.value = ''
        // Signed up 
        return navigate(location.state ? location.state : '/')


        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        return toast.error(`This email already used !!`)
        // ..
      })


    // console.log(email,password,register);
  }


  return (
    <div className="md:w-6/12 my-4 rounded-xl mx-auto p-3 bg-orange-100">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <form className="card-body" onSubmit={handleRegisterFrom}>
      <h2 className="text-3xl font-semibold text-center">Sign Up </h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">image url</span>
          </label>
          <input type="text" name="img" placeholder="image Link" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <p className="text-center">
          Have a account? <Link to={'/login'} className="font-semibold text-blue-500">SignIn</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
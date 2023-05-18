import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { FaGooglePlusG } from "react-icons/fa";

const Login = () => {
  const { createLogin,createGoogle } =useContext(authContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const locations =location.state?.from?.pathname || "/" ;
  const handleLogin = (event) => {
    event.preventDefault();
   setError("")
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createLogin(email, password)
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
        toast.success("Login successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            fontSize:"25px",
            paddingRight:"20px",
            paddingLeft:"20px",
            color: "#fff",
          },
        });
         form.reset()
         navigate(locations);
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorMessage = error.message;
       setError("email address and password does not match");
      });
  };
  const handleGoogle = () => {
    createGoogle()
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
        
        toast.success("Google sign in successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            fontSize:"25px",
            paddingRight:"20px",
            paddingLeft:"20px",
            color: "#fff",
          },
        });
        navigate(locations);
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorMessage = error.message;
       setError("Google singin not succesfully")
      });
  };
    return (
        <div >
        <form onSubmit={handleLogin}>
          <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col ">
              <div className="text-center ">
                <h1 className="text-5xl w-[300px] md:w-[400px] font-bold">
                  Login now!
                </h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body bg-base-100">
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      
                      placeholder="Inter email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <div className="flex">
                      <input
                        type="password"
                        name="password"
                        placeholder="Inter password"
                        className="input input-bordered grow"
                        required
                      />
                    
                    </div>
  
                    <label className="label">
                      <button
                        
                        className="label-text-alt btn btn-link"
                      >
                        Forgot password?
                      </button>
                    </label>
  
                    <h1 className="text-xl">
                      If you new please{" "}
                      <Link className=" font-bold" to="/register">
                        Registration
                      </Link>{" "}
                    </h1>
                  </div>
                  <p className="text-lg font-semibold text-orange-600">{error}</p>
                  <div className="form-control mt-6">
                    <button className="btn btn-outline font-bold text-xl ">Login</button>
                  </div>
                  <hr />
                <div className="pt-2">
                  <button
                    onClick={handleGoogle}
                    className="btn btn-outline btn-info w-full"
                  >
                    <FaGooglePlusG className="text-2xl mr-2 font-bold"></FaGooglePlusG>{" "}
                    signin with Google
                  </button>
                </div>
                 
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
};

export default Login;
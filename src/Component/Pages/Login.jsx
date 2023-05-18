import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div >
        <form>
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
                  <div className="form-control mt-6">
                    <button className="btn btn-outline font-bold text-xl ">Login</button>
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
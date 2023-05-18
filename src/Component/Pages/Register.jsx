import { Link } from "react-router-dom";


const Register = () => {
    return (
        <form >
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Registration now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body bg-base-100">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="inter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  type="text"
                  name="img"
                  placeholder="Inter photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="inter your email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex ">
                  <input
                    type="password"
                    name="password"
                    placeholder="inter a password "
                    className="input input-bordered grow"
                    required
                  />
                 
                </div>

               

                <h1 className="text-xl">
                  If you register please{" "}
                  <Link className=" font-bold" to="/login">
                    Login
                  </Link>{" "}
                </h1>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline font-bold text-xl ">Registration</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    );
};

export default Register;
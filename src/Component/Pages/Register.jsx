import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { FaGooglePlusG } from "react-icons/fa";
const Register = () => {
  const { createRegister ,createGoogle} = useContext(authContext);
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const email = form.email.value;
    const password = form.password.value;

    createRegister(email, password)
      .then(async (result) => {
        const user = result.user;
        await updateProfile(user, {
            displayName: name,
            photoURL: img,
          })
            .then(() => {})
            .catch(() => {});
          toast.success(
            "Register successfully",
  
            {
              style: {
                borderRadius: "10px",
                background: "#333",
                fontSize:"25px",
                paddingRight:"20px",
                paddingLeft:"20px",
                color: "#fff",
              },
            }
          );
          console.log(user)
          form.reset();
          
        
      })

      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
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
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorMessage = error.message;
       
      });
  };
  return (
    <form onSubmit={handleRegister}>
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
                <button className="btn btn-outline font-bold text-xl ">
                  Registration
                </button>
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
  );
};

export default Register;

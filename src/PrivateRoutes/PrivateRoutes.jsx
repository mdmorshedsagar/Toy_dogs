import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const { user, loading} = useContext(authContext);
    const location = useLocation();
      
    if (loading){
    return <>
    <button type="button" className="bg-indigo-500 ..." disabled>
    <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      
    </svg>
    Processing...
  </button>
    </>
      
    }
    if (user){
      return children;
    }
  
    return  <Navigate state={{ from: location }} to="/login" replace/>
        
  
};

export default PrivateRoutes;
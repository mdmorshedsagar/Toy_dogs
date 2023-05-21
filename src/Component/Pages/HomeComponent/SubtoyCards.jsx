import { Link } from "react-router-dom";
import React  ,{ useContext } from 'react'
import 'aos/dist/aos.css';
import { authContext } from "../../../Provider/AuthProvider";
import { toast } from "react-hot-toast";

const SubtoyCards = (tab) => {
  const { user} = useContext(authContext);
    const {picture,name,description,price,_id}=tab.tab;
    const handleViewDetails = () => {
      if (!user) {
        toast.error('You have to log in first to view details', {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    };
    return (
      <div data-aos="fade-up"
      data-aos-duration="3000">
          <div className="card card-side bg-base-100 h-[300px] shadow-xl">
        <figure className="w-[80%] h-full"><img src={picture} className="h-full w-full" alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p>{description}</p>
          <p className="font-bold">Price:${price}</p>
          <div className="card-actions justify-end">
          <Link
            to={`/singleSubToy/${_id}`}
            className="btn btn-outline"
            onClick={handleViewDetails}
          >
            View details
          </Link>
          </div>
        </div>
      </div>
         </div>
      
    );
};

export default SubtoyCards;
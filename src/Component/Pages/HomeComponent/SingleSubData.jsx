
import {
    
    useLoaderData,Link
  } from "react-router-dom";
const SingleSubData = () => {
   const singleData =useLoaderData( );
   console.log(singleData)
   const {picture,description,price,rating,name} = singleData;
    return (
       <div className="bg-base-100">
      <div className="card lg:card-side bg-base-200 shadow-xl lg:m-16  ">
        <figure className="h-full w-[50%]"><img className="w-full h-full" src={picture} alt="Album"/></figure>
        <div className="mt-[80px] p-6">
          <h2 className="font-bold lg:text-5xl my-8" >Name: {name}</h2>
          <p className="text-xl">Description: {description}</p>
        <p className="text-xl my-6"> <span className="font-bold">Price:</span> ${price}</p>
        <p className="text-xl mb-8">{rating}</p>
        <Link to='/' className="btn bg-black hover:bg-white hover:text-black hover:font-bold hover:rounded-xl">Back to home</Link>
        </div>
        
      </div>
       </div>
  
    );
};

export default SingleSubData;
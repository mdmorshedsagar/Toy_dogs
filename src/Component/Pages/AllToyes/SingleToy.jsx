import {
    
    useLoaderData
  } from "react-router-dom";


const SingleToy = () => {
    const loaders = useLoaderData();
   const {name,picture,seller,email,category,price,rating,quantity,description}=loaders;
   console.log(name,picture,seller,email,category,price,rating,quantity,description)
    return (
        <div>
         
        </div>
    );
};

export default SingleToy;
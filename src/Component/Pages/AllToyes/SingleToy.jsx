import {
    
    useLoaderData
  } from "react-router-dom";


const SingleToy = () => {
    const loaders = useLoaderData();
   const {name,picture,seller,email,category,price,rating,quantity,description}=loaders;
//    console.log(name,picture,seller,email,category,price,rating,quantity,description)
    return (
        <div className="card lg:card-side bg-slate-100 shadow-xl m-12 p-6 ">
  <figure className="w-[50%] h-full"><img src={picture} alt="Album" className="w-[full] h-full"/></figure>
  <div className="card-body bg-white">
    <h2 className="card-title">Toy name: {name}</h2>
    <h2 className="text-xl font-bold">Seller name: {seller}</h2>

    <p>email: {email}</p>
    <p>Sub category: {category}</p>
    <p>description: {description}</p>
    <p>Price: {price}</p>
    <p>quantity: {quantity}</p>
    

    <div className="card-actions flex justify-between items-center">
        <div>sdfasf {rating}</div>
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default SingleToy;
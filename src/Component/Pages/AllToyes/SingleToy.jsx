import {
    
    useLoaderData,Link
  } from "react-router-dom";


const SingleToy = () => {
    const loaders = useLoaderData();
   const {name,picture,seller,email,category,price,rating,quantity,description}=loaders;
//    console.log(name,picture,seller,email,category,price,rating,quantity,description)
    return (
        <div className="card lg:card-side bg-slate-100 shadow-xl m-12 p-6 ">
  <figure className="w-[100%] h"><img src={picture} alt="Album" className="w-full h-full"/></figure>
  <div className="card-body bg-white w-[100%]">
    <h2 className="card-title text-2xl"> <span className="font-bold">Toy name:</span> {name}</h2>
    <h2 className="text-xl font-bold"> <span className="font-bold text-xl">Seller name:</span> {seller}</h2>

    <p><span className="font-bold">email:</span> {email}</p>
    <p><span className="font-bold">Sub category:</span> {category}</p>
    <p><span className="font-bold">description:</span> {description}</p>
    <p><span className="font-bold">Price:</span> ${price}</p>
    <p><span className="font-bold">quantity:</span> {quantity}</p>
    

    <div className="card-actions flex justify-between items-center">
        <div>sdfasf {rating}</div>
      <Link to='/' className="btn bg-black hover:bg-white hover:text-black hover:rounded-xl">Back Home</Link>
    </div>
  </div>
</div>
    );
};

export default SingleToy;
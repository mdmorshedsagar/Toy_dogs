import {
    
   Link
  } from "react-router-dom";

const MyToysTable = (myToy) => {
    const {name,picture,seller,email,category,price,rating,quantity,description}=myToy.myToy;
    console.log(name,picture,seller,email,category,price,rating,quantity,description)
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
    <tr>
              <th className="text-xl">seller name</th>
              <th className="text-xl">Toy Name</th>
              <th className="text-xl">Sub category</th>
              <th className="text-xl">Quantity</th>
              <th className="text-xl">Price</th>
              <th className="text-xl">Details</th>
            </tr>
    </thead>
    <tbody>
     
    <tr>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>${price}</td>
        <td> <Link  className="btn bg-black hover:bg-white hover:text-black hover:rounded-xl"> View details </Link> </td>
      </tr>
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyToysTable;
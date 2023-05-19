import {
    
    Link
  } from "react-router-dom";

const ToysTable = (table) => {
    const {_id,name , seller,category,quantity,price}=table.table;
    return (
        <tr>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>${price}</td>
        <td> <Link to={`/singleToy/${_id}`} className="btn bg-black hover:bg-white hover:text-black hover:rounded-xl"> View details </Link> </td>
      </tr>
    );
};

export default ToysTable;
import { useContext } from "react";
import {
    
    Link
  } from "react-router-dom";
import { authContext } from "../../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
const ToysTable = (table) => {
    const {_id,name , seller,category,quantity,price}=table.table;
    const { user} = useContext(authContext);
    const handleViewDetails = () => {
      if (!user) {
        toast.error('You have to log in first to view details', {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    };
    return (
        <tr>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>${price}</td>
        <td> <Link to={`/singleToy/${_id}`} onClick={handleViewDetails} className="btn bg-black hover:bg-white hover:text-black hover:rounded-xl"> View details </Link> </td>
      </tr>
    );
};

export default ToysTable;
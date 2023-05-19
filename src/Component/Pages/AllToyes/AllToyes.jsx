
import {
    
    useLoaderData
  } from "react-router-dom";
import ToysTable from "./toysTable";
const AllToyes = () => {
    const loaders = useLoaderData();
    console.log(loaders)
    return (
        <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
         
          <thead >
            <tr >
              <th>seller name</th>
              <th>Toy Name</th>
              <th>Sub category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>

            {
                loaders.map(table => <ToysTable key={table._id} table={table}></ToysTable> )
            }
           
           
          
          </tbody>
        </table>
      </div>
    );
};

export default AllToyes;
import { useLoaderData } from "react-router-dom";
import ToysTable from "./toysTable";
const AllToyes = () => {
  const loaders = useLoaderData();
  
  return (
    <div>
        <h1 className="text-4xl font-bold text-center py-8">All Toys</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
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
            {loaders.map((table) => (
              <ToysTable key={table._id} table={table}></ToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToyes;

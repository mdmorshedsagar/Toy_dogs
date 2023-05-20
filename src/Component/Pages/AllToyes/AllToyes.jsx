
import ToysTable from "./toysTable";
import { useEffect, useState } from "react";
const AllToyes = () => {
  
  const [allToys, setAllToys] = useState([]);
  const [searchToy, setSearchToy] = useState("");
 console.log(searchToy);
  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
       
        setAllToys(data);
        console.log(data);
      });
  }, []);
  const handleSearch = () => {
    console.log(searchToy)
    fetch(`http://localhost:5000/getToysName/${searchToy}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        console.log(data);
      });
  };
  return (
    <div>
        <h1 className="text-4xl font-bold text-center pt-8 pb-2">All Toys</h1>
     <div className=" flex justify-center py-4">
     <div className="form-control ">
  <div className="input-group">
    <input  onChange={(event) => setSearchToy(event.target.value)} type="text" placeholder="Search toy name" className="input input-bordered" />
    <button onClick={handleSearch} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
     </div>
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
            {allToys.map((table) => (
              <ToysTable key={table._id} table={table}></ToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToyes;

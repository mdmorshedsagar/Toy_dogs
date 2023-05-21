import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Provider/AuthProvider";
import MyToysTable from "./MyToysTable";
import useTitle from "../../../hooks/useTitle";


const MyToyes = () => {
    const { user } = useContext(authContext);
    useTitle("my toy")
    const [myToys, setMyToys] = useState([]);
    useEffect(() => {
        fetch(`https://dog-toys-server.vercel.app/myToys/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            
            setMyToys(data);
          });
      }, [user?.email]);
    
    return (
        <div>
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
    {
                myToys.map( myToy => <MyToysTable key={myToy._id} myToy={myToy} myToys={myToys} setMyToys={setMyToys} ></MyToysTable> )
             }
     
  
    </tbody>
  </table>
</div>

           <div>
           
           </div>
        </div>
    );
};

export default MyToyes;
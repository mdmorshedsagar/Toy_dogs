import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Provider/AuthProvider";
import MyToysTable from "./MyToysTable";


const MyToyes = () => {
    const { user } = useContext(authContext);
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

           <div>
             {
                myToys.map( myToy => <MyToysTable key={myToy._id} myToy={myToy}></MyToysTable> )
             }
           </div>
        </div>
    );
};

export default MyToyes;
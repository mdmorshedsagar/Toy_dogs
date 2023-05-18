import { Outlet } from "react-router-dom";
import Navbar from "./Component/Shared/Navbar";



const App = () => {
  return (
    <div>
      <Navbar></Navbar>
     <Outlet></Outlet>
    </div>
  );
};

export default App;
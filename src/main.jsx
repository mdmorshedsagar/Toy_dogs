import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Component/Pages/HomeComponent/Home';
import Login from './Component/Pages/Login';
import Register from './Component/Pages/Register';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './Component/Pages/ErrorPage';
import Blog from './Component/Pages/Blog';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import AllToyes from './Component/Pages/AllToyes/AllToyes';
import MyToyes from './Component/Pages/MyToyes/MyToyes';
import AddToyes from './Component/Pages/AddToyes/AddToyes';
import SingleSubData from './Component/Pages/HomeComponent/SingleSubData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"register",
        element: <Register></Register>
      },
      {
        path:"/blog",
        element: <Blog></Blog>
      },
      {
        path:"/allToys",
        element: <AllToyes></AllToyes> 
      },
      {
        path:"/myToys",
        element:<PrivateRoutes > <MyToyes></MyToyes> </PrivateRoutes>
      },
      {
        path:"/addToys",
        element:<PrivateRoutes><AddToyes></AddToyes> </PrivateRoutes>
      },
      {
        path:`/singleToy/:id`,
        element: <PrivateRoutes><SingleSubData></SingleSubData> </PrivateRoutes>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider >
      <>
      <Toaster  position="top-right"
  reverseOrder={false}></Toaster>
    <RouterProvider router={router} />
      </>
    </AuthProvider>
   
  </React.StrictMode>,
)

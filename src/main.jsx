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
import SingleToy from './Component/Pages/AllToyes/SingleToy';
import UpdateToy from './Component/Pages/MyToyes/UpdateToy';

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
        path:`/singleToy/:id`,
        element: <PrivateRoutes> <SingleToy></SingleToy> </PrivateRoutes> ,
        loader: ({params}) => fetch(`http://localhost:5000/singleToy/${params.id}`)
      },
      {
        path:"/myToys",
        element:<PrivateRoutes > <MyToyes></MyToyes> </PrivateRoutes>
      },
      {
        path:"/updateToys/:id",
        element:<PrivateRoutes > <UpdateToy></UpdateToy> </PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/updateToys/${params.id}`)
      },
      {
        path:"/addToys",
        element:<PrivateRoutes><AddToyes></AddToyes> </PrivateRoutes>
      },
      {
        path:`/singleSubToy/:id`,
        element: <PrivateRoutes><SingleSubData></SingleSubData> </PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/singleSubToy/${params.id}`)
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

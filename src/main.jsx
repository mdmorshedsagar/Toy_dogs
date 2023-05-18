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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
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
      }
      

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <>
      <Toaster  position="top-right"
  reverseOrder={false}></Toaster>
    <RouterProvider router={router} />
      </>
    </AuthProvider>
   
  </React.StrictMode>,
)

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import Products from "../products/Products";
import Product from "../pages/Product/Product";

const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
  
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>,
          loader: ()=> fetch('https://dummyjson.com/products')
        },
        {
            path: "/Products/:id",
            element: <Product></Product>

        },
        {
            path: '/dashboard',
            element:<div> This is a Dashboard</div>,
            loader: (object)=>fetch(`https://dummyjson.com/products/${object.params.id}`)
          }
      ]
    },
  
  ])
  
export default myCreatedRoute;
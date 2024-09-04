import "@fortawesome/fontawesome-free/css/all.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from '../src/Components/Products/Products';
import Layout from "../src/Components/Layout/Layout"
import Category from '../src/Components/Category/Category';
import Brand from '../src/Components/Brand/Brand';
import Login from '../src/Components/Login/Login';
import Register from '../src/Components/Register/Register';
import Notfound from '../src/Components/NOtfound/Notfound';
import { Toaster } from 'react-hot-toast';
import AuthContextProvider from "./Context/AuthContext";
import Protectedroute from "./Components/Protectedroute/Protectedroute";
import { QueryClient, QueryClientProvider } from "react-query";
import Productdetails from "./Components/Productdetails/Productdetails";
import CartcontextProvider from "./Context/Cartcontext";
import Cart from "./Components/Cart/Cart";
import Payment from "./Components/Payment/Payment";
import Allorders from "./Components/Allorders/Allorders";
import Categories from "../src/Components/Category/Category";
import Brands from "../src/Components/Brand/Brand";
import Categorydetails from "./Components/Categorydetails/Categorydetails";
// import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const x =  new QueryClient()
  const router = createBrowserRouter([
    {path:"/",element:<Layout/>,children:[
    {path:"/",element:(<Protectedroute><Products/></Protectedroute>),},
    {path:"/Category",element:(<Protectedroute><Category/></Protectedroute>),},
    {path:"/Brand",element:(<Protectedroute><Brand/></Protectedroute>),},
    {path:"/Brands",element:(<Protectedroute><Brands/></Protectedroute>),},
    {path:"/Productdetails/:id",element:(<Protectedroute><Productdetails/></Protectedroute>),},
    {path:"/Cart",element:(<Protectedroute><Cart/></Protectedroute>),},
    {path:"/Payment",element:(<Protectedroute><Payment/></Protectedroute>),},
    {path:"/allorders",element:(<Protectedroute><Allorders/></Protectedroute>),},
    {path:"/Categories",element:(<Protectedroute><Categories/></Protectedroute>),},
    {path:"/CategoryDetails/:id",element:(<Protectedroute><Categorydetails/></Protectedroute>),},
    {path:"/Login",element:<Login/>},
    {path:"/Register",element:<Register/>},
    {path:"*",element:<Notfound/>},


    ]},
  ]);
  return (
    <>
    <QueryClientProvider client={x}>
    <AuthContextProvider>
      <CartcontextProvider>
    <Toaster/>
   <RouterProvider router={router}/>
   </CartcontextProvider>
   </AuthContextProvider>
   </QueryClientProvider>
    </>
  )
}

export default App

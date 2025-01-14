import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Content from './components/admin/product/content';
import UserPages from './User';
import AdminUser from './components/admin/user/user';

import HomeUser from './components/user-page/home/home';
// import Home from './components/admin/home/home_component';
import ProductUser from './components/user-page/product/product.jsx';
import Detail from './components/user-page/detailProduct/detail.jsx';
import Cart from './components/user-page/cart/cart.jsx';
import HomeAdmin from './components/admin/home/home.jsx';
import Login from './components/user-page/login/login.jsx';
import Register from './components/user-page/register/register.jsx';
import CartAd from './components/admin/cart/cart.jsx';
import Contact from './components/user-page/contact/contact.jsx';


const router = createBrowserRouter([
  {
    path:"/admin",
    element:<App/>,
    children:[
      {
        path:"users",
        element: <AdminUser/>
      },
      {
        path:"products",
        element: <Content/>
      },
      {
        path:"home",
        element:<HomeAdmin/>
      },
     
      {
        path:"cart",
        element:<CartAd/>
      },
      {
        path:"",
        element:<HomeAdmin/>
      },
    
      {
        path:"comments",
        element: <h1>Coment Pages</h1>
      }
    ],
   },
   {
    path:"/",
    element:<UserPages/>,
    children:[
      {
        path:"",
        element: <HomeUser  />
      },
      {
        path:"/detail",
        element: <Detail />
      },
      {
        path:"/cart",
        element: <Cart />
      },
      {
        path:"/checkout",
        element: <HomeUser  />
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"/login",
        element: <Login  />
      },
      {
        path:"/register",
        element: <Register  />
      },
      {
        path:"/product",
        element: <ProductUser  />
      },
    ],
   },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

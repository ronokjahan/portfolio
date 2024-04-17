import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Componante/Pages/Home/Home.jsx';
import Cart from './Componante/Pages/Cart/Cart.jsx';
import PlaceOrder from './Componante/Pages/PlaceOrder/PlaceOrder.jsx';
import StoreContexProvider from './Componante/Contex/ContexFolder.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path:'/',
      element:<Home></Home>,

    },
  {
    path:'/cart',
    element:<Cart></Cart>
  },{
    path:'/order',
    element:<PlaceOrder></PlaceOrder>
  }
  ]

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <StoreContexProvider>
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 </StoreContexProvider>,
)

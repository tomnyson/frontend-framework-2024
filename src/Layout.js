import {useReducer} from 'react'
import {UserContext, CartContext} from './context';
import App from './App';
import Root from './Root';
import DemoAPI from './DemoAPI';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './pages/page404'
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import PostDetail from './pages/postDetail'
import Login from './pages/login';
import RoutePrivate from './routePrivate';
import Register from './pages/register';
import Cart from './pages/cart';
import { useState } from 'react';
import Product from './product';
import {Navbar, Nav, Container, Row, Col, Card } from 'react-bootstrap';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [{
          path: "/",
          element:  
          <RoutePrivate>
              <DemoAPI />
          </RoutePrivate>
        
        },
        {
          path: "/posts",
          element:  
          <RoutePrivate>
              <DemoAPI />
          </RoutePrivate>
        
        },
        {
          path: "/products",
          element:  
          <RoutePrivate>
              <Product />
          </RoutePrivate>
        
        },
        {
          path: "/login",
          element:  <Login />
        },
        {
          path: "/carts",
          element:  <Cart />
        },
        {
          path: "/register",
          element:  <Register />
        },
        {
          path: "/posts/:postId",
          element:  <PostDetail />
        }
      ]},
  ]);

  const initData = {
    carts: [{
      id: 1,
      price: 10
    }]
  }
  const cartReducer = (state, action) => {
    console.log("state.carts",state)
    switch (action.type) {
      case "ADD_CART": {
        const newcarts = [...state.carts, action.payload]
        return {
          ...state,
          carts: newcarts
        }
      }
        
      default:
        throw new Error(`Unhandled action type: ${action.type}`)
    }
  };

const Layout = ()=> {
    const [userName, setUserName] = useState(JSON.parse(localStorage.getItem("user")));
    // const user = localStorage.getItem("user")
    const [carts, dispatch] = useReducer(cartReducer, initData);
    const handleClick = () => {
      dispatch({ type: "ADD_CART", payload: {
        id: 1,
        price: 10
      }});
    }
    return (
        <>
        <UserContext.Provider value={[userName, setUserName]}>
              <CartContext.Provider value={[carts, dispatch]}>
                <button onClick={handleClick}>test</button>

              <RouterProvider router={router} />
              </CartContext.Provider>
        </UserContext.Provider>
        </>
    )
}
export default Layout
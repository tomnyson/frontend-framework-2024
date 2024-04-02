/* eslint-disable */
import { useReducer } from "react"
import { UserContext, CartContext } from "./context"
import App from "./App"
import Root from "./Root"
import DemoAPI from "./DemoAPI"
import reportWebVitals from "./reportWebVitals"
import ErrorPage from "./pages/page404"
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import PostDetail from "./pages/postDetail"
import Login from "./pages/login"
import RoutePrivate from "./routePrivate"
import Register from "./pages/register"
import Cart from "./pages/cart"
import { useState } from "react"
import Product from "./pages/product"
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <RoutePrivate>
            <DemoAPI />
          </RoutePrivate>
        ),
      },
      {
        path: "/posts",
        element: (
          <RoutePrivate>
            <DemoAPI />
          </RoutePrivate>
        ),
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/carts",
        element: <Cart />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/posts/:postId",
        element: <PostDetail />,
      },
    ],
  },
])

const initData = {
  carts: [
  ],
}

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    description: "This is product 1",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    description: "This is product 2",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    description: "This is product 3",
    image: "https://picsum.photos/200/300",
  },
]

function searchProduct(
  item = {
    id: 1,
    name: "Product 1",
    price: 19.99,
    description: "This is product 1",
    image: "https://picsum.photos/200/300",
  },
) {
  products.forEach((element) => {
    console.log(element)
    if (element.id === item.id) {
      console.log("Product found")
    }
  })
}
const cartReducer = (state, action) => {
  console.log("state.carts", state.carts)
  console.log("action", action)
  switch (action.type) {
    case "ADD_CART": {
      console.log("call here")
      const newcarts = [...state.carts]
      let found = false;
      newcarts.forEach((element, index ) => {
        console.log('element',element)
        if (element.id === action.payload.id) {
          const quantity = newcarts[index].quantity + 1;
          newcarts[index].quantity = quantity
          found= true;
        }
      })
      if(!found) {
        newcarts.push({
          ...action.payload,
          quantity: 1
        })
      }
      return {
        ...state,
        carts: newcarts,
      }

      }
      case "REMOVE_CART": {
        console.log('REMOVE_CART')
        // Remove CART CHECK ID 
        const newcarts = [...state.carts]
      let found = false;
      newcarts.forEach((element, index ) => {
        console.log('element',element)
        if (element.id === action.payload.id) {
          newcarts.splice(index, 1)
          found= true;
        }}
      )
      return {
        ...state,
        carts: newcarts,
      }
    }
    
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
}}

const Layout = () => {
  const [userName, setUserName] = useState(JSON.parse(localStorage.getItem("user")))
  // const user = localStorage.getItem("user")
  const [carts, dispatch] = useReducer(cartReducer, initData)
  const handleClick = () => {
    // dispatch({
    //   type: "ADD_CART",
    //   payload: {
    //     id: 1,
    //     price: 10,
    //   },
    // })
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

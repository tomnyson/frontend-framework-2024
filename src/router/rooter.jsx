import React from "react"
import { Routers, Router } from "react-router-dom"
import Login from "./pages/login"
const RouterRoot = () => {
  return (
    <Routers>
      <Router path="/" component={<Login />} />
    </Routers>
  )
}

export default RouterRoot

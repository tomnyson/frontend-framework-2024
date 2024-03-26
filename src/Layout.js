import UserContext from './context';
import App from './App';
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
import { useState } from 'react';
import {Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/posts",
      element:  
      <RoutePrivate>
          <DemoAPI />
      </RoutePrivate>
    
    },
    {
      path: "/login",
      element:  <Login />
    },
    {
      path: "/register",
      element:  <Register />
    },
    {
      path: "/posts/:postId",
      element:  <PostDetail />
    }
  ]);

const Layout = ()=> {
    const [userName, setUserName] = useState("adb");
    return (
        <>
        <UserContext.Provider value={[userName, setUserName]}>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={'posts'} />
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
              <RouterProvider router={router} />
        </UserContext.Provider>
        <Row style={{background: '#ccc', height: 50}} className='mt-3'>
            <Col style={{display: 'flex', justifyContent: 'center'}}>
                 <h5>frontend framework</h5>
            </Col>
        </Row>
        </>
    )
}
export default Layout
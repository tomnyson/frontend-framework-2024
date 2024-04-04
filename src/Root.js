import { Outlet } from "react-router-dom";
import {Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
export default function Root() {

  return (
    <>
      {/* all the other elements */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to={'posts'}>Post</Link>
            <Link style={{marginLeft: 20}} className="nav-link" to={'products'}>Products</Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Link className="nav-link" to={'register'}>Register</Link>
            <Link style={{marginLeft: 20}} className="nav-link" to={'carts'}>cart</Link>
          </Nav>
          </Container>
      </Navbar>
      <Container style={{height: '85vh'}}>
        <Outlet />
      </Container>
      <Row style={{background: '#ccc', height: 50}} className='mt-3'>
            <Col style={{display: 'flex', justifyContent: 'center'}}>
                 <h5>frontend framework</h5>
            </Col>
        </Row>
    </>
  );
}
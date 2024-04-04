import { useContext, useState } from "react"
import Table from "react-bootstrap/Table"
import { CartContext } from "../context"
import { Button, Row, Col, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from "axios"
const Cart = (props) => {
  const [carts, dispatch] = useContext(CartContext)
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const userId = JSON.parse(localStorage.getItem('user'))?.id;
  console.log('carts: ', carts)

  console.log(carts.carts)
  const handleRemoveCart = (item) => {
    dispatch({ type: "REMOVE_CART", payload: {...item}});
  }
  const getTotalCart = (carts)=>{
    let totalCart = 0
    for (let i=0; i<carts.length; i++){
      totalCart += carts[i].price * carts[i].quantity
    }
    return totalCart
  }

  const handleCheckout = () => {

    axios.post("http://localhost:3000/orders", {
      carts: carts.carts,
       phone,
       address,
       userId,
       status: 'pending'
    }).then(() => {
      alert("Theem thanh cong");
      dispatch({ type: "CLEAR_CART", payload: {}});
    })
  }
    
  return (
    <>
    <h1>checkout</h1>
    <Row>
      <Col xs={8}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>STĐ</Form.Label>
        <Form.Control type="text" placeholder="Enter sđt" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Địa chỉ</Form.Label>
        <Form.Control type="text" placeholder="Enter sđt" value={address} onChange={e => setAddress(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ghi chú</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="ghi chú với shipper"
          style={{ height: '100px' }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
     <Button className="btn btn-primary">Go to Shopping</Button>
      <Button className="btn btn-success" onClick={handleCheckout}>Checkout</Button>
      </Col>
      <Col xs={4}>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>image</th>
          <th>Pice</th>
          <th>SL</th>
          <th>subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {carts.carts.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>
                <img src={item.image} width={50} alt=""/>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity*item.price}</td>
              <td><Button className="btn btn-danger" onClick={()=>handleRemoveCart(item)}>Remove</Button></td>
            </tr>
            
          )
        })}
        <tfoot>
          <tr>
            <td><strong>Total: {getTotalCart(carts?.carts)}$</strong></td>
          </tr>
        </tfoot>
      </tbody>
    </Table>
      </Col>
      </Row>
      
    </>
  )
}
export default Cart

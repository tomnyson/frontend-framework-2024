import { useContext } from "react"
import Table from "react-bootstrap/Table"
import { CartContext } from "../context"
import { Button, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
const Cart = (props) => {
  const [carts, dispatch] = useContext(CartContext)
  console.log(carts)
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
    
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>image</th>
          <th>name</th>
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
                <img src={item.image} width={100} alt=""/>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
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
    <Row>
      <Col md={3}>
      <Button className="btn btn-primary">Go to Shopping</Button>
      <Button className="btn btn-success" ><Link to={'/checkout'}>Checkout</Link></Button>
      </Col>

      </Row>
    </>
  )
}
export default Cart

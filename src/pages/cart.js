import { useContext } from "react"
import Table from "react-bootstrap/Table"
import { CartContext } from "../context"
import { Button } from "react-bootstrap"
const Cart = (props) => {
  const [carts, dispatch] = useContext(CartContext)
  console.log(carts)
  const handleRemoveCart = (item) => {
    dispatch({ type: "REMOVE_CART", payload: {...item}});
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>image</th>
          <th>name</th>
          <th>Pice</th>
          <th>SL</th>
          <th>SL</th>
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
              <td><Button onClick={()=>handleRemoveCart(item)}>Remove</Button></td>



            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
export default Cart

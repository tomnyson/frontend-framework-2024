import { useContext } from "react"
import Table from "react-bootstrap/Table"
import { CartContext } from "../context"
const Cart = (props) => {
  const [carts, dispatch] = useContext(CartContext)
  console.log(carts)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Pice</th>
        </tr>
      </thead>
      <tbody>
        {carts.carts.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.price}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
export default Cart

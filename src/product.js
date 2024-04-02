import { useEffect, useState, useContext } from "react"
import axios from "axios"
import "./App.css"
import { Link } from "react-router-dom";
import {UserContext} from "./context";
import {Button, Col, Container, Row} from 'react-bootstrap'
const Product = () => {
  const [formData, setFormData] = useState({ title: "", image: "", description: "" })

  const [isEdit, setIsEdit] = useState(false)

  const [posts, setPosts] = useState([])

  const [user, setUserName] = useContext(UserContext);
  console.log("user",user)
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = () => {
    axios
      .get("http://localhost:3000/products")
      .then(function (response) {
        // handle success
        setPosts(response.data)
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
      })
  }

  const createPost = () => {
    /**
     * axios.post('/user', {
    lastName: 'Trần'
    firstName: 'Quốc Tuấn',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
     */

    if (isEdit) {
      console.log(formData);
      axios
      .put(`http://localhost:3000/posts/${formData.id}`, {
        ...formData,
      })
      .then(function (response) {
        alert("edit success")
      })
      .catch(function (error) {
        console.log(error)
      })
    } else {
      axios
        .post("http://localhost:3000/posts", {
          ...formData,
        })
        .then(function (response) {
          alert("add to success")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  function hangleChangeData(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleEdit(item) {
    setIsEdit(true)
    setFormData({
      ...item,
    })
    // axios.get(`http://localhost:3000/posts/${id}`)
    // .then(function(response) {
    //   console.log(response);
    // }).catch(function(err) {
    //   console.log(err);
    // });
  }

  const reload = () => {
    fetchData();
  }

  function handleDelete(item){
    axios
    .delete(`http://localhost:3000/posts/${item.id}`)
    .then(function (response) {
      // handle success
      alert("delete successfully")
      reload();
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .finally(function () {
      // always executed
    })

  }
  
  const handleAddCart = () => {
    
  }
  return (
    <Container>
        <Row style={{marginTop: 20}}>
          {posts.map((item) => {
            return (
              <Col>
                <img src={item.image} alt="" />
                <Link to={'posts/' + item.id}> <h2>{item.name}</h2></Link>
                <p>{item.description}</p>
                <p>{item.price}</p>
                 <Button onClick={handleAddCart}>add cart</Button>
               
              </Col>
            )
          })}
        </Row>
        </Container>
  )
}
export default Product

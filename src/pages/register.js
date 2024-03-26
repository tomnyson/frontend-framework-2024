import { useState } from "react"
import Form from "react-bootstrap/Form"
import { Container, Row, Col, Button } from "react-bootstrap"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ userName: "", password: "", email: "" })

  const isCheckExist = async () => {
      const response = await axios.get(`http://localhost:3000/users?username=${formData.userName}`)
      if(response.status === 200) {
        console.log(response.data)
        if(response.data.length >0) {
          return true
        }
      }
      return false
  }
  const handleLogin = async(e) => {
    console.log("!isCheckExist(formData.userName)", await isCheckExist(formData.userName))
    if (await isCheckExist(formData.userName) == false) {
      console.log('call here to login')
      if (formData.userName !== "" && formData.password !== "") {
        axios
          .post(`http://localhost:3000/users`, formData)
          .then(function (response) {
            if (response.status === 201) {
              console.log("Register success")
              // navigate("/login")
            }
          })
          .catch(function () {
            alert("username or  password is incorrect")
          })
      }
    } else {
      alert("username is registered")
    }

    /**
     * kt username, password !=''
     * call api nhu post detail truyen quen query username , password
     *  -> get data, if has data success, fail
     */
  }
  function hangleChangeData(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>Register</h1>
          <Form.Label htmlFor="inputPassword5">UserName</Form.Label>
          <Form.Control
            onChange={hangleChangeData}
            name="userName"
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted></Form.Text>
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            onChange={hangleChangeData}
            name="password"
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted></Form.Text>
          <Form.Label htmlFor="inputPassword5">Email</Form.Label>
          <Form.Control
            onChange={hangleChangeData}
            name="email"
            type="email"
            id="inputEmail5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted></Form.Text>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={handleLogin}
              style={{ height: "35px", marginTop: 5, width: "30%" }}
              variant="primary"
            >
              Register
            </Button>
          </div>
          <br />
          <Link to={"/login"}>Login Account</Link>
        </Col>
      </Row>
    </Container>
  )
}

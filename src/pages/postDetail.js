import { Routes, Route, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
function PostDetail() {
  const [detail, setDetail] = useState(null)
  const { postId } = useParams()

  useEffect(() => {
    if (postId) {
      fetchData(postId)
    }
  }, [postId])

  const fetchData = (postId) => {
    axios
      .get(`http://localhost:3000/posts/${postId}`)
      .then(function (response) {
        // handle success
        setDetail(response.data)
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        setDetail(null)
      })
      .finally(function () {
        // always executed
      })
  }
  console.log(detail)
  if (!detail || detail == null) {
    return <h1>Loading 111...</h1>
  }
  return (
    <Container>
      <Row>
      <Image src={detail?.image} alt="" thumbnail style={{width: '80%'}} />
        <h2 className="title">{detail?.title}</h2>
        <p className="description">{detail?.description}</p>
      </Row>
     
    </Container>
  )
}

export default PostDetail;
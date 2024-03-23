import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"
import { Link } from "react-router-dom";
const DemoAPI = () => {
  const [formData, setFormData] = useState({ title: "", image: "", description: "" })

  const [isEdit, setIsEdit] = useState(false)

  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = () => {
    axios
      .get("http://localhost:3000/posts")
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
  return (
    <div className="container">
      <div className="flex">
        <form>
          <h1>Create post</h1>
          <input
            type="text"
            name="title"
            defaultValue={formData.title}
            placeholder="title"
            id="title"
            onChange={hangleChangeData}
          />
          <input
            type="text"
            name="image"
            defaultValue={formData.image}
            placeholder="image link"
            id="image"
            onChange={hangleChangeData}
          />
          <textarea
            rows={5}
            defaultValue={formData.description}
            name="description"
            placeholder="description"
            onChange={hangleChangeData}
          />
          <button onClick={createPost} type="button">
            {isEdit ? "edit" : "create"}
          </button>
        </form>
        <div className="posts">
          {posts.map((item) => {
            return (
              <div className="item">
                <img src={item.image} alt="" />
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
                <button className="btn" onClick={() => handleEdit(item)}>
                  edit
                </button>
                <button className="btn btn-delete" onClick={() => handleDelete(item)}>
                  delete
                </button>
                <Link to={`/posts/${item.id}`}>view detail</Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default DemoAPI

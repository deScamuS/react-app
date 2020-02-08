/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import UserTable from "./components/UserTable"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AddUserForm from "./components/AddUserForm"

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = user.length + 1
    setUsers([...users, user])
  }
  return (
    <Container fluid>
      <div className="App">
        <h1>CRUD App with Hooks</h1>
        <br />
        <hr />
        <Row noGutters={true}>
          <Col md={4}>
            <h2>Add Users</h2>
            <AddUserForm addUser={addUser} />
          </Col>
          <Col>
            <h2>View User</h2>
            <UserTable users={users} />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default App

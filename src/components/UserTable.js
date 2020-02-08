/* eslint-disable no-unused-vars */
import React from "react"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const UserTable = props => {
  return (
    <Container fluid={true}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <Button variant="outline-info">Edit</Button>{" "}
                  <Button variant="outline-dark">Delete</Button>{" "}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}
export default UserTable

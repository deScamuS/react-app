/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact"
import "./AddUserForm.css"

const AddUserForm = props => {
  const initialFormState = { id: null, name: "", username: "" }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <MDBContainer fluid>
      <form
        onSubmit={event => {
          event.preventDefault()
          if (!user.name || !user.username) return

          props.addUser(user)
          setUser(initialFormState)
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <MDBBtn className=".waves-effect" outline color="transparent">
          Add User{" "}
        </MDBBtn>
      </form>
    </MDBContainer>
  )
}

export default AddUserForm

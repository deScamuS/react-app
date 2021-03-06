/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { MDBContainer, MDBBtn } from "mdbreact"
import "./AddUserForm.css"

const AddUserForm = props => {
  const initialFormState = { id: null, name: "", username: "" }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }
  return (
    <MDBContainer>
      <form
        onSubmit={event => {
          event.preventDefault()
          if (!user.name || !user.username) return
          props.addUser(user)
          setUser(initialFormState)
        }}
      >
        <label>Sail #</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <label>Sailor</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <MDBBtn
          className=".waves-effect"
          outline
          color="light-blue"
          onChange="{handleInputChange}"
          onClick={() => {
            props.addUser(user)
          }}
        >
          Add User
        </MDBBtn>
      </form>
    </MDBContainer>
  )
}

export default AddUserForm

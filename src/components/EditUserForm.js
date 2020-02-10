/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { MDBContainer, MDBBtn } from "mdbreact"

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)
  useEffect(() => {
    setUser(props.currentUser)
  }, [props])
  // Tell React to skip applying an effect if certain values haven’t changed between re-renders?[ props ]

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }
  return (
    <MDBContainer>
      <form
        onSubmit={event => {
          event.preventDefault()
          props.updateUser(user.id, user)
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
        <MDBBtn
          className=".waves-effect"
          outline
          color="primary" >
          Update User
        </MDBBtn>
           <MDBBtn
          className=".waves-effect"
          outline
          color="secondary"
          onClick={() => props.setEditing(false)}
        >
          Cancel
        </MDBBtn>
      </form>
    </MDBContainer>
  )
}
export default EditUserForm


          
          
       
       
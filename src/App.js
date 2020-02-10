/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import UserTable from "./components/UserTable"
import AddUserForm from "./components/AddUserForm"
import EditUserForm from "./components/EditUserForm"
import logo from './crud-operations.jpg'
import "./App.css"

const App = () => {
  const usersData = [{ id: 0, name: "God", username: "theos1.yourallsoscrewed;)" }]

  const [users, setUsers] = useState(usersData)

  //set up for  editing and updating...
  const [editing, setEditing] = useState(false)
  const intialFormState = { id: null, name: "", usernamem: "" }
  const [currentUser, setCurrentUser] = useState(intialFormState)

  //functions
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <img style={{ opacity: '.2' }} src={logo} alt="" className="responsive" />

      <h1 style={{ color: "#34495E" }}> w/ React Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <h2 style={{ textDecoration: "underline", color: "#34495E" }}>
                  Add user
              </h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
        </div>
        <div className="flex-large">
          <h2 style={{ textDecoration: "underline", color: "#34495E" }}>
            View users
          </h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  )
}

export default App

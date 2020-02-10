/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import UserTable from "./components/UserTable"
import AddUserForm from "./components/AddUserForm"
import EditUserForm from "./components/EditUserForm"
import logo from './crud-operations.jpg'
import logo3 from './react.png'
import "./App.css"

const App = () => {
  const usersData = [{ id: 0, name: 'M153', username: "DeSantis" }]

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
    <div className='container'>

        <h1 style={{ color: "#34495E", marginRight: '45px' }}>REACT HOOKS</h1>
      <div className="flex-row" >
        <div className="flex-large">
          <img src={logo} alt="" className='responsive' />
          {editing ? (
            <div>
              <h2 >Edit User</h2>
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
                  Sailor
              </h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
        </div>
        <div className="flex-large">
          <h2 style={{ textDecoration: "underline", color: "#34495E" }}>
            View Race Results <br />

          </h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  )
}

export default App

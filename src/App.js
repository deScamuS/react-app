/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import UserTable from "./components/UserTable"
import AddUserForm from "./components/AddUserForm"
import "./App.css"

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ]
  const [users, setUsers] = useState(usersData)

  //function
  const addUser = user => {
    user.id = users.length + 1
    setUsers([users, user])
  }
  return (
    <div className="container">
      <h1 style={{ color: "black" }}>CRUD App w/ React Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2 style={{ textDecoration: "underline" }}>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2 style={{ textDecoration: "underline" }}>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default App

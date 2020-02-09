/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import UserTable from "./components/UserTable"
import AddUserForm from "./components/AddUserForm"
import "./App.css"

const App = () => {
  const usersData = [
    { id: 0, name: "Gabriel", username: "" },
    { id: 1, name: "Michael", username: "" },
    { id: 2, name: "Beezelbub", username: "" }
  ]
  const [users, setUsers] = useState(usersData)

  //function
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
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

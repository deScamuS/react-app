import React from "react"
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact"
import { MDBBtn } from "mdbreact"
import "./UserTable.css"

const UserTable = props => {
  return (
   
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Action </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {props.users.length > 0 ? (
            props.users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <MDBBtn color="transparent" size="sm">
                    edit
                  </MDBBtn>
                  <MDBBtn color="transparent" size="sm">
                    delete
                  </MDBBtn>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No Users</td>
            </tr>
          )}
        </MDBTableBody>
      </MDBTable>
    
  )
}

export default UserTable
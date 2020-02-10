import React from "react"
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact"
import { MDBBtn } from "mdbreact"
import "./UserTable.css"

const UserTable = props => (
  <MDBTable>
    <MDBTableHead>
      <tr>
        <th>#</th>
        <th>Sailor</th>
        <th>Actions </th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <MDBBtn
                outline color="light-blue"
                size="sm"
                onClick={() => {
                  props.editRow(user)}}
                className="button muted-button"

              >
                edit
              </MDBBtn>
              <MDBBtn
                onClick={event => props.deleteUser(user.id)}
                className="button muted-button"
                outline color="light-blue"
                size="sm"
              >
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
export default UserTable

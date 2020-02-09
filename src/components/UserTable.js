import React from "react"
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact"
import { MDBBtn } from "mdbreact"
import './UserTable.css'
const UserTable = () => {
  return (
    <div>
 

    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>Action </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>Beezelbub</td>
          <td>Beez666</td>
          <td>
          <MDBBtn color="transparent"size="sm">edit</MDBBtn>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Sophia</td>
          <td>Soph123</td>
       <td>              
       <MDBBtn color="transparent" size="sm">delete</MDBBtn>


          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default UserTable

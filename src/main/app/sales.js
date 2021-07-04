import { returnStatement } from '@babel/types'
import React from 'react'

function Sale() {
    return(
        <div>
            <div className="accounts">
        <div className="accounts__card">
          <button 
            style={{
              margin: "1rem",
              float: "right",
              backgroundColor: "green",
              color: "white",
              borderRadius: ".2rem",
            }}
          >
            Add User
          </button>
          <table>
            <thead className="thead">
              <tr className="thead">
                <th>EMPLOYEE NAME</th>
                <th>PHONE</th>
                <th>USERNAME</th>
                <th>ID</th>
                <th>ACTIONE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tbody">
                <td>ABDULLA ALHASSAN</td>
                <td>0000000000</td>
                <td>AALHASSAN</td>
                <td>FA202100000</td>
                <td>....</td>
              </tr>
              <tr>
                <td>ABDULLA ALHASSAN</td>
                <td>0000000000</td>
                <td>AALHASSAN</td>
                <td>FA202100000</td>
                <td>....</td>
              </tr>
              <tr className="tbody">
                <td>ABDULLA ALHASSAN</td>
                <td>0000000000</td>
                <td>AALHASSAN</td>
                <td>FA202100000</td>
                <td>....</td>
              </tr>
              <tr>
                <td>ABDULLA ALHASSAN</td>
                <td>0000000000</td>
                <td>AALHASSAN</td>
                <td>FA202100000</td>
                <td>....</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div>
    )
}
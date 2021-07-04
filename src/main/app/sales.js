import { returnStatement } from '@babel/types'
import React from 'react'


function Sales(props) {
      const Accounts = () => {
    props.history.push("/Accounts");
  };
    return(
        <div>
            {/* back to accounts page */}
            <h5 onClick={Accounts} className="account__icon" style={{color:"black"}}>Lock</h5>

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
            Print
          </button>
          <table>
            <thead className="thead">
              <tr className="thead">
                <th>Dish</th>
                <th>Price</th>
                <th>Vendor</th>
                <th>Buyer</th>
                <th>Date</th>
                <th>ACTIONE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tbody">
                <td>Tz& Ayoyo</td>
                <td>GHS17.00</td>
                <td>Acheampong</td>
                <td>Alhasan</td>
                <td>7 July 2021</td>

                <td>....</td>
              </tr>
              <tr className="tbody">
                <td>Tz& Ayoyo</td>
                <td>GHS17.00</td>
                <td>Acheampong</td>
                <td>Alhasan</td>
                <td>7 July 2021</td>
                <td>....</td>
              </tr> <tr className="tbody">
                <td>Tz& Ayoyo</td>
                <td>GHS17.00</td>
                <td>Acheampong</td>
                <td>Alhasan</td>
                <td>7 July 2021</td>
                <td>....</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
        </div>
    )
}

export default Sales;
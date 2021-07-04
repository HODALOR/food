import React from "react";
import Modals from "./modals";

function Dishes(props) {
    const Accounts = () => {
        props.history.push("/Accounts");
      };
  return (
    <div>
        {/* back to accounts page */}
      <h5
        onClick={Accounts}
        className="account__icon"
        style={{ color: "black" }}
      >
        Lock
      </h5>

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
            Add Dish
          </button>
          <table>
            <thead className="thead">
              <tr className="thead">
                <th>Dish</th>
                <th>Price</th>
                <th>Available</th>
                <th>ID</th>
                <th>ACTIONE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tbody">
                <td>Banku & Okra stew</td>
                <td>GHC 25.00</td>
                <td>yes</td>
                <td>FA202100000</td>
                <td>....</td>
              </tr>
              <tr className="tbody">
                <td>Banku & Okra stew</td>
                <td>GHC 25.00</td>
                <td>yes</td>
                <td>FA202100000</td>
                <td>....</td>
              </tr>
              <tr className="tbody">
                <td>Banku & Okra stew</td>
                <td>GHC 25.00</td>
                <td>yes</td>
                <td>FA202100000</td>
                <td>....</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dishes;

import React from "react";
import "./main.css";

function Users(props) {
  const salePoint = () => {
    props.history.push("/");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "orange",
          height: "4rem",
        }}
      >
        <img
          src="/assets/logo1.png"
          style={{ width: "8rem", height: "8rem" }}
        />
        <h2 className="add" style={{ marginRight: "20%" }}>
          FoodApp
        </h2>

        {/* <h2 className="add" style={{marginRight:"3rem"}}>ACCOUNTS</h2>
            <h2 className="add" style={{marginRight:"3rem"}}>SALES</h2>
            <h2 className="add" style={{marginRight:"3rem",}}>PRODUCTS</h2> */}
         <div style={{float:"right"}}>
        <i
          className="fa fa-ellipsis-h admin"
          style={{ marginRight: "10px", fontSize: "1.5rem"}}
        ></i>

        <i
          className="fa fa-unlock-alt admin"
          style={{ marginRight: "10px", fontSize: "1.5rem" }}
          onClick={salePoint}
        ></i>
        </div>
      </div>
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
  );
}

export default Users;

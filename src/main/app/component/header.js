import React from "react";
import { Link } from "react-router-dom";
import "../main.css";
import logo from "./kegali.jpg";

function Header(props) {
  if (props.title === "admin") {
    return (
      <div>
        <div className="header-style">
          <img
            src={logo}
            style={{ width: "50px", height: "50px", margin: "3px" }}
          />
          <div
            className="dropdown "
            style={{ display: "flex", alignItems: "center", marginLeft: "90%" }}
          >
            <div className="dropdown">
              <i
                className="fa fa-ellipsis-v  dropbtn"
                style={{
                  marginRight: "10px",
                  fontSize: "1.5rem",
                  marginLeft: "30px"
                }}
              ></i>
              <div className="dropdown-content">
                <Link to="/Sales">
                  <i className="fa fa-money-check-alt"></i> Sales
                </Link>
                <Link to="/Dishes">
                  <i className="fa fa-hamburger"></i> Dishes
                </Link>
                <Link to="/Accounts">
                  <i className="fa fa-users"></i> Accounts
                </Link>
                <Link to="/">
                  <i className="fa fa-lock"></i> Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="header-style">
          <img
            src={logo}
            style={{ width: "50px", height: "50px", margin: "3px" }}
          />
          {/* <p style={{textAlign: "left"}}>KIGALI HOTEL</p> */}
          <Link to="/" className="right">
            <i class="fa fa-lock" style={{ float: "flex-end" }}></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;

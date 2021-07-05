import React from "react";
import { Link } from "react-router-dom";
import "../main.css";

function Header(props) {
  if (props.title === "admin") {
    return (
      <div>
        <div className="header-style">
          <img
            src="/assets/logo1.png"
            style={{ width: "60px", height: "60px" }}
          />
          <div className="dropdown">
            <div className="dropdown">
              <i
                className="fa fa-ellipsis-v  dropbtn"
                style={{
                  marginRight: "10px",
                  fontSize: "1.5rem",
                  marginLeft: "30px",
                }}
              ></i>
              <div className="dropdown-content">
                <Link to="/Sales">Sales</Link>
                <Link to="/Dishes">Dishes</Link>
                <Link to="/Accounts">Accounta</Link>
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
            src="/assets/logo1.png"
            style={{ width: "60px", height: "60px" }}
          />
          <div className="right">
            <i class="fa fa-cart-plus" style={{ float: "flex-end" }}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

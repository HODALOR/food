import React from "react";
import "../main.css";

function Header() {
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

export default Header;

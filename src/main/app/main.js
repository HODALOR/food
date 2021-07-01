import React from "react";
import Header from "./component/header";
import "./main.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <div>
      <Header />
      <div style={{}} className="main__card">
        <div
          className="w3-container w3-card w3-round-medium  main__card2"
          style={{
            width: "95%",
            margin: "1%",
            height: "85vh",
            justifyContent: "center",
            backgroundImage: `url(/assets/dish1.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          
          }}
        >
          <h1>THE FOOD APP</h1>
          <div className="select">
            <select>
              <option>Select dish...</option>
              <option>Banku & Okra Stew</option>
              <option>Banku & Tilapia</option>
              <option>Fufu & light soup</option>
              <option>TZ & Ayoyo</option>
              <option>Fried Yam</option>
              <option>Beans</option>
              <option>Ap3pr3nsa</option>
              <option>other</option>
              <option>Banku & Okra Stew</option>
              <option>Banku & Tilapia</option>
              <option>Fufu & light soup</option>
              <option>TZ & Ayoyo</option>
              <option>Fried Yam</option>
              <option>Beans</option>
              <option>Ap3pr3nsa</option>
              <option>other</option>
              <option>Banku & Okra Stew</option>
              <option>Banku & Tilapia</option>
              <option>Fufu & light soup</option>
              <option>TZ & Ayoyo</option>
              <option>Fried Yam</option>
              <option>Beans</option>
              <option>Ap3pr3nsa</option>
              <option>other</option>
            </select>
            <div className="prices">GHC</div>
            <button type="button" role="button" className="add">
            <i class="fa fa-cart-plus"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

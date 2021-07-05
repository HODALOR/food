import React from "react";
import Header from "./component/header";
import "./main.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Main(props) {
  const data = props.dishes;
  const user = props.user;
  return (
    <div>
      <Header title="main-paige" />
      <div className="main__card">
        <div
          style={{
            width: "95%",
            margin: "1%",
            height: "85vh",
            justifyContent: "center",
            backgroundImage: `url(/assets/dish1.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        >
          <h1>RESTAURANT NAME</h1>
          <div className="select">
            <select>
              <option>Select dish...</option>
              {data.map((dish) => {
                return <option>{dish.dishName}</option>;
              })}
            </select>
            <div className="prices">GHC</div>
            <button type="button" role="button" className="add">
              <i className="fa fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

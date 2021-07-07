import React, { useState } from "react";
import Header from "./component/header";
import Modals from "./component/modals";
import Print from "./component/print";
import "./main.css";

function Main(props) {
  const [slectedDish, setDish] = useState("");
  const [cart, setCart] = useState([]);
  const [err, setErr] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [qt, setQt] = useState("");
  const [print, setPrint] = useState(false);
  const data = props.dishes;
  const getPrice = () => {
    const selctDish = data.find((dish) => dish.dishName === slectedDish);
    if (selctDish) {
      return selctDish.price;
    } else {
      return "";
    }
  };
  const _showCart = () => {
    if (cart.length < 10) {
      return (
        <button className="cart-place btn-warning" onClick={() => _openModal()}>
          <span className="my-badge">0{cart.length}</span>
          <i className="fa fa-cart-arrow-down cart"></i>
        </button>
      );
    } else {
      <button className="cart-place btn-warning" onClick={() => _openModal()}>
        <span className="my-badge">{cart.length}</span>
        <i className="fa fa-cart-arrow-down cart"></i>
      </button>;
    }
  };
  const _handleAddToCart = () => {
    const dish = data.find((d) => d.dishName === slectedDish);
    if (qt === "" || qt === "0") {
      setErr("Quantity cannot be 0!");
      setTimeout(() => {
        setErr("");
        setQt("");
      }, 3000);
    } else {
      if (slectedDish !== "") {
        dish.quantity = qt;
        let newCart = [...cart, dish];
        setCart(newCart);
        setDish("");
      } else {
        setErr("Please select a dish first!");
        setTimeout(() => {
          setErr("");
          setQt("");
        }, 3000);
      }
    }
  };
  const _openModal = () => {
    if (cart.length === 0) {
      setErr("Cart is empty!");
      setTimeout(() => {
        setErr("");
      }, 3000);
    } else {
      _toggleModal();
    }
  };
  const _toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const _handleBuy = () => {
    props.onAdd(cart);
    setPrint(true);
    setCart([]);
    _toggleModal();
  };
  const _handleClear = () => {
    setCart([]);
    _toggleModal();
  };
  const _handleRemove = (id) => {
    const newCart = [];
    cart.forEach((dish) => {
      if (dish._id === id) {
        cart.slice(dish);
      } else {
        newCart.push(dish);
      }
      setCart(newCart);
    });
  };
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
          <div className="res-place">
            <h1>RESTAURANT NAME</h1>
            {_showCart()}
          </div>
          <div className="select">
            <select onChange={(e) => setDish(e.target.value)}>
              <option>Select dish...</option>
              {data.map((dish) => {
                return <option>{dish.dishName}</option>;
              })}
            </select>
            <div className="prices">GHC {getPrice()}</div>
            <input
              className="quantity"
              placeholder="# of packages"
              type="number"
              onChange={(e) => setQt(e.target.value)}
            />
            <button
              type="button"
              className="add"
              onClick={() => _handleAddToCart()}
            >
              <i className="fa fa-cart-plus"></i> Add to Cart
            </button>
          </div>
          <div className="err-div">
            {err === "" ? "" : <div className="errMessage">{err}</div>}
          </div>
          <Modals
            title="cart-modal"
            isOpen={isOpen}
            data={cart}
            toggleModal={_toggleModal}
            onBuy={_handleBuy}
            onClear={_handleClear}
            onRemove={_handleRemove}
          />
          <Print data={cart} onPrint={print} />
        </div>
      </div>
    </div>
  );
}

export default Main;

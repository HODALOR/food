import React, { useState } from "react";
import Header from "./component/header";
import Modals from "./component/modals";
import Print from "./component/print";
import back from "./dish1.jpg";
import "./main.css";

function Main(props) {
  const [slectedDish, setDish] = useState("");
  const [slectedDrink, setDrink] = useState("");
  const [slectedBv, setBv] = useState("");
  const [cart, setCart] = useState([]);
  const [err, setErr] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [qt, setQt] = useState("");
  const [lqQt, setLqQt] = useState("");
  const [bvQt, setBvQt] = useState("");
  const [print, setPrint] = useState(false);
  const data = props.dishes;
  const beverages = props.beverages;
  const liqour = props.liquor;

  const getPrice = check => {
    if (check === "dish") {
      const selctDish = data.find(dish => dish.dishName === slectedDish);
      if (selctDish) {
        return selctDish.price;
      } else {
        return "";
      }
    } else if (check === "drink") {
      const selctDrink = liqour.find(lq => lq.liqureName === slectedDrink);
      if (selctDrink) {
        return selctDrink.price;
      } else {
        return "";
      }
    } else {
      const selctBev = beverages.find(bv => bv.beverageName === slectedBv);
      if (selctBev) {
        return selctBev.price;
      } else {
        return "";
      }
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
    const dish = data.find(d => d.dishName === slectedDish);
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
  const _handleAddDrinkToCart = () => {
    const drink = liqour.find(lq => lq.liqureName === slectedDrink);
    if (lqQt === "" || lqQt === "0") {
      setErr("Liquor Quantity cannot be 0!");
      setTimeout(() => {
        setErr("");
        setLqQt("");
      }, 3000);
    } else {
      if (slectedDrink !== "") {
        drink.quantity = lqQt;
        let newCart = [...cart, drink];
        setCart(newCart);
        setDrink("");
      } else {
        setErr("Please select a drink first!");
        setTimeout(() => {
          setErr("");
          setLqQt("");
        }, 3000);
      }
    }
  };
  const _handleAddBevToCart = () => {
    const bv = beverages.find(bev => bev.beverageName === slectedBv);
    if (bvQt === "" || bvQt === "0") {
      setErr("Bevrage Quantity cannot be 0!");
      setTimeout(() => {
        setErr("");
        setBvQt("");
      }, 3000);
    } else {
      if (slectedBv !== "") {
        bv.quantity = bvQt;
        let newCart = [...cart, bv];
        setCart(newCart);
        setBv("");
      } else {
        setErr("Please select a beverage first!");
        setTimeout(() => {
          setErr("");
          setBvQt("");
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
  const _handleRemove = id => {
    const newCart = [];
    cart.forEach(dish => {
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
            backgroundImage: `url(${back})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "10px"
          }}
        >
          <div className="res-place">
            <h1 style={{ fontFamily: "agency FB" }}>
              <strong>KEGALI</strong> <small>HOTEL</small>{" "}
            </h1>
            {_showCart()}
          </div>
          <div className="select">
            <select onChange={e => setDish(e.target.value)}>
              <option>Select dish...</option>
              {data.map(dish => {
                return <option>{dish.dishName}</option>;
              })}
            </select>
            <div className="prices">GHC {getPrice("dish")}</div>
            <input
              className="quantity"
              placeholder="# of packages"
              type="number"
              onChange={e => setQt(e.target.value)}
            />
            <button
              type="button"
              className="add"
              onClick={() => _handleAddToCart()}
            >
              <i className="fa fa-cart-plus"></i> Add to Cart
            </button>
          </div>
          <div className="sub-select">
            <div className="sub">
              <select
                className="my-select"
                onChange={e => setDrink(e.target.value)}
              >
                <option>Select drink...</option>
                {liqour.map(lq => {
                  return <option>{lq.liqureName}</option>;
                })}
              </select>
              <div className="sup-prices">{getPrice("drink")}</div>
              <input
                className="sub-quantity"
                placeholder="#"
                type="number"
                onChange={e => setLqQt(e.target.value)}
              />
              <button
                type="button"
                className="sub-add"
                onClick={() => _handleAddDrinkToCart()}
              >
                <i className="fa fa-cart-plus"></i>
              </button>
            </div>
            <div className="sub">
              <select
                className="my-select"
                onChange={e => setBv(e.target.value)}
              >
                <option>Select beverage...</option>
                {beverages.map(bv => {
                  return <option>{bv.beverageName}</option>;
                })}
              </select>
              <div className="sup-prices">{getPrice("bv")}</div>
              <input
                className="sub-quantity"
                placeholder="#"
                type="number"
                onChange={e => setBvQt(e.target.value)}
              />
              <button
                type="button"
                className="sub-add"
                onClick={() => _handleAddBevToCart()}
              >
                <i className="fa fa-cart-plus"></i>
              </button>
            </div>
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

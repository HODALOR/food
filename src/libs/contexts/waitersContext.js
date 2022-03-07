import React, { createContext, useState } from "react";
import { _calTprice, _calTQt } from "../functions/waiters";

export const WaiterContext = createContext();

export default function WaiterContextProvider(props) {
  const [dishes, setDishes] = useState([
    { name: "banku and tilapia", price: "10" },
    { name: "fufu and light soup", price: "14" },
    { name: "fried rice and chicken", price: "20" },
  ]);

  const [drinks, setDrinks] = useState([
    { name: "cocke", price: "10" },
    { name: "fanta", price: "14" },
    { name: "malt", price: "20" },
  ]);

  const [liquor, setLiquor] = useState([
    { name: "apeteshi", price: "10" },
    { name: "adonko", price: "14" },
    { name: "kasapreko", price: "20" },
  ]);

  // create data state
  const [cart, setCart] = useState([]);
  const [data, setData] = useState({
    title: "dashboard",
    selected: {},
    vPrice: "",
    vQt: "",
    lqPrice: "",
    lqt: "",
    drPrice: "",
    dqt: "",
    tqt: 0,
    tp: 0,
    pakType: "",
    isNot: false,
    code: "",
    isFalse: false,
  });

  const _handleSlectPackage = (value) => {
    setData({
      ...data,
      pakType: value,
    });
  };

  const _handleCode = (value) => {
    if (isNaN(value))
      return setData({
        ...data,
        isFalse: false,
      });

    setData({
      ...data,
      code: value,
    });
  };

  // handle select
  const _handleSelect = (value) => {
    const dish = dishes.find((e) => e.name === value);
    if (dish)
      return setData({
        ...data,
        vPrice: dish.price,
        selected: dish,
      });

    if (!dish)
      return setData({
        ...data,
        vPrice: "",
        vQt: "",
        selected: {},
      });
  };

  // handle select qt
  const _handleSelectQt = (value) => {
    const { selected } = data;
    if (selected.hasOwnProperty("name"))
      return setData({
        ...data,
        vQt: value,
      });
  };

  // handle select
  const _handleSelectliq = (value) => {
    const lq = liquor.find((e) => e.name === value);
    if (lq)
      return setData({
        ...data,
        lqPrice: lq.price,
        selected: lq,
      });

    if (!lq)
      return setData({
        ...data,
        lqPrice: "",
        lqt: "",
        selected: {},
      });
  };

  // handle select qt
  const _handleSelectLiqQt = (value) => {
    const { selected } = data;
    if (selected.hasOwnProperty("name"))
      return setData({
        ...data,
        lqt: value,
      });
  };

  // handle select drink
  const _handleSelectDri = (value) => {
    const dr = drinks.find((e) => e.name === value);
    if (dr)
      return setData({
        ...data,
        drPrice: dr.price,
        selected: dr,
      });

    if (!dr)
      return setData({
        ...data,
        drPrice: "",
        dqt: "",
        selected: {},
      });
  };

  // handle select drink qt
  const _handleSelectdrQt = (value) => {
    const { selected } = data;
    if (selected.hasOwnProperty("name"))
      return setData({
        ...data,
        dqt: value,
      });
  };

  // handle add to cart
  const _addToCart = async () => {
    const { selected, vQt } = data;

    if (vQt === "") return null;
    if (!selected.hasOwnProperty("name")) return null;

    selected.qt = parseInt(vQt);
    const newCart = [...cart, selected];
    const tp = await _calTprice(newCart);
    const qt = await _calTQt(newCart);
    setData({
      ...data,
      tqt: qt,
      tp: tp,
      vPrice: "",
      vQt: "",
      selected: {},
    });
    setCart(newCart);
  };

  // handle add liquor to cart
  const _addToLiqCart = async () => {
    const { selected, lqt } = data;

    if (lqt === "") return null;
    if (!selected.hasOwnProperty("name")) return null;

    selected.qt = parseInt(lqt);
    const newCart = [...cart, selected];
    const tp = await _calTprice(newCart);
    const qt = await _calTQt(newCart);
    setData({
      ...data,
      tqt: qt,
      tp: tp,
      lqPrice: "",
      lqt: "",
      selected: {},
    });
    setCart(newCart);
  };

  // handle add liquor to cart
  const _addToDriCart = async () => {
    const { selected, dqt } = data;

    if (dqt === "") return null;
    if (!selected.hasOwnProperty("name")) return null;

    selected.qt = parseInt(dqt);
    const newCart = [...cart, selected];
    const tp = await _calTprice(newCart);
    const qt = await _calTQt(newCart);
    setData({
      ...data,
      tqt: qt,
      tp: tp,
      drPrice: "",
      dqt: "",
      selected: {},
    });
    setCart(newCart);
  };

  // handle remove from cart
  const _handleRemove = async (name) => {
    const newCart = cart.filter((e) => e.name !== name);
    const tp = await _calTprice(newCart);
    const qt = await _calTQt(newCart);
    setData({
      ...data,
      tqt: qt,
      tp: tp,
    });
    setCart(newCart);
  };

  const _handleCancel = () => {
    setData({
      tqt: 0,
      tp: 0,
    });
    setCart([]);
  };

  const _handleOrder = async () => {
    if (cart.length === 0) return null;
    if (data.pakType === "") {
      setData({ ...data, isNot: true });
      return null;
    }
    if (data.code === "") return null;

    // handle food order here <-----
  };

  return (
    <WaiterContext.Provider
      value={{
        dishes,
        liquor,
        drinks,
        cart,
        data,
        _handleRemove,
        _handleSelect,
        _handleSelectQt,
        _addToCart,
        _handleSelectLiqQt,
        _handleSelectliq,
        _addToLiqCart,
        _handleSelectDri,
        _addToDriCart,
        _handleSelectdrQt,
        _handleSlectPackage,
        _handleCode,
        _handleCancel,
        _handleOrder,
      }}
    >
      {props.children}
    </WaiterContext.Provider>
  );
}

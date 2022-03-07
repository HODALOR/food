import { useContext } from "react";
import { WaiterContext } from "../../libs/contexts/waitersContext";

export default function AddToCart(props) {
  const { _addToCart, _addToLiqCart, _addToDriCart } =
    useContext(WaiterContext);
  const type = props.type;

  if (type === "dish")
    return (
      <button
        className="btn waves-effect waves-light mt-2"
        style={{
          width: "100%",
          height: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "orange",
          color: "black",
        }}
        type="button"
        onClick={_addToCart}
      >
        Add To Cart
      </button>
    );

  if (type === "liq")
    return (
      <button
        className="btn waves-effect waves-light mt-2"
        style={{
          width: "100%",
          height: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "orange",
          color: "black",
        }}
        type="button"
        onClick={_addToLiqCart}
      >
        Add To Cart
      </button>
    );

  if (type === "dri")
    return (
      <button
        className="btn waves-effect waves-light mt-2"
        style={{
          width: "100%",
          height: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "orange",
          color: "black",
        }}
        type="button"
        onClick={_addToDriCart}
      >
        Add To Cart
      </button>
    );
}

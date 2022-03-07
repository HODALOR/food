import { useContext } from "react";
import { WaiterContext } from "../../libs/contexts/waitersContext";
import AddToCart from "../buttons/addToCart";

export default function Select(props) {
  const {
    dishes,
    drinks,
    liquor,
    data,
    _handleSelect,
    _handleSelectQt,
    _handleSelectLiqQt,
    _handleSelectliq,
    _handleSelectdrQt,
    _handleSelectDri,
  } = useContext(WaiterContext);
  const type = props.type;

  if (type === "dishes")
    return (
      <div className="row">
        <div className="col-lg-6">
          <label>Select dish</label>
          <select
            className="form-control"
            onChange={(e) => _handleSelect(e.target.value)}
          >
            <option value="" className="option">
              Select dish
            </option>
            {dishes.map((dish, index) => {
              return (
                <option key={index} value={dish.name} className="option">
                  {dish.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-lg-3">
          <label>Price(₵)</label>
          <div className="form-control">{data.vPrice}</div>
        </div>
        <div className="col-lg-3">
          <label>Quantity</label>
          <input
            type="number"
            value={data.vQt}
            className="form-control"
            onChange={(e) => _handleSelectQt(e.target.value)}
          />
        </div>
        <div className="col-lg-12">
          <AddToCart type="dish" />
        </div>
      </div>
    );

  if (type === "liquor")
    return (
      <div className="row">
        <div className="col-lg-6">
          <label>Select Liquor</label>
          <select
            className="form-control"
            onChange={(e) => _handleSelectliq(e.target.value)}
          >
            <option value="" className="option">
              Select liquor
            </option>
            {liquor.map((liq, index) => {
              return (
                <option key={index} value={liq.name} className="option">
                  {liq.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-lg-3">
          <label>Price(₵)</label>
          <div className="form-control">{data.lqPrice}</div>
        </div>
        <div className="col-lg-3">
          <label>Quantity</label>
          <input
            type="number"
            value={data.lqt}
            className="form-control"
            onChange={(e) => _handleSelectLiqQt(e.target.value)}
          />
        </div>
        <div className="col-lg-12">
          <AddToCart type="liq" />
        </div>
      </div>
    );

  if (type === "drinks")
    return (
      <div className="row">
        <div className="col-lg-6">
          <label>Select Drink</label>
          <select
            className="form-control"
            onChange={(e) => _handleSelectDri(e.target.value)}
          >
            <option value="" className="option">
              Select drink
            </option>
            {drinks.map((dri, index) => {
              return (
                <option key={index} value={dri.name} className="option">
                  {dri.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-lg-3">
          <label>Price(₵)</label>
          <div className="form-control">{data.drPrice}</div>
        </div>
        <div className="col-lg-3">
          <label>Quantity</label>
          <input
            type="number"
            value={data.dqt}
            className="form-control"
            onChange={(e) => _handleSelectdrQt(e.target.value)}
          />
        </div>
        <div className="col-lg-12">
          <AddToCart type="dri" />
        </div>
      </div>
    );
}

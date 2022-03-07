import { useContext } from "react";
import { WaiterContext } from "../../libs/contexts/waitersContext";

export default function OrderCart() {
  const {
    cart,
    data,
    _handleRemove,
    _handleSlectPackage,
    _handleCode,
    _handleCancel,
    _handleOrder,
  } = useContext(WaiterContext);
  return (
    <div className="card">
      <div className="card-header">Cart Details</div>
      <div
        className="card-body"
        style={{ height: "60vh", overflowY: "scroll" }}
      >
        <div
          className="row"
          style={{
            borderBottomWidth: "0.2px",
            borderBottom: "solid",
            borderBottomColor: "orange",
            marginBottom: "15px",
          }}
        >
          <div className="col-md-6">Item Name</div>
          <div className="col-md-2">Price</div>
          <div className="col-md-2">QT</div>
          <div className="col-md-2">Del</div>
        </div>
        {cart.length === 0 ? (
          <span>No data item/s to cart yet!</span>
        ) : (
          cart.map((item, index) => {
            return (
              <form key={index}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        value={item.name}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        value={item.price}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        value={item.qt}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div
                      className="form-group"
                      style={{
                        textAlign: "center",
                      }}
                      type="button"
                      role="button"
                      title="remove from cart"
                      onClick={() => _handleRemove(item.name)}
                    >
                      <i
                        className="fa fa-trash-alt form-control waves-effect waves-light"
                        style={{ color: "orange" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </form>
            );
          })
        )}
        <div
          className="row"
          style={{
            borderTopWidth: "0.3px",
            borderTop: "solid",
            borderTopColor: "orange",
            marginTop: "15px",
            paddingTop: "5px",
          }}
        >
          <div className="col-md-6">
            Total Price:{" "}
            <span className="ml-4">
              <strong style={{ color: "orange" }}> ₵ {data.tp}</strong>
            </span>
          </div>
          <div className="col-md-6">
            Total Item Quantity:{" "}
            <span className="ml-4">
              <strong style={{ color: "orange" }}> {data.tqt}</strong>
            </span>
          </div>
        </div>
        <div className="form-group row" style={{ marginTop: "3em" }}>
          <div className="col-md-4">
            <label>Please select package type</label>
            <select
              className="form-control"
              onChange={(e) => _handleSlectPackage(e.target.value)}
            >
              <option value="" className="option">
                Select package type
              </option>
              <option value="PLATE" className="option">
                PLATE
              </option>
              <option value="TAKE-AWAY" className="option">
                TAKE AWAY
              </option>
            </select>
            {data.isNot ? (
              <small style={{ color: "red" }}>
                please select a package type
              </small>
            ) : (
              <span></span>
            )}
          </div>
          <div className="col-md-4">
            <label>Please Enter Waiter Code</label>
            <input
              type="password"
              value={data.code}
              size="4"
              maxLength="4"
              className="form-control"
              onChange={(e) => _handleCode(e.target.value)}
            />
            {!data.isFalse ? (
              <small
                style={{
                  color: "orange",
                  fontSize: "10px",
                  lineHeight: 0.5,
                }}
              >
                please code must contain only numbers
              </small>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: "3px",
          paddingRight: "20px",
        }}
      >
        <div className="">
          <button
            type="button"
            class="btn btn-warning waves-effect waves-light ml-2"
            style={{
              height: "27px",
              width: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={_handleCancel}
          >
            Cancel
          </button>
        </div>
        <div className="">
          <button
            type="button"
            class="btn btn-success waves-effect waves-light ml-2"
            style={{
              height: "27px",
              width: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={_handleOrder}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

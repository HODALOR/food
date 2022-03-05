import "../../css/main.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import background from "../../components/img/dish1.jpg";
import AddToCart from "./../../components/buttons/addToCart";

export default function Waiters(props) {
  // create data state
  const [data, setData] = useState({
    title: "dashboard",
  });

  // history hook
  const history = useHistory();

  // got to login
  const _handleLogout = async () => {
    history.push("/login");
  };

  return (
    <div>
      {/* Navigation Bar*/}
      <header id="topnav">
        {/* Topbar Start */}
        <div className="navbar-custom">
          <div className="container-fluid">
            <ul className="list-unstyled topnav-menu float-right mb-0">
              <li className="dropdown notification-list">
                <span
                  className="nav-link right-bar-toggle badge-success"
                  type="button"
                  role="button"
                  onClick={_handleLogout}
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Sign in <i className="fa fa-arrow-right" />
                </span>
              </li>
            </ul>
            <ul
              className="list-unstyled topnav-menu-left m-0"
              style={{ display: "flex", alignItems: "center" }}
            >
              <li className="logo-box float-left">
                <span className="logo">
                  <span className="logo-lg">
                    <img
                      src="assets/img/kegali.png"
                      alt="logo"
                      height={30}
                      width={30}
                    />
                  </span>
                  <span className="logo-sm">
                    <img
                      src="assets/img/kegali.png"
                      alt="logo"
                      height={18}
                      width={18}
                    />
                  </span>
                </span>
              </li>
              <li
                className="app-search d-none d-md-block"
                style={{
                  color: "orange",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                <span>Kegali Item Ordering Page</span>
              </li>
            </ul>
          </div>{" "}
          {/* end container-fluid*/}
        </div>
        {/* end Topbar */}
      </header>
      {/* End Navigation Bar*/}
      {/* ============================================================== */}
      {/* Start Page Content here */}
      {/* ============================================================== */}
      <div
        className="kitchen-wrapper"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
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
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Rice and Soup"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="20"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="4"
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
                        >
                          <i
                            className="fa fa-trash-alt form-control waves-effect waves-light"
                            style={{ color: "orange" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </form>
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
                        <strong style={{ color: "orange" }}> GHC 100</strong>
                      </span>
                    </div>
                    <div className="col-md-6">
                      Total Item Quantity:{" "}
                      <span className="ml-4">
                        <strong style={{ color: "orange" }}> 4</strong>
                      </span>
                    </div>
                  </div>
                  <div className="form-group" style={{ marginTop: "3em" }}>
                    <div className="col-md-4">
                      <label>Please Enter Waiter Code</label>
                      <input
                        type="password"
                        placeholder="****"
                        className="form-control"
                      />
                      <small style={{ color: "orange", fontSize: "10px", lineHeight: 0.5 }}>
                        A 4 digit secrete code, needed to make order
                      </small>
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
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card">
                <div className="card-header">Item Select</div>
                <div
                  className="card-body"
                  style={{ height: "70vh", overflowY: "scroll" }}
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <label>Select dish</label>
                      <select className="form-control">
                        <option className="option">Select dish</option>
                        <option className="option">dish 1</option>
                        <option className="option">dish 2</option>
                        <option className="option">dish 3</option>
                        <option className="option">dish 4</option>
                      </select>
                    </div>
                    <div className="col-lg-3">
                      <label>Price</label>
                      <div className="form-control">100</div>
                    </div>
                    <div className="col-lg-3">
                      <label>Quantity</label>
                      <input
                        type="number"
                        placeholder="0"
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-12">
                      <AddToCart />
                    </div>
                  </div>

                  {/* beverage select container */}
                  <div className="row mt-3">
                    <div className="col-lg-6">
                      <label>Select beverage</label>
                      <select className="form-control">
                        <option>Select beverage</option>
                        <option>bev 1</option>
                        <option>bev 2</option>
                        <option>bev 3</option>
                        <option>bev 4</option>
                      </select>
                    </div>
                    <div className="col-lg-3">
                      <label>Price</label>
                      <div className="form-control">100</div>
                    </div>
                    <div className="col-lg-3">
                      <label>Quantity</label>
                      <input
                        type="number"
                        placeholder="0"
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-12">
                      <AddToCart />
                    </div>
                  </div>

                  {/* drink select container */}
                  <div className="row mt-3">
                    <div className="col-lg-6">
                      <label>Select Drink</label>
                      <select className="form-control">
                        <option>Select Drink</option>
                        <option>drink 1</option>
                        <option>drink 2</option>
                        <option>drink 3</option>
                        <option>drink 4</option>
                      </select>
                    </div>
                    <div className="col-lg-3">
                      <label>Price</label>
                      <div className="form-control">100</div>
                    </div>
                    <div className="col-lg-3">
                      <label>Quantity</label>
                      <input
                        type="number"
                        placeholder="0"
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-12">
                      <AddToCart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end container-fluid */}
      </div>
      {/* end wrapper */}
      {/* ============================================================== */}
      {/* End Page content */}
    </div>
  );
}

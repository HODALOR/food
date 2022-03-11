import "../../css/main.css";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import background from "../../components/img/bg1.jpg";
import { _checkUserAuth } from "../../libs/functions/login";
import { WaiterContext } from "../../libs/contexts/waitersContext";

export default function Kitchen() {
  // receive context data
  const { data, _logout } = useContext(WaiterContext);

  //getting history prop
  const history = useHistory();

  // check if user is authorized
  if (!_checkUserAuth) return history.push("/login");

  return (
    <>
      {/* Navigation Bar*/}
      <header id="topnav">
        {/* Topbar Start */}
        <div className="navbar-custom">
          <div className="container-fluid">
            <ul className="list-unstyled topnav-menu float-right mb-0">
              <li className="dropdown notification-list">
                {/* Mobile menu toggle*/}
                <span className="navbar-toggle nav-link">
                  <div className="lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </span>
                {/* End mobile menu toggle*/}
              </li>
              <li className="dropdown notification-list">
                <span
                  className="nav-link dropdown-toggle nav-user mr-0"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <span>Welcome! </span>
                  <span className="pro-user-name ml-1">
                    Morgan K <i className="fa fa-user ml-1" />
                  </span>
                </span>
              </li>
              <li className="dropdown notification-list">
                <span
                  className="nav-link right-bar-toggle"
                  type="button"
                  role="button"
                  onClick={_logout}
                >
                  <i className="fa fa-unlock" />
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
                <span>Kegali Kitchen</span>
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
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Order Details</div>
                <div className="card-body" style={{ height: "70vh" }}>
                  <form>
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <div className="form-group mb-3">
                          <label htmlFor="emailaddress">Dish Name</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Rice and Soup"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <label htmlFor="emailaddress">Dish Quantity</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="X 2"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="form-group mb-3">
                          <label htmlFor="emailaddress">Ordered By</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Najatullahi"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <label htmlFor="emailaddress">Order Price</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=" GHC 30"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="form-group mb-3">
                          <label htmlFor="emailaddress">Parckage By</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Ayishatu"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <label htmlFor="emailaddress">Parckage Type</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Plate"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn btn-warning waves-effect waves-light mr-3 mt-5"
                    >
                      Cancel Order
                    </button>
                    <button
                      type="button"
                      class="btn btn-success waves-effect waves-light mt-5"
                    >
                      Confrim Order
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Order Que</div>
                <div
                  className="card-body"
                  style={{ height: "70vh", overflowY: "scroll" }}
                >
                  {/* map this entire div */}
                  <div className="row card-header" type="button" role="button">
                    <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                      Rice and Soup
                    </span>
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
    </>
  );
}

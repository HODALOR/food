import "../../css/main.css";
import { useHistory } from "react-router-dom";
import background from "../../components/img/dish1.jpg";
import OrderCart from "../../components/carts/orderCart";
import SelectItemComp from "../../components/select/itemSelect";
import socket from "../../libs/socket";
import { useEffect } from "react";

export default function Waiters(props) {
  useEffect(() => {
    socket.on("connection", () => true);
    socket.emit("waiters", "waiters_page");

    return () => {
      socket.emit("disconnect", "waiters_page");
    };
  });

  // history hook
  const history = useHistory();

  // got to login
  const _login = async () => {
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
                  onClick={_login}
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
              <OrderCart />
            </div>
            <div className="col-md-5">
              <SelectItemComp />
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

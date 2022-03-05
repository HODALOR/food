import "../../css/main.css";
import { useEffect, useState } from "react";
import PageTitle from "./../../components/pageTitle";
import Content from "../../components/contents";
import { salesData, menuData } from "../../libs/data/tableConfig";
import logout from "../../libs/functions/logout";
import { useHistory } from "react-router-dom";
import validateUser from "../../libs/functions/validateUser";

export default function Admin(props) {
  // create data state
  const [data, setData] = useState({
    title: "dashboard",
  });

  useEffect(() => {
    validateRoute();
  });

  // validate routing
  const validateRoute = async () => {
    const res = await validateUser();
    if (!res) history.push("/login");
  };

  // history hook
  const history = useHistory();

  // change title based on click
  const _changeTitle = (ttl) => {
    setData({
      ...data,
      title: ttl,
    });
  };

  // handle logout
  const _handleLogout = async () => {
    const res = await logout();
    if (res) history.push("/login");
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
                  onClick={_handleLogout}
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
                <span>Kegali</span>
              </li>
            </ul>
          </div>{" "}
          {/* end container-fluid*/}
        </div>
        {/* end Topbar */}

        <div className="topbar-menu">
          <div className="container-fluid">
            <div id="navigation">
              {/* Navigation Menu*/}
              <ul
                className="navigation-menu"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "20px",
                }}
              >
                <li
                  className={
                    data.title === "dashboard"
                      ? "has-submenu navbar-items-active"
                      : "has-submenu navbar-items"
                  }
                  type="button"
                  role="button"
                  onClick={() => _changeTitle("dashboard")}
                >
                  <span>
                    <i className="fa fa-home" /> Dashboard
                  </span>
                </li>
                <li
                  className={
                    data.title === "accounts"
                      ? "has-submenu navbar-items-active"
                      : "has-submenu navbar-items"
                  }
                  type="button"
                  role="button"
                  onClick={() => _changeTitle("accounts")}
                >
                  <span>
                    <i className="fa fa-money-check" /> Accounts
                  </span>
                </li>
                <li
                  className={
                    data.title === "dishes"
                      ? "has-submenu navbar-items-active"
                      : "has-submenu navbar-items"
                  }
                  type="button"
                  role="button"
                  onClick={() => _changeTitle("dishes")}
                >
                  <span>
                    <i className="fa fa-lemon" /> Dishes
                  </span>
                </li>
                <li
                  className={
                    data.title === "beverages"
                      ? "has-submenu navbar-items-active"
                      : "has-submenu navbar-items"
                  }
                  type="button"
                  role="button"
                  onClick={() => _changeTitle("beverages")}
                >
                  <span>
                    {" "}
                    <i className="fa fa-beer" /> Beverages
                  </span>
                </li>
                <li
                  className={
                    data.title === "drinks"
                      ? "has-submenu navbar-items-active"
                      : "has-submenu navbar-items"
                  }
                  type="button"
                  role="button"
                  onClick={() => _changeTitle("drinks")}
                >
                  <span>
                    {" "}
                    <i className="fa fa-wine-bottle" /> Drinks
                  </span>
                </li>
                <li
                  className={
                    data.title === "users"
                      ? "has-submenu navbar-items-active"
                      : "has-submenu navbar-items"
                  }
                  type="button"
                  role="button"
                  onClick={() => _changeTitle("users")}
                >
                  <span>
                    {" "}
                    <i className="fa fa-users" /> Personel
                  </span>
                </li>
              </ul>
              {/* End navigation menu */}
              <div className="clearfix" />
            </div>
            {/* end #navigation */}
          </div>
          {/* end container */}
        </div>
        {/* end navbar-custom */}
      </header>
      {/* End Navigation Bar*/}
      {/* ============================================================== */}
      {/* Start Page Content here */}
      {/* ============================================================== */}
      <div className="wrapper">
        <div className="container-fluid">
          {/* start page title */}
          <div className="row">
            <div className="col-12">
              <PageTitle title={data.title} />
            </div>
          </div>
          {/* end page title */}
          <Content title={data.title} data={salesData} menu={menuData} />
        </div>{" "}
        {/* end container-fluid */}
      </div>
      {/* end wrapper */}
      {/* ============================================================== */}
      {/* End Page content */}
    </div>
  );
}

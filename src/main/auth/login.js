import React, { useState } from "react";
import "./login.css";

// importing db files
const { remote } = require("electron");
const usersInstance = remote.getGlobal("userStore");

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState(false);

  const _handleLogin = () => {
    if (userName === "" || password === "") {
      alert("Please both fileds are required!");
      return false;
    } else if (password.length < 6) {
      alert("Please password is too short!");
      return false;
    } else {
      usersInstance.readUser(userName).then((user) => {
        if (user === null) {
          alert("User does not exist, please check user name or password");
          return false;
        } else {
          props.data(user);
          props.history.push("/main");
          setPassword("");
          setUserName("");
        }
      });
    }
  };

  const _handleLoginAdmin = () => {
    if (password === "") {
      alert("Password cannot be empty");
      return false;
    } else if (password.length < 6) {
      alert("Password is too short!");
      return false;
    } else {
      usersInstance.readAdmin(password).then((admin) => {
        if (admin === null) {
          alert("Admin does not exist, check password!");
          return false;
        } else {
          if (admin.role !== "Admin") {
            alert("You are not authorized to view this page!");
            return false;
          } else {
            props.history.push("/Accounts");
          }
        }
      });
    }
  };

  const Accounts = () => {
    setLoginType(!loginType);
  };

  if (loginType) {
    return (
      <div id="login">
        <div className="login-container">
          <div>
            <div className="login-card-top">
              <h2 style={{ backgroudColor: "orange", color: "black" }}>
                FoodApp
              </h2>
              <i
                className="fa fa-users  account__icon"
                type="button"
                role="button"
                onClick={() => Accounts()}
              ></i>
            </div>

            <div>
              <img
                src="/assets/logo1.png"
                style={{ width: "8rem", height: "6rem" }}
              />
            </div>
            <form className="my-form">
              <p>
                <label>Password</label>
                <input
                  className="input-field"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
              <p>
                <button
                  type="button"
                  role="button"
                  className="loginbtn"
                  onClick={() => _handleLoginAdmin()}
                  type="button"
                  style={{
                    width: "90%",
                    height: "3rem",
                    marginTop: "2rem",
                    border: "none",
                    borderRadius: ".5rem",
                  }}
                >
                  Admin Login
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      // <div>
      <div id="login">
        <div className="login-container">
          <div>
            <div className="login-card-top">
              <h2 style={{ backgroudColor: "orange", color: "black" }}>
                FoodApp
              </h2>
              <i
                className="fa fa-lock  account__icon"
                type="button"
                role="button"
                onClick={() => Accounts()}
              ></i>
            </div>

            <div>
              <img
                src="/assets/logo1.png"
                style={{ width: "8rem", height: "6rem" }}
              />
            </div>
            <form className="my-form">
              <p>
                <label>User Name</label>
                <input
                  className="input-field"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </p>
              <p>
                <label>Password</label>
                <input
                  className="input-field"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
              <p>
                <button
                  type="button"
                  role="button"
                  className="loginbtn"
                  onClick={() => _handleLogin()}
                  type="button"
                  style={{
                    width: "90%",
                    height: "3rem",
                    marginTop: "2rem",
                    border: "none",
                    borderRadius: ".5rem",
                  }}
                >
                  Login
                </button>
                {/* <label>Email</label> */}
              </p>
            </form>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
export default Login;

import React, { useState } from "react";
import "./login.css";
import logo from "./kegali_white.jpg";

// importing db files
const { remote } = require("electron");
const usersInstance = remote.getGlobal("userStore");

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState(false);
  const [errMess, setErr] = useState("");

  const _handleLogin = () => {
    if (userName === "" || password === "") {
      setErr("Please both fileds are required!");
      setTimeout(() => {
        setErr("");
      }, 3000);
      return false;
    } else if (password.length < 6) {
      setErr("Please password is too short!");
      setTimeout(() => {
        setErr("");
      }, 3000);
      return false;
    } else {
      usersInstance.readUser(userName).then(user => {
        if (user === null) {
          setErr("User does not exist, please check user name or password!");
          setTimeout(() => {
            setErr("");
          }, 3000);
          return false;
        } else {
          localStorage.setItem("user", JSON.stringify(user));
          props.history.push("/main");
          setPassword("");
          setUserName("");
        }
      });
    }
  };

  const _handleLoginAdmin = () => {
    if (password === "") {
      setErr("Password cannot be empty!");
      setTimeout(() => {
        setErr("");
      }, 3000);
      return false;
    } else if (password.length < 6) {
      setErr("Password is too short!");
      setTimeout(() => {
        setErr("");
      }, 3000);
      return false;
    } else {
      usersInstance.readAdmin(password).then(admin => {
        if (admin === null) {
          setErr("Admin does not exist, check password!");
          setTimeout(() => {
            setErr("");
          }, 3000);
          return false;
        } else {
          if (admin.role !== "Admin") {
            setErr("You are not authorized to view this page!");
            setTimeout(() => {
              setErr("");
            }, 3000);
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
                src={logo}
                style={{ width: "60px", height: "60px", marginTop: "3px" }}
              />
            </div>
            {errMess === "" ? (
              ""
            ) : (
              <div className="log-err-mess">{errMess}</div>
            )}
            <form className="my-form">
              <p>
                <label>Password</label>
                <input
                  className="input-field"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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
                    borderRadius: ".5rem"
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
                src={logo}
                style={{ width: "60px", height: "60px", marginTop: "3px" }}
              />
            </div>
            {errMess === "" ? (
              ""
            ) : (
              <div className="log-err-mess">{errMess}</div>
            )}
            <form className="my-form">
              <p>
                <label>User Name</label>
                <input
                  className="input-field"
                  type="text"
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                />
              </p>
              <p>
                <label>Password</label>
                <input
                  className="input-field"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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
                    borderRadius: ".5rem"
                  }}
                >
                  Login
                </button>
                {/* <label>Email</label> */}
              </p>
            </form>
            <span>
              <a href="https://codelabfirm.netlify.app">Powered by Code Lab</a>
            </span>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
export default Login;

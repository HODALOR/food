import React, { useState } from "react";
import "./login.css";

// importing db files
const { remote } = require("electron");
const usersInstance = remote.getGlobal("usersStore");

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const _handleLogin = () => {
    if (userName === "" || password === "") {
      alert("Please both fileds are required!");
      return false;
    } else if (password.length < 6) {
      alert("Please password is too short!");
      return false;
    } else {
      // usersInstance.read(userName).then((user) => {
      //   if (user === null) {
      //     alert("User does not exist, please check user name or password");
      //     return false;
      //   } else {
      //     props.data(user);
      //     props.history.push("/main");
      //     setPassword("");
      //     setUserName("");
      //   }
      // });
      props.history.push("/main");
    }
  };
  const Accounts = () => {
    props.history.push("/Accounts");
  };

  return (
    // <div>
    <div id="login">
      <div
        className="w3-container "
        style={{
          width: "32%",
          backgroundColor: "white",
          borderRadius: "1rem",
          boxShadow: "0px 10px 50px",
        }}
      >
        <div>
          <div
            className="container  "
            style={{
              backgroudColor: "orange",
              borderBottom: "2px solid orange",
            }}
          >
            <i
            
              className="fa fa-unlock-alt  account__icon"
              style={{
                float: "right",
                paddingRight: "2rem",
                fontSize: "1.5rem",
              }}
              type="button"
              role="button"
              
              onClick={Accounts}
            ></i>

            <h2 style={{ backgroudColor: "orange", color:"black" }}>FoodApp</h2>
          </div>

          <div>
            <img
              src="/assets/logo1.png"
              style={{ width: "8rem", height: "6rem" }}
            />
          </div>
          <form
            className="w3-container "
            style={{ marginTop: "10%" }}
            //   style={{ marginLeft: "30%", marginRight: "30%" }}
          >
            <p>
              <label style={{ float: "left", paddingLeft: "1rem" }}>
                User Name
              </label>
              <input
                className="w3-input"
                type="text"
                value={userName}
                style={{
                  width: "90%",
                  height: "3rem",
                  border: "none",
                  borderBottom: "1px solid orange",
                }}
                onChange={(e) => setUserName(e.target.value)}
              />
            </p>
            <p>
              <label style={{ float: "left", paddingLeft: "1rem" }}>
                Password
              </label>
              <input
                className="w3-input"
                type="password"
                value={password}
                style={{
                  width: "90%",
                  height: "3rem",
                  border: "none",
                  borderBottom: "1px solid orange",
                }}
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
export default Login;

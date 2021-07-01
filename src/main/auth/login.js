import React from "react";
import "./login.css";

function Login(props) {
  const Loged = () => {
    props.history.push("/main");
  };

  return (
    // <div>
    <div  id="login"  >
      <div
        className="w3-container w3-card w3-round-medium w3-white "
        style={{width:"32%" }}
      >
        <div classname="w3-card w3-yellow " style={{ backgroudColor: "red", }}>
          <div 
            className="w3-container w3-orange  "
            //   style={{ marginLeft: "31%", marginRight: "31%", marginTop: "10%" }}
          >
            <h2>FoodApp</h2>
          </div>
          <div>
            <img
              src="/assets/logo1.png"
              style={{ width: "8rem", height: "8rem" }}
            />
          </div>
          <form
            className="w3-container " style={{ marginTop: "10%"}}
            //   style={{ marginLeft: "30%", marginRight: "30%" }}
          >
            <p>
              <label style={{ float: "left" }}>User Name</label>
              <input className="w3-input" type="text" />
            </p>
            <p>
              <label style={{ float: "left" }}>Password</label>
              <input className="w3-input" type="text" />
            </p>
            <p>
              <button
                onClick={Loged}
                type="button"
                style={{ width: "100%", height: "3rem", marginTop: "2rem" }}
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

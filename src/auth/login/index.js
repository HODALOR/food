import "../../css/main.css";
import background from "../../components/img/bg0.jpg";
import login from "../../libs/functions/_handleLogin";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Login(props) {
  // state hooks
  const [data, setData] = useState({
    email: "",
    password: "",
    terminal: "",
  });

  // history hook
  const history = useHistory();

  // handle login function
  const _handleLogin = async () => {
    const val = await login();
    if (val) {
      if (data.terminal === "ADMINISTRATOR") return history.push("/admin");
      if (data.terminal === "KITCHEN") return history.push("/kitchen");
      if (data.terminal === "BAR") return history.push("/bar");
      // if (data.terminal === "WAITER") return history.push("food-order");
    }
  };

  return (
    <div className="login-bg" style={{ backgroundImage: `url(${background})` }}>
      <div className="account-pages">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto">
                    <span>
                      <span>
                        <img
                          src="assets/img/kegali.png"
                          alt="logo"
                          height={50}
                          width={50}
                          style={{
                            borderRadius: 40,
                            borderWidth: ".7px",
                            borderColor: "#6e7994",
                            border: "solid",
                          }}
                        />
                      </span>
                    </span>
                    <p className="text-muted mb-4 mt-3">
                      Enter your email address and password to access the
                      terminal.
                    </p>
                  </div>
                  <form>
                    <div className="form-group mb-3">
                      <label htmlFor="emailaddress">Email address</label>
                      <input
                        className="form-control"
                        type="email"
                        id="emailaddress"
                        required
                        placeholder="Enter your email"
                        onChange={(e) =>
                          setData({
                            ...data,
                            email: e.target.value.toUpperCase(),
                          })
                        }
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        required
                        id="password"
                        placeholder="Enter your password"
                        onChange={(e) =>
                          setData({ ...data, password: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="emailaddress">Select terminal</label>
                      <select
                        className="form-control"
                        type="select"
                        required
                        onChange={(e) =>
                          setData({ ...data, terminal: e.target.value })
                        }
                      >
                        <option value="">Select a Terminal</option>
                        <option value="ADMINISTRATOR">ADMINISTRATION</option>
                        <option value="KITCHEN">KITCHEN</option>
                        <option value="BAR">BAR</option>
                        {/* <option value="WAITER">WAITER</option> */}
                      </select>
                    </div>
                    <div className="form-group mb-0 text-center">
                      <button
                        className="btn btn-primary btn-block"
                        type="button"
                        onClick={_handleLogin}
                      >
                        {" "}
                        Log In{" "}
                      </button>
                    </div>
                  </form>
                </div>{" "}
                {/* end card-body */}
              </div>
              {/* end card */}
              {/* end row */}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end page */}
    </div>
  );
}

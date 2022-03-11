import { useContext } from "react";
import "../../css/main.css";
import background from "../../components/img/bg0.jpg";
import { WaiterContext } from "../../libs/contexts/waitersContext";

export default function Login() {
  const {
    authData,
    _emailInPut,
    _passwordInput,
    _terminalInput,
    _handleLogin,
  } = useContext(WaiterContext);

  return (
    <div className="login-bg" style={{ backgroundImage: `url(${background})` }}>
      <div className="account-pages">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card">
                <span
                  style={{
                    color: "orangered",
                    fontSize: "12px",
                    marginTop: "3px",
                    textAlign: "center",
                  }}
                >
                  {authData.authErrMsg}
                </span>
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
                        value={authData.email}
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) => _emailInPut(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        required
                        value={authData.password}
                        id="password"
                        placeholder="Enter your password"
                        onChange={(e) => _passwordInput(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="emailaddress">Select terminal</label>
                      <select
                        className="form-control"
                        type="select"
                        required
                        onChange={(e) => _terminalInput(e.target.value)}
                      >
                        <option value="">Select a Terminal</option>
                        <option value="ADMINISTRATOR">ADMINISTRATION</option>
                        <option value="KITCHEN">KITCHEN</option>
                        <option value="BAR">BAR</option>
                      </select>
                    </div>
                    <div className="form-group mb-0 text-center">
                      <button
                        className="btn btn-primary btn-block"
                        type="button"
                        onClick={() => _handleLogin()}
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

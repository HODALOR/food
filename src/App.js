import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./main/app/main";
import Login from "./main/auth/login";
import Users from "./main/app/users";
import { useEffect, useState } from "react";

// importing db files
const { remote } = require("electron");
const dishesInstance = remote.getGlobal("disheStore");
const usersInstance = remote.getGlobal("usersStore");

function App(props) {
  const [allDishes, setDishes] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getDishes();
  }, []);

  const getDishes = () => {
    dishesInstance.readAll().then((res) => {
      if (res) {
        setDishes(res);
      }
    });
  };

  const _handleLogin = (data) => {
    if (data.userName === "" || data.password === "") {
      alert("Please both fileds are required!");
      return false;
    } else if (data.password.length < 6) {
      alert("Please password is too short!");
      return false;
    } else {
      usersInstance.read(data.userName).then((user) => {
        if (user === null) {
          alert("User does not exist, please check user name or password");
          return false;
        } else {
          setCurrentUser(user);
          props.history.push("/main");
        }
      });
    }
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Login {...props} onLogin={_handleLogin} />}
          />
          <Route
            path="/main"
            render={(props) => (
              <Main {...props} dishes={allDishes} user={currentUser} />
            )}
          />
          <Route path="/Accounts" component={Users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

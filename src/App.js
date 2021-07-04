import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./main/app/main";
import Login from "./main/auth/login";
import Users from "./main/app/users";
import { useEffect, useState } from "react";

// importing db files
const { remote } = require("electron");
const dishesInstance = remote.getGlobal("disheStore");

function App() {
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
    setCurrentUser(data)
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Login {...props} data={_handleLogin} />}
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

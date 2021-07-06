import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./main/app/main";
import Login from "./main/auth/login";
import Users from "./main/app/users";
import Sales from "./main/app/sales";
import Dishes from "./main/app/dishes";

// importing db files
const { remote } = require("electron");
const dishesInstance = remote.getGlobal("dishStore");
const usersDbInstance = remote.getGlobal("userStore");
const salesDbInstance = remote.getGlobal("salesStore");

function App() {
  const [allDishes, setDishes] = useState([]);
  const [users, setUsers] = useState([]);
  const [sales, setSales] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getDishes();
    getUsers();
    getSales();
  }, []);

  const getSales = () => {
    salesDbInstance.readAll().then((res) => {
      if (res) {
        setSales(res);
      }
    });
  };

  const getDishes = () => {
    dishesInstance.readAll().then((res) => {
      if (res) {
        setDishes(res);
      }
    });
  };

  const getUsers = () => {
    usersDbInstance.readAll().then((res) => {
      if (res) {
        setUsers(res);
      }
    });
  };

  const _handleLogin = (data) => {
    setCurrentUser(data);
  };

  const _handleAddUser = (data) => {
    usersDbInstance.create(data);
    getUsers();
  };

  const _deleteUser = (id) => {
    usersDbInstance.removeUser(id);
    getUsers();
  };

  const _editUser = (data) => {
    usersDbInstance.updateUser(data).then((res) => {
      if (res === 1) {
        getUsers();
      }
    });
  };

  const _handleAddDish = (data) => {
    dishesInstance.create(data);
    getDishes();
  };
  const _handleDelDish = (id) => {
    dishesInstance.removeDish(id);
    getDishes();
  };
  const _handleEditDish = (data) => {
    dishesInstance.updateDish(data).then((res) => {
      if (res === 1) {
        getDishes();
      }
    });
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
          <Route
            path="/Accounts"
            render={(props) => (
              <Users
                {...props}
                addUser={_handleAddUser}
                users={users}
                onDelete={_deleteUser}
                onEdit={_editUser}
              />
            )}
          />
          <Route
            path="/Sales"
            render={(props) => <Sales {...props} sales={sales} />}
          />
          <Route
            path="/Dishes"
            render={(props) => (
              <Dishes
                {...props}
                dishes={allDishes}
                addDish={_handleAddDish}
                onDelete={_handleDelDish}
                onEdit={_handleEditDish}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

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
const salesDbInstance = remote.getGlobal("saleStore");

function App() {
  const [allDishes, setDishes] = useState([]);
  const [users, setUsers] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    getDishes();
    getUsers();
    getSales();
  }, []);

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

  const getSales = () => {
    salesDbInstance.readAll().then((res) => {
      if (res) {
        setSales(res);
      }
    });
  };

  const _handleAddUser = (data) => {
    const newUser = users.find((user) => user.password === data.password);
    if (newUser === null || newUser === undefined) {
      usersDbInstance.create(data);
      getUsers();
    } else {
      alert(
        "The password you are trying to useis alredy take, please choose another one!"
      );
      return false;
    }
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

  const _saveSale = async (cart) => {
    const userData = localStorage.getItem("user");
    const user = await JSON.parse(userData);
    cart.forEach((dish) => {
      let data = {
        food: dish.dishName,
        price: JSON.stringify(parseInt(dish.price) * parseInt(dish.quantity)),
        quantity: dish.quantity,
        date: new Date().toLocaleString(),
        userName: user.userName,
      };
      salesDbInstance.create(data);
      getSales();
    });
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} />} />
          <Route
            path="/main"
            render={(props) => (
              <Main {...props} dishes={allDishes} onAdd={_saveSale} />
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

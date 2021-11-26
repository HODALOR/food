import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
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
const beverageDbInstance = remote.getGlobal("beverageStore");
const liqureStoreDbInstance = remote.getGlobal("liqureStore");

function App() {
  const [allDishes, setDishes] = useState([]);
  const [users, setUsers] = useState([]);
  const [sales, setSales] = useState([]);
  const [liquor, setLiquor] = useState([]);
  const [beverage, setBeverage] = useState([]);

  useEffect(() => {
    getDishes();
    getUsers();
    getSales();
    getBeverages();
    getLiquor();
  }, []);

  const getDishes = () => {
    dishesInstance.readAll().then(res => {
      if (res) {
        setDishes(res);
      }
    });
  };

  const getBeverages = () => {
    beverageDbInstance.readAll().then(res => {
      if (res) {
        setBeverage(res);
      }
    });
  };

  const getLiquor = () => {
    liqureStoreDbInstance.readAll().then(res => {
      if (res) {
        setLiquor(res);
      }
    });
  };

  const getUsers = () => {
    usersDbInstance.readAll().then(res => {
      if (res) {
        setUsers(res);
      }
    });
  };

  const getSales = () => {
    salesDbInstance.readAll().then(res => {
      if (res) {
        setSales(res);
      }
    });
  };

  const _handleAddUser = data => {
    usersDbInstance.create(data);
    getUsers();
  };

  const _deleteUser = id => {
    usersDbInstance.removeUser(id);
    getUsers();
  };

  const _editUser = data => {
    usersDbInstance.updateUser(data).then(res => {
      if (res === 1) {
        getUsers();
      }
    });
  };

  const _handleAddDish = data => {
    if (data.type === "add-dish") {
      const itemData = {
        dishName: data.dishName,
        price: data.price
      };
      dishesInstance.create(itemData);
      getDishes();
    } else if (data.type === "add-liquor") {
      const itemData = {
        liqureName: data.dishName,
        price: data.price
      };
      liqureStoreDbInstance.create(itemData);
      getLiquor();
    } else {
      const itemData = {
        beverageName: data.dishName,
        price: data.price
      };
      beverageDbInstance.create(itemData);
      getBeverages();
    }
  };

  const _handleDelDish = data => {
    if (data.type === "delete-dish") {
      dishesInstance.removeDish(data._id);
      getDishes();
    } else if (data.type === "delete-liquor") {
      liqureStoreDbInstance.removeLiqure(data._id);
      getLiquor();
    } else {
      beverageDbInstance.removeBeverage(data._id);
      getBeverages();
    }
  };

  const _handleEditDish = details => {
    if (details.data.type === "edit-dish") {
      const _id = details._id;
      const data = {
        dishName: details.data.dishName,
        price: details.data.price
      };
      const dishData = {
        data,
        _id
      };

      dishesInstance.updateDish(dishData).then(res => {
        if (res === 1) {
          getDishes();
        }
      });
    } else if (details.data.type === "edit-liquor") {
      const _id = details._id;
      const data = {
        liqureName: details.data.dishName,
        price: details.data.price
      };
      const liqureData = {
        data,
        _id
      };

      liqureStoreDbInstance.updateLiqure(liqureData).then(res => {
        if (res === 1) {
          getLiquor();
        }
      });
    } else if (details.data.type === "edit-beverage") {
      const _id = details._id;
      const data = {
        beverageName: details.data.dishName,
        price: details.data.price
      };
      const beverageData = {
        data,
        _id
      };

      beverageDbInstance.updateBeverage(beverageData).then(res => {
        if (res === 1) {
          getBeverages();
        }
      });
    }
  };

  const _saveSale = async cart => {
    const userData = localStorage.getItem("user");
    const user = await JSON.parse(userData);

    cart.forEach(item => {
      let data = {
        item: item.dishName || item.liqureName || item.beverageName,
        price: JSON.stringify(parseInt(item.price) * parseInt(item.quantity)),
        quantity: item.quantity,
        date: new Date().toLocaleString(),
        userName: user.userName
      };
      salesDbInstance.create(data);
      getSales();
    });
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Login {...props} />} />
          <Route
            path="/main"
            render={props => (
              <Main
                {...props}
                dishes={allDishes}
                liquor={liquor}
                beverages={beverage}
                onAdd={_saveSale}
              />
            )}
          />
          <Route
            path="/Accounts"
            render={props => (
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
            render={props => <Sales {...props} sales={sales} />}
          />
          <Route
            path="/Dishes"
            render={props => (
              <Dishes
                {...props}
                dishes={allDishes}
                liquor={liquor}
                beverages={beverage}
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

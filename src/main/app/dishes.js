import { useState } from "react";
import "./main.css";
import Header from "./component/header";
import Tables from "./component/tables";
import Modals from "./component/modals";

function Dishes(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("add-dish");
  const [errMessage, setErrMessage] = useState("");
  const [row, setRow] = useState({});
  const [tableTitile, setTableTitle] = useState("dishes-table");
  const [tab1, setTab1] = useState("table-select-active");
  const [tab2, setTab2] = useState("table-select");
  const [tab3, setTab3] = useState("table-select");
  const toggleDish = check => {
    if (check === "add-dish") {
      setTitle(check);
      setIsOpen(!isOpen);
    } else if (check === "add-liquor") {
      setTitle(check);
      setIsOpen(!isOpen);
    } else if (check === "add-beverage") {
      setTitle(check);
      setIsOpen(!isOpen);
    } else if (check === "edit-dish") {
      setTitle("edit-dish");
      setIsOpen(!isOpen);
    } else if (check === "edit-liquor") {
      setTitle("edit-liquor");
      setIsOpen(!isOpen);
    } else if (check === "edit-beverage") {
      setTitle("edit-beverage");
      setIsOpen(!isOpen);
    }
  };
  const _handleAdd = data => {
    let { dishName, price, type } = data;
    if (dishName === "" || price === "") {
      setErrMessage("All Fields are required!");
      setTimeout(() => {
        setErrMessage("");
      }, 3000);
      return false;
    } else {
      const storeData = {
        dishName,
        price,
        type
      };
      props.addDish(storeData);
      toggleDish(type);
    }
  };
  const _handleRowClick = data => {
    if (data.hasOwnProperty("dishName")) {
      setRow(data);
      toggleDish("edit-dish");
    } else if (data.hasOwnProperty("beverageName")) {
      setRow(data);
      toggleDish("edit-beverage");
    } else {
      setRow(data);
      toggleDish("edit-liquor");
    }
  };
  const _delete = data => {
    props.onDelete(data);
    toggleDish("edit-dish");
  };
  const _handleEdit = data => {
    let { dishName, _id, price } = data;
    if (dishName === "" || _id === "" || price === "") {
      setErrMessage("All Fields are required!");
      setTimeout(() => {
        setErrMessage("");
      }, 3000);
      return false;
    } else {
      props.onEdit({ _id, data });
      toggleDish("edit-dish");
    }
  };

  const renderTable = () => {
    if (tableTitile === "dishes-table") {
      return (
        <Tables
          data={props.dishes}
          title={tableTitile}
          onRowClicked={_handleRowClick}
        />
      );
    } else if (tableTitile === "liquor-table") {
      return (
        <Tables
          data={props.liquor}
          title={tableTitile}
          onRowClicked={_handleRowClick}
        />
      );
    } else {
      return (
        <Tables
          data={props.beverages}
          title={tableTitile}
          onRowClicked={_handleRowClick}
        />
      );
    }
  };
  return (
    <div>
      <Header title="admin" />
      <div className="accounts">
        <div className="my-card">
          <div className="table-title">Menu Page</div>
          <div
            className={tab1}
            role="button"
            type="button"
            onClick={() => {
              setTab1("table-select-active");
              setTab2("table-select");
              setTab3("table-select");
              setTableTitle("dishes-table");
            }}
          >
            Dishes Table
          </div>
          <div
            className={tab2}
            role="button"
            type="button"
            onClick={() => {
              setTab1("table-select");
              setTab2("table-select-active");
              setTab3("table-select");
              setTableTitle("liquor-table");
            }}
          >
            Liquor Table
          </div>
          <div
            className={tab3}
            role="button"
            type="button"
            onClick={() => {
              setTab1("table-select");
              setTab2("table-select");
              setTab3("table-select-active");
              setTableTitle("beverages-table");
            }}
          >
            Beverages Table
          </div>
          <button
            className="btn btn-primary btn-sm create-btn"
            onClick={() => toggleDish("add-dish")}
          >
            Add Dish
          </button>
          <button
            className="btn btn-warning btn-sm create-btn"
            onClick={() => toggleDish("add-liquor")}
          >
            Add Liquor
          </button>
          <button
            className="btn btn-success btn-sm create-btn"
            onClick={() => toggleDish("add-beverage")}
          >
            Add Beverage
          </button>
          <div>
            <div className="my-card-body">{renderTable()}</div>
          </div>
          <Modals
            title={title}
            isOpen={isOpen}
            toggleDish={toggleDish}
            onAdd={_handleAdd}
            onEdit={_handleEdit}
            onErr={errMessage}
            onDelete={_delete}
            row={row}
          />
        </div>
      </div>
    </div>
  );
}

export default Dishes;

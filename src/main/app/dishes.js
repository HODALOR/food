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
  const toggleDish = (check) => {
    if (check === "add-dish") {
      setTitle(check);
      setIsOpen(!isOpen);
    } else {
      setTitle(check);
      setIsOpen(!isOpen);
    }
  };
  const _handleAdd = (data) => {
    let { dishName, price } = data;
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
      };
      props.addDish(storeData);
      toggleDish("add-dish");
    }
  };
  const _handleRowClick = (data) => {
    setRow(data);
    toggleDish("edit-dish");
  };
  const _delete = (id) => {
    props.onDelete(id);
    toggleDish("edit-dish");
  };
  const _handleEdit = (data) => {
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
  return (
    <div>
      <Header title="admin" />
      <div className="accounts">
        <div className="my-card">
          <div className="table-title">Dishes List</div>
          <button
            className="btn btn-primary btn-sm create-btn"
            onClick={() => toggleDish("add-dish")}
          >
            Add Dish
          </button>
          <div>
            <div className="my-card-body">
              <Tables
                data={props.dishes}
                title="dishes-table"
                onRowClicked={_handleRowClick}
              />
            </div>
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

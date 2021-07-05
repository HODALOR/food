import { useState } from "react";
import "./main.css";
import Header from "./component/header";
import Tables from "./component/tables";
import Modals from "./component/modals";

function Users(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("add-user");
  const [errMessage, setErrMessage] = useState("");
  const [row, setRow] = useState({});
  const toggleAddUser = (check) => {
    if (check === "add-user") {
      setTitle(check);
      setIsOpen(!isOpen);
    } else {
      setTitle(check);
      setIsOpen(!isOpen);
    }
  };
  const _handleAdd = (data) => {
    let { firstName, lastName, userName, password, repeatPass, role, phone } =
      data;
    if (
      firstName === "" ||
      lastName === "" ||
      userName === "" ||
      password === "" ||
      repeatPass === "" ||
      role === "" ||
      phone === ""
    ) {
      setErrMessage("All Fields are required!");
      setTimeout(() => {
        setErrMessage("");
      }, 3000);
      return false;
    } else if (password !== repeatPass) {
      setErrMessage("Passwords do not match!");
      setTimeout(() => {
        setErrMessage("");
      }, 3000);
      return false;
    } else if (password.length < 6) {
      setErrMessage("Password is too short!");
      setTimeout(() => {
        setErrMessage("");
      }, 3000);
      return false;
    } else if (phone.length < 10) {
      setErrMessage("Phone is wrong!");
      setTimeout(() => {
        setErrMessage("");
      }, 3000);
    } else {
      const storeData = {
        firstName,
        lastName,
        userName,
        password,
        role,
        phone,
      };
      props.addUser(storeData);
      toggleAddUser();
    }
  };
  const _handleRowClick = (data) => {
    setRow(data);
    toggleAddUser("edit-user");
  };
  const _delete = (id) => {
    props.onDelete(id);
    toggleAddUser("edit-user");
  };
  const _handleEdit = (data) => {
    let { firstName, lastName, userName, password, _id, role, phone } = data;
    if (
      firstName === "" ||
      lastName === "" ||
      userName === "" ||
      password === "" ||
      _id === "" ||
      role === "" ||
      phone === ""
    ) {
      setErrMessage("All Fields are required!");
      setTimeout(() => {
        setErrMessage("");
      }, 3000);
      return false;
    } else if (password.length < 6) {
      setErrMessage("Password is too short!");
      setTimeout(() => {
        setErrMessage("");
      }, 3000);
      return false;
    } else if (phone.length < 10) {
      setErrMessage("Phone is wrong!");
      setTimeout(() => {
        setErrMessage("");
      }, 3000);
    } else {
      props.onEdit({ _id, data });
      toggleAddUser("edit-user");
    }
  };
  return (
    <div>
      <Header title="admin" />
      <div className="accounts">
        <div className="my-card">
          <div className="table-title">Users List</div>
          <button
            className="btn btn-primary btn-sm create-btn"
            onClick={() => toggleAddUser("add-user")}
          >
            Add User
          </button>
          <Tables
            data={props.users}
            title="users-table"
            onRowClicked={_handleRowClick}
          />
          <Modals
            title={title}
            isOpen={isOpen}
            toggleUser={toggleAddUser}
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

export default Users;

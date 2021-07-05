import { useState } from "react";
import "./main.css";
import Header from "./component/header";
import Tables from "./component/tables";
import Modals from "./component/modals";

function Users(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const toggleAddUser = () => {
    setIsOpen(!isOpen);
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
  return (
    <div>
      <Header title="admin" />
      <div className="accounts">
        <div className="my-card">
          <div className="table-title">Users List</div>
          <button
            className="btn btn-primary btn-sm create-btn"
            onClick={() => toggleAddUser()}
          >
            Add User
          </button>
          <Tables data={props.users} />
          <Modals
            title="add-user"
            isOpen={isOpen}
            toggleUser={toggleAddUser}
            onAdd={_handleAdd}
            onErr={errMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default Users;

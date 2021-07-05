import "../main.css";
import "mdbreact/dist/css/mdb.css";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { useState } from "react";

export default function Modals(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepPass] = useState("");
  const [role, setRole] = useState("");
  const [err, setErr] = useState(false);

  const _handleAddUser = (check) => {
    if (check === "add") {
      const data = {
        firstName,
        lastName,
        userName,
        password,
        repeatPass,
        phone,
        role,
      };
      props.onAdd(data);
    } else {
      const data = {
        firstName,
        lastName,
        userName,
        password,
        phone,
        role,
        _id: props.row._id,
      };
      props.onEdit(data);
    }
  };

  const _handleDelete = (id) => {
    props.onDelete(id);
  };

  if (props.title === "add-user") {
    return (
      <MDBContainer>
        <MDBModal
          disableBackdrop
          isOpen={props.isOpen}
          toggle={props.toggleUser}
          size="lg"
        >
          <MDBModalHeader
            className="modal-title"
            toggle={() => props.toggleUser("add-user")}
          >
            {props.onErr === "" ? (
              <>ADD USER</>
            ) : (
              <div className="danger-mssg">{props.onErr}</div>
            )}
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="row">
                <div className="col-6">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Repeat Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setRepPass(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label>Select Role</label>
                  <select
                    className="form-control"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option>Select Role</option>
                    <option>Admin</option>
                    <option>Employee</option>
                  </select>
                </div>
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              className="btn btn-secondary btn-sm"
              onClick={() => props.toggleUser("add-user")}
            >
              Close
            </MDBBtn>
            <MDBBtn
              className="btn btn-primary btn-sm"
              onClick={() => _handleAddUser("add")}
            >
              Create User
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  } else if (props.title === "edit-user") {
    return (
      <MDBContainer>
        <MDBModal
          disableBackdrop
          isOpen={props.isOpen}
          toggle={props.toggleUser}
          size="lg"
        >
          <MDBModalHeader
            className="modal-title"
            toggle={() => props.toggleUser("edit-user")}
          >
            {props.onErr === "" ? (
              <>EDIT USER</>
            ) : (
              <div className="danger-mssg">{props.onErr}</div>
            )}
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="row">
                <div className="col-6">
                  <label>First Name: {props.row.firstName}</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Last Name: {props.row.lastName}</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>User Name: {props.row.userName}</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Phone: {props.row.phone}</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Password: {props.row.password}</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Select Role: {props.row.role}</label>
                  <select
                    className="form-control"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option>Select Role</option>
                    <option>Admin</option>
                    <option>Employee</option>
                  </select>
                </div>
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              className="btn btn-secondary btn-sm"
              onClick={() => props.toggleUser("edit-user")}
            >
              Close
            </MDBBtn>
            <MDBBtn
              className="btn btn-success btn-sm"
              onClick={() => _handleAddUser("edit")}
            >
              Save changes
            </MDBBtn>
            <MDBBtn
              className="btn btn-danger btn-sm"
              onClick={() => _handleDelete(props.row._id)}
            >
              Delete User
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

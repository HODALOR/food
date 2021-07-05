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

  const _handleAddUser = () => {
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
  };

  if (props.title === "add-user") {
    return (
      <MDBContainer>
        <MDBModal isOpen={props.isOpen} toggle={props.toggleUser} size="lg">
          <MDBModalHeader className="modal-title" toggle={props.toggleUser}>
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
              onClick={props.toggleUser}
            >
              Close
            </MDBBtn>
            <MDBBtn
              className="btn btn-primary btn-sm"
              onClick={() => _handleAddUser()}
            >
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

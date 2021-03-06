import "../main.css";
import "mdbreact/dist/css/mdb.css";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
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

  const _handleAddUser = check => {
    if (check === "add") {
      const data = {
        firstName,
        lastName,
        userName,
        password,
        repeatPass,
        phone,
        role
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
        _id: props.row._id
      };
      props.onEdit(data);
    }
  };

  const _handleAddDish = check => {
    if (check === "add-dish") {
      const data = {
        dishName: firstName,
        price: phone,
        type: check
      };
      props.onAdd(data);
    } else if (check === "add-liquor") {
      const data = {
        dishName: firstName,
        price: phone,
        type: check
      };
      props.onAdd(data);
    } else if (check === "add-beverage") {
      const data = {
        dishName: firstName,
        price: phone,
        type: check
      };
      props.onAdd(data);
    } else {
      const data = {
        dishName: firstName,
        price: phone,
        _id: props.row._id,
        type: check
      };
      props.onEdit(data);
    }
  };

  const _handleDelete = data => {
    props.onDelete(data);
  };

  const _dishPrice = dish => {
    const price = parseInt(dish.price) * parseInt(dish.quantity);
    return price;
  };

  const _totalQuantity = data => {
    let qt = 0;
    data.forEach(dish => {
      qt += parseInt(dish.quantity);
    });
    return qt;
  };

  const _totalPrice = data => {
    let tprice = 0;
    data.forEach(dish => {
      let price = parseInt(dish.price) * parseInt(dish.quantity);
      tprice += price;
    });
    return tprice;
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
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setLastName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setUserName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Repeat Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={e => setRepPass(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label>Select Role</label>
                  <select
                    className="form-control"
                    onChange={e => setRole(e.target.value)}
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
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Last Name: {props.row.lastName}</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setLastName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>User Name: {props.row.userName}</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setUserName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Phone: {props.row.phone}</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Password: {props.row.password}</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Select Role: {props.row.role}</label>
                  <select
                    className="form-control"
                    onChange={e => setRole(e.target.value)}
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
  } else if (props.title === "add-dish") {
    return (
      <MDBContainer>
        <MDBModal
          disableBackdrop
          isOpen={props.isOpen}
          toggle={props.toggleDish}
          size="lg"
        >
          <MDBModalHeader
            className="modal-title"
            toggle={() => props.toggleDish("add-dish")}
          >
            {props.onErr === "" ? (
              <>ADD DISH</>
            ) : (
              <div className="danger-mssg">{props.onErr}</div>
            )}
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="row">
                <div className="col-6">
                  <label>Dish Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              className="btn btn-secondary btn-sm"
              onClick={() => props.toggleDish("add-dish")}
            >
              Close
            </MDBBtn>
            <MDBBtn
              className="btn btn-success btn-sm"
              onClick={() => _handleAddDish("add-dish")}
            >
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  } else if (
    props.title === "edit-dish" ||
    props.title === "edit-liquor" ||
    props.title === "edit-beverage"
  ) {
    return (
      <MDBContainer>
        <MDBModal
          disableBackdrop
          isOpen={props.isOpen}
          toggle={props.toggleDish}
          size="lg"
        >
          <MDBModalHeader
            className="modal-title"
            toggle={() => props.toggleDish("edit-dish")}
          >
            {props.onErr === "" ? (
              <>EDIT SELECTION</>
            ) : (
              <div className="danger-mssg">{props.onErr}</div>
            )}
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="row">
                <div className="col-6">
                  <label>
                    Name:{" "}
                    {props.row.dishName ||
                      props.row.liqureName ||
                      props.row.beverageName}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Price: {props.row.price}</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              className="btn btn-secondary btn-sm"
              onClick={() => props.toggleDish("edit-dish")}
            >
              Close
            </MDBBtn>
            <MDBBtn
              className="btn btn-success btn-sm"
              onClick={() => {
                if (props.title === "edit-dish") {
                  _handleAddDish("edit-dish");
                } else if (props.title === "edit-beverage") {
                  _handleAddDish("edit-beverage");
                } else {
                  _handleAddDish("edit-liquor");
                }
              }}
            >
              Save changes
            </MDBBtn>
            <MDBBtn
              className="btn btn-success btn-sm"
              onClick={() => {
                if (props.title === "edit-dish") {
                  const data = {
                    _id: props.row._id,
                    type: "delete-dish"
                  };
                  _handleDelete(data);
                } else if (props.title === "edit-beverage") {
                  const data = {
                    _id: props.row._id,
                    type: "delete-beverage"
                  };
                  _handleDelete(data);
                } else {
                  const data = {
                    _id: props.row._id,
                    type: "delete-liquor"
                  };
                  _handleDelete(data);
                }
              }}
            >
              Delete Item
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  } else if (props.title === "cart-modal") {
    return (
      <MDBContainer>
        <MDBModal
          disableBackdrop
          isOpen={props.isOpen}
          toggle={props.toggleModal}
          size="lg"
          centered
        >
          <MDBModalHeader
            className="modal-title"
            toggle={() => props.toggleModal()}
          >
            CART
          </MDBModalHeader>
          <MDBModalBody>
            <div className="car-header">
              <div className="cart-name">Item Name</div>
              <div className="cart-number">Number Of Parcks</div>
              <div className="cart-price">Price(GHC)</div>
              <div className="cart-remove-h">Remove</div>
            </div>
            {props.data.map(item => {
              return (
                <div className="cart-body">
                  <div className="cart-name">
                    {item.dishName || item.liqureName || item.beverageName}
                  </div>
                  <div className="cart-number">{item.quantity}</div>
                  <div className="cart-price">{_dishPrice(item)}</div>
                  <div
                    className="cart-remove"
                    type="button"
                    role="button"
                    onClick={() => props.onRemove(item._id)}
                  >
                    <i className="fa fa-trash-alt"></i>
                  </div>
                </div>
              );
            })}
            <div className="cart-body">
              <div className="cart-total">Totals</div>
              <div className="cart-number-t">{_totalQuantity(props.data)}</div>
              <div className="cart-price-t">{_totalPrice(props.data)}</div>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              className="btn btn-secondary btn-sm"
              onClick={() => props.toggleModal()}
            >
              Close
            </MDBBtn>
            <MDBBtn
              className="btn btn-success btn-sm"
              onClick={() => props.onBuy()}
              style={{ paddding: "2rem", backgroupColor: "red" }}
            >
              Buy
            </MDBBtn>
            <MDBBtn
              className="btn btn-success btn-sm"
              onClick={() => props.onClear()}
            >
              Clear Cart
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  } else if (props.title === "add-liquor") {
    return (
      <MDBContainer>
        <MDBModal
          disableBackdrop
          isOpen={props.isOpen}
          toggle={props.toggleDish}
          size="lg"
        >
          <MDBModalHeader
            className="modal-title"
            toggle={() => props.toggleDish("add-liquor")}
          >
            {props.onErr === "" ? (
              <>ADD LIQUOR</>
            ) : (
              <div className="danger-mssg">{props.onErr}</div>
            )}
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="row">
                <div className="col-6">
                  <label>Liquor Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              className="btn btn-secondary btn-sm"
              onClick={() => props.toggleDish("add-liquor")}
            >
              Close
            </MDBBtn>
            <MDBBtn
              className="btn btn-success btn-sm"
              onClick={() => _handleAddDish("add-liquor")}
            >
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  } else if (props.title === "add-beverage") {
    return (
      <MDBContainer>
        <MDBModal
          disableBackdrop
          isOpen={props.isOpen}
          toggle={props.toggleDish}
          size="lg"
        >
          <MDBModalHeader
            className="modal-title"
            toggle={() => props.toggleDish("add-beverage")}
          >
            {props.onErr === "" ? (
              <>ADD BEVERAGE</>
            ) : (
              <div className="danger-mssg">{props.onErr}</div>
            )}
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="row">
                <div className="col-6">
                  <label>Beverage Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              className="btn btn-secondary btn-sm"
              onClick={() => props.toggleDish("add-beverage")}
            >
              Close
            </MDBBtn>
            <MDBBtn
              className="btn btn-success btn-sm"
              onClick={() => _handleAddDish("add-beverage")}
            >
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

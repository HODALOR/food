import "mdbreact/dist/css/mdb.css";
import { useState } from "react";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

export default function Modals(props) {
  const [data, setData] = useState({
    view: false,
    role: "",
  });

  // recieving props
  const { title, isOpen } = props;

  if (title === "dishes") {
    return (
      <MDBContainer>
        <MDBModal
          disableBackdrop
          isOpen={isOpen}
          toggle={props.onToggle}
          size="md"
        >
          <MDBModalHeader className="modal-title" toggle={props.onToggle}>
            Add New Dish To Menu
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="emailaddress">Enter Dish Name</label>
                <input
                  className="form-control"
                  type="text"
                  required
                  placeholder="Enter dish name"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="emailaddress">Enter Dish Price</label>
                <input
                  className="form-control"
                  type="number"
                  required
                  placeholder="Enter dish price"
                />
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              className="btn btn-secondary btn-sm"
              onClick={props.onToggle}
            >
              Close
            </MDBBtn>
            <MDBBtn className="btn btn-primary btn-sm">Create Dish</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }

  if (title === "beverages") {
    return (
      <MDBContainer>
        <MDBModal
          disableBackdrop
          isOpen={isOpen}
          toggle={props.onToggle}
          size="md"
        >
          <MDBModalHeader className="modal-title" toggle={props.onToggle}>
            Add New Beverage To Menu
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="emailaddress">Enter Beverage Name</label>
                <input
                  className="form-control"
                  type="text"
                  required
                  placeholder="Enter beverage name"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="emailaddress">Enter Beverage Price</label>
                <input
                  className="form-control"
                  type="number"
                  required
                  placeholder="Enter beverage price"
                />
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              className="btn btn-secondary btn-sm"
              onClick={props.onToggle}
            >
              Close
            </MDBBtn>
            <MDBBtn className="btn btn-primary btn-sm">Create Bevevrage</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }

  if (title === "drinks") {
    return (
      <MDBContainer>
        <MDBModal
          disableBackdrop
          isOpen={isOpen}
          toggle={props.onToggle}
          size="md"
        >
          <MDBModalHeader className="modal-title" toggle={props.onToggle}>
            Add Drink To Menu
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="emailaddress">Enter Drink Name</label>
                <input
                  className="form-control"
                  type="text"
                  required
                  placeholder="Enter drink name"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="emailaddress">Enter Drink Price</label>
                <input
                  className="form-control"
                  type="number"
                  required
                  placeholder="Enter price"
                />
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              className="btn btn-secondary btn-sm"
              onClick={props.onToggle}
            >
              Close
            </MDBBtn>
            <MDBBtn className="btn btn-primary btn-sm">Save Drink</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }

  if (title === "users") {
    return (
      <MDBContainer>
        <MDBModal
          disableBackdrop
          isOpen={isOpen}
          toggle={props.onToggle}
          size="md"
          centered
        >
          <MDBModalHeader className="modal-title" toggle={props.onToggle}>
            Add New Personel
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="emailaddress">Enter First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      required
                      placeholder="Enter first name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="emailaddress">Enter Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      required
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="emailaddress">Enter Phone</label>
                    <input
                      className="form-control"
                      type="telephone"
                      required
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="emailaddress">Select Role</label>
                    <select
                      className="form-control"
                      type="select"
                      required
                      onChange={(e) =>
                        setData({ ...data, role: e.target.value.toUpperCase() })
                      }
                    >
                      <option value="">Choose Role</option>
                      <option value="ADMINISTRATOR">ADMINISTRATOR</option>
                      <option value="KITCHEN">KITCHEN PERSONEL</option>
                      <option value="BAR">BAR TENDER</option>
                      <option value="WAITER">WAITER</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="emailaddress">Enter Email</label>
                    <input
                      className="form-control"
                      type="email"
                      required
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="emailaddress">Enter password</label>
                    <input
                      className="form-control"
                      type={data.view ? "text" : "password"}
                      required
                      placeholder="Enter password"
                    />
                    <input
                      type="checkbox"
                      className="mr-1 mt-1"
                      onChange={() => setData({ ...data, view: !data.view })}
                    />
                    <span>View password</span>
                  </div>
                </div>
                {data.role === "WAITER" ? (
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="emailaddress">Enter Waiter Code</label>
                      <input
                        className="form-control"
                        type="number"
                        required
                        placeholder="Enter waiter code"
                      />
                      <small>please provide 4 digit code</small>
                    </div>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              className="btn btn-secondary btn-sm"
              onClick={props.onToggle}
            >
              Close
            </MDBBtn>
            <MDBBtn className="btn btn-primary btn-sm">Save Personel</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

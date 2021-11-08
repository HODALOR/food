import { useState } from "react";
import "./main.css";
import Header from "./component/header";
import Tables from "./component/tables";
import Modals from "./component/modals";

function Sales(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("sales-modal");
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
  const _handleRowClick = (data) => {
    setRow(data);
    toggleDish("edit-dish");
  };
  return (
    <div>
      <Header title="admin" />
      <div className="accounts">
        <div className="my-card">
          <div className="table-title">Sales List</div>
          <div>
            <div className="my-card-body">
              <Tables
                data={props.sales}
                title="sales-table"
                onRowClicked={_handleRowClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;

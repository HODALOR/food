import Modals from "../../../components/modals";
import Tables from "../../../components/tables";
import AddButton from "./../../../components/buttons/button";
import { useState } from "react";

export default function Dishes(props) {
  // states
  const [data, setData] = useState({
    data: [],
    isOpen: false,
  });

  // recieving props
  const {title, menu} = props;

  // _handle toggle
  const _handleToggle = () => {
    setData({
      ...data,
      isOpen: !data.isOpen,
    });
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card">
            <div
              className="card-header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4 className="header-title">Dishes</h4>
              <div className="float-right">
                <AddButton title={title} onToggle={_handleToggle} />
              </div>
            </div>
            <div className="card-body">
              <Tables title={title} data={menu} />
            </div>
          </div>
        </div>
      </div>
      <Modals isOpen={data.isOpen} title={title} onToggle={_handleToggle} />
    </div>
  );
}

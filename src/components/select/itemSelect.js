import Select from "./select";

export default function SelectItemComp(props) {
  return (
    <div className="card">
      <div className="card-header">Item Select</div>
      <div
        className="card-body"
        style={{ height: "70vh", overflowY: "scroll" }}
      >
        <div className="mb-3">
          {/* dishes select */}
          <Select type="dishes" />
        </div>

        <div className="mb-3">
          {/* liquor select */}
          <Select type="liquor" />
        </div>

        <div className="mb-3">
          {/* liquor select */}
          <Select type="drinks" />
        </div>
      </div>
    </div>
  );
}

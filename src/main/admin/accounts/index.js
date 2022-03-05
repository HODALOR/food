import Tables from "../../../components/tables";

export default function Accounts(props) {
  const {title, data} = props;
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
              <h4 className="">Sales</h4>
            </div>
            <div className="card-body">
              <Tables title={title} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

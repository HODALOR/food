export default function PageTitle(props) {
  const title = props.title;

  // dashboard page title handler
  if (title === "dashboard") {
    return (
      <div className="page-title-box">
        <div className="page-title-right">
          <ol className="breadcrumb m-0">
            <li className="ml-1">
              <span className="mr-1">Admin</span>
              {">"}
            </li>
            <li className="ml-1">
              <span className="mr-1">pages</span>
              {">"}
            </li>
            <li className="breadcrumb-item active ml-1">dashboard</li>
          </ol>
        </div>
        <h4 className="page-title">Dashboard</h4>
      </div>
    );
  }

  // dishes page title handler
  if (title === "dishes") {
    return (
      <div className="page-title-box">
        <div className="page-title-right">
          <ol className="breadcrumb m-0">
            <li className="ml-1">
              <span className="mr-1">Admin</span>
              {">"}
            </li>
            <li className="ml-1">
              <span className="mr-1">pages</span>
              {">"}
            </li>
            <li className="breadcrumb-item active ml-1">dishes</li>
          </ol>
        </div>
        <h4 className="page-title">Dishes</h4>
      </div>
    );
  }

  // beverages page title handler
  if (title === "beverages") {
    return (
      <div className="page-title-box">
        <div className="page-title-right">
          <ol className="breadcrumb m-0">
            <li className="ml-1">
              <span className="mr-1">Admin</span>
              {">"}
            </li>
            <li className="ml-1">
              <span className="mr-1">pages</span>
              {">"}
            </li>
            <li className="breadcrumb-item active ml-1">beverages</li>
          </ol>
        </div>
        <h4 className="page-title">Beverages</h4>
      </div>
    );
  }

  // drinks page title handler
  if (title === "drinks") {
    return (
      <div className="page-title-box">
        <div className="page-title-right">
          <ol className="breadcrumb m-0">
            <li className="ml-1">
              <span className="mr-1">Admin</span>
              {">"}
            </li>
            <li className="ml-1">
              <span className="mr-1">pages</span>
              {">"}
            </li>
            <li className="breadcrumb-item active ml-1">drinks</li>
          </ol>
        </div>
        <h4 className="page-title">Drinks</h4>
      </div>
    );
  }

  // personel page title handler
  if (title === "users") {
    return (
      <div className="page-title-box">
        <div className="page-title-right">
          <ol className="breadcrumb m-0">
            <li className="ml-1">
              <span className="mr-1">Admin</span>
              {">"}
            </li>
            <li className="ml-1">
              <span className="mr-1">pages</span>
              {">"}
            </li>
            <li className="breadcrumb-item active ml-1">personel</li>
          </ol>
        </div>
        <h4 className="page-title">Personel</h4>
      </div>
    );
  }

  // accounts page title handler
  if (title === "accounts") {
    return (
      <div className="page-title-box">
        <div className="page-title-right">
          <ol className="breadcrumb m-0">
            <li className="ml-1">
              <span className="mr-1">Admin</span>
              {">"}
            </li>
            <li className="ml-1">
              <span className="mr-1">pages</span>
              {">"}
            </li>
            <li className="breadcrumb-item active ml-1">accounts</li>
          </ol>
        </div>
        <h4 className="page-title">Accounts</h4>
      </div>
    );
  }
}

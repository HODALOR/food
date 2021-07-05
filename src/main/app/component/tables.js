export default function Tables(props) {
  if (props.title === "users-table") {
    return (
      <table className="tbody">
        <thead className="thead">
          <tr className="thead">
            <th>EMPLOYEE NAME</th>
            <th>PHONE</th>
            <th>USERNAME</th>
            <th>Role</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((user) => {
            return (
              <tr>
                <td>{user.firstName + " " + user.lastName}</td>
                <td>{user.phone}</td>
                <td>{user.userName}</td>
                <td>{user.role}</td>
                <td
                  type="button"
                  role="button"
                  onClick={() => props.onRowClicked(user)}
                >
                  <i className="fa fa-ellipsis-v"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else if (props.title === "dishes-table") {
    return (
      <div>
        <table>
          <thead className="thead">
            <tr className="thead">
              <th>DISH</th>
              <th>PRICE(GHS)</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody style={{ overflowY: "scroll" }}>
            {props.data.map((dish) => {
              return (
                <tr className="tbody">
                  <td>{dish.dishName}</td>
                  <td>{dish.price}</td>
                  <td
                    type="button"
                    role="button"
                    onClick={() => props.onRowClicked(dish)}
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

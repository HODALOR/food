export default function Tables(props) {
  if (props.title === "users-table") {
    return (
      <table>
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
              <tr className="tbody">
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
  }
}

import { MDBDataTableV5 } from "mdbreact";

export default function Tables(props) {
  const userData = {
    columns: [
      {
        label: "EMPLOYEE NAME",
        field: "name",
        width: 250,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "PHONE",
        field: "phone",
        width: 50,
      },
      {
        label: "USER NAME",
        field: "userName",
        width: 50,
      },
      {
        label: "ROLE",
        field: "role",
        width: 50,
      },
      {
        label: "Action",
        field: "action",
        sort: "disabled",
        width: 150,
      },
    ],
    rows: props.data.map((user) => {
      user.name = user.firstName + " " + user.lastName;
      const action = () => {
        return (
          <div
            type="button"
            role="button"
            onClick={() => props.onRowClicked(user)}
          >
            <i className="fa fa-ellipsis-v"></i>
          </div>
        );
      };
      user.action = action();
      return user;
    }),
  };
  const salesData = {
    columns: [
      {
        label: "DISH NAME",
        field: "food",
        width: 250,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "PRICE",
        field: "price",
        width: 50,
      },
      {
        label: "USER NAME",
        field: "userName",
        width: 50,
      },
      {
        label: "Date",
        field: "date",
        width: 50,
      },
      {
        label: "ACTION",
        field: "action",
        width: 50,
      },
    ],
    rows: props.data.map((sale) => {
      const action = () => {
        return <i className="fa fa-print"></i>;
      };
      sale.action = action();
      return sale;
    }),
  };
  const dishesData = {
    columns: [
      {
        label: "DISH",
        field: "dishName",
        width: 250,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "PRICE",
        field: "price",
        width: 50,
      },
      {
        label: "Action",
        field: "action",
        sort: "disabled",
        width: 150,
      },
    ],
    rows: props.data.map((dish) => {
      const action = () => {
        return (
          <div
            type="button"
            role="button"
            onClick={() => props.onRowClicked(dish)}
          >
            <i className="fa fa-ellipsis-v"></i>
          </div>
        );
      };
      dish.action = action();
      return dish;
    }),
  };
  if (props.title === "users-table") {
    return (
      <div className="my-table">
        <MDBDataTableV5
          hover
          entriesOptions={[5, 10, 25]}
          entries={5}
          pagesAmount={4}
          data={userData}
          searchTop
          searchBottom={false}
        />
      </div>
    );
  } else if (props.title === "dishes-table") {
    return (
      <div className="my-table">
        <MDBDataTableV5
          hover
          entriesOptions={[5, 10, 25]}
          entries={5}
          pagesAmount={4}
          data={dishesData}
          searchTop
          searchBottom={false}
        />
      </div>
    );
  } else if (props.title === "sales-table") {
    return (
      <div className="my-table">
        <MDBDataTableV5
          hover
          entriesOptions={[5, 10, 25]}
          entries={5}
          pagesAmount={4}
          data={salesData}
          searchTop
          searchBottom={false}
        />
      </div>
    );
  }
}

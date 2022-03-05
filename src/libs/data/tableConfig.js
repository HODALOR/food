import { sales, menu } from "./dummy";

const salesData = {
  columns: [
    {
      label: "ITEM NAME",
      field: "item",
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
      label: "DATE SOLD",
      field: "dateSold",
      width: 50,
    },
    {
      label: "ORDERED BY",
      field: "orderBy",
      width: 50,
    },
    {
      label: "CONFIRMED BY",
      field: "confirmedBy",
      width: 50,
    },
  ],
  rows: sales.map((sale) => {
    return sale;
  }),
};

const menuData = {
  columns: [
    {
      label: "ITEM NAME",
      field: "item",
      width: 250,
      attributes: {
        "aria-controls": "DataTable",
        "aria-label": "Name",
      },
    },
    {
      label: "ITEM PRICE",
      field: "price",
      width: 50,
    },
    {
      label: "Date Added",
      field: "dateAdded",
      width: 50,
    },
    {
      label: "Added By",
      field: "addedBy",
      width: 50,
    },
    {
      label: "Action",
      field: "action",
      sort: "disabled",
      width: 150,
    },
  ],
  rows: menu.map((item) => {
    const action = () => {
      return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            type="button"
            role="button"
            // onClick={() => props.onRowClicked(user)}
          >
            <i className="fa fa-edit"></i>
          </div>
          <div
            type="button"
            role="button"
            // onClick={() => props.onRowClicked(user)}
          >
            <i className="fa fa-trash"></i>
          </div>
        </div>
      );
    };
    item.action = action();
    return item;
  }),
};

export { salesData, menuData };

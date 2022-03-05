export default function AddButton(props) {
  const title = props.title;

  if (title === "dishes") {
    return (
      <button
        type="button"
        class="btn btn-primary mb-3"
        onClick={props.onToggle}
      >
        {" "}
        <i class="fa fa-plus mr-1"></i> Add Dish
      </button>
    );
  }

  if (title === "beverages") {
    return (
      <button
        type="button"
        class="btn btn-primary mb-3"
        onClick={props.onToggle}
      >
        {" "}
        <i class="fa fa-plus mr-1"></i> Add Beverage
      </button>
    );
  }

  if (title === "drinks") {
    return (
      <button
        type="button"
        class="btn btn-primary mb-3"
        onClick={props.onToggle}
      >
        {" "}
        <i class="fa fa-plus mr-1"></i> Add Drink
      </button>
    );
  }

  if (title === "users") {
    return (
      <button
        type="button"
        class="btn btn-primary mb-3"
        onClick={props.onToggle}
      >
        {" "}
        <i class="fa fa-user-plus mr-1"></i> Add Personel
      </button>
    );
  }
}

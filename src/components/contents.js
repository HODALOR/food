import Accounts from "../main/admin/accounts";
import Dashboard from "../main/admin/dashboard";
import Dishes from "./../main/admin/dishes/index";
import Beverages from "./../main/admin/beverages/index";
import Drinks from "./../main/admin/drinks/index";
import Personel from "./../main/admin/personel/index";

export default function Content(props) {
  const { title, data, menu } = props;

  if (title === "dashboard") {
    return <Dashboard />;
  }

  if (title === "accounts") {
    return <Accounts title={title} data={data} />;
  }

  if (title === "dishes") {
    return <Dishes title={title} menu={menu} />;
  }

  if (title === "beverages") {
    return <Beverages title={title} />;
  }

  if (title === "drinks") {
    return <Drinks title={title} />;
  }

  if (title === "users") {
    return <Personel title={title} />;
  }
}

import "../main.css";
import logo from "./kegali.jpg";

const Print = props => {
  if (props.onPrint) {
    let printContents = document.getElementById("printme").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  }

  const _totalPrice = () => {
    let tprice = 0;
    props.data.forEach(dish => {
      tprice += parseInt(dish.quantity) * parseInt(dish.price);
    });
    return tprice;
  };
  return (
    <div id="printme">
      <div className="print-view">
        <div>
          <img
            src={logo}
            style={{ width: "50px", height: "50px", margin: "3px" }}
          />
        </div>
        <div className="reciept-title">RECIEPT</div>
        {props.data.map(dish => {
          return (
            <div className="reciept-body">
              <div className="reciept-dish">
                {dish.dishName || dish.liqureName || dish.beverageName}:
              </div>
              <div className="reciept-price">
                GHC {parseInt(dish.quantity) * parseInt(dish.price)}
              </div>
            </div>
          );
        })}
        <div className="reciept-body">
          <div className="reciept-dish">Total</div>
          <div className="reciept-price">{_totalPrice()}</div>
        </div>
        <hr />
        <div>{new Date().toLocaleString()}</div>
        <div>Kegali Hotel</div>
      </div>
    </div>
  );
};

export default Print;

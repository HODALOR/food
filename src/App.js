import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages import
import Login from "./auth/login";
import Admin from "./main/admin/index";
import Kitchen from "./main/kitchen/index";
import Waiters from "./main/waiter/index";
import Bar from "./main/bar/index";
import WaiterContextProvider from "./libs/contexts/waitersContext";

function App() {
  return (
    <Router>
      <Switch>
        <WaiterContextProvider>
          <Route exact path="/" component={Waiters} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/kitchen" component={Kitchen} />
          <Route path="/bar" component={Bar} />
        </WaiterContextProvider>
      </Switch>
    </Router>
  );
}

export default App;

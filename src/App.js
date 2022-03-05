import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages import
import Login from "./auth/login";
import Admin from "./main/admin/index";
import Kitchen from "./main/kitchen/index";
import Waiters from "./main/waiter/index";
import Bar from "./main/bar/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Waiters {...props} />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/admin" render={(props) => <Admin {...props} />} />
        <Route path="/kitchen" render={(props) => <Kitchen {...props} />} />
        <Route path="/bar" render={(props) => <Bar {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;

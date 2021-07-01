import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./main/app/main";
import Login from "./main/auth/login"

function App() {
  return (
    <div className="App">
 
 <Router>
        <Switch>
          <Route  exact path="/" component={Login} />
          <Route   path="/main" component={Main} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Signin from "./components/Signin";

function App() {
  return(
    <Router>
        <Switch>
          <Route path="/new">
            <Signin />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
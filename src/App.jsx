
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Game from "./components/Game";
import Fail from "./components/Fail";
import Win from "./components/Win";
import icon from "./Randprix.png"
import NotFound from './components/NotFound';
import About from './components/About';

function App() {
  return(
    <div>

      <div className="topIcon">   
        <a className="logo" href="/"><img className="icon" src={icon} alt="icon" /></a>
      </div>

      <BrowserRouter>
        <Switch>
          <Route path="/game"><Game /></Route>
          <Route path="/fail"><Fail/></Route>
          <Route path="/win"><Win/></Route>
          <Route path="/about"><About/></Route>
          <Route exact path="/"><Home/></Route>




          {/* 404 page, must be last */}
          <Route path="*"><NotFound/></Route>
        </Switch>

      </BrowserRouter>
      <h3> Lukáš Odehnal 2021</h3>
    </div>
  );
}

export default App;

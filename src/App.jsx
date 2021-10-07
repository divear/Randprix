
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Game from "./components/Game";
import Fail from "./components/Fail";
import Win from "./components/Win";
import icon from "./canvasGame.png"

function App() {
  return(
    <BrowserRouter>

      <div className="topIcon">   
        <a className="logo" href="/"><img className="icon" src={icon} alt="icon" />Randpix</a>
      </div>

      <Switch>
        <Route path="/game"><Game /></Route>
        <Route path="/fail"><Fail/></Route>
        <Route path="/win"><Win/></Route>
        <Route exact path="/"><Home/></Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
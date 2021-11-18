import Game from "./Components/Game";
import Header from "./Components/Header";
import VsPlayer from "./Components/VsPlayer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <VsPlayer />
          </Route>
          <Route path="/vs-computer">
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

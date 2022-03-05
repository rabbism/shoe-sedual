import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from "./component/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

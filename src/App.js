import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Details from "./component/Details/Details";
import Home from "./component/Home/Home";
import NavBar from "./component/NavBar/NavBar";

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
        <Route exact path='/show/:showId'>
          <NavBar></NavBar>
          <Details></Details>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

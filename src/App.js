import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Details from "./component/Details/Details";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import NavBar from "./component/NavBar/NavBar";
import NotFound from "./component/NotFound/NotFound";

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
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;

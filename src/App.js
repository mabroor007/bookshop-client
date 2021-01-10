import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import AddBook from "./views/AddBook";
import SellBook from "./views/SellBook";
import Sold from "./views/Sold";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddBook} />
        <Route exact path="/sell" component={SellBook} />
        <Route exact path="/sold" component={Sold} />
      </Switch>
    </div>
  );
}

export default App;

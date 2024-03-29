//dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Header from "./Header";
import Items from "./Items";
import Item from "./Item";

//data
import testData from "../res/test";

//styles
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header comName={testData.CompanyName} salesRep={testData.SalesRep} />
        <Switch>
          <Route path="/" exact component={Items} />
          <Route path="/item/:id" exact component={Item} />
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

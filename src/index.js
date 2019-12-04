//dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Header from "./Header";
import Items from "./Items";
import Item from "./Item";
import Footer from "./Footer";

//styles
import "./styles.css";

//data
import testData from "../res/test";

function App() {
  return (
    <Router>
      <div className="App">
        <Header comName={testData.CompanyName} />
        <Items itemsList={testData.items} />
        <Footer salesRep={testData.SalesRep} />
      </div>
      <Switch>
        <Route path="/item/:id" exact component={Item} />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

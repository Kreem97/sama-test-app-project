import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Items from "./Items";
import Footer from "./Footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Items />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

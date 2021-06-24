import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";
import "./index.css";

const App = () => {
  return (
    <main>
      <Container />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

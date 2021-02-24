import React, { Component } from "react";
import Header from "./Header";
import Card from "./Card";

class App extends React.Component {

  render() {
  return (
    <div className="container">
      <Header />
      <Card />

    </div>
  );
  };
};

export default App;

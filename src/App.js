import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import Card from "./components/Card";
import API from "./utils/API";

class App extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    API.getUsers(25)
    .then(people => {
      this.setState({ users: people.data.results })
    })
    .catch(err => console.log(err));

  }

  render() {
  return (
    <div className="container">
      {console.log(this.state.users)}
      <Header />
      <Card users={this.state.users} />

    </div>
  );
  };
};

export default App;

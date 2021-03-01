import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import API from "./utils/API";

class App extends React.Component {
  state = {
    users: [],
    search: "",
    originalUsers: []
  };

  componentDidMount() {
    API.getUsers(25)
      .then((people) => {
        this.setState({ users: people.data.results , originalUsers: people.data.results});
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({ 
       [name]:value
     })
    
      const newUsers = this.state.originalUsers.filter(user => {
        return user.name.first.toLowerCase().includes(value.toLowerCase()) || user.name.last.toLowerCase().includes(value.toLowerCase())
      })
      this.setState({
        users: newUsers
      })
  }

  render() {
    return (
      <div className="container">
       
          {console.log(this.state.users)}
          <Header search={this.state.search} handleInputChange={this.handleInputChange} />
          <div className="row">
          {this.state.users.length > 0
            ? this.state.users.map((user) => {
                return <Card user={user} />;
              })
            : ""}
        </div>
      </div>
    );
  }
}

export default App;

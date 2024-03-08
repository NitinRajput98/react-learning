import React from "react";
import Contact from "./Contact";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {
        avatar_url: "https://www.w3schools.com/",
        name: "",
        location: "",
      },
    };
    console.log("Child Contructor");
  }
  async componentDidMount() {
    console.log("Child componenetdidmount called");
    const data = await fetch("https://api.github.com/users/NitinRajput98");
    const json = await data.json();
    console.log(json);
    this.setState({
      json,
    });
  }
  componentWillUnmount() {
    console.log("componentwillunmoutn!!!!!");
  }

  componentDidUpdate() {
    console.log("componentDidupdate");
  }

  render() {
    console.log("Child Render");
    console.log("State Variables", this.state);
    return (
      <div>
        <div className="user-card">
          <img src={this.state.json.avatar_url} />
          <h3>Name:{this.state.json.name}</h3>
          <h3>Location:{this.state.json.location}</h3>
          <h3>Contact: Class Component</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;

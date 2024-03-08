import React from "react";
import Contact from "./Contact";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log(this.props.name + "Child Contructor");
  }
  componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    this.setState({
      count: this.state.count + 1,
      count2: this.state.count2 + 1,
    });
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log(this.props.name + "Child Render");
    return (
      <div>
        <div className="user-card">
          <h1>Count: {count}</h1>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 1,
              });
            }}
          >
            Increment Count
          </button>
          <h2>Count2: {count2}</h2>
          <h3>Name:{name}</h3>
          <h3>Location:{location}</h3>
          <h3>Contact: Class Component</h3>
        </div>
        {/* <Contact /> */}
      </div>
    );
  }
}

export default UserClass;

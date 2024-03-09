import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Contact contructor");
  }

  componentDidMount() {
    // console.log("Contact Component Did Mount!");
  }

  render() {
    // console.log("Contact Render");
    return (
      <div>
        <h1>Contact Us Page</h1>
      </div>
    );
  }
}

// const Contact = () => {
//   return <div>Contact Us Page</div>;
// };

export default Contact;

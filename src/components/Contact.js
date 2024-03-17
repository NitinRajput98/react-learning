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
      <div className="border-2 shadow-lg m-1 h-min-full text-center">
        <h1 className="p-2 m-2 font-bold text-xl">Contact Us Page</h1>
        <form>
          <input
            placeholder="Enter Name"
            className="p-2 border border-black block mx-auto"
          />
          <input
            placeholder="Enter Message"
            className="p-2 m-2 border border-black block mx-auto"
          />
          <input
            placeholder="Enter Email"
            className="p-2 m-2 border border-black block mx-auto"
          />
          <button className="p-2 m-2 border border-black rounded-lg block mx-auto">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

// const Contact = () => {
//   return <div>Contact Us Page</div>;
// };

export default Contact;

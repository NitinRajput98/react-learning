import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

// class About extends Component {
//   constructor(props) {
//     super(props);
//     // console.log("Parent Constructor");
//   }

//   componentDidMount() {
//     // console.log("Parent's Component Did Mount");
//   }

//   render() {
//     // console.log("Parents Render");
//     return (
//       <div>
//         <h1>About Page</h1>
//         <UserContext.Consumer>
//           {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
//         </UserContext.Consumer>
//         {/* <User name={"Nitin Rajput Functional"} /> */}
//         <UserClass />
//         {/* <UserClass name={"Second"} location={"New Delhi Class"} /> */}
//       </div>
//     );
//   }
// }

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      {/* <User name={"Nitin Rajput Functional"} /> */}
      <UserClass
        name={"Nitin Rajput Class Based"}
        location={"New Delhi Class"}
      />
    </div>
  );
};

export default About;

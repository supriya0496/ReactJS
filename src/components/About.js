import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends Component {
  render() {
    // console.log("Parent Render");
    return (
      <div className="flex">
        <h1>About Us</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h2>This is React tutorials</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;

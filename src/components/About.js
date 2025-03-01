import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is React tutorials</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;

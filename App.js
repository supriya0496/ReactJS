import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/clear.png";
import user from "./images/user.png";

const HeaderComponent = () => (
  <div id="container">
    <img src={logo} width="100" height="100"></img>
    <input type="text" placeholder="Search" spellcheck="false" />
    <img src={user} width="100" height="100"></img>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

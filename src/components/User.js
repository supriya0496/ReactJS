import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  return (
    <div className="user">
      <h1>Count: {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @supriya-shankar-19085917a</h4>
    </div>
  );
};

export default User;

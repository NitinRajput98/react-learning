import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Count2: {count2}</h2>
      <h3>Name:{props.name}</h3>
      <h3>Location: Delhi</h3>
      <h3>Contact: Funtional component</h3>
    </div>
  );
};

export default User;

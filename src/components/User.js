import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  const {name} = props;
  return (
    <div className="user-cont">
      <h2>Count: {count}</h2>
      <h2>Count: {count2}</h2>
      <h2>Name: {name}</h2>
      <h3>location: Warangal</h3>
      <h3>Contact: Kandagatla Ramya</h3>
    </div>
  );
};

export default User;
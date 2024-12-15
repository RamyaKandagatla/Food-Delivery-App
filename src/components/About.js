import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  async componentDidMount() {
  };

  render() {
    return(
      <div className="p-4">
        <h1>About us</h1>
        <UserContext.Consumer>
          {({loggedInUser})=>(<h1>{loggedInUser}</h1>)}
        </UserContext.Consumer>
        <h2> This is the food delivery app</h2>
        <UserClass />
      </div>
    )
  }
}

export default About;

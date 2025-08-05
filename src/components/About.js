import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    // Optional: data fetch or setup
  }

  render() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-orange-100 flex flex-col items-center justify-start p-6">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>

          {/* Consume Context */}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <p className="text-lg font-semibold text-gray-700 mb-2">
                Logged in as: <span className="text-orange-500">{loggedInUser}</span>
              </p>
            )}
          </UserContext.Consumer>

          <p className="text-base text-gray-600 mb-6">
            This is a food delivery app built with React and Tailwind CSS. It demonstrates concepts like routing, state management, hooks, and reusable components.
          </p>

          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;

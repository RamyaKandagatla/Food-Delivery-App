import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : {
        name : 'Ramya',
        location : 'Bangalore',
        avatar_url : '',
      }
    }
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/RamyaKandagatla');
    const json = await data.json();
    this.setState({
      userInfo : json
    })
  }

  render() {
    const { userInfo: { name, location, avatar_url }} = this.state;

    return (
      <div className="user-cont">
        <img src={avatar_url} alt='avatar'/>
        <h2>Name: {name}</h2>
        <h3>location: {location}</h3>
        <h3>Contact: Kandagatla Ramya</h3>
      </div>
    );
  }
}

export default UserClass;


/**
 * Mounting cycle:
      * constructor
      * render
      *  html 
      * component did mount
      * api call
      * this.setstate
  * updating cycle
      * render with api data
      * html loaded with api data
      * component did update
  * unmounting
      * componentWillUnmount
 */
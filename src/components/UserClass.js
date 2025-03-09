import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        userName: "Dummy data",
        location: "Default",
      },
    };
    // console.log(this.props.name + " Child Constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/supriya0496");
    const json = await data.json();
    console.log(json.login);
    this.setState({
      userInfo: json,
    });
    // console.log(this.props.name + " Child Component did mount");
  }

  render() {
    // console.log(this.props.name + " Child Render");
    const { login, location, avatar_url } = this.state.userInfo;
    return (
      <div className="p-4 m-4 rounded-lg user bg-gray-50">
        <img src={avatar_url} />
        <h2>Name: {login} </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @supriya-shankar-19085917a</h4>
      </div>
    );
  }
}

export default UserClass;

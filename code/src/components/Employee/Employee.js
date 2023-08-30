import React, { Component } from "react";
import axios from "axios";
import { getUsersApi } from "../../assets/services";
import { Link } from "react-router-dom";

class Employee extends Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    axios
      .get(getUsersApi)
      .then((res) => {
        console.log(res);
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const usersList = this.state.users.length ? (
      this.state.users.map((user) => {
        return (
          <React.Fragment key={user.id}>
            <p>
              <Link to={"/employee/" + user.id}>{user.name}</Link>
            </p>
            <p>{user.email}</p>
          </React.Fragment>
        );
      })
    ) : (
      <p>No Post Yet!</p>
    );

    return <>{usersList}</>;
  }
}

export default Employee;

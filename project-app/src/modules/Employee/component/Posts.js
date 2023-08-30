import React, { useEffect, useState } from "react";
import axios from 'axios';

const Posts = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const usersList = users.length ? (
    users.map((user) => {
      return <p>{user.name}</p>;
    })
  ) : (
    <p>No Post Yet</p>
  );

  return <>{usersList}</>;
};

export default Posts;

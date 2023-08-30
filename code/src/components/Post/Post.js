import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsersApi } from "../../assets/services";
import axios from "axios";

const Post = () => {
  const [user, setUser] = useState(null);

  const params = useParams();
  console.log(params); //to access routing parameter

  useEffect(() => {
    axios
      .get(getUsersApi + params.post_id)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {user ? (
        <p>
          {user.name} {user.phone}
        </p>
      ) : (
        <p>No Post Yet!</p>
      )}
    </div>
  );
};

export default Post;

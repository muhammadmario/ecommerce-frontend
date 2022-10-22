import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosJWT from "../app/api/axiosJWT";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  const [error, setError] = useState(null);
  const { token } = useSelector((state) => state.auth);

  const handleClick = async () => {
    try {
      // console.log("aku jalan");
      const response = await axiosJWT.get("users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  useEffect(() => {
    error && navigate("/login");
  }, [error]);

  return (
    <div>
      Home
      <button className="bg-lime-400" onClick={() => handleClick()}>
        users
      </button>
      {users && users.map((user) => <p key={user.id}>{user.name}</p>)}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Home;

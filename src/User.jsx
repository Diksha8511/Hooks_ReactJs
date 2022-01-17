import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = () => {
  const { name } = useParams();
  const location = useLocation();
  const history = useHistory();

  
  return (
    <>
      <h1> user {name} page </h1>
      <p> my current location is {location.pathname}</p>
      {location.pathname === '/user/diksha' ? (
        <button onClick={()=> history.goBack()}> Go back </button>
      ) : null }
    </>
  ); 
};

export default User;

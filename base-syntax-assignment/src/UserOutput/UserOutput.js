import React from "react";
import "./UserOutput.css";
const UserOutput = ({ userName }) => {
  return (
    <div className="UserOutput">
      <p>{userName}</p>
      <p>Other random text</p>
    </div>
  );
};

export default UserOutput;

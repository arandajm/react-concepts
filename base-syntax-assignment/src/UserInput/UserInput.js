import React from "react";

const UserInput = ({ changed, currentName }) => {
  const inputStyles = {
    border: "2px solid red",
  };
  return (
    <input
      type="text"
      style={inputStyles}
      onChange={changed}
      value={currentName}
    />
  );
};

export default UserInput;

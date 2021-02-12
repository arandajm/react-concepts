import React from "react";

const Char = ({ char, clicked }) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
  };
  return (
    <div style={style} onClick={clicked}>
      {char}
    </div>
  );
};

export default Char;

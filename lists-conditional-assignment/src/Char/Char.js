import React from "react";
import classes from "./Char.module.scss";
const Char = ({ char, clicked }) => {
  return (
    <div className={classes.Char} onClick={clicked}>
      {char}
    </div>
  );
};

export default Char;

import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function FlStatus({ children, variant, className, size }) {
  return (
    <span
      className={
        `${" fl_status fl__" + variant + " " + size + " "}` + (className || "")
      }
    >
      <label>{children}</label>
    </span>
  );
}

FlStatus.propTypes = {
    children: PropTypes.string,
    variant:  PropTypes.oneOf(["success" , "red" , "light" , "light-success" , "light-red"]),
    className: PropTypes.string,
    size: PropTypes.oneOf(["big" , "big-bold" , "medium" , "medium-bold" , "small" , "small-bold"]),
  };

export default FlStatus;



// PRESENTATIONAL COMPONENT
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Student.css";

const Student = (props) => {
  // create isPresent state
  const [isPresent, setIsPresent] = useState(false);
  // create event handler function
  const togglePresence = () => {
    setIsPresent(!isPresent);
  };
  // create conditional CSS classes to apply to student's name
  const nameColor = isPresent ? "green" : "red";

  const attendanceChange = isPresent ? "absent" : "present";

  return (
    <div>
      <ul>
        <li className={nameColor}>Nickname: {props.name} </li>
        <li>Email: {props.email}</li>
      </ul>
      {/* create toggle present button and attach event handler */}
      <button onClick={togglePresence}>
        Toggle if {props.name} is {attendanceChange}
      </button>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Student;

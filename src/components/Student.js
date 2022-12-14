// PRESENTATIONAL COMPONENT
import PropTypes from "prop-types";
import "./Student.css";

const Student = (props) => {
  // onClick event handler
  const onAttendanceButtonClick = () => {
    const updatedStudent = {
      id: props.id,
      nameData: props.name,
      emailData: props.email,
      isPresentData: !props.isPresent,
    };
    // Invoke the function passed in through the prop named "onUpdate"
    // This function is referenced by the name "updateStudentData" in App
    props.onUpdate(updatedStudent);
  };

  const nameColor = props.isPresent ? "green" : "red";

  const attendanceChange = props.isPresent ? "absent" : "present";

  return (
    <div>
      <ul>
        <li className={nameColor}>Nickname: {props.name} </li>
        <li>Email: {props.email}</li>
      </ul>
      {/* create toggle present button and attach event handler */}
      <button onClick={onAttendanceButtonClick}>
        Toggle if {props.name} is {attendanceChange}
      </button>
    </div>
  );
};

Student.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};

export default Student;

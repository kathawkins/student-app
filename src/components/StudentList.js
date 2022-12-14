// CONTAINER COMPONENT
import React from "react";
import "./StudentsList.css";
import Student from "./Student";
import PropTypes from "prop-types";

const StudentList = (props) => {
  const headingClass = "student-list__heading";
  const listClass = "student-list";

  const studentComponents = props.students.map((student) => {
    // Setting a unique "key" prop is a React best practice to help apps perform better.
    // Used the index as a key of last resort.
    // Ideally, we would be using something like a primary key value for our data.
    return (
      <li key={student.id}>
        <Student
          id={student.id}
          name={student.nameData}
          email={student.emailData}
          isPresent={student.isPresentData}
          onUpdate={props.onUpdateStudent}
        ></Student>
      </li>
    );
  });

  return (
    <section>
      <button onClick={props.onClearStudents}>Delete All Students</button>
      <h2 className={headingClass}>Student List</h2>
      <ul className={listClass}>{studentComponents}</ul>
    </section>
  );
};

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameData: PropTypes.string.isRequired,
      emailData: PropTypes.string.isRequired,
      isPresentData: PropTypes.bool,
    })
  ),
  onUpdateStudent: PropTypes.func.isRequired,
  onClearStudents: PropTypes.func.isRequired,
};

export default StudentList;

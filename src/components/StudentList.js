// CONTAINER COMPONENT
import React from "react";
import "./StudentsList.css";
import Student from "./Student";

const StudentList = (props) => {
  const headingClass = "student-list__heading";
  const listClass = "student-list";

  const studentComponents = props.students.map((student, index) => {
    // Setting a unique "key" prop is a React best practice to help apps perform better.
    // Used the index as a key of last resort.
    // Ideally, we would be using something like a primary key value for our data.
    return (
      <li key={index}>
        <Student name={student.nameData} email={student.emailData}></Student>
      </li>
    );
  });

  return (
    <section>
      <h2 className={headingClass}>Student List</h2>
      <ul className={listClass}>
        {studentComponents}

        {/* Will render an empty string becaues props are undefined: */}
        {/* <li>
          <Student></Student>
        </li> */}
      </ul>
    </section>
  );
};

export default StudentList;

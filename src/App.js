import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
import { useState } from "react";

function App() {
  // Added studentData here so that studentData props can potentially
  // be passed to components other than StudentList
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      nameData: "Ada",
      emailData: "ada@dev.org",
      isPresentData: false,
    },
    {
      id: 2,
      nameData: "Soo-ah",
      emailData: "sooah@dev.org",
      isPresentData: false,
    },
    {
      id: 3,
      nameData: "Chrissy",
      emailData: "chrissy@dev.org",
      isPresentData: true,
    },
  ]);

  // Makes a helper array that is more or less a copy of the data
  // we already had. Why?:
  // For container types, like arrays and objects, if we update an
  // inner value and then call the relevant set function, React
  // will see that the reference to the object currently in state
  // is the same reference as the object being passed into the set
  // function. So to get React to notice that a value in our array
  // or object has changed, we need to make a new outer reference,
  // and copy the existing values into it.
  const updateStudentData = (updatedStudent) => {
    const students = studentData.map((student) => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    });
    setStudentData(students);
  };

  const clearStudentsData = () => {
    const students = [];
    setStudentData(students);
  };

  const totalStudents = studentData.length;

  const studentAppList = (
    <StudentList
      students={studentData}
      onUpdateStudent={updateStudentData}
      onClearStudents={clearStudentsData}
    ></StudentList>
  );

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo numStudents={totalStudents}></ClassInfo>
      {studentAppList}
    </main>
  );
}

export default App;

import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
import { useState } from "react";
import NewStudentForm from "./components/NewStudentForm";

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

  // receives an object, newStudent
  const addStudentData = (newStudent) => {
    // Duplicate the student list
    const newStudentList = [...studentData];

    // Logic to generate the next valid student ID
    const nextId = Math.max(...newStudentList.map((student) => student.id)) + 1;

    newStudentList.push({
      id: nextId,
      nameData: newStudent.nameData,
      emailData: newStudent.emailData,
      isPresentData: false,
    });

    setStudentData(newStudentList);
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
      <NewStudentForm addStudentCallback={addStudentData}></NewStudentForm>
    </main>
  );
}

export default App;

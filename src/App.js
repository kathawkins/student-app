// import logo from "./logo.svg";
// import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

function App() {
  const studentData = [
    {
      nameData: "Ada",
      emailData: "ada@dev.org",
    },
    {
      nameData: "Soo-ah",
      emailData: "sooah@dev.org",
    },
    {
      nameData: "Chrissy",
      emailData: "chrissy@dev.org",
    },
  ];

  const totalStudents = studentData.length;

  const studentAppList = <StudentList students={studentData}></StudentList>;

  return (
    <div className="App">
      <main>
        <h1>Attendance</h1>
        <ClassInfo numStudents={totalStudents}></ClassInfo>

        {studentAppList}
      </main>
    </div>
  );
}

export default App;

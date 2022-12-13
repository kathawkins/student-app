// import logo from "./logo.svg";
// import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

function App() {
  const studentList = <StudentList></StudentList>;
  return (
    <div className="App">
      <main>
        <h1>Attendance</h1>
        <ClassInfo></ClassInfo>

        {studentList}
      </main>
    </div>
  );
}

export default App;

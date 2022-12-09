// import logo from "./logo.svg";
// import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

function App() {
  const studentList = <StudentList></StudentList>;
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <main>
        <h1>Attendance</h1>
        <ClassInfo></ClassInfo>
        {/* Here is one student list: */}
        {studentList}
        {/* Here is another student list:
        {studentList} */}
      </main>
    </div>
  );
}

export default App;

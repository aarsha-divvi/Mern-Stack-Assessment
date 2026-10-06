import Student from "./components/Student";

function App() {
  return (
    <div>
      <h1>Pass Props Example</h1>

      <Student
        name="Rahul"
        course="Computer Science"
        year="3rd Year"
      />
    </div>
  );
}

export default App;
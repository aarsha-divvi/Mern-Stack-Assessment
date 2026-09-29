function Program2() {
  const name = "Aditya";
  const age = 15;
  const course = "MERN Stack";

  return (
    <div>
      <h1>Student Details Using JSX</h1>

      <h2>Name: {name}</h2>

      <p>Age: {age}</p>

      <p>Course: {course}</p>

      <h3>Welcome {name}!</h3>

      <p>
        {name} is {age} years old and is studying {course}.
      </p>
    </div>
  );
}

export default Program2;
let studentData = [
  {
  id: 1,
  name: "Eddy",
  color: "chartreuse",
  school: "Nebula Academy",
  },
  {
  id: 2,
  name: "Chelsea",
  color: "purple",
  school: "Nebula Academy",
  },
  {
  id: 3,
  name: "Tauseef",
  color: "orange",
  school: "Nebula Academy",
  },
  {
  id: 4,
  name: "Maurice",
  color: "red",
  school: "Nebula Academy",
  },
  {
  id: 5,
  name: "D'aja",
  color: "blue",
  school: "Nebula Academy",
  },
  {
  id: 6,
  name: "Jasmine",
  color: "pink",
  school: "Nebula Academy",
  },
  {
  id: 7,
  name: "Anitria",
  color: "blue",
  school: "Nebula Academy",
  },
  ];

function App() {
  return studentData.map((student)=> (
    <div className= 'card'>
      <p>ID#: {student.id}</p>
      <h1>{student.name}</h1>
      <p>Favorite Color: {student.color}</p>
      <p>{student.name} is a {student.school} student</p>
    </div>
  ))
}

export default App;

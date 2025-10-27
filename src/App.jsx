import "./App.css";
import Task from "./components/Task";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState(["eat", "sleep", "code"]);

  const handleDelete = (clickedTask) => {
    setToDos((currToDos) => {
      return currToDos.filter((task) => {
        return task !== clickedTask;
      });
    });
  };

  return (
    <>
      <h1>My to do list</h1>

      <ul>
        {toDos.map((task) => {
          return <Task key={task} task={task} handleDelete={handleDelete} />;
        })}
      </ul>
    </>
  );
}

export default App;

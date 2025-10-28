import "./App.css";
import Task from "./components/Task";
import { useState } from "react";
import Input from "./components/input";

function App() {
  const [toDos, setToDos] = useState(["eat", "sleep", "code"]);
  const [input, setInput] = useState("");

  const handleDelete = (clickedTask) => {
    setToDos((currToDos) => {
      return currToDos.filter((task) => {
        return task !== clickedTask;
      });
    });
  };

  const addToDo = (newTask) => {
    setToDos((currToDos) => {
      return [...currToDos, newTask];
    });
  };

  return (
    <>
      <h1>The 'to do list' of dreams</h1>
      <Input addToDo={addToDo} />

      <ul>
        {toDos.map((task) => {
          return <Task key={task} task={task} handleDelete={handleDelete} />;
        })}
      </ul>
    </>
  );
}

export default App;

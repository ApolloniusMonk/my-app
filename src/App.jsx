import "./App.css";
import Task from "./components/Task";
import { useState } from "react";
import Input from "./components/input";
import DeleteAllButton from "./components/DeleteAll";

function App() {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");

  const handleDelete = (clickedTask) => {
    setToDos((currToDos) => {
      return currToDos.filter((task) => {
        return task !== clickedTask;
      });
    });
  };

  const handleDeleteAll = () => {
    setToDos([]);
  };

  const addToDo = (newTask) => {
    setToDos((currToDos) => {
      return [...currToDos, newTask];
    });
  };

  return (
    <>
      <h1>To do list</h1>
      <Input addToDo={addToDo} />

      <ul>
        {toDos.map((task) => {
          return <Task key={task} task={task} handleDelete={handleDelete} />;
        })}
      </ul>
      <DeleteAllButton handleDeleteAll={handleDeleteAll} />
    </>
  );
}

export default App;

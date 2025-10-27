function Task({ task, handleDelete }) {
  return (
    <li>
      {task}
      <button onClick={() => handleDelete(task)}>delete</button>
    </li>
  );
}

export default Task;

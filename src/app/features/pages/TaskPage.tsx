import { useState } from "react";
import { Task } from "../../types/Task";
import { v4 as randomId } from "uuid";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

function TaskPage() {
  const [taskName, setTaskName] = useState<string>("");
  const [taskArr, setTaskArr] = useState<Task[]>([]);
  const [taskSearch, setTaskSearch] = useState<string>("");

  function handleTaskNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskName(event.target.value);
  }

  function createTask() {
    setTaskArr([...taskArr, { id: randomId(), title: taskName }]);
    setTaskName("");
  }

  function deleteTask(taskId: string) {
    setTaskArr(taskArr.filter((task) => task.id !== taskId));
  }

  function search(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskSearch(event.target.value);
  }

  function handleSearch(value: Task) {
    if (taskSearch === "") {
      return value;
    } else if (value.title.includes(taskSearch)) {
      return value;
    }
  }

  return (
    <>
      <Nav />
      <div className="l">
        <Sidebar />

        <div className="l--main">
          <div className="field mt-24">
            <input
              type="text"
              placeholder="search..."
              className="input input--primary input--base input--s"
              onChange={(event) => search(event)}
            ></input>
            <i className="icon icon--base icon--search"></i>
          </div>

          <div className="field mt-24">
            <input
              type="text"
              placeholder="to do"
              className="input input--primary input--base input--s"
              value={taskName}
              onChange={(event) => handleTaskNameChange(event)}
            />

            <button className="btn--save ml-24" id="btn" onClick={createTask}>
              Save
            </button>
          </div>

          <div className="title--primary mt-24">Task list</div>

          <div>
            {taskArr.filter(handleSearch).map((task) => {
              return (
                <div className="task mt-24" key={task.id}>
                  <div className="task__title">{task.title}</div>
                  <div
                    className="task__delete"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskPage;

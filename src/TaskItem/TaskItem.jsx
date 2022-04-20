import { BsFillTrashFill } from "react-icons/bs";
import "./TaskItem.css";
const TaskItem = ({ task, deleteTask, handleChangeStatus }) => {
  const checked = task.status;

  const deletemyTask = () => {
    deleteTask(task.id);
  };
  return (
    <>
      <li class="list-group-item mt-2 d-flex justify-content-between flex-row">
        <input
          onChange={() => handleChangeStatus(task.id)}
          checked={checked}
          class="form-check-input "
          type="checkbox"
          value=""
          aria-label="..."
        />
        <span className="my-auto">{task.title}</span>

        <button onClick={deletemyTask} className="btn btn-danger  ">
          <BsFillTrashFill className="delicon m-1 " />
        </button>
      </li>
    </>
  );
};

export default TaskItem;

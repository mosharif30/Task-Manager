import { BsFillTrashFill } from "react-icons/bs";
import "./TaskItem.css";
const TaskItem = ({ task, deleteTask, handleChangeStatus }) => {
  const checked = task.status;

  const deletemyTask = () => {
    deleteTask(task.id);
  };
  return (
    <>
      <li class="list-group-item mt-2 ">
        <input
          onChange={() => handleChangeStatus(task.id)}
          checked={checked}
          class="form-check-input me-5 "
          type="checkbox"
          value=""
          aria-label="..."
        />
        <span>{task.title}</span>
        <span className="ms-5">
          <button onClick={deletemyTask} className="btn btn-danger ms-5">
            <BsFillTrashFill className="delicon m-1 " />
          </button>
        </span>
      </li>
    </>
  );
};

export default TaskItem;

import { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, deleteTask, handleChangeStatus }) => {
  return (
    <>
      {tasks.length != 0 ? (
        <>
          <ul class="list-group">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                deleteTask={deleteTask}
                task={task}
                handleChangeStatus={handleChangeStatus}
              />
            ))}
          </ul>
        </>
      ) : (
        <>
          <div class="alert alert-danger" role="alert">
            You have nothing to do right now
          </div>
        </>
      )}
    </>
  );
};

export default TaskList;

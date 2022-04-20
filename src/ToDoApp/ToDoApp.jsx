import AddTaskForm from "../AddTaskForm/AddTaskForm";
import TaskList from "../TaskList/TaskList";
import FilterFooter from "../FilterFooter/FilterFooter";
import "./ToDoApp.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { stringify } from "uuid";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const [filter, setFilter] = useState("all");
  const [refresh, setRefresh] = useState([]);

  useEffect(() => {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      storedTasks = JSON.parse(storedTasks);
    }
    setTasks(storedTasks);
  }, []);
  useEffect(() => {
    if (filter === "all") {
      setFilteredTasks(tasks);
    }
    if (filter === "completed") {
      const newCompletedFilteredTasks = tasks.filter((task) => task.status);
      setFilteredTasks(newCompletedFilteredTasks);
    }
    if (filter === "active") {
      const newCompletedFilteredTasks = tasks.filter((task) => !task.status);
      setFilteredTasks(newCompletedFilteredTasks);
    }
  }, [filter, tasks, refresh]);

  const addTask = (tasktitle) => {
    const newTask = [
      ...tasks,
      { id: uuidv4(), title: tasktitle, status: false },
    ];
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
  };
  const deleteTask = (taskId) => {
    let newTasksList = tasks;
    delete newTasksList[tasks.findIndex((task) => task.id === taskId)];
    let filterednewTasksList = newTasksList.filter((item) => item);
    setTasks(filterednewTasksList);
    localStorage.setItem("tasks", JSON.stringify(filterednewTasksList));
  };

  const handleChangeStatus = (taskId) => {
    let newTasksList = tasks;
    let taskIndex = tasks.findIndex((task) => task.id === taskId);
    newTasksList[taskIndex].status = !newTasksList[taskIndex].status;

    setTasks(newTasksList);
    localStorage.setItem("tasks", JSON.stringify(newTasksList));

    setRefresh(refresh + 1);
  };
  return (
    <>
      <div className="ToDoApp">
        <AddTaskForm addTask={addTask}></AddTaskForm>
        <TaskList
          deleteTask={deleteTask}
          tasks={filteredTasks}
          handleChangeStatus={handleChangeStatus}
        ></TaskList>
        <FilterFooter
          updateFilter={setFilter}
          tasks={filteredTasks}
        ></FilterFooter>
      </div>
    </>
  );
};

export default ToDoApp;

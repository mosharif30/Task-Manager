import { useState } from "react";
const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    if (event) {
      event.preventDefault();
      setValue(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value || value === "") {
      return;
    }

    addTask(value);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        class="row g-3 d-flex justify-content-center"
      >
        <div class="col-auto">
          <input
            onChange={handleChange}
            type="text"
            class="form-control "
            id="doInput"
            placeholder="What needs to be done?"
          />
        </div>
        <div class="col-auto">
          <button class="btn btn-primary mb-3">Add</button>
        </div>
      </form>
    </>
  );
};

export default AddTaskForm;

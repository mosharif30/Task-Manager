import { useState } from "react";

const FilterFooter = ({ tasks,updateFilter }) => {
  const [filter, setFilter] = useState("all");
  const handleFilter = (filterName) => {
    setFilter(filterName);
    updateFilter(filterName);
  };
  return (
    <>
      <ul class="list-group list-group-horizontal d-flex justify-content-center mt-2">
        <li class="list-group-item">{tasks.length} Items</li>
        <li class="list-group-item">
          <button
            onClick={() => handleFilter("all")}
            type="button"
            className={
              filter === "all" ? "active btn btn-primary" : " btn btn-secondary"
            }
          >
            All
          </button>
        </li>
        <li class="list-group-item">
          <button
            onClick={() => handleFilter("active")}
            type="button"
            className={
              filter === "active"
                ? "active btn btn-warning"
                : " btn btn-secondary"
            }
          >
            Active
          </button>
        </li>
        <li class="list-group-item">
          <button
            onClick={() => handleFilter("completed")}
            type="button"
            className={
              filter === "completed"
                ? "active btn btn-success"
                : " btn btn-secondary"
            }
          >
            Completed
          </button>
        </li>
      </ul>
    </>
  );
};

export default FilterFooter;

import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      <div className="text-end wd-module-icons">
        <button className="wd-home-gray-btns btn-secondary">
          Collapse All
        </button>
        <button className="wd-home-gray-btns btn-secondary">
          View Progress
        </button>
        <button
          className="btn wd-home-gray-btns dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <i className="bi bi-check-circle"></i>
          Publish All
        </button>
        <button className="wd-add-module-btn">
          <i className="bi bi-plus-lg"></i>
          Module
        </button>
        <button className="wd-home-gray-btns">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
        <hr />
      </div>
      <ul className="list-group wd-list">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              {module.name}
              <p>{module.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;

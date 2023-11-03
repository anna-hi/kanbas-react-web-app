import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import "../.././styles.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
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
      <input
        className="my-3"
        value={module.name}
        onChange={(e) =>
          dispatch(setModule({ ...module, name: e.target.value }))
        }
      />

      <button
        className=" mx-2 float-end wd-home-gray-btns btn-success"
        onClick={() => dispatch(addModule({ ...module, course: courseId }))}
      >
        Add
      </button>
      <button
        className=" float-end wd-home-gray-btns btn-success"
        onClick={() => dispatch(updateModule(module))}
      >
        Update
      </button>

      <br />
      <textarea
        value={module.description}
        onChange={(e) =>
          dispatch(setModule({
            ...module,
            description: e.target.value,
          }))
        }
      />
      <ul className="list-group wd-list">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <button
                className="mx-2 wd-home-gray-btns float-end"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>

              <button
                className="wd-add-module-btn float-end"
                onClick={() => dispatch(deleteModule(module._id))}
              >
                Delete{" "}
              </button>

              {module.name}
              <p>{module.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;

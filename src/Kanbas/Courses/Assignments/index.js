import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <div class="text-nowrap">
        <span class="float-end">
          <button class="wd-home-gray-btns btn-secondary">
            <i className="bi bi-plus-lg"></i>
            Group
          </button>
          <button class="wd-add-module-btn btn-danger">
            <i className="bi bi-plus-lg"></i>
            Assignment
          </button>
          <button class="wd-home-gray-btns">
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </span>
        <input
          class="form-control w-25"
          display="inline"
          placeholder="Search for Assignment"
        />
      </div>
      <hr />
      <div className="list-group wd-list wd-assignment-table">
        <div className="list-group-item list-group-item-secondary py-3">
          <span class="float-end">
            <span
              className="badge wd-badge"
            >
              40% of Total
            </span>
            <i class="fa-solid fa-plus mx-3"></i>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </span>
          <span class="float-start pe-3">
            <i class="fa-solid fa-grip-vertical"></i>
          </span>
          Assignments
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;

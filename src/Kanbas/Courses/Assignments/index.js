import React from "react";
import {useParams, useNavigate } from "react-router-dom";
import {
  addAssignment,
  setAssignment,
  deleteAssignment,
} from "./assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";

function Assignments() {
  const { courseId } = useParams();
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  // const assignments = db.assignments;
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="text-nowrap">
        <span className="float-end">
          <button className="wd-home-gray-btns btn-secondary">
            <i className="bi bi-plus-lg"></i>
            Group
          </button>
          <button
            className="wd-add-module-btn btn-danger"
            onClick={(e) => {
              dispatch(addAssignment({...assignment, course: courseId}));

              navigate(`123`);
            }}
          >
            <i className="bi bi-plus-lg"></i>
            Assignment
          </button>
          <button className="wd-home-gray-btns">
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </span>
        <input
          className="form-control w-25"
          display="inline"
          placeholder="Search for Assignment"
        />
      </div>
      <hr />
      <div className="list-group wd-list wd-assignment-table">
        <div className="list-group-item list-group-item-secondary py-3">
          <span className="float-end">
            <span className="badge wd-badge">40% of Total</span>
            <i className="fa-solid fa-plus mx-3"></i>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </span>
          <span className="float-start pe-3">
            <i className="fa-solid fa-grip-vertical"></i>
          </span>
          Assignments
        </div>
        {courseAssignments.map((assignment) => (
          <div key={assignment._id} className="list-group-item">
            <div className="row">
              <div
                className="col"
                onClick={() => {
                  dispatch(setAssignment(assignment));
                  navigate(
                    `/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`
                  );
                }}
              >
                {assignment.title}
              </div>
              <div
                className="wd-cursor-pointer col-auto"
                onClick={(event) => {
                  dispatch(deleteAssignment(assignment._id));
                }}
              >
                <i className="bi bi-trash"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;

import React from "react";
import { useNavigate, useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { updateAssignment, setAssignment, deleteAssignment } from ".././assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  const { courseId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-end text-nowrap wd-published">
        <i className="bi bi-check-circle" style={{ color: "green" }}></i>
        <label className="pe-2">Published</label>
        <button className="wd-home-gray-btns">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
        <hr />
      </div>
      <label className="pb-2">Assignment Name</label>
      <input
        value={assignment.title}
        onChange={(e) => {
          e.preventDefault();
          dispatch(
            setAssignment({
              ...assignment,
              title: e.target.value,
            })
          );
        }}
        className="form-control mb-2"
      />
      <div className="my-2">
        <textarea
          className="form-control"
          height="100px"
          rows="4"
          value={assignment.description}
          onChange={(e) =>
            dispatch(
              setAssignment({
                ...assignment,
                description: e.target.value,
              })
            )
          }
        />
      </div>
      <div className="container mb-2">
        <div className="row align-items-center">
          <div className="col-sm-3 text-end">Points</div>
          <div className="col-md-7">
            <input className="form-control" type="text" value="100" />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-sm-3 text-end">Assign</div>
          <div className="col-md-7">
            <div className="wd-edit-assignment-form">
              <h5>Assign to</h5>
              <input className="form-control" type="text" value="Everyone" />
              <br />
              <h5>Due</h5>
              <input
                className="form-control"
                type="date"
                id="due"
                value="2023-09-01"
              />
              <div className="row my-3">
                <div className="col">
                  <h5>Available from</h5>
                  <input
                    className="form-control"
                    type="date"
                    id="available-from"
                    value="2023-09-01"
                  />
                </div>
                <div className="col">
                  <h5>Until</h5>
                  <input
                    className="form-control"
                    type="date"
                    id="until"
                    value="2023-09-01"
                  />
                </div>
              </div>
              <div className="d-grid">
                <button className="btn wd-home-gray-btns" type="button">
                  <i className="fa-solid fa-plus"></i>Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="float-end">
        <button
          onClick={() => {
            if (assignmentId === "123") {
              console.log("not saved");
              dispatch(deleteAssignment(assignment._id));
            }
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
          }}
          className="btn wd-save-btn"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            dispatch(updateAssignment(assignment));
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
          }}
          className="btn wd-cancel-btn me-2"
        >
          Save
        </button>
      </span>
    </div>
  );
}

export default AssignmentEditor;

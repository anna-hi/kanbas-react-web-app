import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="text-end text-nowrap wd-published">
        <i className="bi bi-check-circle" style={{ color: "green" }}></i>
        <label className="pe-2">Published</label>
        <button class="wd-home-gray-btns">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
        <hr />
      </div>
      <label className="pb-2">Assignment Name</label>
      <input value={assignment.title} className="form-control mb-2" />
      <span className="float-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn wd-save-btn"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn wd-cancel-btn me-2">
          Save
        </button>
      </span>
    </div>
  );
}

export default AssignmentEditor;

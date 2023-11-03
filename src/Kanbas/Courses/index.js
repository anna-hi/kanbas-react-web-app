import { Navigate, Routes, Route, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ".././styles.css";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses({ courses }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const path = pathname.split("/").splice(4);
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="w-100 px-4">
      <div className="wd-header row">
        <i className="col-auto bi bi-list"></i>
        <div className="col">
          <Breadcrumb style={{ "--bs-breadcrumb-divider": "'>'" }}>
            <Breadcrumb.Item href="#">
              {course.number + 12631.20241}
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" active>{path}</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <hr />
      </div>

      <div className="d-flex">
        <CourseNavigation />
        <div className="w-100">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;

import db from "../../Kanbas/Database";
import { Navigate, Routes, Route, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { FaBars } from "react-icons/fa6";
import ".././styles.css";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className="w-100 px-4">
      <div className="wd-header row">
        <i className="col-auto bi bi-list"></i>
        <div className="col">
          <Breadcrumb style={{ "--bs-breadcrumb-divider": "'>'" }}>
            <Breadcrumb.Item href="#">
              {course.number + 12631.20241}
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
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
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;

import { Link } from "react-router-dom";
import db from "../Database";
import ".././styles.css";
const dbPhoto = "/Kanbas/Dashboard/cobalt-blue.png";
import { React, useState } from "react";

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  return (
    <div className="wd-dashboard-header w-100 px-4">
      <h1 clasName="d-none d-md-block">Dashboard</h1>
      <hr />
      <div className="wd-dashboard">
        <h2>Published Courses(24)</h2>
        <hr />
      </div>
      <div className="d-flex flex-row flex-wrap wd-card-container wd-dashboard">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="col-auto card"
          >
            <img src={dbPhoto} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title wd-card">
                {course.number + " " + course.name}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                {course.number + 12631.20241}
              </h6>
              <p className="card-text text-muted wd-card-subtext">
                202410_1 Fall 2023 Semester Full Term
              </p>
              <i className="bi bi-journal-text wd-card-icon"></i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;

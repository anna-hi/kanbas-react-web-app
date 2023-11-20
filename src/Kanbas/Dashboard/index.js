import { Link } from "react-router-dom";
import ".././styles.css";
import { React, useState, useEffect} from "react";
import * as client from "../Courses/client";
const dbPhoto = "/Kanbas/Dashboard/cobalt-blue.png";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const init = async () => {
    const courses = await client.fetchCourses();
    setCourses(courses);
  };

  useEffect(() => {
    init();
  }, []);

  const deleteCourse = async (courseId) => {
    try {
      await client.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.log(error);
    }
  };

  const addNewCourse = async () => {
    const newCourse = await client.addCourse(course);
    setCourses([...courses, newCourse]);
  };
  const updateCourse = async () => {
    try {
      const status = await client.updateCourse(course);
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="wd-dashboard-header w-100 px-4">
      <h1 clasName="d-none d-md-block">Dashboard</h1>
      <hr />
      <div className="wd-dashboard">
        <h2>Published Courses(24)</h2>
        <hr />
        <h5>Course</h5>
        <input
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />

        <input
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <div class="text-nowrap">
          <span class="float-end">
            <button
              class="wd-home-gray-btns btn-secondary"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              class="wd-home-gray-btns btn-secondary"
              onClick={updateCourse}
            >
              Update
            </button>
          </span>
        </div>
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
              <i className="bi bi-journal-text wd-card-icon pr-3"></i>
              <button
                class="wd-home-gray-btns btn-secondary"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
              >
                Edit
              </button>
              <button
                class="wd-home-gray-btns btn-secondary"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}
              >
                Delete
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;

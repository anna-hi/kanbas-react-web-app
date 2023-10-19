import ModuleList from "../Modules/ModuleList";
import "../.././styles.css";
import { HiOutlineBan } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Home() {
  return (
    <div className="row">
      <div className="col">
        <ModuleList />
      </div>
      <div class="col-auto wd-columns d-none d-xl-block">
        Course Status
        <div
          class="btn-toolbar py-2"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div
            class="btn-group mr-2 wd-module-icons"
            role="group"
            aria-label="First group"
          >
            <button type="button" class="btn btn-secondary wd-home-gray-btns">
              <i class="bi bi-check-circle"></i>Unpublish
            </button>
            <button type="button" class="btn btn-success">
              <i class="bi bi-ban"></i>
              Publish
            </button>
          </div>
        </div>
        <div class="d-grid py-2 wd-side-btns">
          <button
            type="button"
            class="btn btn-secondary wd-home-gray-btns mb-1"
          >
            <i class="bi bi-file-earmark-arrow-up-fill"></i> Import Existing
            Content
          </button>
          <button
            type="button"
            class="btn btn-secondary wd-home-gray-btns mb-1"
          >
            <i class="bi bi-box-arrow-right"></i> Import from Commons
          </button>
          <button
            type="button"
            class="btn btn-secondary wd-home-gray-btns mb-1"
          >
            <i class="bi bi-crosshair"></i> Choose Home Page
          </button>
          <button
            type="button"
            class="btn btn-secondary wd-home-gray-btns mb-1"
          >
            <i class="bi bi-bar-chart-fill"></i> View Course Stream
          </button>
          <button
            type="button"
            class="btn btn-secondary wd-home-gray-btns mb-1"
          >
            <i class="bi bi-megaphone-fill"></i> New Announcement
          </button>
          <button
            type="button"
            class="btn btn-secondary wd-home-gray-btns mb-1"
          >
            <i class="bi bi-bar-chart-fill"></i> New Analytics
          </button>
          <button
            type="button"
            class="btn btn-secondary wd-home-gray-btns mb-1"
          >
            <i class="bi bi-bell"></i> View Course Notifications
          </button>
        </div>
        <div class="wd-home-headers">
          <h2>To Do</h2>
        </div>
        <div class="wd-action-lists">
          <ul>
            <li>
              <a href="#" style={{}}>
                Grade A1 - ENV + HTML
              </a>
              <br />
              <label>100 points - Sep 18 at 11:59pm</label>
            </li>
          </ul>
        </div>
        <div className="wd-home-headers">
          <h2>Coming Up</h2>
        </div>
        <div class="wd-action-lists">
          <ul>
            <li>
              <a href="#">Lecture</a>
              <br />
              <label>CS45510.12631.202410</label>
              <br />
              <label>Sep 11 at 11:45am</label>
            </li>
            <li>
              <a href="#">CS5610 06 SP23 Lecture</a>
              <br />
              <label>CS45510.12631.202410</label>
              <br />
              <label>Sep 11 at 6pm</label>
            </li>
            <li>
              <a href="#">
                CS5610 Web Development <br />
                Summer 1 2023 - LECTURE
              </a>
              <br />
              <label>CS45510.12631.202410</label>
              <br />
              <label>Sep 11 at 7pm</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Home;

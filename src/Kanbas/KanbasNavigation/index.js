import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ".././styles.css";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [
    <i className="bi bi-person-circle text-white"></i>,
    <i className="bi bi-speedometer2"></i>,
    <i className="bi bi-journals"></i>,
    <i className="bi bi-calendar-week"></i>,
    <i className="bi bi-envelope-open"></i>,
    <i className="bi bi-clock"></i>,
    <i className="bi bi-play-btn"></i>,
    <i className="bi bi-arrow-right-circle"></i>,
    <i className="bi bi-question-circle"></i>,
  ];
  const { pathname } = useLocation();
  const logo = '/Kanbas/NU-logo.png';
  return (
    <>
      <div className="wd-kanbas-navigator d-none d-md-block" style={{ width: 85 }}>
        <img src= {logo} alt="NU Logo" width="75px" />
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}
          >
            {icons.at(index)} <br/>
            {link}
          </Link>
        ))}
      </div>
    </>
  );
}
export default KanbasNavigation;

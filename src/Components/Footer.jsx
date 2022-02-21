/* eslint-disable jsx-a11y/anchor-is-valid */
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mt-auto">
      <div className="col-md-4 d-flex align-items-center">
        <span className="text-muted">
          © {new Date().getFullYear()} Miguel Bermeo
        </span>
      </div>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a
            href="https://github.com/Migu3lB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
          >
            <span>
              <i className="bi bi-github"></i>
            </span>
          </a>
        </li>
        <li className="ms-3">
          <a
            href="https://www.linkedin.com/in/miguel-angel-bermeo-otavo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
          >
            <span>
              <i className="bi bi-linkedin"></i>
            </span>
          </a>
        </li>
      </ul>
    </footer>
  );
}

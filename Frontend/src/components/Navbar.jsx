
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (location.pathname === "/" && sectionId) {
      const timer = setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        navigate("/", { replace: true, state: null });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <Link
          className="navbar-brand brand fs-3 fw-bold text-wf d-flex align-items-center"
          to="/"
        >
          <img
            src={logo}
            alt="Wedora Logo"
            width="40"
            height="40"
            className="rounded-circle me-2"
            style={{ objectFit: "cover" }}
          />
          Wedora
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="nav-link border-0 bg-transparent"
                onClick={() => handleSectionClick("services")}
              >
                Services
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="nav-link border-0 bg-transparent"
                onClick={() => handleSectionClick("features")}
              >
                Features
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="nav-link border-0 bg-transparent"
                onClick={() => handleSectionClick("how-it-works")}
              >
                How It Works
              </button>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/vendors">
                Vendors
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <Link to="/login" className="btn btn-outline-wf">
              Login
            </Link>

            <Link to="/register" className="btn btn-wf">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
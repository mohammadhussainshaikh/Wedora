import { Link } from "react-router-dom";
import weddingVideo from "../assets/videos/herosection.mp4";
import "../Styles/hero.css";

export default function Hero() {
  return (
    <section className="hero text-white">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={weddingVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="row align-items-center g-5">
          {/* Left: headline */}
          <div className="col-lg-6">
            <span className="badge badge-gold rounded-pill px-3 py-2 mb-3">
              <i className="bi bi-stars me-1"></i> All-in-one wedding planning
            </span>
            <h1 className="display-4 fw-bold mb-3">
              Plan your dream wedding,{" "}
              <span className="text-gold">without the chaos.</span>
            </h1>
            <p className="lead mb-4 opacity-75">
              Manage events, vendors, guests, budget and schedules from one
              place. Book trusted vendors and track every rupee.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/register" className="btn btn-gold btn-lg px-4">
                Start Planning
              </Link>
              <Link to="/vendors" className="btn btn-outline-light btn-lg px-4">
                Find Vendors
              </Link>
            </div>
          </div>

          {/* Right: sample dashboard card */}
          <div className="col-lg-6">
            <div className="card shadow-lg border-0 rounded-4 text-dark">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Ammu &amp; Hazzyy</h5>
                  <span className="badge bg-success">20 Nov 2026</span>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between small mb-1">
                    <span>Budget used</span>
                    <span>₹6.2L / ₹10L</span>
                  </div>
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar bg-wf"
                      style={{ width: "62%" }}
                    ></div>
                  </div>
                </div>

                <div className="row text-center g-2">
                  <div className="col-4">
                    <div className="bg-cream rounded-3 p-3">
                      <div className="fs-4 fw-bold text-wf">325</div>
                      <div className="small text-muted">RSVPs</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="bg-cream rounded-3 p-3">
                      <div className="fs-4 fw-bold text-wf">11</div>
                      <div className="small text-muted">Vendors</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="bg-cream rounded-3 p-3">
                      <div className="fs-4 fw-bold text-wf">41/52</div>
                      <div className="small text-muted">Tasks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

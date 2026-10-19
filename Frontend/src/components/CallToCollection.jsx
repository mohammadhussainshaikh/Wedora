import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <section className="section bg-wf text-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-3">Ready to start planning?</h2>
        <p className="mb-4 opacity-75">
          Join couples and vendors who are already planning smarter with WedFlow.
        </p>
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <Link to="/register" className="btn btn-gold btn-lg px-4">I'm a Couple</Link>
          <Link to="/register" className="btn btn-outline-light btn-lg px-4">I'm a Vendor</Link>
        </div>
      </div>
    </section>
  )
}
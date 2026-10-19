import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-5" style={{ background: 'var(--wf-dark)', color: '#ddd' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5">
            <h4 className="brand text-white">
              <i className="bi bi-heart-fill text-gold me-2"></i>Wedora
            </h4>
            <p className="small">
              A smart wedding management platform for couples, families,
              planners and vendors.
            </p>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="text-white">Platform</h6>
            <ul className="list-unstyled small">
              <li><Link to="/vendors" className="footer-link">Find Vendors</Link></li>
              <li><Link to="/register" className="footer-link">Create Wedding</Link></li>
              <li><Link to="/login" className="footer-link">Login</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <h6 className="text-white">Contact</h6>
            <ul className="list-unstyled small">
              <li><i className="bi bi-envelope me-2"></i>support@wedora.com</li>
              <li><i className="bi bi-geo-alt me-2"></i>Hubballi, Karnataka</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary mt-4" />
        <p className="text-center small mb-0">
          © {new Date().getFullYear()} Wedora. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
import { Link } from 'react-router-dom'
import '../Styles/Services.css'
const services = [
  { slug: 'mehndi', icon: 'bi-flower1', tone: 'rose',
    title: 'Mehndi artists', text: 'Beautiful details for your special celebrations.' },
  { slug: 'photography', icon: 'bi-camera', tone: 'sand',
    title: 'Photography', text: 'Find the people who capture every feeling.' },
  { slug: 'makeup', icon: 'bi-stars', tone: 'lavender',
    title: 'Makeup artists', text: 'Discover your look for every wedding event.' },
  { slug: 'decor', icon: 'bi-balloon-heart', tone: 'sage',
    title: 'Decor & flowers', text: 'Bring your dream setting to life.' },
  { slug: 'catering', icon: 'bi-cup-hot', tone: 'sand',
    title: 'Catering', text: 'Thoughtful menus for everyone at your table.' },
  { slug: 'venues', icon: 'bi-building', tone: 'rose',
    title: 'Venues', text: 'Find a space that feels like your celebration.' },
]

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">

        {/* Heading row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5">
          <h2 className="services-heading mb-0">
            Find the people who make <br className="d-none d-md-block" />
            <span className="services-accent">the magic happen.</span>
          </h2>
          <Link to="/vendors" className="services-explore">
            Explore all services <i className="bi bi-arrow-up-right ms-2"></i>
          </Link>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {services.map((s) => (
            <div className="col-md-6 col-lg-4" key={s.slug}>
              <div className="service-card">
                <div className={`service-icon tone-${s.tone}`}>
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link to={`/vendors?category=${s.slug}`} className="service-link">
                  Find a service <i className="bi bi-arrow-up-right ms-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
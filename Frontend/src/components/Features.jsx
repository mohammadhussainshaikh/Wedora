const features = [
  { icon: 'bi-calendar-event', title: 'Event Management',
    text: 'Create Mehndi, Haldi, Sangeet, Wedding and Reception, each with its own venue, timing and budget.' },
  { icon: 'bi-shop', title: 'Vendor Booking',
    text: 'Search vendors by category, city and budget, check availability and book without double-booking.' },
  { icon: 'bi-people', title: 'Guests & RSVP',
    text: 'Manage guest lists, send invitations and track who is coming, with food preferences.' },
  { icon: 'bi-wallet2', title: 'Budget & Payments',
    text: 'Set category budgets, track advances and balances and see what is committed versus paid.' },
  { icon: 'bi-check2-square', title: 'Tasks & Schedule',
    text: 'Assign tasks to family or planners and build minute-by-minute timelines for every event.' },
  { icon: 'bi-bus-front', title: 'Stay & Travel',
    text: 'Allocate hotel rooms and arrange pickups so every guest arrives comfortably.' },
]

export default function Features() {
  return (
    <section id="features" className="section bg-cream">
      <div className="container text-center">
        <h2 className="section-title">Everything your wedding needs</h2>
        <p className="section-sub">
          One platform replaces spreadsheets, notebooks and endless WhatsApp groups.
        </p>

        <div className="row g-4">
          {features.map((f) => (
            <div className="col-md-6 col-lg-4" key={f.title}>
              <div className="card feature-card h-100 shadow-sm text-start">
                <div className="card-body p-4">
                  <div className="icon-circle mb-3">
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <h5 className="fw-bold">{f.title}</h5>
                  <p className="text-muted mb-0">{f.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
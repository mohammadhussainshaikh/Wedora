const steps = [
  { title: 'Create your wedding', text: 'Add names, date, city, budget and expected guests.' },
  { title: 'Add your events', text: 'Set up each function with venue, time and guest count.' },
  { title: 'Book vendors', text: 'Compare packages, check dates and send booking requests.' },
  { title: 'Manage and celebrate', text: 'Track RSVPs, payments and tasks until the big day.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container text-center">
        <h2 className="section-title">How Wedora works</h2>
        <p className="section-sub">From first idea to final farewell in four simple steps.</p>

        <div className="row g-4">
          {steps.map((s, index) => (
            <div className="col-md-6 col-lg-3" key={s.title}>
              <div className="step-number">{index + 1}</div>
              <h5 className="fw-bold">{s.title}</h5>
              <p className="text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
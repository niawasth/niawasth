import './CTA.css'

function CTA() {
  return (
    <section className="cta">
      <div className="cta__bg">
        <div className="cta__orb cta__orb--1" />
        <div className="cta__orb cta__orb--2" />
      </div>
      <div className="container cta__inner">
        <div className="cta__content">
          <h2>Ready to Speak With a Mortgage Broker?</h2>
          <p>
            Our mortgage brokers are ready to help you find the best home loan deal in Australia.
            Book a free, no-obligation consultation today — it takes less than 2 minutes.
          </p>
          <div className="cta__actions">
            <a href="#contact" className="btn btn-primary">
              Book Free Broker Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="cta__note">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>No fees, no obligation, no credit check</span>
            </div>
          </div>
        </div>
        <div className="cta__stats">
          <div className="cta__stat-card">
            <strong>2 min</strong>
            <span>Average enquiry time</span>
          </div>
          <div className="cta__stat-card">
            <strong>24 hrs</strong>
            <span>Pre-approval turnaround</span>
          </div>
          <div className="cta__stat-card">
            <strong>$0</strong>
            <span>Mortgage broker fee</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

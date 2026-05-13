import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__mesh" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Australia's #1 Digital Mortgage Broker
          </div>
          <h1>
            Your Trusted <span className="hero__highlight">Mortgage Broker</span> for Every Stage of Life
          </h1>
          <p>
            As experienced mortgage brokers, we compare thousands of home loan products from 40+ Australian
            lenders to secure the best deal for you. Expert mortgage broker advice, cutting-edge technology, zero stress.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              Speak to a Mortgage Broker
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className="btn btn-outline">
              Our Broker Services
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>500+</strong>
              <span>Home Loans Settled</span>
            </div>
            <div className="hero__stat">
              <strong>98%</strong>
              <span>Approval Rate</span>
            </div>
            <div className="hero__stat">
              <strong>4.9★</strong>
              <span>Google Rating</span>
            </div>
            <div className="hero__stat">
              <strong>$0</strong>
              <span>Broker Fee to You</span>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__card hero__card--main">
            <div className="hero__card-header">
              <span className="hero__card-dot hero__card-dot--green" />
              <span>Mortgage Broker Dashboard</span>
            </div>
            <div className="hero__card-body">
              <div className="hero__card-rate">
                <span className="hero__card-label">Best Rate Found</span>
                <span className="hero__card-value">5.89%</span>
                <span className="hero__card-comparison">vs avg 6.45%</span>
              </div>
              <div className="hero__card-savings">
                <span className="hero__card-label">Your Monthly Savings</span>
                <span className="hero__card-value hero__card-value--green">$387</span>
              </div>
            </div>
          </div>
          <div className="hero__card hero__card--float">
            <span className="hero__card-icon">✓</span>
            <span>Pre-approval in 24hrs</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

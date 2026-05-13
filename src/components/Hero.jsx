import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const [loanAmount, setLoanAmount] = useState(650000)
  const [savings, setSavings] = useState({ monthly: 0, total: 0, rate: 0 })

  useEffect(() => {
    // Simulated savings calculation
    const avgBankRate = 6.45
    const brokerRate = 5.89
    const diff = avgBankRate - brokerRate
    const monthlyPaymentDiff = Math.round((loanAmount * (diff / 100)) / 12)
    const totalSavings = monthlyPaymentDiff * 30 * 12
    setSavings({ monthly: monthlyPaymentDiff, total: totalSavings, rate: brokerRate })
  }, [loanAmount])

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
              <strong>40+</strong>
              <span>Lender Partners</span>
            </div>
            <div className="hero__stat">
              <strong>$0</strong>
              <span>Broker Fee to You</span>
            </div>
            <div className="hero__stat">
              <strong>24hr</strong>
              <span>Pre-Approval</span>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__calculator">
            <div className="hero__calc-header">
              <div className="hero__calc-dot" />
              <span>Instant Savings Estimator</span>
            </div>
            <div className="hero__calc-body">
              <label className="hero__calc-label">
                Your Loan Amount
                <span className="hero__calc-amount">${loanAmount.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="200000"
                max="1500000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="hero__calc-slider"
              />
              <div className="hero__calc-range">
                <span>$200k</span>
                <span>$1.5M</span>
              </div>
              <div className="hero__calc-results">
                <div className="hero__calc-result">
                  <span className="hero__calc-result-label">Our Broker Rate</span>
                  <span className="hero__calc-result-value">{savings.rate}%</span>
                  <span className="hero__calc-result-sub">vs avg 6.45%</span>
                </div>
                <div className="hero__calc-result hero__calc-result--highlight">
                  <span className="hero__calc-result-label">You Could Save</span>
                  <span className="hero__calc-result-value hero__calc-result-value--green">
                    ${savings.monthly.toLocaleString()}/mo
                  </span>
                  <span className="hero__calc-result-sub">
                    ${savings.total.toLocaleString()} over 30 years
                  </span>
                </div>
              </div>
              <a href="#contact" className="hero__calc-cta">
                Get Your Personalised Rate
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
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

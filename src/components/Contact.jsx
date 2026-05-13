import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact Us</span>
          <h2>Talk to a Mortgage Broker Today</h2>
          <p>Ready to find your perfect home loan? Our mortgage brokers offer free, no-obligation consultations.</p>
        </div>
        <div className="contact__grid">
          <div className="contact__form-wrapper">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>A mortgage broker from our team will be in touch within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com.au"
                    />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0412 345 678"
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="service">What do you need a mortgage broker for?</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option value="first-home">First Home Purchase</option>
                      <option value="refinance">Refinancing</option>
                      <option value="investment">Investment Property</option>
                      <option value="construction">Construction Loan</option>
                      <option value="commercial">Commercial Loan</option>
                      <option value="pre-approval">Pre-Approval Only</option>
                    </select>
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Tell your mortgage broker more</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="E.g. I'm looking to buy my first home in Sydney around $800k..."
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Request Mortgage Broker Callback
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <p className="contact__form-note">
                  Your mortgage broker will call you within 24 hours. No spam, no obligation.
                </p>
              </form>
            )}
          </div>
          <div className="contact__info">
            <div className="contact__info-card">
              <h3 className="contact__info-title">Our Mortgage Broker Office</h3>
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <strong>Call a Mortgage Broker</strong>
                  <p>+61 494 041 739</p>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <p>nitin@snsnfintech.com.au</p>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div>
                  <strong>Broker Availability</strong>
                  <p>Mon–Fri: 9am – 5:30pm AEST<br/>Sat: 9am – 1pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

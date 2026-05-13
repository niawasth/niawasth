import './About.css'

const features = [
  { label: 'Whole-of-market access', desc: '40+ lenders' },
  { label: 'ASIC regulated', desc: 'ACL holder' },
  { label: 'No broker fees', desc: 'We get paid by the lender' },
  { label: 'Digital-first process', desc: 'Apply from anywhere' },
  { label: 'Dedicated mortgage broker', desc: 'One point of contact' },
  { label: 'Fast pre-approval', desc: 'Within 24 hours' },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="section-tag">Why Choose Our Mortgage Brokers</span>
            <h2>Australia's Modern Mortgage Broker</h2>
            <p className="about__lead">
              SNSN Fintech is a next-generation mortgage brokerage that combines deep financial expertise
              with cutting-edge technology. Our mortgage brokers deliver a home loan experience that's
              faster, smarter, and more transparent than going direct to a bank.
            </p>
            <p>
              Unlike a single bank, our mortgage brokers have access to thousands of products from over
              40 Australian lenders. We work for you — not the banks — ensuring you always get the best deal.
            </p>
            <div className="about__features">
              {features.map((feature, index) => (
                <div className="about__feature" key={index}>
                  <div className="about__feature-icon">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong>{feature.label}</strong>
                    <span>{feature.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about__visual">
            <div className="about__bento">
              <div className="about__bento-item about__bento-item--large">
                <strong>40+</strong>
                <span>Australian Lenders on Our Panel</span>
              </div>
              <div className="about__bento-item">
                <strong>24hr</strong>
                <span>Pre-Approval</span>
              </div>
              <div className="about__bento-item">
                <strong>$0</strong>
                <span>Broker Fee to You</span>
              </div>
              <div className="about__bento-item about__bento-item--accent">
                <strong>100%</strong>
                <span>Independent & Unbiased</span>
              </div>
              <div className="about__bento-item">
                <strong>5★</strong>
                <span>Service Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

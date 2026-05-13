import './Services.css'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    title: 'First Home Buyer Mortgage Broker',
    description: 'Our mortgage brokers guide first home buyers through the entire process — from grants and stamp duty concessions to finding the lowest rates.',
    tag: 'Most Popular',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23,4 23,10 17,10"/>
        <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
      </svg>
    ),
    title: 'Refinance Mortgage Broker',
    description: 'Our mortgage brokers help you switch to a better deal. We negotiate with lenders on your behalf to secure lower rates and better loan features.',
    tag: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: 'Investment Property Broker',
    description: 'Specialist mortgage broker advice for property investors. We structure loans to maximise tax benefits and grow your portfolio strategically.',
    tag: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'Construction Loan Broker',
    description: 'Building your dream home? Our mortgage brokers arrange construction loans with progressive drawdowns tailored to your build timeline.',
    tag: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    title: 'Commercial Mortgage Broker',
    description: 'Financing solutions for offices, retail, and industrial properties. Our commercial mortgage brokers tailor solutions to your business needs.',
    tag: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Insurance & Protection',
    description: 'Safeguard your family and home with life insurance, income protection, and home & contents cover — arranged alongside your mortgage.',
    tag: null,
  },
]

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Mortgage Broker Services</span>
          <h2>What Our Mortgage Brokers Do For You</h2>
          <p>Comprehensive mortgage broker services powered by technology and delivered with a personal touch across Australia</p>
        </div>
        <div className="services__grid">
          {services.map((service, index) => (
            <div className="services__card" key={index}>
              {service.tag && <span className="services__tag">{service.tag}</span>}
              <div className="services__icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="btn-ghost">
                Learn more
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

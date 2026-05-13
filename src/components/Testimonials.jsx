import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah & James W.',
    role: 'First Home Buyers, Sydney',
    text: 'Our mortgage broker at SNSN Fintech made buying our first home completely stress-free. They helped us access the First Home Owner Grant and found a rate we never thought possible.',
    rating: 5,
  },
  {
    name: 'Michael T.',
    role: 'Refinance Client, Melbourne',
    text: 'Saved over $400 per month by refinancing through our SNSN mortgage broker. The process was incredibly smooth and their digital tools made everything transparent.',
    rating: 5,
  },
  {
    name: 'Priya K.',
    role: 'Property Investor, Brisbane',
    text: 'Professional, knowledgeable mortgage brokers who are always available. They helped me structure the financing for my third investment property with ease.',
    rating: 5,
  },
  {
    name: 'David & Lisa M.',
    role: 'Upgraders, Perth',
    text: 'We needed a mortgage broker who understood our complex situation — selling and buying simultaneously. SNSN handled everything seamlessly and saved us $12,000 over the loan term.',
    rating: 5,
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Reviews</span>
          <h2>What Clients Say About Our Mortgage Brokers</h2>
          <p>Real stories from Australians whose mortgage brokers found them a better deal</p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t, index) => (
            <div className="testimonials__card" key={index}>
              <div className="testimonials__stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonials__text">"{t.text}"</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

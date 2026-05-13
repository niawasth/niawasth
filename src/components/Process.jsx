import './Process.css'

const steps = [
  {
    number: 1,
    title: 'Free Broker Consultation',
    description: 'Chat with one of our mortgage brokers about your goals — in person, phone, or video call. No obligation.',
    icon: '💬',
  },
  {
    number: 2,
    title: 'Broker Compares Lenders',
    description: 'Your mortgage broker searches thousands of products across 40+ lenders to find your best options.',
    icon: '🔍',
  },
  {
    number: 3,
    title: 'Broker Lodges Application',
    description: 'Your mortgage broker handles all paperwork and lodges your application, liaising with the lender on your behalf.',
    icon: '📋',
  },
  {
    number: 4,
    title: 'Settlement Day',
    description: 'Your mortgage broker guides you through to settlement. Congratulations — you\u2019re a homeowner!',
    icon: '🎉',
  },
]

function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2>Your Mortgage Broker Journey</h2>
          <p>Working with a mortgage broker is simple. Here's what to expect in four easy steps.</p>
        </div>
        <div className="process__steps">
          {steps.map((step, index) => (
            <div className="process__step" key={step.number}>
              <div className="process__step-top">
                <div className="process__number">{step.icon}</div>
                {index < steps.length - 1 && <div className="process__connector" />}
              </div>
              <div className="process__step-content">
                <span className="process__step-label">Step {step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

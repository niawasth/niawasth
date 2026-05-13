import './TrustBar.css'

const lenders = [
  'Commonwealth Bank',
  'Westpac',
  'ANZ',
  'NAB',
  'Macquarie',
  'ING',
  'Bankwest',
  'Suncorp',
  'St. George',
  'Bank of Melbourne',
  'Pepper Money',
  'Liberty Financial',
]

function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container">
        <p className="trust-bar__label">
          Our mortgage brokers compare rates from Australia's leading lenders
        </p>
      </div>
      <div className="trust-bar__marquee">
        <div className="trust-bar__track">
          {[...lenders, ...lenders].map((lender, i) => (
            <div className="trust-bar__item" key={i}>
              <span>{lender}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar

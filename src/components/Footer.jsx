import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <img
                src={`${import.meta.env.BASE_URL}logo.svg`}
                alt="SNSN Fintech - Mortgage Brokers"
                className="footer__logo-img"
              />
            </a>
            <p>
              Australia's trusted mortgage broker, combining financial expertise with modern technology
              to help Australians find the best home loan deals.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          <div className="footer__links">
            <h4>Mortgage Broker Services</h4>
            <ul>
              <li><a href="#services">First Home Buyer Broker</a></li>
              <li><a href="#services">Refinance Broker</a></li>
              <li><a href="#services">Investment Loan Broker</a></li>
              <li><a href="#services">Construction Loan Broker</a></li>
              <li><a href="#services">Commercial Mortgage Broker</a></li>
            </ul>
          </div>
          <div className="footer__links">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Our Brokers</a></li>
              <li><a href="#process">How It Works</a></li>
              <li><a href="#contact">Contact a Broker</a></li>
            </ul>
          </div>
          <div className="footer__links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Credit Guide</a></li>
              <li><a href="#">Complaints</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2026 SNSN Fintech Pty Ltd. All rights reserved. ABN 12 345 678 901.</p>
          <p className="footer__disclaimer">
            SNSN Fintech Pty Ltd is an authorised mortgage broker holding an Australian Credit Licence (ACL) issued by ASIC.
            Based in Melbourne, serving clients Australia-wide.
            Credit Representative Number 123456. This page provides general information only and
            does not constitute financial advice. Full credit guide and terms available on request.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

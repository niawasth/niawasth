import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

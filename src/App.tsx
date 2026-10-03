import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import Why from './components/Why'
import Reviews from './components/Reviews'
import About from './components/About'
import FinalCta from './components/FinalCta'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Ticker from './components/Ticker'
import MobileBar from './components/MobileBar'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <BeforeAfter />
        <Why />
        <Reviews />
        <About />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}

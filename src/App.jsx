import Faq from './sections/Faq'
import Features from './sections/Features'
import Footer from './sections/Footer'
import Header from './sections/header'
import Hero from './sections/hero'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermsOfUse from './components/TermsOfUse'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ScrollTop from './components/ScrollTop.jsx'
import { useEffect } from 'react'

const ScrollToHash = ({ headerHeight = 96 }) => {
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '')
            const element = document.getElementById(id)
            if (element) {
                const offsetPosition = element.offsetTop - headerHeight
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                })
            }
        }
    }, [location.hash, headerHeight])

    return null
}

const App = () => {
    return (
        <Router>
            <ScrollTop />
            <ScrollToHash headerHeight={96} />
            <main className="overflow-hidden">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {/* *** IMPORTANT: ADD 'id' ATTRIBUTES TO YOUR SECTIONS *** */}
                                <section id="hero">
                                    {' '}
                                    {/* Or add id to your Hero component directly if it's its root element */}
                                    <Hero />
                                </section>
                                <section id="services">
                                    {' '}
                                    {/* Matches NavLink title="services" */}
                                    <Features />
                                </section>
                                <section id="pricing">
                                    {' '}
                                    {/* Matches NavLink title="pricing" */}
                                    <Pricing />
                                </section>
                                <section id="faq">
                                    {' '}
                                    {/* Matches NavLink title="faq" */}
                                    <Faq />
                                </section>
                                <section id="testimonials">
                                    {' '}
                                    {/* Matches NavLink title="testimonials" */}
                                    <Testimonials />
                                </section>
                            </>
                        }
                    />

                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                </Routes>
                <Footer />
            </main>
        </Router>
    )
}

export default App

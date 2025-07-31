// src/components/NotFoundPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        // Main container: Full screen, dark gradient, padding for header, overflow hidden
        // animate-pageIn: Custom animation for the entire page entry
        <section className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-gray-950 to-gray-800 text-white font-sans flex flex-col items-center justify-center relative overflow-hidden animate-pageIn">
            {/* Background glowing particles/shapes (pure CSS) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
                <div className="particle particle-5"></div>
            </div>

            {/* --- NEW: Floating Abstract Anomaly --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 anomaly"></div>
            {/* --- END NEW --- */}

            {/* Main content wrapper */}
            <div className="relative z-10 text-center px-6 lg:px-8 max-w-2xl mx-auto">
                {/* The "404" numbers with individual animations */}
                <div className="flex justify-center items-center mb-8">
                    <span className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-glitch-1 drop-shadow-lg">4</span>
                    <span className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 animate-pulse-slow mx-4 drop-shadow-lg">0</span>
                    <span className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-glitch-2 drop-shadow-lg">4</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fadeInUp">Lost in the Digital Cosmos?</h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-fadeInUp delay-100">
                    It seems you've ventured into uncharted digital territory. While we specialize in navigating the web, this page appears to be beyond our current map.
                </p>

                {/* Call to Action Button */}
                <Link
                    to="/"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:from-purple-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 animate-bounceIn delay-200">
                    Return to Mission Control
                    <svg className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </section>
    )
}

export default NotFoundPage

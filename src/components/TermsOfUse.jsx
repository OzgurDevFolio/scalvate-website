const TermsOfUse = () => {
    return (
        <section className="min-h-screen mt-20 pt-24 pb-12 text-white font-sans overflow-hidden animate-fadeInUp">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                    Terms of Our Partnership
                </h1>

                <p className="text-sm text-gray-400 text-center mb-12 italic">Last Updated: July 30, 2025</p>

                <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 mb-10 shadow-lg border border-gray-700">
                    <h2 className="text-3xl font-bold mb-4 text-purple-300">1. Acceptance of Terms</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        By accessing, Browse, or utilizing the Scalvate website and our comprehensive digital marketing services, you acknowledge and agree to be legally bound by these Terms of Use.
                        Your engagement signifies your full acceptance of these terms and conditions.
                    </p>
                </div>

                <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 mb-10 shadow-lg border border-gray-700">
                    <h2 className="text-3xl font-bold mb-4 text-purple-300">2. Description of Services</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Scalvate provides cutting-edge digital marketing solutions, including but not limited to SEO & Organic Growth, Paid Advertising Management, Expert Copywriting, and Strategic
                        Email Marketing. Our services are tailored to your specific goals and are delivered under a clear 3-month or 1-year contract framework.
                    </p>
                </div>

                <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 mb-10 shadow-lg border border-gray-700">
                    <h2 className="text-3xl font-bold mb-4 text-purple-300">3. User Obligations</h2>
                    <p className="text-lg leading-relaxed mb-4">As a user or client, you agree to:</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                        <li>Provide accurate and complete information when engaging with Scalvate.</li>
                        <li>Refrain from any unlawful or prohibited activities on our website.</li>
                        <li>Respect our intellectual property and that of third parties.</li>
                    </ul>
                </div>

                <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 shadow-lg border border-gray-700 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-purple-300">Questions about these Terms?</h2>
                    <p className="text-lg leading-relaxed mb-6">Your understanding is important to us. For any clarifications or inquiries regarding our Terms of Use, please reach out to our team.</p>
                    <a
                        href="mailto:ozgur@scalvate.com"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:from-purple-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                        Get in Touch
                        <svg className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default TermsOfUse

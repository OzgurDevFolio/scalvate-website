const PrivacyPolicy = () => {
    return (
        <section className="min-h-screen mt-20 pt-24 pb-12 text-white font-sans overflow-hidden animate-fadeInUp">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Your Privacy. Our Priority.
                </h1>

                <p className="text-sm text-gray-400 text-center mb-12 italic">Last Updated: July 30, 2025</p>
                <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 mb-10 shadow-lg border border-gray-700">
                    <h2 className="text-3xl font-bold mb-4 text-blue-300">1. Introduction to Our Commitment</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        At Scalvate, your trust is paramount. This Privacy Policy details how we meticulously collect, utilize, safeguard, and disclose your personal information when you engage with
                        our website and digital marketing services. Our commitment extends beyond compliance; it’s about ensuring your peace of mind.
                    </p>
                </div>
                <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 mb-10 shadow-lg border border-gray-700">
                    <h2 className="text-3xl font-bold mb-4 text-blue-300">2. Information We Collect & Why</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        We collect data to power your growth. This includes information you provide directly (e.g., contact details through forms) and data gathered automatically (e.g., IP address,
                        Browse activity via cookies and analytics). This enables us to tailor our strategies, enhance your experience, and deliver measurable results.
                    </p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                        <li>**Personal Identifiers:** Names, email addresses, phone numbers, company details.</li>
                        <li>**Usage Data:** IP addresses, browser types, page views, time spent, interaction patterns.</li>
                        <li>**Communication Data:** Records of your inquiries and our responses.</li>
                    </ul>
                </div>
                <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 mb-10 shadow-lg border border-gray-700">
                    <h2 className="text-3xl font-bold mb-4 text-blue-300">3. How Your Information Is Used</h2>
                    <p className="text-lg leading-relaxed mb-4">Your data fuels our precision. We utilize collected information to:</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                        <li>Deliver and optimize our digital marketing services.</li>
                        <li>Communicate effectively regarding your projects and inquiries.</li>
                        <li>Analyze website performance and user experience.</li>
                        <li>Fulfill legal and regulatory obligations.</li>
                    </ul>
                </div>
                <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 shadow-lg border border-gray-700 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-blue-300">Have Questions?</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        We're here to provide clarity. If you have any concerns or require further information regarding your privacy, please don't hesitate to reach out.
                    </p>
                    <a
                        href="mailto:ozgur@scalvate.com"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                        Contact Privacy Officer
                        <svg className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy

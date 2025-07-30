import { Link } from 'react-router-dom'
import { socials } from '../constants/index.jsx'

const Footer = () => {
    return (
        <footer className="g7 relative z-2">
            <div className="container py-10 ">
                <div className="flex w-full max-md:flex-col">
                    <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
                        <p className="opacity-70">&copy; {new Date().getFullYear()} Scalvate. All rights reserved.</p>
                    </div>
                    <div className="flex items-center justify-center sm:ml-auto">
                        <Link to="/privacy-policy" className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-of-use" className="text-p5 transition-all duration-500 hover:text-p1">
                            Terms of Use
                        </Link>
                    </div>

                    <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
                        {socials.map(({ id, url, icon, title }) => (
                            <li key={id}>
                                <a href={url} className="social-icon m-1" target="_blank" rel="noopener noreferrer">
                                    <img src={icon} alt={title} className="size-6 object-contain" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const NavLink = ({ title }) => {
        const handleClick = () => {
            setIsOpen(false)
        }

        return (
            <Link onClick={handleClick} className="base-bold text-p4 uppercase transition-colors duration-300 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h-5" to={`/#${title}`}>
                {title}
            </Link>
        )
    }

    const LogoLinkComponent = ({ isMobile }) => {
        const commonProps = {
            className: clsx(isMobile ? 'lg:hidden flex-1' : 'max-lg:hidden transition-transform duration-300', 'cursor-pointer z-2'),
            onClick: () => setIsOpen(false),
        }

        return (
            <Link {...commonProps} to="/#hero">
                <img src="/images/company-logo.png" width={isMobile ? 115 : 120} height={55} alt="Logo" />
            </Link>
        )
    }

    return (
        <header className={clsx('fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4', hasScrolled && 'py-4 bg-black-100 backdrop-blur-[8px] bg-opacity-60')}>
            <div className="container flex h-14 items-center max-lg:px-5">
                <LogoLinkComponent isMobile={true} />
                <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0', isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none')}>
                    <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                        <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                            <ul className="flex max-lg:block max-lg:px-12">
                                <li className="nav-li">
                                    <NavLink title="services" />
                                    <div className="dot" />
                                    <NavLink title="pricing" />
                                </li>
                                <li className="nav-logo">
                                    <LogoLinkComponent isMobile={false} />
                                </li>
                                <li className="nav-li">
                                    <NavLink title="faq" />
                                    <div className="dot" />
                                    <NavLink title="testimonials" />
                                </li>
                            </ul>
                        </nav>
                        <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                            <img src="/images/bg-outlines.svg" width={960} height={380} alt="Outline" className="relative z-2" />
                            <img src="/images/bg-outlines-fill.png" width={960} height={380} alt="Outline" className="absolute inset-0 mix-blend-soft-light opacity-5" />
                        </div>
                    </div>
                </div>
                <button onClick={() => setIsOpen((prevState) => !prevState)} className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center">
                    <img src={`/images/${isOpen ? 'close' : 'magic'}.svg`} alt="Magic" className="size-1/2 object-contain" />
                </button>
            </div>
        </header>
    )
}

export default Header

import clsx from 'clsx'
import Marker from './Marker'

const Button = ({ icon, children, href, containerClassName, onClick, markerFill }) => {
    const Inner = () => (
        <>
            <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
                <span className="absolute -left-[-1px]">
                    <Marker markerFill={markerFill} />
                </span>
                {icon && <img src={icon} alt="circle" className="size-10 mr-5 object-contain z-10" />}
                <span className="relative z-2 font-poppins base-bold text-p1 uppercase">{children}</span>
            </span>
            <span className="glow-before" />
        </>
    )

    return (
        <a className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group inline-flex', containerClassName)} href="https://calendly.com/ozgurdemirbacak/growth-call" target="_blank">
            <Inner />
        </a>
    )
}

export default Button

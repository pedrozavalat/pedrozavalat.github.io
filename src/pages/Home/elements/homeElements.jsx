import { IoIosArrowDropdownCircle } from "react-icons/io";
import './homeElements.css';
import { useEffect, useState } from "react";

export const HomeNavbar = ({ children, initPos }) => {
    return (
        <nav className={`home-navbar ${initPos}`} >
            {children}
        </nav>
    );
}

export const ShowNavBar = ({ active, setActive, setInitPos }) => {
    const [bounce, setBounce] = useState(false);

    const handleNavbar = () => {
        if (!active) {
            setActive(true);
            setInitPos('show');
        } else {
            setActive(false);
            setInitPos('hide')
        }
        console.log(active);
    }
    useEffect(() => {
        if (!active) {
            const timer = setTimeout(() => {
                setBounce(true);
            }, 5000);
            return () => {
                clearTimeout(timer);
                setBounce(false);
            };
        }
    }, [active]);
    return (
        <button
            className={`show-navbar-button ${active ? 'active' : ''} ${bounce ? 'bounce' : ''}`}
            onClick={handleNavbar}>
            <IoIosArrowDropdownCircle className="icon" />
        </button>
    )
}
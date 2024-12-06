import './MenuIcon.css'
import { useNavbarContext } from '../NavbarContext';


function MenuIcon() {
    const { active, setActive, icon, setIcon, setCloseMenu } = useNavbarContext();
    
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
            setCloseMenu('open');
        } else {
            setActive("nav__menu")
            setCloseMenu('close')
        }

        if (icon === "nav__toggler") {
                setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    
    return (
        <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        
    )
}

export default MenuIcon
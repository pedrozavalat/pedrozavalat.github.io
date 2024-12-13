import MenuIcon from './MenuIcon.jsx';
import { handleMenuAction } from '../../../helpers/navbarHelper.jsx'
import { useNavbarContext } from "../NavbarContext.jsx";
import './Menu.css';


export const Menu = ({ children }) => {
    const { closeMenu } = useNavbarContext();
    return (
        <>
            <div className={`menu ${handleMenuAction(closeMenu)}`} >
                <MenuItems>
                    {children}
                </MenuItems>
            </div>
        </>
    )
}

const MenuItems = ({ children }) => {
    return (
        <>
            <MenuToggle />
            {children}
        </>
    )
}

export const MenuToggle = ({position}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', position: position }}>
            <MenuIcon />
        </div>
    )
}


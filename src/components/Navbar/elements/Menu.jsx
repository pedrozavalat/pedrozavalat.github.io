import MenuIcon from './MenuIcon.jsx';
import { handleMenuAction } from '../../../helpers/navbarHelper.jsx'
import { useNavbarContext } from "../NavbarContext.jsx";
import './Menu.css';


export const Menu = () => {
    const { closeMenu } = useNavbarContext();
    return (
        <>
        <div className= {`menu ${handleMenuAction(closeMenu)}`} >
            <MenuItems />
        </div>
        </>
    )
}

const MenuItems = () => {
    return (
        <>
            <MenuToggle />
            <a href="#general">General</a>
            <a href="#horarios">Horarios</a>
            <a href="#sobre-mi">Sobre mi</a>
            <a href="#formulario">Agendar</a>
            <a href="#contacto">Contacto</a>
        </>
    )
}

export const MenuToggle = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent:'end'}}>
        <MenuIcon />    
        </div>
    )
}


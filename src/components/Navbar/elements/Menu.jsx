import MenuIcon from './MenuIcon.jsx';
import { handleMenuAction } from '../../../helpers/navbarHelper.jsx'
import { useNavbarContext } from "../NavbarContext.jsx";
import './Menu.css';


export const Menu = () => {
    const { closeMenu } = useNavbarContext();
    const BASE_PATH = "#programming/"
    return (
        <>
            <div className={`menu ${handleMenuAction(closeMenu)}`} >
                <MenuItems basePath={BASE_PATH} />
            </div>
        </>
    )
}

const MenuItems = ({basePath}) => {
    return (
        <>
            <MenuToggle />
            <a href="#programming/#general">General</a>
            <a href="#programming/#horarios">Horarios</a>
            <a href="#programming/#sobre-mi">Sobre mi</a>
            <a href="#programming/#formulario">Agendar</a>
            <a href="#programming/#contacto">Contacto</a>
        </>
    )
}

export const MenuToggle = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <MenuIcon />
        </div>
    )
}


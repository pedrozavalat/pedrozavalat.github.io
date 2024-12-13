import './NavBar.css'
import { NavbarProvider } from './NavbarContext.jsx';
import { Menu, MenuToggle } from './elements/Menu.jsx';

function NavBar({ children, menuTogglePos }) {

    return (
        <NavbarProvider>
            <MenuToggle position={menuTogglePos ? menuTogglePos : 'relative'} />
            <Menu>
                {children}
            </Menu>
        </NavbarProvider>
    );
};



export default NavBar;
import './NavBar.css'
import { NavbarProvider } from './NavbarContext.jsx';
import { Menu, MenuToggle }from './elements/Menu.jsx';

function NavBar() {

    return (
        <NavbarProvider>
            <MenuToggle />
            <Menu/>   
        </NavbarProvider>
    );
};



export default NavBar;
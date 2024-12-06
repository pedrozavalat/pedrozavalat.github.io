import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export function NavbarProvider({ children }){
    const [active, setActive] = useState('nav__menu');
    const [icon, setIcon] = useState('nav__toggler');
    const [closeMenu, setCloseMenu] = useState('initial');
    
    return (
        <NavbarContext.Provider value = {
            { 
                active, 
                setActive, 
                icon, 
                setIcon, 
                closeMenu, 
                setCloseMenu
            }
        }>
            {children}
        </NavbarContext.Provider>
    );
};

export const useNavbarContext = () => useContext(NavbarContext);
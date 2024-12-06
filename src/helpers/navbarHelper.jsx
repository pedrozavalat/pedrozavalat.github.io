export const handleMenuAction = (closeMenu) => {
    
    if (closeMenu === 'initial') {
        return ''
    } else if (closeMenu === 'open') {
        return 'menu-open'
    } else if (closeMenu === 'close') {
        return 'menu-close'
    }
}

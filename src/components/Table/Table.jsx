import './Table.css';
import { ListToString } from '../../helpers/general.helper';
export const Row = ({ children, styles }) => {
    return (
        <div className={`row ${styles ? ListToString(styles) : ''}`}>
            {children}
        </div>
    );
}

export const Column = ({ children, styles }) => {
    return (
        <div className={`col ${styles ? ListToString(styles) : ''}`}>
            {children}
        </div>
    );
}
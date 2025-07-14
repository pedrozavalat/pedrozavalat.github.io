import './Card.css';
import { ListToString } from '../../helpers/general.helper';


export default function Card({ children, styles }) {
    return (
        <div className={`card ${styles ? ListToString(styles) : ''}`}>
            {children}
        </div>
    );
}
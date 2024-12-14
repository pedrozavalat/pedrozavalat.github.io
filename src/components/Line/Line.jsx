import './Line.css';
import { ListToString } from '../../helpers/general.helper';

export default function Line({ children, styles }) {
    return (
        <div className={`line ${styles ? ListToString(styles) : ''}`}>
            {children}
        </div>
    )
}
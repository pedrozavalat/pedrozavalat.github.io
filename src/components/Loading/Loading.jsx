import loadingGif from '../../../public/loading.gif'
import './Loading.css';

export default function Loading() {
    const gifStyle = {
        margin: '0 auto',
        padding: '2rem', 
        position: 'absolute', 
        top: '50%',
        left: '50%',
        display: 'block',
        width: '12rem',
        height: '12rem',
        transform: 'translate(-50%, -50%);'
    }

    return (
        <div className="loading">
            <img src={loadingGif} />
        </div>
    );
}
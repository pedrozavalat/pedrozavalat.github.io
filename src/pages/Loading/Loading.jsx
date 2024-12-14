import loadingGif from '../../../public/gif/loading.gif';
import './Loading.css';

export default function Loading() {
    return (
        <div className='loading-background'>
            <img className="loading-gif" src={loadingGif} />
        </div>
    );
}
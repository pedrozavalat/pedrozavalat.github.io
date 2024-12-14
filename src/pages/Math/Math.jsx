import ImgOverview from '../../../public/wallpaper.png';
import './Math.css';
import Horario from '../../components/Horario/Horario';
import '../../styles/buttons.css';
import NavBar from '../../components/Navbar/Navbar';
const MathOverview = () => {
    return (
        <div style={{ display: 'flex', height: '120vh' }}>
            <article className='math-background-card'>
                <h1>Clases particulares de matemáticas</h1>
                <p>
                    Ofrezco clases particulares de matemáticas para estudiantes de enseñanza media.
                    Clases totalmente personalizadas segun las preferencias del estudiante.

                    Ayuda y fortalecimiento en contenidos matemáticos para estudiantes de enseñanza media.
                </p>
                <div style={{ display: 'flex', gap: '2rem', paddingTop: '1rem' }}>
                    <button className='button-77'>Horarios</button>
                    <button className='button-78'>Precios</button>
                </div>
            </article>
            <circle cx="50" cy="50" r="50" />
            <img className="math-landing-page-img" src={ImgOverview} alt="Math tutories" />
        </div>
    )
}


const MathAvailability = () => {
    return (
        <section className='info-container'>
            <h1>Horario Disponibles</h1>
            <p>Idealmente agendar con <span className='bolder'>3 días de anticipación</span>. </p>
            <div className="card">
                <Horario />
            </div>
        </section>
    )
}

export default function Math() {
    return (
        <div className='math-background'>
            <NavBar>
                
            </NavBar>
            <MathOverview />
            <MathAvailability />
        </div>
    )
}
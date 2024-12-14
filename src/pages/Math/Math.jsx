import '../../styles/buttons.css';
import './Math.css';
import ImgOverview from '../../../public/wallpaper.png';
import Horario from '../../components/Horario/Horario';
import Card from '../../components/Card/Card';
import myImg from '../../../public/me.jpg';
import { Row, Column } from '../../components/Table/Table';
import { FaLightbulb } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdMail } from 'react-icons/md';

const MathNavbar = ({ children }) => {
    return (
        <nav className='math-navbar'>
            {children}
        </nav>
    )
}

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
                    <button className='button-77'><Link to={'/'}>Comenzar ya</Link></button>

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
            <Card styles={['container-math-1']}>
                <Horario />
            </Card>
        </section>
    )
}

export const MathPrices = () => {
    return (
        <>
            <h1>Modalidades y Precios</h1>
            <Card styles={['container-math-1']}>
                <Row>
                    <Column styles={['container-math-2']}>
                        <h3>Modalidad Online</h3>
                        <p>$20.000 por hora</p>
                    </Column>
                    <Column styles={['container-math-2']}>
                        <h3>Modalidad Presencial (*)</h3>
                        <p>$25.000 por hora</p>
                    </Column>
                </Row>
                <Row>
                    <span><p><FaLightbulb size={20} style={{ margin: '0 5px' }} />Solamente en lugares como: Chicureo, Colina, Batuco y alrededores.</p></span>
                </Row>
            </Card>
        </>
    )
}

export const MathProfile = () => {
    return (
        <>
            <h1>Sobre mi </h1>
            <Card styles={['container-math-1']}>
                <Row>
                    <Column>
                        <img src={myImg} alt="Imagen Pedro Zavala" />
                    </Column>
                    <Column>
                        <p>
                            Actualmente, soy estudiante de cuarto año de Ingeniería Civil en la Pontificia Universidad Católica de Chile, especializado en el área de Computación y Ciencias de Datos.
                        </p>
                        <p>
                            Tengo experiencia en docencia, siendo ayudante en ramos de computación y dando clases particulares de matemáticas.
                        </p>
                    </Column>
                </Row>
                <Row>
                    <button className='button-78'>
                        <Link to={'/'}>Más Información acá</Link>
                    </button>
                </Row>

            </Card>
        </>
    );
}

export const MathContact = () => {
    const generateWhatsAppLink = (phoneNumber, message) => {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    }
    const phoneNumber = '56952231388';
    const message = 'Hola! Me gustaría saber si es posible agendar una clase de matemáticas. ¿Tienes disponibilidad?, Saludos!';
    const whatsAppLink = generateWhatsAppLink(phoneNumber, message);

    return (
        <>
            <h1>Contacto</h1>
            <Card styles={['container-math-1']}>
                <Row>
                    <Column>
                        <h2>WhatsApp</h2>
                        <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={50} />
                        </a>
                    </Column>
                    <Column>
                        <h2>Email</h2>
                        <a href="mailto:pedropablozavalat@uc.cl">
                            <MdMail size={50} />
                        </a>
                    </Column>
                    <Column>
                        <h2>Linkedin</h2>
                        <a href="https://www.linkedin.com/in/pedro-pablo-zavala-tejos-671203244/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={50} />
                        </a>
                    </Column>
                </Row>
            </Card>
        </>
    );
}




export default function Math() {
    return (
        <div className='math-background'>
            <MathNavbar>
                <a href=''>Precios</a>
                <a>Horarios</a>
                <a>Sobre mi</a>
                <a>Contacto</a>
            </MathNavbar>
            <MathOverview />
            <MathPrices />
            <MathAvailability />
            <MathProfile />
            <MathContact />
        </div>
    )
}
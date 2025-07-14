
import '../Home/Home.css'
import './Programming.css'
import "animate.css/animate.min.css";
import Font from 'react-font';
import ProgrammingForm from './elements/ProgrammingForm';
import NavBar from '../../components/Navbar/Navbar'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import {
    ProgrammingAvailability,
    ProgrammingContact,
    ProgrammingExperience,
    ProgrammingPrices,
    ProgrammingHeader,
    ProgrammingGeneral
} from './elements/ProgrammingElements';


function Programming() {
    return (
        <div class="programming-background">
            <NavBar>
                <a href="#programming/#general">General</a>
                <a href="#programming/#horarios">Horarios</a>
                <a href="#programming/#sobre-mi">Sobre mi</a>
                <a href="#programming/#formulario">Agendar</a>
                <a href="#programming/#contacto">Contacto</a>
                <Link to={'/'}>Inicio</Link>
            </NavBar>

            <Font family='Raleway'>
                <ProgrammingHeader />
                <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true} offset={500}>
                    <ProgrammingGeneral generalId={"programming/#general"} />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true} offset={500}>
                    <ProgrammingPrices />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true} offset={500}>
                    <ProgrammingAvailability />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true} offset={500}>
                    <ProgrammingExperience />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true} offset={500}>
                    <ProgrammingForm />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true} offset={200}>
                    <h1>Contacto </h1>
                    <ProgrammingContact />
                </AnimationOnScroll>
            </Font>
        </div>
    )
}

export default Programming;
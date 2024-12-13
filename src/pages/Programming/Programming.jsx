import Info from '../../components/Info/Info'
import NavBar from '../../components/Navbar/Navbar'
import '../Home/Home.css'
import './Programming.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Font, { Text } from 'react-font';
import Form from '../../components/Form/Form';
import { Header, General, Contact, Experience, Availability, Prices } from '../../components/Info/Info';


function Programming() {
    return (
        <div class="programming-background">
            <NavBar>
                <a href="#programming/#general">General</a>
                <a href="#programming/#horarios">Horarios</a>
                <a href="#programming/#sobre-mi">Sobre mi</a>
                <a href="#programming/#formulario">Agendar</a>
                <a href="#programming/#contacto">Contacto</a>
                <a href="/">Inicio</a>
            </NavBar>

            <Font family='Raleway'>
                <Header />

                <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true} offset={500}>
                    <General generalId={"programming/#general"}/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true} offset={500}>
                    <Prices />
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true} offset={500}>
                    <Availability />
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true} offset={500}>
                    <Experience />
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true} offset={500}>
                    <Form />
                </AnimationOnScroll>


                <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true} offset={200}>
                    <h1>Contacto </h1>
                    <Contact showWhatsApp={true} showResume={false} />
                </AnimationOnScroll>


            </Font>
        </div>
    )
}

export default Programming;
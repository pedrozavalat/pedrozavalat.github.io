import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [formData, setFormData] = useState({
        tipoDeClase: 'tareas-proyecto',
        contenidos: [],
        dominacion: 0,
        comentarios: '',
    });

    const handleRadioChange = (event) => {
        setFormData({ ...formData, tipoDeClase: event.target.value });
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFormData((prevState) => {
            const newContenidos = checked
                ? [...prevState.contenidos, name]
                : prevState.contenidos.filter((contenido) => contenido !== name);
            return { ...prevState, contenidos: newContenidos };
        });
    };

    const handleRangeChange = (event) => {
        setFormData({ ...formData, dominacion: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const dominacion = parseInt(formData.dominacion) + 1;
        formData.dominacion = dominacion;
        const contenidosList = formData.contenidos.length > 0
            ? formData.contenidos.map(contenido => `- ${contenido}`).join('\n')
            : 'No especificado';
        
        const whatsappMessage = `
Hola!, me gustaría agendar una clase de programación en Python :)

*Tipo de clase*
-> ${formData.tipoDeClase}
*Contenidos*
${contenidosList}
*Dominación*
-> ${formData.dominacion}
*Comentarios*
${formData.comentarios || 'No especificado'}
`
        const telefono = '56952231388';
        const whatsappLink = `https://wa.me/${telefono}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');

    };

    return (
        <>
            <h1 id='programming/#formulario'>Agendar una clase</h1>
            <p>Especifica todos los aspectos que necesitas para tu clase en este formulario y envía la información directamente 🎉</p>
            <form className="card" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Tipo de clase</legend>
                    <label htmlFor="tareas-proyecto">
                        <input
                            id="tareas-proyecto"
                            type="radio"
                            name="tipo-de-clases"
                            value="tareas-proyecto"
                            defaultChecked
                            required
                            onChange={handleRadioChange}
                        />
                        Resolver dudas en Tarea o Proyecto
                    </label>
                    <label htmlFor="aprendizaje">
                        <input
                            id="aprendizaje"
                            type="radio"
                            name="tipo-de-clases"
                            value="aprendizaje"
                            onChange={handleRadioChange}
                        />
                        Aprendizaje (clase más teorica)
                    </label>
                    <label htmlFor="ejercitacion">
                        <input
                            id="ejercitacion"
                            type="radio"
                            name="tipo-de-clases"
                            value="ejercitacion"
                            onChange={handleRadioChange}
                        />
                        Full Ejercitación (clase más práctica)
                    </label>
                    <label htmlFor="aprendizaje-ejercitacion">
                        <input
                            id="aprendizaje-ejercitacion"
                            type="radio"
                            name="tipo-de-clases"
                            value="aprendizaje-ejercitacion"
                            onChange={handleRadioChange}
                        />
                        Aprendizaje y ejercicios (mezcla clase teorica y práctica)
                    </label>
                </fieldset>

                <fieldset>
                    <p>
                        Si necesitas una clase de Aprendizaje o Ejercitación, selecciona todos los contenidos más importantes que necesitas repasar.
                    </p>
                    <legend>Contenidos</legend>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>
                            <label htmlFor="contenido-1">
                                <input
                                    className="inline"
                                    id="contenido-1"
                                    type="checkbox"
                                    name="Tipos de datos y operadores"
                                    onChange={handleCheckboxChange}
                                />
                                Tipos de datos y operadores
                            </label>
                        </li>
                        <li>
                            <label htmlFor="contenido-2">
                                <input
                                    className="inline"
                                    id="contenido-2"
                                    type="checkbox"
                                    name="Control de flujo"
                                    onChange={handleCheckboxChange}
                                />
                                Control de flujo
                            </label>
                        </li>
                        <li>
                            <label htmlFor="contenido-3">
                                <input
                                    className="inline"
                                    id="contenido-3"
                                    type="checkbox"
                                    name="Iteraciones"
                                    onChange={handleCheckboxChange}
                                />
                                Iteraciones
                            </label>
                        </li>
                        <li>
                            <label htmlFor="contenido-4">
                                <input
                                    className="inline"
                                    id="contenido-4"
                                    type="checkbox"
                                    name="Funciones"
                                    onChange={handleCheckboxChange}
                                />
                                Funciones
                            </label>
                        </li>
                        <li>
                            <label htmlFor="contenido-5">
                                <input
                                    className="inline"
                                    id="contenido-5"
                                    type="checkbox"
                                    name="Recursión"
                                    onChange={handleCheckboxChange}
                                />
                                Recursión
                            </label>
                        </li>
                        <li>
                            <label htmlFor="contenido-6">
                                <input
                                    className="inline"
                                    id="contenido-6"
                                    type="checkbox"
                                    name="Strings"
                                    onChange={handleCheckboxChange}
                                />
                                Strings
                            </label>
                        </li>
                        <li>
                            <label htmlFor="contenido-7">
                                <input
                                    className="inline"
                                    id="contenido-7"
                                    type="checkbox"
                                    name="Listas"
                                    onChange={handleCheckboxChange}
                                />
                                Listas
                            </label>
                        </li>
                        <li>
                            <label htmlFor="contenido-8">
                                <input
                                    className="inline"
                                    id="contenido-8"
                                    type="checkbox"
                                    name="Archivos"
                                    onChange={handleCheckboxChange}
                                />
                                Archivos
                            </label>
                        </li>
                        <li>
                            <label htmlFor="contenido-9">
                                <input
                                    className="inline"
                                    id="contenido-9"
                                    type="checkbox"
                                    name="Programacion Orientada a Objetos"
                                    onChange={handleCheckboxChange}
                                />
                                Programacion Orientada a Objetos
                            </label>
                        </li>
                    </ul>
                </fieldset>

                <fieldset>
                    <legend>Evaluacion</legend>
                    <p>Del 1 al 5, ¿cuánto dominas los contenidos?</p>
                    <input
                        type="range"
                        name="dominacion"
                        id="dominacion"
                        min={0}
                        max={4}
                        value={formData.dominacion}
                        onChange={handleRangeChange}
                        style={{ width: '100%' }}
                    />
                    <ul style={{ display: 'flex', padding: 0, listStyle: 'none', justifyContent: 'space-between' }}>
                        {Array.from({ length: 5 }, (_, i) => (
                            <li key={i + 1} style={{ textAlign: 'left' }}>{i + 1}</li>
                        ))}
                    </ul>
                </fieldset>

                <fieldset>
                    <legend>Comentario Adicional</legend>
                    <label htmlFor="comments">
                        <textarea
                            id="comments"
                            name="comments"
                            rows="3"
                            cols="30"
                            placeholder="Me gustaría que la clase este más enfocada en clases y objetos ..."
                            onChange={(event) => setFormData({ ...formData, comentarios: event.target.value })}
                            
                        ></textarea>
                    </label>
                </fieldset>
                <input type="submit" value="Enviar mensaje" />
            </form>
        </>
    );
}

export default Form;
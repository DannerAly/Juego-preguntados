import React, { useState, useEffect, useC } from "react"; // Importamos React y los hooks useState y useEffect
import Correcta from './Juego/Correcta'; // Importamos el componente Correcta
import Incorrecta from './Juego/Incorrecta'; // Importamos el componente Incorrecta
import Perdiste from './Juego/Perdiste'; // Importamos el componente Perdiste
import Ganaste from './Juego/Ganaste'; // Importamos el componente Ganaste
import Puntaje from './Juego/Puntaje'; // Importamos el componente Puntaje
import Vidas from './Juego/Vidas'; // Importamos el componente Vidas
import { motion } from 'framer-motion'; // Importamos motion de framer-motion para animaciones (aunque no se usa en este ejemplo)

import correctAudioSrc from "./Juego/sounds/Correcto.mp3"; // Importamos el sonido correcto
import incorrectAudioSrc from "./Juego/sounds/Incorrecto.mp3"; // Importamos el sonido incorrecto
import ganasteAudioSrc from "./Juego/sounds/Ganaste.mp3"; // Importamos el sonido de ganaste

export default function Juego() {
    // Definimos las preguntas en un array de objetos
    const Preguntas = [
        { pregunta: '¿Qué es la economía circular?', Respuestas: ["Una forma de ganar más dinero con productos nuevos", "Un sistema financiero basado en petróleo", "Un modelo de producción y consumo que busca reducir, reutilizar y reciclar"], Correcta: 2 },
        { pregunta: '¿Cuál es el principal gas de efecto invernadero responsable del calentamiento global?', Respuestas: ["Oxígeno", "Dióxido de carbono (CO₂)", "Nitrógeno"], Correcta: 1 },
        { pregunta: '¿Cuál es la mejor forma de reducir la cantidad de residuos que generamos?', Respuestas: ["Reciclar", "Reducir", "Reutilizar"], Correcta: 1 },
        { pregunta: '¿Cuál de estos ecosistemas absorbe más CO₂ de la atmósfera?', Respuestas: ["Los desiertos", "Los bosques tropicales", "Las montañas"], Correcta: 1 },
        { pregunta: '¿Cómo afecta la contaminación lumínica al medio ambiente?', Respuestas: ["Dificulta la observación de las estrellas y afecta a los animales nocturnos", "Hace que los árboles crezcan más rápido", "Mejora la visibilidad en las ciudades"], Correcta: 0 },
        { pregunta: '¿Por qué es importante reducir el uso de plástico?', Respuestas: ["Porque los plásticos contaminan los océanos", "Porque ocupan mucho espacio en casa", "Porque son muy caros de producir"], Correcta: 0 },
        { pregunta: '¿Cuál es el mayor causante de la deforestación en el mundo?', Respuestas: ["El turismo", "La ganadería y la agricultura", "La minería"], Correcta: 1 },
        { pregunta: '¿Cuál es una fuente de energía renovable?', Respuestas: ["Gas natural", "Carbón", "Energía solar"], Correcta: 2 },
        { pregunta: '¿Qué significa la regla de las 3R en ecología?', Respuestas: ["Reciclar, reutilizar y reducir", "Restaurar, recoger y relajar", "Recortar, reducir y renovar"], Correcta: 0 },
        { pregunta: '¿Por qué el consumo de carne roja impacta al medio ambiente?', Respuestas: ["Porque la carne es cara", "Porque requiere grandes cantidades de agua y produce gases de efecto invernadero", "Porque los animales son difíciles de criar"], Correcta: 1 },
        { pregunta: '¿Cuál de estas acciones contribuye a un desarrollo más sostenible?', Respuestas: ["Comprar productos locales y de temporada", "Encender luces innecesarias", "Usar más plástico desechable"], Correcta: 0 },
        { pregunta: '¿Cuál es el metal más reciclado en el mundo?', Respuestas: ["Hierro", "Aluminio", "Oro"], Correcta: 1 },
        { pregunta: '¿Cuál es la mejor forma de reducir nuestra huella de carbono?', Respuestas: ["Usando más autos a gasolina", "Encendiendo todas las luces de la casa", "Utilizando bicicleta o transporte público"], Correcta: 2 },
        { pregunta: '¿Por qué es importante reciclar papel?', Respuestas: ["Porque ocupa espacio en la basura", "Porque se vuelve más blanco", "Porque reduce la tala de árboles"], Correcta: 2 },
        { pregunta: '¿Qué porcentaje del agua en la Tierra es dulce y disponible para el consumo humano?', Respuestas: ["50%", "2.5%", "10%"], Correcta: 1 },
        { pregunta: '¿Cuál es el objetivo principal de la educación ambiental?', Respuestas: ["Eliminar la biodiversidad", "Promover el uso de combustibles fósiles", "Concienciar y educar sobre el cuidado del medio ambiente"], Correcta: 2 },
        { pregunta: '¿Qué es la biodiversidad?', Respuestas: ["El número de especies en peligro de extinción", "La variedad de seres vivos en un ecosistema", "El tamaño de un bosque"], Correcta: 1 },
        { pregunta: '¿Cuál es el mayor problema del derretimiento de los polos?', Respuestas: ["Reduce el nivel del mar", "Aumenta la producción de energía", "Amenaza especies como el pingüino emperador"], Correcta: 2 },
        { pregunta: '¿Por qué es importante proteger los océanos?', Respuestas: ["Porque generan oxígeno y regulan el clima", "Porque evitan el crecimiento de bosques", "Porque el agua de mar se puede beber"], Correcta: 0 },
        { pregunta: '¿Qué significa la huella ecológica?', Respuestas: ["El impacto ambiental de una persona según su consumo de recursos", "El tamaño de una reserva natural", "La cantidad de árboles en un bosque"], Correcta: 0 },
        { pregunta: '¿Qué representa la Hora del Planeta?', Respuestas: ["Un evento que refuerza el compromiso con reducir el consumo energético", "Un día sin automóviles", "Una competencia sobre ahorro de agua"], Correcta: 0 },
        { pregunta: '¿Qué acción diaria ayuda más a reducir el consumo de energía en casa?', Respuestas: ["Usar focos LED", "Dejar la tele en modo espera", "Cargar el celular toda la noche"], Correcta: 0 },
        { pregunta: '¿Qué significa el concepto de desarrollo sostenible?', Respuestas: ["Desarrollar más infraestructura sin restricciones", "Satisfacer las necesidades actuales sin comprometer a las generaciones futuras", "Aumentar la producción de energía a cualquier costo"], Correcta: 1 },
        { pregunta: '¿Qué es el ecoturismo?', Respuestas: ["Turismo que respeta el medio ambiente y las comunidades locales", "Turismo que solo visita parques nacionales", "Viajar sin gastar dinero"], Correcta: 0 },
        { pregunta: '¿Cómo podemos ahorrar agua en casa?', Respuestas: ["Lavar el auto con una manguera", "Dejar correr el agua al lavar los platos", "Cerrando la llave mientras te cepillas los dientes"], Correcta: 2 },
        { pregunta: '¿Por qué es importante la polinización?', Respuestas: ["Porque permite la reproducción de muchas plantas y cultivos", "Porque los insectos necesitan alimento", "Porque aumenta la cantidad de hojas en los árboles"], Correcta: 0 },
        { pregunta: '¿Cuánto tiempo tarda en degradarse una botella de plástico en la naturaleza?', Respuestas: ["450 años", "50 años", "10 años"], Correcta: 0 }
    ];
    
    

    // Estado para almacenar la pregunta aleatoria seleccionada
    const [preguntaAleatoria, setPreguntaAleatoria] = useState(null);
    // Estado para almacenar si la respuesta es correcta o incorrecta
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(null);
    // Estado para controlar la visibilidad del mensaje de alerta
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    const [perdiste, setPerdiste] = useState(false);

    const [ganaste, setGanaste] = useState(false);

    const [puntaje, setPuntaje] = useState(0);

    const [vidas, setVidas] = useState(3);

    useEffect(() => {
        seleccionarPreguntaAleatoria();
    }, []); // El array vacío [] asegura que esto solo se ejecute una vez

    // Función para seleccionar una pregunta aleatoria
    function seleccionarPreguntaAleatoria() {
        const indiceAleatorio = Math.floor(Math.random() * Preguntas.length);
        setPreguntaAleatoria(Preguntas[indiceAleatorio]);
    }

    // Función para verificar la respuesta seleccionada
    function verifyAnwser(index_respuesta) {
        const correctAudio = new Audio(correctAudioSrc); // Crea un nuevo objeto Audio con el sonido correcto
        const incorrectAudio = new Audio(incorrectAudioSrc); // Crea un nuevo objeto Audio con el sonido incorrecto
        const ganasteAudio = new Audio(ganasteAudioSrc); // Crea un nuevo objeto Audio con el sonido de ganaste
        // Comprueba si la respuesta seleccionada es la correcta
        if (index_respuesta === preguntaAleatoria.Correcta) {
            setRespuestaCorrecta(true);
            seleccionarPreguntaAleatoria();
            correctAudio.play();
            setPuntaje(puntaje + 1);
            if (puntaje + 1 === 6) { // Cambiado a puntaje + 1 para que se active correctamente al llegar a 6
                ganasteAudio.play();
                setPreguntaAleatoria(null);
                setGanaste(true);
            }
        } else {
            setRespuestaCorrecta(false);
            incorrectAudio.play();
            const nuevasVidas = vidas - 1;
            setVidas(nuevasVidas);
            if (nuevasVidas === 0) {
                setPerdiste(true);
            }
        }
        // Muestra el mensaje de alerta
        setMostrarMensaje(true);
        // Oculta el mensaje de alerta después de 2 segundos
        setTimeout(() => {
            setMostrarMensaje(false);
            if (vidas - 1 > 0) {
                seleccionarPreguntaAleatoria(); // Selecciona una nueva pregunta aleatoria
            }
        }, 1500);
    }

    function reiniciarJuego(){
        setPerdiste(false);
        setGanaste(false);
        setPuntaje(0);
        setVidas(3);
        seleccionarPreguntaAleatoria();
    };

    return (
        // Contenedor principal con estilos para centrar su contenido
        <div style={{
            display: 'flex', // Usamos flexbox para centrar
            justifyContent: 'center', // Centra horizontalmente
            alignItems: 'center', // Centra verticalmente
            height: '50vh', // Ocupa toda la altura de la ventana
            paddingTop: '120px', // Espacio superior adicional
            position: 'relative' // Posicionamiento relativo para el contenedor principal
        }}>
            <div style={{
                display: 'flex', // Usamos flexbox para centrar el contenido interno
                flexDirection: 'column', // Coloca los elementos en una columna
                justifyContent: 'center', // Centra verticalmente
                alignItems: 'center', // Centra horizontalmente
            }}>
                {!ganaste && (
                    <>
                        <h1>Pregunta:</h1>
                        {/* Si hay una pregunta aleatoria seleccionada, la mostramos */}
                        {preguntaAleatoria && !perdiste && (
                            <div>
                                <h3 style={{
                                    textAlign: 'center',
                                    paddingRight: '50px',
                                    paddingLeft: '50px',
                                }}>
                                    {preguntaAleatoria.pregunta}
                                </h3>
                                <div>
                                    {/* Mapeamos las respuestas de la pregunta aleatoria para mostrarlas como botones */}
                                    {preguntaAleatoria.Respuestas.map((respuesta, index) => (
                                        <div key={index} style={{
                                            textAlign: 'center',
                                            paddingRight: '50px',
                                            paddingLeft: '50px',
                                        }}>
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ rotate: 180, scale: 1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 260,
                                                    damping: 20
                                                }}>
                                                <button
                                                    onClick={() => verifyAnwser(index)} // Llama a verifyAnwser con el índice de la respuesta seleccionada
                                                    style={{
                                                        padding: '10px',
                                                        margin: '10px',
                                                        width: '200px',
                                                        backgroundColor: '#3DB539',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        borderRadius: '5px',
                                                        color: 'white',
                                                        fontSize: '18px',
                                                        transform: 'rotate(180deg)' // Rota el botón 180 grados
                                                    }}
                                                >
                                                    {respuesta}
                                                </button>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{
                                    display: 'flex', // Usamos flexbox para centrar
                                    flexDirection: 'column', // Coloca los elementos en una columna
                                    justifyContent: 'flex-end', // Alinea los elementos al final del contenedor
                                    alignItems: 'center', // Centra horizontalmente
                                    textAlign: 'center',
                                    paddingRight: '20%',
                                    paddingLeft: '20%',
                                    paddingTop: '20px', // Agrega espacio en la parte superior para desplazar los componentes hacia abajo
                                }}>
                                    <h3>Puntaje</h3>
                                    <Puntaje puntaje={puntaje} />
                                    <Vidas vidas={vidas} />
                                </div>
                                {/* Mostramos el componente Correcta o Incorrecta basado en la respuesta */}
                                {mostrarMensaje && (
                                    <motion.div
                                        paddingTop='100px'
                                        initial={{ scale: 0 }}
                                        animate={{ rotate: 180, scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 20
                                        }}>
                                        <div style={{
                                            width: '200px', // Ancho del mensaje de alerta
                                            height: '300px', // Altura del mensaje de alerta
                                            position: 'absolute', // Posicionamiento absoluto para el mensaje de alerta
                                            top: '10px', // Posición en la parte superior
                                            left: '50%', // Centrado horizontalmente
                                            transform: 'translateX(-50%)', // Ajuste para centrar el mensaje
                                            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semitransparente
                                            color: 'white', // Color del texto
                                            padding: '10px 20px', // Espaciado interno
                                            borderRadius: '400px', // Bordes redondeados
                                            zIndex: 1000, // Asegura que el mensaje esté encima de todo
                                        }}>
                                            {respuestaCorrecta ? <Correcta /> : <Incorrecta />}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        )}
                    </>
                )}
                {perdiste && (
                    <div>
                        <Perdiste reiniciarJuego={reiniciarJuego} />
                    </div>
                )}
                {ganaste && (
                    <div>
                        <Ganaste reiniciarJuego={reiniciarJuego} />
                    </div>
                )}
            </div>
        </div>
    );
}
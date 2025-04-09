import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

export default function Juego() {
    // Definimos las preguntas
    const Preguntas = [
        { pregunta: 'Pregunta 1', Respuestas: ["Respuesta 1", "Respuesta 2", "Respuesta 3"], Correcta: "Respuesta 1" },
        { pregunta: 'Pregunta 2', Respuestas: ["Respuesta 1", "Respuesta 2", "Respuesta 3"], Correcta: "Respuesta 2" },
        { pregunta: 'Pregunta 3', Respuestas: ["Respuesta 1", "Respuesta 2", "Respuesta 3"], Correcta: "Respuesta 3" },
        { pregunta: 'Pregunta 4', Respuestas: ["Respuesta 1", "Respuesta 2", "Respuesta 3"], Correcta: "Respuesta 2" },
        { pregunta: 'Pregunta 5', Respuestas: ["Respuesta 1", "Respuesta 2", "Respuesta 3"], Correcta: "Respuesta 1" }
    ];

    // Estado para la pregunta actual y el índice de la pregunta
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(Preguntas[0]);
    const [message, setMessage] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // Efecto para actualizar la pregunta actual cuando el índice cambia
    useEffect(() => {
        setCurrentQuestion(Preguntas[currentQuestionIndex]);
    }, [currentQuestionIndex]);

    // Función para manejar la selección de una respuesta
    const handleAnswerClick = (answer) => {
        if (answer === currentQuestion.Correcta) {
            setMessage("Respuesta correcta");
        } else {
            setMessage("Respuesta incorrecta");
        }

        // Mostrar el mensaje
        setOpenSnackbar(true);

        // Esperar un momento antes de pasar a la siguiente pregunta
        setTimeout(() => {
            setMessage("");
            setOpenSnackbar(false);
            setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % Preguntas.length);
        }, 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5',
                position: 'relative'
            }}
        >
            <motion.div
                style={{
                    maxWidth: 600,
                    width: '100%',
                    padding: 20,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
            >
                <motion.h1
                    style={{
                        fontSize: '2rem',
                        marginBottom: '1rem',
                        textAlign: 'center'
                    }}
                >
                    PREGUNTADOS
                </motion.h1>
                <motion.h2
                    style={{
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        textAlign: 'center'
                    }}
                >
                    {currentQuestion.pregunta}
                </motion.h2>
                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}
                >
                    {currentQuestion.Respuestas.map((respuesta, index) => (
                        <motion.button
                            key={index}
                            onClick={() => handleAnswerClick(respuesta)}
                            style={{
                                padding: '10px 20px',
                                fontSize: '1rem',
                                borderRadius: 5,
                                border: 'none',
                                cursor: 'pointer',
                                backgroundColor: '#007bff',
                                color: 'white',
                                textTransform: 'none'
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {respuesta}
                        </motion.button>
                    ))}
                </motion.div>
            </motion.div>
            {openSnackbar && (
                <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1300
                    }}
                >
                    <motion.h3
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: '3rem'
                        }}
                    >
                        {message}
                    </motion.h3>
                </motion.div>
            )}
        </motion.div>
    );
}
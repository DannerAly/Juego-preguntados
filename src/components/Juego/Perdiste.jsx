import React from 'react';
import ckeck_gif from "./images/wrong.gif"; // Importamos el sonido correcto

export default function Correcta() {
    return (
        <div style={{
            color: 'red',
            fontSize: '20px',
            marginTop: '20px',
           
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center'
        }}>
            <img src={ckeck_gif} alt="check" />
            <h2>¡Perdiste!</h2>
            <h1>Te quedaste sin vidas</h1>
            <button
                style={{
                    backgroundColor: '#3DB539',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '20px',
                    fontSize: '16px',
                    textDecoration: 'none',
                    format: 'none'
                }}>
                <a href="/" 
                    style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}
                    >Volver a intentarlo</a>
            </button>

        </div>
    );
}
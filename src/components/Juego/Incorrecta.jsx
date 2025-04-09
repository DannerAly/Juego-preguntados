import React from 'react';
import ckeck_gif from "./images/wrong.gif"; // Importamos el sonido correcto

export default function Correcta() {
    return (
        <div style={{ 
                        color: 'red', 
                        fontSize: '20px', 
                        marginTop: '20px', 
                        transform: 'rotate(180deg)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center'}}>
            
            <img src={ckeck_gif} alt="check" />
            <h2>¡Incorrecto!</h2>

        </div>
    );
}
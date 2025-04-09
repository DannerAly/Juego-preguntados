import React from 'react';

export default function Puntaje({ puntaje }) {
    // Calcula el porcentaje de la barra de progreso basado en el puntaje
    const porcentaje = (puntaje / 6) * 100;

    return (
        <div style={{ width: '100%', backgroundColor: '#e0e0df', borderRadius: '5px', overflow: 'hidden' }}>
            <div
                style={{
                    width: `${porcentaje}%`,
                    height: '20px',
                    backgroundColor: '#3DB539',
                    textAlign: 'center',
                    lineHeight: '20px',
                    color: 'white',
                    borderRadius: '5px 0 0 5px',
                    transition: 'width 0.5s ease-in-out'
                }}
            >
                {puntaje} / 6
            </div>
        </div>
    );
}
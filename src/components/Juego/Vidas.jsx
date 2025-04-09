import React from "react";

export default function Vidas({ vidas }) {
    // Genera un array de corazones basado en el número de vidas
    const corazones = [];
    for (let i = 0; i < 3; i++) {
        if (i < vidas) {
            corazones.push(<span key={i} style={{ fontSize: '30px', margin: '0 5px' }}>❤️</span>);
        } else {
            corazones.push(<span key={i} style={{ fontSize: '30px', margin: '0 5px' }}>🤍</span>);
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {corazones}
        </div>
    );
}
import React from 'react'; // Importamos React
import NavListDrawer from "./NavListDrawer"; // Importamos el componente NavListDrawer
import { Button, Drawer, AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material'; // Importamos componentes de Material-UI
import MenuIcon from '@mui/icons-material/Menu'; // Importamos el icono de menú de Material-UI
import { useState } from 'react'; // Importamos el hook useState de React

// Definimos el componente Navbar que recibe navLinks como prop
export default function Navbar({ navLinks }) {
    // useState es un hook que nos permite añadir estado a un componente funcional
    // Aquí, estamos declarando una variable de estado llamada 'open' y una función para actualizarla llamada 'setOpen'
    // Inicialmente, 'open' es false, lo que significa que el Drawer (menú lateral) está cerrado
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* AppBar es un componente de Material-UI que representa la barra de navegación superior */}
            <AppBar
                position='static' // La barra de navegación no se desplaza con el contenido
                sx={{ bgcolor: 'white' }} // Establecemos el color de fondo a blanco usando sx (propiedad de estilo de Material-UI)
            >
                {/* Toolbar es un contenedor flexible para agrupar elementos dentro de la AppBar */}
                <Toolbar>
                    {/* IconButton es un botón que contiene un icono */}
                    <IconButton
                        color='inherit' // Color del icono
                        aria-label='menu' // Etiqueta accesible para el botón
                        onClick={() => setOpen(true)} // Cuando se hace clic, se llama a setOpen(true) para abrir el Drawer
                        sx={{ display: { xs: 'flex', sm: 'none' }, color: 'blue' }} // Solo se muestra en pantallas pequeñas (xs)
                    >
                        <MenuIcon></MenuIcon> {/* Icono de menú */}
                    </IconButton>
                    {/* Typography es un componente de Material-UI para texto */}
                    <Typography
                        variant="h6" // Variante de estilo del texto
                        sx={{ flexGrow: 1, color: 'blue' }} // El texto crece para ocupar el espacio disponible
                    >
                        <span style={{ fontWeight: 'bold' }}>PBACC</span> Chuquisaca {/* Texto de la barra de navegación */}
                    </Typography>

                    {/* Box es un contenedor flexible */}
                    <Box sx={{ display: { xs: 'none', sm: "block" } }}> {/* Solo se muestra en pantallas medianas y grandes */}
                        {/* Mapeamos los enlaces de navegación para crear botones */}
                        {navLinks.map(item => (
                            <Button
                                color='inherit' // Color del botón
                                key={item.title} // Clave única para cada botón
                                component="a" // El botón actúa como un enlace
                                href={item.path} // URL del enlace
                            >
                                {item.title} {/* Texto del botón */}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer es un componente de Material-UI que representa un menú lateral */}
            <Drawer
                open={open} // El estado 'open' determina si el Drawer está abierto o cerrado
                anchor='left' // El Drawer se desliza desde la izquierda
                onClose={() => setOpen(false)} // Cuando se cierra, se llama a setOpen(false) para cerrar el Drawer
                sx={{ display: { xs: 'flex', sm: 'none' } }} // Solo se muestra en pantallas pequeñas
            >
                {/* NavListDrawer es un componente que contiene la lista de navegación dentro del Drawer */}
                <NavListDrawer navLinks={navLinks} />
            </Drawer>
        </>
    );
}
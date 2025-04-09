import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';


export default function NavListDrawer({ navLinks }) {
    return (
        <Box sx={{ width: 250 }}>
            <nav>
                <List>
                    {
                        navLinks.map((item) => (
                            
                            <ListItem disablePadding key={item.title}>
                                <ListItemButton
                                    component="a"
                                    href= {item.path}
                                >
                                    
                                    <ListItemText>
                                        {item.title}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>

                        ))
                    }
                </List>
            </nav>
        </Box>
    );

}